// Compte local OPTIONNEL (sans serveur). Le mot de passe (≥12 car.) dérive une clé
// qui chiffre le secret TOTP : sa correction est prouvée par déchiffrement (canary),
// comme le coffre-fort. Aucune donnée ne quitte le terminal.
import { deriveKey, encryptJSON, decryptJSON } from './crypto.js'

const KEY = 'temoin.account'

export function getAccount() {
  try {
    return JSON.parse(localStorage.getItem(KEY))
  } catch {
    return null
  }
}
export function hasAccount() {
  return !!getAccount()
}

export async function createAccount(username, password, totpSecret) {
  const { key, salt } = await deriveKey(password)
  const enc = await encryptJSON(key, { totpSecret, ok: true })
  const acc = { username: username || '', salt, enc, createdAt: new Date().toISOString() }
  localStorage.setItem(KEY, JSON.stringify(acc))
  return acc
}

// Vérifie le mot de passe (1er facteur) et renvoie le secret TOTP, ou null si incorrect.
export async function unlockAccount(password) {
  const acc = getAccount()
  if (!acc) return null
  try {
    const { key } = await deriveKey(password, acc.salt)
    return await decryptJSON(key, acc.enc)
  } catch {
    return null
  }
}

export function removeAccount() {
  localStorage.removeItem(KEY)
}

// Politique de mot de passe : au moins 12 caractères.
export function passwordIssues(pwd) {
  const issues = []
  if (pwd.length < 12) issues.push('min12')
  if (!/[a-z]/.test(pwd) || !/[A-Z]/.test(pwd)) issues.push('case')
  if (!/[0-9]/.test(pwd)) issues.push('digit')
  return issues
}
