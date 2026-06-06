// Sortie rapide / panic exit (EF-X01, FC3). Permet de quitter l'écran instantanément
// pour ne pas s'exposer si quelqu'un regarde. Redirige vers un site neutre et tente de
// purger l'historique de navigation de l'onglet.
const NEUTRAL_URL = 'https://www.google.com/search?q=météo'

export function panicExit() {
  try {
    // Remplace l'entrée d'historique courante pour effacer la trace de l'app.
    window.location.replace(NEUTRAL_URL)
  } catch {
    window.location.href = NEUTRAL_URL
  }
}

// Branche les déclencheurs globaux : touche Échap (x2 rapide) et perte de focus optionnelle.
export function installPanicShortcuts() {
  let lastEsc = 0
  function onKey(e) {
    if (e.key === 'Escape') {
      const now = Date.now()
      if (now - lastEsc < 600) panicExit()
      lastEsc = now
    }
  }
  window.addEventListener('keydown', onKey)
  return () => window.removeEventListener('keydown', onKey)
}
