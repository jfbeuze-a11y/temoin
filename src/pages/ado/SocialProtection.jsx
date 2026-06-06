import { useState } from 'react'
import { Header } from '../../components/ui.jsx'
import { Icon } from '../../components/icons.jsx'
import { getSocial } from '../../data/social.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

// Logos officiels des réseaux (glyphes blancs sur pastille aux couleurs de la marque).
const BRANDS = {
  instagram: {
    bg: 'linear-gradient(135deg,#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5)',
    glyph: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2">
        <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.7" r="1.2" fill="#fff" stroke="none" />
      </svg>
    )
  },
  snapchat: {
    bg: '#FFFC00',
    glyph: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff" stroke="#111" strokeWidth="0.6">
        <path d="M12 3c-2.8 0-4.6 2-4.6 4.8 0 .7.1 1.5.1 2.1-.5.3-1.1.2-1.7 0-.7-.2-1.1.7-.5 1.1.6.4 1.4.6 1.8.9.2.6-.9 1.7-2.1 2.5-.6.4-.4 1 .3 1.2.5.1.9.1 1.2.4.2.5.1 1 .8 1.1.9.2 1.6-.4 2.6-.4s1.7.6 2.6.4c.7-.1.6-.6.8-1.1.3-.3.7-.3 1.2-.4.7-.2.9-.8.3-1.2-1.2-.8-2.3-1.9-2.1-2.5.4-.3 1.2-.5 1.8-.9.6-.4.2-1.3-.5-1.1-.6.2-1.2.3-1.7 0 0-.6.1-1.4.1-2.1C16.6 5 14.8 3 12 3z" />
      </svg>
    )
  },
  tiktok: {
    bg: '#010101',
    glyph: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
        <path d="M16.5 3c.3 1.6 1.2 2.9 2.7 3.5.6.3 1.3.4 2 .4v3.1c-1.3 0-2.6-.3-3.7-.9v6.3c0 3.1-2.5 5.6-5.6 5.6S6.3 18.5 6.3 15.4s2.5-5.6 5.6-5.6c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V3h2.1z" />
      </svg>
    )
  },
  facebook: {
    bg: '#1877F2',
    glyph: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M15.3 8.2h-1.9c-.3 0-.6.4-.6.8v1.6h2.5l-.4 2.6h-2.1V21h-2.7v-7.8H7.9v-2.6h2.2V8.3c0-1.9 1.2-3.3 2.9-3.3h2.3z" fill="#fff" />
      </svg>
    )
  }
}

function BrandChip({ id }) {
  const b = BRANDS[id]
  if (!b) return <span className="chip" aria-hidden="true"><Icon name="smartphone" size={22} /></span>
  return (
    <span
      className="chip"
      aria-hidden="true"
      style={{ background: b.bg, border: '1px solid color-mix(in srgb, var(--ink) 14%, transparent)' }}
    >
      {b.glyph}
    </span>
  )
}

export default function SocialProtection() {
  const { lang } = useApp()
  const t = useT()
  const social = getSocial(lang)
  const [open, setOpen] = useState(social.reseaux[0]?.id || null)

  return (
    <>
      <Header title="Sécuriser mes réseaux" back />
      <h1>{t('Protéger mon identité en ligne')}</h1>
      <p className="lead">{social.intro}</p>

      <div className="banner neutre" role="note">
        <strong className="h-row"><Icon name="shield" size={18} /> {social.base.titre}</strong>
        <ul style={{ paddingLeft: 18, margin: '8px 0 0' }}>
          {social.base.items.map((it, i) => (
            <li key={i} style={{ margin: '6px 0', color: 'var(--ink)' }}>{it}</li>
          ))}
        </ul>
      </div>

      {social.reseaux.map((r) => {
        const isOpen = open === r.id
        return (
          <div className="card" key={r.id} style={{ padding: 0, overflow: 'hidden' }}>
            <button
              onClick={() => setOpen(isOpen ? null : r.id)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: 16,
                background: 'none',
                border: 0,
                cursor: 'pointer',
                color: 'var(--ink)'
              }}
            >
              <BrandChip id={r.id} />
              <strong style={{ flex: 1, textAlign: 'left', fontSize: '1.05rem' }}>{r.nom}</strong>
              <span aria-hidden="true" className="chev" style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform .2s' }}>›</span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 16px 16px' }}>
                {r.conseils.map((c, i) => (
                  <div key={i} className="geste do" style={{ alignItems: 'flex-start' }}>
                    <span className="mark" aria-hidden="true">✓</span>
                    <span style={{ color: 'var(--ink)' }}>
                      <strong>{c.titre}.</strong> {c.texte}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}

      <p className="muted" style={{ fontSize: '0.85rem' }}>{social.rappel}</p>
    </>
  )
}
