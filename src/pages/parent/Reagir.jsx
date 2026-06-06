import { Header } from '../../components/ui.jsx'
import { getContent } from '../../data/content.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function Reagir() {
  const { lang } = useApp()
  const t = useT()
  const parent = getContent(lang).parent
  return (
    <>
      <Header title="Bien réagir" back />
      <h1>{t('Aider sans aggraver')}</h1>

      <div className="card">
        <h3 style={{ marginTop: 0, color: 'var(--ok)' }}>{t('À faire')}</h3>
        {parent.bienReagir.aFaire.map((g, i) => (
          <div key={i} className="geste do">
            <span className="mark" aria-hidden="true">✓</span>
            <span style={{ color: 'var(--ink)' }}>{g}</span>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0, color: 'var(--danger)' }}>{t('À éviter absolument')}</h3>
        {parent.bienReagir.aEviter.map((g, i) => (
          <div key={i} className="geste dont">
            <span className="mark" aria-hidden="true">✕</span>
            <span style={{ color: 'var(--ink)' }}>{g}</span>
          </div>
        ))}
      </div>
    </>
  )
}
