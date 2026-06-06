// « Le Fil » — fiction interactive à embranchements (variante 1 du CDC).
// 3 points de vue : témoin, victime, auteur. Choix à conséquences, débrief à la fin.
// Bilingue FR/ES. Moteur générique : chaque nœud a `choices` OU une `end`.

const fr = {
  start: 'choose',
  nodes: {
    choose: {
      text: 'Le harcèlement, ça se joue à plusieurs. Tu veux vivre l’histoire de quel côté ?',
      kori: 'Choisis un rôle. Tu pourras revenir essayer les autres.',
      choices: [
        { label: 'Je suis témoin', to: 't_start' },
        { label: 'C’est moi qu’on vise', to: 'v_start' },
        { label: 'J’ai participé', to: 'a_start' }
      ]
    },

    // ----- TÉMOIN -----
    t_start: {
      text: 'Vendredi soir. Dans la boucle de la classe, une vidéo tourne : Léa, filmée à son insu, glisse et tombe à la cantine. Déjà 30 vues, les commentaires fusent. Ton doigt hésite.',
      kori: 'Cette histoire, c’est toi qui la mènes. Tu fais quoi ?',
      choices: [
        { label: 'Je like, c’est juste drôle', to: 't_like' },
        { label: 'Je scrolle, c’est pas mes affaires', to: 't_ignore' },
        { label: 'Ça me met mal à l’aise', to: 't_malaise' }
      ]
    },
    t_like: {
      text: 'Ton like fait grimper la vidéo. D’autres s’y mettent. Le lendemain, Léa n’est pas là. La vidéo a tourné toute la nuit.',
      kori: 'Un like, c’est jamais « juste » un like : ça pousse le contenu plus loin.',
      choices: [
        { label: 'Retirer mon like et arrêter', to: 't_retire' },
        { label: 'Tant pis, tout le monde l’a vue', to: 'end_bad' }
      ]
    },
    t_ignore: {
      text: 'Tu scrolles. Mais la vidéo, elle, continue. Le week-end, le compteur explose. Lundi, Léa s’isole.',
      kori: 'Ignorer, c’est laisser faire. Le silence, c’est ce qui fait durer le harcèlement.',
      choices: [
        { label: 'Faire quelque chose maintenant', to: 't_malaise' },
        { label: 'C’est trop tard, je laisse', to: 'end_meh' }
      ]
    },
    t_malaise: {
      text: 'Tu te dis que c’est pas ok. Mais agir, ça fait peur : et si on se retournait contre toi ?',
      kori: 'T’inquiète. On peut aider sans se griller. Par quoi tu commences ?',
      choices: [
        { label: 'Un message de soutien à Léa, en privé', to: 't_soutien' },
        { label: 'Signaler la vidéo à la plateforme', to: 't_signale' },
        { label: 'En parler à un adulte', to: 't_adulte' }
      ]
    },
    t_retire: {
      text: 'Tu retires ton like et tu arrêtes d’en rire. C’est un début. Mais la vidéo tourne encore.',
      kori: 'Bien. Maintenant, tu peux vraiment aider.',
      choices: [{ label: 'Aider Léa', to: 't_malaise' }]
    },
    t_soutien: {
      text: 'Tu écris à Léa : « Je trouve ça nul ce qui se passe, je suis là si besoin. » Elle répond pas tout de suite. Puis : « merci. » Juste ça. Mais ça change tout pour elle.',
      kori: 'Un seul message, et elle se sent moins seule. C’est énorme.',
      choices: [
        { label: 'Continuer : signaler la vidéo', to: 't_signale' },
        { label: 'Continuer : en parler à un adulte', to: 't_adulte' }
      ]
    },
    t_signale: {
      text: 'Tu signales la vidéo et tu proposes à deux potes de faire pareil. À plusieurs, la plateforme réagit plus vite : la vidéo saute dans la journée.',
      kori: 'Signaler à plusieurs, c’est l’astuce. Et tu peux le faire en anonyme.',
      choices: [
        { label: 'En parler aussi à un adulte', to: 't_adulte' },
        { label: 'Voir comment ça finit', to: 'end_good' }
      ]
    },
    t_adulte: {
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
    },

    // ----- VICTIME -----
    v_start: {
      text: 'C’est toi qu’on vise. Depuis quelques jours, des messages moqueurs tombent dans la boucle, et ce matin une rumeur sur toi circule. T’as la boule au ventre.',
      kori: 'Je suis là. Respire. On y va à ton rythme. Tu fais quoi ?',
      choices: [
        { label: 'Je réponds pour me défendre', to: 'v_repond' },
        { label: 'Je supprime tout et je bloque', to: 'v_supprime' },
        { label: 'Je garde les preuves et je souffle', to: 'v_preuve' }
      ]
    },
    v_repond: {
      text: 'Tu réponds, ça part en clash. Ils en rajoutent, d’autres s’y mettent. Tu te sens encore plus mal.',
      kori: 'Répondre à chaud, ça nourrit souvent l’escalade. On peut reprendre la main autrement.',
      choices: [{ label: 'Souffler et garder les preuves', to: 'v_preuve' }]
    },
    v_supprime: {
      text: 'Tu supprimes les messages et tu bloques. Sur le moment ça soulage… mais t’as plus aucune preuve si ça continue.',
      kori: 'Bloquer, oui — mais APRÈS avoir screené. Les preuves, c’est ce qui aide à faire arrêter.',
      choices: [{ label: 'Recommencer autrement', to: 'v_preuve' }]
    },
    v_preuve: {
      text: 'Tu screenes tout et tu respires un coup. Maintenant t’as de quoi agir, et c’est pas toi le problème.',
      kori: 'Bien joué. Tu n’es en faute de rien. Étape suivante ?',
      choices: [
        { label: 'En parler à un adulte de confiance', to: 'v_adulte' },
        { label: 'Appeler le 3018', to: 'v_3018' }
      ]
    },
    v_adulte: {
      text: 'Tu montres tes preuves à un adulte de confiance. Tu n’as plus à tout porter seul. L’établissement peut agir.',
      kori: 'Voilà. La honte change de camp.',
      choices: [{ label: 'Voir comment ça finit', to: 'v_end_good' }]
    },
    v_3018: {
      text: 'Tu appelles le 3018. On t’écoute, on t’aide à faire retirer les contenus. Tu te sens un peu moins seul.',
      kori: 'Ils font ça toute la journée. Demander de l’aide, c’est une force.',
      choices: [{ label: 'Voir comment ça finit', to: 'v_end_good' }]
    },
    v_end_good: {
      end: {
        tone: 'good',
        titre: 'Tu as repris la main',
        texte: 'Garder les preuves, souffler, et en parler : t’es en faute de rien, et t’as pas à gérer ça seul. C’est exactement comme ça qu’on fait arrêter.'
      }
    },

    // ----- AUTEUR -----
    a_start: {
      text: 'Avec ta bande, vous charriez un gars de la classe. Aujourd’hui, quelqu’un propose de poster une photo gênante de lui. Tout le monde rigole. On attend ta réaction.',
      kori: 'Là, c’est un moment qui compte vraiment. Tu fais quoi ?',
      choices: [
        { label: 'Je poste, c’est juste pour rire', to: 'a_poste' },
        { label: 'Je participe pas, mais je dis rien', to: 'a_passif' },
        { label: 'Je dis stop', to: 'a_stop' }
      ]
    },
    a_poste: {
      text: 'La photo tourne. Le gars craque, il vient plus en cours. Le bahut ouvre une enquête : ton nom revient. Tu réalises que c’était pas « pour rire ».',
      kori: 'Ce qui est « drôle » pour le groupe peut détruire l’autre. Et la loi punit le harcèlement, même « pour rire ».',
      choices: [{ label: 'Réparer : ce que je peux faire', to: 'a_repare' }]
    },
    a_passif: {
      text: 'Tu rigoles pas, mais tu dis rien. Ça continue. Ton silence, ils le prennent pour un feu vert.',
      kori: 'Ne rien dire, c’est laisser faire. Un seul qui dit stop, et souvent ça s’arrête.',
      choices: [{ label: 'Dire stop maintenant', to: 'a_stop' }]
    },
    a_stop: {
      text: 'Tu dis : « Non, on arrête, c’est pas drôle. » Un blanc. Puis un autre approuve. La photo n’est pas postée.',
      kori: 'Tu viens d’éviter une catastrophe. Faut du courage pour ça — respect.',
      choices: [{ label: 'Voir comment ça finit', to: 'a_end_good' }]
    },
    a_repare: {
      text: 'Tu présentes des excuses sincères, tu demandes le retrait de la photo, tu en parles à un adulte. Ça n’efface pas tout, mais ça compte vraiment.',
      kori: 'Reconnaître et réparer, c’est la seule vraie sortie. Bravo d’avoir osé.',
      choices: [{ label: 'Voir comment ça finit', to: 'a_end_repair' }]
    },
    a_end_good: {
      end: {
        tone: 'good',
        titre: 'Tu as stoppé l’engrenage',
        texte: 'Dire stop, c’est le geste le plus fort. Souvent, le groupe n’attendait que ça — quelqu’un d’assez courageux pour le faire.'
      }
    },
    a_end_repair: {
      end: {
        tone: 'meh',
        titre: 'Il n’est jamais trop tard pour réparer',
        texte: 'Le mal est fait, mais reconnaître, s’excuser et faire retirer le contenu, ça change les choses — pour l’autre et pour toi. Le harcèlement est un délit ; en sortir, c’est possible.'
      }
    }
  }
}

const es = {
  start: 'choose',
  nodes: {
    choose: {
      text: 'El acoso se juega entre varios. ¿Desde qué lado quieres vivir la historia?',
      kori: 'Elige un papel. Podrás volver a probar los otros.',
      choices: [
        { label: 'Soy testigo', to: 't_start' },
        { label: 'Es a mí a quien atacan', to: 'v_start' },
        { label: 'He participado', to: 'a_start' }
      ]
    },

    t_start: {
      text: 'Viernes por la noche. En el chat de la clase circula un vídeo: Léa, grabada sin saberlo, resbala y se cae en el comedor. Ya 30 vistas, llueven los comentarios. Tu dedo duda.',
      kori: 'Esta historia la llevas tú. ¿Qué haces?',
      choices: [
        { label: 'Le doy «me gusta», tiene gracia', to: 't_like' },
        { label: 'Paso, no es asunto mío', to: 't_ignore' },
        { label: 'Me incomoda', to: 't_malaise' }
      ]
    },
    t_like: {
      text: 'Tu «me gusta» impulsa el vídeo. Otros se suman. Al día siguiente, Léa no viene. El vídeo ha circulado toda la noche.',
      kori: 'Un «me gusta» nunca es «solo» un «me gusta»: empuja el contenido más lejos.',
      choices: [
        { label: 'Quitar mi «me gusta» y parar', to: 't_retire' },
        { label: 'Da igual, ya lo ha visto todo el mundo', to: 'end_bad' }
      ]
    },
    t_ignore: {
      text: 'Pasas de largo. Pero el vídeo sigue. El finde el contador se dispara. El lunes, Léa se aísla.',
      kori: 'Ignorar es dejar que pase. El silencio es lo que hace que el acoso dure.',
      choices: [
        { label: 'Hacer algo ahora', to: 't_malaise' },
        { label: 'Ya es tarde, lo dejo', to: 'end_meh' }
      ]
    },
    t_malaise: {
      text: 'Te dices que esto no está bien. Pero actuar da miedo: ¿y si se vuelven contra ti?',
      kori: 'Tranqui. Se puede ayudar sin exponerse. ¿Por dónde empiezas?',
      choices: [
        { label: 'Un mensaje de apoyo a Léa, en privado', to: 't_soutien' },
        { label: 'Denunciar el vídeo a la plataforma', to: 't_signale' },
        { label: 'Hablar con un adulto', to: 't_adulte' }
      ]
    },
    t_retire: {
      text: 'Quitas tu «me gusta» y dejas de reírte. Es un comienzo. Pero el vídeo sigue circulando.',
      kori: 'Bien. Ahora sí puedes ayudar de verdad.',
      choices: [{ label: 'Ayudar a Léa', to: 't_malaise' }]
    },
    t_soutien: {
      text: 'Le escribes a Léa: «Me parece fatal lo que pasa, estoy aquí si lo necesitas.» No responde enseguida. Luego: «gracias.» Solo eso. Pero para ella lo cambia todo.',
      kori: 'Un solo mensaje, y se siente menos sola. Eso es enorme.',
      choices: [
        { label: 'Seguir: denunciar el vídeo', to: 't_signale' },
        { label: 'Seguir: hablar con un adulto', to: 't_adulte' }
      ]
    },
    t_signale: {
      text: 'Denuncias el vídeo y le propones a dos colegas hacer lo mismo. Entre varios, la plataforma reacciona antes: el vídeo cae en el día.',
      kori: 'Denunciar entre varios es el truco. Y puedes hacerlo en anónimo.',
      choices: [
        { label: 'Hablar también con un adulto', to: 't_adulte' },
        { label: 'Ver cómo acaba', to: 'end_good' }
      ]
    },
    t_adulte: {
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
    },

    v_start: {
      text: 'Es a ti a quien atacan. Desde hace unos días caen mensajes burlones en el chat, y esta mañana circula un rumor sobre ti. Tienes un nudo en el estómago.',
      kori: 'Estoy aquí. Respira. Vamos a tu ritmo. ¿Qué haces?',
      choices: [
        { label: 'Respondo para defenderme', to: 'v_repond' },
        { label: 'Lo borro todo y bloqueo', to: 'v_supprime' },
        { label: 'Guardo las pruebas y respiro', to: 'v_preuve' }
      ]
    },
    v_repond: {
      text: 'Respondes y se monta el pollo. Ellos siguen, otros se suman. Te sientes aún peor.',
      kori: 'Responder en caliente suele echar más leña. Se puede recuperar el control de otra forma.',
      choices: [{ label: 'Respirar y guardar las pruebas', to: 'v_preuve' }]
    },
    v_supprime: {
      text: 'Borras los mensajes y bloqueas. En el momento alivia… pero te quedas sin pruebas si sigue.',
      kori: 'Bloquear, sí — pero DESPUÉS de capturar. Las pruebas son lo que ayuda a que pare.',
      choices: [{ label: 'Empezar de otra forma', to: 'v_preuve' }]
    },
    v_preuve: {
      text: 'Capturas todo y respiras un momento. Ahora tienes con qué actuar, y el problema no eres tú.',
      kori: 'Bien hecho. No tienes culpa de nada. ¿Siguiente paso?',
      choices: [
        { label: 'Hablar con un adulto de confianza', to: 'v_adulte' },
        { label: 'Llamar al 3018', to: 'v_3018' }
      ]
    },
    v_adulte: {
      text: 'Le enseñas tus pruebas a un adulto de confianza. Ya no tienes que cargar con todo solo. El centro puede actuar.',
      kori: 'Eso es. La vergüenza cambia de bando.',
      choices: [{ label: 'Ver cómo acaba', to: 'v_end_good' }]
    },
    v_3018: {
      text: 'Llamas al 3018. Te escuchan, te ayudan a retirar los contenidos. Te sientes algo menos solo.',
      kori: 'Hacen esto todo el día. Pedir ayuda es una fortaleza.',
      choices: [{ label: 'Ver cómo acaba', to: 'v_end_good' }]
    },
    v_end_good: {
      end: {
        tone: 'good',
        titre: 'Has recuperado el control',
        texte: 'Guardar las pruebas, respirar y hablarlo: no tienes culpa de nada y no tienes que gestionarlo solo. Así es exactamente como se consigue que pare.'
      }
    },

    a_start: {
      text: 'Con tu grupo os metéis con un chico de la clase. Hoy alguien propone publicar una foto vergonzosa de él. Todos se ríen. Esperan tu reacción.',
      kori: 'Este es un momento que cuenta de verdad. ¿Qué haces?',
      choices: [
        { label: 'La publico, es solo por risa', to: 'a_poste' },
        { label: 'No participo, pero no digo nada', to: 'a_passif' },
        { label: 'Digo basta', to: 'a_stop' }
      ]
    },
    a_poste: {
      text: 'La foto circula. El chico se hunde, deja de venir a clase. El centro abre una investigación: tu nombre aparece. Te das cuenta de que no era «por risa».',
      kori: 'Lo «gracioso» para el grupo puede destruir al otro. Y la ley castiga el acoso, aunque sea «por risa».',
      choices: [{ label: 'Reparar: lo que puedo hacer', to: 'a_repare' }]
    },
    a_passif: {
      text: 'No te ríes, pero no dices nada. Sigue. Tu silencio lo toman como luz verde.',
      kori: 'No decir nada es dejar que pase. Uno solo que diga basta, y muchas veces para.',
      choices: [{ label: 'Decir basta ahora', to: 'a_stop' }]
    },
    a_stop: {
      text: 'Dices: «No, paramos, no tiene gracia.» Un silencio. Luego otro te apoya. La foto no se publica.',
      kori: 'Acabas de evitar una catástrofe. Hace falta valor — respeto.',
      choices: [{ label: 'Ver cómo acaba', to: 'a_end_good' }]
    },
    a_repare: {
      text: 'Pides disculpas sinceras, pides que retiren la foto, lo hablas con un adulto. No lo borra todo, pero cuenta de verdad.',
      kori: 'Reconocer y reparar es la única salida real. Bien por atreverte.',
      choices: [{ label: 'Ver cómo acaba', to: 'a_end_repair' }]
    },
    a_end_good: {
      end: {
        tone: 'good',
        titre: 'Has cortado la espiral',
        texte: 'Decir basta es el gesto más fuerte. Muchas veces el grupo solo esperaba eso: alguien con valor para hacerlo.'
      }
    },
    a_end_repair: {
      end: {
        tone: 'meh',
        titre: 'Nunca es tarde para reparar',
        texte: 'El daño está hecho, pero reconocer, disculparse y retirar el contenido cambia las cosas — para el otro y para ti. El acoso es un delito; salir de él es posible.'
      }
    }
  }
}

export const getFil = (lang) => (lang === 'es' ? es : fr)
