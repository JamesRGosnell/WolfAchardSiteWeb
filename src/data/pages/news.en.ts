/**
 * ENGLISH news page — `https://www.nbfwm.ca/advisor/wolf-archard-group/news-articles.html`
 * Capture: `source-assets/html/en-news-articles.html` (152,662 bytes)
 *
 * ⚠ SYNDICATED. National Bank authored every string in this file. Read
 * `news.types.ts` before editing anything here, and
 * `references/nbf-platform.md` before editing a URL.
 *
 * GENERATED FROM THE CAPTURE, NOT RETYPED. U+00A0 is preserved as a LITERAL
 * character so the strict verbatim sweep can verify it. There are 3 below —
 * the `Economic Impact` blurb, the `Thought leadership` blurb, and the
 * TRAILING one on the `Federal and provincial budgets ` heading.
 *
 * THIS PAGE IS NOT A TRANSLATION OF THE FRENCH ONE. Measured differences that
 * are reproduced, not repaired:
 *  · English carries a publication card French does not have at all —
 *    `Week at a Glance`, filed inside `Economic news`. 18 `<h3>` here
 *    against 17 in French.
 *  · `Guides and tools` lists the SAME four items as `Guides et outils` in a
 *    DIFFERENT order.
 *  · `Facts & Fiction` credits `The CIO Office of National Bank Investments`;
 *    the French `Mythes et réalités` credits `Le groupe Économie et
 *    stratégie`. Same publication pair, two attributions. C-55.
 *  · The ambassador named in the `Invest in you Challenge` alt is
 *    `Jessica Moorhouse`; French names `Kathy Marquis`. C-54.
 *  · English renders THREE empty `News & articles` headings; French renders
 *    four. S-01.
 *
 * THINGS THAT LOOK LIKE MISTAKES AND ARE THE LIVE PAGE:
 *  · The meta description says `take advantage of our analyzes`.
 *  · The `Federal and provincial budgets ` heading ends in a NO-BREAK SPACE.
 *  · `Tax and investment guide - two young persons in from of a laptop.`
 *  · `Facts & Fiction`'s alt reads `Myths and realities by National Bank
 *    Investments` — it names the FRENCH publication.
 *  · The second video's `aria-label` reads `5 4 3 | A Could the economy
 *    overheat again?` — a stray `A`.
 *  · The `<h1>` is `News and articles`; the `<title>` is `News & articles`.
 *  · One card image is served from another advisory team's DAM folder. N-13.
 *
 * LANGUAGE PURITY (P-4): English artwork, English labels, `nbfwm.ca`-tree
 * links, `nbc.ca` hosts.
 */

import type { NewsContent } from './news.types';

/* ---------------------------------------------------------------- artwork --
 * Local copies of the ORIGINAL DAM masters (the `data-asset` file, not the
 * rendered `.coreimg.` rendition). Three basenames differ from the DAM — see
 * A-05; every other file keeps the name National Bank gave it.
 */
import img_ban_news_articles from '../../images/news/ban-news-articles.jpg';
import img_img_article_asset_allocation_strategy from '../../images/news/img-article-asset-allocation-strategy.jpg';
import img_img_article_federal_budget from '../../images/news/img-article-federal-budget.jpg';
import img_img_article_july_article_fusions_acquisitions from '../../images/news/img-article-july-article-fusions-acquisitions.jpg';
import img_img_article_july_article_maximiser_son_patrimoine from '../../images/news/img-article-july-article-maximiser-son-patrimoine.jpg';
import img_img_article_july_article_pension_individuelle from '../../images/news/img-article-july-article-pension-individuelle.jpg';
import img_img_article_monthly_economic_monitor from '../../images/news/img-article-monthly-economic-monitor.jpg';
import img_img_article_monthly_equity_monitor from '../../images/news/img-article-monthly-equity-monitor.jpg';
import img_img_article_monthly_vision from '../../images/news/img-article-monthly-vision.jpg';
import img_img_article_provincial_budget from '../../images/news/img-article-provincial-budget.jpg';
import img_img_article_quarterly_flip_book_v2_en from '../../images/news/img-article-quarterly-flip-book-v2-en.jpg';
import img_img_article_quarterly_investment_strategy from '../../images/news/img-article-quarterly-investment-strategy.jpg';
import img_img_article_strategie_placement_en_767x433 from '../../images/news/img-article-strategie-placement-en-767x433.jpg';
import img_img_article_weekly_economic_watch_768x433 from '../../images/news/img-article-weekly-economic-watch-768x433.jpg';
import img_img_droit_de_douane_trump_767x433 from '../../images/news/img-droit-de-douane-trump-767x433.jpeg';
import img_img_news_articles_investing_guide from '../../images/news/img-news-articles-investing-guide.jpg';
import img_img_obbba_767x433 from '../../images/news/img-obbba-767x433.jpeg';
import img_img_projet_loi_899_767x433 from '../../images/news/img-projet-loi-899-767x433.png';
import img_img_publications_financieres_rapports_mensuels_740x489 from '../../images/news/img-publications-financieres-rapports-mensuels-740x489.png';
import img_img_publications_financieres_revues_de_marche_740x489 from '../../images/news/img-publications-financieres-revues-de-marche-740x489.jpg';
import img_invest_in_you_challenge_en from '../../images/news/invest-in-you-challenge-en.jpg';
import img_picto_protection_identity from '../../images/news/picto-protection-identity.png';
import img_quick_facts from '../../images/news/quick-facts.jpg';
import img_tax_guide_quebec_2025 from '../../images/news/tax-guide-quebec-2025.jpg';

/* The bank host serving THIS language's tree. Every publication path below is
 * the live root-relative path VERBATIM — only the origin is prepended, because
 * the rebuild does not live on www.nbfwm.ca. S-04.
 *
 * NEVER pin a dated filename into one of these. Most resolve to a file
 * National Bank overwrites in place, which is the whole reason the labels
 * beside them promise the latest version. */
const NBFWM = 'https://www.nbfwm.ca';

const content: NewsContent = {
  locale: 'en',

  meta: {
    title: 'News & articles',
    description: 'Get the latest news of the financial markets and take advantage of our analyzes to better achieve your goals.',
  },

  hero: {
    heading: 'News and articles',
    banner: {
      src: img_ban_news_articles,
      alt: '',
      widths: [767, 1199, 1600, 2000],
      sizes: '(min-width: 82rem) 76rem, calc(100vw - 2.5rem)',
    },
  },

  labels: {
    pdf: 'PDF',
    video: 'Video',
  },

  sections: [
    {
      kind: 'documents',
      id: 'policy-updates',
      heading: 'Trump\'s Policy Updates',
      note: 'pdf',
      items: [
        {
          image: { src: img_img_obbba_767x433, alt: 'Canada and United States flag together.' },
          title: 'One Big Beautiful Bill Act | Canadian Concerns Removed',
          href: `${NBFWM}/content/dam/fbngp/pdf/228-fbn-corpo-pager-one-big-beautiful-bill-en.pdf`,
        },
        {
          image: { src: img_img_projet_loi_899_767x433, alt: '' },
          title: 'Proposed US Tax Code Section 899 - Potential Impacts on Canadian Investors',
          href: `${NBFWM}/content/dam/fbngp/pdf/226-fbn-corpo-pager-article-after-senate-bill-en.pdf`,
        },
        {
          image: { src: img_img_droit_de_douane_trump_767x433, alt: 'American flag flying over port container ship.' },
          title: 'Facing the tariffs together - Our commitment',
          href: `${NBFWM}/content/dam/fbngp/pdf/facing-the-tariffs-together-our-commitment.pdf`,
        },
      ],
    },
    {
      kind: 'documents',
      id: 'spotlight',
      heading: 'Spotlight: Now trending',
      items: [
        {
          image: { src: img_img_article_july_article_fusions_acquisitions, alt: 'A National Bank specialist meets with clients to discuss value-creating merger and acquisition strategies for their business.' },
          title: 'Commercial discipline in M&A: The best practices to drive real value',
          href: 'https://www.nbc.ca/en/article/fusions-acquisitions-rigueur-commerciale.html?cid=nti_7QRH7F9FAM921668',
        },
        {
          image: { src: img_img_article_july_article_maximiser_son_patrimoine, alt: 'A mother helps her children with their lessons at the kitchen island.' },
          title: '8 tips to help you manage your family wealth',
          href: 'https://www.nbc.ca/personal/advice/taxes-and-income/how-to-build-and-manage-wealth.html?cid=nti_ZA0BA7VK3D521669',
        },
        {
          image: { src: img_img_article_july_article_pension_individuelle, alt: 'Asian senior woman working at home with a laptop.' },
          title: 'Everything you need to know about the Individual Pension Plan',
          href: 'https://www.nbc.ca/personal/advice/savings-investment/understanding-the-individual-pension-plan.html?cid=nti_MXOP6NJZD8S21670',
        },
      ],
    },
    {
      kind: 'videos',
      id: 'economic',
      heading: 'Economic news',
      items: [
        {
          title: 'Economic Impact',
          blurb: 'To keep you informed and stimulate your thinking, Stéfane Marion and Nancy Paquet take a look at economic news and share their perspectives in our monthly informative videos.',
          watchHref: 'https://www.youtube-nocookie.com/embed/q7RIMb2EOkM',
          watchLabel: 'Economic Impact - The peace dividend unwinds',
          more: { label: 'Watch previous editions', href: 'https://www.nbc.ca/personal/advice/economic-impact.html' },
          transcript: {
            title: 'Video Economic Impact Transcript',
            paragraphs: [
              'Hello everyone, we are Wednesday, July 15th, 2026. Stéfane, a pleasure to be here with you again today. So, tell me, are the markets running out of speed?',
              'Ah, they seem to be. Last time we saw a new record high on global equities, Nancy, it was the beginning of June. Notice that, you know, at the beginning of the Strait of Hormuz intervention, we had a correction, a big rebound stalling. And I think there\'s some geopolitics undermining the markets at this point in time.',
              'I think so. So, you know, probably has an impact on the oil price for sure.',
              'So, it coincides with renewed upward pressure on oil. Notice, Nancy, that we\'re still very far from the levels that exceeded $100, but it\'s.',
              'Going up.',
              'It\'s quite the rebound in recent weeks with renewed tensions.',
              'And of course, that\'s mostly related to the Strait of Hormuz.',
              'So, doesn\'t matter what politicians say. Politicians say, open or not open, traffic says it\'s not open. So, if you look at the underlying data, you can explain what\'s happening on the oil prices via traffic in the Strait of Hormuz, which is not reopened. So even though we put it, is it open? That is the question or not, it\'s not reopened at this point in time, hence the pressure on oil prices.',
              'And it also has an impact because there is limited availability of various products, therefore.',
              'So, there\'s something important to note. So, there\'s the Strait of Hormuz, but there\'s also a war elsewhere in the world. And what\'s happening in Europe where you\'re seeing destruction of refineries, particularly in Russia, which accounts for 11% of diesel sales around the world. You\'re seeing that refining, the cost of refining oil is surging because there\'s less refined capacity at refinery levels. So, crack spreads, which is one way to look at the price of refined products if you want, actually exceeds what you saw in 2022 that started the beginning of the war in Ukraine when crude oil was much higher. So what that means, Nancy, at the end of the day is like the economy works on refined products and they\'re up significantly, whether it\'s gasoline, diesel, diesel, and it shows up in a global supply chain. So yes, crude prices have rebounded. They\'re still below where they were before, but gasoline and diesel might hit new all-time highs in the coming week.',
              'Yeah. And that\'s what consumers feel when they go to the pump, right?',
              'Yeah. And remember, Russia actually said that they were restricting exports of diesel for the next month. And if there\'s more refinery capacity that\'s destroyed, probably that will last longer. So, hence the impact on global transportation costs.',
              'And it will take time before everything goes back to normal, right?',
              'So, politicians say something, betting markets say something else. So according to betting markets, you\'re not gonna reopen by the end of July, 2% probability, end of August 13%, end of September 27%. We\'re below 50% until the end of the year. Nancy, what that means is that you\'re going to continue to impact the global supply chain. So, I know U.S. inflation was weaker than expected this month but be prepared for potential upside surprise.',
              'And obviously, let\'s say it opens December 31st. The next day, everything will not be back to normal. We felt that during the pandemic, it took months before things.',
              'You have to replenish inventories, yes, you\'re right. So, probably the key story here is to say global supply chains, you know, the pressures on global supply chains are the most acute we\'ve seen since the COVID recession. Historically, that\'s accompanied with positive or if you want negative surprise in the sense that inflation is higher than expected. So, this is why we\'re still not out of the woods. So, coming back to your first question, are the markets running out of steam? Well, the markets are looking at this– How do we assess the impact on the global economy and earnings in this situation?',
              'And even so, since the beginning of this conversation, we\'ve had, you know, geopolitical not so good news, not dramatic, but not so good. But then again, markets expectations are surprisingly high.',
              'So, this does not necessarily show up in terms of earnings expectation because right now, as we speak, the expectation is that virtually every large region of the world will deliver more than 20% earnings per share growth so profitability will increase by 20%. It\'s you know, listen, it\'s possible. I just want to say these expectations are quite ambitious if you have more pressure on the supply chain in the coming weeks.',
              'And what\'s surprising is your graph is that there\'s no negative, there\'s no one single digit.',
              'No, no double digit, minimum double digit. So, as we said last month, the expectations are still the best earnings per share growth globally ever seen outside a recession recovery. So, market surprise for better news, not worse news, hence the need to watch what\'s happening on the geopolitical front in the coming weeks.',
              'So, one good news we got this morning is Bank of Canada.',
              'Well, if not moving interest rates is good news, yes, it is because we\'re keeping our.',
              'But for our consumers it is.',
              'Well, most of our, you\'re absolutely right, most of our clients would appreciate that and we remain in a jurisdiction where interest rates are lower than the rest of the world. So, that\'s good news. And the other good news, Nancy, is the Bank Canada, actually, they stayed on the sidelines, and they recognized that well we might see a better rebound in GDP than we expected in the second quarter, remember we had two negative quarters. Now we\'re set to rebound 2% in the second quarter. That\'s good news.',
              'Yeah. And you have another one about employment.',
              'Oh yeah, so GDP rebound is not very important for me if it\'s not accompanied by a jump in employment. And the good news is we seem to be confirming better news on GDP with the June employment data, particularly for people age 25 to 54 who are critical for the credit cycle, right? So, new all time high on employment for people 25 to 54. Now, Nancy, I know you\'re going to tell me "Yeah, but you told me population growth is negative this year", but permanent immigration is still up and it really has an impact on people 25 to 54. But yes, population will be down because many foreign students or temporary workers that tend to be younger will be negatively impacted. But that\'s good news for the credit cycle and for potential GDP rebound.',
              'Good. So, you have another good for us about the production level that would be increasing in Canada.',
              'So, people have been talking about trade diversification. It\'s hard to do in the short term if you don\'t tap into natural resources. And so oil production\'s on the rise in Canada and the expectation is they will continue to rise because there was a new pipeline announcement between Ottawa, Alberta, and British Columbia that seems to be inclined to provide more oil to the rest of the world. 90% currently goes to the U.S. and if you want diversification, you need a pipeline. So, from that standpoint, it\'s positive news in terms of diversification and note that from a trade balance perspective, it will help support the Canadian dollar. So again, there\'s upside potential here for oil production in Canada. And if you want to become an energy superpower, you know, it goes with that title. So again, I think that this is constructive from a trade diversification perspective, which the government actually is hoping for.',
              'So, a lot of good news, Stéfane. So even though the microeconomic is very volatile, I mean, you\'ve brought us a couple of very interesting news today. So, thank you for that.',
              'Pleasure.',
              'And for all of you, I hope that you will enjoy the summer and that you will take the time during your vacation to reflect on your situation and talk to your advisors. And we will see you again in August. So thank you. Thank you, Stéfane.',
            ],
          },
        },
        {
          title: '5 • 4 • 3 Market Outlook',
          blurb: '5 minutes, 4 graphs, 3 key takeaways! Discover a fresh focused quarterly review of markets, the economy and investments with expert Louis Lajoie from our CIO Office.',
          watchHref: 'https://www.youtube-nocookie.com/embed/rxP4zTyUbhA',
          watchLabel: '5 4 3 | A Could the economy overheat again?',
          transcript: {
            title: 'Video 5 4 3 Market Outlook Transcript',
            paragraphs: [
              'Hello, everyone. Today, June 12, I’m going to briefly look back on the investment backdrop: what is reassuring, what is perhaps a bit concerning, and what we’re going to be monitoring going forward.',
              'But before we do so, let’s just go back to where we were three months ago, at the time of the last webcast, which was just at the beginning of one of the worst energy crises in modern times. Back then, there were essentially two prevailing narratives: either oil prices were headed to $200 a barrel, in which case we would have a global recession, or there would be a swift resolution allowing prices to go back to where they were. What actually happened? Something in between, where in the absence of a resolution, oil markets, nonetheless, found somewhat of an equilibrium, thanks to greater usage of some pipelines, the fact that the respective blockades are slightly permeable, and, most importantly, the substantial use of global oil reserves, which, by definition, means that this balance is temporary. We’re going to have to see a greater pickup in maritime activity in the Persian Gulf very soon. But regardless, in any event, what has become clear now is that energy prices are not going to go back to their previous lows. They’re going to remain higher.',
              'The good news is that we’re seeing this is not preventing equity markets from renewing with an upward trend, which has been the story in the second quarter, as you can see here. And this rebound in stock prices has not been driven entirely by hope. It’s actually been driven by substantial and sustained earnings growth around the world, with earnings growth actually stronger than the increase in stock prices since the beginning of the year. That is, in part, reflecting substantial earnings gains for a few stocks involved in semiconductor manufacturing, notably in emerging markets.',
              'But globally speaking, it remains true that economic activity has remained rather positive, with, for instance, the U.S. Economic Surprise Index at its highest level since 2024. That is also good news. But it also raises questions about the future path of inflation, because we all know that inflation reacts with a lag to growth. We saw an extreme case of that in 2021 and then the inflation surge in 2022. That has not been the case in the last two years, most likely because, over that period, the labour market was much more balanced, and that remains the case for now. And so that is why this is a risk to us, not a view.',
              'What’s clear, though, is that markets are going to be paying a lot of attention to what the U.S. Federal Reserve is about to do against this rather complex backdrop, especially since we are going to be facing, for the first time in eight years, a new Fed chair, Mr. Warsh. Just three months ago, markets thought that he would probably be able to cut rates slightly. But lately, markets have actually been discounting perhaps a few rate hikes going forward. We’ll have to see. But even if rate hikes actually do happen, in our mind, this is not necessarily a problem, in the sense that it is much better to have roughly neutral monetary policy than perhaps overly accommodative interest rates, which would only create a bigger inflation problem down the road. But if we were eventually to talk about restrictive monetary policy, that would be a different discussion. And that is the risk we’re going to be monitoring, but that is not the expectation as we speak.',
              'Three takeaways for you today. Essentially, again, the worst has been avoided and is likely to continue to be avoided, even though we don’t expect perfect stability here in the Persian Gulf. That is why we’ll have to keep an eye on inflation, which is definitely not on track to go back to the 2% target, something we haven’t seen in just over five years now in the U.S. We’ll have to see how Mr. Warsh navigates all of this. But globally speaking, we don’t expect any massive changes in global trends, which are rather positive for equity markets, as we have seen. But we must remain vigilant here, because the fact of the matter is that the range of outcomes, the range of uncertainty, remains exceptionally large.',
              'That’s it for today. Thank you for listening. We’ll talk again in September. Have a great summer, everyone.',
            ],
          },
        },
      ],
      publications: [
        {
          image: { src: img_img_article_quarterly_investment_strategy, alt: 'A businessman, standing in a downtown area, smiling whilst looking at his phone.' },
          title: 'Week at a Glance',
          blurb: 'The experts at National Bank Financial give a detailed analysis on how the stock markets and fixed income markets have performed every week.',
          cta: 'Read the latest version',
          href: `${NBFWM}/content/dam/fbngp/pdf/week-at-a-glance.pdf`,
        },
      ],
    },
    {
      kind: 'promos',
      id: 'finance',
      heading: 'Finance in focus',
      items: [
        {
          image: { src: img_invest_in_you_challenge_en, alt: 'Invest in you challenge featuring the ambassador Jessica Moorhouse.' },
          title: 'Invest in you Challenge',
          blurb: 'Watch these short videos and discover practical tips and tools that can help you succeed at every stage of your life as a woman.',
          href: 'https://www.nbc.ca/personal/switch-national-bank/women.html#video',
        },
        {
          image: { src: img_img_publications_financieres_revues_de_marche_740x489, alt: 'Two women sitting together looking at a laptop.' },
          title: 'Thought leadership',
          blurb: 'Dive into articles and videos from our experts  that redefine the trends of the industry',
          href: 'https://www.nbc.ca/personal/advice/thought-leadership.html',
        },
        {
          image: { src: img_img_publications_financieres_rapports_mensuels_740x489, alt: 'A woman and man sitting at a desk looking at a large document together.' },
          title: 'Savings and investments',
          blurb: 'Discover our investment options that will help you realize your projects or prepare for the unexpected',
          href: 'https://www.nbc.ca/personal/savings-investments.html',
        },
      ],
    },
    {
      kind: 'publications',
      id: 'economic-analysis',
      heading: 'Economic analysis',
      items: [
        {
          image: { src: img_img_article_weekly_economic_watch_768x433, alt: 'A woman sitting in her living room reviewing the financial offers and products.' },
          title: 'Weekly Economic Watch',
          blurb: 'This publication keeps you posted on a wide range of economic and financial indicators affecting the local, North American and global markets. It includes brief commentaries on economic and financial news items.',
          cta: 'Read the latest version',
          href: `${NBFWM}/content/dam/bnc/taux-analyses/analyse-eco/weekly-economic-watch.pdf`,
        },
        {
          image: { src: img_img_article_monthly_vision, alt: 'A couple sitting at their dining room table looking at a laptop together.' },
          title: 'Vision',
          blurb: 'Looking for reliable financial analysis? The Economics and Strategy Group provide a detailed report on interest rates, bonds, the stock market and portfolio strategy.',
          cta: 'Read the latest version',
          href: `${NBFWM}/content/dam/fbngp/pdf/vision-monthly-economic-monitor.pdf`,
        },
        {
          image: { src: img_img_article_monthly_economic_monitor, alt: 'A man sitting at a table writing in a notebook with a laptop in front of him.' },
          title: 'Monthly Economic Monitor',
          blurb: 'Explore a regional overview with our monthly monitors covering Canada, the United States and the world, each offering forecasts tailored to its area\'s economic outlook.',
          cta: 'Read the latest versions',
          href: 'https://www.nbc.ca/about-us/news-media/financial-news/financial-analysis.html#economic',
        },
        {
          image: { src: img_img_article_monthly_equity_monitor, alt: 'A woman sitting at a desk overlooking a city, working on a tablet with two other computers behind.' },
          title: 'Monthly Equity Monitor',
          blurb: 'Experts from National Bank summarize the current state of stock markets globally in this monthly report.',
          cta: 'Read the latest version',
          href: `${NBFWM}/content/dam/bnc/taux-analyses/analyse-eco/mensuel/monthly-equity-monitor.pdf`,
        },
      ],
    },
    {
      kind: 'publications',
      id: 'investment',
      heading: 'Investment strategy',
      items: [
        {
          image: { src: img_img_article_strategie_placement_en_767x433, alt: 'Investment strategy brown glass building visual.' },
          title: 'Investment Strategy',
          blurb: 'This quarterly publication informs you of global economic conditions, asset allocation recommendations and economic forecasts.',
          cta: 'Read the latest version',
          href: `${NBFWM}/content/dam/fbngp/pdf/doc-investment-strategy.pdf`,
        },
        {
          image: { src: img_img_article_asset_allocation_strategy, alt: 'A person using a calculator at a desk with many documents on it.' },
          title: 'Asset Allocation Strategy',
          blurb: 'What’s moving in the financial market and how does that impact your investments? National Bank Investments provides a portfolio strategy across asset classes.',
          cta: 'Read the latest version',
          href: `${NBFWM}/content/dam/bni/publication/asset-allocation-strategy.pdf`,
        },
      ],
    },
    {
      kind: 'publications',
      id: 'budgets',
      heading: 'Federal and provincial budgets ',
      items: [
        {
          image: { src: img_img_article_federal_budget, alt: 'The Canadian flag flowing at sunset representing the federal budget.' },
          title: 'Federal Budget',
          blurb: 'Learn how the Canadian Government plans to execute the annual economic agenda in this year\'s federal budget.',
          cta: 'Consult the budget',
          href: `${NBFWM}/content/dam/bnc/taux-analyses/analyse-eco/budget/federal-budget.pdf`,
        },
        {
          image: { src: img_img_article_provincial_budget, alt: 'Three people sitting at a table reviewing their client\'s investment documents.' },
          title: 'Quebec Budget',
          blurb: 'Our experts examine your province\'s budget and the financial updates related to it.',
          cta: 'Consult the budget',
          href: `${NBFWM}/content/dam/bnc/taux-analyses/analyse-eco/budget/quebec-budget.pdf`,
        },
      ],
    },
    {
      kind: 'publications',
      id: 'guide',
      heading: 'Guides and tools',
      items: [
        {
          image: { src: img_img_news_articles_investing_guide, alt: 'Investing Guide - essential advice for your financial health.' },
          title: 'Investing Guide',
          blurb: 'This reference guide contains a wealth of practical information and tools to help you plan your projects. Download it to your desktop to enjoy all the features.',
          cta: 'Download your guide',
          href: `${NBFWM}/content/dam/fbngp/pdf/nbfwm-investing-guide.pdf`,
        },
        {
          image: { src: img_tax_guide_quebec_2025, alt: 'Tax and investment guide - two young persons in from of a laptop.' },
          title: 'Tax and Investment Guide',
          blurb: 'Find everything you will need to successfully file your taxes in our comprehensive tax and investment guide.',
          cta: 'Guide for Quebec',
          href: `${NBFWM}/content/dam/fbngp/pdf/tax-guide-qc-nbfwm.pdf`,
        },
        {
          image: { src: img_img_article_quarterly_flip_book_v2_en, alt: 'Myths and realities by National Bank Investments.' },
          title: 'Facts & Fiction',
          blurb: 'Looking for reliable financial analysis? The CIO Office of National Bank Investments provides a detailed report on interest rates, bonds, the stock market and portfolio strategy.',
          cta: 'Read the latest version',
          href: `${NBFWM}/content/dam/bni/publication/facts-fiction.pdf`,
        },
        {
          image: { src: img_quick_facts, alt: 'Graphic elements in different colors and text in red saying quick facts.' },
          title: 'Quick Facts',
          blurb: 'Find the amounts of the different government plans (CPP, QPP, OAS), the TFSA, RRSP and RESP contribution limits, and the link to the different tax tables.',
          cta: 'Read the latest version',
          href: `${NBFWM}/content/dam/bnc/a-propos-de-nous/nouvelles-medias/info/quick-facts-nb-letter.pdf`,
        },
      ],
    },
    {
      kind: 'fraud',
      id: 'fraud-prevention',
      heading: 'Fraud prevention',
      block: {
        image: { src: img_picto_protection_identity, alt: 'A person and a shield to represent fraud protection at the bank.' },
        body: 'Find out how to protect yourself against fraud.',
        cta: 'Read our tips',
        href: 'https://www.nbc.ca/abcs-of-security/fraud.html',
      },
    },
  ],
};

export default content;
