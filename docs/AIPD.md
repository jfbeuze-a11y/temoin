# AIPD — Analyse d'Impact relative à la Protection des Données

**Application « Témoin » (compagnon KORI) — SIFARIS**
Brouillon de travail (art. 35 RGPD). À compléter et **valider par le DPO et un avocat** avant tout déploiement réel.

> Statut : DRAFT — champs `[à compléter]` à renseigner.

---

## 1. Pourquoi une AIPD est obligatoire

Le traitement concerne des **mineurs en situation de vulnérabilité** (victimes potentielles de cyberharcèlement) et des **données sensibles par leur contexte** (preuves, ressenti). Ces critères déclenchent l'obligation d'AIPD (lignes directrices CNIL/CEPD).

## 2. Description du traitement

- **Responsable de traitement** : SIFARIS — contact : `[à compléter]`.
- **DPO** : `[à compléter]`.
- **Finalités** : aider l'adolescent à reconnaître, documenter et signaler le cyberharcèlement ; orienter vers les dispositifs d'aide ; outiller les parents. Aucune surveillance, aucun profilage.
- **Personnes concernées** : adolescents utilisateurs, leurs adultes de confiance (nom/contact saisis librement), parents.
- **Données traitées** (toutes **stockées localement et chiffrées sur l'appareil**) :
  - preuves (captures, textes, liens) + métadonnées (date, origine, empreinte) ;
  - journal personnel ; adultes de confiance ; réglages ; compte local optionnel (mot de passe haché, secret TOTP chiffré).
- **Architecture** : **local-first / offline-first**. Aucune donnée personnelle n'est transmise à un serveur. Pas de backend applicatif. Hébergement des **fichiers du programme** (sans donnée personnelle) sur GitHub Pages.
- **Pas de** : compte obligatoire, profilage, publicité, SDK tiers traçant, géolocalisation, donnée personnelle dans les URL.

## 3. Nécessité et proportionnalité

- **Base légale** : à qualifier (intérêt légitime / mission d'intérêt public selon le porteur) — `[à compléter avec l'avocat]`. La conception **sans compte ni collecte** écarte l'essentiel des difficultés liées au consentement des mineurs.
- **Minimisation** : seules les données saisies par l'utilisateur, sur son appareil, pour son propre usage.
- **Durées de conservation** : maîtrisées par l'utilisateur ; effacement total en un geste (Réglages → Mes données).
- **Information** : page « Mentions légales & confidentialité » intégrée, langage adapté à l'âge.
- **Droits** : les données n'étant pas collectées par le responsable, l'utilisateur exerce un **contrôle direct** (consultation, effacement local). Procédure de contact : `[à compléter]`.

## 4. Mesures de sécurité (voir aussi `CONFORMITE-SECURITE.md`)

- Chiffrement au repos **AES-256-GCM**, clé dérivée du code par **PBKDF2 (210 000 itérations, SHA-256)**.
- Clé **uniquement en mémoire**, jamais persistée ; **verrouillage automatique** du coffre (inactivité 3 min + mise en arrière-plan).
- Intégrité des preuves par **empreinte SHA-256** (détection d'altération).
- **Étanchéité architecturale** ado/parent (bases séparées, aucune passerelle).
- Mode discret + **sortie rapide**. Aucun traceur.
- MFA optionnelle (TOTP, RFC 6238), 100 % locale.

## 5. Risques et mesures

| Risque | Gravité | Vraisemblance | Mesures |
|---|---|---|---|
| Accès aux preuves par un tiers (tél. perdu/partagé) | Élevée | Moyenne | Chiffrement + code + verrouillage auto ; sortie rapide |
| Détournement du mode discret contre la victime | Élevée | Faible | Pas de pistage ; conception prudente ; sensibilisation |
| Faux sentiment de sécurité (humain écarté) | Élevée | Moyenne | Renvoi systématique vers 3018/3114/17 et adulte |
| Contenu périmé (numéros, droit) | Moyenne | Élevée | Maintenance trimestrielle + CMS (à mettre en place) |
| Preuve écartée en procédure | Moyenne | Moyenne | Empreinte + horodatage ; recommandation de constat ; horodatage RFC 3161 à ajouter |

## 6. Risques résiduels et validation

- Résiduels acceptables sous réserve de : maintenance du contenu, durcissement mobile natif (portage), validation juridique.
- **Avis du DPO** : `[à compléter]`.
- **Validation juridique (avocat)** : `[à compléter]`.
- **Date / version** : `[à compléter]`.
