import { useState } from 'react'
import { Header } from '../../components/ui.jsx'
import { getLexique } from '../../data/lexique.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function Lexique() {
  const { lang } = useApp()
  const t = useT()
  const lexique = getLexique(lang)
  const [q, setQ] = useState('')
  const filtered = lexique.filter(
    (l) => l.terme.toLowerCase().includes(q.toLowerCase()) || l.def.toLowerCase().includes(q.toLowerCase())
  )
  return (
    <>
      <Header title="Lexique" back />
      <h1>{t('Les mots, expliqués')}</h1>
      <label htmlFor="search" className="skip">{t('Rechercher un mot…')}</label>
      <input id="search" type="text" placeholder={t('Rechercher un mot…')} value={q} onChange={(e) => setQ(e.target.value)} />
      {filtered.map((l) => (
        <div className="card" key={l.terme}>
          <h3 style={{ marginTop: 0 }}>{l.terme}</h3>
          <p style={{ color: 'var(--ink)' }}>{l.def}</p>
          <p className="muted" style={{ fontSize: '0.9rem' }}><strong>{t('Exemple')} :</strong> {l.exemple}</p>
        </div>
      ))}
      {filtered.length === 0 && <p className="muted">{t('Aucun mot trouvé.')}</p>}
    </>
  )
}
