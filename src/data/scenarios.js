// Entraînement par scénarios (EF-C04) — bilingue FR/ES, ton ado complice.
const fr = [
  {
    id: 's1', titre: 'Le commentaire qui blesse',
    situation: 'Un camarade poste un commentaire moqueur sous ta photo. Vous vous êtes embrouillés ce matin. C’est la première fois.',
    question: 'Conflit ou harcèlement ?',
    choix: [
      { label: 'Plutôt un conflit ponctuel', bon: true, feedback: 'Bien vu. Un truc isolé après une embrouille, sans répétition ni public, c’est plutôt un clash ponctuel. Ça pique quand même : si ça revient, garde une trace.' },
      { label: 'C’est du harcèlement', bon: false, feedback: 'Pas si vite : un seul commentaire isolé réunit pas les critères (répétition, intention qui dure, déséquilibre, public). Garde l’œil ouvert si ça recommence.' }
    ]
  },
  {
    id: 's2', titre: 'La boucle de messages',
    situation: 'Depuis deux semaines, un groupe t’envoie chaque soir des messages humiliants et d’autres les « likent ». Tu te sens seul face à eux.',
    question: 'Conflit ou harcèlement ?',
    choix: [
      { label: 'C’est du harcèlement', bon: true, feedback: 'Carrément. Ça se répète + intention de blesser + t’es seul face à un groupe + public : les 4 critères y sont. Mets les preuves au chaud et fais-toi aider.' },
      { label: 'Juste une mauvaise blague', bon: false, feedback: 'C’est pas qu’une blague : la répétition, le groupe et le public en font un schéma de harcèlement. T’as pas à gérer ça sans aide.' }
    ]
  },
  {
    id: 's3', titre: 'La photo qui circule',
    situation: 'Une photo gênante de toi est partagée dans plusieurs groupes sans ton accord. Des gens que tu connais pas commentent.',
    question: 'Quel est le premier bon réflexe ?',
    choix: [
      { label: 'Capturer les preuves, puis signaler', bon: true, feedback: 'Oui : on documente d’abord (captures, liens, dates), puis on signale et on demande le retrait. Sans preuve, c’est bien plus dur d’agir.' },
      { label: 'Tout supprimer et bloquer tout de suite', bon: false, feedback: 'Attention : bloquer/supprimer trop tôt, tu perds les preuves. On screene d’abord, on bloque ensuite.' }
    ]
  }
]

const es = [
  {
    id: 's1', titre: 'El comentario que hiere',
    situation: 'Un compañero publica un comentario burlón bajo tu foto. Os habéis enfadado esta mañana. Es la primera vez.',
    question: '¿Conflicto o acoso?',
    choix: [
      { label: 'Más bien un conflicto puntual', bon: true, feedback: 'Bien visto. Un hecho aislado tras una pelea, sin repetición ni público, es más bien un roce puntual. Igual molesta: si vuelve, guarda una prueba.' },
      { label: 'Es acoso', bon: false, feedback: 'No tan rápido: un solo comentario aislado no reúne los criterios (repetición, intención que dura, desequilibrio, público). Mantente atento por si vuelve.' }
    ]
  },
  {
    id: 's2', titre: 'El bucle de mensajes',
    situation: 'Desde hace dos semanas, un grupo te envía cada noche mensajes humillantes y otros les dan «me gusta». Te sientes solo frente a ellos.',
    question: '¿Conflicto o acoso?',
    choix: [
      { label: 'Es acoso', bon: true, feedback: 'Totalmente. Se repite + intención de hacer daño + estás solo frente a un grupo + público: están los 4 criterios. Pon las pruebas a salvo y busca ayuda.' },
      { label: 'Solo una broma pesada', bon: false, feedback: 'No es solo una broma: la repetición, el grupo y el público lo convierten en acoso. No tienes que gestionarlo sin ayuda.' }
    ]
  },
  {
    id: 's3', titre: 'La foto que circula',
    situation: 'Una foto incómoda tuya se comparte en varios grupos sin tu permiso. Gente que no conoces la comenta.',
    question: '¿Cuál es el primer buen reflejo?',
    choix: [
      { label: 'Capturar las pruebas y luego denunciar', bon: true, feedback: 'Sí: primero se documenta (capturas, enlaces, fechas), luego se denuncia y se pide la retirada. Sin pruebas es mucho más difícil actuar.' },
      { label: 'Borrar todo y bloquear enseguida', bon: false, feedback: 'Cuidado: si bloqueas o borras demasiado pronto, pierdes las pruebas. Primero capturas, luego bloqueas.' }
    ]
  }
]

export const getScenarios = (lang) => (lang === 'es' ? es : fr)
export const scenarios = fr
