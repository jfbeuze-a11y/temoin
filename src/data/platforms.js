// Fiches « bloquer / signaler / retrait » par plateforme (EF-P05) — bilingue FR/ES.
// ⚠ Contenu périssable : revue trimestrielle (§7.4).

const fr = [
  {
    id: 'instagram', nom: 'Instagram', couleur: '#E1306C',
    bloquer: ['Ouvre le profil de la personne.', 'Touche les trois points « … » en haut à droite.', 'Choisis « Bloquer », puis confirme.'],
    signaler: ['Sur le message, la publication ou le profil, touche « … ».', 'Choisis « Signaler ».', 'Sélectionne « Harcèlement ou intimidation » et suis les étapes.'],
    retrait: ['Pour une image de toi publiée sans accord : signale-la comme « contenu vous concernant ».', 'Demande le retrait via le formulaire d’aide Instagram si le signalement n’aboutit pas.'],
    rappel: 'Screene la preuve AVANT de bloquer : une fois bloqué, tu risques de plus y avoir accès.'
  },
  {
    id: 'tiktok', nom: 'TikTok', couleur: '#000000',
    bloquer: ['Va sur le profil de la personne.', 'Touche la flèche / les trois points en haut à droite.', 'Choisis « Bloquer ».'],
    signaler: ['Appuie longuement sur la vidéo ou le commentaire.', 'Touche « Signaler ».', 'Choisis le motif « Harcèlement et cyberintimidation ».'],
    retrait: ['Signale la vidéo qui te vise comme harcèlement.', 'Utilise le formulaire de signalement TikTok pour une demande de retrait détaillée.'],
    rappel: 'Screene la vidéo et l’URL avant de signaler : après, elle peut disparaître.'
  },
  {
    id: 'snapchat', nom: 'Snapchat', couleur: '#FFFC00',
    bloquer: ['Appuie sur le nom de la personne pour ouvrir son profil.', 'Touche les trois points « … ».', 'Choisis « Bloquer ».'],
    signaler: ['Appuie longuement sur le Snap ou le message.', 'Touche « Signaler ».', 'Indique « Harcèlement ou intimidation ».'],
    retrait: ['Sur Snapchat les contenus s’effacent vite : capture immédiatement (l’autre peut être notifié de la capture).', 'Signale au support Snapchat via les réglages d’aide.'],
    rappel: 'Les contenus s’effacent vite : screene direct, mais l’autre peut être prévenu de la capture.'
  },
  {
    id: 'discord', nom: 'Discord', couleur: '#5865F2',
    bloquer: ['Clique sur le pseudo de la personne.', 'Choisis « Bloquer ».'],
    signaler: ['Active le mode développeur pour copier l’identifiant du message si besoin.', 'Fais un clic droit / appui long sur le message → « Signaler ».', 'Pour un serveur entier : signale via le Trust & Safety de Discord.'],
    retrait: ['Quitte le serveur problématique après avoir capturé les preuves.', 'Signale le serveur ou l’utilisateur au support Discord.'],
    rappel: 'Copie le lien du message et screene la conv avant de quitter le serveur.'
  },
  {
    id: 'whatsapp', nom: 'WhatsApp', couleur: '#25D366',
    bloquer: ['Ouvre la conversation.', 'Touche le nom du contact en haut.', 'Fais défiler et choisis « Bloquer ».'],
    signaler: ['Dans le profil du contact ou du groupe, choisis « Signaler ».', 'WhatsApp transmet les derniers messages au support.'],
    retrait: ['Quitte le groupe après avoir exporté/capturé la conversation.', 'Pour un groupe : note les numéros des participants pour un éventuel signalement.'],
    rappel: 'Exporte ou screene la conv avant de quitter le groupe ou de bloquer.'
  },
  {
    id: 'youtube', nom: 'YouTube', couleur: '#FF0000',
    bloquer: ['Sur la chaîne, touche « À propos » → drapeau → « Bloquer cet utilisateur ».'],
    signaler: ['Sous la vidéo ou le commentaire, touche « … » → « Signaler ».', 'Choisis « Harcèlement ou cyberintimidation ».'],
    retrait: ['Pour une vidéo qui te vise, utilise le formulaire de signalement pour atteinte à la vie privée.'],
    rappel: 'Note l’URL exacte (avec le timecode si c’est un commentaire) avant de signaler.'
  }
]

const es = [
  {
    id: 'instagram', nom: 'Instagram', couleur: '#E1306C',
    bloquer: ['Abre el perfil de la persona.', 'Toca los tres puntos «…» arriba a la derecha.', 'Elige «Bloquear» y confirma.'],
    signaler: ['En el mensaje, la publicación o el perfil, toca «…».', 'Elige «Denunciar».', 'Selecciona «Acoso o intimidación» y sigue los pasos.'],
    retrait: ['Si publican una imagen tuya sin permiso: denúnciala como «contenido sobre ti».', 'Pide la retirada con el formulario de ayuda de Instagram si la denuncia no prospera.'],
    rappel: 'Haz la captura ANTES de bloquear: una vez bloqueado, puedes perder el acceso.'
  },
  {
    id: 'tiktok', nom: 'TikTok', couleur: '#000000',
    bloquer: ['Ve al perfil de la persona.', 'Toca la flecha / los tres puntos arriba a la derecha.', 'Elige «Bloquear».'],
    signaler: ['Mantén pulsado el vídeo o el comentario.', 'Toca «Denunciar».', 'Elige el motivo «Acoso e intimidación».'],
    retrait: ['Denuncia como acoso el vídeo que te ataca.', 'Usa el formulario de denuncia de TikTok para pedir la retirada con detalle.'],
    rappel: 'Captura el vídeo y la URL antes de denunciar: luego puede desaparecer.'
  },
  {
    id: 'snapchat', nom: 'Snapchat', couleur: '#FFFC00',
    bloquer: ['Pulsa el nombre de la persona para abrir su perfil.', 'Toca los tres puntos «…».', 'Elige «Bloquear».'],
    signaler: ['Mantén pulsado el Snap o el mensaje.', 'Toca «Denunciar».', 'Indica «Acoso o intimidación».'],
    retrait: ['En Snapchat los contenidos se borran rápido: captura de inmediato (pueden avisar a la otra persona de la captura).', 'Denuncia al soporte de Snapchat desde los ajustes de ayuda.'],
    rappel: 'Los contenidos se borran rápido: captura ya, pero pueden avisar a la otra persona.'
  },
  {
    id: 'discord', nom: 'Discord', couleur: '#5865F2',
    bloquer: ['Haz clic en el apodo de la persona.', 'Elige «Bloquear».'],
    signaler: ['Activa el modo desarrollador para copiar el ID del mensaje si hace falta.', 'Clic derecho / pulsación larga en el mensaje → «Denunciar».', 'Para un servidor entero: denuncia al equipo Trust & Safety de Discord.'],
    retrait: ['Sal del servidor problemático tras capturar las pruebas.', 'Denuncia el servidor o al usuario al soporte de Discord.'],
    rappel: 'Copia el enlace del mensaje y captura la conversación antes de salir del servidor (server).'
  },
  {
    id: 'whatsapp', nom: 'WhatsApp', couleur: '#25D366',
    bloquer: ['Abre la conversación.', 'Toca el nombre del contacto arriba.', 'Baja y elige «Bloquear».'],
    signaler: ['En el perfil del contacto o del grupo, elige «Denunciar».', 'WhatsApp envía los últimos mensajes al soporte.'],
    retrait: ['Sal del grupo tras exportar/capturar la conversación.', 'En un grupo: anota los números de los participantes por si hay que denunciar.'],
    rappel: 'Exporta o captura la conversación antes de salir del grupo o bloquear.'
  },
  {
    id: 'youtube', nom: 'YouTube', couleur: '#FF0000',
    bloquer: ['En el canal, toca «Información» → bandera → «Bloquear a este usuario».'],
    signaler: ['Bajo el vídeo o el comentario, toca «…» → «Denunciar».', 'Elige «Acoso o ciberacoso».'],
    retrait: ['Si un vídeo te ataca, usa el formulario de denuncia por violación de la privacidad.'],
    rappel: 'Anota la URL exacta (con el minuto si es un comentario) antes de denunciar.'
  }
]

export const getPlatforms = (lang) => (lang === 'es' ? es : fr)
export const platforms = fr
