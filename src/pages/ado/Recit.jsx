import { useEffect, useState } from 'react'
import { Header } from '../../components/ui.jsx'
import VaultGate from '../../components/VaultGate.jsx'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'
import { listEvidence } from '../../lib/vault.js'

// EF-A02 — récit factuel assisté, généré à partir du coffre-fort. Bilingue.
const TPL = {
  fr: {
    quoi: { image: 'une capture d’écran', text: 'un message', link: 'un lien' },
    origine: (s) => ' (origine : ' + s + ')',
    ligne: (i, date, quoi, suffixe, note) => `${i}. Le ${date}, j’ai conservé ${quoi}${suffixe}.${note ? ' ' + note : ''}`,
    entete: 'Voici les faits que j’ai documentés :',
    vide: 'Je n’ai pas encore ajouté de preuve dans mon coffre-fort.',
    pied: 'Chaque élément est horodaté et scellé par une empreinte dans l’application Témoin.'
  },
  es: {
    quoi: { image: 'una captura de pantalla', text: 'un mensaje', link: 'un enlace' },
    origine: (s) => ' (origen: ' + s + ')',
    ligne: (i, date, quoi, suffixe, note) => `${i}. El ${date} guardé ${quoi}${suffixe}.${note ? ' ' + note : ''}`,
    entete: 'Estos son los hechos que he documentado:',
    vide: 'Todavía no he añadido ninguna prueba a mi caja fuerte.',
    pied: 'Cada elemento lleva fecha y un sello en la aplicación Témoin.'
  }
}

function RecitInner() {
  const { adoKey, lang } = useApp()
  const t = useT()
  const L = TPL[lang] || TPL.fr
  const [items, setItems] = useState([])
  const [intro, setIntro] = useState('')
  const [copied, setCopied] = useState(false)

  const fmt = (iso) => {
    try {
      return new Date(iso).toLocaleString(lang === 'es' ? 'es-ES' : 'fr-FR', { dateStyle: 'long', timeStyle: 'short' })
    } catch {
      return iso
    }
  }

  useEffect(() => {
    listEvidence(adoKey).then(setItems)
  }, [adoKey])

  const faits = items
    .slice()
    .reverse()
    .map((p, i) => L.ligne(i + 1, fmt(p.createdAt), L.quoi[p.type], p.source ? L.origine(p.source) : '', p.note))

  const recit =
    (intro ? intro.trim() + '\n\n' : '') +
    (faits.length ? L.entete + '\n' + faits.join('\n') : L.vide) +
    '\n\n' + L.pied

  async function copy() {
    try {
      await navigator.clipboard.writeText(recit)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* ignore */
    }
  }

  return (
    <>
      <p className="lead">
        {t('Ce résumé reprend les faits déjà dans ton coffre-fort. Tu peux ajouter une phrase d’introduction, puis le copier pour le montrer à un adulte.')}
      </p>
      <label htmlFor="intro">{t('En quelques mots, ce que tu vis (facultatif)')}</label>
      <textarea
        id="intro"
        placeholder={t('Depuis quelques semaines, je me fais harceler par…')}
        value={intro}
        onChange={(e) => setIntro(e.target.value)}
        style={{ minHeight: 90 }}
      />

      <h2>{t('Aperçu')}</h2>
      <div className="card">
        <p style={{ color: 'var(--ink)', whiteSpace: 'pre-wrap', margin: 0 }}>{recit}</p>
      </div>
      <button className="btn primary" onClick={copy}>{copied ? t('Copié ✓') : t('Copier mon récit')}</button>
    </>
  )
}

export default function Recit() {
  const t = useT()
  return (
    <>
      <Header title="Mon récit" back />
      <h1>{t('Préparer mes mots')}</h1>
      <VaultGate>
        <RecitInner />
      </VaultGate>
    </>
  )
}
