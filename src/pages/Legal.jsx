import { Header } from '../components/ui.jsx'
import { getLegal } from '../data/legal.js'
import { useApp } from '../context/AppContext.jsx'

export default function Legal() {
  const { lang } = useApp()
  const data = getLegal(lang)
  return (
    <>
      <Header title="Mentions légales" back />
      <p className="lead">{data.intro}</p>
      {data.sections.map((s, i) => (
        <div className="card" key={i}>
          <h3 style={{ marginTop: 0 }}>{s.titre}</h3>
          {s.paras.map((p, j) => (
            <p key={j} style={{ color: 'var(--ink)' }}>{p}</p>
          ))}
        </div>
      ))}
      <p className="faint center" style={{ fontSize: '0.8rem', marginTop: 16 }}>{data.maj}</p>
    </>
  )
}
