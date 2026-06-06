// Dispositifs officiels et ressources (EF-P07, EF-A03) — bilingue FR/ES.
// Numéros France conservés ; descriptions traduites. ⚠ À vérifier au lancement.

const dispositifsFr = [
  {
    id: '3018',
    nom: '3018',
    sousTitre: 'Numéro national contre les violences numériques',
    desc: 'Écoute, conseils et aide au retrait de contenus. Gratuit, anonyme, confidentiel. Aussi par tchat et appli 3018.',
    tel: '3018',
    urgent: false,
    horaires: 'Tous les jours'
  },
  {
    id: '3020',
    nom: '3020',
    sousTitre: 'Non au harcèlement (à l’école)',
    desc: 'Numéro national contre le harcèlement scolaire. Écoute et orientation pour les élèves et les familles.',
    tel: '3020',
    urgent: false,
    horaires: 'Du lundi au vendredi'
  },
  {
    id: 'pharos',
    nom: 'PHAROS',
    sousTitre: 'Signaler un contenu illicite',
    desc: 'Plateforme officielle de signalement des contenus et comportements illicites en ligne.',
    url: 'https://www.internet-signalement.gouv.fr/',
    urgent: false
  },
  {
    id: '17',
    nom: '17 / 112',
    sousTitre: 'Police et secours, urgence',
    desc: 'En cas de danger immédiat pour toi ou quelqu’un d’autre. Le 112 fonctionne partout en Europe.',
    tel: '17',
    urgent: true
  },
  {
    id: '119',
    nom: '119',
    sousTitre: 'Enfance en danger',
    desc: 'Service national d’accueil téléphonique pour l’enfance en danger. Gratuit, 24h/24.',
    tel: '119',
    urgent: false,
    horaires: '24h/24, 7j/7'
  }
]

const dispositifsEs = [
  {
    id: '3018',
    nom: '3018',
    sousTitre: 'Número nacional contra las violencias digitales (Francia)',
    desc: 'Escucha, consejos y ayuda para retirar contenidos. Gratuito, anónimo y confidencial. También por chat y la app 3018.',
    tel: '3018',
    urgent: false,
    horaires: 'Todos los días'
  },
  {
    id: '3020',
    nom: '3020',
    sousTitre: 'No al acoso (en la escuela)',
    desc: 'Número nacional contra el acoso escolar (Francia). Escucha y orientación para alumnos y familias.',
    tel: '3020',
    urgent: false,
    horaires: 'De lunes a viernes'
  },
  {
    id: 'pharos',
    nom: 'PHAROS',
    sousTitre: 'Denunciar un contenido ilícito',
    desc: 'Plataforma oficial (Francia) para denunciar contenidos y comportamientos ilícitos en línea.',
    url: 'https://www.internet-signalement.gouv.fr/',
    urgent: false
  },
  {
    id: '17',
    nom: '17 / 112',
    sousTitre: 'Policía y emergencias',
    desc: 'En caso de peligro inmediato para ti o para otra persona. El 112 funciona en toda Europa.',
    tel: '17',
    urgent: true
  },
  {
    id: '119',
    nom: '119',
    sousTitre: 'Infancia en peligro',
    desc: 'Servicio nacional de atención telefónica para la infancia en peligro (Francia). Gratuito, 24 h.',
    tel: '119',
    urgent: false,
    horaires: '24 h, todos los días'
  }
]

const associationsFr = [
  { nom: 'e-Enfance / 3018', desc: 'Protection de l’enfance sur internet, aide au retrait de contenus.', url: 'https://e-enfance.org/' },
  { nom: 'Net Écoute', desc: 'Ligne d’écoute sur les usages numériques des jeunes.', tel: '3018' },
  { nom: 'Fil Santé Jeunes', desc: 'Écoute santé, mal-être, relations, pour les 12-25 ans.', tel: '0800 235 236', url: 'https://www.filsantejeunes.com/' },
  { nom: 'SOS Amitié', desc: 'Écoute anonyme en cas de détresse, jour et nuit.', url: 'https://www.sos-amitie.com/' }
]

const associationsEs = [
  { nom: 'e-Enfance / 3018', desc: 'Protección de la infancia en internet y ayuda para retirar contenidos.', url: 'https://e-enfance.org/' },
  { nom: 'Net Écoute', desc: 'Línea de escucha sobre los usos digitales de los jóvenes.', tel: '3018' },
  { nom: 'Fil Santé Jeunes', desc: 'Escucha sobre salud, malestar y relaciones, para jóvenes de 12 a 25 años.', tel: '0800 235 236', url: 'https://www.filsantejeunes.com/' },
  { nom: 'SOS Amitié', desc: 'Escucha anónima en caso de angustia, día y noche.', url: 'https://www.sos-amitie.com/' }
]

export const getDispositifs = (lang) => (lang === 'es' ? dispositifsEs : dispositifsFr)
export const getAssociations = (lang) => (lang === 'es' ? associationsEs : associationsFr)
export const dispositifs = dispositifsFr
export const associations = associationsFr
