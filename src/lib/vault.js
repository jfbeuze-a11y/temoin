// Coffre-fort de preuves (M2 — EF-P01/P02/P03) et journal (EF-A04).
// Chaque pièce est : horodatée, scellée par une empreinte SHA-256, puis chiffrée (AES-256-GCM)
// avant écriture sur le terminal. Aucun envoi serveur (§7.1).
import { adoDB } from './db.js'
import { encryptJSON, decryptJSON, sha256 } from './crypto.js'

function uid() {
  return (crypto.randomUUID && crypto.randomUUID()) || String(Date.now()) + Math.random().toString(16).slice(2)
}

// --- Preuves ---------------------------------------------------------------
// piece = { type:'image'|'text'|'link', content, source, note }
// content : pour une image, dataURL ; pour texte/lien, chaîne.
export async function addEvidence(key, piece) {
  const id = uid()
  const createdAt = new Date().toISOString()
  // L'empreinte scelle le contenu + l'horodatage + l'origine.
  const sealedPayload = JSON.stringify({ content: piece.content, createdAt, source: piece.source || '' })
  const fingerprint = await sha256(sealedPayload)

  const record = {
    id,
    type: piece.type,
    source: piece.source || '',
    note: piece.note || '',
    content: piece.content,
    createdAt,
    fingerprint,
    algo: 'SHA-256',
    timeSource: 'horloge du terminal' // RFC 3161 / TSA : à étudier (§7.2)
  }
  const enc = await encryptJSON(key, record)
  const db = await adoDB()
  // On ne stocke en clair que l'id et la date de tri ; le reste est chiffré.
  await db.put('evidence', { id, createdAt, payload: enc })
  return record
}

export async function listEvidence(key) {
  const db = await adoDB()
  const rows = await db.getAllFromIndex('evidence', 'createdAt')
  const out = []
  for (const row of rows) {
    try {
      out.push(await decryptJSON(key, row.payload))
    } catch {
      /* pièce illisible avec ce code — ignorée */
    }
  }
  return out.reverse() // plus récent d'abord
}

export async function deleteEvidence(id) {
  const db = await adoDB()
  await db.delete('evidence', id)
}

// Recalcule l'empreinte et la compare à celle scellée → preuve d'intégrité (§7.3).
export async function verifyEvidence(record) {
  const recomputed = await sha256(
    JSON.stringify({ content: record.content, createdAt: record.createdAt, source: record.source })
  )
  return recomputed === record.fingerprint
}

// --- Journal personnel chiffré (EF-A04) ------------------------------------
export async function addJournal(key, text, mood) {
  const id = uid()
  const createdAt = new Date().toISOString()
  const enc = await encryptJSON(key, { id, text, mood, createdAt })
  const db = await adoDB()
  await db.put('journal', { id, createdAt, payload: enc })
  return { id, text, mood, createdAt }
}

export async function listJournal(key) {
  const db = await adoDB()
  const rows = await db.getAll('journal')
  const out = []
  for (const row of rows) {
    try {
      out.push(await decryptJSON(key, row.payload))
    } catch {
      /* ignore */
    }
  }
  return out.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}

export async function deleteJournal(id) {
  const db = await adoDB()
  await db.delete('journal', id)
}

// --- Adultes de confiance (EF-A01) -----------------------------------------
export async function addTrusted(key, person) {
  const id = uid()
  const enc = await encryptJSON(key, { id, ...person })
  const db = await adoDB()
  await db.put('trusted', { id, payload: enc })
  return { id, ...person }
}

export async function listTrusted(key) {
  const db = await adoDB()
  const rows = await db.getAll('trusted')
  const out = []
  for (const row of rows) {
    try {
      out.push(await decryptJSON(key, row.payload))
    } catch {
      /* ignore */
    }
  }
  return out
}

export async function deleteTrusted(id) {
  const db = await adoDB()
  await db.delete('trusted', id)
}
