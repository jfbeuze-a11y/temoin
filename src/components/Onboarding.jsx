import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { useT } from '../lib/i18n.js'
import { KoriLogo, PanicButton } from './ui.jsx'
import { Icon } from './icons.jsx'

// Onboarding KORI — 3 écrans au tout premier lancement (EF-X02 : aucun compte requis).
export default function Onboarding() {
  const { completeOnboarding } = useApp()
  const t = useT()
  const [step, setStep] = useState(0)
  const last = step === 2

  const next = () => (last ? completeOnboarding() : setStep((s) => s + 1))

  return (
    <div className="app">
      <header className="header">
        <span className="spacer" />
        <button className="iconbtn" onClick={completeOnboarding} style={{ width: 'auto', padding: '0 14px', fontWeight: 600 }}>
          {t('Passer')}
        </button>
        <PanicButton />
      </header>

      <main className="content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', minHeight: '70vh' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
          <KoriLogo size={step === 0 ? 120 : 84} />
        </div>

        {step === 0 && (
          <>
            <h1>{t('Salut, moi c’est Kori')}</h1>
            <p className="lead">{t('Ton compagnon de protection contre le cyberharcèlement. Je reste avec toi, discret.')}</p>
          </>
        )}

        {step === 1 && (
          <>
            <h1>{t('Je t’aide, concrètement')}</h1>
            <div className="card" style={{ textAlign: 'left' }}>
              {[
                ['lightbulb', t('Comprendre ce qui t’arrive')],
                ['lock', t('Mettre tes preuves au chaud')],
                ['lifebuoy', t('Trouver de l’aide au bon moment')]
              ].map(([ico, label]) => (
                <div key={ico} className="linkrow" style={{ padding: '8px 0' }}>
                  <span className="chip" aria-hidden="true"><Icon name={ico} size={24} /></span>
                  <span className="meta"><strong>{label}</strong></span>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h1>{t('Ici, t’es peinard')}</h1>
            <p className="lead">
              {t('Zéro compte, rien ne sort de ton tel. Et l’espace parent est totalement séparé : personne voit ce que tu fais ici.')}
            </p>
            <p className="muted" style={{ fontSize: '0.86rem' }}>
              {t('Besoin d’aide tout de suite ? Le 3018, ou le 17 en cas de danger.')}
            </p>
          </>
        )}

        {/* indicateurs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '22px 0' }} aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: i === step ? 22 : 8,
                height: 8,
                borderRadius: 999,
                background: i === step ? 'var(--primary)' : 'var(--line)',
                transition: 'all .25s'
              }}
            />
          ))}
        </div>

        <button className="btn primary" onClick={next}>{last ? t('C’est parti') : t('Suivant')}</button>
      </main>
    </div>
  )
}
