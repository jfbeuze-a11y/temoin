# Registre des mesures — sécurité & conformité

Application « Témoin » (KORI). État au fil du développement. Sert de support à l'AIPD.

## Mesures techniques en place (✅)

| Domaine | Mesure | Réf. CDC |
|---|---|---|
| Chiffrement au repos | AES-256-GCM, clé PBKDF2 (**600 000 it.**, SHA-256, versionné), clé en mémoire seule | ENF-01 |
| Anti-force brute | Délai croissant après chaque essai raté (coffre + connexion) | A07 |
| En-têtes | **CSP stricte** (script-src 'self'), referrer no-referrer, liens externes en noopener | A05 |
| Dépendances | `npm audit` : **0 vulnérabilité** (jspdf mis à jour, DOMPurify corrigé) | A06 |
| Verrouillage | Code 4–6 chiffres ; **verrouillage auto** (3 min d'inactivité + arrière-plan) | ENF-01 |
| Intégrité preuves | Empreinte SHA-256 par pièce, vérifiée à la lecture | EF-P02 |
| Local-first | Aucune donnée envoyée à un serveur ; pas de backend | §7.1 |
| Étanchéité | Bases ado/parent séparées, aucune passerelle | FC1 / EF-PA01 |
| Vie privée | Pas de compte obligatoire, pas de profilage, pas de pub, pas de traceur, pas de géoloc | ENF-02 |
| MFA optionnelle | TOTP (RFC 6238) 100 % local ; mot de passe ≥ 12 caractères | ENF-01 |
| Discrétion | Mode discret + sortie rapide (panic exit) | EF-X01 |
| Effacement | Effacement total local en un geste | ENF-02 |
| Transparence | Page mentions légales & confidentialité intégrée | §8.2 |

## À faire pour la production (⏳)

| Priorité | Chantier | Nature |
|---|---|---|
| Haute | **AIPD signée + DPO désigné + validation avocat** | Organisationnel/juridique |
| Haute | **Maintenance du contenu** (CMS + veille trimestrielle : numéros, droit, plateformes) | Process |
| Haute | **Durcissement mobile natif** : portage React Native/Flutter, Keychain/Keystore, biométrie native, SQLCipher, OWASP MASVS, anti-capture | Technique (gros) |
| Moyenne | Horodatage RFC 3161 (jeton de temps fiable) pour la valeur probatoire | Technique |
| Moyenne | Audit accessibilité (RGAA/WCAG mesuré : lecteur d'écran, contrastes, clavier) | Qualité |
| Moyenne | Réactiver le hors-ligne (service worker) une fois le design figé | Technique |
| Moyenne | Tests automatisés (coffre/chiffrement) | Qualité |
| Basse | Auto-hébergement des polices ; CSP via en-têtes d'hébergement | Technique |

## Note sur l'hébergement actuel

GitHub Pages héberge les **fichiers du programme** (sans donnée personnelle). Les en-têtes de sécurité HTTP (CSP, HSTS strict, etc.) ne sont pas pleinement configurables sur Pages ; à traiter lors d'un hébergement maîtrisé (UE) ou via le portage natif.
