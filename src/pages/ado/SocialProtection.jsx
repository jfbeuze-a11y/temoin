import { useState } from 'react'
import { Header } from '../../components/ui.jsx'
import { Icon } from '../../components/icons.jsx'
import { getSocial } from '../../data/social.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

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
              <span className="chip" aria-hidden="true"><Icon name="smartphone" size={22} /></span>
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
