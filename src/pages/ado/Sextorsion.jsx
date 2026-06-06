import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/ui.jsx'
import { Icon } from '../../components/icons.jsx'
import { getSextorsion } from '../../data/sextorsion.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function Sextorsion() {
  const { lang } = useApp()
  const t = useT()
  const nav = useNavigate()
  const data = getSextorsion(lang)

  return (
    <>
      <Header title="On te fait chanter avec une photo ?" back />

      <div className="banner fort" role="note">
        <strong className="h-row"><Icon name="shield-alert" size={18} /> {t('Tu vas t’en sortir.')}</strong>
        <p style={{ color: 'var(--ink)', margin: '6px 0 0' }}>{data.intro}</p>
      </div>

      <div className="stack" style={{ margin: '14px 0' }}>
        <button className="btn primary" onClick={() => nav('/ado/proteger/coffre')}>
          <Icon name="lock" size={18} /> {t('Mettre mes preuves au chaud')}
        </button>
        <div className="btn-row">
          <a className="btn" href="tel:3018"><Icon name="phone" size={18} /> {t('Appeler le 3018')}</a>
          <a className="btn danger" href="tel:17"><Icon name="phone" size={18} /> {t('Danger : 17')}</a>
        </div>
        <a className="btn ghost" href="https://www.internet-signalement.gouv.fr/" target="_blank" rel="noopener noreferrer">
          {t('Signaler sur PHAROS')}
        </a>
      </div>

      <h2>{t('À faire tout de suite')}</h2>
      <div className="card">
        {data.aFaire.map((g, i) => (
          <div key={i} className="geste do" style={{ alignItems: 'flex-start' }}>
            <span className="mark" aria-hidden="true">{i + 1}</span>
            <span style={{ color: 'var(--ink)' }}>{g}</span>
          </div>
        ))}
      </div>

      <h2>{t('Surtout pas')}</h2>
      <div className="card">
        {data.aEviter.map((g, i) => (
          <div key={i} className="geste dont" style={{ alignItems: 'flex-start' }}>
            <span className="mark" aria-hidden="true">✕</span>
            <span style={{ color: 'var(--ink)' }}>{g}</span>
          </div>
        ))}
      </div>

      <div className="banner neutre" role="note">
        <p style={{ color: 'var(--ink)', margin: 0 }}>{data.rassure}</p>
      </div>
    </>
  )
}
