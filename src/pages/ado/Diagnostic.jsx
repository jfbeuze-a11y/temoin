import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/ui.jsx'
import { getDiagnosticQuestions, interpretDiagnostic } from '../../data/diagnostic.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

// EF-C01 — autodiagnostic guidé, restitution factuelle non anxiogène.
export default function Diagnostic() {
  const nav = useNavigate()
  const { lang } = useApp()
  const t = useT()
  const questions = getDiagnosticQuestions(lang)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)

  const q = questions[step]
  const last = step === questions.length - 1

  function choose(value) {
    const next = { ...answers, [q.id]: value }
    setAnswers(next)
    if (last) setDone(true)
    else setStep(step + 1)
  }

  if (done) {
    const r = interpretDiagnostic(answers, lang)
    const bannerClass = r.ton === 'fort' ? 'fort' : r.ton === 'attention' ? 'attention' : 'neutre'
    return (
      <>
        <Header title="Ton repère" back />
        <div className={'banner ' + bannerClass} role="status">
          <h1 style={{ marginTop: 0 }}>{r.titre}</h1>
          <p style={{ color: 'var(--ink)' }}>{r.texte}</p>
        </div>

        {r.present.length > 0 && (
          <p className="muted">{t('Critères repérés dans tes réponses :')} {r.present.join(', ')}.</p>
        )}

        <p className="muted" style={{ fontSize: '0.85rem' }}>
          {t('Ceci est un repère, pas un verdict. Personne ne sait mieux que toi ce que tu vis.')}
        </p>

        <h2>{t('Et maintenant ?')}</h2>
        <div className="stack">
          <button className="btn primary" onClick={() => nav('/ado/proteger/coffre')}>{t('Mettre mes preuves à l’abri')}</button>
          <button className="btn" onClick={() => nav('/ado/accompagne/adulte')}>{t('En parler à quelqu’un')}</button>
          <button className="btn ghost" onClick={() => nav('/ado/proteger/recours')}>{t('Voir les numéros d’aide')}</button>
        </div>
      </>
    )
  }

  return (
    <>
      <Header title="C’est du harcèlement ?" back />
      <p className="eyebrow">{t('Question')} {step + 1} / {questions.length} : {q.critere}</p>
      <h1>{q.question}</h1>
      <p className="lead">{q.help}</p>
      <div className="stack" role="group" aria-label={q.question}>
        {q.options.map((o, i) => (
          <button key={i} className="btn choice" onClick={() => choose(o.value)}>
            {o.label}
          </button>
        ))}
      </div>
      <p className="muted center" style={{ marginTop: 16, fontSize: '0.8rem' }}>
        {t('Tes réponses restent sur ton téléphone et ne sont pas enregistrées.')}
      </p>
    </>
  )
}
