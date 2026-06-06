import { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { panicExit } from '../lib/panic.js'
import { Icon } from './icons.jsx'
import { useT, langs } from '../lib/i18n.js'
import { useApp } from '../context/AppContext.jsx'

// Sélecteur de langue discret (icône globe + petit menu) — placé près de « Quitter ».
export function LangButton() {
  const { lang, setLang } = useApp()
  const t = useT()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        className="iconbtn"
        aria-label={t('Changer de langue')}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name="globe" size={20} />
      </button>
      {open && (
        <div className="lang-menu" role="menu">
          {langs.map((l) => (
            <button
              key={l.code}
              role="menuitemradio"
              aria-checked={lang === l.code}
              className={'lang-item' + (lang === l.code ? ' active' : '')}
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
            >
              {l.label}{lang === l.code ? ' ✓' : ''}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Marque — bouclier protecteur, douce et rassurante.
export function BrandMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3.2c3.9 2 6.9 2.1 6.9 2.1v8.4c0 6.1-4 9.7-6.9 11.6-2.9-1.9-6.9-5.5-6.9-11.6V5.3S12.1 5.2 16 3.2Z"
        fill="color-mix(in srgb, var(--primary) 18%, transparent)"
        stroke="var(--primary)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="14" r="2.1" fill="var(--primary)" />
      <path d="M16 16v4.4" stroke="var(--primary)" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  )
}

// KORI — mascotte / compagnon (gardien encapuchonné au cristal).
export function KoriLogo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Kori" role="img">
      <defs>
        <linearGradient id="koriG" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6FA8FF" />
          <stop offset="1" stopColor="#B98CF2" />
        </linearGradient>
      </defs>
      {/* capuche extérieure */}
      <path
        d="M24 4C13 4 6 13 6 26c0 6 1.8 11.2 5 15-2-5-2.4-9-2.4-13C8.6 17.5 15 11 24 11s15.4 6.5 15.4 17c0 4-.4 8-2.4 13 3.2-3.8 5-9 5-15C42 13 35 4 24 4Z"
        fill="url(#koriG)"
      />
      {/* intérieur de la capuche (visage) */}
      <path
        d="M24 12c-7.2 0-12.2 6.2-12.2 15 0 5 1.8 10 5 14 1.2-3 2-6.2 2-10 0-5 2-9 5.2-9s5.2 4 5.2 9c0 3.8.8 7 2 10 3.2-4 5-9 5-14 0-8.8-5-15-12.2-15Z"
        fill="#1b2452"
      />
      {/* cristal */}
      <path d="M24 17l3.4 4.3-3.4 4.3-3.4-4.3z" fill="#E7EEFF" />
      {/* yeux */}
      <path d="M16.6 28c2.3-1.5 4.8-1.5 6.7 0-1.9 1.9-4.8 1.9-6.7 0z" fill="#6FA8FF" />
      <path d="M24.7 28c1.9-1.5 4.4-1.5 6.7 0-2.3 1.9-4.8 1.9-6.7 0z" fill="#B98CF2" />
    </svg>
  )
}

// Bouton de sortie rapide — présent partout (EF-X01 / FC3).
export function PanicButton() {
  const t = useT()
  return (
    <button
      className="iconbtn panic"
      onClick={panicExit}
      aria-label="Sortie rapide : quitter l’écran immédiatement"
    >
      <span aria-hidden="true">✕</span> {t('Quitter')}
    </button>
  )
}

// En-tête de page. Sans `back`, affiche la marque (nom non traduit) ; avec `back`, titre traduit.
export function Header({ title, back = false, right = null }) {
  const nav = useNavigate()
  const t = useT()
  return (
    <header className="header">
      {back ? (
        <>
          <button className="iconbtn" onClick={() => nav(-1)} aria-label={t('Retour')}>
            <span aria-hidden="true">‹</span>
          </button>
          <span className="title">{t(title)}</span>
        </>
      ) : (
        <span className="brand">{title === 'Témoin' ? title : t(title)}</span>
      )}
      <span className="spacer" />
      {!back && (
        <>
          <KoriLogo size={64} />
          <span className="spacer" />
        </>
      )}
      {right}
      <LangButton />
      <PanicButton />
    </header>
  )
}

export function Card({ children, className = '' }) {
  return <div className={'card ' + className}>{children}</div>
}

// Libellés affichés aux ados, bilingues (la priorité MoSCoW reste sémantique en interne).
const PRIORITY_LABELS = {
  fr: { Doit: 'À faire', Devrait: 'Conseillé', Pourrait: 'Si tu veux' },
  es: { Doit: 'A hacer', Devrait: 'Recomendado', Pourrait: 'Si quieres' }
}

// Carte de navigation avec pastille d'icône, description et conseil d'usage.
export function LinkCard({ to, title, desc, icon, priority }) {
  const t = useT()
  const { lang } = useApp()
  const prioLabels = PRIORITY_LABELS[lang] || PRIORITY_LABELS.fr
  return (
    <NavLink to={to} className="card tappable">
      <div className="linkrow">
        {icon && (
          <span className="chip" aria-hidden="true">
            <Icon name={icon} size={24} />
          </span>
        )}
        <span className="meta">
          <strong>{t(title)}</strong>
          {desc && <span className="desc">{t(desc)}</span>}
        </span>
        {priority && (
          <span className={'pill ' + (priority === 'Doit' ? 'must' : '')}>
            {prioLabels[priority] || priority}
          </span>
        )}
        <span className="chev" aria-hidden="true">›</span>
      </div>
    </NavLink>
  )
}

// Barre d'onglets de l'espace ado (4 domaines + accueil).
export function TabBar() {
  const t = useT()
  const tabs = [
    { to: '/ado', ico: 'home', label: 'Accueil', end: true },
    { to: '/ado/comprendre', ico: 'lightbulb', label: 'Comprendre' },
    { to: '/ado/proteger/coffre', ico: 'lock', label: 'Preuves', center: true },
    { to: '/ado/accompagne', ico: 'lifebuoy', label: 'Soutien' },
    { to: '/ado/temoin', ico: 'eye', label: 'Témoin' }
  ]
  return (
    <nav className="tabbar" aria-label="Navigation principale">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.end}
          className={({ isActive }) => (isActive ? 'active' : '') + (tab.center ? ' center' : '')}
          aria-label={tab.center ? 'Coffre-fort de preuves (accès rapide)' : undefined}
        >
          <span className="ico" aria-hidden="true">
            <Icon name={tab.ico} size={tab.center ? 26 : 22} />
          </span>
          <span>{tab.label === 'Témoin' ? 'Témoin' : t(tab.label)}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export function CallLink({ tel, children }) {
  return <a href={'tel:' + tel.replace(/\s/g, '')}>{children}</a>
}
