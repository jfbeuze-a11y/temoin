import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { getMeta, setMeta } from '../lib/db.js'
import { deriveKey, encryptJSON, tryUnlock } from '../lib/crypto.js'
import * as account from '../lib/account.js'
import { verifyTOTP } from '../lib/totp.js'

const AppContext = createContext(null)
export const useApp = () => useContext(AppContext)

// Préférences non sensibles (thème, langue, mode discret) — localStorage, espace neutre.
function loadPref(k, def) {
  try {
    const v = localStorage.getItem('temoin.' + k)
    return v === null ? def : JSON.parse(v)
  } catch {
    return def
  }
}
function savePref(k, v) {
  try {
    localStorage.setItem('temoin.' + k, JSON.stringify(v))
  } catch {
    /* ignore */
  }
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => loadPref('theme', 'calm')) // 'calm' (sombre apaisant) | 'light'
  const [lang, setLang] = useState(() => loadPref('lang', 'fr'))
  const [discreet, setDiscreet] = useState(() => loadPref('discreet', false))
  const [onboarded, setOnboardedState] = useState(() => loadPref('onboarded', false))

  // Clé de chiffrement de l'espace ado — UNIQUEMENT en mémoire, jamais persistée.
  const [adoKey, setAdoKey] = useState(null)
  const [hasVault, setHasVault] = useState(null) // null = inconnu, true/false ensuite

  // Compte local optionnel (mot de passe + MFA). authed = session uniquement.
  const [hasAccount, setHasAccount] = useState(() => account.hasAccount())
  const [accountAuthed, setAccountAuthed] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    getMeta('canary').then((c) => setHasVault(!!c))
  }, [])

  const updateTheme = (v) => {
    setTheme(v)
    savePref('theme', v)
  }
  const updateLang = (v) => {
    setLang(v)
    savePref('lang', v)
  }
  const updateDiscreet = (v) => {
    setDiscreet(v)
    savePref('discreet', v)
  }
  const completeOnboarding = () => {
    setOnboardedState(true)
    savePref('onboarded', true)
  }
  const resetOnboarding = () => {
    setOnboardedState(false)
    savePref('onboarded', false)
  }

  // Crée le coffre-fort : dérive une clé du code, stocke sel + canary chiffré (jamais le code).
  const createVault = useCallback(async (passcode) => {
    const { key, salt } = await deriveKey(passcode)
    const canary = await encryptJSON(key, { ok: true, v: 1 })
    await setMeta('salt', salt)
    await setMeta('canary', canary)
    setAdoKey(key)
    setHasVault(true)
    return true
  }, [])

  // Déverrouille : retente la dérivation et vérifie via le canary.
  const unlockVault = useCallback(async (passcode) => {
    const salt = await getMeta('salt')
    const canary = await getMeta('canary')
    if (!salt || !canary) return false
    const key = await tryUnlock(passcode, salt, canary)
    if (key) {
      setAdoKey(key)
      return true
    }
    return false
  }, [])

  const lockVault = useCallback(() => setAdoKey(null), [])

  // --- Compte local + MFA (TOTP) ---
  const createAccount = useCallback(async (username, password, totpSecret) => {
    await account.createAccount(username, password, totpSecret)
    setHasAccount(true)
    setAccountAuthed(true)
    return true
  }, [])

  const loginAccount = useCallback(async (password, code) => {
    const data = await account.unlockAccount(password)
    if (!data) return false // mot de passe incorrect
    const ok = await verifyTOTP(data.totpSecret, code)
    if (ok) setAccountAuthed(true)
    return ok
  }, [])

  const logoutAccount = useCallback(() => setAccountAuthed(false), [])
  const removeAccount = useCallback(() => {
    account.removeAccount()
    setHasAccount(false)
    setAccountAuthed(false)
  }, [])

  const value = {
    theme,
    setTheme: updateTheme,
    lang,
    setLang: updateLang,
    discreet,
    setDiscreet: updateDiscreet,
    onboarded,
    completeOnboarding,
    resetOnboarding,
    adoKey,
    hasVault,
    createVault,
    unlockVault,
    lockVault,
    setHasVault,
    hasAccount,
    accountAuthed,
    createAccount,
    loginAccount,
    logoutAccount,
    removeAccount
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
