import { Header } from '../../components/ui.jsx'
import { getContent } from '../../data/content.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function EnfantAuteur() {
  const { lang } = useApp()
  const t = useT()
  const parent = getContent(lang).parent
  return (
    <>
      <Header title="Mon enfant est peut-être auteur" back />
      <h1>{t('Responsabiliser, pas accabler')}</h1>
      <p className="lead">{parent.enfantAuteur.intro}</p>
      <div className="card">
        <ol style={{ paddingLeft: 18, margin: 0 }}>
          {parent.enfantAuteur.etapes.map((e, i) => (
            <li key={i} style={{ margin: '10px 0', color: 'var(--ink)' }}>{e}</li>
          ))}
        </ol>
      </div>
    </>
  )
}
