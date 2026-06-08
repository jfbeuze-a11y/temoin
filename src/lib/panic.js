// Sortie rapide / panic exit (EF-X01, FC3). Permet de quitter l'écran instantanément
// pour ne pas s'exposer si quelqu'un regarde.
//
// - En app native (Android/iOS) : on met l'application en arrière-plan (retour à
//   l'écran d'accueil). AUCUNE page web ne s'ouvre.
// - Sur le web : on redirige l'onglet vers un site neutre et on remplace l'entrée
//   d'historique pour effacer la trace de l'app.
const NEUTRAL_URL = 'https://www.google.com/search?q=météo'

function isNative() {
  try {
    return typeof window !== 'undefined'
      && window.Capacitor
      && typeof window.Capacitor.isNativePlatform === 'function'
      && window.Capacitor.isNativePlatform()
  } catch {
    return false
  }
}

// Sortie native : on masque l'app sans ouvrir de page.
async function nativeExit() {
  try {
    const { App } = await import('@capacitor/app')
    // Android : minimise l'app (revient à l'écran d'accueil), l'app reste verrouillée derrière.
    if (typeof App.minimizeApp === 'function') {
      await App.minimizeApp()
      return
    }
    // iOS : impossible de minimiser par API. À défaut, on quitte proprement.
    if (typeof App.exitApp === 'function') await App.exitApp()
  } catch {
    // Si le plugin n'est pas dispo, on ne fait rien (pas d'ouverture de page).
  }
}

export function panicExit() {
  if (isNative()) {
    nativeExit()
    return
  }
  try {
    // Web : remplace l'entrée d'historique courante pour effacer la trace de l'app.
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
