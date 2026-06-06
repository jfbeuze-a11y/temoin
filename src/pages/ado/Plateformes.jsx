import { Header } from '../../components/ui.jsx'
import { NavLink } from 'react-router-dom'
import { getPlatforms } from '../../data/platforms.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function Plateformes() {
  const { lang } = useApp()
  const t = useT()
  const platforms = getPlatforms(lang)
  return (
    <>
      <Header title="Bloquer / signaler" back />
      <h1>{t('Choisis le réseau')}</h1>
      <p className="lead">{t('Chaque fiche te guide pas à pas. Rappelle-toi : on capture la preuve avant de bloquer.')}</p>
      <div className="grid">
        {platforms.map((p) => (
          <NavLink key={p.id} to={'/ado/proteger/plateformes/' + p.id} className="card tappable center">
            <div style={{ fontWeight: 700 }}>{p.nom}</div>
          </NavLink>
        ))}
      </div>
    </>
  )
}
