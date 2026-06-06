import { Header } from '../../components/ui.jsx'
import { getDispositifs } from '../../data/resources.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function Recours() {
  const { lang } = useApp()
  const t = useT()
  const dispositifs = getDispositifs(lang)
  const urgents = dispositifs.filter((d) => d.urgent)
  const autres = dispositifs.filter((d) => !d.urgent)
  return (
    <>
      <Header title="Numéros et recours" back />
      <h1>{t('De l’aide en un geste')}</h1>

      {urgents.map((d) => (
        <div className="banner fort" key={d.id} role="note">
          <strong style={{ fontSize: '1.1rem' }}>{d.nom}</strong>
          <div className="muted" style={{ fontSize: '0.88rem', marginTop: 2 }}>{d.sousTitre}</div>
          <p style={{ color: 'var(--ink)', margin: '6px 0' }}>{d.desc}</p>
          <a className="btn danger" href={'tel:' + d.tel}>{t('Appeler le')} {d.tel}</a>
        </div>
      ))}

      <h2>{t('Écoute et signalement')}</h2>
      {autres.map((d) => (
        <div className="card" key={d.id}>
          <strong>{d.nom}</strong>
          <div className="muted" style={{ fontSize: '0.88rem', marginTop: 2 }}>{d.sousTitre}</div>
          <p style={{ color: 'var(--ink)' }}>{d.desc}</p>
          {d.horaires && <p className="muted" style={{ fontSize: '0.82rem' }}>{d.horaires}</p>}
          {d.tel && <a className="btn primary" href={'tel:' + d.tel}>{t('Appeler le')} {d.tel}</a>}
          {d.url && (
            <a className="btn" href={d.url} target="_blank" rel="noopener noreferrer">{t('Ouvrir le site')}</a>
          )}
        </div>
      ))}
    </>
  )
}
