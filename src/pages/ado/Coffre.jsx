import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/ui.jsx'
import VaultGate from '../../components/VaultGate.jsx'
import { useApp } from '../../context/AppContext.jsx'
import { listEvidence, deleteEvidence, verifyEvidence } from '../../lib/vault.js'
import { exportDossier } from '../../lib/pdf.js'
import { Icon } from '../../components/icons.jsx'
import { useT } from '../../lib/i18n.js'

function CoffreInner() {
  const { adoKey, lang } = useApp()
  const t = useT()
  const nav = useNavigate()
  const [items, setItems] = useState([])
  const [checks, setChecks] = useState({})
  const [loading, setLoading] = useState(true)

  const fmt = (iso) => {
    try {
      return new Date(iso).toLocaleString(lang === 'es' ? 'es-ES' : 'fr-FR', { dateStyle: 'medium', timeStyle: 'short' })
    } catch {
      return iso
    }
  }
  const typeLabel = (type) => ({ image: t('Capture d’écran'), text: t('Message'), link: t('Lien') }[type])

  async function refresh() {
    setLoading(true)
    const list = await listEvidence(adoKey)
    setItems(list)
    const c = {}
    for (const p of list) c[p.id] = await verifyEvidence(p)
    setChecks(c)
    setLoading(false)
  }
  useEffect(() => {
    refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function remove(id) {
    if (!confirm(t('Supprimer cette preuve ? Elle sera définitivement perdue.'))) return
    await deleteEvidence(id)
    refresh()
  }

  return (
    <>
      <div className="banner neutre" role="note">
        <strong className="h-row"><Icon name="lock" size={18} /> {t('Chiffré sur ton téléphone.')}</strong>
        <p style={{ margin: '4px 0 0' }}>
          {t('Chaque preuve est datée et verrouillée : si on y touche, ça se voit.')}
        </p>
      </div>

      <div className="btn-row" style={{ margin: '14px 0' }}>
        <button className="btn primary" onClick={() => nav('/ado/proteger/coffre/ajouter')}>{t('+ Ajouter une preuve')}</button>
        <button className="btn" disabled={!items.length} onClick={() => exportDossier(items)}>{t('Exporter le dossier (PDF)')}</button>
      </div>

      <div className="btn-row" style={{ marginBottom: 4 }}>
        <button className="btn ghost" onClick={() => nav('/ado/proteger/plateformes')}>
          <Icon name="smartphone" size={18} /> {t('Bloquer / signaler')}
        </button>
        <button className="btn ghost" onClick={() => nav('/ado/proteger/recours')}>
          <Icon name="phone" size={18} /> {t('Numéros d’aide')}
        </button>
      </div>

      {loading && <p className="muted">{t('Lecture du coffre-fort…')}</p>}
      {!loading && items.length === 0 && (
        <p className="muted">{t('Ton coffre est vide. Balance une capture, un message ou un lien.')}</p>
      )}

      {items.map((p) => (
        <div className="card" key={p.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
            <strong>{typeLabel(p.type)}</strong>
            <span className="pill" title="Intégrité" style={{ color: checks[p.id] ? 'var(--ok)' : 'var(--danger)' }}>
              {checks[p.id] ? t('✓ Intègre') : t('Altérée')}
            </span>
          </div>
          {p.type === 'image' ? (
            <img src={p.content} alt={fmt(p.createdAt)} style={{ width: '100%', borderRadius: 10, marginTop: 8 }} />
          ) : (
            <p style={{ color: 'var(--ink)', whiteSpace: 'pre-wrap' }}>{p.content}</p>
          )}
          {p.source && <p className="muted" style={{ fontSize: '0.85rem' }}>{t('Origine :')} {p.source}</p>}
          {p.note && <p className="muted" style={{ fontSize: '0.85rem' }}>{t('Note :')} {p.note}</p>}
          <p className="muted" style={{ fontSize: '0.78rem' }}>
            {fmt(p.createdAt)} · {p.fingerprint.slice(0, 16)}…
          </p>
          <button className="btn ghost" onClick={() => remove(p.id)}>{t('Supprimer')}</button>
        </div>
      ))}
    </>
  )
}

export default function Coffre() {
  const t = useT()
  return (
    <>
      <Header title="Coffre-fort" back />
      <h1>{t('Mes preuves')}</h1>
      <VaultGate>
        <CoffreInner />
      </VaultGate>
    </>
  )
}
