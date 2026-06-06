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
  },
  twitter: {
    bg: '#000000',
    glyph: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  whatsapp: {
    bg: '#25D366',
    glyph: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.512 5.26l-.999 3.648 3.476-.91zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    )
  },
  discord: {
    bg: '#5865F2',
    glyph: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
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
