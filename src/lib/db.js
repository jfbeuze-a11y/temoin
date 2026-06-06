// Stockage local-first (EF-X05, §7.1). Deux bases STRICTEMENT séparées pour garantir
// l'étanchéité architecturale ado/parent (FC1, EF-PA01) : l'espace parent n'ouvre jamais
// la base « temoin-ado » et ne détient aucune clé de déchiffrement.
import { openDB } from 'idb'

const ADO_DB = 'temoin-ado'
const PARENT_DB = 'temoin-parent'
const VERSION = 1

// Base de l'adolescent : preuves, journal, méta de verrouillage. Contenu chiffré.
export function adoDB() {
  return openDB(ADO_DB, VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta')
      if (!db.objectStoreNames.contains('evidence')) {
        const s = db.createObjectStore('evidence', { keyPath: 'id' })
        s.createIndex('createdAt', 'createdAt')
      }
      if (!db.objectStoreNames.contains('journal')) {
        db.createObjectStore('journal', { keyPath: 'id' })
      }
      if (!db.objectStoreNames.contains('trusted')) {
        db.createObjectStore('trusted', { keyPath: 'id' })
      }
    }
  })
}

// Base du parent : aucune donnée sensible, aucune passerelle vers l'espace ado.
export function parentDB() {
  return openDB(PARENT_DB, VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('notes')) db.createObjectStore('notes', { keyPath: 'id' })
    }
  })
}

// --- Méta (sel PBKDF2, canary de vérification du code) ----------------------
export async function getMeta(k) {
  const db = await adoDB()
  return db.get('meta', k)
}
export async function setMeta(k, v) {
  const db = await adoDB()
  return db.put('meta', v, k)
}

// --- Effacement total (ENF-02 : effacement aisé) ---------------------------
export async function wipeAdoData() {
  const db = await adoDB()
  await Promise.all(['meta', 'evidence', 'journal', 'trusted'].map((s) => db.clear(s)))
}
