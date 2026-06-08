// MFA par TOTP (RFC 6238) — 100 % local, sans serveur (ENF-01).
// Vérification du code à 6 chiffres via HMAC-SHA1 (Web Crypto). Le « second facteur »
// est l'application d'authentification de l'utilisateur (Google Authenticator, etc.).

const B32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

// Génère un secret aléatoire encodé en base32 (160 bits).
export function generateSecret() {
  const bytes = crypto.getRandomValues(new Uint8Array(20))
  let bits = ''
  for (const b of bytes) bits += b.toString(2).padStart(8, '0')
  let out = ''
  for (let i = 0; i + 5 <= bits.length; i += 5) out += B32[parseInt(bits.slice(i, i + 5), 2)]
  return out
}

function base32Decode(secret) {
  const clean = secret.replace(/=+$/g, '').toUpperCase().replace(/\s/g, '')
  let bits = ''
  for (const c of clean) {
    const val = B32.indexOf(c)
    if (val < 0) continue
    bits += val.toString(2).padStart(5, '0')
  }
  const bytes = []
  for (let i = 0; i + 8 <= bits.length; i += 8) bytes.push(parseInt(bits.slice(i, i + 8), 2))
  return new Uint8Array(bytes)
}

async function hotp(secret, counter) {
  const key = base32Decode(secret)
  const msg = new Uint8Array(8)
  let c = counter
  for (let i = 7; i >= 0; i--) {
    msg[i] = c & 0xff
    c = Math.floor(c / 256)
  }
  const cryptoKey = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign'])
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', cryptoKey, msg))
  const offset = sig[19] & 0xf
  const bin =
    ((sig[offset] & 0x7f) << 24) | (sig[offset + 1] << 16) | (sig[offset + 2] << 8) | sig[offset + 3]
  return (bin % 1000000).toString().padStart(6, '0')
}

// Vérifie un code à 6 chiffres avec une fenêtre de ±1 pas (tolérance de décalage d'horloge).
export async function verifyTOTP(secret, code, window = 1) {
  const clean = (code || '').replace(/\D/g, '')
  if (clean.length !== 6) return false
  const counter = Math.floor(Date.now() / 1000 / 30)
  for (let w = -window; w <= window; w++) {
    if ((await hotp(secret, counter + w)) === clean) return true
  }
  return false
}

// URI otpauth:// pour le QR code de configuration.
export function otpauthURI(secret, label = 'KORI', issuer = 'KORI') {
  return `otpauth://totp/${encodeURIComponent(issuer)}:${encodeURIComponent(label)}?secret=${secret}&issuer=${encodeURIComponent(issuer)}&algorithm=SHA1&digits=6&period=30`
}
