// « Le Fil » — fiction interactive à embranchements (variante 1 du CDC).
// Le joueur est témoin ; ses choix ont des conséquences ; chaque fin débriefe.
// Bilingue FR/ES. Moteur générique : chaque nœud a des `choices` OU une `end`.

const fr = {
  start: 'start',
  nodes: {
    start: {
      text: 'Vendredi soir. Dans la boucle de la classe, une vidéo tourne : Léa, filmée à son insu, glisse et tombe à la cantine. Déjà 30 vues, les commentaires fusent. Ton doigt hésite.',
      kori: 'Salut, c’est moi. Cette histoire, c’est toi qui la mènes. Tu fais quoi ?',
      choices: [
        { label: 'Je like, c’est juste drôle', to: 'like' },
        { label: 'Je scrolle, c’est pas mes affaires', to: 'ignore' },
        { label: 'Ça me met mal à l’aise', to: 'malaise' }
      ]
    },
    like: {
      text: 'Ton like fait grimper la vidéo. D’autres s’y mettent. Le lendemain, Léa n’est pas là. La vidéo a tourné toute la nuit.',
      kori: 'Un like, c’est jamais « juste » un like : ça pousse le contenu plus loin.',
      choices: [
        { label: 'Retirer mon like et arrêter', to: 'retire' },
        { label: 'Tant pis, tout le monde l’a vue', to: 'end_bad' }
      ]
    },
    ignore: {
      text: 'Tu scrolles. Mais la vidéo, elle, continue. Le week-end, le compteur explose. Lundi, Léa s’isole.',
      kori: 'Ignorer, c’est laisser faire. Le silence, c’est ce qui fait durer le harcèlement.',
      choices: [
        { label: 'Faire quelque chose maintenant', to: 'malaise' },
        { label: 'C’est trop tard, je laisse', to: 'end_meh' }
      ]
    },
    malaise: {
      text: 'Tu te dis que c’est pas ok. Mais agir, ça fait peur : et si on se retournait contre toi ?',
      kori: 'T’inquiète. On peut aider sans se griller. Par quoi tu commences ?',
      choices: [
        { label: 'Un message de soutien à Léa, en privé', to: 'soutien' },
        { label: 'Signaler la vidéo à la plateforme', to: 'signale' },
        { label: 'En parler à un adulte', to: 'adulte' }
      ]
    },
    retire: {
      text: 'Tu retires ton like et tu arrêtes d’en rire. C’est un début. Mais la vidéo tourne encore.',
      kori: 'Bien. Maintenant, tu peux vraiment aider.',
      choices: [{ label: 'Aider Léa', to: 'malaise' }]
    },
    soutien: {
      text: 'Tu écris à Léa : « Je trouve ça nul ce qui se passe, je suis là si besoin. » Elle répond pas tout de suite. Puis : « merci. » Juste ça. Mais ça change tout pour elle.',
      kori: 'Un seul message, et elle se sent moins seule. C’est énorme.',
      choices: [
        { label: 'Continuer : signaler la vidéo', to: 'signale' },
        { label: 'Continuer : en parler à un adulte', to: 'adulte' }
      ]
    },
    signale: {
      text: 'Tu signales la vidéo et tu proposes à deux potes de faire pareil. À plusieurs, la plateforme réagit plus vite : la vidéo saute dans la journée.',
      kori: 'Signaler à plusieurs, c’est l’astuce. Et tu peux le faire en anonyme.',
      choices: [
        { label: 'En parler aussi à un adulte', to: 'adulte' },
        { label: 'Voir comment ça finit', to: 'end_good' }
      ]
    },
    adulte: {
      text: 'Tu vas voir le CPE : « Une élève se fait harceler avec une vidéo, je sais pas trop comment l’aider. » Il te remercie d’avoir parlé. L’établissement enclenche le protocole.',
      kori: 'T’as pas balancé : t’as protégé quelqu’un. Tu pouvais pas régler ça seul.',
      choices: [{ label: 'Voir comment ça finit', to: 'end_good' }]
    },
    end_good: {
      end: {
        tone: 'good',
        titre: 'Tu as fait basculer l’histoire',
        texte: 'Grâce à un message, un signalement et un adulte prévenu, Léa n’est plus seule et la vidéo a été retirée. Ce qui change tout, c’est presque toujours un pair — toi.'
      }
    },
    end_meh: {
      end: {
        tone: 'meh',
        titre: 'Ça aurait pu tourner autrement',
        texte: 'Ne rien faire, c’est laisser le harcèlement durer. La bonne nouvelle : il n’est jamais trop tard pour envoyer un message, signaler, ou en parler.'
      }
    },
    end_bad: {
      end: {
        tone: 'bad',
        titre: 'Ton geste a pesé, dans le mauvais sens',
        texte: 'Liker et partager, ça nourrit l’attaque. La loi reconnaît la responsabilité de ceux qui relaient. Mais comprendre ça, c’est déjà pouvoir faire autrement la prochaine fois.'
      }
    }
  }
}

const es = {
  start: 'start',
  nodes: {
    start: {
      text: 'Viernes por la noche. En el chat de la clase circula un vídeo: Léa, grabada sin saberlo, resbala y se cae en el comedor. Ya 30 vistas, llueven los comentarios. Tu dedo duda.',
      kori: 'Hola, soy yo. Esta historia la llevas tú. ¿Qué haces?',
      choices: [
        { label: 'Le doy «me gusta», tiene gracia', to: 'like' },
        { label: 'Paso, no es asunto mío', to: 'ignore' },
        { label: 'Me incomoda', to: 'malaise' }
      ]
    },
    like: {
      text: 'Tu «me gusta» impulsa el vídeo. Otros se suman. Al día siguiente, Léa no viene. El vídeo ha circulado toda la noche.',
      kori: 'Un «me gusta» nunca es «solo» un «me gusta»: empuja el contenido más lejos.',
      choices: [
        { label: 'Quitar mi «me gusta» y parar', to: 'retire' },
        { label: 'Da igual, ya lo ha visto todo el mundo', to: 'end_bad' }
      ]
    },
    ignore: {
      text: 'Pasas de largo. Pero el vídeo sigue. El finde el contador se dispara. El lunes, Léa se aísla.',
      kori: 'Ignorar es dejar que pase. El silencio es lo que hace que el acoso dure.',
      choices: [
        { label: 'Hacer algo ahora', to: 'malaise' },
        { label: 'Ya es tarde, lo dejo', to: 'end_meh' }
      ]
    },
    malaise: {
      text: 'Te dices que esto no está bien. Pero actuar da miedo: ¿y si se vuelven contra ti?',
      kori: 'Tranqui. Se puede ayudar sin exponerse. ¿Por dónde empiezas?',
      choices: [
        { label: 'Un mensaje de apoyo a Léa, en privado', to: 'soutien' },
        { label: 'Denunciar el vídeo a la plataforma', to: 'signale' },
        { label: 'Hablar con un adulto', to: 'adulte' }
      ]
    },
    retire: {
      text: 'Quitas tu «me gusta» y dejas de reírte. Es un comienzo. Pero el vídeo sigue circulando.',
      kori: 'Bien. Ahora sí puedes ayudar de verdad.',
      choices: [{ label: 'Ayudar a Léa', to: 'malaise' }]
    },
    soutien: {
      text: 'Le escribes a Léa: «Me parece fatal lo que pasa, estoy aquí si lo necesitas.» No responde enseguida. Luego: «gracias.» Solo eso. Pero para ella lo cambia todo.',
      kori: 'Un solo mensaje, y se siente menos sola. Eso es enorme.',
      choices: [
        { label: 'Seguir: denunciar el vídeo', to: 'signale' },
        { label: 'Seguir: hablar con un adulto', to: 'adulte' }
      ]
    },
    signale: {
      text: 'Denuncias el vídeo y le propones a dos colegas hacer lo mismo. Entre varios, la plataforma reacciona antes: el vídeo cae en el día.',
      kori: 'Denunciar entre varios es el truco. Y puedes hacerlo en anónimo.',
      choices: [
        { label: 'Hablar también con un adulto', to: 'adulte' },
        { label: 'Ver cómo acaba', to: 'end_good' }
      ]
    },
    adulte: {
      text: 'Vas a ver al responsable del centro: «Una alumna sufre acoso con un vídeo y no sé cómo ayudarla.» Te agradece que hayas hablado. El centro activa el protocolo.',
      kori: 'No te has chivado: has protegido a alguien. No podías resolverlo solo.',
      choices: [{ label: 'Ver cómo acaba', to: 'end_good' }]
    },
    end_good: {
      end: {
        tone: 'good',
        titre: 'Hiciste cambiar la historia',
        texte: 'Gracias a un mensaje, una denuncia y un adulto avisado, Léa ya no está sola y el vídeo se retiró. Lo que cambia todo casi siempre es un igual: tú.'
      }
    },
    end_meh: {
      end: {
        tone: 'meh',
        titre: 'Podría haber acabado de otra forma',
        texte: 'No hacer nada es dejar que el acoso dure. La buena noticia: nunca es tarde para mandar un mensaje, denunciar o hablarlo.'
      }
    },
    end_bad: {
      end: {
        tone: 'bad',
        titre: 'Tu gesto pesó, en el mal sentido',
        texte: 'Dar «me gusta» y compartir alimenta el ataque. La ley reconoce la responsabilidad de quienes lo difunden. Pero entenderlo ya es poder actuar distinto la próxima vez.'
      }
    }
  }
}

export const getFil = (lang) => (lang === 'es' ? es : fr)
