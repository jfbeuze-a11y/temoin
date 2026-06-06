import { Header, LinkCard } from '../../components/ui.jsx'
import { useT } from '../../lib/i18n.js'

export default function Comprendre() {
  const t = useT()
  return (
    <>
      <Header title="Comprendre" back />
      <h1>{t('Mettre des mots dessus')}</h1>
      <p className="lead">{t('Reconnaître une situation, c’est déjà reprendre du pouvoir sur elle.')}</p>

      <LinkCard to="/ado/comprendre/diagnostic" icon="clipboard" title="Autodiagnostic" desc="4 questions pour y voir clair." priority="Doit" />
      <LinkCard to="/ado/comprendre/lexique" icon="book" title="Lexique" desc="Les mots expliqués simplement." priority="Doit" />
      <LinkCard to="/ado/comprendre/emotion" icon="pulse" title="Comment je me sens" desc="Repère ton ressenti." priority="Devrait" />
      <LinkCard to="/ado/comprendre/scenarios" icon="branch" title="Scénarios" desc="Conflit ou harcèlement ? Entraîne-toi." priority="Pourrait" />
    </>
  )
}
