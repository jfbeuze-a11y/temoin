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

## Durcissement natif — DÉJÀ INTÉGRÉ ✅
La **biométrie + stockage sécurisé** est codée et **active uniquement en natif** (web inchangé) :
- Plugin : `capacitor-native-biometric` (Keychain iOS / Keystore Android).
- Code : `src/lib/biometric.js` (tout est guardé par `Capacitor.isNativePlatform()` ; chargement paresseux du plugin → jamais exécuté sur le web).
- UX (`VaultGate`) : en natif, case **« Activer le déverrouillage par biométrie »** à la création/déverrouillage (le code est rangé dans le coffre sécurisé natif), puis bouton **« Déverrouiller avec la biométrie »** au lancement.
- Le chiffrement (AES-256-GCM, PBKDF2 600k) reste la base ; la biométrie ne fait que protéger/restituer le code via le matériel.

> ⚠️ Compatibilité : `capacitor-native-biometric` v4 est prévu pour Capacitor 5/6 ; ce projet est en Capacitor 8. Vérifie la compatibilité au premier build natif (sinon, utiliser une version alignée du plugin ou `@aparajita/capacitor-biometric-auth` + `@aparajita/capacitor-secure-storage`). **Aucun impact sur la version web.**

## Publication (nécessite TES comptes)
- **Google Play** : compte développeur (~25 $ une fois), signer l'**AAB**, fiche Play Store.
- **App Store** : compte Apple Developer (~99 $/an), signature/Provisioning via Xcode, fiche App Store.
- Une app native **ne passe pas par GitHub Pages** : Pages reste pour la version web.

## Notes
- Les dossiers `android/` et `ios/` sont **gitignorés** (générés par `npx cap add`). Tu peux les versionner si tu préfères les conserver.
- Si la CSP bloque une ressource en natif (schéma `capacitor://localhost`), ajuste la directive dans `vite.config.js` (plugin `inject-csp`).
