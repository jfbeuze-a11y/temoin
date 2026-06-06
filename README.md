# Témoin — compagnon de protection contre le cyberharcèlement

Application **PWA local-first / offline-first** (React + Vite) issue du cahier des charges fonctionnel SIFARIS.
Parti pris fondateur : **un compagnon, pas un mouchard**. Aucune donnée sensible ne quitte le terminal,
étanchéité architecturale totale entre l'espace ado et l'espace parent.

## Démarrer en local

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production (PWA)
npm run preview  # prévisualiser le build
```

## Mise en ligne (GitHub Pages)

Le dépôt déploie automatiquement sur **GitHub Pages** à chaque modification :

1. Tu modifies un fichier (ici sur GitHub : bouton ✏️ « Edit », ou en local puis `git push`).
2. Le workflow `.github/workflows/deploy.yml` reconstruit et publie l'app.
3. Quelques minutes plus tard, la nouvelle version est en ligne.

L'URL publique est `https://<ton-compte>.github.io/<nom-du-dépôt>/`.
La `base` du build s'aligne automatiquement sur le nom du dépôt (rien à régler si tu le renommes).
Le routage utilise `HashRouter` : aucun réglage serveur, le rafraîchissement et les liens profonds fonctionnent.

> Sous Windows, si le chemin du projet contient un `&`, lancez Vite directement :
> `node node_modules/vite/bin/vite.js`

## Architecture

- **Local-first** (§7.1) : toutes les données sensibles résident chiffrées sur l'appareil. Aucun backend.
- **Chiffrement** (ENF-01) : AES-256-GCM, clé dérivée du code par PBKDF2 (210 000 itérations) via Web Crypto API.
  La clé n'existe qu'**en mémoire** ; elle n'est jamais persistée. Au rechargement, le code est redemandé.
- **Intégrité des preuves** (EF-P02, §7.3) : empreinte SHA-256 scellant contenu + horodatage + origine ;
  recalcul à la lecture pour prouver la non-altération (badge « ✓ intègre »).
- **Étanchéité ado/parent** (FC1, EF-PA01) : deux bases IndexedDB séparées (`temoin-ado`, `temoin-parent`),
  aucune clé partagée, aucune passerelle. Garantie d'architecture, pas seulement contractuelle.
- **Offline** (EF-X05) : service worker (vite-plugin-pwa) précache le noyau protecteur.
- **Sortie rapide** (EF-X01) : bouton « Quitter » omniprésent + double appui sur Échap → redirection neutre.

## Couverture du cahier des charges

| Module | Exigences | Pages |
| --- | --- | --- |
| **M1 Comprendre** | EF-C01 autodiagnostic · EF-C02 lexique · EF-C03 repère émotionnel · EF-C04 scénarios | `pages/ado/Diagnostic, Lexique, Emotion, Scenarios` |
| **M2 Se protéger** | EF-P01/02/03 coffre-fort chiffré · EF-P04 export PDF · EF-P05 procédures plateformes · EF-P06 désescalade · EF-P07 dispositifs · EF-P08 courriers | `pages/ado/Coffre, CoffreAjouter, Plateformes, Recours, Desescalade, Courriers` |
| **M3 Être accompagné** | EF-A01 adulte de confiance · EF-A02 récit factuel · EF-A03 annuaire · EF-A04 journal chiffré | `pages/ado/AdulteConfiance, Recit, Ressources, Journal` |
| **M4 Témoin** | EF-T01 parcours · EF-T02 soutien · EF-T03 responsabilité | `pages/ado/Temoin` |
| **M5 Espace parent** | EF-PA01 étanchéité · EF-PA02 signaux · EF-PA03 bien réagir · EF-PA04 cadre légal · EF-PA05 enfant auteur · EF-PA06 réglages | `pages/parent/*` |
| **M6 Socle** | EF-X01 mode discret · EF-X02 sans compte · EF-X03 accessibilité · EF-X04 multilingue · EF-X05 offline · EF-X06 mode apaisant | `Settings`, `lib/panic`, `lib/i18n`, PWA |

## Structure

```
src/
  lib/        crypto · db (IndexedDB) · vault (coffre/journal) · pdf · panic · i18n
  data/       contenu éditorial (diagnostic, lexique, plateformes, ressources, scénarios, content)
  context/    AppContext (thème, langue, mode discret, clé en mémoire, verrouillage)
  components/ ui (header, sortie rapide, onglets) · VaultGate (verrou)
  pages/      Home · Settings · ado/* · parent/*
```

## Limites et points à traiter avant lancement (rappels du CDC)

- **Contenu périssable** (§7.4) : procédures plateformes, numéros (3018, 3020, PHAROS), cadre légal
  (loi du 2 mars 2022, pHARe) à **vérifier et actualiser**. À terme : CMS headless + diffusion OTA.
- **Horodatage** : actuellement l'horloge du terminal. Jeton d'horodatage RFC 3161 à étudier (§7.2).
- **Conformité mineurs** (ENF-03) : AIPD préalable, DPO, validation juridique des mentions (§8.3) obligatoires.
- **Cible mobile** : cette PWA implémente les principes local-first ; un portage React Native/Flutter
  (Keychain/Keystore, SQLCipher, biométrie native, MASVS) est l'étape industrielle suivante.
- Le mode démo stocke les données dans le navigateur ; sur mobile, prévoir biométrie + durcissement OWASP MASVS.

*Version de travail. Aspects juridiques à valider par un avocat.*
