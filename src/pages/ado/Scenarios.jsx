import { useState } from 'react'
import { Header } from '../../components/ui.jsx'
import { getScenarios } from '../../data/scenarios.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function Scenarios() {
  const { lang } = useApp()
  const t = useT()
  const scenarios = getScenarios(lang)
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const s = scenarios[i]

  function next() {
    setPicked(null)
    setI((i + 1) % scenarios.length)
  }

  return (
    <>
      <Header title="Scénarios" back />
      <p className="eyebrow">{t('Scénario')} {i + 1} / {scenarios.length}</p>
      <h1>{s.titre}</h1>
      <div className="card">
        <p style={{ color: 'var(--ink)', marginTop: 0 }}>{s.situation}</p>
        <p><strong>{s.question}</strong></p>
      </div>

      <div className="stack">
        {s.choix.map((c, idx) => (
          <button
            key={idx}
            className={'btn choice' + (picked === idx ? ' sel' : '')}
            disabled={picked !== null}
            onClick={() => setPicked(idx)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {picked !== null && (
        <div className={'banner ' + (s.choix[picked].bon ? 'neutre' : 'attention')} role="status" style={{ marginTop: 14 }}>
          <strong>{s.choix[picked].bon ? '✓ ' + t('Bonne intuition') : t('À nuancer')}</strong>
          <p style={{ color: 'var(--ink)', margin: '6px 0 0' }}>{s.choix[picked].feedback}</p>
        </div>
      )}

      {picked !== null && (
        <button className="btn primary" style={{ marginTop: 12 }} onClick={next}>{t('Scénario suivant')}</button>
      )}
    </>
  )
}
