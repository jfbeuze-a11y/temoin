import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/ui.jsx'
import VaultGate from '../../components/VaultGate.jsx'
import { useApp } from '../../context/AppContext.jsx'
import { addEvidence } from '../../lib/vault.js'
import { useT } from '../../lib/i18n.js'

const TABS = [
  { id: 'image', label: 'Capture' },
  { id: 'text', label: 'Message' },
  { id: 'link', label: 'Lien' }
]

function AjouterInner() {
  const { adoKey } = useApp()
  const t = useT()
  const nav = useNavigate()
  const [type, setType] = useState('image')
  const [content, setContent] = useState('')
  const [imgData, setImgData] = useState(null)
  const [source, setSource] = useState('')
  const [note, setNote] = useState('')
  const [busy, setBusy] = useState(false)

  function onFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setImgData(reader.result)
    reader.readAsDataURL(file)
  }

  async function save() {
    const value = type === 'image' ? imgData : content.trim()
    if (!value) return
    setBusy(true)
    await addEvidence(adoKey, { type, content: value, source, note })
    setBusy(false)
    nav('/ado/proteger/coffre')
  }

  return (
    <>
      <div className="btn-row" role="tablist" aria-label="Type">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={type === tab.id}
            className={'btn' + (type === tab.id ? ' primary' : '')}
            onClick={() => setType(tab.id)}
          >
            {t(tab.label)}
          </button>
        ))}
      </div>

      {type === 'image' ? (
        <>
          <label htmlFor="file">{t('Capture d’écran')}</label>
          <input id="file" type="file" accept="image/*" onChange={onFile} />
          {imgData && <img src={imgData} alt={t('Capture d’écran')} style={{ width: '100%', borderRadius: 10, marginTop: 10 }} />}
        </>
      ) : (
        <>
          <label htmlFor="content">{type === 'link' ? t('Adresse du contenu (URL)') : t('Texte du message')}</label>
          {type === 'link' ? (
            <input id="content" type="url" placeholder="https://…" value={content} onChange={(e) => setContent(e.target.value)} />
          ) : (
            <textarea id="content" placeholder={t('Copie/colle le message reçu…')} value={content} onChange={(e) => setContent(e.target.value)} />
          )}
        </>
      )}

      <label htmlFor="source">{t('Origine (où ça s’est passé)')}</label>
      <input id="source" type="text" placeholder={t('Instagram, groupe de classe…')} value={source} onChange={(e) => setSource(e.target.value)} />

      <label htmlFor="note">{t('Note (facultatif)')}</label>
      <input id="note" type="text" placeholder={t('Qui, contexte…')} value={note} onChange={(e) => setNote(e.target.value)} />

      <p className="muted" style={{ fontSize: '0.82rem' }}>
        {t('En enregistrant, la pièce est horodatée, scellée par une empreinte SHA-256 puis chiffrée sur ton téléphone.')}
      </p>
      <button className="btn primary" disabled={busy} onClick={save}>{t('Sceller et enregistrer')}</button>
    </>
  )
}

export default function CoffreAjouter() {
  const t = useT()
  return (
    <>
      <Header title="Ajouter une preuve" back />
      <h1>{t('Nouvelle pièce')}</h1>
      <VaultGate>
        <AjouterInner />
      </VaultGate>
    </>
  )
}
