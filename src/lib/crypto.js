// Couche cryptographique — conforme ENF-01 (chiffrement au repos AES-256) et EF-P02 (empreinte SHA-256).
// Tout est local : aucune clé, aucun secret ne quitte le terminal. Web Crypto API uniquement.

const enc = new TextEncoder()
const dec = new TextDecoder()

// --- Encodage utilitaire ---------------------------------------------------
export function bufToBase64(buf) {
  const bytes = new Uint8Array(buf)
  let bin = ''
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i])
  return btoa(bin)
}

export function base64ToBuf(b64) {
  const bin = atob(b64)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return bytes.buffer
}

export function bufToHex(buf) {
  const bytes = new Uint8Array(buf)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

// --- Empreinte d'intégrité (EF-P02) ----------------------------------------
// SHA-256 d'un contenu (texte ou ArrayBuffer). Sert à sceller chaque pièce.
export async function sha256(data) {
  const buf = typeof data === 'string' ? enc.encode(data) : data
  const digest = await crypto.subtle.digest('SHA-256', buf)
  return bufToHex(digest)
}

// --- Dérivation de clé à partir du code/PIN (PBKDF2) ------------------------
const PBKDF2_ITERATIONS = 210000 // recommandation OWASP pour SHA-256

export async function deriveKey(passcode, saltB64) {
  const salt = saltB64 ? new Uint8Array(base64ToBuf(saltB64)) : crypto.getRandomValues(new Uint8Array(16))
  const baseKey = await crypto.subtle.importKey('raw', enc.encode(passcode), 'PBKDF2', false, ['deriveKey'])
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  )
  return { key, salt: bufToBase64(salt) }
}

// --- Chiffrement / déchiffrement AES-256-GCM -------------------------------
export async function encryptJSON(key, obj) {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const plaintext = enc.encode(JSON.stringify(obj))
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plaintext)
  return { iv: bufToBase64(iv), ct: bufToBase64(ct) }
}

export async function decryptJSON(key, payload) {
  const iv = new Uint8Array(base64ToBuf(payload.iv))
  const ct = base64ToBuf(payload.ct)
  const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct)
  return JSON.parse(dec.decode(pt))
}

// Vérifie un code en tentant de déchiffrer un témoin (canary) stocké au déverrouillage.
export async function tryUnlock(passcode, saltB64, canary) {
  try {
    const { key } = await deriveKey(passcode, saltB64)
    await decryptJSON(key, canary)
    return key
  } catch {
    return null
  }
}
