import { Header, LinkCard } from '../../components/ui.jsx'
import { Icon } from '../../components/icons.jsx'
import { useT } from '../../lib/i18n.js'

export default function ParentHome() {
  const t = useT()
  return (
    <>
      <Header title="Espace parent" />
      <p className="eyebrow">{t('Espace parent')}</p>
      <h1>{t('Accompagner sans surveiller')}</h1>

      <div className="banner neutre" role="note">
        <strong className="h-row"><Icon name="lock" size={18} /> {t('Espace totalement séparé.')}</strong>
        <p style={{ color: 'var(--ink)', margin: '6px 0 0' }}>
          {t(
            'KORI ne vous donne aucun accès à l’espace de votre enfant. C’est une garantie d’architecture : la confiance protège mieux que le contrôle.'
          )}
        </p>
      </div>

      <LinkCard to="/parent/signaux" icon="search" title="Signaux d’alerte" desc="Repérer sans tomber dans la paranoïa." priority="Doit" />
      <LinkCard to="/parent/reagir" icon="heart" title="Bien réagir" desc="Ce qu’il faut faire, et surtout éviter." priority="Doit" />
      <LinkCard to="/parent/legal" icon="scale" title="Cadre légal et recours" desc="Loi, établissement, plainte." priority="Doit" />
      <LinkCard to="/parent/auteur" icon="rotate" title="Mon enfant est peut-être auteur" desc="Responsabiliser et stopper." priority="Devrait" />
      <LinkCard to="/parent/reglages" icon="sliders" title="Réglages de confidentialité" desc="Les bons réglages par plateforme." priority="Pourrait" />
      <LinkCard to="/reglages" icon="sliders" title="Réglages de l’app" desc="Thème, langue, compte." accent="slate" />

      <div className="banner fort" role="note" style={{ marginTop: 16 }}>
        <strong>{t('Besoin de conseils maintenant ?')}</strong>
        <p style={{ color: 'var(--ink)', margin: '6px 0 0' }}>
          <a href="tel:3018">3018</a> {t('conseille aussi les familles. Danger immédiat :')} <a href="tel:17">17</a>.
        </p>
      </div>
    </>
  )
}
