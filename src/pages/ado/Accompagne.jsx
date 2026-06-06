import { Header, LinkCard } from '../../components/ui.jsx'
import { useT } from '../../lib/i18n.js'

export default function Accompagne() {
  const t = useT()
  return (
    <>
      <Header title="Me faire aider" back />
      <h1>{t('En parler, c’est déjà avancer')}</h1>
      <p className="lead">{t('Tu choisis à qui, quand et comment. À ton rythme.')}</p>
      <LinkCard to="/ado/accompagne/adulte" icon="user-check" title="Un adulte de confiance" desc="Qui choisir, comment lui parler." priority="Doit" />
      <LinkCard to="/ado/accompagne/recit" icon="file-text" title="Préparer mon récit" desc="Un résumé des faits, sans tout réexpliquer." priority="Devrait" />
      <LinkCard to="/ado/accompagne/ressources" icon="library" title="Ressources d’aide" desc="Associations et lignes d’écoute." priority="Devrait" />
      <LinkCard to="/ado/accompagne/journal" icon="notebook" title="Mon journal privé" desc="Noter ce que je vis, chiffré." priority="Pourrait" />
    </>
  )
}
