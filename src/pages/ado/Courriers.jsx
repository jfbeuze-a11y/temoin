import { useState } from 'react'
import { Header } from '../../components/ui.jsx'
import { getContent } from '../../data/content.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function Courriers() {
  const { lang } = useApp()
  const t = useT()
  const courriers = getContent(lang).courriers
  const [open, setOpen] = useState(null)
  const [copied, setCopied] = useState(null)

  async function copy(c) {
    try {
      await navigator.clipboard.writeText(c.corps)
      setCopied(c.id)
      setTimeout(() => setCopied(null), 1500)
    } catch {
      /* clipboard indisponible */
    }
  }

  return (
    <>
      <Header title="Modèles de courriers" back />
      <h1>{t('Des mots déjà prêts')}</h1>
      <p className="lead">{t('Personnalise les parties entre crochets. Tu peux copier le texte et l’envoyer où tu veux.')}</p>
      {courriers.map((c) => (
        <div className="card" key={c.id}>
          <button
            className="card tappable"
            style={{ margin: 0, border: 0, padding: 0, background: 'none' }}
            onClick={() => setOpen(open === c.id ? null : c.id)}
            aria-expanded={open === c.id}
          >
            <strong>{c.titre}</strong>
            <div className="muted" style={{ fontSize: '0.85rem' }}>{c.destinataire}</div>
          </button>
          {open === c.id && (
            <>
              <textarea readOnly value={c.corps} style={{ minHeight: 220, marginTop: 10 }} />
              <button className="btn primary" onClick={() => copy(c)}>
                {copied === c.id ? t('Copié ✓') : t('Copier le texte')}
              </button>
            </>
          )}
        </div>
      ))}
    </>
  )
}
