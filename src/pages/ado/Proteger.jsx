import { Header, LinkCard } from '../../components/ui.jsx'
import { useT } from '../../lib/i18n.js'

export default function Proteger() {
  const t = useT()
  return (
    <>
      <Header title="Se protéger" back />
      <h1>{t('Réagir sans que ça parte en vrille')}</h1>
      <p className="lead">
        {t('Le bon ordre :')} <strong>{t('garder les preuves d’abord')}</strong>
        {t(', signaler et bloquer ensuite, puis demander de l’aide.')}
      </p>

      <LinkCard to="/ado/proteger/coffre" icon="lock" title="Coffre-fort de preuves" desc="Capturer et sceller les preuves." priority="Doit" featured />
      <LinkCard to="/ado/proteger/sextorsion" icon="shield-alert" title="On te fait chanter avec une photo ?" desc="Chantage à une photo intime (sextorsion)." priority="Doit" />
      <LinkCard to="/ado/proteger/securite" icon="shield" title="Me protéger sur les réseaux" desc="Sécuriser ton identité sur Instagram, Snapchat, TikTok, Facebook." priority="Doit" />
      <LinkCard to="/ado/proteger/plateformes" icon="smartphone" title="Bloquer / signaler" desc="Fiches par réseau social." priority="Doit" />
      <LinkCard to="/ado/proteger/recours" icon="phone" title="Numéros et recours" desc="3018, PHAROS, urgences." priority="Doit" />
      <LinkCard to="/ado/proteger/desescalade" icon="wind" title="Souffle un coup" desc="Les réflexes qui protègent." priority="Devrait" />
      <LinkCard to="/ado/proteger/courriers" icon="mail" title="Modèles de courriers" desc="Demande de retrait, signalement." priority="Pourrait" />
    </>
  )
}
