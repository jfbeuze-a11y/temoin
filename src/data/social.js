// Module « Me protéger sur les réseaux sociaux » — sécuriser et protéger son identité.
// Bilingue FR/ES. ⚠ Procédures susceptibles d'évoluer (revue régulière, §7.4).

const fr = {
  intro:
    'Avant même qu’un problème arrive, tu peux verrouiller tes comptes pour protéger ton identité et tes informations. Voici les réglages essentiels, réseau par réseau.',
  base: {
    titre: 'Les 4 réflexes qui valent pour tous les réseaux',
    items: [
      'Active la double authentification (2FA) : même si on devine ton mot de passe, on ne peut pas entrer.',
      'Mets ton compte en privé : seuls tes abonnés validés voient tes contenus.',
      'Ne donne jamais ton vrai nom complet, ton école, ta ville, ton adresse ou ton numéro dans ta bio.',
      'Désactive le partage de ta position et n’ajoute pas de lieu à tes publications.'
    ]
  },
  reseaux: [
    {
      id: 'instagram',
      nom: 'Instagram',
      conseils: [
        { titre: 'Compte privé', texte: 'Réglages → Confidentialité du compte → active « Compte privé ».' },
        { titre: 'Double authentification', texte: 'Réglages → Centre de comptes → Mot de passe et sécurité → Authentification à deux facteurs (appli d’authentification de préférence).' },
        { titre: 'Qui peut t’identifier / te mentionner', texte: 'Confidentialité → Identifications et mentions → limite à « Personnes que tu suis » ou « Personne ».' },
        { titre: 'Messages des inconnus', texte: 'Confidentialité → Messages → limite qui peut t’envoyer des demandes de message.' },
        { titre: 'Story', texte: 'Tu peux masquer ta story à certaines personnes et désactiver le repartage.' }
      ]
    },
    {
      id: 'snapchat',
      nom: 'Snapchat',
      conseils: [
        { titre: 'Mode fantôme (Snap Map)', texte: 'Ouvre la carte → réglages → active le « Mode fantôme » pour ne plus partager ta position.' },
        { titre: 'Qui peut me contacter', texte: 'Réglages → « Me contacter » → choisis « Mes amis ».' },
        { titre: 'Qui peut voir ma story', texte: 'Réglages → « Voir ma story » → « Mes amis » ou une liste personnalisée.' },
        { titre: 'Double authentification', texte: 'Réglages → Authentification à deux facteurs → active-la.' },
        { titre: 'Attention aux captures', texte: 'Un Snap « éphémère » peut être enregistré. Ne partage rien que tu ne voudrais pas voir circuler.' }
      ]
    },
    {
      id: 'tiktok',
      nom: 'TikTok',
      conseils: [
        { titre: 'Compte privé', texte: 'Paramètres et confidentialité → Confidentialité → active « Compte privé ».' },
        { titre: 'Vérification en deux étapes', texte: 'Paramètres → Sécurité → Vérification en 2 étapes.' },
        { titre: 'Commentaires, Duos, Coutures, téléchargements', texte: 'Confidentialité → restreins qui peut commenter, faire un Duo (vos vidéos côte à côte) ou une Couture (reprendre un extrait de ta vidéo, le « Stitch »), et télécharger tes vidéos.' },
        { titre: 'Messages', texte: 'Confidentialité → Messages directs → limite à « Amis » ou désactive.' },
        { titre: 'Qui peut te trouver', texte: 'Désactive les suggestions de ton compte à d’autres personnes.' }
      ]
    },
    {
      id: 'facebook',
      nom: 'Facebook',
      conseils: [
        { titre: 'Double authentification', texte: 'Paramètres → Sécurité et connexion → Authentification à deux facteurs.' },
        { titre: 'Confidentialité des publications', texte: 'Paramètres → Confidentialité → mets « Amis » par défaut (pas « Public »).' },
        { titre: 'Qui peut te trouver / t’ajouter', texte: 'Confidentialité → limite qui peut t’envoyer des invitations et te retrouver via ton numéro ou ton e-mail.' },
        { titre: 'Infos du profil', texte: 'Masque ton numéro, ton e-mail, ton école et ta date de naissance au public.' },
        { titre: 'Connexions actives', texte: 'Sécurité → « Où vous êtes connecté » → déconnecte les sessions que tu ne reconnais pas.' }
      ]
    }
  ],
  rappel: 'Ces réglages ne te rendent pas « parano » : ils te donnent le contrôle. Tu peux les revoir à tout moment.'
}

const es = {
  intro:
    'Antes incluso de que surja un problema, puedes blindar tus cuentas para proteger tu identidad y tu información. Estos son los ajustes esenciales, red por red.',
  base: {
    titre: 'Los 4 hábitos que valen para todas las redes',
    items: [
      'Activa la verificación en dos pasos (2FA): aunque adivinen tu contraseña, no podrán entrar.',
      'Pon tu cuenta en privado: solo tus seguidores aceptados ven tus contenidos.',
      'No des nunca tu nombre completo real, tu escuela, tu ciudad, tu dirección o tu teléfono en la bio.',
      'Desactiva el compartir tu ubicación y no añadas lugares a tus publicaciones.'
    ]
  },
  reseaux: [
    {
      id: 'instagram',
      nom: 'Instagram',
      conseils: [
        { titre: 'Cuenta privada', texte: 'Ajustes → Privacidad de la cuenta → activa «Cuenta privada».' },
        { titre: 'Verificación en dos pasos', texte: 'Ajustes → Centro de cuentas → Contraseña y seguridad → Autenticación en dos pasos (mejor con una app de autenticación).' },
        { titre: 'Quién puede etiquetarte / mencionarte', texte: 'Privacidad → Etiquetas y menciones → limita a «Personas a las que sigues» o «Nadie».' },
        { titre: 'Mensajes de desconocidos', texte: 'Privacidad → Mensajes → limita quién puede enviarte solicitudes de mensaje.' },
        { titre: 'Historia', texte: 'Puedes ocultar tu historia a ciertas personas y desactivar el recompartir.' }
      ]
    },
    {
      id: 'snapchat',
      nom: 'Snapchat',
      conseils: [
        { titre: 'Modo fantasma (Snap Map)', texte: 'Abre el mapa → ajustes → activa el «Modo fantasma» para dejar de compartir tu ubicación.' },
        { titre: 'Quién puede contactarme', texte: 'Ajustes → «Contactarme» → elige «Mis amigos».' },
        { titre: 'Quién puede ver mi historia', texte: 'Ajustes → «Ver mi historia» → «Mis amigos» o una lista personalizada.' },
        { titre: 'Verificación en dos pasos', texte: 'Ajustes → Autenticación en dos pasos → actívala.' },
        { titre: 'Cuidado con las capturas', texte: 'Un Snap «efímero» se puede guardar. No compartas nada que no quieras ver circular.' }
      ]
    },
    {
      id: 'tiktok',
      nom: 'TikTok',
      conseils: [
        { titre: 'Cuenta privada', texte: 'Ajustes y privacidad → Privacidad → activa «Cuenta privada».' },
        { titre: 'Verificación en dos pasos', texte: 'Ajustes → Seguridad → Verificación en dos pasos.' },
        { titre: 'Comentarios, Dúos, Costuras, descargas', texte: 'Privacidad → restringe quién puede comentar, hacer un Dúo (vuestros vídeos en paralelo) o una Costura (reutilizar un trozo de tu vídeo, el «Stitch»), y descargar tus vídeos.' },
        { titre: 'Mensajes', texte: 'Privacidad → Mensajes directos → limita a «Amigos» o desactiva.' },
        { titre: 'Quién puede encontrarte', texte: 'Desactiva que sugieran tu cuenta a otras personas.' }
      ]
    },
    {
      id: 'facebook',
      nom: 'Facebook',
      conseils: [
        { titre: 'Verificación en dos pasos', texte: 'Configuración → Seguridad e inicio de sesión → Autenticación en dos pasos.' },
        { titre: 'Privacidad de las publicaciones', texte: 'Configuración → Privacidad → pon «Amigos» por defecto (no «Público»).' },
        { titre: 'Quién puede encontrarte / agregarte', texte: 'Privacidad → limita quién puede enviarte solicitudes y encontrarte por tu teléfono o correo.' },
        { titre: 'Datos del perfil', texte: 'Oculta al público tu teléfono, correo, escuela y fecha de nacimiento.' },
        { titre: 'Sesiones activas', texte: 'Seguridad → «Dónde iniciaste sesión» → cierra las sesiones que no reconozcas.' }
      ]
    }
  ],
  rappel: 'Estos ajustes no te vuelven «paranoico»: te dan el control. Puedes revisarlos cuando quieras.'
}

export const getSocial = (lang) => (lang === 'es' ? es : fr)
