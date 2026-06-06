import { Header } from '../../components/ui.jsx'
import { getContent } from '../../data/content.js'
import { useApp } from '../../context/AppContext.jsx'

export default function Desescalade() {
  const { lang } = useApp()
  const desescalade = getContent(lang).desescalade
  return (
    <>
      <Header title="Garder la tête froide" back />
      <h1>{desescalade.titre}</h1>
      <p className="lead">{desescalade.intro}</p>
      <div className="card">
        {desescalade.gestes.map((g, i) => (
          <div key={i} className={'geste ' + (g.do ? 'do' : 'dont')}>
            <span className="mark" aria-hidden="true">{g.do ? '✓' : '✕'}</span>
            <span style={{ color: 'var(--ink)' }}>{g.texte}</span>
          </div>
        ))}
      </div>
    </>
  )
}
