import { useParams, NavLink } from 'react-router-dom'
import { Header } from '../../components/ui.jsx'
import { getPlatforms } from '../../data/platforms.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

function Steps({ title, steps }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {steps.map((s, i) => (
          <li key={i} style={{ margin: '6px 0', color: 'var(--ink)' }}>{s}</li>
        ))}
      </ol>
    </div>
  )
}

export default function PlateformeDetail() {
  const { id } = useParams()
  const { lang } = useApp()
  const t = useT()
  const p = getPlatforms(lang).find((x) => x.id === id)
  if (!p) return (
    <>
      <Header title="Fiche" back />
      <p>{t('Fiche introuvable.')}</p>
    </>
  )
  return (
    <>
      <Header title={p.nom} back />
      <h1>{p.nom}</h1>
      <div className="banner attention" role="note">
        <strong>{p.rappel}</strong>
      </div>
      <NavLink to="/ado/proteger/coffre/ajouter" className="btn primary">{t('Capturer la preuve d’abord')}</NavLink>
      <Steps title={t('Bloquer')} steps={p.bloquer} />
      <Steps title={t('Signaler')} steps={p.signaler} />
      <Steps title={t('Demander le retrait')} steps={p.retrait} />
      <p className="muted" style={{ fontSize: '0.8rem' }}>
        {t('Procédure susceptible d’évoluer ; vérifiée et mise à jour régulièrement.')}
      </p>
    </>
  )
}
