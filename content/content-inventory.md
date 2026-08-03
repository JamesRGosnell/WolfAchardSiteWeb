# Groupe Wolf Achard / Wolf Archard Group — bilingual content inventory

**Verbatim archive** of every human-readable string on the live microsite, French and English.

| | |
|---|---|
| Captured | **2026-08-02** (raw HTTP GET, bytes written unmodified) |
| Ground truth | `source-assets/html/` — 16 raw captures. **This file is a transcription; where they disagree, the raw HTML wins.** |
| French tree | `https://www.fbngp.ca/conseiller/groupe-wolf-achard` |
| English tree | `https://www.nbfwm.ca/advisor/wolf-archard-group` (note: `Archard`, not `Achard`) |
| Pages | 8 French + 8 English, all HTTP 200 |

## How to read this file

Strings are reproduced **character-for-character** from the raw markup, typos included. HTML entities are
decoded to the characters they render as. Characters that a rebuild must not silently normalise are made visible:

| Marker | Character | Why it matters |
|---|---|---|
| `⟦NBSP⟧` | U+00A0 no-break space | Holds French figures and titles together; stripping it changes a registered string |
| `⟦NNBSP⟧` | U+202F narrow no-break space | Used on the English firm page before `$200 billion` and `31,243` |
| `⟦’⟧` | U+2019 right single quote | The markup mixes U+2019 and U+0027 **inside single sentences** — do not normalise either way |
| `⟦sup⟧…⟧` | `<sup>` element | Footnote marker; the enclosed text is exactly what the element contains |

Unmarked `'` in a quoted string is a literal U+0027 apostrophe as served.

✅ **This file's NBSP marking was challenged and is confirmed correct — 2026-08-03.**
`COMPLIANCE.md` **R-14** asserted that this inventory *over-marks* non-breaking spaces, citing
the partners' affiliation line: it claimed the raw markup is `…patrimoine<br /> ` — a `<br />`
and an ordinary space, **no NBSP** — and concluded that this file "cannot be used as the NBSP
source of truth." **Re-verified at byte level against the raw captures: the markup is
`Gestion de patrimoine<br />  </p>` — `<br />`, an ordinary space, *and* a U+00A0.** Two
occurrences in `fr-notre-equipe.html`, two in `en-our-team.html`. **This file's transcription
— `Financière Banque Nationale - Gestion de patrimoine ⟦NBSP⟧` — is right, character for
character, and must not be "corrected".** R-14 is withdrawn; there is no known NBSP error in
this file. *(Those four characters do not ship, and that is a separate and legitimate build
decision — they are trailing spacers after a line break, whitespace-only nodes with no text
attached. Registered as `CHANGES-FOR-APPROVAL.md` **D-32**, with the class rule in
`COMPLIANCE.md` §7 check 40. Real deviation, wrong reason attached to it.)*

**How `alt` is recorded — corrected 2026-08-02.** Three states, and they are not
interchangeable:

| Recorded as | Raw markup | Renders as | Count in the archive |
|---|---|---|---|
| `alt/title `…`` | `alt="…"` | the quoted string | the majority |
| **`alt/title `(none)`** | **`alt/` — the attribute is present with no value** | **`alt=""` → decorative, by NBF's own declaration** | **14** — the 12 hero banners and the 2 `img-projet-loi-899` news images |
| *(no IMAGE line, or explicitly noted)* | **the `alt` attribute is absent entirely** | no declared status at all — a real defect | **4** — the advisor-profile headshots |

⚠ **This distinction was wrong in an earlier pass of this file.** The two
`img-projet-loi-899-767x433.png` records (§ the Trump policy block, both languages) recorded
the alt as **a single space**. That single space is the wrapper `<div>`'s `data-title=" "`,
**not** the image's alt — a different attribute on a different element. Both records are
corrected in place and carry the correction inline rather than being silently overwritten,
because a transcription that quietly changes is worse than one that is wrong out loud.
`content/assets-manifest.md` carried the same error and is corrected the same way. See
`COMPLIANCE.md` N-12 and R-17 for the 4 + 14 census.

Every page is listed in **document order**: header chrome, then body, then footer.
Header and footer chrome are byte-identical across all pages of a language and are given once, in §1.

---

## 1. Global chrome (identical on every page of its language)

### 1.1 Microsite header — FRENCH (6 microsite pages)

> The only per-page difference is the `En` / `English` switch target, which points at the matching English URL.

- IMG `/content/dam/fbngp/logos/logo-cp-fbngp-s.svg` — alt `Logo Financière Banque Nationale Gestion de patrimoine`
- LINK `` → `/conseiller/groupe-wolf-achard.html`
- IMG `/content/dam/fbngp/logos/groupe-wolf-achard/logo-cp-groupe-wolf-achard-S.svg` — alt `Logo Groupe Wolf Achard`
- LINK `` → `/conseiller/groupe-wolf-achard.html`
- LINK `Nous joindre` → `/conseiller/groupe-wolf-achard/nous-joindre.html`
- LI `Nous joindre`
- LINK `En` → `https://www.nbfwm.ca/advisor/wolf-archard-group.html`
- LI `En`
- LINK `Accès client` → `https://client.bnc.ca/fbngp/login`
- LI `Accès client`
- IMG `/content/dam/fbngp/logos/logo-cp-fbngp-L.svg` — alt `Logo Financière Banque Nationale Gestion de patrimoine`
- LINK `` → `/conseiller/groupe-wolf-achard.html`
- IMG `/content/dam/fbngp/logos/logo-cp-fbngp-M.svg` — alt `Logo Financière Banque Nationale Gestion de patrimoine`
- LINK `` → `/conseiller/groupe-wolf-achard.html`
- IMG `/content/dam/fbngp/logos/groupe-wolf-achard/logo-cp-groupe-wolf-achard-L.svg` — alt `Logo Groupe Wolf Achard`
- LINK `` → `/conseiller/groupe-wolf-achard.html`
- IMG `/content/dam/fbngp/logos/groupe-wolf-achard/logo-cp-groupe-wolf-achard-M.svg` — alt `Logo Groupe Wolf Achard`
- LINK `` → `/conseiller/groupe-wolf-achard.html`
- LINK `Groupe Wolf Achard` → `/conseiller/groupe-wolf-achard.html`
- LI `Groupe Wolf Achard`
- LINK `Notre équipe` → `/conseiller/groupe-wolf-achard/notre-equipe.html`
- LI `Notre équipe`
- LINK `Nos services` → `/conseiller/groupe-wolf-achard/nos-services.html`
- LI `Nos services`
- LINK `Nouvelles et articles` → `/conseiller/groupe-wolf-achard/nouvelles-articles.html`
- LI `Nouvelles et articles`
- LINK `Notre firme` → `/conseiller/groupe-wolf-achard/notre-firme.html`
- LI `Notre firme`
- LINK `Nous joindre` → `/conseiller/groupe-wolf-achard/nous-joindre.html`
- LI `Nous joindre`
- LINK `English` → `https://www.nbfwm.ca/advisor/wolf-archard-group.html`
- LI `English`
- IMAGE (DAM) `/content/dam/fbngp/microsites/groupe-wolf-achard/bannieres/accueil/ban-page-accueil-groupe-wolf-achard.jpg` — alt/title `(none)`

### 1.2 Microsite header — ENGLISH (6 microsite pages)

> The only per-page difference is the `Fr` / `Français` switch target, which points at the matching French URL.

- IMG `/content/dam/fbngp/logos/logo-cp-fbngp-s.svg` — alt `National Bank Financial Wealth Management logo`
- LINK `` → `/advisor/wolf-archard-group.html`
- IMG `/content/dam/fbngp/logos/groupe-wolf-achard/logo-ia-wolf-achard-group-S.svg` — alt `Wolf Archard Group logo`
- LINK `` → `/advisor/wolf-archard-group.html`
- LINK `Contact us` → `/advisor/wolf-archard-group/contact-us.html`
- LI `Contact us`
- LINK `Fr` → `https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`
- LI `Fr`
- LINK `Client Access` → `https://client.bnc.ca/nbfwm/home`
- LI `Client Access`
- IMG `/content/dam/fbngp/logos/logo-cp-nbfwm-L.svg` — alt `National Bank Financial Wealth Management logo`
- LINK `` → `/advisor/wolf-archard-group.html`
- IMG `/content/dam/fbngp/logos/logo-cp-nbfwm-M.svg` — alt `National Bank Financial Wealth Management logo`
- LINK `` → `/advisor/wolf-archard-group.html`
- IMG `/content/dam/fbngp/logos/groupe-wolf-achard/logo-ia-wolf-achard-group-L.svg` — alt `Wolf Archard Group logo`
- LINK `` → `/advisor/wolf-archard-group.html`
- IMG `/content/dam/fbngp/logos/groupe-wolf-achard/logo-ia-wolf-achard-group-M.svg` — alt `Wolf Archard Group logo`
- LINK `` → `/advisor/wolf-archard-group.html`
- LINK `Wolf Archard Group` → `/advisor/wolf-archard-group.html`
- LI `Wolf Archard Group`
- LINK `Our team` → `/advisor/wolf-archard-group/our-team.html`
- LI `Our team`
- LINK `Our services` → `/advisor/wolf-archard-group/our-services.html`
- LI `Our services`
- LINK `News & articles` → `/advisor/wolf-archard-group/news-articles.html`
- LI `News & articles`
- LINK `Our Firm` → `/advisor/wolf-archard-group/our-firm.html`
- LI `Our Firm`
- LINK `Contact us` → `/advisor/wolf-archard-group/contact-us.html`
- LI `Contact us`
- LINK `Français` → `https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`
- LI `Français`
- IMAGE (DAM) `/content/dam/fbngp/ban/fbngp-accueil/img-microsites-aspirationnel.jpg` — alt/title `(none)`

### 1.3 Corporate header — FRENCH advisor-profile pages (2 pages)

> The two profile pages do **not** use the microsite header. They render the main `fbngp.ca` corporate chrome.

- BUTTON `Aller au contenu de la page`
- LI `Aller au contenu de la page`
- BUTTON `Aller au menu principal`
- LI `Aller au menu principal`
- BUTTON `Me connecter à mon compte`
- LI `Me connecter à mon compte`
- LINK `Financière Banque Nationale - Gestion de patrimoine` → `https://www.fbngp.ca/accueil.html`
- LI `Financière Banque Nationale - Gestion de patrimoine`
- BUTTON `Rechercher`
- LI `Rechercher`
- LINK `Nous trouver` → `https://localisateur.bnc.ca/`
- LI `Nous trouver`
- LINK `中国` → `/chinois.html`
- LI `中国`
- LINK `En` → `/bin/switchLanguage?lang=En&p=ecf1661cef70ae14a8660666d0e7af49105f8469fdabc54ade1a27ab651ecc8c2f37d8c59f560a4b211c017f282f71fa1eb04bb21adb9dd965ac9264487aee0d6cf60a4ebb154d5381ef832b97d6b1d818e50b22c03da5fd6ea653ad707236afcdc6d96956f999a7b8da31e02a3c2cad`  — aria-label=`Consult the site in English`
- LI `En`
- BUTTON `Accès client`
- LABEL `Vous serez dirigé vers la page de connexion habituelle`
- LINK `Accéder à la plateforme` → `https://client.bnc.ca/fbngp/login`
- LI `Accéder à la plateforme`
- LI `Accès clientVous serez dirigé vers la page de connexion habituelleAccéder à la plateforme`
- IMG `/content/dam/fbngp/logos/logo-fbngp-245x70.png` — alt `Financière Banque Nationale`
- LINK `` → `/accueil.html`  — aria-label=`De retour à la page d'accueil`
- LINK `Trouver un conseiller` → `https://www.fbngp.ca/conseiller.html`
- LI `Trouver un conseiller`
- LINK `Comment vous aider` → `https://www.fbngp.ca/comment-vous-aider.html`
- LI `Comment vous aider`
- LINK `Documentation` → `https://www.fbngp.ca/documentation.html`
- LI `Documentation`
- LINK `Faire carrière` → `https://www.fbngp.ca/carriere.html`
- LI `Faire carrière`
- LINK `À propos` → `https://www.fbngp.ca/a-propos.html`
- LI `À propos`
- LINK `Services numériques` → `https://www.fbngp.ca/services-numeriques.html`
- LI `Services numériques`
- BUTTON `Accès client`
- LABEL `Vous serez dirigé vers la page de connexion habituelle`
- LINK `Accéder à la plateforme` → `https://client.bnc.ca/fbngp/login`
- LI `Accéder à la plateforme`
- BUTTON `Fermer`
- LINK `< Voir tous les conseillers` → `#`
- IMG `/content/dam/fbngp/photo/photo-laurent-achard-montreal-350x330.png` — alt `(no alt attribute)`

### 1.4 Corporate header — ENGLISH advisor-profile pages (2 pages)

- BUTTON `Go to page content`
- LI `Go to page content`
- BUTTON `Go to main menu`
- LI `Go to main menu`
- BUTTON `Sign in to my account`
- LI `Sign in to my account`
- LINK `National Bank Financial - Wealth Management` → `https://www.nbfwm.ca/home.html`
- LI `National Bank Financial - Wealth Management`
- BUTTON `Search`
- LI `Search`
- LINK `Find us` → `https://locator.nbc.ca/`
- LI `Find us`
- LINK `中国` → `/chinese.html`  — aria-label=`中国`
- LI `中国`
- LINK `Fr` → `/bin/switchLanguage?lang=Fr&p=b1a3b43e75952faddf4a2ff34ef4ae31f2abd6f16cde80f08afeaa4a42adf4ffa4114cd67913e865c175d122542779b429c27a481c06cc1803868505b3bd4280a8753001b2dc715752b1b670eea7e2ff4d0b3df7c6c4d1351f43b28b4647bb3a1a45e333a8b7df3a78134f8ac00699f1`  — aria-label=`Consulter le site en français`
- LI `Fr`
- BUTTON `Client access`
- LABEL `You will be redirected to your usual login page`
- LINK `Login` → `https://client.bnc.ca/nbfwm/login`
- LI `Login`
- LI `Client accessYou will be redirected to your usual login pageLogin`
- IMG `/content/dam/fbngp/logos/logo-nbfwm-245x70.png` — alt `National Bank Financial`
- LINK `` → `/home.html`  — aria-label=`Back to Home Page`
- LINK `Find an advisor` → `https://www.nbfwm.ca/advisor.html`
- LI `Find an advisor`
- LINK `How we can help` → `https://www.nbfwm.ca/how-we-can-help.html`
- LI `How we can help`
- LINK `Your documentation` → `https://www.nbfwm.ca/documentation.html`
- LI `Your documentation`
- LINK `Careers` → `https://www.nbfwm.ca/career.html`
- LI `Careers`
- LINK `About us` → `https://www.nbfwm.ca/about.html`
- LI `About us`
- LINK `Digital services` → `https://www.nbfwm.ca/digital-services.html`
- LI `Digital services`
- BUTTON `Client access`
- LABEL `You will be redirected to your usual login page`
- LINK `Login` → `https://client.bnc.ca/nbfwm/login`
- LI `Login`
- BUTTON `Close`
- LINK `< See all advisors` → `#`
- IMG `/content/dam/fbngp/photo/photo-laurent-achard-montreal-350x330.png` — alt `(no alt attribute)`

### 1.5 Footer — FRENCH (all 8 pages, verified identical)

- P `Aide et contact`
- IMG `/content/dam/bnc/particuliers/picto/collapse-closed.svg` — alt `closed`
- LINK `Nous joindre` → `/contact.html`
- LI `Aide et contact Nous joindre`
- P `Liens utiles`
- IMG `/content/dam/bnc/particuliers/picto/collapse-closed.svg` — alt `closed`
- LINK `Trouver un conseiller` → `/conseiller.html`
- LINK `Informations réglementaires` → `/a-propos/informations-reglementaires.html`
- LINK `Résolution des insatisfactions` → `/resolution-insatisfactions.html`
- LI `Liens utiles Trouver un conseiller Informations réglementaires Résolution des insatisfactions`
- P `À propos de nous`
- IMG `/content/dam/bnc/particuliers/picto/collapse-closed.svg` — alt `closed`
- LINK `Notre organisation` → `/a-propos.html`
- LINK `Banque Nationale du Canada` → `https://www.bnc.ca/particuliers.html`
- LINK `Filiales Banque Nationale` → `https://www.bnc.ca/coordonnees.html`
- LINK `Carrières` → `/carriere.html`
- LI `À propos de nous Notre organisation Banque Nationale du Canada Filiales Banque Nationale Carrières`
- P `Restez à l'affût`
- IMG `/content/dam/bnc/particuliers/picto/collapse-closed.svg` — alt `closed`
- LINK `Communiqués` → `https://www.bnc.ca/a-propos-de-nous/nouvelles-medias.html`
- LI `Restez à l'affût Communiqués`
- LINK `Convention` → `/convention.html`
- LI `Convention`
- LINK `Politique de protection des renseignements personnels` → `https://www.bnc.ca/politique-de-confidentialite.html`
- LI `Politique de protection des renseignements personnels`
- LINK `Politique sur les données numériques` → `/politique-donnees-numeriques.html`
- LI `Politique sur les données numériques`
- LINK `ABC de la sécurité` → `https://www.bnc.ca/abc-securite.html`
- LI `ABC de la sécurité`
- LINK `Accessibilité` → `https://www.bnc.ca/a-propos-de-nous/esg/enonce-sur-accessibilite.html`
- LI `Accessibilité`
- LINK `Rapport d'étape sur l'accessibilité` → `https://www.bnc.ca/a-propos-de-nous/esg/rapport-etape-accessibilite.html`
- LI `Rapport d'étape sur l'accessibilité`
- LINK `Processus de rétroaction en matière d'accessibilité` → `https://www.bnc.ca/a-propos-de-nous/esg/plan-accessibilite.html#2.2`
- LI `Processus de rétroaction en matière d'accessibilité`
- IMG `/content/dam/bnc/particuliers/picto/picto-logo-bn-24x22.svg` — alt `Banque Nationale`
- P `© FBNGP Tous droits réservés 2026.`
- LI `© FBNGP Tous droits réservés 2026.`
- IMG `/content/dam/bnc/particuliers/picto/picto-social-linkedin.svg` — alt `LinkedIn, lien externe qui s'ouvre dans un nouvel onglet.`
- LINK `` → `https://www.linkedin.com/company/financi-re-banque-nationale/`
- IMG `/content/dam/fbngp/logos/logo-ocri.svg` — alt `Organisme Canadien de Réglementation des Investissements (OCRI), lien externe qui s'ouvre dans un nouvel onglet.`
- LINK `` → `https://www.ocri.ca/`
- IMG `/content/dam/bnc/particuliers/picto/external-link.svg` — alt ``
- LINK `Consultez les rapports Info-Conseiller de l'OCRI` → `https://www.ocri.ca/bureau-des-investisseurs/rapport-info-conseiller`  — aria-label=`Consultez les rapports Info-Conseiller de l'OCRI, lien externe qui s'ouvre dans un nouvel onglet.`
- LI `Consultez les rapports Info-Conseiller de l'OCRI`
- IMG `/content/dam/fbngp/logos/logo-fcpi.svg` — alt `Fonds Canadien de protection des investisseurs (FPCI), lien externe qui s'ouvre dans un nouvel onglet.`
- LINK `` → `https://www.fcpi.ca/`

### 1.6 Footer — ENGLISH (all 8 pages, verified identical)

- P `Help and contact`
- IMG `/content/dam/bnc/particuliers/picto/collapse-closed.svg` — alt `closed`
- LINK `Contact us` → `/contact.html`
- LI `Help and contact Contact us`
- P `Useful links`
- IMG `/content/dam/bnc/particuliers/picto/collapse-closed.svg` — alt `closed`
- LINK `Find an advisor` → `/advisor.html`
- LINK `Regulatory information` → `/about/regulatory-information.html`
- LINK `Complaint settlement` → `/complaint-settlement.html`
- LI `Useful links Find an advisor Regulatory information Complaint settlement`
- P `About us`
- IMG `/content/dam/bnc/particuliers/picto/collapse-closed.svg` — alt `closed`
- LINK `Our organisation` → `/about.html`
- LINK `National Bank of Canada` → `https://www.nbc.ca/personal.html`
- LINK `Our subsidiaries` → `https://www.nbc.ca/contact-us.html`
- LINK `Careers` → `/career.html`
- LI `About us Our organisation National Bank of Canada Our subsidiaries Careers`
- P `Stay tuned`
- IMG `/content/dam/bnc/particuliers/picto/collapse-closed.svg` — alt `closed`
- LINK `Press releases` → `https://www.nbc.ca/about-us/news-media.html`
- LI `Stay tuned Press releases`
- LINK `User agreement` → `/user-agreement.html`
- LI `User agreement`
- LINK `Privacy policy` → `https://www.nbc.ca/privacy-policy.html`
- LI `Privacy policy`
- LINK `Digital data policy` → `/digital-data-policy.html`
- LI `Digital data policy`
- LINK `ABCs of security` → `https://www.nbc.ca/abcs-of-security.html`
- LI `ABCs of security`
- LINK `Accessibility` → `https://www.nbc.ca/about-us/esg/accessibility-statement.html`
- LI `Accessibility`
- LINK `Accessibility Progress Report` → `https://www.nbc.ca/about-us/esg/accessibility-progress-report.html`
- LI `Accessibility Progress Report`
- LINK `Accessibility feedback process` → `https://www.nbc.ca/about-us/esg/accessibility-plan.html#2.2`
- LI `Accessibility feedback process`
- IMG `/content/dam/bnc/particuliers/picto/picto-logo-bn-24x22.svg` — alt `National Bank`
- P `© NBFWM. All rights reserved 2026.`
- LI `© NBFWM. All rights reserved 2026.`
- IMG `/content/dam/bnc/particuliers/picto/picto-social-linkedin.svg` — alt `LinkedIn, external link which opens in a new tab.`
- LINK `` → `https://www.linkedin.com/company/financi-re-banque-nationale/`
- IMG `/content/dam/fbngp/logos/logo-ciro.svg` — alt `Canadian Investment Regulatory Organization (CIRO), external link which opens in a new tab.`
- LINK `` → `https://www.ciro.ca/`
- IMG `/content/dam/bnc/particuliers/picto/external-link.svg` — alt ``
- LINK `See advisor reports of the CIRO` → `https://www.ciro.ca/office-investor/know-your-advisor-advisor-report`  — aria-label=`See advisor reports of the CIRO, external link which opens in a new tab.`
- LI `See advisor reports of the CIRO`
- IMG `/content/dam/fbngp/logos/logo-cipf.svg` — alt `Canadian Investor Protection Fund (CIPF), external link which opens in a new tab.`
- LINK `` → `https://www.cipf.ca/`

---

## 2. Home / Accueil

### 2.1 FRENCH — `https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`

Capture: `source-assets/html/fr-home.html` · 83,888 bytes

**Head metadata**

- `<html lang>` `fr`
- `<title>` `Groupe Wolf Achard | Financière Banque Nationale - Gestion de patrimoine`
- `meta[name=description]` `Comptez sur un partenaire financier solide avec la Financière Banque Nationale - Gestion de patrimoine. Découvrez comment nous pouvons vous aider avec un accompagnement personnalisé.`
- `og:title` `Groupe Wolf Achard | Financière Banque Nationale - Gestion de patrimoine`
- `og:description` `Comptez sur un partenaire financier solide avec la Financière Banque Nationale - Gestion de patrimoine. Découvrez comment nous pouvons vous aider avec un accompagnement personnalisé.`
- `og:url` `https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`
- `og:image` `https://www.fbngp.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`
- `meta[name=template]` `accueil-microsite-complex`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group.html`

**Body, in document order**

- **H1** `Groupe Wolf Achard`
- P `Réalisons des projets ambitieux`
- **H2** `Une gestion de patrimoine sur mesure pour des clients uniques`
- P `Lorsqu⟦’⟧on parle de gestion de patrimoine et investissements, nous pensons que la situation de chaque client présente des contraintes à respecter, mais aussi des opportunités. C⟦’⟧est dans cet état d⟦’⟧esprit que nous établissons des stratégies financières personnalisées, fiscalement optimisé.`
- P `Nous sommes présents pour nos clients et lorsque surviennent des changements importants, nous adaptons notre stratégie rapidement. C⟦’⟧est ainsi que nous veillons à leur⟦NBSP⟧avenir financier.`
- IMAGE (DAM) `/content/dam/fbngp/microsites/groupe-wolf-achard/images/accueil/img-page-accueil-poignee-de-mains.jpg` — alt/title `Femme souriante qui serre la main d'homme dans un contexte professionnel.`
- **H3** `Notre mission`
- LI `Sécuriser votre avenir financier⟦NBSP⟧`
- LI `Vous accompagner dans la réalisation de vos projets de vie ambitieux`
- LI `Être le partenaire principal dans votre réussite financière⟦NBSP⟧`
- LI `Construire une relation à long terme basée sur la confiance et le professionnalisme`
- **H3** `Nos engagements`
- LI `Agir de manière intègre et communiquer de façon transparente`
- LI `Demeurer informés pour prendre des décisions éclairées`
- LI `Investir de manière audacieuse sans être imprudents`
- LI `Respecter tous nos engagements pour assurer le travail bien fait et le devoir accompli`
- **H3** `Notre philosophie`
- P `Nous mettons autant le focus sur la⟦NBSP⟧planification financière⟦NBSP⟧et⟦NBSP⟧l⟦’⟧optimisation fiscale⟦NBSP⟧que sur⟦NBSP⟧la gestion de portefeuille. Nous pensons que le véritable objectif ne se limite pas aux rendements des investissements mais réside dans le rendement net pour l⟦’⟧investisseur. Dans cette optique, certains éléments tels que l⟦’⟧allocation d⟦’⟧actifs, le fractionnement de revenus ou encore le report d⟦’⟧impôts sont susceptibles d⟦’⟧avoir un impact majeur pour nos clients.`
- **H3** `Ce qui nous distingue`
- LI `Connaissance approfondie de la gestion de patrimoine pour entrepreneurs et professionnels incorporés`
- LI `Croissance efficace du patrimoine sans fragiliser la santé financière de la compagnie ni affecter la capacité d⟦’⟧emprunt`
- LI `Compréhension du fonctionnement d⟦’⟧une entreprise, surtout si elle est la pièce maîtresse du patrimoine`
- IMAGE (DAM) `/content/dam/fbngp/microsites/groupe-wolf-achard/images/accueil/img-page-accueil-homme-souriant-yacht.jpg` — alt/title `Homme d'une cinquantaine d'année assis souriant et heureux sur un bateau.`
- **H2** `Un processus éprouvé`
- P `Nos conseils, notre accompagnement et notre dévouement sont très appréciés de tous nos clients. En effet, vous pourrez toujours compter sur:`
- IMAGE (DAM) `/content/dam/fbngp/picto/icone-1-handshake-246x313.svg` — alt/title `Icône de cible représentant une approche globale et personnalisée.`
- **H3** `Faisons connaissance`
- P `Nous voulons en apprendre le plus possible sur vous, votre parcours et vos projets. Parlez-nous de votre famille ou de votre travail.`
- IMAGE (DAM) `/content/dam/fbngp/picto/icone-2-strategie-246x313.svg` — alt/title `Icône d⟦’⟧étoile symbolisant l'intégrité dont nous faisons preuve.`
- **H3** `Établissons une stratégie`
- P `Sur la base de votre situation personnelle, professionnelle et financière, nous vous proposerons une stratégie personnalisée.`
- IMAGE (DAM) `/content/dam/fbngp/picto/icone-3-survey-246x313.svg` — alt/title `Icône symbolisant la rigueur qui guide notre travail.`
- **H3** `Déployons notre plan`
- P `Mettons à exécution votre plan financier. Nous veillerons à la gestion continue de votre portefeuille et maintiendrons le cap sur vos objectifs.`
- IMAGE (DAM) `/content/dam/fbngp/picto/icone-4-speech-246x313.svg` — alt/title `Icône de loupe symbolisant la façon dont nous prenons des décisions et communiquons avec vous.`
- **H3** `Restons en contact`
- P `Les aléas de la vie peuvent modifier vos projets et vos priorités. Chaque fois qu⟦’⟧un changement important surviendra, discutons-en.`
- **H2** `Nouvelles et articles`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-teasers/fr/img-teaser-spotlight.jpg` — alt/title `Un homme et une femme consultent leurs finances sur un ordinateur portable.`
- LINK `Contenus en vedette` → `/conseiller/groupe-wolf-achard/nouvelles-articles.html#spotlight`
- P `Contenus en vedette`
- P `Restez au courant des tendances du mois.`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-teasers/fr/img-teaser-economic-news.jpg` — alt/title `Stéfan Marion, économiste et stratège en chef de la Banque Nationale du Canada et de la Financière Banque Nationale.`
- LINK `Actualités économiques` → `/conseiller/groupe-wolf-achard/nouvelles-articles.html#economic`
- P `Actualités économiques`
- P `Lisez les dernières nouvelles financières de nos experts de la Banque Nationale.`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-teasers/fr/img-teaser-guides-tools.jpg` — alt/title `Quelqu'un qui calcule ses finances à un bureau.`
- LINK `Guides et outils` → `/conseiller/groupe-wolf-achard/nouvelles-articles.html#guide`
- P `Guides et outils`
- P `Consultez nos guides et outils utiles pour simplifier vos finances.`
- LINK `Toutes les nouvelles et articles` → `/conseiller/groupe-wolf-achard/nouvelles-articles.html`
- **H3** `Contactez-nous`
- P `Obtenez les coordonnées des membres de notre équipe et voyez où se trouvent nos bureaux.`
- P `⟦NBSP⟧`
- LINK `Voir nos coordonnées` → `/conseiller/groupe-wolf-achard/nous-joindre.html`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png` — alt/title `Picto téléphone`
- LINK `514 395-1937` → `tel:+15143951937`
- P `514 395-1937`
- LINK `514 412-0370` → `tel:+15144120370`
- P `514 412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png` — alt/title `Picto courriel`
- LINK `laurent.achard@bnc.ca` → `mailto:laurent.achard@bnc.ca`
- P `laurent.achard@bnc.ca`
- LINK `davidalexandre.wolf@bnc.ca` → `mailto:davidalexandre.wolf@bnc.ca`
- P `davidalexandre.wolf@bnc.ca`

**`<sup>` markers on this page:** *none*

### 2.2 ENGLISH — `https://www.nbfwm.ca/advisor/wolf-archard-group.html`

Capture: `source-assets/html/en-home.html` · 72,241 bytes

**Head metadata**

- `<html lang>` `en`
- `<title>` `Wolf Archard Group | National Bank Financial - Wealth Management`
- `meta[name=description]` `With National Bank Financial - Wealth Management, you can rely on a solid financial partner. Find out how our personalized support can help you.`
- `og:title` `Wolf Archard Group | National Bank Financial - Wealth Management`
- `og:description` `With National Bank Financial - Wealth Management, you can rely on a solid financial partner. Find out how our personalized support can help you.`
- `og:url` `https://www.nbfwm.ca/advisor/wolf-archard-group.html`
- `og:image` `https://www.nbfwm.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.nbfwm.ca/advisor/wolf-archard-group.html`
- `meta[name=template]` `accueil-microsite-complex1`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group.html`

**Body, in document order**

- **H1** `Wolf Archard Group`
- P `Our expert team is here to meet⟦NBSP⟧your financial needs`
- **H2** `Personalized support`
- P `Our team is made up of highly qualified investment professionals with many years of experience in wealth management.`
- LINK `team` → `/advisor/wolf-archard-group/our-team.html`
- P `We leverage the expertise of all team members to ensure our clients get the best possible financial management advice.`
- **H2** `Discover our company`
- IMAGE (DAM) `/content/dam/fbngp/img/img-nos-services-homme-femme-travail.jpg` — alt/title `A man and a woman look at a notebook in a glass office.`
- **H3** `Our purpose`
- **H4** `Our objectives`
- P `As your partner in financial success, we're here to support you with all your investment goals.⟦NBSP⟧You can count on our help to make⟦NBSP⟧your money work for you.`
- **H4** `Our values`
- P `We're committed to honesty, integrity and⟦NBSP⟧excellence.⟦NBSP⟧Our comprehensive financial planning service and personalized solutions will provide you with peace of mind.⟦NBSP⟧`
- **H2** `Our unique approach`
- P `Our clients greatly appreciate our dedicated advice and support. You can always count on:`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-approche.svg` — alt/title `Target icon representing a global and personalized approach.`
- P `Our personalized approach`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-integrite.svg` — alt/title `Star icon symbolizing the integrity we demonstrate in our work.`
- P `Our integrity`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-professionnalisme.svg` — alt/title `Icon symbolizing the rigor that guides our work.`
- P `Our professionalism`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-transparence.svg` — alt/title `Magnifying glass icon symbolizing how we make decisions and communicate with you.`
- P `Our transparency`
- **H2** `News and articles`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-teasers/en/img-teaser-spotlight.jpg` — alt/title `A man and woman looking at their finances on a laptop.`
- LINK `Spotlight: now trending` → `/advisor/wolf-archard-group/news-articles.html#spotlight`
- P `Spotlight: now trending`
- P `Keep up to date with what's trending this month.`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-teasers/en/img-teaser-economic-news.jpg` — alt/title `Stéfan Marion, Chief Economist and Strategist for National Bank of Canada and National Bank Financial.`
- LINK `Economic news` → `/advisor/wolf-archard-group/news-articles.html#economic`
- P `Economic news`
- P `Read the latest financial news from our National Bank experts.⟦NBSP⟧`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-teasers/en/img-teaser-guides-tools.jpg` — alt/title `Someone calculating their finances at a desk.`
- LINK `Guides and tools` → `/advisor/wolf-archard-group/news-articles.html#guide`
- P `Guides and tools`
- P `Consult our useful guides and tools to help simplify your finances.⟦NBSP⟧`
- LINK `Read all news and articles` → `/advisor/wolf-archard-group/news-articles.html`
- **H3** `Contact us`
- P `Get contact information for our team members and find out where our offices are.`
- P `⟦NBSP⟧`
- LINK `See our contact details` → `/advisor/wolf-archard-group/contact-us.html`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png` — alt/title `Phone picto`
- LINK `514-395-1937` → `tel:+15143951937`
- P `514-395-1937`
- LINK `514-412-0370` → `tel:+15144120370`
- P `514-412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png` — alt/title `Email picto`
- LINK `laurent.achard@nbc.ca` → `mailto:laurent.achard@nbc.ca`
- P `laurent.achard@nbc.ca`
- LINK `davidalexandre.wolf@nbc.ca` → `mailto:davidalexandre.wolf@nbc.ca`
- P `davidalexandre.wolf@nbc.ca`

**`<sup>` markers on this page:** *none*

---

## 3. Notre équipe / Our team

### 3.1 FRENCH — `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html`

Capture: `source-assets/html/fr-notre-equipe.html` · 116,791 bytes

**Head metadata**

- `<html lang>` `fr`
- `<title>` `Nos conseillers financiers | Groupe Wolf Achard | Financière Banque Nationale - Gestion de patrimoine`
- `meta[name=description]` `En tant que partenaire pour tous vos besoins financiers, notre équipe possède l'expertise qui vous aidera à atteindre vos objectifs. Découvrez notre équipe!`
- `og:title` `Nos conseillers financiers | Groupe Wolf Achard | Financière Banque Nationale - Gestion de patrimoine`
- `og:description` `En tant que partenaire pour tous vos besoins financiers, notre équipe possède l'expertise qui vous aidera à atteindre vos objectifs. Découvrez notre équipe!`
- `og:url` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html`
- `og:image` `https://www.fbngp.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html`
- `meta[name=template]` `notre-equipe-microsite`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html`

**Body, in document order**

- **H1** `Découvrez notre équipe`
- P `Des professionnels à l'écoute de vos besoins`
- **H2** `Ensemble, nous œuvrons pour atteindre vos objectifs`
- P `Notre équipe est composée de professionnels en finance et en service à la clientèle pour vous accompagner au mieux dans la gestion de votre patrimoine. Avec eux, vous pourrez choisir parmi notre gamme complète de produits ceux qui répondent le mieux à vos besoins.`
- P `Nous sommes animés par une passion commune: celle d'aider les particuliers et les entreprises à bâtir et préserver leur richesse, à développer leur patrimoine et à en faire bénéficier leur succession.`
- **H2** `Notre équipe d'experts`
- IMAGE (DAM) `/content/dam/fbngp/photo/photo-laurent-achard-montreal-350x330.png` — alt/title `Photo de Laurent Achard, Conseiller en gestion de patrimoin , membre de l'équipe expert.`
- LINK `Laurent Achard` → `/conseiller/groupe-wolf-achard/notre-equipe/laurent-achard.html`
- **H3** `Laurent Achard`
- **H4** `Conseiller en gestion de patrimoine⟦NBSP⟧`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-phone-conseillers-20x20.svg` — alt/title `Picto téléphone`
- LINK `514 395-1937` → `tel:+15143951937`
- P `514 395-1937`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-mail-conseillers-20x20.svg` — alt/title `Picto courriel`
- LINK `laurent.achard@bnc.ca` → `mailto:laurent.achard@bnc.ca`
- P `laurent.achard@bnc.ca`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-chat-conseillers-20x20.svg` — alt/title `Picto langues parlées`
- P `Français, anglais, italien`
- IMAGE (DAM) `/content/dam/fbngp/photo/photo-david-alexandre-groupe-wolf-achard-mtl-350x330.png` — alt/title `Photo de David Alexandre Wolf, Conseiller en gestion de patrimoine, membre de l'équipe expert.`
- LINK `David Alexandre Wolf` → `/conseiller/groupe-wolf-achard/notre-equipe/david-alexandre-wolf.html`
- **H3** `David Alexandre Wolf`
- **H4** `Conseiller en gestion de patrimoine⟦NBSP⟧`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-phone-conseillers-20x20.svg` — alt/title `Picto téléphone`
- LINK `514 412-0370` → `tel:+15144120370`
- P `514 412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-mail-conseillers-20x20.svg` — alt/title `Picto courriel`
- LINK `davidalexandre.wolf@bnc.ca` → `mailto:davidalexandre.wolf@bnc.ca`
- P `davidalexandre.wolf@bnc.ca`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-chat-conseillers-20x20.svg` — alt/title `Picto langues parlées`
- P `Français, anglais`
- **H2** `Nos partenaires`
- IMAGE (DAM) `/content/dam/fbngp/microsites/photos-collaborateurs/photo-lysanne-tougas-collaborateur-350x330.png` — alt/title `Photo de Lysane Tougas, Conseillère principale, planification successorale, collaborateur et partenaire. `
- **H3** `Lysane Tougas`
- P `Conseillère principale, planification successorale⟦sup⟧2⟧`
- P `Financière Banque Nationale - Gestion de patrimoine ⟦NBSP⟧`
- BUTTON `Biographie`
- **H3** `Biographie`
- P `Lysane est membre du Barreau du Québec depuis 1998. Elle a complété son baccalauréat en droit à l⟦’⟧Université de Montréal ainsi qu⟦’⟧une maîtrise en droit, option fiscalité, en 2004.`
- P `Elle possède une vaste expérience en matière de planification successorale et testamentaire ainsi qu⟦’⟧en droit fiscal. Elle a exercé pendant plusieurs années dans des cabinets d⟦’⟧avocats et d⟦’⟧experts comptables d⟦’⟧envergure.`
- P `Elle accompagne notre équipe dans la prestation d⟦’⟧un service conseil engageant et de haut calibre. Son expertise, son empathie et son écoute lui permettent d⟦’⟧accompagner nos clients dans l⟦’⟧élaboration et l⟦’⟧atteinte de leurs objectifs successoraux.`
- IMAGE (DAM) `/content/dam/fbngp/microsites/photos-collaborateurs/photo-jean-francois-gobeil-collaborateur-350x330.png` — alt/title `Photo de Jean-Francois Gobeil, Planificateur financier, collaborateur`
- **H3** `Jean-Francois Gobeil⟦NBSP⟧`
- P `Planificateur financier⟦sup⟧1⟧`
- P `Financière Banque Nationale - Gestion de patrimoine ⟦NBSP⟧`
- BUTTON `Biographie`
- **H3** `Biographie`
- P `Jean-François est un passionné de la finance et de l⟦’⟧expérience client. Vous trouverez en lui une oreille attentive doublée d⟦’⟧un expert très aguerri en matière de finances personnelles. Son expertise s⟦’⟧étend à la retraite, la finance, la fiscalité, les placements, les assurances et la gestion des risques, puis aux aspects légaux et à la succession. Son expérience terrain étendue vous aidera à mieux comprendre vos finances et à demeurer en contrôle de vos affaires.`
- P `Il est titulaire d⟦’⟧un B.B.A de l⟦’⟧université Bishops en finance et il est membre de l⟦’⟧IQPF depuis 2015. Il a complété son diplôme en planification financière au HEC Montréal et se prépare actuellement pour l⟦’⟧examen du CFA niveau III. Il compte plus de 8 ans d⟦’⟧expertise-conseil au sein d⟦’⟧équipe de courtiers en épargne collective et sécurité financière, de courtiers en placement et au sein des succursales bancaires à la fois au Québec et en Ontario.`
- **H3** `Contactez-nous`
- P `Obtenez les coordonnées des membres de notre équipe et voyez où se trouvent nos bureaux.`
- P `⟦NBSP⟧`
- LINK `Voir nos coordonnées` → `/conseiller/groupe-wolf-achard/nous-joindre.html`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png` — alt/title `Picto téléphone`
- LINK `514 395-1937` → `tel:+15143951937`
- P `514 395-1937`
- LINK `514 412-0370` → `tel:+15144120370`
- P `514 412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png` — alt/title `Picto courriel`
- LINK `laurent.achard@bnc.ca` → `mailto:laurent.achard@bnc.ca`
- P `laurent.achard@bnc.ca`
- LINK `davidalexandre.wolf@bnc.ca` → `mailto:davidalexandre.wolf@bnc.ca`
- P `davidalexandre.wolf@bnc.ca`

**`<sup>` markers on this page:** `2` · `1`

### 3.2 ENGLISH — `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html`

Capture: `source-assets/html/en-our-team.html` · 111,493 bytes

**Head metadata**

- `<html lang>` `en`
- `<title>` `Our financial advisors | Wolf Archard Group | National Bank Financial - Wealth Management`
- `meta[name=description]` `As your partner for all your financial needs, our team has the expertise to help you achieve your goals. Meet our team!`
- `og:title` `Our financial advisors | Wolf Archard Group | National Bank Financial - Wealth Management`
- `og:description` `As your partner for all your financial needs, our team has the expertise to help you achieve your goals. Meet our team!`
- `og:url` `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html`
- `og:image` `https://www.nbfwm.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html`
- `meta[name=template]` `notre-equipe-microsite1`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team.html`

**Body, in document order**

- **H1** `Meet our team`
- P `Professionals who listen to your needs`
- **H2** `We work together to achieve your goals`
- P `Our team of highly qualified investment professionals is here to support you in managing your wealth. They⟦NBSP⟧will⟦NBSP⟧help you choose the products best suited to your needs.`
- P `We⟦NBSP⟧are⟦NBSP⟧driven by our passion for helping individuals and businesses build and protect their wealth so that they can leave a lasting legacy.`
- **H2** `Our team of experts`
- IMAGE (DAM) `/content/dam/fbngp/photo/photo-laurent-achard-montreal-350x330.png` — alt/title `Photo of  Laurent Achard, Wealth Advisor, member of the team of experts. `
- LINK `Laurent Achard` → `/advisor/wolf-archard-group/our-team/laurent-achard.html`
- **H3** `Laurent Achard`
- **H4** `Wealth Advisor`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-phone-conseillers-20x20.svg` — alt/title `Phone picto`
- LINK `514-395-1937` → `tel:+15143951937`
- P `514-395-1937`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-mail-conseillers-20x20.svg` — alt/title `Email picto`
- LINK `laurent.achard@nbc.ca` → `mailto:laurent.achard@nbc.ca`
- P `laurent.achard@nbc.ca`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-chat-conseillers-20x20.svg` — alt/title `Speech bubble picto`
- P `English`
- IMAGE (DAM) `/content/dam/fbngp/photo/photo-david-alexandre-groupe-wolf-achard-mtl-350x330.png` — alt/title `Photo of David Alexandre Wolf, Wealth Advisor, member of the team of experts. `
- LINK `David Alexandre Wolf` → `/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html`
- **H3** `David Alexandre Wolf`
- **H4** `Wealth Advisor`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-phone-conseillers-20x20.svg` — alt/title `Phone picto`
- LINK `514-412-0370` → `tel:+15144120370`
- P `514-412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-mail-conseillers-20x20.svg` — alt/title `Email picto`
- LINK `davidalexandre.wolf@nbc.ca` → `mailto:davidalexandre.wolf@nbc.ca`
- P `davidalexandre.wolf@nbc.ca`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-chat-conseillers-20x20.svg` — alt/title `Speech bubble picto`
- P `English`
- **H2** `Our partners`
- IMAGE (DAM) `/content/dam/fbngp/microsites/photos-collaborateurs/photo-lysanne-tougas-collaborateur-350x330.png` — alt/title `Photo of Lysane Tougas, Senior Advisor, Estate Planning`
- **H3** `Lysane Tougas`
- P `Senior Advisor, Estate Planning⟦sup⟧2⟧`
- P `National Bank Financial - Wealth Management ⟦NBSP⟧`
- IMAGE (DAM) `/content/dam/fbngp/microsites/photos-collaborateurs/photo-jean-francois-gobeil-collaborateur-350x330.png` — alt/title `Photo of Jean-Francois Gobeil , Financial Planner, partner`
- **H3** `Jean-Francois Gobeil`
- P `Financial Planner⟦sup⟧1⟧`
- P `National Bank Financial - Wealth Management ⟦NBSP⟧`
- **H3** `Contact us`
- P `Get contact information for our team members and find out where our offices are.`
- P `⟦NBSP⟧`
- LINK `See our contact details` → `/advisor/wolf-archard-group/contact-us.html`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png` — alt/title `Phone picto`
- LINK `514-395-1937` → `tel:+15143951937`
- P `514-395-1937`
- LINK `514-412-0370` → `tel:+15144120370`
- P `514-412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png` — alt/title `Email picto`
- LINK `laurent.achard@nbc.ca` → `mailto:laurent.achard@nbc.ca`
- P `laurent.achard@nbc.ca`
- LINK `davidalexandre.wolf@nbc.ca` → `mailto:davidalexandre.wolf@nbc.ca`
- P `davidalexandre.wolf@nbc.ca`

**`<sup>` markers on this page:** `2` · `1`

---

## 4. Nos services / Our services

### 4.1 FRENCH — `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nos-services.html`

Capture: `source-assets/html/fr-nos-services.html` · 69,258 bytes

**Head metadata**

- `<html lang>` `fr`
- `<title>` `Nos services | Financière Banque Nationale - Gestion de patrimoine`
- `meta[name=description]` `Le service que nous procurons va au-delà de la gestion de patrimoine et de la gestion de portefeuille. Nous nous engageons à vous offrir une planification exhaustive, et personnalisée à votre situation.`
- `og:title` `Nos services | Financière Banque Nationale - Gestion de patrimoine`
- `og:description` `Le service que nous procurons va au-delà de la gestion de patrimoine et de la gestion de portefeuille. Nous nous engageons à vous offrir une planification exhaustive, et personnalisée à votre situation.`
- `og:url` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nos-services.html`
- `og:image` `https://www.fbngp.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nos-services.html`
- `meta[name=template]` `liste-evenement-microsite`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nos-services.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nos-services.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-services.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-services.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-services.html`

**Body, in document order**

- **H1** `Nos services`
- P `Profitez de notre expertise`
- **H2** `Une approche globale pour la gestion de votre patrimoine`
- P `La gestion de patrimoine a pour objectif de maximiser la valeur nette d⟦’⟧un investisseur dans le respect de critères et de paramètres qui lui sont propre. Afin d⟦’⟧atteindre cet objectif, le Groupe Wolf Achard offre une large gamme de services.`
- IMAGE (DAM) `/content/dam/fbngp/microsites/groupe-wolf-achard/images/nos-services/img-nos-services-groupe-wolf-achard-767.png` — alt/title `Une roue qui représente sept schémas sur l'expertise en gestion du patrimoine.`
- P `Certains services sont offerts par des tiers⟦sup⟧⟦NBSP⟧1, 2, 3⟧`
- BUTTON `Gestion de portefeuille`
- **H2** `Gestion de portefeuille`
- P `La gestion de portefeuille consiste à prendre des décisions d⟦’⟧investissement afin de générer des revenus et d⟦’⟧enregistrer des plus-values sur la durée. La gestion active, la gestion indicielle, l⟦’⟧analyse technique et l⟦’⟧analyse fondamentale sont des exemples de différentes méthodes de gestion de portefeuille.`
- P `Pour en apprendre plus sur notre philosophie de placements, n⟦’⟧hésitez pas à nous contacter et prendre rendez-vous!`
- BUTTON `Planification financière`
- **H2** `Planification financière`
- P `La planification financière est un processus qui consiste à définir vos objectifs financiers et à élaborer un plan optimal pour les atteindre. Cela implique de créer une stratégie personnalisée adaptée à votre situation personnelle, professionnelle et financière.`
- P `Qu⟦’⟧il s⟦’⟧agisse de planifier l⟦’⟧achat d⟦’⟧une propriété, les études des enfants ou votre retraite, nous sommes confiants de pouvoir vous aider à réaliser vos projets!`
- BUTTON `Planification fiscale`
- **H2** `Planification fiscale`
- P `Planification fiscale : La planification fiscale est un processus qui consiste à définir une stratégie dont les objectifs consistent à réduire autant que possible la charge d⟦’⟧impôt et/ou d⟦’⟧en retarder le paiement en restant toujours à l⟦’⟧intérieure des dispositions de la loi.`
- P `La planification fiscale peut inclure la mise en place d⟦’⟧une structure corporative, un plan d⟦’⟧allocation d⟦’⟧actifs, des méthodes de fractionnement de revenus ou d⟦’⟧autres stratégies fiscales.`
- BUTTON `Planification successorale`
- **H2** `Planification successorale`
- P `La planification successorale est le processus par lequel une personne organise la distribution de ses biens et de son patrimoine après son décès.`
- P `Cela inclut généralement la rédaction d⟦’⟧un testament, la mise en place de fiducies et d⟦’⟧autres mécanismes juridiques pour s⟦’⟧assurer que la volonté du défunt est respectée et que les héritiers sont protégés.`
- BUTTON `Assurances`
- **H2** `Assurances`
- P `Les assurances sont la pierre angulaire de la gestion de risque et permettent d⟦’⟧assurer la stabilité et la protection des finances d⟦’⟧un individu ou d⟦’⟧une organisation.⟦NBSP⟧`
- P `L⟦’⟧objectif est d'assurer une tranquillité d⟦’⟧esprit aux clients qui savent que leurs objectifs de vie pourront être atteints, même en cas d⟦’⟧imprévus.`
- BUTTON `Solutions bancaires`
- **H2** `Solutions bancaires`
- LINK `Services d⟦’⟧assistance juridique` → `https://www.bnc.ca/particuliers/comptes/services/assistance-juridique.html`
- LINK `soins de santé virtuels` → `https://www.bnc.ca/particuliers/comptes/services/clinique-virtuelle.html`
- P `Pour effectuer leurs transactions quotidiennes, nos clients profitent de tous les produits bancaires à frais réduits. Cela inclut des gratuités sur les comptes courants et des rabais de taux d⟦’⟧intérêt sur les produits de financement. Demandez nous plus d⟦’⟧informations sur le Services d⟦’⟧assistance juridique et services de soins de santé virtuels (télémédecine).`
- BUTTON `Philanthropie`
- **H2** `Philanthropie`
- LINK `Fondation Philantra` → `https://www.bnc.ca/particuliers/epargne-placements/fondation-philantra.html`
- P `La Fondation Philantra⟦NBSP⟧vous offre la possibilité de créer votre fonds de bienfaisance sans avoir à vous préoccuper des délais, des coûts et de la complexité administrative liés à la création et la gestion d⟦’⟧une fondation privée.⟦NBSP⟧`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-toolbox.svg` — alt/title `Une illustration d'une clé et d'un tournevis à l'intérieur d'un cercle bleu.`
- **H2** `Boîte à outils`
- P `Nos ressources utiles vous aideront à gérer efficacement et à mieux comprendre vos finances.`
- LINK `Comprendre vos relevés` → `/documentation/releves.html`
- P `Comprendre vos relevés`
- LINK `Comprendre vos accès en ligne` → `/services-numeriques.html`
- P `Comprendre vos accès en ligne`
- LINK `Outil budgétaire` → `https://www.bnc.ca/formulaires/epargne-placements/calculer-budget-en-ligne.html`
- P `Outil budgétaire`
- LINK `Centre de messagerie` → `/content/dam/fbngp/pdf/guide-centre-de-messagerie.pdf`
- P `Centre de messagerie`
- LINK `Calculatrice hypothécaire` → `https://www.bnc.ca/particuliers/hypotheque/calculatrices/versements.html`
- P `Calculatrice hypothécaire`
- LINK `Comprendre les relevés fiscaux` → `/documentation/impots.html`
- P `Comprendre les relevés fiscaux`
- LINK `Guide fiscalité et investissement - Canada (excepté Québec)` → `/content/dam/fbngp/pdf/guide-fiscal-can-fbngp.pdf`
- P `Guide fiscalité et investissement - Canada (excepté Québec)`
- LINK `Guide fiscalité et investissement - Québec` → `/content/dam/fbngp/pdf/guide-fiscal-qc-fbngp.pdf`
- P `Guide fiscalité et investissement - Québec`
- BUTTON `Notes légales`
- **H2** `Notes légales`
- LI `Les planificateurs financiers sont autorisés à agir dans la discipline de planification financière. Ils exercent leurs activités pour le compte de la Financière Banque Nationale inc., cabinet en planification financière.`
- LI `Nous travaillons en étroite collaboration avec l⟦’⟧équipe fiscalité, retraite et succession de Banque Nationale Trust, composée d⟦’⟧experts multidisciplinaires dont les connaissances et les conseils viennent compléter notre offre de services. Ces experts nous accompagnent pour fournir les meilleures solutions pour vos finances personnelles liées à la fiscalité, à la retraite ainsi qu'à la succession.`
- LI `Les produits et services d'assurance sont fournis par le Cabinet d'assurance Banque Nationale inc. (CABN) ou les Services Financiers FBN (SFFBN), selon le cas. CABN et SFFBN ne sont pas membres du Fonds canadien de protection des investisseurs (FCPI). Les produits d'assurance ne sont pas protégés par le FCPI.`
- LI `Les solutions de financement sont octroyées sous réserve de l'approbation de crédit de la Banque Nationale.`
- LI `Pour tous les détails et conditions de l⟦’⟧offre, communiquez avec votre conseiller.`
- **H3** `Contactez-nous`
- P `Obtenez les coordonnées des membres de notre équipe et voyez où se trouvent nos bureaux.`
- P `⟦NBSP⟧`
- LINK `Voir nos coordonnées` → `/conseiller/groupe-wolf-achard/nous-joindre.html`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png` — alt/title `Picto téléphone`
- LINK `514 395-1937` → `tel:+15143951937`
- P `514 395-1937`
- LINK `514 412-0370` → `tel:+15144120370`
- P `514 412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png` — alt/title `Picto courriel`
- LINK `laurent.achard@bnc.ca` → `mailto:laurent.achard@bnc.ca`
- P `laurent.achard@bnc.ca`
- LINK `davidalexandre.wolf@bnc.ca` → `mailto:davidalexandre.wolf@bnc.ca`
- P `davidalexandre.wolf@bnc.ca`

**`<sup>` markers on this page:** `⟦NBSP⟧1, 2, 3`

### 4.2 ENGLISH — `https://www.nbfwm.ca/advisor/wolf-archard-group/our-services.html`

Capture: `source-assets/html/en-our-services.html` · 107,145 bytes

**Head metadata**

- `<html lang>` `en`
- `<title>` `Services offered by Wolf Archard Group | National Bank Financial - Wealth Management`
- `meta[name=description]` `Wolf Archard Group offer advice on estate planning, investment management and financial planning, providing solutions to fit their client⟦’⟧s financial needs. `
- `og:title` `Services offered by Wolf Archard Group | National Bank Financial - Wealth Management`
- `og:description` `Wolf Archard Group offer advice on estate planning, investment management and financial planning, providing solutions to fit their client⟦’⟧s financial needs.`
- `og:url` `https://www.nbfwm.ca/advisor/wolf-archard-group/our-services.html`
- `og:image` `https://www.nbfwm.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.nbfwm.ca/advisor/wolf-archard-group/our-services.html`
- `meta[name=template]` `liste-evenement-microsite1`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nos-services.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nos-services.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-services.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-services.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-services.html`

**Body, in document order**

- **H1** `Our services`
- P `Investment management. Financial planning. Estate planning.`
- **H2** `Solutions designed to meet your needs`
- P `Our specialty: Making it easier for you to manage your finances, no matter what your needs, goals or situation are.⟦NBSP⟧`
- P `Our wide range of services allows us to tailor our recommendations to each profile and work together to find the best solution for you.`
- **H2** `Our approach`
- P `Throughout our relationship, our team listens to your needs. We tailor our recommendations to your situation and ensure that we propose the solutions that best suit you.`
- IMG `/content/dam/fbngp/picto/picto-analyse.svg` — alt `Pictogram of a magnifying glass.`
- **H3** `1. Understand your needs`
- LI `We take the time to get to know you.`
- LI `We undertake a detailed analysis of your current situation.`
- LI `We understand your needs and concerns to help you set objectives and priorities.⟦NBSP⟧`
- IMG `/content/dam/fbngp/picto/picto-objectifs.svg` — alt `Pictogram of a target with a star.`
- **H3** `2. Plan`
- LI `We recommend solutions that are tailored to your needs and establish an action plan with your priorities in mind.`
- LI `We design a personalized plan for your retirement.`
- LI `We assist you in your decision making regarding estate planning and settlement.`
- IMG `/content/dam/fbngp/picto/picto-plan-financier.svg` — alt `Pictogram of a plane.`
- **H3** `3. Implement the plan`
- LI `We build your investment portfolio and implement the adopted strategies.`
- IMG `/content/dam/fbngp/picto/picto-suivi.svg` — alt `Pictogram of a calendar.`
- **H3** `4. Periodic monitoring`
- LI `We monitor changes in your personal, financial and economic situation, to ensure the proposed solutions continue to suit your objectives.`
- **H2** `Our services`
- P `As you go through life and your situation changes, your expectations and financial goals will evolve. Our team guides you every step of the way and calls on specialists from various areas to make personalized recommendations and help you achieve your goals.`
- IMAGE (DAM) `/content/dam/fbngp/img/img-diagram-wealth-management-services-your-wealth-advisor-blue.png` — alt/title `A wheel that represents seven aspects of wealth management expertise.`
- P `Certain services are offered by third party specialists. *⟦sup⟧1, 2, 3⟧`
- BUTTON `Portfolio management`
- **H2** `Portfolio management`
- P `Purpose`
- LI `Have a qualified professional manage your investment portfolio.`
- LI `Strike a balance between risk and reward.`
- LI `Enjoy a flexible solution that stays true to your goals.`
- P `Main benefits`
- LI `Have a clear plan to achieve your goals.`
- LI `Be able to react to the unexpected.`
- LI `Achieve the maximum benefits of diversification. ⟦NBSP⟧`
- P `These services are offered by third party specialists.⟦NBSP⟧₁`
- P `⟦NBSP⟧`
- BUTTON `Financial planning`
- **H2** `Financial planning`
- P `Purpose`
- LI `A document outlining your short- and long-term financial goals and the strategies you will use to reach them.`
- LI `The plan reflects your personal and family situation, your risk tolerance and future expectations, and includes effective tax strategies.`
- P `⟦NBSP⟧`
- P `Main benefits`
- LI `Your finances will be in good hands.`
- LI `You will enjoy greater peace of mind.`
- LI `You will be able to prioritize your projects and make informed decisions. ⟦NBSP⟧`
- P `These services are offered by third party specialists.⟦sup⟧⟦NBSP⟧1⟧`
- BUTTON `Estate planning`
- **H2** `Estate planning`
- P `Purpose`
- LI `Document how you want your assets to be distributed after your death.`
- LI `Prevent any misunderstandings among your heirs.`
- LI `Plan for any situation.`
- P `⟦NBSP⟧`
- P `Main benefits`
- LI `You will be protected in case of incapacity.`
- LI `Your assets will be transferred without conflict.`
- LI `Your wishes will be respected.`
- LI `You will minimize the tax burden on your estate.`
- P `These services are offered by third party specialists.⟦sup⟧2⟧`
- BUTTON `Tax planning`
- **H2** `Tax planning`
- P `Purpose`
- LI `It is the development of financial strategies to reduce the impact of taxes on your investments.`
- LI `Proposing customized recommendations based on an analysis of your situation and your portfolio.`
- LI `It's about doing more with the same money by optimizing your portfolio.`
- P `⟦NBSP⟧`
- P `Main benefits`
- LI `More money to invest or spend.`
- LI `More freedom to achieve your goals.`
- LI `Make tax-efficient investments. ⟦NBSP⟧`
- P `These services are offered by third party specialists.⟦sup⟧2⟧`
- P `⟦NBSP⟧`
- BUTTON `Insurance`
- **H2** `Insurance`
- P `Purpose`
- LI `These solutions will ensure your family's financial future should anything happen to you.`
- LI `They serve as a cushion to protect you from the unexpected.`
- LI `They will help keep your family's plans on track.`
- P `⟦NBSP⟧`
- P `Main benefits`
- LI `Enjoy a safety net, even if you are not working.`
- LI `Transfer your assets and protect your legacy.`
- LI `Have peace of mind so you can be at ease. ⟦NBSP⟧`
- P `These services are offered by third party collaborators.⟦sup⟧3⟧`
- BUTTON `Banking solutions`
- **H2** `Banking solutions`
- LINK `Wealth management - Banking-offer |⟦NBSP⟧Exclusive benefits` → `/content/dam/fbngp/pdf/doc-wealth-management-banking-offer-nbfwm.pdf`
- P `Wealth management - Banking-offer |⟦NBSP⟧Exclusive benefits`
- P `As a National Bank Financial—Wealth Management client, you can take care of all your banking in one place:`
- LI `Everyday transactions`
- LI `Financing`
- LI `Specific needs ⟦NBSP⟧`
- P `Main benefits`
- LI `Savings on certain banking solutions.`
- LI `Healthcare and legal virtual assistance services.`
- LI `Competitive interest rates.`
- BUTTON `Philanthropy`
- **H2** `Philanthropy`
- P `Do you want to give back to the community? Let our team guide you in designing a philanthropic plan.`
- LI `Setting up a foundation`
- LI `Distribution of donations`
- LI `Bequests in a will`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-toolbox.svg` — alt/title `An illustration of a wrench and screwdriver inside a blue circle.`
- **H2** `Toolbox`
- P `Our useful resources will help you effectively manage and better understand your finances.`
- LINK `Understanding your statements` → `/documentation/statements.html`
- P `Understanding your statements`
- LINK `Understanding online services` → `/digital-services.html`
- P `Understanding online services`
- LINK `Budget tool` → `https://www.nbc.ca/personal/mortgages/calculators/payments.html`
- P `Budget tool`
- LINK `Messaging Center` → `/content/dam/fbngp/pdf/message-centre-guide.pdf`
- P `Messaging Center`
- LINK `Mortgage calculator` → `https://www.nbc.ca/personal/mortgages/calculators/payments.html`
- P `Mortgage calculator`
- LINK `Understanding tax slips` → `/documentation/taxes.html`
- P `Understanding tax slips`
- LINK `Tax and Investment Guide – Canada (excluding Quebec)` → `/content/dam/fbngp/pdf/tax-guide-can-nbfwm.pdf`
- P `Tax and Investment Guide – Canada (excluding Quebec)`
- LINK `Tax and Investment Guide – Quebec` → `/content/dam/fbngp/pdf/tax-guide-qc-nbfwm.pdf`
- P `Tax and Investment Guide – Quebec`
- BUTTON `Legal Disclaimers`
- **H3** `Legal Disclaimers`
- LI `Financial Planners are authorized to act in the field of Financial Planning. They exercise their duties for National Bank Financial Inc., a financial planning firm.`
- LI `We work closely with the Taxation, Retirement and Estate Planning Team from National Bank Trust, made up of multidisciplinary experts who provide knowledge and advice that complement our service offering. These experts assist us in providing the best solutions for your personal finances related to taxation, retirement and estate planning.`
- LI `Insurance products and services are provided by National Bank Insurance Firm (NBIF) or by NBF Financial Services (NBFFS), as applicable. NBIF and NBFFS are not members of Canadian Investor Protection Fund (CIPF). Insurance products are not protected by CIPF.`
- LI `Financing solutions are subject to credit approval by National bank.`
- LI `For details and conditions of the offer, please contact your advisor.`
- **H3** `Contact us`
- P `Our team members are there for you. Contact⟦NBSP⟧us⟦NBSP⟧directly⟦NBSP⟧at`
- P `⟦NBSP⟧`
- LINK `See our contact details` → `/advisor/wolf-archard-group/contact-us.html`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png` — alt/title `Phone picto`
- LINK `514-395-1937` → `tel:+15143951937`
- P `514-395-1937`
- LINK `514-412-0370` → `tel:+15144120370`
- P `514-412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png` — alt/title `Email picto`
- LINK `laurent.achard@nbc.ca` → `mailto:laurent.achard@nbc.ca`
- P `laurent.achard@nbc.ca`
- LINK `davidalexandre.wolf@nbc.ca` → `mailto:davidalexandre.wolf@nbc.ca`
- P `davidalexandre.wolf@nbc.ca`

**`<sup>` markers on this page:** `1, 2, 3` · `⟦NBSP⟧1` · `2` · `2` · `3`

---

## 5. Nouvelles et articles / News & articles

### 5.1 FRENCH — `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nouvelles-articles.html`

Capture: `source-assets/html/fr-nouvelles-articles.html` · 156,376 bytes

**Head metadata**

- `<html lang>` `fr`
- `<title>` `Nouvelles et articles | Financière Banque Nationale - Gestion de patrimoine`
- `meta[name=description]` `Suivez l'actualité des marchés financiers et profitez de nos analyses pour mieux atteindre vos objectifs.`
- `og:title` `Nouvelles et articles | Financière Banque Nationale - Gestion de patrimoine`
- `og:description` `Suivez l'actualité des marchés financiers et profitez de nos analyses pour mieux atteindre vos objectifs.`
- `og:url` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nouvelles-articles.html`
- `og:image` `https://www.fbngp.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nouvelles-articles.html`
- `meta[name=template]` `notre-equipe-microsite`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nouvelles-articles.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nouvelles-articles.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/news-articles.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/news-articles.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/news-articles.html`

**Body, in document order**

- **H1** `Nouvelles et articles`
- **H2** `Nouvelles et articles`
- **H2** `Nouvelles et articles`
- **H2** `Nouvelles et articles`
- **H2** `Actualités politiques de Trump`
- IMAGE (DAM) `/content/dam/fbngp/img/droit-douane-trump/img-obbba-767x433.jpeg` — alt/title `Drapeau du Canada et des États-Unis ensemble`
- LINK `One Big Beautiful Bill Act (OBBBA) - Projet d'article 899` → `/content/dam/fbngp/pdf/228-fbn-corpo-pager-one-big-beautiful-bill-fr.pdf`
- P `One Big Beautiful Bill Act (OBBBA) - Projet d'article 899`
- IMAGE (DAM) `/content/dam/fbngp/img/droit-douane-trump/img-projet-loi-899-767x433.png` — **`alt` is VALUELESS** (the raw markup ends `data-cmp-hook-image="image" alt/`), so it parses as `alt=""` → **decorative**. No `title`. ⚠ **CORRECTED 2026-08-02.** This line previously read ``alt/title ` ` `` — a single space. **That single space is the wrapper `<div>`'s `data-title=" "`, not the image's alt**, and the two are different attributes on different elements. Re-verified byte-level against `source-assets/html/fr-nouvelles-articles.html`. The capture wins over this file (§0 precedence); the correction is to this file, not to the build. See `COMPLIANCE.md` N-12 / R-17.
- LINK `Projet d⟦’⟧article 899 – Impacts potentiels sur les investisseurs canadiens` → `/content/dam/fbngp/pdf/226-fbn-corpo-pager-article-after-senate-bill-fr.pdf`
- P `Projet d⟦’⟧article 899 – Impacts potentiels sur les investisseurs canadiens`
- IMAGE (DAM) `/content/dam/fbngp/img/droit-douane-trump/img-droit-de-douane-trump-767x433.jpeg` — alt/title ` Drapeau américain qui survole un navire de conteneurs portuaires. `
- LINK `Faire face ensemble aux tarifs douaniers – Notre engagement` → `/content/dam/fbngp/pdf/faire-face-ensemble-aux-tarifs-douaniers-notre-engagement.pdf`
- P `Faire face ensemble aux tarifs douaniers – Notre engagement`
- **H2** `Contenus en vedette`
- IMAGE (DAM) `/content/dam/fbngp/img/suggestions-lecture/2026/img-article-july-article-fusions-acquisitions.jpg` — alt/title `Photo d⟦’⟧une spécialiste de la Banque Nationale qui échange avec ses clients sur des stratégies de fusions et d⟦’⟧acquisitions créatrices de valeur pour leur entreprise`
- LINK `La rigueur commerciale dans les fusions et acquisitions : les meilleures pratiques pour créer de la valeur` → `https://www.nbc.ca/fr/article/fusions-acquisitions-rigueur-commerciale.html?cid=nti_5NBGJA8LTAX21671`
- P `La rigueur commerciale dans les fusions et acquisitions : les meilleures pratiques pour créer de la valeur`
- IMAGE (DAM) `/content/dam/fbngp/img/suggestions-lecture/2026/img-article-july-article-maximiser-son-patrimoine.jpg` — alt/title `Une mère aide ses enfants à faire leurs devoirs à l⟦’⟧îlot de la cuisine.`
- LINK `8 conseils pour bien gérer votre patrimoine familial` → `https://www.bnc.ca/particuliers/conseils/impots-revenus/gerer-son-patrimoine-par-ou-commencer.html?cid=nti_DFMJWWP7ZXN21672`
- P `8 conseils pour bien gérer votre patrimoine familial`
- IMAGE (DAM) `/content/dam/fbngp/img/suggestions-lecture/2026/img-article-july-article-pension-individuelle.jpg` — alt/title `Une femme asiatique âgée travaille à domicile sur un ordinateur portable.`
- LINK `Tout savoir sur le régime de retraite individuel` → `https://www.bnc.ca/particuliers/conseils/epargne-placements/comprendre-le-regime-de-retraite-individuel.html?cid=nti_MTJE0ZLNX7F21673`
- P `Tout savoir sur le régime de retraite individuel`
- **H2** `Actualités économiques`
- **H3** `Impact économique`
- P `Afin de vous éclairer et de stimuler votre réflexion face au contexte actuel,⟦NBSP⟧Stéfane Marion et⟦NBSP⟧Nancy Paquet se penchent sur l⟦’⟧actualité économique et vous partagent leurs perspectives via nos vidéos informatives mensuelles.`
- LINK `Visionnez les éditions précédentes` → `https://www.bnc.ca/particuliers/conseils/impact-economique.html`
- BUTTON `Vidéo Impact économique transcription`
- **H3** `Vidéo Impact économique transcription`
- P `Bonjour à tous, nous sommes mercredi le 15 juillet 2026. Mon cher Stéfane, un plaisir de te recevoir. Alors dis donc, est-ce que le marché boursier commence à s'essouffler ?`
- P `Si je te présente le graphique Nancy, tu pourrais voir que il semblerait que oui. Donc le dernier sommet du marché boursier c'est début juin donc on perçoit un certain essoufflement t'as absolument raison.`
- P `Aïe Aïe Aïe. Et donc ça c'est lié entre autres à ce qui se passe macroéconomique bien entendu.`
- P `Ouais donc il y a la canicule, puis en plus il fait plus chaud dans le détroit d'Ormuz, ce qui fait en sorte que le prix de l'énergie est en hausse. Puis remarque que au niveau du prix du baril de pétrole on est allé au-dessus de 100 $ sur le prix du Brent, mais là on a baissé beaucoup. Puis avec ce qui se passe dans le détroit d'Ormuz, ça remonte de façon quand même importante au cours des dernières semaines.`
- P `Tout à fait. Puis on voit déjà ce matin aussi là qu'il y avait encore certains bombardements. Donc on n'aura pas une réponse aujourd'hui sur est-ce que ça va réouvrir ou pas ?`
- P `La certitude qu'on a c'est que le détroit d'Ormuz, nonobstant les dire des politiciens, mais il est pas ouvert. Puis ce que ça fait Nancy, c'est que il y a un impact sur le prix du baril de pétrole. Mais il y a plus que ça dans le dernier mois parce qu'il y a aussi une autre guerre qui se déroule ailleurs en Europe en particulier, où là il y a des destructions d'infrastructures, de raffinerie de pétrole auxquelles on assiste, de sorte que ça a amené la Russie même à interdire les exportations de diesel autour au niveau mondial. Puis ça c'est un fournisseur à peu près 11 %. Donc j'ai le pétrole brut qui est impacté. Puis au niveau des produits raffinés, de la destruction des capacités de raffinage, elle est au niveau mondial présentement. Ce qui fait en sorte que les coûts de raffinage ont explosé à un niveau inédit. Nancy, on surpasse même ce qu'on avait vu en 2022.`
- P `Mon Dieu, alors c'est sûr que ça a un impact à la pompe ?`
- P `Ben c'est ça, parce que là tu pourrais dire mais non mais là le pétrole il est pas à 100 $, pourquoi le prix de l'essence va remonter à un niveau record ? Ben c'est à cause de ce qui se passe au niveau du raffinage. Puis remarque, le prix de l'essence ou du diesel est en hausse de plus de 45 %. Donc il y a le prix du brut, mais il y a le prix des produits raffinés. Puis en bout de ligne l'économie fonctionne avec des produits raffinés non pas le brut donc c'est pour ça qu'il faut être prudent pour les prochains mois.`
- P `Ouais tout à fait. Et quelles sont nos prévisions de retour à la normale dans le détroit d'Ormuz ?`
- P `Bien elles sont pas très intéressantes je dois t'avouer parce que si tu regardes au niveau des marchés, genre la firme Polymarket où les gens peuvent s'exprimer sur leur vision de réouverture ou pas. Écoute, c'est tout nouveau qu'on utilise ça Nancy. Mais bon les probabilités de réouverture en 31 juillet 2 % d'ici septembre 27 % ça va faire 6 mois en septembre que le détroit d'Ormuz est impacté négativement, donc ta chaîne d'approvisionnement elle va s'en ressentir. Puis on voit pas pour l'instant de capacité de réouvrir le détroit d'Ormuz d'ici la fin de l'année donc il est faux de penser qu'il y aura pas des ramifications sur la chaîne d'approvisionnement au cours des prochaines semaines.`
- P `Ben justement parce que même si on rouvrait le 31 décembre, le lendemain, tout ne se retrouve pas dans nos paniers d'épicerie ou à la pompe dans nos marchés mondiaux.`
- P `Ben t'as raison, faut reconstituer les inventaires de tout ça. Fait que ce que ça veut dire, c'est que pour l'instant, c'est que les pressions sur des chaînes d'approvisionnement mondiales sont à des niveaux qu'on n'a pas vu depuis la récession COVID. Historiquement Nancy ce que ça veut dire, c'est que tu peux avoir des surprises d'inflation à la hausse au cours des prochains mois. Bon je sais que le rapport d'inflation aux États-Unis semblait pas pointé vers ça, mais l'IPC c'est une façon de mesurer l'inflation. Après il y a ce qui se passera au niveau des coûts de production au niveau des entreprises, puis c'est là où ça pourrait augmenter au cours des prochains mois. Donc faut pas être complaisant. On doit composer avec cette incertitude là qui devrait perdurer pour encore plusieurs semaines.`
- P `Et malgré tout ça toute cette incertitude dont on parle depuis qu'on a commencé notre conversation les marchés boursiers sont encore, les attentes des marchés boursiers sont encore à des sommets.`
- P `T'as raison, fait que pourquoi on fait du sur place et que ça baisse pas à la bourse et c'est seulement du sur place. Mais t'as raison, c'est parce que les attentes de croissance des bénéfices par action au niveau mondial presque toutes les régions du monde sont encore prévues ou les anticipations c'est encore pour des des croissances des bénéfices de plus de 20 %, 20 % ou plus dans presque toutes les régions du monde. Donc tu vas me dire Ouais c'est pas fait partout Stéfane c'est vrai que l'Europe puis le Japon c'est un peu plus faible.`
- P `Mais t'as aucun négatif ?`
- P `Non.`
- P `C'est déjà assez surprenant.`
- P `C'est du 2 chiffres, ce qui serait exceptionnel dans le contexte actuel. Donc pour la bourse, on va si tu veux carburer, si tu m'excuses d'utiliser l'expression, on va carburer à la saison des bénéfices qui est à nos portes aux États-Unis, mais ce qui se produira au cours des prochains mois, moi je pense que on peut avoir des surprises qui pourraient être un peu plus négatives en 3e et 4e trimestre. 2e trimestre, on sait déjà qu'il démarre quand même bien.`
- P `Oui.`
- P `Mais 3e, 4e trimestre si ma chaîne d'approvisionnement demeure bouchée ou bloquée.`
- P `Ça va avoir un impact potentiel.`
- P `Ouais.`
- P `Et ce matin, nouvelles de la Banque du Canada, donc on ne bouge pas les taux d'intérêt.`
- P `Bien tu m'en avais, tu m'avais questionné le mois passé, je disais je pense pas, puis en fait ils ont passé leur tour, donc on demeure dans une structure au Canada où tu sais la zone euro ils ont monté leur taux là il y a à peine un mois. Donc au Canada on demeure dans une juridiction où les taux d'intérêt demeurent relativement bas.`
- P `C'est intéressant. Puis t'as une autre bonne nouvelle au niveau de l'emploi.`
- P `Mais j'en ai 2, avant ça oublie pas la Banque du Canada a révisé à la hausse sa prévision pour le 2e trimestre.`
- P `T'as raison.`
- P `Ils sont à 2,5 %. Donc tu sais les gens avaient beaucoup parlé des 2 trimestres négatifs donc il y a eu un rebond.`
- P `Tu nous disais que c'était pas une vraie récession malgré les 2 trimestres.`
- P `Puis que le rebond semblait se propager ou se confirmer pour le 3e trimestre ce qui est fait. Mais l'autre chose t'as absolument raison. Ce qui est important, c'est que c'est vrai que la population est en baisse au Canada, mais l'immigration permanente continue d'entrer au Canada. Puis c'est important parce que ça, c'est surtout les gens de 25 à 54 ans qui ont une incidence importante sur le site de crédit. Puis sache Nancy que les travailleurs ou le nombre de travailleurs de 25 à 54 ans a augmenté de 88 000 au cours des 2 derniers mois. Oui, c'était moche les mois précédents, mais on a fait un rebond important, puis on attend un nouveau record au Canada.`
- P `Puis effectivement, ce sont ceux qui vont consommer davantage, les instruments de crédit de consommation.`
- P `C'est vrai que c'est dommage pour les 15 à 24 ans, les étudiants étrangers qui sont frappés par la politique d'immigration. Mais encore une fois, l'immigration permanente, elle continue de demeurer positive au Canada, même si la population chute à cause des étudiants étrangers, les travailleurs temporaires pour la plupart, mais pour l'impact sur l'économie, les 25 à 54 ans, ça c'est important Nancy, donc ça veut dire que ça confirme tes chances d'avoir une meilleure performance économique au Canada en 2e moitié de l'année.`
- P `Puis on se donne aussi les moyens de pouvoir assurer notre croissance au Canada.`
- P `Ben c'est important. Nancy, c'est que la grosse annonce lapsus, grosse annonce avec au niveau du fédéral pipeline entre l'Alberta et la Colombie britannique pour se donner de nouveaux débouchés au niveau de la production totale de pétrole, qui devrait passer bientôt à 6 000 000 de barils par jour. Le pipeline n'est pas construit, il y a déjà des des optimisations qui étaient en cours Nancy, mais c'est`
- P `important parce que c'est aussi un effet levier pour l'économie, diversification mais autre chose, c'est que c'est aussi un effet levier pour des négociations avec la, tu m'avais expliqué là au niveau du CUSMA, je m'excuse, j'ai oublié la traduction française, là.`
- P `Le Oh mon Dieu.`
- P `L'accord de libre échange Canada-États-Unis, puis le Mexique donc on pourrait peut être entériner une une réouverture de l'accord ou une signature positive d'ici les prochains mois, dans un contexte où le pétrole est un atout névralgique pour, le pétrole canadien est un atout et névralgique pour les Américains. Donc j'ai toujours bon espoir que des nouvelles positives à ce niveau-là au cours des prochaines semaines, même si les Américains l'ont pas entériné début juillet.`
- P `Ouais puis de toute façon on sait que c'est pas parce qu'il est pas entériné que tout tombe, tu nous avais expliqué à la dernière rencontre aussi, donc business as usual pour l'instant tu nous donnes la belle nouvelle que t'as espoir que ça va se signer.`
- P `C'est reconduit, c'est juste que j'ai mon incertitude par rapport à est-ce que je me lance dans un investissement à long terme si j'ai pas accès au marché américain. Mais encore une fois, je pense que les nouvelles en provenance d'Ottawa demeurent positives. Oubliez pas, on a un symposium sur l'investissement au Canada d'ici Septembre. Puis je pense que il y aurait lieu de penser qu'on aura de meilleures nouvelles avant que le symposium se réalise, puis qu'il vienne au Canada là.`
- P `Merci Stéfane. Alors malgré toute cette incertitude macroéconomique, tu nous a communiqué quand même de bons messages positifs. C'est l'été, on doit quand même se reposer. Donc malgré tout ça, continuez à faire confiance à votre investissement, continuez de faire confiance à votre conseiller et on vous souhaite de bonnes vacances pour ceux qui en prennent. Et on se revoit au mois d'août. Merci Stéfane.`
- P `Merci.`
- **H3** `5 • 4 • 3 Perspectives de marché`
- P `5 minutes, 4 graphiques, 3 points clés à retenir… Découvrez « 5 • 4 • 3 », un nouveau regard trimestriel ciblé sur les marchés, l⟦’⟧économie et l⟦’⟧investissement avec notre expert Louis Lajoie, du Bureau du chef des placements de la Banque Nationale Investissements.`
- BUTTON `5 • 4 • 3 Perspectives de marché transcription`
- **H3** `5 • 4 • 3 Perspectives de marché transcription`
- P `Bonjour tout le monde. Aujourd'hui, 12 juin, je vais rapidement revenir sur le contexte de marché, ce qui rassure, ce qui inquiète et ce qu'on va suivre dans les prochains mois.`
- P `Mais avant, permettez-moi de revenir trois mois en arrière, lors de l'enregistrement de la dernière capsule, qui était au tout début de ce qui semblait être l'une des plus importantes crises énergétiques de l'histoire moderne. À l'époque, il y avait essentiellement deux narratifs ambiants : soit on se dirigeait vers 200 $ le baril de pétrole, auquel cas il y aurait une récession mondiale, soit, à l'inverse., on aurait une résolution rapide qui permettrait aux prix de l'énergie de reculer. Or, ce qui s'est produit est ultimement quelque chose entre les deux : en l'absence de résolution formelle, les marchés du pétrole ont quand même réussi à trouver un certain équilibre grâce, entre autres, à l'usage plus important de certains pipelines, au fait que les blocus sont en partie perméables, bien que légers. Mais surtout grâce à l'usage très important des réserves stratégiques mondiales, ce qui, par définition, veut dire que cet équilibre est fragile et temporaire. Il faudra donc quand même voir très bientôt une reprise plus substantielle du trafic maritime dans le détroit d⟦’⟧Ormuz.`
- P `Cela étant dit, ce qui est clair, c'est que dans tous les scénarios, les prix de l'énergie ne reviendront pas à leurs creux précédents, ne serait-ce qu'en raison du besoin de renflouer les réserves stratégiques de pétrole qui ont été utilisées dernièrement. Cela étant dit, la bonne nouvelle, c'est qu'on constate que cette hausse des prix de l'énergie n'est pas suffisante pour empêcher les marchés boursiers de renouer avec une tendance haussière, ce qui a effectivement été le cas au cours du deuxième trimestre. Non pas seulement à cause d'un quelconque espoir tourné vers l'avenir, mais vraiment en raison d'une croissance substantielle des profits, qui est en fait supérieure à la hausse des cours boursiers eux-mêmes depuis le début de l'année dans l'ensemble des régions boursières. Évidemment, cela s'explique en partie par des profits spectaculaires pour certains titres – les manufacturiers de semi-conducteurs, entre autres, dans les marchés émergents, certains ont un carnet de commandes qui déborde en ce moment.`
- P `Mais il y a quand même une résilience globale dans l'économie, si l'on se fie, par exemple, à l'indice de surprise économique aux États-Unis, qui est à son plus fort depuis 2024. C'est aussi une bonne nouvelle, mais cela soulève quand même des questions sur la trajectoire future de l'inflation, parce qu'on sait que l'inflation réagit à retardement à l'activité économique. On en a eu un exemple tout à fait extrême en 2021-2022. Cela n'a pas été le cas dans les deux dernières années, probablement parce que le marché de l'emploi, à cette période-là, était plus près d'un équilibre, et cela demeure encore le cas. C'est pourquoi, pour nous, une surchauffe est davantage un risque qu'une vue. Il faut quand même suivre cela de près.`
- P `Et ce que les marchés financiers vont suivre de près, très clairement, c'est ce que la Réserve fédérale américaine fera dans ce contexte. Pour la première fois en huit ans, on fera face à un nouveau président de la Réserve fédérale, M. Warsh. Il y a trois mois, les marchés se disaient qu'il pourrait probablement baisser les taux d'intérêt. Mais dernièrement, ce sont plutôt des hausses de taux d'intérêt qui sont escomptées par les marchés. Ce qui, en soi, ne serait pas nécessairement catastrophique dans la mesure où on parlerait quand même d'une politique monétaire largement située dans une fourchette neutre, ce qui est mieux qu'une politique trop accommodante peut-être qui, ultimement, ne créerait que de plus gros problèmes d'inflation. Mais si, éventuellement, on se met à parler de politique restrictive – ce n'est pas le cas –, mais si cela le devient, ce serait une raison d'être un peu plus inquiet, probablement avec plus de volatilité sur les marchés. C'est pourquoi le discours de M. Warsh sera très pertinent à suivre dans les prochains mois.`
- P `Pour résumer les choses, encore une fois, le pire a été évité et devrait continuer de l'être, même si on ne s'attend pas du tout à un retour à une stabilité parfaite dans le golfe Persique. Il faudra donc continuer de suivre l'évolution de l'inflation, qui ne semble visiblement pas se diriger vers un retour à la cible de 2 %, que l'on n'a pas vue depuis un peu plus de cinq ans maintenant. Il faudra donc voir comment M. Warsh naviguera tout cela. Mais, dans l'ensemble, on ne s'attend pas à un changement drastique dans les tendances de marché, qui sont visiblement favorables aux marchés boursiers. Il faut toutefois rester vigilant, parce que la réalité, c'est que l'éventail des risques et de l'incertitude demeurent encore exceptionnellement larges.`
- P `C'est tout pour aujourd'hui. Merci d'avoir été à l'écoute. On se reparle en septembre. D'ici là, bon été à tout le monde.`
- **H2** `Les finances en lumière`
- IMAGE (DAM) `/content/dam/fbngp/img/invest-in-you.jpg` — alt/title `Défi oser s'investir avec l'ambassadrice Kathy Marquis en vedette.`
- LINK `Le défi Oser s'investir` → `https://www.bnc.ca/particuliers/choisir-banque-nationale/femmes.html#video`
- P `Le défi Oser s'investir Regardez ces capsules vidéos et découvrez nos conseils et outils pratiques pour vous accompagner dans chacun de vos moments de vie de femme.`
- IMAGE (DAM) `/content/dam/fbngp/microsites/edwards-knutson-wealth-advisors/page-content/img-publications-financieres-revues-de-marche-740x489.png` — alt/title `Deux femmes assises ensemble devant un ordinateur portable.`
- LINK `Leadership d⟦’⟧opinion` → `https://www.bnc.ca/particuliers/conseils/vision-leaders.html`
- P `Leadership d⟦’⟧opinion Plongez dans les articles et les vidéos de nos experts qui redéfinissent les tendances du secteur`
- IMAGE (DAM) `/content/dam/fbngp/img/img-publications-financieres-rapports-mensuels-740x489.png` — alt/title `Une femme et un homme assis à un bureau examinent ensemble un gros document.`
- LINK `Épargne et placements` → `https://www.bnc.ca/particuliers/epargne-placements.html`
- P `Épargne et placements Découvrez nos options d'investissement qui vous aideront à réaliser vos projets ou à faire face aux imprévus`
- **H2** `Analyses économiques`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-weekly-economic-watch-768x433.jpg` — alt/title `Une femme assise dans son salon, examinant les offres et les produits financiers.`
- **H3** `L'Hebdo économique`
- P `Cette publication vous tient au courant de l'évolution d'un large éventail d'indicateurs économiques et financiers nord-américains, provinciaux et mondiaux. Elle présente des sujets d'actualité économique et financière, accompagnés d'un bref commentaire.`
- LINK `Lire la dernière version` → `/content/dam/bnc/taux-analyses/analyse-eco/hebdo-economique.pdf`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-monthly-vision.jpg` — alt/title `Un couple assis à la table de la salle à manger, regardant ensemble un ordinateur portable.`
- **H3** `Vision`
- P `Vous recherchez une analyse financière fiable ? Le groupe économie et stratégie fournit un rapport détaillé sur les taux d'intérêt, les obligations, le marché boursier et la stratégie de portefeuille.`
- LINK `Lire la dernière version` → `/content/dam/fbngp/pdf/mensuel-economique-vision.pdf`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-monthly-economic-monitor.jpg` — alt/title `Un homme assis à une table, écrivant sur un bloc note avec un ordinateur portable devant lui.`
- **H3** `Le mensuel économique`
- P `Explorez un aperçu régional avec nos rapports mensuels couvrant le Canada, les États-Unis et le monde, chacun offrant des prévisions adaptées aux perspectives économiques de sa région.`
- LINK `Lire les dernières versions` → `https://www.bnc.ca/a-propos-de-nous/nouvelles-medias/actualite-economique/analyses-economiques.html#economique`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-monthly-equity-monitor.jpg` — alt/title `Une femme assise à un bureau surplombant une ville, travaillant sur une tablette avec deux autres ordinateurs derrière elle.`
- **H3** `Le mensuel boursier`
- P `Dans ce rapport mensuel, les experts de la Banque nationale résument l'état actuel des marchés boursiers à l'échelle mondiale.`
- LINK `Lire la dernière version` → `/content/dam/bnc/taux-analyses/analyse-eco/mensuel/mensuel-boursier.pdf`
- **H2** `Stratégie d'investissement`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-strategie-placement-fr-767x433.jpg` — alt/title `Stratégie de placement brun verre bâtiment visuel.`
- **H3** `Stratégie de placement`
- P `Cette⟦NBSP⟧publication trimestrielle vous informe de la conjoncture économique mondiale, des recommandations de répartition d⟦’⟧actifs et des prévisions économiques.`
- LINK `Lire la dernière version` → `/content/dam/fbngp/pdf/doc-strategie-placement.pdf`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-asset-allocation-strategy.jpg` — alt/title `Une personne utilisant une calculatrice devant un bureau sur lequel sont posés de nombreux documents.`
- **H3** `Stratégie de répartition de l'actif`
- P `Qu'est-ce qui évolue sur les marchés financiers et quel est l'impact sur vos placements ? Banque Nationale Investissements propose une stratégie de portefeuille sur l'ensemble des classes d'actifs.`
- LINK `Lire la dernière version` → `/content/dam/bni/publication/strategie-repartition-actif.pdf`
- **H2** `Budgets fédéral et provincial`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-federal-budget.jpg` — alt/title `Le drapeau canadien flotte au coucher du soleil et représente le budget fédéral.`
- **H3** `Budget fédéral`
- P `Découvrez comment le gouvernement canadien prévoit de mettre en œuvre le programme économique annuel dans le budget fédéral de cette année.`
- LINK `Consulter le budget` → `/content/dam/bnc/taux-analyses/analyse-eco/budget/budget-fed.pdf`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-provincial-budget.jpg` — alt/title `Trois personnes assises à une table examinent les documents d'investissement de leurs clients.`
- **H3** `Budget du Québec`
- P `Nos experts font l'analyse du budget de votre province et les mises à jour financières correspondantes.`
- LINK `Consulter le budget` → `/content/dam/bnc/taux-analyses/analyse-eco/budget/budget-quebec.pdf`
- **H2** `Guides et outils`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-flip-book-trimestriel-v2-fr.jpg` — alt/title `Mythes et réalités par Banque Nationale Investissements.`
- **H3** `Mythes et réalités`
- P `Vous recherchez une analyse financière fiable ? Le groupe Économie et stratégie fournit un rapport détaillé sur les taux d'intérêt, les obligations, le marché boursier et la stratégie de portefeuille.`
- LINK `Lire la dernière version` → `/content/dam/bni/publication/mythes-realites.pdf`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-articles/fr/guide-fiscal-quebec-2025.jpg` — alt/title `Éléments graphiques de différentes couleurs et texte écrit en rouge flash info.`
- **H3** `Flash info`
- P `Trouvez les différents montants des régimes gouvernementaux (RPC, RRQ, PSV), les plafonds CELI, REER et REEE pour les contributions et les liens vers les différentes tables d⟦’⟧impôts.`
- LINK `Lire la dernière version` → `/content/dam/bnc/a-propos-de-nous/nouvelles-medias/info/flash-infos-bn-lettre.pdf`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-articles/fr/img-nouvelles-articles-guide-investir.jpg` — alt/title `Guide d'investissement - des conseils clés pour votre sante financière.`
- **H3** `Guide investir`
- P `Ce guide de référence contient une foule de renseignements pratiques et vous outille pour planifier vos projets. Téléchargez-le sur votre bureau pour profiter de toutes les fonctionnalités.`
- LINK `Téléchargez votre guide` → `/content/dam/fbngp/pdf/guide-investir-fbngp.pdf`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-articles/fr/flash-info.jpg` — alt/title `Guide fiscal et d'investissement - une main tenant un formulaire.`
- **H3** `Guide fiscalité et investissement`
- P `Vous trouverez tout ce dont vous avez besoin pour remplir avec succès votre déclaration d'impôts dans notre guide complet sur les impôts et les investissements.`
- LINK `Guide du Québec` → `/content/dam/fbngp/pdf/guide-fiscal-qc-fbngp.pdf`
- **H2** `Prévention de la fraude`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-protection-identity.png` — alt/title `Une personne et un bouclier pour représenter la protection contre la fraude à la banque.`
- P `Voyez les mesures à prendre pour vous protéger contre les tentatives de fraude.`
- LINK `Lisez nos conseils` → `https://www.bnc.ca/abc-securite/fraude.html`
- P `Lisez nos conseils`
- **H2** `Nouvelles et articles`
- **H3** `Contactez-nous`
- P `Obtenez les coordonnées des membres de notre équipe et voyez où se trouvent nos bureaux.`
- P `⟦NBSP⟧`
- LINK `Voir nos coordonnées` → `/conseiller/groupe-wolf-achard/nous-joindre.html`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png` — alt/title `Picto téléphone`
- LINK `514 395-1937` → `tel:+15143951937`
- P `514 395-1937`
- LINK `514 412-0370` → `tel:+15144120370`
- P `514 412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png` — alt/title `Picto courriel`
- LINK `laurent.achard@bnc.ca` → `mailto:laurent.achard@bnc.ca`
- P `laurent.achard@bnc.ca`
- LINK `davidalexandre.wolf@bnc.ca` → `mailto:davidalexandre.wolf@bnc.ca`
- P `davidalexandre.wolf@bnc.ca`

**`<sup>` markers on this page:** *none*

### 5.2 ENGLISH — `https://www.nbfwm.ca/advisor/wolf-archard-group/news-articles.html`

Capture: `source-assets/html/en-news-articles.html` · 152,662 bytes

**Head metadata**

- `<html lang>` `en`
- `<title>` `News & articles | National Bank Financial - Wealth Management`
- `meta[name=description]` `Get the latest news of the financial markets and take advantage of our analyzes to better achieve your goals.`
- `og:title` `News & articles | National Bank Financial - Wealth Management`
- `og:description` `Get the latest news of the financial markets and take advantage of our analyzes to better achieve your goals.`
- `og:url` `https://www.nbfwm.ca/advisor/wolf-archard-group/news-articles.html`
- `og:image` `https://www.nbfwm.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.nbfwm.ca/advisor/wolf-archard-group/news-articles.html`
- `meta[name=template]` `notre-equipe-microsite1`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nouvelles-articles.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nouvelles-articles.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/news-articles.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/news-articles.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/news-articles.html`

**Body, in document order**

- **H1** `News and articles`
- **H2** `News & articles`
- **H2** `News & articles`
- **H2** `News & articles`
- **H2** `Trump's Policy Updates`
- IMAGE (DAM) `/content/dam/fbngp/img/droit-douane-trump/img-obbba-767x433.jpeg` — alt/title `Canada and United States flag together.`
- LINK `One Big Beautiful Bill Act | Canadian Concerns Removed` → `/content/dam/fbngp/pdf/228-fbn-corpo-pager-one-big-beautiful-bill-en.pdf`
- P `One Big Beautiful Bill Act | Canadian Concerns Removed`
- IMAGE (DAM) `/content/dam/fbngp/img/droit-douane-trump/img-projet-loi-899-767x433.png` — **`alt` is VALUELESS** (the raw markup ends `data-cmp-hook-image="image" alt/`), so it parses as `alt=""` → **decorative**. No `title`. ⚠ **CORRECTED 2026-08-02.** This line previously read ``alt/title ` ` `` — a single space. **That single space is the wrapper `<div>`'s `data-title=" "`, not the image's alt.** Re-verified byte-level against `source-assets/html/en-news-articles.html`. Identical on both language pages. See `COMPLIANCE.md` N-12 / R-17.
- LINK `Proposed US Tax Code Section 899 - Potential Impacts on Canadian Investors` → `/content/dam/fbngp/pdf/226-fbn-corpo-pager-article-after-senate-bill-en.pdf`
- P `Proposed US Tax Code Section 899 - Potential Impacts on Canadian Investors`
- IMAGE (DAM) `/content/dam/fbngp/img/droit-douane-trump/img-droit-de-douane-trump-767x433.jpeg` — alt/title `American flag flying over port container ship.`
- LINK `Facing the tariffs together - Our commitment` → `/content/dam/fbngp/pdf/facing-the-tariffs-together-our-commitment.pdf`
- P `Facing the tariffs together - Our commitment`
- **H2** `Spotlight: Now trending`
- IMAGE (DAM) `/content/dam/fbngp/img/suggestions-lecture/2026/img-article-july-article-fusions-acquisitions.jpg` — alt/title `A National Bank specialist meets with clients to discuss value-creating merger and acquisition strategies for their business.`
- LINK `Commercial discipline in M&A: The best practices to drive real value` → `https://www.nbc.ca/en/article/fusions-acquisitions-rigueur-commerciale.html?cid=nti_7QRH7F9FAM921668`
- P `Commercial discipline in M&A: The best practices to drive real value`
- IMAGE (DAM) `/content/dam/fbngp/img/suggestions-lecture/2026/img-article-july-article-maximiser-son-patrimoine.jpg` — alt/title `A mother helps her children with their lessons at the kitchen island.`
- LINK `8 tips to help you manage your family wealth` → `https://www.nbc.ca/personal/advice/taxes-and-income/how-to-build-and-manage-wealth.html?cid=nti_ZA0BA7VK3D521669`
- P `8 tips to help you manage your family wealth`
- IMAGE (DAM) `/content/dam/fbngp/img/suggestions-lecture/2026/img-article-july-article-pension-individuelle.jpg` — alt/title `Asian senior woman working at home with a laptop.`
- LINK `Everything you need to know about the Individual Pension Plan` → `https://www.nbc.ca/personal/advice/savings-investment/understanding-the-individual-pension-plan.html?cid=nti_MXOP6NJZD8S21670`
- P `Everything you need to know about the Individual Pension Plan`
- **H2** `Economic news`
- **H3** `Economic Impact`
- P `To keep you informed and stimulate your thinking, Stéfane Marion and⟦NBSP⟧Nancy Paquet take a look at economic news and share their perspectives in our monthly informative videos.`
- LINK `Watch previous editions` → `https://www.nbc.ca/personal/advice/economic-impact.html`
- BUTTON `Video Economic Impact Transcript`
- **H3** `Video Economic Impact Transcript`
- P `Hello everyone, we are Wednesday, July 15th, 2026. Stéfane, a pleasure to be here with you again today. So, tell me, are the markets running out of speed?`
- P `Ah, they seem to be. Last time we saw a new record high on global equities, Nancy, it was the beginning of June. Notice that, you know, at the beginning of the Strait of Hormuz intervention, we had a correction, a big rebound stalling. And I think there's some geopolitics undermining the markets at this point in time.`
- P `I think so. So, you know, probably has an impact on the oil price for sure.`
- P `So, it coincides with renewed upward pressure on oil. Notice, Nancy, that we're still very far from the levels that exceeded $100, but it's.`
- P `Going up.`
- P `It's quite the rebound in recent weeks with renewed tensions.`
- P `And of course, that's mostly related to the Strait of Hormuz.`
- P `So, doesn't matter what politicians say. Politicians say, open or not open, traffic says it's not open. So, if you look at the underlying data, you can explain what's happening on the oil prices via traffic in the Strait of Hormuz, which is not reopened. So even though we put it, is it open? That is the question or not, it's not reopened at this point in time, hence the pressure on oil prices.`
- P `And it also has an impact because there is limited availability of various products, therefore.`
- P `So, there's something important to note. So, there's the Strait of Hormuz, but there's also a war elsewhere in the world. And what's happening in Europe where you're seeing destruction of refineries, particularly in Russia, which accounts for 11% of diesel sales around the world. You're seeing that refining, the cost of refining oil is surging because there's less refined capacity at refinery levels. So, crack spreads, which is one way to look at the price of refined products if you want, actually exceeds what you saw in 2022 that started the beginning of the war in Ukraine when crude oil was much higher. So what that means, Nancy, at the end of the day is like the economy works on refined products and they're up significantly, whether it's gasoline, diesel, diesel, and it shows up in a global supply chain. So yes, crude prices have rebounded. They're still below where they were before, but gasoline and diesel might hit new all-time highs in the coming week.`
- P `Yeah. And that's what consumers feel when they go to the pump, right?`
- P `Yeah. And remember, Russia actually said that they were restricting exports of diesel for the next month. And if there's more refinery capacity that's destroyed, probably that will last longer. So, hence the impact on global transportation costs.`
- P `And it will take time before everything goes back to normal, right?`
- P `So, politicians say something, betting markets say something else. So according to betting markets, you're not gonna reopen by the end of July, 2% probability, end of August 13%, end of September 27%. We're below 50% until the end of the year. Nancy, what that means is that you're going to continue to impact the global supply chain. So, I know U.S. inflation was weaker than expected this month but be prepared for potential upside surprise.`
- P `And obviously, let's say it opens December 31st. The next day, everything will not be back to normal. We felt that during the pandemic, it took months before things.`
- P `You have to replenish inventories, yes, you're right. So, probably the key story here is to say global supply chains, you know, the pressures on global supply chains are the most acute we've seen since the COVID recession. Historically, that's accompanied with positive or if you want negative surprise in the sense that inflation is higher than expected. So, this is why we're still not out of the woods. So, coming back to your first question, are the markets running out of steam? Well, the markets are looking at this– How do we assess the impact on the global economy and earnings in this situation?`
- P `And even so, since the beginning of this conversation, we've had, you know, geopolitical not so good news, not dramatic, but not so good. But then again, markets expectations are surprisingly high.`
- P `So, this does not necessarily show up in terms of earnings expectation because right now, as we speak, the expectation is that virtually every large region of the world will deliver more than 20% earnings per share growth so profitability will increase by 20%. It's you know, listen, it's possible. I just want to say these expectations are quite ambitious if you have more pressure on the supply chain in the coming weeks.`
- P `And what's surprising is your graph is that there's no negative, there's no one single digit.`
- P `No, no double digit, minimum double digit. So, as we said last month, the expectations are still the best earnings per share growth globally ever seen outside a recession recovery. So, market surprise for better news, not worse news, hence the need to watch what's happening on the geopolitical front in the coming weeks.`
- P `So, one good news we got this morning is Bank of Canada.`
- P `Well, if not moving interest rates is good news, yes, it is because we're keeping our.`
- P `But for our consumers it is.`
- P `Well, most of our, you're absolutely right, most of our clients would appreciate that and we remain in a jurisdiction where interest rates are lower than the rest of the world. So, that's good news. And the other good news, Nancy, is the Bank Canada, actually, they stayed on the sidelines, and they recognized that well we might see a better rebound in GDP than we expected in the second quarter, remember we had two negative quarters. Now we're set to rebound 2% in the second quarter. That's good news.`
- P `Yeah. And you have another one about employment.`
- P `Oh yeah, so GDP rebound is not very important for me if it's not accompanied by a jump in employment. And the good news is we seem to be confirming better news on GDP with the June employment data, particularly for people age 25 to 54 who are critical for the credit cycle, right? So, new all time high on employment for people 25 to 54. Now, Nancy, I know you're going to tell me "Yeah, but you told me population growth is negative this year", but permanent immigration is still up and it really has an impact on people 25 to 54. But yes, population will be down because many foreign students or temporary workers that tend to be younger will be negatively impacted. But that's good news for the credit cycle and for potential GDP rebound.`
- P `Good. So, you have another good for us about the production level that would be increasing in Canada.`
- P `So, people have been talking about trade diversification. It's hard to do in the short term if you don't tap into natural resources. And so oil production's on the rise in Canada and the expectation is they will continue to rise because there was a new pipeline announcement between Ottawa, Alberta, and British Columbia that seems to be inclined to provide more oil to the rest of the world. 90% currently goes to the U.S. and if you want diversification, you need a pipeline. So, from that standpoint, it's positive news in terms of diversification and note that from a trade balance perspective, it will help support the Canadian dollar. So again, there's upside potential here for oil production in Canada. And if you want to become an energy superpower, you know, it goes with that title. So again, I think that this is constructive from a trade diversification perspective, which the government actually is hoping for.`
- P `So, a lot of good news, Stéfane. So even though the microeconomic is very volatile, I mean, you've brought us a couple of very interesting news today. So, thank you for that.`
- P `Pleasure.`
- P `And for all of you, I hope that you will enjoy the summer and that you will take the time during your vacation to reflect on your situation and talk to your advisors. And we will see you again in August. So thank you. Thank you, Stéfane.`
- **H3** `5 • 4 • 3 Market Outlook`
- P `5 minutes, 4 graphs, 3 key takeaways! Discover a fresh focused quarterly review of markets, the economy and investments with expert Louis Lajoie from our CIO Office.`
- BUTTON `Video 5 4 3 Market Outlook Transcript`
- **H3** `Video 5 4 3 Market Outlook Transcript`
- P `Hello, everyone. Today, June 12, I⟦’⟧m going to briefly look back on the investment backdrop: what is reassuring, what is perhaps a bit concerning, and what we⟦’⟧re going to be monitoring going forward.`
- P `But before we do so, let⟦’⟧s just go back to where we were three months ago, at the time of the last webcast, which was just at the beginning of one of the worst energy crises in modern times. Back then, there were essentially two prevailing narratives: either oil prices were headed to $200 a barrel, in which case we would have a global recession, or there would be a swift resolution allowing prices to go back to where they were. What actually happened? Something in between, where in the absence of a resolution, oil markets, nonetheless, found somewhat of an equilibrium, thanks to greater usage of some pipelines, the fact that the respective blockades are slightly permeable, and, most importantly, the substantial use of global oil reserves, which, by definition, means that this balance is temporary. We⟦’⟧re going to have to see a greater pickup in maritime activity in the Persian Gulf very soon. But regardless, in any event, what has become clear now is that energy prices are not going to go back to their previous lows. They⟦’⟧re going to remain higher.`
- P `The good news is that we⟦’⟧re seeing this is not preventing equity markets from renewing with an upward trend, which has been the story in the second quarter, as you can see here. And this rebound in stock prices has not been driven entirely by hope. It⟦’⟧s actually been driven by substantial and sustained earnings growth around the world, with earnings growth actually stronger than the increase in stock prices since the beginning of the year. That is, in part, reflecting substantial earnings gains for a few stocks involved in semiconductor manufacturing, notably in emerging markets.`
- P `But globally speaking, it remains true that economic activity has remained rather positive, with, for instance, the U.S. Economic Surprise Index at its highest level since 2024. That is also good news. But it also raises questions about the future path of inflation, because we all know that inflation reacts with a lag to growth. We saw an extreme case of that in 2021 and then the inflation surge in 2022. That has not been the case in the last two years, most likely because, over that period, the labour market was much more balanced, and that remains the case for now. And so that is why this is a risk to us, not a view.`
- P `What⟦’⟧s clear, though, is that markets are going to be paying a lot of attention to what the U.S. Federal Reserve is about to do against this rather complex backdrop, especially since we are going to be facing, for the first time in eight years, a new Fed chair, Mr. Warsh. Just three months ago, markets thought that he would probably be able to cut rates slightly. But lately, markets have actually been discounting perhaps a few rate hikes going forward. We⟦’⟧ll have to see. But even if rate hikes actually do happen, in our mind, this is not necessarily a problem, in the sense that it is much better to have roughly neutral monetary policy than perhaps overly accommodative interest rates, which would only create a bigger inflation problem down the road. But if we were eventually to talk about restrictive monetary policy, that would be a different discussion. And that is the risk we⟦’⟧re going to be monitoring, but that is not the expectation as we speak.`
- P `Three takeaways for you today. Essentially, again, the worst has been avoided and is likely to continue to be avoided, even though we don⟦’⟧t expect perfect stability here in the Persian Gulf. That is why we⟦’⟧ll have to keep an eye on inflation, which is definitely not on track to go back to the 2% target, something we haven⟦’⟧t seen in just over five years now in the U.S. We⟦’⟧ll have to see how Mr. Warsh navigates all of this. But globally speaking, we don⟦’⟧t expect any massive changes in global trends, which are rather positive for equity markets, as we have seen. But we must remain vigilant here, because the fact of the matter is that the range of outcomes, the range of uncertainty, remains exceptionally large.`
- P `That⟦’⟧s it for today. Thank you for listening. We⟦’⟧ll talk again in September. Have a great summer, everyone.`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-quarterly-investment-strategy.jpg` — alt/title `A businessman, standing in a downtown area, smiling whilst looking at his phone.`
- **H3** `Week at a Glance`
- P `The experts at National Bank Financial give a detailed analysis on how the stock markets and fixed income markets have performed every week.`
- LINK `Read the latest version` → `/content/dam/fbngp/pdf/week-at-a-glance.pdf`
- **H2** `Finance in focus`
- IMAGE (DAM) `/content/dam/fbngp/img/oser-s-investir.jpg` — alt/title `Invest in you challenge featuring the ambassador Jessica Moorhouse.`
- LINK `Invest in you Challenge` → `https://www.nbc.ca/personal/switch-national-bank/women.html#video`
- P `Invest in you Challenge Watch these short videos and discover practical tips and tools that can help you succeed at every stage of your life as a woman.`
- IMAGE (DAM) `/content/dam/fbngp/microsites/edwards-knutson-wealth-advisors/page-content/img-publications-financieres-revues-de-marche-740x489.png` — alt/title `Two women sitting together looking at a laptop.`
- LINK `Thought leadership` → `https://www.nbc.ca/personal/advice/thought-leadership.html`
- P `Thought leadership Dive into articles and videos from our experts⟦NBSP⟧ that redefine the trends of the industry`
- IMAGE (DAM) `/content/dam/fbngp/img/img-publications-financieres-rapports-mensuels-740x489.png` — alt/title `A woman and man sitting at a desk looking at a large document together.`
- LINK `Savings and investments` → `https://www.nbc.ca/personal/savings-investments.html`
- P `Savings and investments Discover our investment options that will help you realize your projects or prepare for the unexpected`
- **H2** `Economic analysis`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-weekly-economic-watch-768x433.jpg` — alt/title `A woman sitting in her living room reviewing the financial offers and products.`
- **H3** `Weekly Economic Watch`
- P `This publication keeps you posted on a wide range of economic and financial indicators affecting the local, North American and global markets. It includes brief commentaries on economic and financial news items.`
- LINK `Read the latest version` → `/content/dam/bnc/taux-analyses/analyse-eco/weekly-economic-watch.pdf`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-monthly-vision.jpg` — alt/title `A couple sitting at their dining room table looking at a laptop together.`
- **H3** `Vision`
- P `Looking for reliable financial analysis? The Economics and Strategy Group provide a detailed report on interest rates, bonds, the stock market and portfolio strategy.`
- LINK `Read the latest version` → `/content/dam/fbngp/pdf/vision-monthly-economic-monitor.pdf`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-monthly-economic-monitor.jpg` — alt/title `A man sitting at a table writing in a notebook with a laptop in front of him.`
- **H3** `Monthly Economic Monitor`
- P `Explore a regional overview with our monthly monitors covering Canada, the United States and the world, each offering forecasts tailored to its area's economic outlook.`
- LINK `Read the latest versions` → `https://www.nbc.ca/about-us/news-media/financial-news/financial-analysis.html#economic`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-monthly-equity-monitor.jpg` — alt/title `A woman sitting at a desk overlooking a city, working on a tablet with two other computers behind.`
- **H3** `Monthly Equity Monitor`
- P `Experts from National Bank summarize the current state of stock markets globally in this monthly report.`
- LINK `Read the latest version` → `/content/dam/bnc/taux-analyses/analyse-eco/mensuel/monthly-equity-monitor.pdf`
- **H2** `Investment strategy`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-strategie-placement-en-767x433.jpg` — alt/title `Investment strategy brown glass building visual.`
- **H3** `Investment Strategy`
- P `This quarterly publication informs you of global economic conditions, asset allocation recommendations and economic forecasts.`
- LINK `Read the latest version` → `/content/dam/fbngp/pdf/doc-investment-strategy.pdf`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-asset-allocation-strategy.jpg` — alt/title `A person using a calculator at a desk with many documents on it.`
- **H3** `Asset Allocation Strategy`
- P `What⟦’⟧s moving in the financial market and how does that impact your investments? National Bank Investments provides a portfolio strategy across asset classes.`
- LINK `Read the latest version` → `/content/dam/bni/publication/asset-allocation-strategy.pdf`
- **H2** `Federal and provincial budgets⟦NBSP⟧`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-federal-budget.jpg` — alt/title `The Canadian flag flowing at sunset representing the federal budget.`
- **H3** `Federal Budget`
- P `Learn how the Canadian Government plans to execute the annual economic agenda in this year's federal budget.`
- LINK `Consult the budget` → `/content/dam/bnc/taux-analyses/analyse-eco/budget/federal-budget.pdf`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-provincial-budget.jpg` — alt/title `Three people sitting at a table reviewing their client's investment documents.`
- **H3** `Quebec Budget`
- P `Our experts examine your province's budget and the financial updates related to it.`
- LINK `Consult the budget` → `/content/dam/bnc/taux-analyses/analyse-eco/budget/quebec-budget.pdf`
- **H2** `Guides and tools`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-articles/en/img-news-articles-investing-guide.jpg` — alt/title `Investing Guide - essential advice for your financial health.`
- **H3** `Investing Guide`
- P `This reference guide contains a wealth of practical information and tools to help you plan your projects. Download it to your desktop to enjoy all the features.`
- LINK `Download your guide` → `/content/dam/fbngp/pdf/nbfwm-investing-guide.pdf`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-articles/en/tax-guide-quebec-2025.jpg` — alt/title `Tax and investment guide - two young persons in from of a laptop.`
- **H3** `Tax and Investment Guide`
- P `Find everything you will need to successfully file your taxes in our comprehensive tax and investment guide.`
- LINK `Guide for Quebec` → `/content/dam/fbngp/pdf/tax-guide-qc-nbfwm.pdf`
- IMAGE (DAM) `/content/dam/fbngp/img/img-article-quarterly-flip-book-v2-en.jpg` — alt/title `Myths and realities by National Bank Investments.`
- **H3** `Facts & Fiction`
- P `Looking for reliable financial analysis? The CIO Office of National Bank Investments provides a detailed report on interest rates, bonds, the stock market and portfolio strategy.`
- LINK `Read the latest version` → `/content/dam/bni/publication/facts-fiction.pdf`
- IMAGE (DAM) `/content/dam/fbngp/microsites/images-articles/en/quick-facts.jpg` — alt/title `Graphic elements in different colors and text in red saying quick facts.`
- **H3** `Quick Facts`
- P `Find the amounts of the different government plans (CPP, QPP, OAS), the TFSA, RRSP and RESP contribution limits, and the link to the different tax tables.`
- LINK `Read the latest version` → `/content/dam/bnc/a-propos-de-nous/nouvelles-medias/info/quick-facts-nb-letter.pdf`
- **H2** `Fraud prevention`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-protection-identity.png` — alt/title `A person and a shield to represent fraud protection at the bank.`
- P `Find out how to protect yourself against fraud.`
- LINK `Read our tips` → `https://www.nbc.ca/abcs-of-security/fraud.html`
- P `Read our tips`
- **H3** `Contact us`
- P `Get contact information for our team members and find out where our offices are.`
- P `⟦NBSP⟧`
- LINK `See our contact details` → `/advisor/wolf-archard-group/contact-us.html`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png` — alt/title `Phone picto`
- LINK `514-395-1937` → `tel:+15143951937`
- P `514-395-1937`
- LINK `514-412-0370` → `tel:+15144120370`
- P `514-412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png` — alt/title `Email picto`
- LINK `laurent.achard@nbc.ca` → `mailto:laurent.achard@nbc.ca`
- P `laurent.achard@nbc.ca`
- LINK `davidalexandre.wolf@nbc.ca` → `mailto:davidalexandre.wolf@nbc.ca`
- P `davidalexandre.wolf@nbc.ca`

**`<sup>` markers on this page:** *none*

---

## 6. Notre firme / Our Firm

### 6.1 FRENCH — `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-firme.html`

Capture: `source-assets/html/fr-notre-firme.html` · 64,413 bytes

**Head metadata**

- `<html lang>` `fr`
- `<title>` `Notre firme | Financière Banque Nationale - Gestion de patrimoine`
- `meta[name=description]` `Travailler avec la Financière Banque Nationale - Gestion de patrimoine, c⟦’⟧est profiter d⟦’⟧un solide réseau d⟦’⟧experts et d⟦’⟧une grande variété de ressources.`
- `og:title` `Notre firme | Financière Banque Nationale - Gestion de patrimoine`
- `og:description` `Travailler avec la Financière Banque Nationale - Gestion de patrimoine, c⟦’⟧est profiter d⟦’⟧un solide réseau d⟦’⟧experts et d⟦’⟧une grande variété de ressources.`
- `og:url` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-firme.html`
- `og:image` `https://www.fbngp.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-firme.html`
- `meta[name=template]` `microsites-header-footer-reference1`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-firme.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-firme.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-firm.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-firm.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-firm.html`

**Body, in document order**

- **H1** `À propos`
- P `Financière Banque Nationale – Gestion de patrimoine`
- **H2** `Le partenaire financier des familles canadiennes`
- P `Depuis 1902, nous tissons des liens durables avec les familles canadiennes.⟦NBSP⟧La mission de la FBNGP est d'accompagner nos clients dans la gestion de leur patrimoine de génération en génération. Notre réseau compte près de 850⟦NBSP⟧conseillers en gestion de patrimoine dans 100 succursales distribuées entre Victoria et Halifax.`
- P `Grâce à ce riche héritage, nos experts vous offrent un service hautement personnalisé pour que vos objectifs de vie deviennent réalité.`
- **H2** `Un puissant allié`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn_revenu_par_annee.svg` — alt/title `Picto Employé Banque Nationale`
- P `1 G$ de revenus⟦NBSP⟧par année`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn_part_canada.svg` — alt/title `Picto Ampoule et signe de dollar`
- P `Plus de⟦NBSP⟧200 G$ d⟦’⟧actifs sous gestion`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn_part_de_marche.svg` — alt/title `Picto Part de marché`
- P `29 %⟦NBSP⟧Part de marché au Québec`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn_actif_sous_gestion.svg` — alt/title `Picto Porte-monnaie avec un logo de la Banque Nationale`
- P `9 %⟦NBSP⟧Part de marché au Canada`
- IMAGE (DAM) `/content/dam/fbngp/img/img-microsites-humain-a-propos-2-474x464.png` — alt/title `Deux femmes discutent en marchant dans un corridor dans un bureau.`
- **H2** `Suivez l'actualité financière`
- LINK `publications financières` → `/documentation/publications-financieres.html`
- P `Restez informés de l'actualité économique grâce aux⟦NBSP⟧publications financières⟦NBSP⟧de nos équipes d'experts. Fiables et reconnues, elles vous aideront à atteindre vos objectifs financiers et à faire des choix avisés.⟦NBSP⟧`
- LINK `publication trimestrielle` → `/content/dam/fbngp/pdf/doc-strategie-placement.pdf`  — title=`FBNGP - Stratégie de placement`
- P `Pour obtenir de l⟦’⟧information claire et concise sur la conjoncture économique mondiale, consultez notre publication trimestrielle⟦NBSP⟧de stratégie de placement.`
- **H2** `À propos de la Banque Nationale`
- **H3** `L'une des institutions financières les plus importantes au Canada`
- LINK `bnc.ca` → `http://bnc.ca/`
- LINK `salle de presse` → `https://www.bnc.ca/fr/a-propos-de-nous/nouvelles/salle-de-presse.html`
- P `Nous bénéficions de l⟦’⟧excellente réputation de notre société mère. Avec un actif de 424 milliards de dollars au 31 octobre 2023, la Banque Nationale du Canada, avec ses filiales, est l⟦’⟧un des plus importants groupes financiers intégrés canadiens. Elle compte plus de 31⟦NBSP⟧243 employés dans des fonctions à contenu élevé de savoir, et a été maintes fois primée pour ses qualités d⟦’⟧employeur et son engagement à l⟦’⟧égard de la diversité. Ses titres sont cotés à la Bourse de Toronto (TSX : NA).⟦NBSP⟧Suivez ses activités sur⟦NBSP⟧bnc.ca, sa⟦NBSP⟧salle de presse⟦NBSP⟧ou par l⟦’⟧entremise de réseaux sociaux comme⟦NBSP⟧Facebook, LinkedIn et Twitter.`
- IMAGE (DAM) `/content/dam/fbngp/img/img-microsites-aspirationnel-a-propos-1-474x464.png` — alt/title `Un lac d⟦’⟧un bleu clair encerclé de montagnes.`
- BUTTON `Petits détails pour tout savoir`
- **H3** `Petits détails pour tout savoir`
- P `*Financière Banque Nationale - Gestion de patrimoine est classée au 5e rang chez les courtiers de plein exercice canadiens en termes d'actifs sous gestion, selon Investor Economics (mars 2019).`
- **H3** `Contactez-nous`
- P `Obtenez les coordonnées des membres de notre équipe et voyez où se trouvent nos bureaux.`
- P `⟦NBSP⟧`
- LINK `Voir nos coordonnées` → `/conseiller/groupe-wolf-achard/nous-joindre.html`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png` — alt/title `Picto téléphone`
- LINK `514 395-1937` → `tel:+15143951937`
- P `514 395-1937`
- LINK `514 412-0370` → `tel:+15144120370`
- P `514 412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png` — alt/title `Picto courriel`
- LINK `laurent.achard@bnc.ca` → `mailto:laurent.achard@bnc.ca`
- P `laurent.achard@bnc.ca`
- LINK `davidalexandre.wolf@bnc.ca` → `mailto:davidalexandre.wolf@bnc.ca`
- P `davidalexandre.wolf@bnc.ca`

**`<sup>` markers on this page:** *none*

### 6.2 ENGLISH — `https://www.nbfwm.ca/advisor/wolf-archard-group/our-firm.html`

Capture: `source-assets/html/en-our-firm.html` · 62,025 bytes

**Head metadata**

- `<html lang>` `en`
- `<title>` `Our Firm | National Bank Financial - Wealth Management`
- `meta[name=description]` `Doing business with National Bank Financial - Wealth Management means having access to a wide range of resources and a strong network of experts.`
- `og:title` `Our Firm | National Bank Financial - Wealth Management`
- `og:description` `Doing business with National Bank Financial - Wealth Management means having access to a wide range of resources and a strong network of experts.`
- `og:url` `https://www.nbfwm.ca/advisor/wolf-archard-group/our-firm.html`
- `og:image` `https://www.nbfwm.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.nbfwm.ca/advisor/wolf-archard-group/our-firm.html`
- `meta[name=template]` `microsites-header-footer-reference`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-firme.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-firme.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-firm.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-firm.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-firm.html`

**Body, in document order**

- **H1** `About us`
- P `National Bank Financial - Wealth Management`
- **H2** `A financial partner for Canadian families`
- P `Since 1902, we⟦NBSP⟧have⟦NBSP⟧been building lasting relationships with Canadian families.⟦NBSP⟧NBFWM⟦’⟧s mission is to help our clients manage their wealth from generation to generation. Our network includes⟦NBSP⟧over 850 wealth advisors at 100 branches across Canada—from Victoria to Halifax.`
- P `Our experts offer personalized service to help you realize your life goals.`
- **H2** `A⟦NBSP⟧strong⟦NBSP⟧partner`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn_revenu_par_annee.svg` — alt/title `National Bank employee picto`
- P `$1 billion in revenue⟦NBSP⟧per year`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn_part_canada.svg` — alt/title `Bulb and dollar sign picto`
- P `More than⟦NNBSP⟧$200 billion in assets under management`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn_part_de_marche.svg` — alt/title `Market share picto`
- P `29% Market share in Quebec`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn_actif_sous_gestion.svg` — alt/title `Wallet with a National Bank logo picto`
- P `9% Market share in Canada`
- IMAGE (DAM) `/content/dam/fbngp/img/img-microsites-humain-a-propos-2-474x464.png` — alt/title `Two women are talking as they walk down a corridor in an office.`
- **H2** `Keep up with financial news`
- LINK `economic news` → `/documentation/financial-publications.html`
- P `Read articles written by our experts for the latest economic news. Our reliable, well-respected publications will help you achieve your financial goals and make informed choices.`
- LINK `quarterly investment strategy publication` → `/content/dam/fbngp/pdf/doc-investment-strategy.pdf`  — title=`NBFWM - Investment Strategy`
- P `For clear and concise information on the state of the global economy, see our quarterly investment strategy publication.`
- **H2** `About National Bank of Canada`
- **H3** `One of Canada's leading financial institutions`
- LINK `nbc.ca` → `http://nbc.ca/`
- LINK `News Room` → `https://www.nbc.ca/about-us/news-media.html`
- P `We build on the outstanding reputation of our parent company.⟦NBSP⟧With $424⟦NNBSP⟧billion in⟦NBSP⟧assets as at October 31, 2023, National Bank of Canada, together with its subsidiaries, forms one of Canada's leading integrated financial services groups. It has more than 31,243⟦NNBSP⟧employees in knowledge-intensive positions and has been recognized numerous times as a top employer and for its commitment to diversity. Its securities are listed on the Toronto Stock Exchange (TSX: NA). Follow the Bank's activities at⟦NBSP⟧nbc.ca, through⟦NBSP⟧our⟦NBSP⟧News Room⟦NBSP⟧or via social media such as Facebook, LinkedIn and Twitter.`
- IMAGE (DAM) `/content/dam/fbngp/img/img-microsites-aspirationnel-a-propos-1-474x464.png` — alt/title `A light blue lake surrounded by mountains.`
- **H3** `Contact us`
- P `Get contact information for our team members and find out where our offices are.`
- P `⟦NBSP⟧`
- LINK `See Our Contact Details` → `/advisor/wolf-archard-group/contact-us.html`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-telephone-rouge-80x80.png` — alt/title `Phone picto`
- LINK `514-395-1937` → `tel:+15143951937`
- P `514-395-1937`
- LINK `514-412-0370` → `tel:+15144120370`
- P `514-412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-80x80.png` — alt/title `Email picto`
- LINK `laurent.achard@nbc.ca` → `mailto:laurent.achard@nbc.ca`
- P `laurent.achard@nbc.ca`
- LINK `davidalexandre.wolf@nbc.ca` → `mailto:davidalexandre.wolf@nbc.ca`
- P `davidalexandre.wolf@nbc.ca`

**`<sup>` markers on this page:** *none*

---

## 7. Nous joindre / Contact us

### 7.1 FRENCH — `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nous-joindre.html`

Capture: `source-assets/html/fr-nous-joindre.html` · 64,585 bytes

**Head metadata**

- `<html lang>` `fr`
- `<title>` `Nous Joindre | Équipe Groupe Wolf Achard | Financière Banque Nationale - Gestion de patrimoine`
- `meta[name=description]` `Notre équipe de spécialistes est là pour vous. Contactez-nous dès aujourd'hui pour trouver réponse à toutes vos questions financières!`
- `og:title` `Nous Joindre | Équipe Groupe Wolf Achard | Financière Banque Nationale - Gestion de patrimoine`
- `og:description` `Notre équipe de spécialistes est là pour vous. Contactez-nous dès aujourd'hui pour trouver réponse à toutes vos questions financières!`
- `og:url` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nous-joindre.html`
- `og:image` `https://www.fbngp.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nous-joindre.html`
- `meta[name=template]` `contact-microsite`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nous-joindre.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nous-joindre.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/contact-us.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/contact-us.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/contact-us.html`

**Body, in document order**

- **H1** `Nous joindre`
- P `Contactez nos experts pour trouver réponse à vos questions`
- **H2** `Nous sommes à votre écoute`
- P `Notre équipe de spécialistes est là pour répondre à vos besoins.`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-contact-appel-46x43.png` — alt/title `Picto nous joindre par téléphone`
- LINK `514 395-1937` → `tel:+15143951937`
- P `514 395-1937`
- LINK `514 412-0370` → `tel:+15144120370`
- P `514 412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-contact-localisation-31x44.png` — alt/title `Picto adresse`
- P `1 Place Ville-Marie, Bureau 1700, Montréal (Québec) H3B 2C1`
- LINK `Heures d'ouverture` → `https://localisateur.bnc.ca/financiere-banque-nationale/qc/montreal/1-place-ville-marie`
- P `Heures d'ouverture`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-40x40.png` — alt/title `Picto nous joindre par courriel`
- LINK `laurent.achard@bnc.ca` → `mailto:laurent.achard@bnc.ca`
- P `laurent.achard@bnc.ca`
- LINK `davidalexandre.wolf@bnc.ca` → `mailto:davidalexandre.wolf@bnc.ca`
- P `davidalexandre.wolf@bnc.ca`
- **H2** `Notre équipe d'experts`
- IMAGE (DAM) `/content/dam/fbngp/photo/photo-laurent-achard-montreal-350x330.png` — alt/title `Photo de Laurent Achard, Conseiller en gestion de patrimoin , membre de l'équipe expert.`
- LINK `Laurent Achard` → `/conseiller/groupe-wolf-achard/notre-equipe/laurent-achard.html`
- **H3** `Laurent Achard`
- **H4** `Conseiller en gestion de patrimoine⟦NBSP⟧`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-phone-conseillers-20x20.svg` — alt/title `Picto téléphone`
- LINK `514 395-1937` → `tel:+15143951937`
- P `514 395-1937`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-mail-conseillers-20x20.svg` — alt/title `Picto courriel`
- LINK `laurent.achard@bnc.ca` → `mailto:laurent.achard@bnc.ca`
- P `laurent.achard@bnc.ca`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-chat-conseillers-20x20.svg` — alt/title `Picto langues parlées`
- P `Français, anglais, italien`
- IMAGE (DAM) `/content/dam/fbngp/photo/photo-david-alexandre-groupe-wolf-achard-mtl-350x330.png` — alt/title `Photo de David Alexandre Wolf, Conseiller en gestion de patrimoine, membre de l'équipe expert.`
- LINK `David Alexandre Wolf` → `/conseiller/groupe-wolf-achard/notre-equipe/david-alexandre-wolf.html`
- **H3** `David Alexandre Wolf`
- **H4** `Conseiller en gestion de patrimoine⟦NBSP⟧`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-phone-conseillers-20x20.svg` — alt/title `Picto téléphone`
- LINK `514 412-0370` → `tel:+15144120370`
- P `514 412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-mail-conseillers-20x20.svg` — alt/title `Picto courriel`
- LINK `davidalexandre.wolf@bnc.ca` → `mailto:davidalexandre.wolf@bnc.ca`
- P `davidalexandre.wolf@bnc.ca`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-chat-conseillers-20x20.svg` — alt/title `Picto langues parlées`
- P `Français, anglais`

**`<sup>` markers on this page:** *none*

### 7.2 ENGLISH — `https://www.nbfwm.ca/advisor/wolf-archard-group/contact-us.html`

Capture: `source-assets/html/en-contact-us.html` · 64,352 bytes

**Head metadata**

- `<html lang>` `en`
- `<title>` `Contact us | Wolf Archard Group | National Bank Financial - Wealth Management`
- `meta[name=description]` `Our team of specialists is here for you. Contact us today to get answers to all your financial questions!`
- `og:title` `Contact us | Wolf Archard Group | National Bank Financial - Wealth Management`
- `og:description` `Our team of specialists is here for you. Contact us today to get answers to all your financial questions!`
- `og:url` `https://www.nbfwm.ca/advisor/wolf-archard-group/contact-us.html`
- `og:image` `https://www.nbfwm.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.nbfwm.ca/advisor/wolf-archard-group/contact-us.html`
- `meta[name=template]` `contact-microsite1`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nous-joindre.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/nous-joindre.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/contact-us.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/contact-us.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/contact-us.html`

**Body, in document order**

- **H1** `Contact us`
- P `Need answers? Contact us!`
- **H2** `We⟦NBSP⟧are⟦NBSP⟧here to help`
- P `Our team of specialists is here to meet your needs.`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-contact-appel-46x43.png` — alt/title `Call us picto`
- LINK `514-395-1937` → `tel:+15143951937`
- P `514-395-1937`
- LINK `514-412-0370` → `tel:+15144120370`
- P `514-412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-contact-localisation-31x44.png` — alt/title `Adress picto `
- P `1, Place Ville-Marie⟦NBSP⟧Suite 1700`
- P `Montreal⟦NBSP⟧QC⟦NBSP⟧H3B 2C1`
- LINK `Business hours` → `https://locator.nbc.ca/national-bank-financial/qc/montreal/1-place-ville-marie`
- P `Business hours`
- IMAGE (DAM) `/content/dam/fbngp/picto/picto-courriel-rouge-40x40.png` — alt/title `Email us picto`
- LINK `laurent.achard@nbc.ca` → `mailto:laurent.achard@nbc.ca`
- P `laurent.achard@nbc.ca`
- LINK `davidalexandre.wolf@nbc.ca` → `mailto:davidalexandre.wolf@nbc.ca`
- P `davidalexandre.wolf@nbc.ca`
- **H2** `Our team of experts`
- IMAGE (DAM) `/content/dam/fbngp/photo/photo-laurent-achard-montreal-350x330.png` — alt/title `Photo of  Laurent Achard, Wealth Advisor, member of the team of experts. `
- LINK `Laurent Achard` → `/advisor/wolf-archard-group/our-team/laurent-achard.html`
- **H3** `Laurent Achard`
- **H4** `Wealth Advisor`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-phone-conseillers-20x20.svg` — alt/title `Phone picto`
- LINK `514-395-1937` → `tel:+15143951937`
- P `514-395-1937`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-mail-conseillers-20x20.svg` — alt/title `Email picto`
- LINK `laurent.achard@nbc.ca` → `mailto:laurent.achard@nbc.ca`
- P `laurent.achard@nbc.ca`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-chat-conseillers-20x20.svg` — alt/title `Speech bubble picto`
- P `English`
- IMAGE (DAM) `/content/dam/fbngp/photo/photo-david-alexandre-groupe-wolf-achard-mtl-350x330.png` — alt/title `Photo of David Alexandre Wolf, Wealth Advisor, member of the team of experts. `
- LINK `David Alexandre Wolf` → `/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html`
- **H3** `David Alexandre Wolf`
- **H4** `Wealth Advisor`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-phone-conseillers-20x20.svg` — alt/title `Phone picto`
- LINK `514-412-0370` → `tel:+15144120370`
- P `514-412-0370`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-mail-conseillers-20x20.svg` — alt/title `Email picto`
- LINK `davidalexandre.wolf@nbc.ca` → `mailto:davidalexandre.wolf@nbc.ca`
- P `davidalexandre.wolf@nbc.ca`
- IMAGE (DAM) `/content/dam/fbngp/picto/icn-chat-conseillers-20x20.svg` — alt/title `Speech bubble picto`
- P `English`

**`<sup>` markers on this page:** *none*

---

## 8. Advisor profile — Laurent Achard

### 8.1 FRENCH — `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/laurent-achard.html`

Capture: `source-assets/html/fr-laurent-achard.html` · 57,453 bytes

**Head metadata**

- `<html lang>` `fr`
- `<title>` `Laurent Achard , Conseiller en gestion de patrimoine | Financière Banque Nationale - Gestion de patrimoine`
- `meta[name=description]` `Laurent Achard , Conseiller en gestion de patrimoine à la Financière Banque Nationale. Découvrez une gamme complète de solutions pour planifier vos projets et gérer votre patrimoine.`
- `og:title` `Laurent Achard , Conseiller en gestion de patrimoine | Financière Banque Nationale - Gestion de patrimoine`
- `og:description` `Laurent Achard , Conseiller en gestion de patrimoine à la Financière Banque Nationale. Découvrez une gamme complète de solutions pour planifier vos projets et gérer votre patrimoine.`
- `og:url` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/laurent-achard.html`
- `og:image` `https://www.fbngp.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/laurent-achard.html`
- `meta[name=template]` `fiche-conseillers-placement-template`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/laurent-achard.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/laurent-achard.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/laurent-achard.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/laurent-achard.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/laurent-achard.html`

**Body, in document order**

- **H1** `Laurent Achard`
- **H3** `Conseiller en gestion de patrimoine`
- LINK `514 395-1937` → `tel:514-395-1937`
- P `514 395-1937`
- LINK `laurent.achard@bnc.ca` → `mailto:laurent.achard@bnc.ca`
- LINK `Voir le site Web` → `https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`
- LINK `1 Place Ville-Marie, Bureau 1700, Montréal (Québec) H3B 2C1` → `https://localisateur.bnc.ca/financiere-banque-nationale/qc/montreal/1-place-ville-marie`
- P `Français, Anglais, Italien`

**`<sup>` markers on this page:** *none*

### 8.2 ENGLISH — `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/laurent-achard.html`

Capture: `source-assets/html/en-laurent-achard.html` · 56,326 bytes

**Head metadata**

- `<html lang>` `en`
- `<title>` `Laurent Achard , Wealth Advisor | National Bank Financial - Wealth Management`
- `meta[name=description]` `Laurent Achard , Wealth Advisor at National Bank Financial. Discover a complete range of solutions to plan your projects and manage your assets.`
- `og:title` `Laurent Achard , Wealth Advisor | National Bank Financial - Wealth Management`
- `og:description` `Laurent Achard , Wealth Advisor at National Bank Financial. Discover a complete range of solutions to plan your projects and manage your assets.`
- `og:url` `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/laurent-achard.html`
- `og:image` `https://www.nbfwm.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/laurent-achard.html`
- `meta[name=template]` `fiche-conseillers-placement-template`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/laurent-achard.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/laurent-achard.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/laurent-achard.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/laurent-achard.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/laurent-achard.html`

**Body, in document order**

- **H1** `Laurent Achard`
- **H3** `Wealth Advisor`
- LINK `514-395-1937` → `tel:514-395-1937`
- P `514-395-1937`
- LINK `laurent.achard@nbc.ca` → `mailto:laurent.achard@nbc.ca`
- LINK `View website` → `https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`
- LINK `1 Place Ville-Marie, Suite 1700, Montreal, Quebec, H3B 2C1` → `https://locator.nbc.ca/national-bank-financial/qc/montreal/1-place-ville-marie`
- P `French, English, Italian`

**`<sup>` markers on this page:** *none*

---

## 9. Advisor profile — David Alexandre Wolf

### 9.1 FRENCH — `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/david-alexandre-wolf.html`

Capture: `source-assets/html/fr-david-alexandre-wolf.html` · 57,393 bytes

**Head metadata**

- `<html lang>` `fr`
- `<title>` `David Alexandre Wolf, Conseiller en gestion de patrimoine  | Financière Banque Nationale - Gestion de patrimoine`
- `meta[name=description]` `David Alexandre Wolf, Conseiller en gestion de patrimoine  à la Financière Banque Nationale. Découvrez une gamme complète de solutions pour planifier vos projets et gérer votre patrimoine.`
- `og:title` `David Alexandre Wolf, Conseiller en gestion de patrimoine  | Financière Banque Nationale - Gestion de patrimoine`
- `og:description` `David Alexandre Wolf, Conseiller en gestion de patrimoine  à la Financière Banque Nationale. Découvrez une gamme complète de solutions pour planifier vos projets et gérer votre patrimoine.`
- `og:url` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/david-alexandre-wolf.html`
- `og:image` `https://www.fbngp.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/david-alexandre-wolf.html`
- `meta[name=template]` `fiche-conseillers-placement-template`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/david-alexandre-wolf.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/david-alexandre-wolf.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html`

**Body, in document order**

- **H1** `David Alexandre Wolf`
- **H3** `Conseiller en gestion de patrimoine`
- LINK `514 412-0370` → `tel:514-412-0370`
- P `514 412-0370`
- LINK `davidalexandre.wolf@bnc.ca` → `mailto:davidalexandre.wolf@bnc.ca`
- LINK `Voir le site Web` → `https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`
- LINK `1 Place Ville-Marie, Bureau 1700, Montréal (Québec) H3B 2C1` → `https://localisateur.bnc.ca/financiere-banque-nationale/qc/montreal/1-place-ville-marie`
- P `Anglais, Français`

**`<sup>` markers on this page:** *none*

### 9.2 ENGLISH — `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html`

Capture: `source-assets/html/en-david-alexandre-wolf.html` · 56,259 bytes

**Head metadata**

- `<html lang>` `en`
- `<title>` `David Alexandre Wolf, Wealth Advisor | National Bank Financial - Wealth Management`
- `meta[name=description]` `David Alexandre Wolf, Wealth Advisor at National Bank Financial. Discover a complete range of solutions to plan your projects and manage your assets.`
- `og:title` `David Alexandre Wolf, Wealth Advisor | National Bank Financial - Wealth Management`
- `og:description` `David Alexandre Wolf, Wealth Advisor at National Bank Financial. Discover a complete range of solutions to plan your projects and manage your assets.`
- `og:url` `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html`
- `og:image` `https://www.nbfwm.ca/content/dam/global/logo/bnc-logo.png`
- `link[rel=canonical]` `https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html`
- `meta[name=template]` `fiche-conseillers-placement-template`
- `hreflang`: `fr → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/david-alexandre-wolf.html` · `fr-ca → https://www.fbngp.ca/conseiller/groupe-wolf-achard/notre-equipe/david-alexandre-wolf.html` · `en → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html` · `en-ca → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html` · `x-default → https://www.nbfwm.ca/advisor/wolf-archard-group/our-team/david-alexandre-wolf.html`

**Body, in document order**

- **H1** `David Alexandre Wolf`
- **H3** `Wealth Advisor`
- LINK `514-412-0370` → `tel:514-412-0370`
- P `514-412-0370`
- LINK `davidalexandre.wolf@nbc.ca` → `mailto:davidalexandre.wolf@nbc.ca`
- LINK `View website` → `https://www.fbngp.ca/conseiller/groupe-wolf-achard.html`
- LINK `1 Place Ville-Marie, Suite 1700, Montreal, Quebec, H3B 2C1` → `https://locator.nbc.ca/national-bank-financial/qc/montreal/1-place-ville-marie`
- P `English, French`

**`<sup>` markers on this page:** *none*

---

## 10. Appendix A — footnote-marker discipline, page by page

Every `<sup>` element on each page, and whether that page renders the
`Notes légales` / `Legal Disclaimers` accordion those markers point at.

| Page | `<sup>` markers, in document order | Legal accordion on page? | Verdict |
|---|---|---|---|
| `fr-home` | *none* | no | Consistent — no markers, no accordion. |
| `fr-notre-equipe` | `2` · `1` | no | **ORPHAN** — markers 1 and 2, no accordion anywhere on the page. |
| `fr-nos-services` | `⟦NBSP⟧1, 2, 3` | YES — `Notes légales`, accordion item 8 of 8 | Markers resolve. Disclaimers **4 and 5 are never cited** by any marker. |
| `fr-nouvelles-articles` | *none* | no | Consistent — no markers, no accordion. |
| `fr-notre-firme` | *none* | no | Consistent — no markers, no accordion. |
| `fr-nous-joindre` | *none* | no | Consistent — no markers, no accordion. |
| `fr-laurent-achard` | *none* | no | Consistent — no markers, no accordion. |
| `fr-david-alexandre-wolf` | *none* | no | Consistent — no markers, no accordion. |
| `en-home` | *none* | no | Consistent — no markers, no accordion. |
| `en-our-team` | `2` · `1` | no | **ORPHAN** — markers 1 and 2, no accordion anywhere on the page. |
| `en-our-services` | `1, 2, 3` · `⟦NBSP⟧1` · `2` · `2` · `3` | YES — `Legal Disclaimers`, accordion item 8 of 8 | Markers resolve. Markers `1` and `2` are each used twice; disclaimers **4 and 5 are never cited**; Banking solutions and Philanthropy carry no marker. A **sixth** reference exists as a literal U+2081 SUBSCRIPT ONE, not a `<sup>` — see report. |
| `en-news-articles` | *none* | no | Consistent — no markers, no accordion. |
| `en-our-firm` | *none* | no | Consistent — no markers, no accordion. |
| `en-contact-us` | *none* | no | Consistent — no markers, no accordion. |
| `en-laurent-achard` | *none* | no | Consistent — no markers, no accordion. |
| `en-david-alexandre-wolf` | *none* | no | Consistent — no markers, no accordion. |

> The French `notre-firme` page carries a different kind of orphan: its accordion
> `Petits détails pour tout savoir` opens with a leading `*` marker, but no `*` appears
> anywhere else on the page. The English `our-firm` page has neither the accordion nor
> the ranking claim it discloses.

---

## 11. Appendix B — the five numbered legal disclaimers, verbatim

Rendered only inside the services-page accordion, in this order. Reproduce exactly.

### FRENCH — accordion title `Notes légales`, rendered as `<h2>`

1. `Les planificateurs financiers sont autorisés à agir dans la discipline de planification financière. Ils exercent leurs activités pour le compte de la Financière Banque Nationale inc., cabinet en planification financière.`

2. `Nous travaillons en étroite collaboration avec l⟦’⟧équipe fiscalité, retraite et succession de Banque Nationale Trust, composée d⟦’⟧experts multidisciplinaires dont les connaissances et les conseils viennent compléter notre offre de services. Ces experts nous accompagnent pour fournir les meilleures solutions pour vos finances personnelles liées à la fiscalité, à la retraite ainsi qu'à la succession.`

3. `Les produits et services d'assurance sont fournis par le Cabinet d'assurance Banque Nationale inc. (CABN) ou les Services Financiers FBN (SFFBN), selon le cas. CABN et SFFBN ne sont pas membres du Fonds canadien de protection des investisseurs (FCPI). Les produits d'assurance ne sont pas protégés par le FCPI.`

4. `Les solutions de financement sont octroyées sous réserve de l'approbation de crédit de la Banque Nationale.`

5. `Pour tous les détails et conditions de l⟦’⟧offre, communiquez avec votre conseiller.`

### ENGLISH — accordion title `Legal Disclaimers`, rendered as `<h3>`

1. `Financial Planners are authorized to act in the field of Financial Planning. They exercise their duties for National Bank Financial Inc., a financial planning firm.`

2. `We work closely with the Taxation, Retirement and Estate Planning Team from National Bank Trust, made up of multidisciplinary experts who provide knowledge and advice that complement our service offering. These experts assist us in providing the best solutions for your personal finances related to taxation, retirement and estate planning.`

3. `Insurance products and services are provided by National Bank Insurance Firm (NBIF) or by NBF Financial Services (NBFFS), as applicable. NBIF and NBFFS are not members of Canadian Investor Protection Fund (CIPF). Insurance products are not protected by CIPF.`

4. `Financing solutions are subject to credit approval by National bank.`

5. `For details and conditions of the offer, please contact your advisor.`

---

## 12. Appendix C — accordion components per page

| Page | Accordion items |
|---|---|
| `fr-home` | *none* |
| `fr-notre-equipe` | `Biographie` (Lysane Tougas) · `Biographie` (Jean-Francois Gobeil) |
| `fr-nos-services` | `Gestion de portefeuille` · `Planification financière` · `Planification fiscale` · `Planification successorale` · `Assurances` · `Solutions bancaires` · `Philanthropie` · `Notes légales` |
| `fr-nouvelles-articles` | `Vidéo Impact économique transcription` · `5 • 4 • 3 Perspectives de marché transcription` |
| `fr-notre-firme` | `Petits détails pour tout savoir` |
| `fr-nous-joindre` | *none* |
| `fr-laurent-achard` | *none* |
| `fr-david-alexandre-wolf` | *none* |
| `en-home` | *none* |
| `en-our-team` | *none* — **the English team page carries no biographies at all** |
| `en-our-services` | `Portfolio management` · `Financial planning` · `Estate planning` · `Tax planning` · `Insurance` · `Banking solutions` · `Philanthropy` · `Legal Disclaimers` |
| `en-news-articles` | `Video Economic Impact Transcript` · `Video 5 4 3 Market Outlook Transcript` |
| `en-our-firm` | *none* — **no English equivalent of the French ranking footnote** |
| `en-contact-us` | *none* |
| `en-laurent-achard` | *none* |
| `en-david-alexandre-wolf` | *none* |

> **Accordion order differs between languages on the services page.** French runs
> *fiscale* (tax) third and *successorale* (estate) fourth; English runs *Estate*
> third and *Tax* fourth. The two services pages are not translations of one
> another — see the archive report for the full structural divergence.

