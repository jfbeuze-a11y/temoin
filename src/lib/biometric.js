// Biométrie + stockage sécurisé natif (Keychain iOS / Keystore Android).
// ACTIVÉ UNIQUEMENT EN NATIF (Capacitor). Sur le web, tout est no-op : la version
// web continue de fonctionner avec le code chiffré (PBKDF2), sans dépendance native.
import { Capacitor } from '@capacitor/core'

const SERVER = 'fr.sifaris.kori.vault'
const FLAG = 'temoin.bio' // indicateur local non sensible (biométrie activée ?)

export const isNative = () => {
  try {
    return Capacitor && Capacitor.isNativePlatform && Capacitor.isNativePlatform()
  } catch {
    return false
  }
}

// Chargement paresseux du plugin natif : jamais exécuté sur le web.
async function NB() {
  const mod = await import('capacitor-native-biometric')
  return mod.NativeBiometric
}

// La biométrie est-elle disponible sur l'appareil ?
export async function biometricAvailable() {
  if (!isNative()) return false
  try {
    const res = await (await NB()).isAvailable()
    return !!res.isAvailable
  } catch {
    return false
  }
}

// Biométrie déjà activée pour le coffre (lecture locale, sans prompt) ?
export function biometricEnabled() {
  if (!isNative()) return false
  try {
    return localStorage.getItem(FLAG) === '1'
  } catch {
    return false
  }
}

// Active le déverrouillage biométrique : stocke le code dans le coffre sécurisé natif.
export async function enableBiometric(code) {
  if (!isNative()) return false
  try {
    await (await NB()).setCredentials({ username: 'vault', password: String(code), server: SERVER })
    localStorage.setItem(FLAG, '1')
    return true
  } catch {
    return false
  }
}

// Désactive et efface le secret du coffre sécurisé natif.
export async function disableBiometric() {
  try {
    localStorage.removeItem(FLAG)
    if (isNative()) await (await NB()).deleteCredentials({ server: SERVER })
  } catch {
    /* ignore */
  }
}

// Demande la biométrie puis renvoie le code stocké (ou null).
export async function unlockWithBiometric() {
  if (!isNative() || !biometricEnabled()) return null
  try {
    const nb = await NB()
    await nb.verifyIdentity({ reason: 'Déverrouille ton coffre', title: 'KORI', subtitle: '', description: '' })
    const cred = await nb.getCredentials({ server: SERVER })
    return (cred && cred.password) || null
  } catch {
    return null
  }
}
