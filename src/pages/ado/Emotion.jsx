import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/ui.jsx'
import { Icon } from '../../components/icons.jsx'
import { useT } from '../../lib/i18n.js'

// EF-C03 — repère émotionnel + orientation immédiate en cas de signe de détresse.
const moods = [
  { icon: 'face-smile', color: 'var(--ok)', label: 'Ça va à peu près', level: 0 },
  { icon: 'face-neutral', color: 'var(--ink-soft)', label: 'Pas très bien', level: 1 },
  { icon: 'face-frown', color: 'var(--warn)', label: 'Triste, ça pèse', level: 2 },
  { icon: 'face-sad', color: 'var(--danger)', label: 'Très mal, j’ai peur', level: 3 },
  { icon: 'hand-raised', color: 'var(--danger-strong)', label: 'J’ai des pensées noires', level: 4 }
]

export default function Emotion() {
  const nav = useNavigate()
  const t = useT()
  const [sel, setSel] = useState(null)

  return (
    <>
      <Header title="Comment je me sens" back />
      <h1>{t('Là, tout de suite, je dirais…')}</h1>
      <p className="lead">{t('Il n’y a pas de bonne réponse. C’est juste pour toi.')}</p>
      <div className="stack" role="group" aria-label={t('Comment je me sens')}>
        {moods.map((m) => (
          <button
            key={m.level}
            className={'btn choice' + (sel === m.level ? ' sel' : '')}
            onClick={() => setSel(m.level)}
            aria-pressed={sel === m.level}
          >
            <span aria-hidden="true" style={{ color: m.color, marginRight: 10, display: 'inline-flex' }}>
              <Icon name={m.icon} size={26} />
            </span>
            {t(m.label)}
          </button>
        ))}
      </div>

      {sel !== null && sel >= 3 && (
        <div className="banner fort" role="alert" style={{ marginTop: 16 }}>
          <strong>{t('Ce que tu ressens compte, et on peut t’aider maintenant.')}</strong>
          <p style={{ margin: '6px 0' }}>
            {t('Tu n’as pas à garder ça pour toi. Parler à quelqu’un soulage, vraiment.')}
          </p>
          <div className="stack">
            <a className="btn primary" href="tel:3018">{t('Appeler le 3018')}</a>
            {sel >= 4 && <a className="btn danger" href="tel:3114">{t('Souffrance / pensées suicidaires : 3114')}</a>}
            <button className="btn" onClick={() => nav('/ado/accompagne/adulte')}>{t('Choisir un adulte de confiance')}</button>
          </div>
        </div>
      )}

      {sel !== null && sel < 3 && (
        <div className="banner neutre" style={{ marginTop: 16 }}>
          <p style={{ margin: 0, color: 'var(--ink)' }}>
            {t('Merci de t’être posé la question. Si ça change, reviens ici quand tu veux. Tu peux aussi')}
            {' '}<button className="link" style={{ background: 'none', border: 0, color: 'var(--accent)', padding: 0, font: 'inherit', cursor: 'pointer' }} onClick={() => nav('/ado/accompagne/journal')}>{t('noter ce que tu ressens')}</button>.
          </p>
        </div>
      )}
    </>
  )
}
