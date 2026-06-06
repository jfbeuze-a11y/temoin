import { Header } from '../../components/ui.jsx'
import { getContent } from '../../data/content.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function Signaux() {
  const { lang } = useApp()
  const t = useT()
  const parent = getContent(lang).parent
  return (
    <>
      <Header title="Signaux d’alerte" back />
      <h1>{t('Repérer un mal-être')}</h1>
      <p className="lead">{parent.signaux.intro}</p>
      <div className="card">
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {parent.signaux.items.map((s, i) => (
            <li key={i} style={{ margin: '8px 0', color: 'var(--ink)' }}>{s}</li>
          ))}
        </ul>
      </div>
      <p className="muted">
        {t('Un seul signe ne prouve rien. C’est le cumul et le changement par rapport à d’habitude qui doivent vous amener à ouvrir le dialogue.')}
      </p>
    </>
  )
}
