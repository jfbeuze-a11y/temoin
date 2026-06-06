import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import QRCode from 'qrcode'
import { Header } from '../components/ui.jsx'
import { useApp } from '../context/AppContext.jsx'
import { useT } from '../lib/i18n.js'
import { generateSecret, otpauthURI, verifyTOTP } from '../lib/totp.js'
import { passwordIssues } from '../lib/account.js'

// Création d'un compte local optionnel : mot de passe 12+ caractères + MFA (TOTP).
export default function Compte() {
  const nav = useNavigate()
  const t = useT()
  const { createAccount } = useApp()
  const [secret] = useState(() => generateSecret())
  const [qr, setQr] = useState('')
  const [username, setUsername] = useState('')
  const [pwd, setPwd] = useState('')
  const [pwd2, setPwd2] = useState('')
  const [code, setCode] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    QRCode.toDataURL(otpauthURI(secret, username || 'Témoin'), { margin: 1, width: 220 }).then(setQr).catch(() => {})
  }, [secret, username])

  const issues = passwordIssues(pwd)

  async function submit(e) {
    e.preventDefault()
    setErr('')
    if (issues.length) return setErr(t('Le mot de passe doit faire au moins 12 caractères, avec majuscules, minuscules et chiffres.'))
    if (pwd !== pwd2) return setErr(t('Les deux mots de passe ne correspondent pas.'))
    setBusy(true)
    const ok = await verifyTOTP(secret, code)
    if (!ok) {
      setBusy(false)
      return setErr(t('Le code MFA est incorrect. Vérifie l’heure de ton téléphone et réessaie.'))
    }
    await createAccount(username, pwd, secret)
    setBusy(false)
    nav('/reglages')
  }

  return (
    <>
      <Header title="Compte sécurisé" back />
      <h1>{t('Créer un compte sécurisé')}</h1>
      <p className="lead">{t('Optionnel. Une couche de sécurité en plus : mot de passe fort et double authentification. Tout reste sur ton téléphone.')}</p>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>{t('1. Mot de passe')}</h3>
        <label htmlFor="user">{t('Identifiant (facultatif)')}</label>
        <input id="user" type="text" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="pwd">{t('Mot de passe (12 caractères minimum)')}</label>
        <input id="pwd" type="password" autoComplete="new-password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
        <label htmlFor="pwd2">{t('Confirme le mot de passe')}</label>
        <input id="pwd2" type="password" autoComplete="new-password" value={pwd2} onChange={(e) => setPwd2(e.target.value)} />
        <p className="faint" style={{ fontSize: '0.85rem' }}>
          {pwd.length === 0
            ? t('Au moins 12 caractères, avec majuscules, minuscules et chiffres.')
            : issues.length === 0
              ? '✓ ' + t('Mot de passe robuste.')
              : t('Encore : 12 caractères, majuscules, minuscules et chiffres.')}
        </p>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>{t('2. Double authentification (MFA)')}</h3>
        <p className="muted">{t('Scanne ce QR code avec ton application d’authentification (Google Authenticator, Authy…), ou saisis la clé à la main.')}</p>
        {qr && (
          <div className="center">
            <img src={qr} alt="QR code MFA" style={{ width: 200, height: 200, background: '#fff', borderRadius: 12, padding: 6 }} />
          </div>
        )}
        <p className="center" style={{ wordBreak: 'break-all', fontFamily: 'monospace', fontSize: '0.85rem' }}>{secret}</p>
        <label htmlFor="code">{t('Saisis le code à 6 chiffres pour confirmer')}</label>
        <input
          id="code"
          className="pin"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          autoComplete="off"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
        />
      </div>

      {err && <p style={{ color: 'var(--danger)' }}>{err}</p>}
      <form onSubmit={submit}>
        <button className="btn primary" disabled={busy}>{t('Activer mon compte sécurisé')}</button>
      </form>
      <p className="faint center" style={{ fontSize: '0.82rem', marginTop: 12 }}>
        {t('Le mot de passe ne peut pas être récupéré s’il est perdu : note-le en lieu sûr.')}
      </p>
    </>
  )
}
