import { useState } from 'react'
import { Header } from '../../components/ui.jsx'
import { getContent } from '../../data/content.js'
import { useApp } from '../../context/AppContext.jsx'
import { useT } from '../../lib/i18n.js'

export default function Temoin() {
  const { lang } = useApp()
  const t = useT()
  const temoin = getContent(lang).temoin
  const [copied, setCopied] = useState(false)
  async function copyScript() {
    try {
      await navigator.clipboard.writeText(temoin.scriptAdulte)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* ignore */
    }
  }
  return (
    <>
      <Header title="Témoin" back />
      <h1>{t('J’ai vu quelqu’un se faire harceler')}</h1>
      <p className="lead">{temoin.intro}</p>

      <h2>{t('Des micro-gestes utiles et sans risque')}</h2>
      {temoin.microGestes.map((g, i) => (
        <div className="card" key={i}>
          <strong>{i + 1}. {g.titre}</strong>
          <p style={{ color: 'var(--ink)' }}>{g.texte}</p>
        </div>
      ))}

      <div className="banner attention" role="note">
        <strong>{t('Partager ou « liker », ce n’est pas neutre.')}</strong>
        <p style={{ color: 'var(--ink)', margin: '6px 0 0' }}>{temoin.responsabilite}</p>
      </div>

      <h2>{t('En parler à un adulte')}</h2>
      <div className="card">
        <p style={{ color: 'var(--ink)', fontStyle: 'italic' }}>« {temoin.scriptAdulte} »</p>
        <button className="btn primary" onClick={copyScript}>{copied ? t('Copié ✓') : t('Copier ce message')}</button>
      </div>
    </>
  )
}
