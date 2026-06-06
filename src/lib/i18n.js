// Multilingue (EF-X04) — FR par défaut, ES sélectionnable.
// Dictionnaire FR -> ES pour le « chrome » d'interface. Les contenus longs sont gérés
// par les getters bilingues des fichiers data/. Le mot « Témoin » (marque) n'est jamais traduit.
import { useApp } from '../context/AppContext.jsx'

export const langs = [
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' }
]

const ES = {
  // Commun
  Retour: 'Volver',
  Quitter: 'Salir',
  Accueil: 'Inicio',
  'Changer de langue': 'Cambiar de idioma',
  Preuves: 'Pruebas',
  Soutien: 'Apoyo',
  Protéger: 'Proteger',

  // Ton décontracté + KORI
  'Je suis Kori': 'Soy Kori',
  'Face au cyberharcèlement, je suis là pour toi.': 'Frente al ciberacoso, estoy contigo.',
  'Moi c’est Kori, ton compagnon de protection. Je t’aide à capter ce qui t’arrive, à mettre tes preuves à l’abri et à trouver de l’aide. Pas besoin de compte, rien ne sort de ton tel.':
    'Soy Kori, tu compañero de protección. Te ayudo a pillar lo que te pasa, a poner tus pruebas a salvo y a encontrar ayuda. Sin cuenta, nada sale de tu móvil.',
  'On commence par quoi ?': '¿Por dónde empezamos?',
  'Choisis ce qu’il te faut, là, maintenant. Ou jette juste un œil.':
    'Elige lo que necesitas, aquí y ahora. O solo echa un vistazo.',
  'Me faire aider': 'Buscar ayuda',
  'Mettre un mot sur ce qui t’arrive, c’est déjà reprendre la main.':
    'Ponerle nombre a lo que te pasa ya es recuperar el control.',
  'C’est du harcèlement ?': '¿Es acoso?',
  'Réagir sans que ça parte en vrille': 'Reaccionar sin que se descontrole',
  'Souffle un coup': 'Respira un momento',
  'Des petits gestes qui changent tout, sans te griller': 'Pequeños gestos que cambian todo, sin exponerte',
  'Mettre à l’abri': 'Poner a salvo',
  'Trouver mes mots': 'Encontrar mis palabras',
  'Chaque preuve est datée et verrouillée : si on y touche, ça se voit.':
    'Cada prueba lleva fecha y candado: si alguien la toca, se nota.',
  'Réglages, discrétion et accessibilité': 'Ajustes, discreción y accesibilidad',
  'En cas de danger immédiat, appelle le 17 (ou le 112).': 'En caso de peligro inmediato, llama al 17 (o al 112).',
  Supprimer: 'Eliminar',
  Enregistrer: 'Guardar',
  'Ouvrir le site': 'Abrir el sitio',

  // Accueil
  'Compagnon de protection': 'Compañero de protección',
  'Face au cyberharcèlement, on est là pour toi.': 'Frente al ciberacoso, estamos contigo.',
  'Témoin t’aide à comprendre la situation, à mettre tes preuves à l’abri et à trouver de l’aide. Sans compte. Rien ne quitte ton téléphone.':
    'Témoin te ayuda a entender la situación, a poner tus pruebas a salvo y a encontrar ayuda. Sin cuenta. Nada sale de tu teléfono.',
  'J’ouvre…': 'Abro…',
  'L’espace ado': 'Espacio joven',
  'Comprendre, me protéger, être accompagné, témoigner.': 'Entender, protegerme, recibir apoyo, ser testigo.',
  'L’espace parent': 'Espacio para familias',
  'Comprendre les signaux et bien réagir, sans surveiller.': 'Entender las señales y reaccionar bien, sin vigilar.',
  'Un compagnon, pas un mouchard.': 'Un compañero, no un espía.',
  'L’espace ado et l’espace parent sont totalement séparés. Personne ne peut voir ce que tu fais ici.':
    'El espacio joven y el de las familias están totalmente separados. Nadie puede ver lo que haces aquí.',

  // En-têtes / titres de page
  Réglages: 'Ajustes',
  'Mon espace': 'Mi espacio',
  Comprendre: 'Entender',
  Autodiagnostic: 'Autodiagnóstico',
  'Ton repère': 'Tu referencia',
  Lexique: 'Léxico',
  'Comment je me sens': 'Cómo me siento',
  Scénarios: 'Escenarios',
  'Se protéger': 'Protegerme',
  'Coffre-fort': 'Caja fuerte',
  'Ajouter une preuve': 'Añadir una prueba',
  'Bloquer / signaler': 'Bloquear / denunciar',
  'Numéros et recours': 'Números y recursos',
  'Garder la tête froide': 'Mantener la calma',
  'Modèles de courriers': 'Modelos de cartas',
  'Être accompagné': 'Recibir apoyo',
  'Adulte de confiance': 'Adulto de confianza',
  'Mon récit': 'Mi testimonio',
  'Ressources d’aide': 'Recursos de ayuda',
  'Journal privé': 'Diario privado',
  'Espace parent': 'Espacio para familias',
  'Signaux d’alerte': 'Señales de alerta',
  'Bien réagir': 'Reaccionar bien',
  'Cadre légal': 'Marco legal',
  'Mon enfant est peut-être auteur': 'Mi hijo quizá sea autor',
  'Réglages de confidentialité': 'Ajustes de privacidad',
  Fiche: 'Ficha',

  // AdoHome
  'Espace ado privé': 'Espacio joven privado',
  'Par où commencer ?': '¿Por dónde empezar?',
  'Choisis ce dont tu as besoin maintenant. Tu peux aussi juste explorer.':
    'Elige lo que necesitas ahora. También puedes solo explorar.',
  'Besoin d’agir vite ?': '¿Necesitas actuar rápido?',
  'Mettre mes preuves à l’abri': 'Poner mis pruebas a salvo',
  '17 urgence': '17 emergencia',
  'Est-ce du harcèlement ? Mots et repères.': '¿Es acoso? Palabras y referencias.',
  'Coffre-fort de preuves, bloquer, signaler, recours.': 'Caja fuerte de pruebas, bloquear, denunciar, recursos.',
  'À qui en parler, ressources, journal.': 'Con quién hablar, recursos, diario.',
  'J’ai vu quelqu’un se faire harceler.': 'He visto a alguien sufrir acoso.',
  'Besoin d’aide tout de suite ?': '¿Necesitas ayuda ahora mismo?',

  // Comprendre
  'Mettre des mots dessus': 'Poner palabras a lo que pasa',
  'Reconnaître une situation, c’est déjà reprendre du pouvoir sur elle.':
    'Reconocer una situación ya es recuperar algo de control sobre ella.',
  '4 questions pour y voir clair.': '4 preguntas para verlo claro.',
  'Les mots expliqués simplement.': 'Las palabras explicadas de forma sencilla.',
  'Repère ton ressenti.': 'Identifica cómo te sientes.',
  'Conflit ou harcèlement ? Entraîne-toi.': '¿Conflicto o acoso? Practica.',

  // Diagnostic
  'Tes réponses restent sur ton téléphone et ne sont pas enregistrées.':
    'Tus respuestas se quedan en tu teléfono y no se guardan.',
  'Ceci est un repère, pas un verdict. Personne ne sait mieux que toi ce que tu vis.':
    'Esto es una referencia, no un veredicto. Nadie sabe mejor que tú lo que vives.',
  'Et maintenant ?': '¿Y ahora?',
  'En parler à quelqu’un': 'Hablarlo con alguien',
  'Voir les numéros d’aide': 'Ver los números de ayuda',
  Question: 'Pregunta',
  'Critères repérés dans tes réponses :': 'Criterios detectados en tus respuestas:',

  // Lexique
  'Les mots, expliqués': 'Las palabras, explicadas',
  'Rechercher un mot…': 'Buscar una palabra…',
  Exemple: 'Ejemplo',
  'Aucun mot trouvé.': 'No se encontró ninguna palabra.',

  // Émotion
  'Là, tout de suite, je dirais…': 'Ahora mismo, diría…',
  'Il n’y a pas de bonne réponse. C’est juste pour toi.': 'No hay respuesta correcta. Es solo para ti.',
  'Ça va à peu près': 'Más o menos bien',
  'Pas très bien': 'No muy bien',
  'Triste, ça pèse': 'Triste, pesa',
  'Très mal, j’ai peur': 'Muy mal, tengo miedo',
  'J’ai des pensées noires': 'Tengo pensamientos oscuros',
  'Ce que tu ressens compte, et on peut t’aider maintenant.': 'Lo que sientes importa, y podemos ayudarte ahora.',
  'Tu n’as pas à garder ça pour toi. Parler à quelqu’un soulage, vraiment.':
    'No tienes que guardártelo. Hablar con alguien alivia, de verdad.',
  'Appeler le 3018': 'Llamar al 3018',
  'Souffrance / pensées suicidaires : 3114': 'Sufrimiento / pensamientos suicidas: 3114',
  'Choisir un adulte de confiance': 'Elegir un adulto de confianza',
  'Merci de t’être posé la question. Si ça change, reviens ici quand tu veux. Tu peux aussi':
    'Gracias por hacerte la pregunta. Si cambia, vuelve cuando quieras. También puedes',
  'noter ce que tu ressens': 'anotar lo que sientes',

  // Scénarios
  'Scénario': 'Escenario',
  'Bonne intuition': 'Buena intuición',
  'À nuancer': 'Hay que matizar',
  'Scénario suivant': 'Siguiente escenario',

  // Se protéger
  'Agir sans tout aggraver': 'Actuar sin empeorarlo todo',
  'Sécuriser mes réseaux': 'Proteger mis redes',
  'Protéger mon identité en ligne': 'Proteger mi identidad en línea',
  'Me protéger sur les réseaux': 'Proteger mis redes sociales',
  'Sécuriser ton identité sur Instagram, Snapchat, TikTok, Facebook.':
    'Proteger tu identidad en Instagram, Snapchat, TikTok, Facebook.',
  'Le bon ordre :': 'El orden correcto:',
  'garder les preuves d’abord': 'guardar primero las pruebas',
  ', signaler et bloquer ensuite, puis demander de l’aide.': ', luego denunciar y bloquear, y después pedir ayuda.',
  'Capturer et sceller les preuves.': 'Capturar y sellar las pruebas.',
  'Fiches par réseau social.': 'Fichas por red social.',
  '3018, PHAROS, urgences.': '3018, PHAROS, emergencias.',
  'Les réflexes qui protègent.': 'Los reflejos que protegen.',
  'Demande de retrait, signalement.': 'Solicitud de retirada, denuncia.',

  // Coffre
  'Mes preuves': 'Mis pruebas',
  'Chiffré sur ton téléphone.': 'Cifrado en tu teléfono.',
  'Chaque pièce est horodatée et scellée par une empreinte unique. Si on la modifie, l’empreinte le révèle.':
    'Cada elemento lleva fecha y un sello único. Si se modifica, el sello lo revela.',
  '+ Ajouter une preuve': '+ Añadir una prueba',
  'Exporter le dossier (PDF)': 'Exportar el expediente (PDF)',
  'Numéros d’aide': 'Números de ayuda',
  'Lecture du coffre-fort…': 'Leyendo la caja fuerte…',
  'Ton coffre-fort est vide. Ajoute une capture d’écran, un message ou un lien.':
    'Tu caja fuerte está vacía. Añade una captura, un mensaje o un enlace.',
  'Capture d’écran': 'Captura de pantalla',
  Message: 'Mensaje',
  Lien: 'Enlace',
  '✓ Intègre': '✓ Íntegro',
  Altérée: 'Alterada',
  'Origine :': 'Origen:',
  'Note :': 'Nota:',
  'Supprimer cette preuve ? Elle sera définitivement perdue.': '¿Eliminar esta prueba? Se perderá para siempre.',

  // Ajouter preuve
  'Nouvelle pièce': 'Nuevo elemento',
  Capture: 'Captura',
  'Capture d’écran ': 'Captura de pantalla',
  'Adresse du contenu (URL)': 'Dirección del contenido (URL)',
  'Texte du message': 'Texto del mensaje',
  'Copie/colle le message reçu…': 'Copia/pega el mensaje recibido…',
  'Origine (où ça s’est passé)': 'Origen (dónde ocurrió)',
  'Instagram, groupe de classe…': 'Instagram, grupo de clase…',
  'Note (facultatif)': 'Nota (opcional)',
  'Qui, contexte…': 'Quién, contexto…',
  'En enregistrant, la pièce est horodatée, scellée par une empreinte SHA-256 puis chiffrée sur ton téléphone.':
    'Al guardar, el elemento se fecha, se sella con una huella SHA-256 y se cifra en tu teléfono.',
  'Sceller et enregistrer': 'Sellar y guardar',

  // Plateformes
  'Choisis le réseau': 'Elige la red',
  'Chaque fiche te guide pas à pas. Rappelle-toi : on capture la preuve avant de bloquer.':
    'Cada ficha te guía paso a paso. Recuerda: se captura la prueba antes de bloquear.',
  'Capturer la preuve d’abord': 'Capturar la prueba primero',
  Bloquer: 'Bloquear',
  Signaler: 'Denunciar',
  'Demander le retrait': 'Pedir la retirada',
  'Procédure susceptible d’évoluer ; vérifiée et mise à jour régulièrement.':
    'El procedimiento puede cambiar; se revisa y actualiza con regularidad.',
  'Fiche introuvable.': 'Ficha no encontrada.',

  // Recours
  'De l’aide en un geste': 'Ayuda en un gesto',
  'Écoute et signalement': 'Escucha y denuncia',
  'Appeler le': 'Llamar al',
  Appeler: 'Llamar',

  // Désescalade
  // (titre via header) — intro/gestes via data

  // Courriers
  'Des mots déjà prêts': 'Palabras ya listas',
  'Personnalise les parties entre crochets. Tu peux copier le texte et l’envoyer où tu veux.':
    'Personaliza las partes entre corchetes. Puedes copiar el texto y enviarlo donde quieras.',
  'Copier le texte': 'Copiar el texto',
  'Copié ✓': 'Copiado ✓',

  // Accompagné
  'En parler, c’est déjà avancer': 'Hablarlo ya es avanzar',
  'Tu choisis à qui, quand et comment. À ton rythme.': 'Tú eliges a quién, cuándo y cómo. A tu ritmo.',
  'Qui choisir, comment lui parler.': 'A quién elegir, cómo hablarle.',
  'Un résumé des faits, sans tout réexpliquer.': 'Un resumen de los hechos, sin tener que repetirlo todo.',
  'Associations et lignes d’écoute.': 'Asociaciones y líneas de escucha.',
  'Noter ce que je vis, chiffré.': 'Anotar lo que vivo, cifrado.',
  'Un adulte de confiance': 'Un adulto de confianza',
  'Préparer mon récit': 'Preparar mi testimonio',
  'Ressources d’aide': 'Recursos de ayuda',
  'Mon journal privé': 'Mi diario privado',

  // Adulte de confiance
  'À qui en parler ?': '¿Con quién hablar?',
  'Des idées de personnes': 'Algunas ideas de personas',
  'Comment commencer': 'Cómo empezar',
  'Préparer un récit à montrer': 'Preparar un testimonio para enseñar',

  // Récit
  'Préparer mes mots': 'Preparar mis palabras',
  'Copié ✓': 'Copiado ✓',
  'Ce résumé reprend les faits déjà dans ton coffre-fort. Tu peux ajouter une phrase d’introduction, puis le copier pour le montrer à un adulte.':
    'Este resumen recoge los hechos que ya están en tu caja fuerte. Puedes añadir una frase de introducción y luego copiarlo para enseñárselo a un adulto.',
  'En quelques mots, ce que tu vis (facultatif)': 'En pocas palabras, lo que vives (opcional)',
  'Depuis quelques semaines, je me fais harceler par…': 'Desde hace unas semanas sufro acoso por parte de…',
  Aperçu: 'Vista previa',
  'Copier mon récit': 'Copiar mi testimonio',

  // Ressources
  'Vers qui se tourner': 'A quién acudir',
  'Des associations et lignes d’écoute, gratuites et confidentielles.':
    'Asociaciones y líneas de escucha, gratuitas y confidenciales.',
  'Témoin ne récupère jamais ta position. Cette liste est nationale.':
    'Témoin nunca recoge tu ubicación. Esta lista es nacional.',

  // Journal
  'Mon journal': 'Mi diario',
  'Un espace à toi, chiffré. Personne d’autre ne peut le lire.':
    'Un espacio tuyo, cifrado. Nadie más puede leerlo.',
  'Aujourd’hui…': 'Hoy…',
  'Ce que je ressens, ce qui s’est passé…': 'Lo que siento, lo que pasó…',
  'Mes notes': 'Mis notas',
  'Aucune note pour l’instant.': 'Ninguna nota por ahora.',

  // Témoin
  'J’ai vu quelqu’un se faire harceler': 'He visto a alguien sufrir acoso',
  'Des micro-gestes utiles et sans risque': 'Pequeños gestos útiles y sin riesgo',
  'Partager ou « liker », ce n’est pas neutre.': 'Compartir o dar «me gusta» no es neutral.',
  'En parler à un adulte': 'Hablar con un adulto',
  'Copier ce message': 'Copiar este mensaje',

  // Espace parent
  'Accompagner sans surveiller': 'Acompañar sin vigilar',
  'Cadre légal et recours': 'Marco legal y recursos',
  'Espace totalement séparé.': 'Espacio totalmente separado.',
  'Témoin ne vous donne aucun accès à l’espace de votre enfant. C’est une garantie d’architecture : la confiance protège mieux que le contrôle.':
    'Témoin no le da ningún acceso al espacio de su hijo. Es una garantía de arquitectura: la confianza protege mejor que el control.',
  'Repérer sans tomber dans la paranoïa.': 'Detectar sin caer en la paranoia.',
  'Ce qu’il faut faire, et surtout éviter.': 'Qué hacer y, sobre todo, qué evitar.',
  'Loi, établissement, plainte.': 'Ley, centro escolar, denuncia.',
  'Responsabiliser et stopper.': 'Responsabilizar y detener.',
  'Les bons réglages par plateforme.': 'Los buenos ajustes por plataforma.',
  'Besoin de conseils maintenant ?': '¿Necesita consejo ahora?',
  'conseille aussi les familles. Danger immédiat :': 'también orienta a las familias. Peligro inmediato:',

  // Signaux
  'Repérer un mal-être': 'Detectar un malestar',
  'Un seul signe ne prouve rien. C’est le cumul et le changement par rapport à d’habitude qui doivent vous amener à ouvrir le dialogue.':
    'Una sola señal no prueba nada. Es la acumulación y el cambio respecto a lo habitual lo que debe llevarle a abrir el diálogo.',

  // Bien réagir
  'Aider sans aggraver': 'Ayudar sin empeorar',
  'À faire': 'Qué hacer',
  'À éviter absolument': 'Qué evitar a toda costa',

  // Cadre légal
  'Vos recours': 'Sus recursos',
  'Pour les situations graves': 'Para las situaciones graves',
  'Un constat de commissaire de justice renforce la valeur probatoire. Le cadre juridique évolue : faites valider votre démarche par un professionnel du droit.':
    'Un acta de agente judicial refuerza el valor probatorio. El marco jurídico evoluciona: haga validar su gestión por un profesional del derecho.',

  // Enfant auteur
  'Responsabiliser, pas accabler': 'Responsabilizar, no hundir',

  // Réglages confidentialité
  'Les bons réflexes': 'Los buenos hábitos',

  // Settings
  Discrétion: 'Discreción',
  'Mode discret': 'Modo discreto',
  'Affiche un nom et une présentation neutres (« Notes »). La': 'Muestra un nombre y un aspecto neutros («Notas»). La',
  'est toujours active : touche le bouton « Quitter » en haut, ou appuie deux fois sur la touche Échap.':
    'siempre está activa: toca el botón «Salir» arriba, o pulsa dos veces la tecla Esc.',
  'sortie rapide': 'salida rápida',
  'Confort de lecture': 'Comodidad de lectura',
  Thème: 'Tema',
  'Apaisant (sombre)': 'Suave (oscuro)',
  Clair: 'Claro',
  'Le thème apaisant est plus doux pour une consultation le soir.':
    'El tema suave es más agradable para consultar de noche.',
  Langue: 'Idioma',
  Accessibilité: 'Accesibilidad',
  'Témoin vise la conformité RGAA 4.1 / WCAG 2.1 AA : contrastes renforcés, cibles tactiles larges, navigation au lecteur d’écran, respect de la réduction d’animations de ton système.':
    'Témoin busca cumplir RGAA 4.1 / WCAG 2.1 AA: contrastes reforzados, zonas táctiles amplias, navegación con lector de pantalla y respeto de la reducción de animaciones del sistema.',
  'Mes données': 'Mis datos',
  'Tes preuves et ton journal sont chiffrés sur cet appareil uniquement. Tu peux tout effacer d’un geste.':
    'Tus pruebas y tu diario están cifrados solo en este dispositivo. Puedes borrarlo todo de un gesto.',
  'Tout effacer définitivement': 'Borrarlo todo definitivamente',
  'Données effacées.': 'Datos borrados.',
  'Effacer définitivement TOUTES les données de l’espace ado (preuves, journal, code) ? Cette action est irréversible.':
    '¿Borrar definitivamente TODOS los datos del espacio joven (pruebas, diario, código)? Esta acción es irreversible.',
  'Témoin, version de travail. Les références (3018, 3020, PHAROS), le cadre légal et les procédures doivent être vérifiés et actualisés au lancement.':
    'Témoin, versión de trabajo. Las referencias (3018, 3020, PHAROS), el marco legal y los procedimientos deben verificarse y actualizarse en el lanzamiento.',

  // Compte & MFA
  'Compte & sécurité': 'Cuenta y seguridad',
  'Compte sécurisé': 'Cuenta segura',
  'Compte sécurisé activé': 'Cuenta segura activada',
  'Mot de passe + double authentification (MFA).': 'Contraseña + verificación en dos pasos (MFA).',
  'Se déconnecter': 'Cerrar sesión',
  Désactiver: 'Desactivar',
  'Optionnel : protège l’accès à l’app par un mot de passe fort et une double authentification (MFA). L’app reste utilisable sans compte.':
    'Opcional: protege el acceso a la app con una contraseña fuerte y verificación en dos pasos (MFA). La app sigue siendo utilizable sin cuenta.',
  'Créer un compte sécurisé': 'Crear una cuenta segura',
  'Désactiver le compte sécurisé ? Tu pourras le recréer plus tard.':
    '¿Desactivar la cuenta segura? Podrás volver a crearla más tarde.',
  'Se connecter': 'Iniciar sesión',
  'Entre ton mot de passe et le code de ton application d’authentification.':
    'Introduce tu contraseña y el código de tu app de autenticación.',
  'Mot de passe': 'Contraseña',
  'Code à 6 chiffres (MFA)': 'Código de 6 cifras (MFA)',
  'Mot de passe ou code incorrect.': 'Contraseña o código incorrecto.',
  'Optionnel. Une couche de sécurité en plus : mot de passe fort et double authentification. Tout reste sur ton téléphone.':
    'Opcional. Una capa de seguridad más: contraseña fuerte y verificación en dos pasos. Todo se queda en tu teléfono.',
  '1. Mot de passe': '1. Contraseña',
  'Identifiant (facultatif)': 'Identificador (opcional)',
  'Mot de passe (12 caractères minimum)': 'Contraseña (mínimo 12 caracteres)',
  'Confirme le mot de passe': 'Confirma la contraseña',
  'Au moins 12 caractères, avec majuscules, minuscules et chiffres.':
    'Al menos 12 caracteres, con mayúsculas, minúsculas y cifras.',
  'Mot de passe robuste.': 'Contraseña robusta.',
  'Encore : 12 caractères, majuscules, minuscules et chiffres.':
    'Aún falta: 12 caracteres, mayúsculas, minúsculas y cifras.',
  '2. Double authentification (MFA)': '2. Verificación en dos pasos (MFA)',
  'Scanne ce QR code avec ton application d’authentification (Google Authenticator, Authy…), ou saisis la clé à la main.':
    'Escanea este código QR con tu app de autenticación (Google Authenticator, Authy…), o introduce la clave a mano.',
  'Saisis le code à 6 chiffres pour confirmer': 'Introduce el código de 6 cifras para confirmar',
  'Activer mon compte sécurisé': 'Activar mi cuenta segura',
  'Le mot de passe ne peut pas être récupéré s’il est perdu : note-le en lieu sûr.':
    'La contraseña no se puede recuperar si se pierde: anótala en un lugar seguro.',
  'Le mot de passe doit faire au moins 12 caractères, avec majuscules, minuscules et chiffres.':
    'La contraseña debe tener al menos 12 caracteres, con mayúsculas, minúsculas y cifras.',
  'Les deux mots de passe ne correspondent pas.': 'Las dos contraseñas no coinciden.',
  'Le code MFA est incorrect. Vérifie l’heure de ton téléphone et réessaie.':
    'El código MFA es incorrecto. Revisa la hora de tu teléfono e inténtalo de nuevo.',

  // VaultGate
  'Espace verrouillé': 'Espacio bloqueado',
  'Créer ton code': 'Crear tu código',
  'Entre ton code pour ouvrir ton coffre-fort.': 'Introduce tu código para abrir tu caja fuerte.',
  Code: 'Código',
  Déverrouiller: 'Desbloquear',
  'Ce code protège tes preuves et ton journal sur ce téléphone. Choisis-en un dont tu te souviendras : il ne peut pas être récupéré s’il est perdu (c’est ce qui garde tes données vraiment privées).':
    'Este código protege tus pruebas y tu diario en este teléfono. Elige uno que recuerdes: no se puede recuperar si lo pierdes (es lo que mantiene tus datos realmente privados).',
  'Nouveau code': 'Código nuevo',
  'Confirme le code': 'Confirma el código',
  'Créer mon coffre-fort': 'Crear mi caja fuerte',
  'Choisis un code d’au moins 4 chiffres.': 'Elige un código de al menos 4 cifras.',
  'Choisis un code de 4 à 6 chiffres.': 'Elige un código de 4 a 6 cifras.',
  '4 à 6 chiffres.': '4 a 6 cifras.',
  'Les deux codes ne correspondent pas.': 'Los dos códigos no coinciden.',
  'Code incorrect.': 'Código incorrecto.'
}

export function translate(lang, s) {
  if (lang !== 'es' || s == null) return s
  return ES[s] || s
}

// Hook : renvoie une fonction t(texteFR) -> texte traduit selon la langue active.
export function useT() {
  const { lang } = useApp()
  return (s) => translate(lang, s)
}
