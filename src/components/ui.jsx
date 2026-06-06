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

// KORI — logo adaptatif : nuit = détouré (fusion) ; jour = logo complet (icône arrondie).
export function KoriLogo({ size = 30 }) {
  const { theme } = useApp()
  const light = theme === 'light'
  return (
    <img
      src={import.meta.env.BASE_URL + (light ? 'kori.png' : 'kori-t.png')}
      width={size}
      height={size}
      alt="Kori"
      style={light
        ? { display: 'block', borderRadius: '22%', objectFit: 'cover' }
        : { display: 'block', objectFit: 'contain' }}
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
