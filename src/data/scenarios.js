// Entraînement par scénarios (EF-C04) — bilingue FR/ES.
const fr = [
  {
    id: 's1', titre: 'Le commentaire qui blesse',
    situation: 'Un camarade poste un commentaire moqueur sous ta photo. Vous vous êtes disputés ce matin. C’est la première fois.',
    question: 'Conflit ou harcèlement ?',
    choix: [
      { label: 'Plutôt un conflit ponctuel', bon: true, feedback: 'Bien vu. Un acte isolé lié à une dispute, sans répétition ni public organisé, ressemble davantage à un conflit. Ça reste désagréable : tu peux en parler et garder une trace si ça se reproduit.' },
      { label: 'C’est du harcèlement', bon: false, feedback: 'Pas si vite : un seul commentaire isolé ne réunit pas les critères (répétition, intention durable, déséquilibre, audience). Reste attentif si ça recommence.' }
    ]
  },
  {
    id: 's2', titre: 'La boucle de messages',
    situation: 'Depuis deux semaines, un groupe t’envoie chaque soir des messages humiliants et d’autres les « likent ». Tu te sens seul face à eux.',
    question: 'Conflit ou harcèlement ?',
    choix: [
      { label: 'C’est du harcèlement', bon: true, feedback: 'Exactement. Répétition + intention de nuire + déséquilibre (seul face à un groupe) + audience : les quatre critères sont réunis. Mets les preuves à l’abri et fais-toi aider.' },
      { label: 'Juste une mauvaise blague', bon: false, feedback: 'Ce n’est pas qu’une blague : la répétition, le groupe et le public en font un schéma de harcèlement. Tu n’as pas à gérer ça sans aide.' }
    ]
  },
  {
    id: 's3', titre: 'La photo qui circule',
    situation: 'Une photo gênante de toi est partagée dans plusieurs groupes sans ton accord. Des gens que tu ne connais pas commentent.',
    question: 'Quel est le premier bon réflexe ?',
    choix: [
      { label: 'Capturer les preuves, puis signaler', bon: true, feedback: 'Oui : on documente d’abord (captures, liens, dates), puis on signale et on demande le retrait. Sans preuve, c’est beaucoup plus difficile d’agir.' },
      { label: 'Tout supprimer et bloquer tout de suite', bon: false, feedback: 'Attention : bloquer/supprimer trop tôt fait perdre les preuves. On capture d’abord, on bloque ensuite.' }
    ]
  }
]

const es = [
  {
    id: 's1', titre: 'El comentario que hiere',
    situation: 'Un compañero publica un comentario burlón bajo tu foto. Os habéis peleado esta mañana. Es la primera vez.',
    question: '¿Conflicto o acoso?',
    choix: [
      { label: 'Más bien un conflicto puntual', bon: true, feedback: 'Bien visto. Un acto aislado ligado a una pelea, sin repetición ni público organizado, se parece más a un conflicto. Sigue siendo desagradable: puedes hablarlo y guardar una prueba si se repite.' },
      { label: 'Es acoso', bon: false, feedback: 'No tan rápido: un solo comentario aislado no reúne los criterios (repetición, intención duradera, desequilibrio, audiencia). Mantente atento por si vuelve a ocurrir.' }
    ]
  },
  {
    id: 's2', titre: 'El bucle de mensajes',
    situation: 'Desde hace dos semanas, un grupo te envía cada noche mensajes humillantes y otros les dan «me gusta». Te sientes solo frente a ellos.',
    question: '¿Conflicto o acoso?',
    choix: [
      { label: 'Es acoso', bon: true, feedback: 'Exacto. Repetición + intención de hacer daño + desequilibrio (solo frente a un grupo) + audiencia: se reúnen los cuatro criterios. Pon las pruebas a salvo y busca ayuda.' },
      { label: 'Solo una broma pesada', bon: false, feedback: 'No es solo una broma: la repetición, el grupo y el público lo convierten en un patrón de acoso. No tienes que gestionarlo sin ayuda.' }
    ]
  },
  {
    id: 's3', titre: 'La foto que circula',
    situation: 'Una foto incómoda tuya se comparte en varios grupos sin tu permiso. Gente que no conoces la comenta.',
    question: '¿Cuál es el primer buen reflejo?',
    choix: [
      { label: 'Capturar las pruebas y luego denunciar', bon: true, feedback: 'Sí: primero se documenta (capturas, enlaces, fechas), luego se denuncia y se pide la retirada. Sin pruebas es mucho más difícil actuar.' },
      { label: 'Borrar todo y bloquear enseguida', bon: false, feedback: 'Cuidado: bloquear o borrar demasiado pronto hace perder las pruebas. Primero se captura, luego se bloquea.' }
    ]
  }
]

export const getScenarios = (lang) => (lang === 'es' ? es : fr)
export const scenarios = fr
