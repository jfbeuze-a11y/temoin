import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/ui.jsx'
import { useApp } from '../context/AppContext.jsx'
import { langs, useT } from '../lib/i18n.js'
import { wipeAdoData } from '../lib/db.js'

// Socle transverse (M6) : compte, mode discret, thème, langue, accessibilité, effacement.
export default function Settings() {
  const { theme, setTheme, lang, setLang, discreet, setDiscreet, lockVault, setHasVault, hasAccount, logoutAccount, removeAccount } = useApp()
  const t = useT()
  const [wiped, setWiped] = useState(false)

  function handleRemoveAccount() {
    if (!confirm(t('Désactiver le compte sécurisé ? Tu pourras le recréer plus tard.'))) return
    removeAccount()
  }

  async function handleWipe() {
    if (!confirm(t('Effacer définitivement TOUTES les données de l’espace ado (preuves, journal, code) ? Cette action est irréversible.'))) return
    await wipeAdoData()
    lockVault()
    setHasVault(false)
    setWiped(true)
  }

  return (
    <>
      <Header title="Réglages" back />

      <h2>{t('Compte & sécurité')}</h2>
      <div className="card">
        {hasAccount ? (
          <>
            <p style={{ marginTop: 0 }}>
              <strong style={{ color: 'var(--ok)' }}>✓ {t('Compte sécurisé activé')}</strong>
              <br />
              <span className="muted">{t('Mot de passe + double authentification (MFA).')}</span>
            </p>
            <div className="btn-row">
              <button className="btn" onClick={logoutAccount}>{t('Se déconnecter')}</button>
              <button className="btn danger" onClick={handleRemoveAccount}>{t('Désactiver')}</button>
            </div>
          </>
        ) : (
          <>
            <p style={{ marginTop: 0 }} className="muted">
              {t('Optionnel : protège l’accès à l’app par un mot de passe fort et une double authentification (MFA). L’app reste utilisable sans compte.')}
            </p>
            <Link to="/compte" className="btn primary">{t('Créer un compte sécurisé')}</Link>
          </>
        )}
      </div>

      <h2>{t('Discrétion')}</h2>
      <div className="card">
        <label htmlFor="discreet" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{t('Mode discret')}</span>
          <input
            id="discreet"
            type="checkbox"
            checked={discreet}
            onChange={(e) => setDiscreet(e.target.checked)}
            style={{ width: 'auto', minHeight: 'auto' }}
          />
        </label>
        <p className="muted">
          {t('Affiche un nom et une présentation neutres (« Notes »). La')} <strong>{t('sortie rapide')}</strong>{' '}
          {t('est toujours active : touche le bouton « Quitter » en haut, ou appuie deux fois sur la touche Échap.')}
        </p>
      </div>

      <h2>{t('Confort de lecture')}</h2>
      <div className="card">
        <label htmlFor="theme">{t('Thème')}</label>
        <select id="theme" value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="calm">{t('Apaisant (sombre)')}</option>
          <option value="light">{t('Clair')}</option>
        </select>
        <p className="muted">{t('Le thème apaisant est plus doux pour une consultation le soir.')}</p>

        <label htmlFor="lang">{t('Langue')}</label>
        <select id="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
          {langs.map((l) => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
      </div>

      <h2>{t('Accessibilité')}</h2>
      <div className="card">
        <p className="muted">
          {t('Témoin vise la conformité RGAA 4.1 / WCAG 2.1 AA : contrastes renforcés, cibles tactiles larges, navigation au lecteur d’écran, respect de la réduction d’animations de ton système.')}
        </p>
      </div>

      <h2>{t('Mes données')}</h2>
      <div className="card">
        <p className="muted">
          {t('Tes preuves et ton journal sont chiffrés sur cet appareil uniquement. Tu peux tout effacer d’un geste.')}
        </p>
        <button className="btn danger" onClick={handleWipe}>{t('Tout effacer définitivement')}</button>
        {wiped && <p style={{ color: 'var(--ok)' }}>{t('Données effacées.')}</p>}
      </div>

      <p className="muted center" style={{ fontSize: '0.8rem', marginTop: 20 }}>
        {t('Témoin, version de travail. Les références (3018, 3020, PHAROS), le cadre légal et les procédures doivent être vérifiés et actualisés au lancement.')}
      </p>
    </>
  )
}
