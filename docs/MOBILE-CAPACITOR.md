# Application mobile native (Capacitor)

L'app web (KORI / Témoin) est **« Capacitor-ready »** : on l'emballe en vraie app **Android / iOS** en réutilisant 100 % du code, avec accès au **stockage sécurisé natif** et à la **biométrie**.

- `appId` : `fr.sifaris.kori` · `appName` : `KORI` (voir `capacitor.config.json`)
- Le routage (`HashRouter`) et le build à base relative (`npm run cap:build`) sont déjà compatibles.

## Prérequis (sur la machine de build)
- **Android** : Android Studio + SDK Android + JDK 17.
- **iOS** : un **Mac** avec Xcode (obligatoire, impossible sous Windows).

## Construire l'app

```bash
npm install
npm run cap:build          # build web (base relative) -> dossier dist/

# Android (1re fois)
npx cap add android
npx cap sync
npx cap open android       # ouvre Android Studio -> Run (émulateur/téléphone) ou Build > APK/AAB

# iOS (sur Mac, 1re fois)
npx cap add ios
npx cap sync
npx cap open ios           # ouvre Xcode -> Run / Archive
```

À chaque modif du code : `npm run cap:sync` (rebuild + copie dans les projets natifs).

## Icône & écran de démarrage
Génère-les depuis `public/kori.png` :
```bash
npm i -D @capacitor/assets
npx @capacitor/assets generate --iconBackgroundColor "#14171a" --splashBackgroundColor "#14171a"
```

## Durcissement natif à ajouter (prochaine étape sécurité)
Plugins recommandés (à installer puis utiliser uniquement en contexte natif via `Capacitor.isNativePlatform()`) :
- **Biométrie** (empreinte/visage) : `@aparajita/capacitor-biometric-auth`
- **Stockage sécurisé** (Keychain iOS / Keystore Android) : `@aparajita/capacitor-secure-storage`

Idée d'intégration : sur mobile natif, proposer le **déverrouillage biométrique** du coffre, et stocker la clé/paramètres sensibles dans le stockage sécurisé natif plutôt que via le seul code. Le reste du chiffrement (AES-256-GCM, PBKDF2 600k) est déjà en place et réutilisé.

## Publication (nécessite TES comptes)
- **Google Play** : compte développeur (~25 $ une fois), signer l'**AAB**, fiche Play Store.
- **App Store** : compte Apple Developer (~99 $/an), signature/Provisioning via Xcode, fiche App Store.
- Une app native **ne passe pas par GitHub Pages** : Pages reste pour la version web.

## Notes
- Les dossiers `android/` et `ios/` sont **gitignorés** (générés par `npx cap add`). Tu peux les versionner si tu préfères les conserver.
- Si la CSP bloque une ressource en natif (schéma `capacitor://localhost`), ajuste la directive dans `vite.config.js` (plugin `inject-csp`).
