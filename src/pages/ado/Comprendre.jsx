import { Header, LinkCard } from '../../components/ui.jsx'
import { useT } from '../../lib/i18n.js'

export default function Comprendre() {
  const t = useT()
  return (
    <>
      <Header title="Comprendre" back />
      <h1>{t('Mettre des mots dessus')}</h1>
      <p className="lead">{t('Mettre un mot sur ce qui t’arrive, c’est déjà reprendre la main.')}</p>

      <LinkCard to="/ado/comprendre/diagnostic" icon="clipboard" title="C’est du harcèlement ?" desc="4 questions pour y voir clair." priority="Doit" />
      <LinkCard to="/ado/comprendre/lexique" icon="book" title="Lexique" desc="Les mots expliqués simplement." priority="Doit" />
      <LinkCard to="/ado/comprendre/emotion" icon="pulse" title="Comment je me sens" desc="Repère ton ressenti." priority="Devrait" />
      <LinkCard to="/ado/comprendre/scenarios" icon="branch" title="Scénarios" desc="Conflit ou harcèlement ? Entraîne-toi." priority="Pourrait" />
      <LinkCard to="/ado/comprendre/fil" icon="branch" title="Le Fil" desc="Une histoire dont tu es le héros." priority="Pourrait" />
    </>
  )
}
