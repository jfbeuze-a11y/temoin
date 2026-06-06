import { useEffect } from 'react'
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom'
import { installPanicShortcuts } from './lib/panic.js'
import { TabBar } from './components/ui.jsx'
import AccountGate from './components/AccountGate.jsx'
import Onboarding from './components/Onboarding.jsx'
import { useApp } from './context/AppContext.jsx'

import Home from './pages/Home.jsx'
import Settings from './pages/Settings.jsx'
import Compte from './pages/Compte.jsx'

import AdoHome from './pages/ado/AdoHome.jsx'
import Comprendre from './pages/ado/Comprendre.jsx'
import Diagnostic from './pages/ado/Diagnostic.jsx'
import Lexique from './pages/ado/Lexique.jsx'
import Emotion from './pages/ado/Emotion.jsx'
import Scenarios from './pages/ado/Scenarios.jsx'
import Fil from './pages/ado/Fil.jsx'
import Proteger from './pages/ado/Proteger.jsx'
import Coffre from './pages/ado/Coffre.jsx'
import CoffreAjouter from './pages/ado/CoffreAjouter.jsx'
import Plateformes from './pages/ado/Plateformes.jsx'
import SocialProtection from './pages/ado/SocialProtection.jsx'
import Sextorsion from './pages/ado/Sextorsion.jsx'
import PlateformeDetail from './pages/ado/PlateformeDetail.jsx'
import Recours from './pages/ado/Recours.jsx'
import Desescalade from './pages/ado/Desescalade.jsx'
import Courriers from './pages/ado/Courriers.jsx'
import Accompagne from './pages/ado/Accompagne.jsx'
import AdulteConfiance from './pages/ado/AdulteConfiance.jsx'
import Recit from './pages/ado/Recit.jsx'
import Ressources from './pages/ado/Ressources.jsx'
import Journal from './pages/ado/Journal.jsx'
import Temoin from './pages/ado/Temoin.jsx'

import ParentHome from './pages/parent/ParentHome.jsx'
import Signaux from './pages/parent/Signaux.jsx'
import Reagir from './pages/parent/Reagir.jsx'
import CadreLegal from './pages/parent/CadreLegal.jsx'
import EnfantAuteur from './pages/parent/EnfantAuteur.jsx'
import Reglages from './pages/parent/Reglages.jsx'

function AdoLayout() {
  return (
    <div className="app" data-space="ado">
      <a href="#main" className="skip">Aller au contenu</a>
      <main id="main" className="content">
        <Outlet />
      </main>
      <TabBar />
    </div>
  )
}

function PlainLayout() {
  return (
    <div className="app">
      <a href="#main" className="skip">Aller au contenu</a>
      <main id="main" className="content">
        <Outlet />
      </main>
    </div>
  )
}

// Espace parent : sous-arbre recoloré en violet (repère visuel distinct de l'ado).
function ParentLayout() {
  return (
    <div className="app" data-space="parent">
      <a href="#main" className="skip">Aller au contenu</a>
      <main id="main" className="content">
        <Outlet />
      </main>
    </div>
  )
}

function OnboardingGate({ children }) {
  const { onboarded } = useApp()
  const { pathname } = useLocation()
  // Onboarding KORI réservé à l'espace ado (le lien parent et l'accueil n'en ont pas).
  if (onboarded || !pathname.startsWith('/ado')) return children
  return <Onboarding />
}

// Espace cible du build : 'ado' | 'parent' | undefined (app complète avec page de choix).
const SPACE = import.meta.env.VITE_SPACE

const adoRoutes = (
  <Route path="/ado" element={<AdoLayout />}>
    <Route index element={<AdoHome />} />
    <Route path="comprendre" element={<Comprendre />} />
    <Route path="comprendre/diagnostic" element={<Diagnostic />} />
    <Route path="comprendre/lexique" element={<Lexique />} />
    <Route path="comprendre/emotion" element={<Emotion />} />
    <Route path="comprendre/scenarios" element={<Scenarios />} />
    <Route path="comprendre/fil" element={<Fil />} />
    <Route path="proteger" element={<Proteger />} />
    <Route path="proteger/coffre" element={<Coffre />} />
    <Route path="proteger/coffre/ajouter" element={<CoffreAjouter />} />
    <Route path="proteger/securite" element={<SocialProtection />} />
    <Route path="proteger/sextorsion" element={<Sextorsion />} />
    <Route path="proteger/plateformes" element={<Plateformes />} />
    <Route path="proteger/plateformes/:id" element={<PlateformeDetail />} />
    <Route path="proteger/recours" element={<Recours />} />
    <Route path="proteger/desescalade" element={<Desescalade />} />
    <Route path="proteger/courriers" element={<Courriers />} />
    <Route path="accompagne" element={<Accompagne />} />
    <Route path="accompagne/adulte" element={<AdulteConfiance />} />
    <Route path="accompagne/recit" element={<Recit />} />
    <Route path="accompagne/ressources" element={<Ressources />} />
    <Route path="accompagne/journal" element={<Journal />} />
    <Route path="temoin" element={<Temoin />} />
  </Route>
)

const parentRoutes = (
  <Route element={<ParentLayout />}>
    <Route path="/parent" element={<ParentHome />} />
    <Route path="/parent/signaux" element={<Signaux />} />
    <Route path="/parent/reagir" element={<Reagir />} />
    <Route path="/parent/legal" element={<CadreLegal />} />
    <Route path="/parent/auteur" element={<EnfantAuteur />} />
    <Route path="/parent/reglages" element={<Reglages />} />
  </Route>
)

export default function App() {
  useEffect(() => installPanicShortcuts(), [])

  // Page d'entrée de la racine "/" selon le build.
  const rootElement =
    SPACE === 'ado' ? <Navigate to="/ado" replace /> : SPACE === 'parent' ? <Navigate to="/parent" replace /> : <Home />
  const fallback = SPACE === 'parent' ? '/parent' : SPACE === 'ado' ? '/ado' : '/'

  return (
    <AccountGate>
      <OnboardingGate>
        <Routes>
          <Route element={<PlainLayout />}>
            <Route path="/" element={rootElement} />
            <Route path="/reglages" element={<Settings />} />
            <Route path="/compte" element={<Compte />} />
          </Route>

          {SPACE !== 'parent' && adoRoutes}
          {SPACE !== 'ado' && parentRoutes}

          <Route path="*" element={<Navigate to={fallback} replace />} />
        </Routes>
      </OnboardingGate>
    </AccountGate>
  )
}
