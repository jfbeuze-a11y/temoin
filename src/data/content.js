// Contenus textuels (désescalade, témoin, accompagnement, parent, courriers) — bilingue FR/ES.

const fr = {
  desescalade: {
    titre: 'Souffle un coup',
    intro: 'Sur le moment, t’as envie de répondre direct. Voici les réflexes qui te protègent.',
    gestes: [
      { do: true, texte: 'Capture d’abord : screene les messages, note les dates et les liens.' },
      { do: true, texte: 'Mets les preuves au chaud dans le coffre AVANT de bloquer.' },
      { do: true, texte: 'Souffle. T’es pas obligé de répondre tout de suite, ni même de répondre.' },
      { do: false, texte: 'Réponds pas à la provoc : ça fait souvent monter la sauce.' },
      { do: false, texte: 'Te justifie pas, t’as rien à prouver à personne.' },
      { do: false, texte: 'Supprime pas les messages : c’est tes preuves.' },
      { do: true, texte: 'Dès que tu peux, parles-en à un adulte en qui t’as confiance.' }
    ]
  },
  temoin: {
    intro: 'Ce qui fait basculer une situation, c’est presque jamais l’adulte : c’est le pote qui brise le silence. Tu peux aider, sans te griller.',
    microGestes: [
      { titre: 'Ne pas amplifier', texte: 'Like pas, partage pas, commente pas le truc humiliant. Sans public, l’attaque retombe vite.' },
      { titre: 'Soutenir en privé', texte: 'Envoie un petit MP à la personne visée : « Je trouve ça nul, je suis là si besoin. » Ça compte grave.' },
      { titre: 'Signaler le contenu', texte: 'Signale le post à la plateforme. À plusieurs, ça part plus vite. Et tu peux le faire en anonyme.' },
      { titre: 'En parler à un adulte', texte: 'Tu balances pas : tu protèges quelqu’un. Un adulte de confiance peut agir là où toi tu peux pas.' }
    ],
    responsabilite: 'Partager ou liker un truc humiliant, c’est pas neutre : ça participe à la diffusion. La loi reconnaît la responsabilité de ceux qui relaient. Choisir de pas en rajouter, c’est déjà agir.',
    scriptAdulte: 'Bonjour, je voudrais vous parler de quelque chose. Un camarade se fait harceler en ligne et je ne sais pas comment l’aider. Est-ce qu’on peut en discuter ?'
  },
  adulteConfiance: {
    intro: 'Rien ne t’oblige à en parler à tes parents en premier. Choisis la personne avec qui tu te sens le plus en confiance.',
    pistes: [
      'Un parent, un grand frère ou une grande sœur',
      'Un oncle ou une tante, un cousin ou une cousine plus âgés',
      'Un professeur, le ou la CPE',
      'L’infirmier ou l’infirmière, l’assistant ou l’assistante sociale du collège ou du lycée',
      'Un entraîneur ou une entraîneuse, un animateur ou une animatrice que tu apprécies',
      'Le 3018, si tu préfères parler à quelqu’un d’extérieur et anonyme'
    ],
    scripts: [
      { titre: 'Pour amorcer', texte: 'Est-ce que je peux te parler de quelque chose qui me pèse en ce moment ? C’est important pour moi.' },
      { titre: 'Pour expliquer', texte: 'Depuis quelque temps, des personnes me harcèlent en ligne. J’ai gardé des preuves. J’ai besoin d’aide pour savoir quoi faire.' },
      { titre: 'Si c’est trop dur à dire', texte: 'Je prépare mon témoignage de ce qui se passe. Est-ce que tu peux le lire ? J’ai du mal à tout raconter à voix haute.' }
    ]
  },
  parent: {
    etancheite: 'Cet espace est totalement séparé de celui de votre enfant. Témoin ne vous donne AUCUN accès à ses données, son autodiagnostic, son coffre-fort ou son journal. C’est une garantie d’architecture, pas seulement une promesse. Un outil de surveillance serait contourné, puis fui. La confiance protège mieux que le contrôle.',
    signaux: {
      intro: 'Aucun signe ne « prouve » à lui seul un harcèlement. C’est un faisceau, un changement par rapport à d’habitude qui doit alerter, sans verser dans la paranoïa.',
      items: [
        'Repli, isolement, tristesse ou irritabilité inhabituelles',
        'Troubles du sommeil, de l’appétit, maux de ventre/tête récurrents',
        'Refus d’aller à l’école, baisse soudaine des résultats',
        'Réaction de stress ou d’évitement vis-à-vis du téléphone',
        'Disparition d’amis, abandon d’activités aimées',
        'Effacement de comptes, ou au contraire vérification compulsive'
      ]
    },
    bienReagir: {
      aFaire: [
        'Choisir un moment calme, sans le téléphone entre vous.',
        'Écouter sans dramatiser ni minimiser : « Je te crois, on va trouver des solutions ensemble. »',
        'Valoriser le fait qu’il/elle vous en parle : c’est un acte de confiance.',
        'Préserver les preuves avec lui/elle, puis signaler.',
        'Solliciter l’établissement (référent harcèlement) et, si besoin, le 3018.'
      ],
      aEviter: [
        'Confisquer le téléphone : votre enfant se sentira puni d’avoir parlé, et perdra l’accès aux preuves.',
        'Contacter impulsivement les autres parents ou les jeunes concernés : ça aggrave souvent.',
        'Répondre vous-même aux agresseurs en ligne.',
        'Minimiser (« ça va passer ») ou culpabiliser (« qu’as-tu fait pour ça ? »).',
        'Exiger qu’il/elle « se défende » ou « ignore » : ça ne marche pas et isole davantage.'
      ]
    },
    cadreLegal: {
      intro: 'Quelques repères. Le droit évolue : à faire valider et actualiser avec un professionnel.',
      points: [
        { titre: 'Délit de harcèlement scolaire', texte: 'La loi du 2 mars 2022 a créé un délit autonome de harcèlement scolaire, avec des peines aggravées selon les conséquences.' },
        { titre: 'Obligations de l’établissement', texte: 'Les établissements doivent agir contre le harcèlement (programme pHARe). Un référent harcèlement existe ; l’établissement doit protéger l’élève.' },
        { titre: 'Dépôt de plainte', texte: 'Vous pouvez déposer plainte au commissariat/gendarmerie, ou écrire au procureur. Le dossier de preuves de l’application peut appuyer la démarche.' },
        { titre: 'Retrait de contenu', texte: 'Le 3018 aide au retrait des contenus. PHAROS permet de signaler les contenus illicites. Pour les cas graves, un constat de commissaire de justice renforce la preuve.' }
      ]
    },
    enfantAuteur: {
      intro: 'Apprendre que son enfant est impliqué comme auteur est un choc. Le but n’est pas d’accabler, mais de responsabiliser et de stopper.',
      etapes: [
        'Accueillir le fait sans déni ni violence : la honte ferme le dialogue.',
        'Nommer clairement : ce sont des actes graves, qui blessent réellement et peuvent être punis par la loi.',
        'Faire prendre la mesure des conséquences pour la victime, et pour lui/elle.',
        'Exiger l’arrêt immédiat et la réparation (excuses, retrait des contenus).',
        'Travailler avec l’établissement plutôt que contre lui ; envisager un accompagnement.'
      ]
    },
    reglages: {
      intro: 'Mémo des bons réglages de confidentialité, à faire AVEC votre enfant (jamais à sa place, en cachette).',
      items: [
        'Comptes en privé par défaut ; listes d’amis/abonnés maîtrisées.',
        'Désactiver la géolocalisation des publications.',
        'Filtrer/limiter les commentaires et les messages des inconnus.',
        'Réfléchir avant de partager des informations personnelles ou des photos.',
        'Savoir bloquer, signaler et désactiver un compte temporairement.'
      ]
    }
  },
  courriers: [
    {
      id: 'retrait', titre: 'Demande de retrait de contenu', destinataire: 'À la plateforme / à l’auteur du contenu',
      corps: `Objet : Demande de retrait d’un contenu me concernant

Madame, Monsieur,

Un contenu me concernant a été publié sans mon consentement et porte atteinte à ma personne (harcèlement / atteinte à la vie privée).

Contenu concerné : [lien / description]
Date de constat : [date]

Je vous demande de procéder à son retrait dans les meilleurs délais.

Je vous prie d’agréer, Madame, Monsieur, mes salutations.

[Prénom / Nom]`
    },
    {
      id: 'etablissement', titre: 'Signalement à l’établissement', destinataire: 'À la direction / au référent harcèlement',
      corps: `Objet : Signalement d’une situation de harcèlement

Madame, Monsieur,

Je vous informe d’une situation de harcèlement subie par [prénom de l’élève], en classe de [classe].

Les faits, qui se répètent depuis [période], se déroulent [en ligne / à l’école] et consistent en [brève description].

Des preuves ont été conservées et peuvent vous être transmises.

Je sollicite la mise en œuvre du protocole de l’établissement (programme pHARe) et un entretien dans les meilleurs délais.

Je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Prénom / Nom], [qualité : élève ou parent]`
    },
    {
      id: 'parents', titre: 'Informer mes parents (brouillon)', destinataire: 'À mes parents',
      corps: `Maman, Papa,

J’ai quelque chose d’important à vous dire et c’est dur pour moi. Depuis [période], je me fais harceler [en ligne / à l’école].

J’ai gardé des preuves. Je ne vous l’ai pas dit avant parce que [j’avais honte / peur que ça empire].

J’ai besoin de votre aide, et surtout que vous ne réagissiez pas à chaud. On peut en parler calmement ?

[Prénom]`
    }
  ]
}

const es = {
  desescalade: {
    titre: 'Respira un momento',
    intro: 'En el momento dan ganas de responder ya. Estos son los reflejos que te protegen.',
    gestes: [
      { do: true, texte: 'Captura primero: hazte capturas de los mensajes, anota fechas y enlaces.' },
      { do: true, texte: 'Pon las pruebas a buen recaudo en la caja ANTES de bloquear.' },
      { do: true, texte: 'Respira. No tienes por qué responder ya, ni siquiera responder.' },
      { do: false, texte: 'No piques con la provocación: suele echar más leña al fuego.' },
      { do: false, texte: 'No te justifiques, no tienes nada que demostrarle a nadie.' },
      { do: false, texte: 'No borres los mensajes: son tus pruebas.' },
      { do: true, texte: 'En cuanto puedas, habla con un adulto en quien confíes.' }
    ]
  },
  temoin: {
    intro: 'Lo que cambia una situación casi nunca es el adulto: es el colega que rompe el silencio. Puedes ayudar sin exponerte.',
    microGestes: [
      { titre: 'No amplificar', texte: 'No des «me gusta», no compartas, no comentes el contenido humillante. Sin público, el ataque se apaga rápido.' },
      { titre: 'Apoyar en privado', texte: 'Mándale un MP a la persona atacada: «Me parece fatal, estoy aquí si lo necesitas.» Eso cuenta un montón.' },
      { titre: 'Denunciar el contenido', texte: 'Denuncia el post a la plataforma. Entre varios va más rápido. Y puedes hacerlo en anónimo.' },
      { titre: 'Hablar con un adulto', texte: 'No te estás chivando: estás protegiendo a alguien. Un adulto de confianza puede actuar donde tú no puedes.' }
    ],
    responsabilite: 'Compartir o dar «me gusta» a algo humillante no es neutral: participa en su difusión. Elegir no echar más leña ya es actuar.',
    scriptAdulte: 'Hola, me gustaría hablar de algo. Un compañero está sufriendo acoso en línea y no sé cómo ayudarlo. ¿Podemos hablarlo?'
  },
  adulteConfiance: {
    intro: 'Nada te obliga a contárselo primero a tus padres. Elige a la persona con la que más confianza tengas.',
    pistes: [
      'Un padre o madre, un hermano o hermana mayor',
      'Un tío o una tía, un primo o una prima mayor',
      'Un profesor o el responsable de convivencia del centro',
      'El enfermero o enfermera, el trabajador o trabajadora social del centro',
      'Un entrenador o entrenadora, un monitor o monitora que aprecies',
      'El 3018, si prefieres hablar con alguien externo y anónimo'
    ],
    scripts: [
      { titre: 'Para empezar', texte: '¿Puedo hablarte de algo que me está pesando ahora mismo? Es importante para mí.' },
      { titre: 'Para explicar', texte: 'Desde hace un tiempo, varias personas me acosan en línea. He guardado pruebas. Necesito ayuda para saber qué hacer.' },
      { titre: 'Si es muy difícil de decir', texte: 'Estoy preparando mi testimonio de lo que pasa. ¿Puedes leerlo? Me cuesta contarlo todo en voz alta.' }
    ]
  },
  parent: {
    etancheite: 'Este espacio está totalmente separado del de su hijo o hija. Témoin no le da NINGÚN acceso a sus datos, su autodiagnóstico, su caja fuerte ni su diario. Es una garantía de arquitectura, no solo una promesa. Una herramienta de vigilancia se esquiva y luego se abandona. La confianza protege mejor que el control.',
    signaux: {
      intro: 'Ninguna señal «prueba» por sí sola el acoso. Es un conjunto, un cambio respecto a lo habitual lo que debe alertar, sin caer en la paranoia.',
      items: [
        'Retraimiento, aislamiento, tristeza o irritabilidad inusuales',
        'Trastornos del sueño, del apetito, dolores de barriga o cabeza frecuentes',
        'Negarse a ir a la escuela, bajada repentina de las notas',
        'Estrés o evitación frente al teléfono',
        'Desaparición de amigos, abandono de actividades que le gustaban',
        'Borrado de cuentas, o al contrario comprobación compulsiva'
      ]
    },
    bienReagir: {
      aFaire: [
        'Elegir un momento tranquilo, sin el teléfono de por medio.',
        'Escuchar sin dramatizar ni minimizar: «Te creo, vamos a buscar soluciones juntos.»',
        'Valorar que le hable de ello: es un acto de confianza.',
        'Conservar las pruebas con él o ella, y luego denunciar.',
        'Recurrir al centro (responsable de acoso) y, si hace falta, al 3018.'
      ],
      aEviter: [
        'Confiscar el teléfono: su hijo se sentirá castigado por haber hablado, y perderá el acceso a las pruebas.',
        'Contactar de forma impulsiva con los otros padres o los jóvenes implicados: suele empeorar las cosas.',
        'Responder usted mismo a los agresores en línea.',
        'Minimizar («ya pasará») o culpabilizar («¿qué hiciste para eso?»).',
        'Exigir que «se defienda» o «lo ignore»: no funciona y aísla más.'
      ]
    },
    cadreLegal: {
      intro: 'Algunas referencias (Francia). El derecho evoluciona: conviene validarlo y actualizarlo con un profesional.',
      points: [
        { titre: 'Delito de acoso escolar', texte: 'La ley del 2 de marzo de 2022 creó en Francia un delito específico de acoso escolar, con penas agravadas según las consecuencias.' },
        { titre: 'Obligaciones del centro', texte: 'Los centros deben actuar contra el acoso (programa pHARe). Existe un responsable de acoso; el centro debe proteger al alumno.' },
        { titre: 'Presentar denuncia', texte: 'Puede denunciar en la policía/gendarmería, o escribir al fiscal. El expediente de pruebas de la aplicación puede apoyar el trámite.' },
        { titre: 'Retirada de contenido', texte: 'El 3018 ayuda a retirar contenidos. PHAROS permite denunciar contenidos ilícitos. En casos graves, un acta de un agente judicial refuerza la prueba.' }
      ]
    },
    enfantAuteur: {
      intro: 'Saber que su hijo está implicado como autor es un golpe. El objetivo no es hundirlo, sino responsabilizarlo y detener la situación.',
      etapes: [
        'Acoger el hecho sin negación ni violencia: la vergüenza cierra el diálogo.',
        'Nombrarlo con claridad: son actos graves, que hieren de verdad y pueden ser castigados por la ley.',
        'Hacerle tomar conciencia de las consecuencias para la víctima, y para sí mismo.',
        'Exigir el cese inmediato y la reparación (disculpas, retirada de contenidos).',
        'Trabajar con el centro en lugar de contra él; valorar un acompañamiento.'
      ]
    },
    reglages: {
      intro: 'Recordatorio de buenos ajustes de privacidad, para hacer CON su hijo (nunca en su lugar, a escondidas).',
      items: [
        'Cuentas en privado por defecto; listas de amigos/seguidores controladas.',
        'Desactivar la geolocalización de las publicaciones.',
        'Filtrar/limitar los comentarios y los mensajes de desconocidos.',
        'Pensar antes de compartir información personal o fotos.',
        'Saber bloquear, denunciar y desactivar una cuenta temporalmente.'
      ]
    }
  },
  courriers: [
    {
      id: 'retrait', titre: 'Solicitud de retirada de contenido', destinataire: 'A la plataforma / al autor del contenido',
      corps: `Asunto: Solicitud de retirada de un contenido sobre mí

Estimados señores:

Se ha publicado un contenido sobre mí sin mi consentimiento que atenta contra mi persona (acoso / violación de la intimidad).

Contenido afectado: [enlace / descripción]
Fecha de constatación: [fecha]

Les solicito que procedan a su retirada lo antes posible.

Atentamente,

[Nombre y apellidos]`
    },
    {
      id: 'etablissement', titre: 'Aviso al centro escolar', destinataire: 'A la dirección / al responsable de acoso',
      corps: `Asunto: Comunicación de una situación de acoso

Estimados señores:

Les informo de una situación de acoso sufrida por [nombre del alumno], en el curso de [curso].

Los hechos, que se repiten desde [periodo], ocurren [en línea / en el centro] y consisten en [breve descripción].

Se han conservado pruebas que pueden facilitarles.

Solicito la puesta en marcha del protocolo del centro y una entrevista lo antes posible.

Atentamente,

[Nombre y apellidos], [condición: alumno o familiar]`
    },
    {
      id: 'parents', titre: 'Informar a mis padres (borrador)', destinataire: 'A mis padres',
      corps: `Mamá, papá:

Tengo algo importante que deciros y me cuesta. Desde hace [periodo] sufro acoso [en línea / en la escuela].

He guardado pruebas. No os lo dije antes porque [me daba vergüenza / tenía miedo de que empeorara].

Necesito vuestra ayuda, y sobre todo que no reaccionéis en caliente. ¿Podemos hablarlo con calma?

[Nombre]`
    }
  ]
}

export const getContent = (lang) => (lang === 'es' ? es : fr)
// Compat FR (anciens imports nommés)
export const desescalade = fr.desescalade
export const temoin = fr.temoin
export const adulteConfiance = fr.adulteConfiance
export const parent = fr.parent
export const courriers = fr.courriers
