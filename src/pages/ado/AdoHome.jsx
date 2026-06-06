import { useNavigate } from 'react-router-dom'
import { Header, LinkCard } from '../../components/ui.jsx'
import { Icon } from '../../components/icons.jsx'
import { useT } from '../../lib/i18n.js'

export default function AdoHome() {
  const nav = useNavigate()
  const t = useT()
  return (
    <>
      <Header title="Mon espace" />
      <p className="eyebrow">{t('Espace ado privé')}</p>
      <h1>{t('On commence par quoi ?')}</h1>
      <p className="lead">{t('Dis-moi ce qu’il te faut, là, maintenant. Ou mate vite fait, tranquille.')}</p>

      {/* Raccourci d'urgence : garder les preuves et appeler à l'aide en un geste */}
      <div className="card" style={{ borderColor: 'color-mix(in srgb, var(--primary) 35%, var(--line))' }}>
        <p className="eyebrow" style={{ marginBottom: 10 }}>{t('Faut faire vite ?')}</p>
        <button className="btn primary" onClick={() => nav('/ado/proteger/coffre')}>
          <Icon name="lock" size={20} /> {t('Mettre mes preuves au chaud')}
        </button>
        <div className="btn-row" style={{ marginTop: 10 }}>
          <a className="btn" href="tel:3018"><Icon name="phone" size={18} /> 3018</a>
          <a className="btn danger" href="tel:17"><Icon name="phone" size={18} /> {t('17 urgence')}</a>
        </div>
      </div>

      <LinkCard to="/ado/proteger/securite" icon="shield" title="Me protéger sur les réseaux" desc="Sécuriser ton identité sur Instagram, Snapchat, TikTok, Facebook." />
      <LinkCard to="/ado/comprendre" icon="lightbulb" title="Comprendre" desc="Est-ce du harcèlement ? Mots et repères." />
      <LinkCard to="/ado/proteger" icon="lock" title="Se protéger" desc="Coffre-fort de preuves, bloquer, signaler, recours." />
      <LinkCard to="/ado/accompagne" icon="lifebuoy" title="Me faire aider" desc="À qui en parler, ressources, journal." />
      <LinkCard to="/ado/temoin" icon="eye" title="Témoin" desc="J’ai vu quelqu’un se faire harceler." />
      <LinkCard to="/compte" icon="lock" title="Sécuriser mon accès" desc="Mot de passe + double authentification (MFA). Optionnel." accent="amber" />
      <LinkCard to="/reglages" icon="sliders" title="Réglages" desc="Discrétion, thème, langue, compte." accent="slate" />
    </>
  )
}
