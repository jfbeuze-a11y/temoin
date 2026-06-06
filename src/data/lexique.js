// Lexique en langage ado (EF-C02) — bilingue FR/ES.
const fr = [
  {
    terme: 'Cyberharcèlement',
    def: 'Des actes répétés (messages, images, rumeurs…) en ligne, faits pour blesser ou humilier quelqu’un qui ne peut pas se défendre facilement.',
    exemple: 'Un groupe envoie chaque soir des messages moqueurs dans une boucle de discussion, et d’autres « likent ».'
  },
  {
    terme: 'Usurpation d’identité',
    def: 'Quand quelqu’un se fait passer pour toi : faux compte à ton nom, messages envoyés en ton nom pour te nuire.',
    exemple: 'Un faux compte reprend ta photo de profil et insulte tes amis « de ta part ».'
  },
  {
    terme: 'Doxing',
    def: 'Publier des informations privées sur quelqu’un (adresse, numéro, école…) sans son accord, pour l’exposer ou l’intimider.',
    exemple: 'Quelqu’un partage ton adresse et ton emploi du temps dans un groupe public.'
  },
  {
    terme: 'Sextorsion',
    def: 'Menacer de diffuser des images intimes pour obtenir de l’argent, d’autres images, ou un comportement. C’est un délit grave.',
    exemple: 'Une personne dit avoir une photo de toi et menace de l’envoyer à ta classe si tu ne réponds pas.'
  },
  {
    terme: 'Raid numérique',
    def: 'Une attaque coordonnée : beaucoup de personnes s’en prennent à une même cible en même temps.',
    exemple: 'Du jour au lendemain, des dizaines de comptes inconnus commentent et insultent tes publications.'
  },
  {
    terme: 'Happy slapping',
    def: 'Filmer une agression ou une humiliation pour la diffuser. Filmer et partager est aussi répréhensible.',
    exemple: 'Quelqu’un te bouscule pendant qu’un autre filme pour mettre la vidéo en ligne.'
  },
  {
    terme: 'Slut-shaming',
    def: 'Humilier quelqu’un (souvent une fille) sur sa sexualité supposée, son corps ou sa tenue.',
    exemple: 'On fait circuler une rumeur sur toi accompagnée de commentaires dégradants.'
  },
  {
    terme: 'Ghosting / exclusion',
    def: 'Être délibérément mis à l’écart d’un groupe en ligne pour t’isoler.',
    exemple: 'On crée un nouveau groupe sans toi et on te le fait remarquer exprès.'
  },
  {
    terme: 'Flaming',
    def: 'Des échanges agressifs et insultants, souvent publics, pour provoquer et blesser.',
    exemple: 'Sous une de tes publications, des messages cherchent à te faire réagir avec des insultes.'
  },
  {
    terme: 'Deepfake / montage',
    def: 'Une image ou vidéo truquée pour te faire dire ou faire quelque chose de faux, souvent pour te nuire.',
    exemple: 'Un montage colle ton visage sur une image gênante et le fait circuler.'
  }
]

const es = [
  {
    terme: 'Ciberacoso',
    def: 'Actos repetidos (mensajes, imágenes, rumores…) en línea, hechos para herir o humillar a alguien que no puede defenderse con facilidad.',
    exemple: 'Un grupo envía cada noche mensajes burlones en un chat, y otros les dan «me gusta».'
  },
  {
    terme: 'Suplantación de identidad',
    def: 'Cuando alguien se hace pasar por ti: cuenta falsa con tu nombre, mensajes enviados en tu nombre para perjudicarte.',
    exemple: 'Una cuenta falsa usa tu foto de perfil e insulta a tus amigos «de tu parte».'
  },
  {
    terme: 'Doxing',
    def: 'Publicar información privada de alguien (dirección, teléfono, escuela…) sin su permiso, para exponerlo o intimidarlo.',
    exemple: 'Alguien comparte tu dirección y tu horario en un grupo público.'
  },
  {
    terme: 'Sextorsión',
    def: 'Amenazar con difundir imágenes íntimas para conseguir dinero, más imágenes o un comportamiento. Es un delito grave.',
    exemple: 'Una persona dice tener una foto tuya y amenaza con enviarla a tu clase si no respondes.'
  },
  {
    terme: 'Ataque coordinado (raid)',
    def: 'Un ataque coordinado: muchas personas se ensañan con un mismo objetivo al mismo tiempo.',
    exemple: 'De un día para otro, decenas de cuentas desconocidas comentan e insultan tus publicaciones.'
  },
  {
    terme: 'Happy slapping',
    def: 'Grabar una agresión o una humillación para difundirla. Grabar y compartir también es punible.',
    exemple: 'Alguien te empuja mientras otro graba para subir el vídeo a internet.'
  },
  {
    terme: 'Slut-shaming',
    def: 'Humillar a alguien (a menudo una chica) por su supuesta sexualidad, su cuerpo o su ropa.',
    exemple: 'Hacen circular un rumor sobre ti acompañado de comentarios degradantes.'
  },
  {
    terme: 'Ghosting / exclusión',
    def: 'Ser apartado deliberadamente de un grupo en línea para aislarte.',
    exemple: 'Crean un grupo nuevo sin ti y te lo hacen notar a propósito.'
  },
  {
    terme: 'Flaming',
    def: 'Intercambios agresivos e insultantes, a menudo públicos, para provocar y herir.',
    exemple: 'Bajo una de tus publicaciones, varios mensajes buscan hacerte reaccionar con insultos.'
  },
  {
    terme: 'Deepfake / montaje',
    def: 'Una imagen o vídeo trucado para hacerte decir o hacer algo falso, a menudo para perjudicarte.',
    exemple: 'Un montaje pega tu cara en una imagen comprometedora y la hace circular.'
  }
]

export const lexiqueByLang = { fr, es }
export const getLexique = (lang) => lexiqueByLang[lang] || fr
export const lexique = fr
