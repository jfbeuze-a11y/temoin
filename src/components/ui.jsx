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

// KORI — logo officiel détouré (fond transparent), harmonieux sur tout fond / thème.
export function KoriLogo({ size = 30 }) {
  return (
    <img
      src={import.meta.env.BASE_URL + 'kori-t.png'}
      width={size}
      height={size}
      alt="Kori"
      style={{ display: 'block', objectFit: 'contain' }}
    />
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
export function LinkCard({ to, title, desc, icon, priority, featured = false, accent }) {
  const t = useT()
  const { lang } = useApp()
  const prioLabels = PRIORITY_LABELS[lang] || PRIORITY_LABELS.fr
  return (
    <NavLink to={to} className={'card tappable' + (featured ? ' featured' : '') + (accent ? ' accent-' + accent : '')}>
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

// Masquage auto de la barre : se cache quand on descend, réapparaît quand on remonte,
// quand on est en haut/bas de page, ou quand on touche la poignée du bas.
function useAutoHide() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  useEffect(() => {
    lastY.current = window.scrollY || 0
    function onScroll() {
      const y = window.scrollY || 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const delta = y - lastY.current
      // Toujours visible près du haut ou du bas de la page.
      if (y < 60 || y >= max - 60) {
        setHidden(false)
      } else if (delta > 6) {
        setHidden(true) // on descend -> on cache
      } else if (delta < -6) {
        setHidden(false) // on remonte -> on montre
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return [hidden, setHidden]
}

// Barre d'onglets de l'espace ado (4 domaines + accueil).
export function TabBar() {
  const t = useT()
  const [hidden, setHidden] = useAutoHide()
  const tabs = [
    { to: '/ado', ico: 'home', label: 'Accueil', end: true },
    { to: '/ado/comprendre', ico: 'lightbulb', label: 'Comprendre' },
    { to: '/ado/proteger/coffre', ico: 'lock', label: 'Preuves', center: true },
    { to: '/ado/accompagne', ico: 'lifebuoy', label: 'Soutien' },
    { to: '/ado/temoin', ico: 'eye', label: 'Témoin' }
  ]
  return (
    <>
      <button
        type="button"
        className={'tabbar-handle' + (hidden ? ' show' : '')}
        onClick={() => setHidden(false)}
        aria-label={t('Afficher la navigation')}
        tabIndex={hidden ? 0 : -1}
      >
        <span aria-hidden="true" />
      </button>
      <nav
        className={'tabbar' + (hidden ? ' is-hidden' : '')}
        aria-label="Navigation principale"
        aria-hidden={hidden}
      >
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            tabIndex={hidden ? -1 : 0}
            onClick={() => setHidden(false)}
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
    </>
  )
}

export function CallLink({ tel, children }) {
  return <a href={'tel:' + tel.replace(/\s/g, '')}>{children}</a>
}
