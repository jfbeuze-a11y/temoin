import { useEffect, useState } from 'react'
import { Header } from '../../components/ui.jsx'
import VaultGate from '../../components/VaultGate.jsx'
import { useApp } from '../../context/AppContext.jsx'
import { addJournal, listJournal, deleteJournal } from '../../lib/vault.js'
import { useT } from '../../lib/i18n.js'

function JournalInner() {
  const { adoKey, lang } = useApp()
  const t = useT()
  const [entries, setEntries] = useState([])
  const [text, setText] = useState('')

  const fmt = (iso) => {
    try {
      return new Date(iso).toLocaleString(lang === 'es' ? 'es-ES' : 'fr-FR', { dateStyle: 'medium', timeStyle: 'short' })
    } catch {
      return iso
    }
  }

  async function refresh() {
    setEntries(await listJournal(adoKey))
  }
  useEffect(() => {
    refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function save() {
    if (!text.trim()) return
    await addJournal(adoKey, text.trim())
    setText('')
    refresh()
  }
  async function remove(id) {
    await deleteJournal(id)
    refresh()
  }

  return (
    <>
      <p className="lead">{t('Un espace à toi, chiffré. Personne d’autre ne peut le lire.')}</p>
      <label htmlFor="entry">{t('Aujourd’hui…')}</label>
      <textarea id="entry" placeholder={t('Ce que je ressens, ce qui s’est passé…')} value={text} onChange={(e) => setText(e.target.value)} />
      <button className="btn primary" onClick={save}>{t('Enregistrer')}</button>

      <h2>{t('Mes notes')}</h2>
      {entries.length === 0 && <p className="muted">{t('Aucune note pour l’instant.')}</p>}
      {entries.map((e) => (
        <div className="card" key={e.id}>
          <p className="muted" style={{ fontSize: '0.78rem', marginTop: 0 }}>{fmt(e.createdAt)}</p>
          <p style={{ color: 'var(--ink)', whiteSpace: 'pre-wrap' }}>{e.text}</p>
          <button className="btn ghost" onClick={() => remove(e.id)}>{t('Supprimer')}</button>
        </div>
      ))}
    </>
  )
}

export default function Journal() {
  const t = useT()
  return (
    <>
      <Header title="Journal privé" back />
      <h1>{t('Mon journal')}</h1>
      <VaultGate>
        <JournalInner />
      </VaultGate>
    </>
  )
}
