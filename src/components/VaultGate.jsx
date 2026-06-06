import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { Icon } from './icons.jsx'
import { useT } from '../lib/i18n.js'

// Verrou local (EF-P03 / ENF-01) : protège le coffre-fort et le journal par un code.
// Onboarding sans compte conservé (EF-X02) : le code est purement local, jamais un « compte ».
export default function VaultGate({ children }) {
  const { adoKey, hasVault, createVault, unlockVault } = useApp()
  const t = useT()
  const [code, setCode] = useState('')
  const [code2, setCode2] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)

  if (adoKey) return children

  // Code : chiffres uniquement, 4 à 6 chiffres (EF-P03).
  const onlyDigits = (v) => v.replace(/\D/g, '').slice(0, 6)

  async function handleCreate(e) {
    e.preventDefault()
    setErr('')
    if (!/^\d{4,6}$/.test(code)) return setErr(t('Choisis un code de 4 à 6 chiffres.'))
    if (code !== code2) return setErr(t('Les deux codes ne correspondent pas.'))
    setBusy(true)
    await createVault(code)
    setBusy(false)
  }

  async function handleUnlock(e) {
    e.preventDefault()
    setErr('')
    setBusy(true)
    const ok = await unlockVault(code)
    setBusy(false)
    if (!ok) setErr(t('Code incorrect.'))
  }

  if (hasVault === null) return <p className="muted">…</p>

  return (
    <div className="card" role="dialog" aria-label="Verrouillage de l’espace privé">
      {hasVault ? (
        <form onSubmit={handleUnlock}>
          <h2 className="h-row" style={{ marginTop: 0 }}><Icon name="lock" size={22} /> {t('Espace verrouillé')}</h2>
          <p className="muted">{t('Entre ton code pour ouvrir ton coffre-fort.')}</p>
          <label htmlFor="code">{t('Code')}</label>
          <input
            id="code"
            className="pin"
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            autoComplete="off"
            value={code}
            onChange={(e) => setCode(onlyDigits(e.target.value))}
          />
          {err && <p style={{ color: 'var(--danger)' }}>{err}</p>}
          <button className="btn primary" disabled={busy}>{t('Déverrouiller')}</button>
        </form>
      ) : (
        <form onSubmit={handleCreate}>
          <h2 className="h-row" style={{ marginTop: 0 }}><Icon name="lock" size={22} /> {t('Créer ton code')}</h2>
          <p className="muted">
            {t('Ce code protège tes preuves et ton journal sur ce téléphone. Choisis-en un dont tu te souviendras : il ne peut pas être récupéré s’il est perdu (c’est ce qui garde tes données vraiment privées).')}
          </p>
          <p className="faint" style={{ fontSize: '0.85rem', marginTop: 0 }}>{t('4 à 6 chiffres.')}</p>
          <label htmlFor="code">{t('Nouveau code')}</label>
          <input id="code" className="pin" type="password" inputMode="numeric" pattern="[0-9]*" maxLength={6} autoComplete="off" value={code} onChange={(e) => setCode(onlyDigits(e.target.value))} />
          <label htmlFor="code2">{t('Confirme le code')}</label>
          <input id="code2" className="pin" type="password" inputMode="numeric" pattern="[0-9]*" maxLength={6} autoComplete="off" value={code2} onChange={(e) => setCode2(onlyDigits(e.target.value))} />
          {err && <p style={{ color: 'var(--danger)' }}>{err}</p>}
          <button className="btn primary" disabled={busy}>{t('Créer mon coffre-fort')}</button>
        </form>
      )}
    </div>
  )
}
