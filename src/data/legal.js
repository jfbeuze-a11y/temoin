// Mentions légales & confidentialité — bilingue FR/ES.
// ⚠ Document de travail : à compléter (contact, DPO) et à valider par un avocat.

const fr = {
  intro: 'KORI est pensée selon le principe « vie privée dès la conception ». Tes données restent sur ton appareil.',
  maj: 'Dernière mise à jour : à compléter au lancement.',
  sections: [
    {
      titre: 'Éditeur',
      paras: [
        'Application « KORI », éditée par SIFARIS.',
        'Responsable de traitement : SIFARIS. Contact : [à compléter].',
        'Délégué à la protection des données (DPO) : [à compléter].'
      ]
    },
    {
      titre: 'À quoi sert l’application',
      paras: [
        'Aider les adolescents et leurs parents à reconnaître, documenter et signaler le cyberharcèlement, et à trouver de l’aide.',
        'L’application oriente vers les dispositifs compétents. Elle ne fournit pas de prise en charge médicale ou psychologique et ne remplace pas un professionnel.'
      ]
    },
    {
      titre: 'Tes données',
      paras: [
        'Tes données (preuves, journal, adultes de confiance, code du coffre, compte optionnel) sont chiffrées et stockées uniquement sur ton appareil.',
        'Elles ne sont jamais envoyées à un serveur. Aucun compte n’est obligatoire, aucun profilage, aucune publicité, aucun traceur tiers, aucune géolocalisation.'
      ]
    },
    {
      titre: 'Hébergement',
      paras: [
        'Les fichiers de l’application (le programme, sans aucune donnée personnelle) sont hébergés sur GitHub Pages.',
        'Comme pour tout site web, la connexion implique des données techniques (adresse IP) traitées par l’hébergeur. L’application en elle-même ne collecte ni ne transmet de données personnelles.'
      ]
    },
    {
      titre: 'Conservation et effacement',
      paras: [
        'Tu gardes tes données aussi longtemps que tu le souhaites.',
        'Tu peux tout effacer à tout moment : Réglages → Mes données → Tout effacer définitivement.'
      ]
    },
    {
      titre: 'Tes droits (RGPD)',
      paras: [
        'Comme tes données restent sur ton appareil et ne sont pas collectées par l’éditeur, tu en gardes le contrôle direct (consultation, effacement).',
        'Pour toute question relative à tes droits : [à compléter].'
      ]
    },
    {
      titre: 'Protection des mineurs',
      paras: [
        'L’application est conçue sans collecte centralisée et sans compte obligatoire, pour protéger les mineurs.',
        'Une Analyse d’Impact relative à la Protection des Données (AIPD, article 35 du RGPD) est requise et prévue avant tout déploiement réel.'
      ]
    },
    {
      titre: 'Valeur des preuves',
      paras: [
        'Le coffre-fort renforce la fiabilité des preuves (empreinte cryptographique, horodatage) mais ne préjuge pas de leur appréciation par un juge.',
        'Pour les situations graves, le recours à un constat de commissaire de justice est recommandé.'
      ]
    },
    {
      titre: 'Avertissement',
      paras: [
        'Document de travail. Les références (3018, 3020, 3114, PHAROS), le cadre légal et ces mentions doivent être vérifiés, actualisés et validés par un professionnel du droit avant diffusion.'
      ]
    }
  ]
}

const es = {
  intro: 'KORI está diseñada según el principio de «privacidad desde el diseño». Tus datos se quedan en tu dispositivo.',
  maj: 'Última actualización: por completar en el lanzamiento.',
  sections: [
    {
      titre: 'Editor',
      paras: [
        'Aplicación «KORI», editada por SIFARIS.',
        'Responsable del tratamiento: SIFARIS. Contacto: [por completar].',
        'Delegado de Protección de Datos (DPO): [por completar].'
      ]
    },
    {
      titre: 'Para qué sirve la aplicación',
      paras: [
        'Ayudar a los adolescentes y a sus familias a reconocer, documentar y denunciar el ciberacoso, y a encontrar ayuda.',
        'La aplicación orienta hacia los servicios competentes. No ofrece atención médica ni psicológica y no sustituye a un profesional.'
      ]
    },
    {
      titre: 'Tus datos',
      paras: [
        'Tus datos (pruebas, diario, adultos de confianza, código de la caja, cuenta opcional) se cifran y se guardan únicamente en tu dispositivo.',
        'Nunca se envían a un servidor. No se exige ninguna cuenta, no hay perfilado, ni publicidad, ni rastreadores de terceros, ni geolocalización.'
      ]
    },
    {
      titre: 'Alojamiento',
      paras: [
        'Los archivos de la aplicación (el programa, sin ningún dato personal) están alojados en GitHub Pages.',
        'Como en cualquier sitio web, la conexión implica datos técnicos (dirección IP) tratados por el alojador. La aplicación en sí no recoge ni transmite datos personales.'
      ]
    },
    {
      titre: 'Conservación y borrado',
      paras: [
        'Conservas tus datos el tiempo que quieras.',
        'Puedes borrarlo todo cuando quieras: Ajustes → Mis datos → Borrarlo todo definitivamente.'
      ]
    },
    {
      titre: 'Tus derechos (RGPD)',
      paras: [
        'Como tus datos se quedan en tu dispositivo y no los recoge el editor, mantienes el control directo (consulta, borrado).',
        'Para cualquier consulta sobre tus derechos: [por completar].'
      ]
    },
    {
      titre: 'Protección de menores',
      paras: [
        'La aplicación está diseñada sin recogida centralizada y sin cuenta obligatoria, para proteger a los menores.',
        'Se requiere y está prevista una Evaluación de Impacto (EIPD, artículo 35 del RGPD) antes de cualquier despliegue real.'
      ]
    },
    {
      titre: 'Valor de las pruebas',
      paras: [
        'La caja fuerte refuerza la fiabilidad de las pruebas (huella criptográfica, fecha) pero no prejuzga su valoración por un juez.',
        'En situaciones graves, se recomienda recurrir a un acta de un agente judicial.'
      ]
    },
    {
      titre: 'Aviso',
      paras: [
        'Documento de trabajo. Las referencias (3018, 3020, 3114, PHAROS), el marco legal y estos avisos deben verificarse, actualizarse y ser validados por un profesional del derecho antes de su difusión.'
      ]
    }
  ]
}

export const getLegal = (lang) => (lang === 'es' ? es : fr)
