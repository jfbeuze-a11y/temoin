// Jeu d'icônes au trait, cohérent et moderne (style ligne, 24x24, stroke currentColor).
// Remplace les émojis. Hérite de la couleur du contexte (pastille = primaire, onglet = encre).

const P = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="m15.5 8.5-2.3 5.2-5.2 2.3 2.3-5.2z" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.7.6 1 1.2 1 2V16h6v-.5c0-.8.3-1.4 1-2A6 6 0 0 0 12 3Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 21s7.5-3.8 7.5-9.4V5.5L12 2.8 4.5 5.5v6.1C4.5 17.2 12 21 12 21Z" />
      <path d="M12 11.5v3.4" />
      <circle cx="12" cy="9.4" r="1.3" />
    </>
  ),
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="m5.5 5.5 3.9 3.9M14.6 14.6l3.9 3.9M18.5 5.5l-3.9 3.9M9.4 14.6l-3.9 3.9" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  'hand-heart': (
    <>
      <path d="M11 14 7.5 10.6a2 2 0 0 1 2.8-2.8l.7.7.7-.7a2 2 0 0 1 2.8 2.8z" />
      <path d="M3 14v4a2 2 0 0 0 2 2h11l4-3a1.5 1.5 0 0 0-2-2.2l-3 1.7" />
      <path d="M3 14h2.5l2 1.5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v.5H9z" />
      <path d="m8.8 13 1.8 1.8 3.6-3.6" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.5v13" />
      <path d="M4 5.2a15 15 0 0 1 8 1.8 15 15 0 0 1 8-1.8v12.4a15 15 0 0 0-8 1.8 15 15 0 0 0-8-1.8z" />
    </>
  ),
  pulse: (
    <>
      <path d="M3.5 12h3l2-5 3.5 10 2.5-6.5 1.6 1.5h4.4" />
    </>
  ),
  branch: (
    <>
      <circle cx="6.5" cy="6" r="2.3" />
      <circle cx="6.5" cy="18" r="2.3" />
      <circle cx="17.5" cy="6" r="2.3" />
      <path d="M6.5 8.3v7.4" />
      <path d="M17.5 8.3c0 4-3 5.7-6 6.4" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.4" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.4" r="1.1" />
    </>
  ),
  smartphone: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.6" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  phone: (
    <path d="M21 16.4v2.7a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3 19.2 19.2 0 0 1-6-6 19.5 19.5 0 0 1-3-8.6A2 2 0 0 1 3.3 3.3H6a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L7.1 10.8a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
  ),
  wind: (
    <>
      <path d="M3 8.5h9a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M3 12h13a2.5 2.5 0 1 1-2.5 2.5" />
      <path d="M3 15.5h6a2 2 0 1 1-2 2" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.4" />
      <path d="m3.5 7 8.5 5.5L20.5 7" />
    </>
  ),
  'user-check': (
    <>
      <circle cx="9.5" cy="8" r="3.7" />
      <path d="M3 20v-1.2A4.8 4.8 0 0 1 7.8 14h3.4a4.8 4.8 0 0 1 3.3 1.3" />
      <path d="m15.5 18 1.8 1.8 3.7-3.7" />
    </>
  ),
  'file-text': (
    <>
      <path d="M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5z" />
      <path d="M14 2.5V7a1 1 0 0 0 1 1h4" />
      <path d="M8.5 13h7M8.5 16.5h7M8.5 9.5h2" />
    </>
  ),
  library: (
    <>
      <path d="M5 4.5v15M9 4.5v15" />
      <path d="m13.5 5.5 4.2 14.3" />
      <path d="M3.5 19.5h6M11.8 19.5h6.5" />
    </>
  ),
  notebook: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2.2" />
      <path d="M5 8h-2M5 12h-2M5 16h-2" />
      <path d="M10 8h5M10 12h5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4 4" />
    </>
  ),
  heart: (
    <path d="M12 20.5S3.5 15.7 3.5 9.6A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8.5 2.6c0 6.1-8.5 10.9-8.5 10.9Z" />
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10" />
      <path d="M6 4h12" />
      <path d="M6 4 3.5 10.5h5zM18 4l-2.5 6.5h5z" />
      <path d="M3.5 10.5a2.5 2.5 0 0 0 5 0M15.5 10.5a2.5 2.5 0 0 0 5 0" />
    </>
  ),
  rotate: (
    <>
      <path d="M3.5 12a8.5 8.5 0 1 1 2.6 6.1" />
      <path d="M3.5 19v-4.5H8" />
    </>
  ),
  sliders: (
    <>
      <path d="M5 21v-7M5 10V3M12 21v-9M12 8V3M19 21v-5M19 12V3" />
      <circle cx="5" cy="12" r="1.8" />
      <circle cx="12" cy="10" r="1.8" />
      <circle cx="19" cy="14" r="1.8" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.4 3.9 5.6 3.9 9s-1.4 6.6-3.9 9c-2.5-2.4-3.9-5.6-3.9-9s1.4-6.6 3.9-9z" />
    </>
  ),
  home: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  'face-smile': (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M8.2 14.2s1.4 2.2 3.8 2.2 3.8-2.2 3.8-2.2" />
      <path d="M9 9.6h.01" strokeWidth="2.2" />
      <path d="M15 9.6h.01" strokeWidth="2.2" />
    </>
  ),
  'face-neutral': (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M8.4 15.2h7.2" />
      <path d="M9 9.6h.01" strokeWidth="2.2" />
      <path d="M15 9.6h.01" strokeWidth="2.2" />
    </>
  ),
  'face-frown': (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M8.2 16.4s1.4-2.2 3.8-2.2 3.8 2.2 3.8 2.2" />
      <path d="M9 9.6h.01" strokeWidth="2.2" />
      <path d="M15 9.6h.01" strokeWidth="2.2" />
    </>
  ),
  'face-sad': (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M8.2 16.8s1.4-2.6 3.8-2.6 3.8 2.6 3.8 2.6" />
      <path d="M8.4 8.6 10.4 10M15.6 8.6 13.6 10" />
      <path d="M9.2 11.2h.01" strokeWidth="2.2" />
      <path d="M14.8 11.2h.01" strokeWidth="2.2" />
    </>
  ),
  'hand-raised': (
    <>
      <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M12 11V4.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M15 11V6.5a1.5 1.5 0 0 1 3 0V13c0 3.9-2.7 7-6.5 7A6.5 6.5 0 0 1 5.4 16l-1.6-3a1.5 1.5 0 0 1 2.5-1.6L7.5 13" />
      <path d="M9 11V8.5a1.5 1.5 0 0 0-3 0V13" />
    </>
  ),
  phoneCall: (
    <>
      <path d="M21 16.4v2.7a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3 19.2 19.2 0 0 1-6-6 19.5 19.5 0 0 1-3-8.6A2 2 0 0 1 3.3 3.3H6a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L7.1 10.8a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
      <path d="M15.5 5a4 4 0 0 1 3.5 3.5M15 2a7 7 0 0 1 6 6" />
    </>
  )
}

export function Icon({ name, size = 24, strokeWidth = 1.8, className }) {
  const d = P[name]
  if (!d) return null
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d}
    </svg>
  )
}
