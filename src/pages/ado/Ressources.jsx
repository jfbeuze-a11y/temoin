import { Header } from '../../components/ui.jsx'
import { getAssociations } from '../../data/resources.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

// EF-A03 — annuaire de ressources, sans collecte de localisation.
export default function Ressources() {
  const { lang } = useApp()
  const t = useT()
  const associations = getAssociations(lang)
  return (
    <>
      <Header title="Ressources d’aide" back />
      <h1>{t('Vers qui se tourner')}</h1>
      <p className="lead">{t('Des associations et lignes d’écoute, gratuites et confidentielles.')}</p>
      {associations.map((a) => (
        <div className="card" key={a.nom}>
          <strong>{a.nom}</strong>
          <p style={{ color: 'var(--ink)' }}>{a.desc}</p>
          {a.tel && <a className="btn primary" href={'tel:' + a.tel.replace(/\s/g, '')}>{t('Appeler')} {a.tel}</a>}
          {a.url && <a className="btn" href={a.url} target="_blank" rel="noopener noreferrer">{t('Ouvrir le site')}</a>}
        </div>
      ))}
      <p className="muted" style={{ fontSize: '0.8rem' }}>
        {t('Témoin ne récupère jamais ta position. Cette liste est nationale.')}
      </p>
    </>
  )
}
