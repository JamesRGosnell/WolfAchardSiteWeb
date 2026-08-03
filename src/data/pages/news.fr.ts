/**
 * FRENCH news page — `https://www.fbngp.ca/conseiller/groupe-wolf-achard/nouvelles-articles.html`
 * Capture: `source-assets/html/fr-nouvelles-articles.html` (156,376 bytes)
 *
 * ⚠ SYNDICATED. National Bank authored every string in this file and pushes it
 * to ~112 advisor microsites unchanged. Read `news.types.ts` before editing
 * anything here, and `references/nbf-platform.md` before editing a URL.
 *
 * GENERATED FROM THE CAPTURE, NOT RETYPED. Ordinary whitespace collapsed and
 * trimmed; U+00A0 and U+2019 preserved as LITERAL characters, because
 * `scripts/verbatim-sweep.mjs` reads this file's source text and cannot verify
 * an escaped no-break space. There are 3 literal U+00A0 below — in the
 * `Impact économique` blurb (two) and the `Stratégie de placement` blurb (one).
 * Never let a formatter or a "tidy whitespace" pass touch them.
 *
 * THINGS THAT LOOK LIKE MISTAKES AND ARE THE LIVE PAGE:
 *  · `votre sante financière` (`Guide investir` alt) is missing its accent.
 *  · The third `Actualités politiques de Trump` alt has a LEADING and a
 *    TRAILING ordinary space inside the attribute. Both ship.
 *  · The second Trump image carries a VALUELESS `alt` attribute — decorative,
 *    exactly like the hero banners. (Its `data-title` is a single space; the
 *    content inventory records that as the alt. The raw capture is the
 *    authority and the raw capture says `alt/>`.)
 *  · `Vision` and `Mythes et réalités` carry descriptions that are NOT
 *    identical — both are exactly 200 characters and they differ at index 58,
 *    `Le groupe économie` vs `Le groupe Économie`. They are two strings.
 *    DO NOT deduplicate them.
 *  · `Mythes et réalités` credits `Le groupe Économie et stratégie`; the
 *    English `Facts & Fiction` credits `The CIO Office of National Bank
 *    Investments` for the same publication pair. C-55 — flagged, not
 *    harmonised.
 *  · One card image is served from ANOTHER advisory team's DAM folder,
 *    `/microsites/edwards-knutson-wealth-advisors/`. N-13.
 *  · The `Le défi Oser s'investir` alt names ambassador `Kathy Marquis`; the
 *    English page names `Jessica Moorhouse`, and the two images genuinely show
 *    different women. C-54 — each language ships its own.
 *  · Two article links point at `bnc.ca` and one at `nbc.ca/fr/…` — the
 *    French page links an English-tree host for one of three cards. C-56 (whitelisted by
 *    COMPLIANCE N-09 — it is NBF's own French content on the nbc.ca host).
 *
 * F-14 IS APPLIED IN THIS FILE. THE CONTRADICTION WITH N-07 IS SETTLED.
 *
 * The live page hangs the file that DEPICTS
 * `GUIDE FISCAL 2025` on the `Flash info` card and the file that DEPICTS
 * `FLASH INFO 2026` on the `Guide fiscalité et investissement` card — so both
 * alt strings describe the picture that is not there. English pairs correctly.
 * The two `src` values are swapped back here; NOT ONE CHARACTER OF ALT TEXT
 * WAS TOUCHED, and each alt now names the publication actually shown.
 *
 * `content/COMPLIANCE.md` N-07 originally said the opposite — leave it crossed,
 * because the defect lives in NBF's fragment. It was RESOLVED on 2026-08-02 in
 * favour of the correction: see `content/COMPLIANCE.md` N-07 ("why the
 * disposition changed") and §6.4, which records F-14 as an applied
 * NON-EDITORIAL correction outside the §6 amendment gate — it exchanges two
 * `src` values and alters no word, no claim, no figure and nothing a reader or
 * a screen reader receives. §7 check 49 was amended to match, so the audit no
 * longer reads F-14 as an unauthorised fix. Nothing further is needed from
 * compliance. Reverting is still a two-value edit in this file.
 *
 * LANGUAGE PURITY (P-4): French artwork, French labels, `fbngp.ca`-tree links.
 */

import type { NewsContent } from './news.types';

/* ---------------------------------------------------------------- artwork --
 * Local copies of the ORIGINAL DAM masters (the `data-asset` file, not the
 * rendered `.coreimg.` rendition). Three basenames differ from the DAM — see
 * A-05; every other file keeps the name National Bank gave it.
 */
import img_ban_page_nouvelles_articles_groupe_wolf_achard_lg from '../../images/news/ban-page-nouvelles-articles-groupe-wolf-achard-lg.jpg';
import img_defi_oser_sinvestir_fr from '../../images/news/defi-oser-sinvestir-fr.jpg';
import img_flash_info from '../../images/news/flash-info.jpg';
import img_guide_fiscal_quebec_2025 from '../../images/news/guide-fiscal-quebec-2025.jpg';
import img_img_article_asset_allocation_strategy from '../../images/news/img-article-asset-allocation-strategy.jpg';
import img_img_article_federal_budget from '../../images/news/img-article-federal-budget.jpg';
import img_img_article_flip_book_trimestriel_v2_fr from '../../images/news/img-article-flip-book-trimestriel-v2-fr.jpg';
import img_img_article_july_article_fusions_acquisitions from '../../images/news/img-article-july-article-fusions-acquisitions.jpg';
import img_img_article_july_article_maximiser_son_patrimoine from '../../images/news/img-article-july-article-maximiser-son-patrimoine.jpg';
import img_img_article_july_article_pension_individuelle from '../../images/news/img-article-july-article-pension-individuelle.jpg';
import img_img_article_monthly_economic_monitor from '../../images/news/img-article-monthly-economic-monitor.jpg';
import img_img_article_monthly_equity_monitor from '../../images/news/img-article-monthly-equity-monitor.jpg';
import img_img_article_monthly_vision from '../../images/news/img-article-monthly-vision.jpg';
import img_img_article_provincial_budget from '../../images/news/img-article-provincial-budget.jpg';
import img_img_article_strategie_placement_fr_767x433 from '../../images/news/img-article-strategie-placement-fr-767x433.jpg';
import img_img_article_weekly_economic_watch_768x433 from '../../images/news/img-article-weekly-economic-watch-768x433.jpg';
import img_img_droit_de_douane_trump_767x433 from '../../images/news/img-droit-de-douane-trump-767x433.jpeg';
import img_img_nouvelles_articles_guide_investir from '../../images/news/img-nouvelles-articles-guide-investir.jpg';
import img_img_obbba_767x433 from '../../images/news/img-obbba-767x433.jpeg';
import img_img_projet_loi_899_767x433 from '../../images/news/img-projet-loi-899-767x433.png';
import img_img_publications_financieres_rapports_mensuels_740x489 from '../../images/news/img-publications-financieres-rapports-mensuels-740x489.png';
import img_img_publications_financieres_revues_de_marche_740x489 from '../../images/news/img-publications-financieres-revues-de-marche-740x489.jpg';
import img_picto_protection_identity from '../../images/news/picto-protection-identity.png';

/* The bank host serving THIS language's tree. Every publication path below is
 * the live root-relative path VERBATIM — only the origin is prepended, because
 * the rebuild does not live on www.fbngp.ca. S-04.
 *
 * NEVER pin a dated filename into one of these. Most resolve to a file
 * National Bank overwrites in place, which is the whole reason the labels
 * beside them promise the latest version. */
const FBNGP = 'https://www.fbngp.ca';

const content: NewsContent = {
  locale: 'fr',

  meta: {
    title: 'Nouvelles et articles',
    description: 'Suivez l\'actualité des marchés financiers et profitez de nos analyses pour mieux atteindre vos objectifs.',
  },

  hero: {
    heading: 'Nouvelles et articles',
    banner: {
      src: img_ban_page_nouvelles_articles_groupe_wolf_achard_lg,
      alt: '',
      widths: [767, 1199, 1600, 2000],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  labels: {
    pdf: 'PDF',
    video: 'Vidéo',
  },

  sections: [
    /* ------------------------------------------------------------------------
     * S-21 — SECTION ORDER. On the live page `Actualités politiques de Trump`
     * is the FIRST section under the H1; `Contenus en vedette` is the second.
     * Those two are swapped here, and nothing else on the page moves.
     *
     * Not a word, title, link, image or alt string is changed by the swap, and
     * reverting it is exchanging these two objects again.
     *
     * Three reasons, and the third is the one that decides it:
     *  1. It is the first thing a prospective client reads on a regulated
     *     advisor's site, and it is a named foreign politician.
     *  2. It is the only undated block on the page. Every other section is
     *     either evergreen or carries its own date; these three carry neither
     *     a date nor a "latest version" link.
     *  3. ⚠ IT IS THE ONE BLOCK WHERE THE TWO LANGUAGES TELL DIFFERENT
     *     STORIES. The English first card is titled `One Big Beautiful Bill
     *     Act | Canadian Concerns Removed`; the French one is
     *     `One Big Beautiful Bill Act (OBBBA) - Projet d'article 899` and says
     *     nothing about the concerns being removed. National Bank updated the
     *     English side and not the French. A block that is stale in one
     *     language and current in the other is the worst possible thing to
     *     open a page with — and neither title may be touched (P-14).
     *
     * The three cards keep their live order INSIDE the section: the DAM
     * filenames number them 228 (concerns removed) then 226 (after the Senate
     * bill), so the live order is newest-first and correct as it stands.
     * ---------------------------------------------------------------------- */
    {
      kind: 'documents',
      id: 'spotlight',
      heading: 'Contenus en vedette',
      items: [
        {
          image: { src: img_img_article_july_article_fusions_acquisitions, alt: 'Photo d’une spécialiste de la Banque Nationale qui échange avec ses clients sur des stratégies de fusions et d’acquisitions créatrices de valeur pour leur entreprise' },
          title: 'La rigueur commerciale dans les fusions et acquisitions : les meilleures pratiques pour créer de la valeur',
          href: 'https://www.nbc.ca/fr/article/fusions-acquisitions-rigueur-commerciale.html?cid=nti_5NBGJA8LTAX21671',
        },
        {
          image: { src: img_img_article_july_article_maximiser_son_patrimoine, alt: 'Une mère aide ses enfants à faire leurs devoirs à l’îlot de la cuisine.' },
          title: '8 conseils pour bien gérer votre patrimoine familial',
          href: 'https://www.bnc.ca/particuliers/conseils/impots-revenus/gerer-son-patrimoine-par-ou-commencer.html?cid=nti_DFMJWWP7ZXN21672',
        },
        {
          image: { src: img_img_article_july_article_pension_individuelle, alt: 'Une femme asiatique âgée travaille à domicile sur un ordinateur portable.' },
          title: 'Tout savoir sur le régime de retraite individuel',
          href: 'https://www.bnc.ca/particuliers/conseils/epargne-placements/comprendre-le-regime-de-retraite-individuel.html?cid=nti_MTJE0ZLNX7F21673',
        },
      ],
    },
    /* S-21 — was the FIRST section on the live page. Moved one place down;
       contents untouched. See the note at the top of `sections`. */
    {
      kind: 'documents',
      id: 'actualites-politiques',
      heading: 'Actualités politiques de Trump',
      note: 'pdf',
      items: [
        {
          image: { src: img_img_obbba_767x433, alt: 'Drapeau du Canada et des États-Unis ensemble' },
          title: 'One Big Beautiful Bill Act (OBBBA) - Projet d\'article 899',
          href: `${FBNGP}/content/dam/fbngp/pdf/228-fbn-corpo-pager-one-big-beautiful-bill-fr.pdf`,
        },
        {
          image: { src: img_img_projet_loi_899_767x433, alt: '' },
          title: 'Projet d’article 899 – Impacts potentiels sur les investisseurs canadiens',
          href: `${FBNGP}/content/dam/fbngp/pdf/226-fbn-corpo-pager-article-after-senate-bill-fr.pdf`,
        },
        {
          image: { src: img_img_droit_de_douane_trump_767x433, alt: ' Drapeau américain qui survole un navire de conteneurs portuaires. ' },
          title: 'Faire face ensemble aux tarifs douaniers – Notre engagement',
          href: `${FBNGP}/content/dam/fbngp/pdf/faire-face-ensemble-aux-tarifs-douaniers-notre-engagement.pdf`,
        },
      ],
    },
    {
      kind: 'videos',
      id: 'economic',
      heading: 'Actualités économiques',
      items: [
        {
          title: 'Impact économique',
          blurb: 'Afin de vous éclairer et de stimuler votre réflexion face au contexte actuel, Stéfane Marion et Nancy Paquet se penchent sur l’actualité économique et vous partagent leurs perspectives via nos vidéos informatives mensuelles.',
          watchHref: 'https://www.youtube-nocookie.com/embed/B4Vb-32oER8',
          watchLabel: 'Impact économique - Le dividende de paix s’estompe',
          more: { label: 'Visionnez les éditions précédentes', href: 'https://www.bnc.ca/particuliers/conseils/impact-economique.html' },
          transcript: {
            title: 'Vidéo Impact économique transcription',
            paragraphs: [
              'Bonjour à tous, nous sommes mercredi le 15 juillet 2026. Mon cher Stéfane, un plaisir de te recevoir. Alors dis donc, est-ce que le marché boursier commence à s\'essouffler ?',
              'Si je te présente le graphique Nancy, tu pourrais voir que il semblerait que oui. Donc le dernier sommet du marché boursier c\'est début juin donc on perçoit un certain essoufflement t\'as absolument raison.',
              'Aïe Aïe Aïe. Et donc ça c\'est lié entre autres à ce qui se passe macroéconomique bien entendu.',
              'Ouais donc il y a la canicule, puis en plus il fait plus chaud dans le détroit d\'Ormuz, ce qui fait en sorte que le prix de l\'énergie est en hausse. Puis remarque que au niveau du prix du baril de pétrole on est allé au-dessus de 100 $ sur le prix du Brent, mais là on a baissé beaucoup. Puis avec ce qui se passe dans le détroit d\'Ormuz, ça remonte de façon quand même importante au cours des dernières semaines.',
              'Tout à fait. Puis on voit déjà ce matin aussi là qu\'il y avait encore certains bombardements. Donc on n\'aura pas une réponse aujourd\'hui sur est-ce que ça va réouvrir ou pas ?',
              'La certitude qu\'on a c\'est que le détroit d\'Ormuz, nonobstant les dire des politiciens, mais il est pas ouvert. Puis ce que ça fait Nancy, c\'est que il y a un impact sur le prix du baril de pétrole. Mais il y a plus que ça dans le dernier mois parce qu\'il y a aussi une autre guerre qui se déroule ailleurs en Europe en particulier, où là il y a des destructions d\'infrastructures, de raffinerie de pétrole auxquelles on assiste, de sorte que ça a amené la Russie même à interdire les exportations de diesel autour au niveau mondial. Puis ça c\'est un fournisseur à peu près 11 %. Donc j\'ai le pétrole brut qui est impacté. Puis au niveau des produits raffinés, de la destruction des capacités de raffinage, elle est au niveau mondial présentement. Ce qui fait en sorte que les coûts de raffinage ont explosé à un niveau inédit. Nancy, on surpasse même ce qu\'on avait vu en 2022.',
              'Mon Dieu, alors c\'est sûr que ça a un impact à la pompe ?',
              'Ben c\'est ça, parce que là tu pourrais dire mais non mais là le pétrole il est pas à 100 $, pourquoi le prix de l\'essence va remonter à un niveau record ? Ben c\'est à cause de ce qui se passe au niveau du raffinage. Puis remarque, le prix de l\'essence ou du diesel est en hausse de plus de 45 %. Donc il y a le prix du brut, mais il y a le prix des produits raffinés. Puis en bout de ligne l\'économie fonctionne avec des produits raffinés non pas le brut donc c\'est pour ça qu\'il faut être prudent pour les prochains mois.',
              'Ouais tout à fait. Et quelles sont nos prévisions de retour à la normale dans le détroit d\'Ormuz ?',
              'Bien elles sont pas très intéressantes je dois t\'avouer parce que si tu regardes au niveau des marchés, genre la firme Polymarket où les gens peuvent s\'exprimer sur leur vision de réouverture ou pas. Écoute, c\'est tout nouveau qu\'on utilise ça Nancy. Mais bon les probabilités de réouverture en 31 juillet 2 % d\'ici septembre 27 % ça va faire 6 mois en septembre que le détroit d\'Ormuz est impacté négativement, donc ta chaîne d\'approvisionnement elle va s\'en ressentir. Puis on voit pas pour l\'instant de capacité de réouvrir le détroit d\'Ormuz d\'ici la fin de l\'année donc il est faux de penser qu\'il y aura pas des ramifications sur la chaîne d\'approvisionnement au cours des prochaines semaines.',
              'Ben justement parce que même si on rouvrait le 31 décembre, le lendemain, tout ne se retrouve pas dans nos paniers d\'épicerie ou à la pompe dans nos marchés mondiaux.',
              'Ben t\'as raison, faut reconstituer les inventaires de tout ça. Fait que ce que ça veut dire, c\'est que pour l\'instant, c\'est que les pressions sur des chaînes d\'approvisionnement mondiales sont à des niveaux qu\'on n\'a pas vu depuis la récession COVID. Historiquement Nancy ce que ça veut dire, c\'est que tu peux avoir des surprises d\'inflation à la hausse au cours des prochains mois. Bon je sais que le rapport d\'inflation aux États-Unis semblait pas pointé vers ça, mais l\'IPC c\'est une façon de mesurer l\'inflation. Après il y a ce qui se passera au niveau des coûts de production au niveau des entreprises, puis c\'est là où ça pourrait augmenter au cours des prochains mois. Donc faut pas être complaisant. On doit composer avec cette incertitude là qui devrait perdurer pour encore plusieurs semaines.',
              'Et malgré tout ça toute cette incertitude dont on parle depuis qu\'on a commencé notre conversation les marchés boursiers sont encore, les attentes des marchés boursiers sont encore à des sommets.',
              'T\'as raison, fait que pourquoi on fait du sur place et que ça baisse pas à la bourse et c\'est seulement du sur place. Mais t\'as raison, c\'est parce que les attentes de croissance des bénéfices par action au niveau mondial presque toutes les régions du monde sont encore prévues ou les anticipations c\'est encore pour des des croissances des bénéfices de plus de 20 %, 20 % ou plus dans presque toutes les régions du monde. Donc tu vas me dire Ouais c\'est pas fait partout Stéfane c\'est vrai que l\'Europe puis le Japon c\'est un peu plus faible.',
              'Mais t\'as aucun négatif ?',
              'Non.',
              'C\'est déjà assez surprenant.',
              'C\'est du 2 chiffres, ce qui serait exceptionnel dans le contexte actuel. Donc pour la bourse, on va si tu veux carburer, si tu m\'excuses d\'utiliser l\'expression, on va carburer à la saison des bénéfices qui est à nos portes aux États-Unis, mais ce qui se produira au cours des prochains mois, moi je pense que on peut avoir des surprises qui pourraient être un peu plus négatives en 3e et 4e trimestre. 2e trimestre, on sait déjà qu\'il démarre quand même bien.',
              'Oui.',
              'Mais 3e, 4e trimestre si ma chaîne d\'approvisionnement demeure bouchée ou bloquée.',
              'Ça va avoir un impact potentiel.',
              'Ouais.',
              'Et ce matin, nouvelles de la Banque du Canada, donc on ne bouge pas les taux d\'intérêt.',
              'Bien tu m\'en avais, tu m\'avais questionné le mois passé, je disais je pense pas, puis en fait ils ont passé leur tour, donc on demeure dans une structure au Canada où tu sais la zone euro ils ont monté leur taux là il y a à peine un mois. Donc au Canada on demeure dans une juridiction où les taux d\'intérêt demeurent relativement bas.',
              'C\'est intéressant. Puis t\'as une autre bonne nouvelle au niveau de l\'emploi.',
              'Mais j\'en ai 2, avant ça oublie pas la Banque du Canada a révisé à la hausse sa prévision pour le 2e trimestre.',
              'T\'as raison.',
              'Ils sont à 2,5 %. Donc tu sais les gens avaient beaucoup parlé des 2 trimestres négatifs donc il y a eu un rebond.',
              'Tu nous disais que c\'était pas une vraie récession malgré les 2 trimestres.',
              'Puis que le rebond semblait se propager ou se confirmer pour le 3e trimestre ce qui est fait. Mais l\'autre chose t\'as absolument raison. Ce qui est important, c\'est que c\'est vrai que la population est en baisse au Canada, mais l\'immigration permanente continue d\'entrer au Canada. Puis c\'est important parce que ça, c\'est surtout les gens de 25 à 54 ans qui ont une incidence importante sur le site de crédit. Puis sache Nancy que les travailleurs ou le nombre de travailleurs de 25 à 54 ans a augmenté de 88 000 au cours des 2 derniers mois. Oui, c\'était moche les mois précédents, mais on a fait un rebond important, puis on attend un nouveau record au Canada.',
              'Puis effectivement, ce sont ceux qui vont consommer davantage, les instruments de crédit de consommation.',
              'C\'est vrai que c\'est dommage pour les 15 à 24 ans, les étudiants étrangers qui sont frappés par la politique d\'immigration. Mais encore une fois, l\'immigration permanente, elle continue de demeurer positive au Canada, même si la population chute à cause des étudiants étrangers, les travailleurs temporaires pour la plupart, mais pour l\'impact sur l\'économie, les 25 à 54 ans, ça c\'est important Nancy, donc ça veut dire que ça confirme tes chances d\'avoir une meilleure performance économique au Canada en 2e moitié de l\'année.',
              'Puis on se donne aussi les moyens de pouvoir assurer notre croissance au Canada.',
              'Ben c\'est important. Nancy, c\'est que la grosse annonce lapsus, grosse annonce avec au niveau du fédéral pipeline entre l\'Alberta et la Colombie britannique pour se donner de nouveaux débouchés au niveau de la production totale de pétrole, qui devrait passer bientôt à 6 000 000 de barils par jour. Le pipeline n\'est pas construit, il y a déjà des des optimisations qui étaient en cours Nancy, mais c\'est',
              'important parce que c\'est aussi un effet levier pour l\'économie, diversification mais autre chose, c\'est que c\'est aussi un effet levier pour des négociations avec la, tu m\'avais expliqué là au niveau du CUSMA, je m\'excuse, j\'ai oublié la traduction française, là.',
              'Le Oh mon Dieu.',
              'L\'accord de libre échange Canada-États-Unis, puis le Mexique donc on pourrait peut être entériner une une réouverture de l\'accord ou une signature positive d\'ici les prochains mois, dans un contexte où le pétrole est un atout névralgique pour, le pétrole canadien est un atout et névralgique pour les Américains. Donc j\'ai toujours bon espoir que des nouvelles positives à ce niveau-là au cours des prochaines semaines, même si les Américains l\'ont pas entériné début juillet.',
              'Ouais puis de toute façon on sait que c\'est pas parce qu\'il est pas entériné que tout tombe, tu nous avais expliqué à la dernière rencontre aussi, donc business as usual pour l\'instant tu nous donnes la belle nouvelle que t\'as espoir que ça va se signer.',
              'C\'est reconduit, c\'est juste que j\'ai mon incertitude par rapport à est-ce que je me lance dans un investissement à long terme si j\'ai pas accès au marché américain. Mais encore une fois, je pense que les nouvelles en provenance d\'Ottawa demeurent positives. Oubliez pas, on a un symposium sur l\'investissement au Canada d\'ici Septembre. Puis je pense que il y aurait lieu de penser qu\'on aura de meilleures nouvelles avant que le symposium se réalise, puis qu\'il vienne au Canada là.',
              'Merci Stéfane. Alors malgré toute cette incertitude macroéconomique, tu nous a communiqué quand même de bons messages positifs. C\'est l\'été, on doit quand même se reposer. Donc malgré tout ça, continuez à faire confiance à votre investissement, continuez de faire confiance à votre conseiller et on vous souhaite de bonnes vacances pour ceux qui en prennent. Et on se revoit au mois d\'août. Merci Stéfane.',
              'Merci.',
            ],
          },
        },
        {
          title: '5 • 4 • 3 Perspectives de marché',
          blurb: '5 minutes, 4 graphiques, 3 points clés à retenir… Découvrez « 5 • 4 • 3 », un nouveau regard trimestriel ciblé sur les marchés, l’économie et l’investissement avec notre expert Louis Lajoie, du Bureau du chef des placements de la Banque Nationale Investissements.',
          watchHref: 'https://www.youtube-nocookie.com/embed/ui6YnV1R15o',
          watchLabel: '5 4 3 | L’économie pourrait-elle encore surchauffer?',
          transcript: {
            title: '5 • 4 • 3 Perspectives de marché transcription',
            paragraphs: [
              'Bonjour tout le monde. Aujourd\'hui, 12 juin, je vais rapidement revenir sur le contexte de marché, ce qui rassure, ce qui inquiète et ce qu\'on va suivre dans les prochains mois.',
              'Mais avant, permettez-moi de revenir trois mois en arrière, lors de l\'enregistrement de la dernière capsule, qui était au tout début de ce qui semblait être l\'une des plus importantes crises énergétiques de l\'histoire moderne. À l\'époque, il y avait essentiellement deux narratifs ambiants : soit on se dirigeait vers 200 $ le baril de pétrole, auquel cas il y aurait une récession mondiale, soit, à l\'inverse., on aurait une résolution rapide qui permettrait aux prix de l\'énergie de reculer. Or, ce qui s\'est produit est ultimement quelque chose entre les deux : en l\'absence de résolution formelle, les marchés du pétrole ont quand même réussi à trouver un certain équilibre grâce, entre autres, à l\'usage plus important de certains pipelines, au fait que les blocus sont en partie perméables, bien que légers. Mais surtout grâce à l\'usage très important des réserves stratégiques mondiales, ce qui, par définition, veut dire que cet équilibre est fragile et temporaire. Il faudra donc quand même voir très bientôt une reprise plus substantielle du trafic maritime dans le détroit d’Ormuz.',
              'Cela étant dit, ce qui est clair, c\'est que dans tous les scénarios, les prix de l\'énergie ne reviendront pas à leurs creux précédents, ne serait-ce qu\'en raison du besoin de renflouer les réserves stratégiques de pétrole qui ont été utilisées dernièrement. Cela étant dit, la bonne nouvelle, c\'est qu\'on constate que cette hausse des prix de l\'énergie n\'est pas suffisante pour empêcher les marchés boursiers de renouer avec une tendance haussière, ce qui a effectivement été le cas au cours du deuxième trimestre. Non pas seulement à cause d\'un quelconque espoir tourné vers l\'avenir, mais vraiment en raison d\'une croissance substantielle des profits, qui est en fait supérieure à la hausse des cours boursiers eux-mêmes depuis le début de l\'année dans l\'ensemble des régions boursières. Évidemment, cela s\'explique en partie par des profits spectaculaires pour certains titres – les manufacturiers de semi-conducteurs, entre autres, dans les marchés émergents, certains ont un carnet de commandes qui déborde en ce moment.',
              'Mais il y a quand même une résilience globale dans l\'économie, si l\'on se fie, par exemple, à l\'indice de surprise économique aux États-Unis, qui est à son plus fort depuis 2024. C\'est aussi une bonne nouvelle, mais cela soulève quand même des questions sur la trajectoire future de l\'inflation, parce qu\'on sait que l\'inflation réagit à retardement à l\'activité économique. On en a eu un exemple tout à fait extrême en 2021-2022. Cela n\'a pas été le cas dans les deux dernières années, probablement parce que le marché de l\'emploi, à cette période-là, était plus près d\'un équilibre, et cela demeure encore le cas. C\'est pourquoi, pour nous, une surchauffe est davantage un risque qu\'une vue. Il faut quand même suivre cela de près.',
              'Et ce que les marchés financiers vont suivre de près, très clairement, c\'est ce que la Réserve fédérale américaine fera dans ce contexte. Pour la première fois en huit ans, on fera face à un nouveau président de la Réserve fédérale, M. Warsh. Il y a trois mois, les marchés se disaient qu\'il pourrait probablement baisser les taux d\'intérêt. Mais dernièrement, ce sont plutôt des hausses de taux d\'intérêt qui sont escomptées par les marchés. Ce qui, en soi, ne serait pas nécessairement catastrophique dans la mesure où on parlerait quand même d\'une politique monétaire largement située dans une fourchette neutre, ce qui est mieux qu\'une politique trop accommodante peut-être qui, ultimement, ne créerait que de plus gros problèmes d\'inflation. Mais si, éventuellement, on se met à parler de politique restrictive – ce n\'est pas le cas –, mais si cela le devient, ce serait une raison d\'être un peu plus inquiet, probablement avec plus de volatilité sur les marchés. C\'est pourquoi le discours de M. Warsh sera très pertinent à suivre dans les prochains mois.',
              'Pour résumer les choses, encore une fois, le pire a été évité et devrait continuer de l\'être, même si on ne s\'attend pas du tout à un retour à une stabilité parfaite dans le golfe Persique. Il faudra donc continuer de suivre l\'évolution de l\'inflation, qui ne semble visiblement pas se diriger vers un retour à la cible de 2 %, que l\'on n\'a pas vue depuis un peu plus de cinq ans maintenant. Il faudra donc voir comment M. Warsh naviguera tout cela. Mais, dans l\'ensemble, on ne s\'attend pas à un changement drastique dans les tendances de marché, qui sont visiblement favorables aux marchés boursiers. Il faut toutefois rester vigilant, parce que la réalité, c\'est que l\'éventail des risques et de l\'incertitude demeurent encore exceptionnellement larges.',
              'C\'est tout pour aujourd\'hui. Merci d\'avoir été à l\'écoute. On se reparle en septembre. D\'ici là, bon été à tout le monde.',
            ],
          },
        },
      ],
    },
    {
      kind: 'promos',
      id: 'finance',
      heading: 'Les finances en lumière',
      items: [
        {
          image: { src: img_defi_oser_sinvestir_fr, alt: 'Défi oser s\'investir avec l\'ambassadrice Kathy Marquis en vedette.' },
          title: 'Le défi Oser s\'investir',
          blurb: 'Regardez ces capsules vidéos et découvrez nos conseils et outils pratiques pour vous accompagner dans chacun de vos moments de vie de femme.',
          href: 'https://www.bnc.ca/particuliers/choisir-banque-nationale/femmes.html#video',
        },
        {
          image: { src: img_img_publications_financieres_revues_de_marche_740x489, alt: 'Deux femmes assises ensemble devant un ordinateur portable.' },
          title: 'Leadership d’opinion',
          blurb: 'Plongez dans les articles et les vidéos de nos experts qui redéfinissent les tendances du secteur',
          href: 'https://www.bnc.ca/particuliers/conseils/vision-leaders.html',
        },
        {
          image: { src: img_img_publications_financieres_rapports_mensuels_740x489, alt: 'Une femme et un homme assis à un bureau examinent ensemble un gros document.' },
          title: 'Épargne et placements',
          blurb: 'Découvrez nos options d\'investissement qui vous aideront à réaliser vos projets ou à faire face aux imprévus',
          href: 'https://www.bnc.ca/particuliers/epargne-placements.html',
        },
      ],
    },
    {
      kind: 'publications',
      id: 'analyses-economiques',
      heading: 'Analyses économiques',
      items: [
        {
          image: { src: img_img_article_weekly_economic_watch_768x433, alt: 'Une femme assise dans son salon, examinant les offres et les produits financiers.' },
          title: 'L\'Hebdo économique',
          blurb: 'Cette publication vous tient au courant de l\'évolution d\'un large éventail d\'indicateurs économiques et financiers nord-américains, provinciaux et mondiaux. Elle présente des sujets d\'actualité économique et financière, accompagnés d\'un bref commentaire.',
          cta: 'Lire la dernière version',
          href: `${FBNGP}/content/dam/bnc/taux-analyses/analyse-eco/hebdo-economique.pdf`,
        },
        {
          image: { src: img_img_article_monthly_vision, alt: 'Un couple assis à la table de la salle à manger, regardant ensemble un ordinateur portable.' },
          title: 'Vision',
          blurb: 'Vous recherchez une analyse financière fiable ? Le groupe économie et stratégie fournit un rapport détaillé sur les taux d\'intérêt, les obligations, le marché boursier et la stratégie de portefeuille.',
          cta: 'Lire la dernière version',
          href: `${FBNGP}/content/dam/fbngp/pdf/mensuel-economique-vision.pdf`,
        },
        {
          image: { src: img_img_article_monthly_economic_monitor, alt: 'Un homme assis à une table, écrivant sur un bloc note avec un ordinateur portable devant lui.' },
          title: 'Le mensuel économique',
          blurb: 'Explorez un aperçu régional avec nos rapports mensuels couvrant le Canada, les États-Unis et le monde, chacun offrant des prévisions adaptées aux perspectives économiques de sa région.',
          cta: 'Lire les dernières versions',
          href: 'https://www.bnc.ca/a-propos-de-nous/nouvelles-medias/actualite-economique/analyses-economiques.html#economique',
        },
        {
          image: { src: img_img_article_monthly_equity_monitor, alt: 'Une femme assise à un bureau surplombant une ville, travaillant sur une tablette avec deux autres ordinateurs derrière elle.' },
          title: 'Le mensuel boursier',
          blurb: 'Dans ce rapport mensuel, les experts de la Banque nationale résument l\'état actuel des marchés boursiers à l\'échelle mondiale.',
          cta: 'Lire la dernière version',
          href: `${FBNGP}/content/dam/bnc/taux-analyses/analyse-eco/mensuel/mensuel-boursier.pdf`,
        },
      ],
    },
    {
      kind: 'publications',
      id: 'investment',
      heading: 'Stratégie d\'investissement',
      items: [
        {
          image: { src: img_img_article_strategie_placement_fr_767x433, alt: 'Stratégie de placement brun verre bâtiment visuel.' },
          title: 'Stratégie de placement',
          blurb: 'Cette publication trimestrielle vous informe de la conjoncture économique mondiale, des recommandations de répartition d’actifs et des prévisions économiques.',
          cta: 'Lire la dernière version',
          href: `${FBNGP}/content/dam/fbngp/pdf/doc-strategie-placement.pdf`,
        },
        {
          image: { src: img_img_article_asset_allocation_strategy, alt: 'Une personne utilisant une calculatrice devant un bureau sur lequel sont posés de nombreux documents.' },
          title: 'Stratégie de répartition de l\'actif',
          blurb: 'Qu\'est-ce qui évolue sur les marchés financiers et quel est l\'impact sur vos placements ? Banque Nationale Investissements propose une stratégie de portefeuille sur l\'ensemble des classes d\'actifs.',
          cta: 'Lire la dernière version',
          href: `${FBNGP}/content/dam/bni/publication/strategie-repartition-actif.pdf`,
        },
      ],
    },
    {
      kind: 'publications',
      id: 'budgets',
      heading: 'Budgets fédéral et provincial',
      items: [
        {
          image: { src: img_img_article_federal_budget, alt: 'Le drapeau canadien flotte au coucher du soleil et représente le budget fédéral.' },
          title: 'Budget fédéral',
          blurb: 'Découvrez comment le gouvernement canadien prévoit de mettre en œuvre le programme économique annuel dans le budget fédéral de cette année.',
          cta: 'Consulter le budget',
          href: `${FBNGP}/content/dam/bnc/taux-analyses/analyse-eco/budget/budget-fed.pdf`,
        },
        {
          image: { src: img_img_article_provincial_budget, alt: 'Trois personnes assises à une table examinent les documents d\'investissement de leurs clients.' },
          title: 'Budget du Québec',
          blurb: 'Nos experts font l\'analyse du budget de votre province et les mises à jour financières correspondantes.',
          cta: 'Consulter le budget',
          href: `${FBNGP}/content/dam/bnc/taux-analyses/analyse-eco/budget/budget-quebec.pdf`,
        },
      ],
    },
    {
      kind: 'publications',
      id: 'guide',
      heading: 'Guides et outils',
      items: [
        {
          image: { src: img_img_article_flip_book_trimestriel_v2_fr, alt: 'Mythes et réalités par Banque Nationale Investissements.' },
          title: 'Mythes et réalités',
          blurb: 'Vous recherchez une analyse financière fiable ? Le groupe Économie et stratégie fournit un rapport détaillé sur les taux d\'intérêt, les obligations, le marché boursier et la stratégie de portefeuille.',
          cta: 'Lire la dernière version',
          href: `${FBNGP}/content/dam/bni/publication/mythes-realites.pdf`,
        },
        {
          image: { src: img_flash_info, alt: 'Éléments graphiques de différentes couleurs et texte écrit en rouge flash info.' },
          title: 'Flash info',
          blurb: 'Trouvez les différents montants des régimes gouvernementaux (RPC, RRQ, PSV), les plafonds CELI, REER et REEE pour les contributions et les liens vers les différentes tables d’impôts.',
          cta: 'Lire la dernière version',
          href: `${FBNGP}/content/dam/bnc/a-propos-de-nous/nouvelles-medias/info/flash-infos-bn-lettre.pdf`,
        },
        {
          image: { src: img_img_nouvelles_articles_guide_investir, alt: 'Guide d\'investissement - des conseils clés pour votre sante financière.' },
          title: 'Guide investir',
          blurb: 'Ce guide de référence contient une foule de renseignements pratiques et vous outille pour planifier vos projets. Téléchargez-le sur votre bureau pour profiter de toutes les fonctionnalités.',
          cta: 'Téléchargez votre guide',
          href: `${FBNGP}/content/dam/fbngp/pdf/guide-investir-fbngp.pdf`,
        },
        {
          image: { src: img_guide_fiscal_quebec_2025, alt: 'Guide fiscal et d\'investissement - une main tenant un formulaire.' },
          title: 'Guide fiscalité et investissement',
          blurb: 'Vous trouverez tout ce dont vous avez besoin pour remplir avec succès votre déclaration d\'impôts dans notre guide complet sur les impôts et les investissements.',
          cta: 'Guide du Québec',
          href: `${FBNGP}/content/dam/fbngp/pdf/guide-fiscal-qc-fbngp.pdf`,
        },
      ],
    },
    {
      kind: 'fraud',
      id: 'prevention-fraude',
      heading: 'Prévention de la fraude',
      block: {
        image: { src: img_picto_protection_identity, alt: 'Une personne et un bouclier pour représenter la protection contre la fraude à la banque.' },
        body: 'Voyez les mesures à prendre pour vous protéger contre les tentatives de fraude.',
        cta: 'Lisez nos conseils',
        href: 'https://www.bnc.ca/abc-securite/fraude.html',
      },
    },
  ],
};

export default content;
