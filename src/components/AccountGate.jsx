import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { useT } from '../lib/i18n.js'
import { BrandMark, PanicButton, LangButton } from './ui.jsx'

// Verrou de compte OPTIONNEL : ne s'active que si l'utilisateur a créé un compte.
// L'app reste pleinement utilisable sans compte (accès en urgence préservé).
export default function AccountGate({ children }) {
  const { hasAccount, accountAuthed, loginAccount } = useApp()
  const t = useT()
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)

  if (!hasAccount || accountAuthed) return children

  async function submit(e) {
    e.preventDefault()
    setErr('')
    setBusy(true)
    const ok = await loginAccount(password, code)
    setBusy(false)
    if (!ok) setErr(t('Mot de passe ou code incorrect.'))
  }

  return (
    <div className="app">
      <header className="header">
        <span className="brand"><BrandMark /> Témoin</span>
        <span className="spacer" />
        <LangButton />
        <PanicButton />
      </header>
      <main className="content">
        <p className="eyebrow">{t('Compte sécurisé')}</p>
        <h1>{t('Se connecter')}</h1>
        <p className="lead">{t('Entre ton mot de passe et le code de ton application d’authentification.')}</p>
        <form className="card" onSubmit={submit}>
          <label htmlFor="pwd">{t('Mot de passe')}</label>
          <input id="pwd" type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="otp">{t('Code à 6 chiffres (MFA)')}</label>
          <input
            id="otp"
            type="text"
            className="pin"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            autoComplete="off"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          />
          {err && <p style={{ color: 'var(--danger)' }}>{err}</p>}
          <button className="btn primary" disabled={busy}>{t('Se connecter')}</button>
        </form>
      </main>
    </div>
  )
}
