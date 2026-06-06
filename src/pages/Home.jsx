import { Link } from 'react-router-dom'
import { Header } from '../components/ui.jsx'
import { Icon } from '../components/icons.jsx'
import { useT } from '../lib/i18n.js'

// Accueil + onboarding sans compte (EF-X02). Aiguillage vers deux espaces étanches (FC1).
export default function Home() {
  const t = useT()
  return (
    <>
      <Header title="Témoin" />

      <div style={{ paddingTop: 14 }}>
        <p className="eyebrow">{t('Je suis Kori')}</p>
        <h1>{t('Face au cyberharcèlement, je suis là pour toi.')}</h1>
        <p className="lead">
          {t(
            'Moi c’est Kori, ton compagnon de protection. Je t’aide à capter ce qui t’arrive, à mettre tes preuves à l’abri et à trouver de l’aide. Pas besoin de compte, rien ne sort de ton tel.'
          )}
        </p>
      </div>

      <h2 style={{ marginTop: 26 }}>{t('J’ouvre…')}</h2>

      <Link to="/ado" className="card tappable">
        <div className="linkrow">
          <span className="chip tone-ado" aria-hidden="true"><Icon name="compass" size={26} /></span>
          <span className="meta">
            <strong>{t('L’espace ado')}</strong>
            <span className="desc">{t('Comprendre, me protéger, être accompagné, témoigner.')}</span>
          </span>
          <span className="chev" aria-hidden="true">›</span>
        </div>
      </Link>

      <Link to="/parent" className="card tappable">
        <div className="linkrow">
          <span className="chip tone-parent" aria-hidden="true"><Icon name="hand-heart" size={26} /></span>
          <span className="meta">
            <strong>{t('L’espace parent')}</strong>
            <span className="desc">{t('Comprendre les signaux et bien réagir, sans surveiller.')}</span>
          </span>
          <span className="chev" aria-hidden="true">›</span>
        </div>
      </Link>

      <div className="banner neutre" role="note" style={{ marginTop: 18 }}>
        <strong>{t('Un compagnon, pas un mouchard.')}</strong>
        <p style={{ margin: '5px 0 0' }}>
          {t('L’espace ado et l’espace parent sont totalement séparés. Personne ne peut voir ce que tu fais ici.')}
        </p>
      </div>

      <hr className="hr" />
      <Link to="/reglages" className="btn ghost">{t('Réglages, discrétion et accessibilité')}</Link>
      <p className="faint center" style={{ marginTop: 18, fontSize: '0.84rem' }}>
        {t('En cas de danger immédiat, appelle le 17 (ou le 112).')}
      </p>
    </>
  )
}
