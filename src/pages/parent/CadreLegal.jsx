import { Header } from '../../components/ui.jsx'
import { getContent } from '../../data/content.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function CadreLegal() {
  const { lang } = useApp()
  const t = useT()
  const parent = getContent(lang).parent
  return (
    <>
      <Header title="Cadre légal" back />
      <h1>{t('Vos recours')}</h1>
      <p className="lead">{parent.cadreLegal.intro}</p>
      {parent.cadreLegal.points.map((p, i) => (
        <div className="card" key={i}>
          <h3 style={{ marginTop: 0 }}>{p.titre}</h3>
          <p style={{ color: 'var(--ink)' }}>{p.texte}</p>
        </div>
      ))}
      <div className="banner attention" role="note">
        <strong>{t('Pour les situations graves')}</strong>
        <p style={{ color: 'var(--ink)', margin: '6px 0 0' }}>
          {t('Un constat de commissaire de justice renforce la valeur probatoire. Le cadre juridique évolue : faites valider votre démarche par un professionnel du droit.')}
        </p>
      </div>
    </>
  )
}
