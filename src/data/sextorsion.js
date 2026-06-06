// Guide d'urgence « chantage à la photo / sextorsion ». Bilingue FR/ES.
// Cas grave : ton rassurant mais clair, étapes dans le bon ordre. ⚠ Numéros France à vérifier.

const fr = {
  intro:
    'On te menace de diffuser une photo ou une vidéo intime si tu ne paies pas ou n’envoies pas plus ? C’est de la sextorsion. Respire : t’es pas en faute, c’est un délit, et on va t’aider à t’en sortir.',
  aFaire: [
    'Arrête de répondre. N’envoie rien, ne paie rien.',
    'Screene les preuves : le pseudo, le profil, les messages, les liens — mets-les au chaud dans le coffre.',
    'Bloque la personne, une fois les preuves prises.',
    'Préviens un adulte de confiance. T’as pas à gérer ça tout seul.',
    'Appelle le 3018 : ils aident au retrait en urgence, même le soir.',
    'Signale sur PHAROS. Et appelle le 17 si tu te sens en danger.'
  ],
  aEviter: [
    'Ne paie jamais : payer n’arrête rien, ça donne juste l’idée de recommencer.',
    'N’envoie pas d’autre photo, ne cède pas au chantage.',
    'Ne supprime pas les messages : c’est tes preuves.',
    'Reste pas seul avec ça, même si t’as honte. La honte, c’est pas la tienne.'
  ],
  rassure:
    'Plein de jeunes passent par là et s’en sortent. Si une image a déjà fuité, le 3018 peut demander un retrait en urgence. Tu vas t’en sortir, promis.'
}

const es = {
  intro:
    '¿Te amenazan con difundir una foto o un vídeo íntimo si no pagas o no envías más? Eso es sextorsión. Respira: no es culpa tuya, es un delito, y vamos a ayudarte a salir de esto.',
  aFaire: [
    'Deja de responder. No envíes nada, no pagues nada.',
    'Captura las pruebas: el usuario, el perfil, los mensajes, los enlaces — guárdalos a salvo en la caja.',
    'Bloquea a la persona, una vez tengas las pruebas.',
    'Avisa a un adulto de confianza. No tienes que gestionar esto tú solo.',
    'Llama al 3018: ayudan a retirar el contenido con urgencia, incluso de noche.',
    'Denuncia en PHAROS. Y llama al 17 si te sientes en peligro.'
  ],
  aEviter: [
    'No pagues nunca: pagar no detiene nada, solo da pie a que repitan.',
    'No envíes otra foto, no cedas al chantaje.',
    'No borres los mensajes: son tus pruebas.',
    'No te quedes solo con esto, aunque te dé vergüenza. La vergüenza no es tuya.'
  ],
  rassure:
    'Muchos jóvenes pasan por esto y salen adelante. Si una imagen ya se ha filtrado, el 3018 puede pedir una retirada urgente. Vas a salir de esto, palabra.'
}

export const getSextorsion = (lang) => (lang === 'es' ? es : fr)
