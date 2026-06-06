// Autodiagnostic guidé (EF-C01) — bilingue FR/ES. 4 critères du harcèlement.

const questionsFr = [
  {
    id: 'repetition',
    critere: 'Répétition',
    question: 'Est-ce que ça se répète ?',
    help: 'Le harcèlement, ce n’est pas une dispute isolée : ce sont des actes qui reviennent.',
    options: [
      { label: 'Non, c’est arrivé une seule fois', value: 0 },
      { label: 'Quelques fois', value: 1 },
      { label: 'Souvent, presque tous les jours', value: 2 }
    ]
  },
  {
    id: 'intention',
    critere: 'Intention de nuire',
    question: 'Est-ce que c’est fait pour te blesser, t’humilier ou te faire peur ?',
    help: 'Une maladresse ou une blague qui dérape, ce n’est pas pareil qu’une volonté de faire mal.',
    options: [
      { label: 'Non, je pense que c’était involontaire', value: 0 },
      { label: 'Je ne suis pas sûr', value: 1 },
      { label: 'Oui, c’est clairement pour me faire du mal', value: 2 }
    ]
  },
  {
    id: 'pouvoir',
    critere: 'Déséquilibre de pouvoir',
    question: 'As-tu l’impression de ne pas pouvoir te défendre ou faire cesser la situation ?',
    help: 'Quand on est seul face à un groupe, ou qu’on se sent piégé, il y a un déséquilibre.',
    options: [
      { label: 'Non, je peux gérer', value: 0 },
      { label: 'C’est difficile', value: 1 },
      { label: 'Je n’arrive pas à réagir', value: 2 }
    ]
  },
  {
    id: 'public',
    critere: 'Dimension publique',
    question: 'D’autres personnes voient, partagent, commentent ou « likent » ?',
    help: 'En ligne, le public et l’audience amplifient la violence, c’est ce qui rend le cyberharcèlement si lourd.',
    options: [
      { label: 'Non, ça reste entre nous', value: 0 },
      { label: 'Quelques personnes', value: 1 },
      { label: 'Oui, c’est public / ça circule', value: 2 }
    ]
  }
]

const questionsEs = [
  {
    id: 'repetition',
    critere: 'Repetición',
    question: '¿Se repite?',
    help: 'El acoso no es una discusión aislada: son actos que vuelven una y otra vez.',
    options: [
      { label: 'No, pasó una sola vez', value: 0 },
      { label: 'Algunas veces', value: 1 },
      { label: 'A menudo, casi todos los días', value: 2 }
    ]
  },
  {
    id: 'intention',
    critere: 'Intención de hacer daño',
    question: '¿Se hace para herirte, humillarte o darte miedo?',
    help: 'Una torpeza o una broma que se pasa de la raya no es lo mismo que una voluntad de hacer daño.',
    options: [
      { label: 'No, creo que fue sin querer', value: 0 },
      { label: 'No estoy seguro', value: 1 },
      { label: 'Sí, claramente es para hacerme daño', value: 2 }
    ]
  },
  {
    id: 'pouvoir',
    critere: 'Desequilibrio de poder',
    question: '¿Sientes que no puedes defenderte o hacer que pare?',
    help: 'Cuando estás solo frente a un grupo, o te sientes atrapado, hay un desequilibrio.',
    options: [
      { label: 'No, puedo manejarlo', value: 0 },
      { label: 'Es difícil', value: 1 },
      { label: 'No logro reaccionar', value: 2 }
    ]
  },
  {
    id: 'public',
    critere: 'Dimensión pública',
    question: '¿Otras personas lo ven, lo comparten, lo comentan o le dan «me gusta»?',
    help: 'En línea, el público y la audiencia amplifican la violencia, eso es lo que hace tan duro el ciberacoso.',
    options: [
      { label: 'No, queda entre nosotros', value: 0 },
      { label: 'Algunas personas', value: 1 },
      { label: 'Sí, es público / circula', value: 2 }
    ]
  }
]

const messagesFr = {
  'reperes-isoles': {
    titre: 'Quelques repères, mais pas un schéma clair de harcèlement',
    texte:
      'D’après tes réponses, on est peut-être face à un conflit ou un incident ponctuel plutôt qu’à du harcèlement. '
      + 'Ça ne veut pas dire que ce que tu ressens n’est pas réel ni important. Si ça t’affecte, tu peux quand même '
      + 'en parler et garder une trace.',
    ton: 'neutre'
  },
  'signaux-presents': {
    titre: 'Plusieurs signaux de harcèlement sont présents',
    texte:
      'Plusieurs critères du harcèlement apparaissent dans tes réponses. Ce n’est pas « rien ». '
      + 'Le bon réflexe maintenant : conserver les preuves avant de bloquer, et en parler à un adulte de confiance.',
    ton: 'attention'
  },
  'schema-harcelement': {
    titre: 'La situation correspond à un schéma de harcèlement',
    texte:
      'D’après tes réponses, ce que tu vis réunit les critères du harcèlement. Ce n’est pas de ta faute, et tu n’as '
      + 'pas à gérer ça sans aide. Mets tes preuves à l’abri dans le coffre-fort, puis fais-toi aider.',
    ton: 'fort'
  }
}

const messagesEs = {
  'reperes-isoles': {
    titre: 'Algunas señales, pero no un patrón claro de acoso',
    texte:
      'Según tus respuestas, quizá se trate de un conflicto o un incidente puntual más que de acoso. '
      + 'Eso no significa que lo que sientes no sea real ni importante. Si te afecta, igual puedes '
      + 'hablarlo y guardar una prueba.',
    ton: 'neutre'
  },
  'signaux-presents': {
    titre: 'Hay varias señales de acoso',
    texte:
      'Varios criterios del acoso aparecen en tus respuestas. No es «nada». '
      + 'Lo más sensato ahora: conservar las pruebas antes de bloquear, y hablarlo con un adulto de confianza.',
    ton: 'attention'
  },
  'schema-harcelement': {
    titre: 'La situación corresponde a un patrón de acoso',
    texte:
      'Según tus respuestas, lo que vives reúne los criterios del acoso. No es culpa tuya, y no tienes '
      + 'que gestionarlo sin ayuda. Pon tus pruebas a salvo en la caja fuerte y busca ayuda.',
    ton: 'fort'
  }
}

const data = {
  fr: { questions: questionsFr, messages: messagesFr },
  es: { questions: questionsEs, messages: messagesEs }
}

export const getDiagnosticQuestions = (lang) => (data[lang] || data.fr).questions

export function interpretDiagnostic(answers, lang = 'fr') {
  const bundle = data[lang] || data.fr
  const questions = bundle.questions
  const total = Object.values(answers).reduce((a, b) => a + (b || 0), 0)
  const present = questions.filter((q) => (answers[q.id] || 0) >= 1).map((q) => q.critere)

  let niveau
  if (total <= 2) niveau = 'reperes-isoles'
  else if (total <= 5) niveau = 'signaux-presents'
  else niveau = 'schema-harcelement'

  return { niveau, total, present, ...bundle.messages[niveau] }
}

// Compat FR par défaut
export const diagnosticQuestions = questionsFr
