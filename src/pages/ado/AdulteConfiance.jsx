import { Link } from 'react-router-dom'
import { Header } from '../../components/ui.jsx'
import { getContent } from '../../data/content.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function AdulteConfiance() {
  const { lang } = useApp()
  const t = useT()
  const adulteConfiance = getContent(lang).adulteConfiance
  return (
    <>
      <Header title="Adulte de confiance" back />
      <h1>{t('À qui en parler ?')}</h1>
      <p className="lead">{adulteConfiance.intro}</p>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>{t('Des idées de personnes')}</h3>
        <ul style={{ paddingLeft: 18 }}>
          {adulteConfiance.pistes.map((p, i) => (
            <li key={i} style={{ margin: '6px 0', color: 'var(--ink)' }}>{p}</li>
          ))}
        </ul>
      </div>

      <h2>{t('Comment commencer')}</h2>
      {adulteConfiance.scripts.map((s, i) => (
        <div className="card" key={i}>
          <strong>{s.titre}</strong>
          <p style={{ color: 'var(--ink)', fontStyle: 'italic' }}>« {s.texte} »</p>
        </div>
      ))}

      <Link className="btn primary" to="/ado/accompagne/recit">{t('Préparer un récit à montrer')}</Link>
    </>
  )
}
