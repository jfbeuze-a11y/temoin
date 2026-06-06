import { Header } from '../../components/ui.jsx'
import { getContent } from '../../data/content.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function Reglages() {
  const { lang } = useApp()
  const t = useT()
  const parent = getContent(lang).parent
  return (
    <>
      <Header title="Réglages de confidentialité" back />
      <h1>{t('Les bons réflexes')}</h1>
      <p className="lead">{parent.reglages.intro}</p>
      <div className="card">
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {parent.reglages.items.map((r, i) => (
            <li key={i} style={{ margin: '8px 0', color: 'var(--ink)' }}>{r}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
