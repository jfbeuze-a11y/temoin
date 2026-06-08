// Génération locale du dossier de preuves (EF-P04, §7.3). 100 % côté terminal, aucun transit serveur.
// Produit une synthèse horodatée reliant chaque pièce à son empreinte et à son horodatage.
import { jsPDF } from 'jspdf'

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleString('fr-FR', { dateStyle: 'long', timeStyle: 'medium' })
  } catch {
    return iso
  }
}

export async function exportDossier(evidence, meta = {}) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const W = 210
  const M = 16
  let y = 20

  const line = (txt, size = 11, style = 'normal', color = [31, 41, 51]) => {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
    doc.setTextColor(...color)
    const lines = doc.splitTextToSize(txt, W - 2 * M)
    for (const l of lines) {
      if (y > 280) {
        doc.addPage()
        y = 20
      }
      doc.text(l, M, y)
      y += size * 0.5 + 1.5
    }
  }

  // En-tête
  line('Dossier de preuves', 20, 'bold')
  line('Constitué avec l’application KORI, à des fins de signalement ou de plainte.', 9, 'italic', [90, 100, 110])
  y += 2
  line('Généré le : ' + fmtDate(new Date().toISOString()), 10)
  if (meta.context) line('Contexte : ' + meta.context, 10)
  line('Nombre de pièces : ' + evidence.length, 10)
  y += 3

  // Avertissement honnête sur la portée probatoire (§8.3)
  doc.setDrawColor(200)
  doc.setFillColor(245, 247, 249)
  const boxStart = y - 4
  line('Portée et limites', 11, 'bold', [120, 70, 0])
  line(
    'Ce dossier renforce la fiabilité des preuves (intégrité par empreinte SHA-256, horodatage). '
      + 'Il ne préjuge pas de leur appréciation par un juge. Pour les situations les plus graves, '
      + 'le recours à un constat de commissaire de justice est recommandé. Horodatage issu de l’horloge '
      + 'du terminal (jeton RFC 3161 à étudier).',
    9,
    'normal',
    [90, 70, 30]
  )
  doc.roundedRect(M - 3, boxStart, W - 2 * (M - 3), y - boxStart + 2, 2, 2)
  y += 8

  // Pièces
  evidence.forEach((p, i) => {
    if (y > 250) {
      doc.addPage()
      y = 20
    }
    line(`Pièce n°${i + 1} : ${labelType(p.type)}`, 13, 'bold')
    line('Horodatage : ' + fmtDate(p.createdAt), 10)
    if (p.source) line('Origine : ' + p.source, 10)
    if (p.note) line('Note : ' + p.note, 10)
    line('Empreinte ' + (p.algo || 'SHA-256') + ' : ' + p.fingerprint, 8, 'normal', [70, 90, 110])

    if (p.type === 'image' && typeof p.content === 'string' && p.content.startsWith('data:image')) {
      try {
        const imgW = 80
        const imgH = 60
        if (y + imgH > 285) {
          doc.addPage()
          y = 20
        }
        doc.addImage(p.content, 'JPEG', M, y, imgW, imgH, undefined, 'FAST')
        y += imgH + 4
      } catch {
        line('[image non rendue]', 9, 'italic', [150, 80, 80])
      }
    } else if (p.type !== 'image') {
      line('Contenu : ' + String(p.content).slice(0, 1200), 10)
    }
    y += 4
    doc.setDrawColor(220)
    doc.line(M, y, W - M, y)
    y += 6
  })

  // Pied de page numéroté
  const pages = doc.getNumberOfPages()
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(150)
    doc.text(`KORI, dossier de preuves, page ${i}/${pages}`, M, 290)
  }

  doc.save('dossier-de-preuves.pdf')
}

function labelType(t) {
  return { image: 'Capture d’écran', text: 'Texte / message', link: 'Lien' }[t] || 'Pièce'
}
