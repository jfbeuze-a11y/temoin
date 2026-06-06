import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, KoriLogo } from '../../components/ui.jsx'
import { getFil } from '../../data/fil.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

const TONE = { good: 'neutre', meh: 'attention', bad: 'fort' }

export default function Fil() {
  const { lang } = useApp()
  const t = useT()
  const nav = useNavigate()
  const story = getFil(lang)
  const [id, setId] = useState(story.start)
  const node = story.nodes[id] || story.nodes[story.start]

  return (
    <>
      <Header title="Le Fil" back />

      {node.kori && (
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', margin: '6px 0 12px' }}>
          <KoriLogo size={36} />
          <div
            className="banner neutre"
            style={{ margin: 0, flex: 1, padding: '12px 14px' }}
          >
            <span style={{ color: 'var(--ink)', fontStyle: 'italic' }}>{node.kori}</span>
          </div>
        </div>
      )}

      {node.text && (
        <div className="card">
          <p style={{ color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{node.text}</p>
        </div>
      )}

      {node.choices && (
        <div className="stack" style={{ marginTop: 8 }}>
          {node.choices.map((c, i) => (
            <button key={i} className="btn choice" onClick={() => setId(c.to)}>{c.label}</button>
          ))}
        </div>
      )}

      {node.end && (
        <>
          <div className={'banner ' + (TONE[node.end.tone] || 'neutre')} role="status">
            <h2 style={{ marginTop: 0 }}>{node.end.titre}</h2>
            <p style={{ color: 'var(--ink)', margin: 0 }}>{node.end.texte}</p>
          </div>
          <div className="stack" style={{ marginTop: 10 }}>
            <button className="btn primary" onClick={() => setId(story.start)}>{t('Recommencer')}</button>
            <button className="btn" onClick={() => nav('/ado/temoin')}>{t('Découvrir le rôle de témoin')}</button>
            <button className="btn ghost" onClick={() => nav('/ado/proteger/recours')}>{t('Numéros d’aide')}</button>
          </div>
        </>
      )}
    </>
  )
}
