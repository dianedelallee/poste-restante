#!/usr/bin/env node
/* Génère les pages statiques du site à partir de data.js et data.en.js :
     - pays/<slug>/index.html           une page par pays, en français
     - en/countries/<slug>/index.html   la même page, en anglais
     - pages.js                         liens entre pays et pages, pour la carte
     - sitemap.xml                      plan du site avec les alternatives de langue
     - llms.txt                         résumé du site pour les assistants IA
     - index.html                       index des pays (entre les repères COUNTRY-INDEX)
   Usage : node scripts/build-pages.js
   La sortie est déterministe : les mêmes données donnent exactement les mêmes fichiers. */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://www.poste-restante.club";
const INDEX_NOINFO = false; // les fiches « Aucune info trouvée » restent hors de l'index des moteurs (contenu mince)

global.window = {};
require(path.join(ROOT, "data.js"));
require(path.join(ROOT, "data.en.js"));
require(path.join(ROOT, "stamps.js"));
const FR = window.COUNTRIES, EN = window.COUNTRIES_EN, Stamps = window.Stamps;

/* ---------- régions (code ISO numérique → région) ---------- */
const REGIONS = [
  { id: "europe", fr: "Europe", en: "Europe" },
  { id: "africa", fr: "Afrique", en: "Africa" },
  { id: "asia", fr: "Asie et Moyen-Orient", en: "Asia and the Middle East" },
  { id: "americas", fr: "Amériques", en: "Americas" },
  { id: "oceania", fr: "Océanie", en: "Oceania" }
];
const REGION_OF = {};
const put = (region, ids) => ids.split(" ").forEach((i) => { REGION_OF[i] = region; });
put("europe", "807 499 428 642 804 070 100 292 440 442 470 688 703 705 250 756 276 040 380 724 620 826 056 616 643 191 203 348 372 300 352 528 752 208 578 246");
put("africa", "504 788 012 818 686 384 204 288 566 120 450 480 854 466 710 404 834 231 516 508 894 800 646");
put("asia", "144 158 586 608 116 344 446 702 392 356 764 704 360 524 410 156 376 792");
put("americas", "840 124 484 076 032 152 604 170");
put("oceania", "036 554");

/* ---------- textes des pages ---------- */
const STR = {
  fr: {
    lang: "fr", prefix: "/pays/", ogLocale: "fr_FR", homeQuery: "", colon: " : ",
    back: "← Poste restante", crumb: "Poste restante",
    aria_lang: "Langue", aria_theme: "Mode jour / nuit", aria_github: "Voir le code sur GitHub",
    st: { ok: "Plutôt fiable", check: "À confirmer", none: "Aucune info trouvée" },
    k_keep: "Conservation", k_cost: "Coût", k_id: "Pièce d'identité",
    id_yes: "Exigée", id_no: "Non exigée", id_unk: "Non confirmé",
    copy: "Copier l'adresse", copied: "Copié ✓", source: "Source", country_post: "Poste du pays",
    leads: "Pistes non vérifiées", ret1: "Retour à l'expéditeur", ret2: "Aucune info trouvée",
    def_summary: "Aucune page officielle décrivant ce service n'a été trouvée.",
    ph_legend: "En grisé : à remplacer par tes informations. Le reste s'écrit tel quel.",
    poste: "Poste restante", par_avion: "PAR AVION", meter_paid: "PORT PAYÉ",
    h1: (n) => `Poste restante : ${n}`,
    title: (n) => `Poste restante ${n} : adresse, durée et frais`,
    titleNo: (n) => `Poste restante ${n} : informations et pistes`,
    brief_h: "En bref", example_h: "Exemple d'adresse", details_h: "Durée, coût et conseils",
    brief: (n, l, a, d, c, i) => `${n} : la poste restante s'appelle « ${l} » et est assurée par ${a}. Une lettre y est gardée : ${d}. Coût : ${c}. Pièce d'identité : ${i}.`,
    caveat_ok: "Durée, coût et format de l'adresse sont confirmés par une page officielle.",
    caveat_check: "Cette fiche est à confirmer : au moins une information clé n'a pas pu être vérifiée sur une page officielle. Appelle la poste du pays avant d'envoyer quoi que ce soit d'important.",
    caveat_none: "Nous n'avons trouvé aucune page officielle sur ce service. Cela ne prouve pas qu'il n'existe pas : beaucoup de sites de postes bloquent l'accès automatique ou n'en parlent pas.",
    desc: (n, d, c, a) => `Poste restante ${n} : exemple d'adresse, conservation : ${d}, coût : ${c}. Source : ${a}.`,
    descNo: (n, a) => `Poste restante ${n} : aucune page officielle trouvée pour ${a}. Pistes à vérifier et alternatives.`,
    imgAlt: "Enveloppe « par avion » avec le titre Poste restante, des timbres et des tampons postaux",
    related: (r) => `Autres pays : ${r}`,
    all: "Tous les pays", footer: "Fait avec amour du papier et de l'encre · Les infos sont indicatives, vérifie toujours auprès de la poste locale.",
    jmfta: "Journée mondiale du faux timbre d'artiste", jmftaHref: "/faux-timbre.html", support: "♥ Soutenir le projet", sameAs: "English"
  },
  en: {
    lang: "en", prefix: "/en/countries/", ogLocale: "en_GB", homeQuery: "?lang=en", colon: ": ",
    back: "← Poste restante", crumb: "Poste restante",
    aria_lang: "Language", aria_theme: "Light / dark mode", aria_github: "View the code on GitHub",
    st: { ok: "Fairly reliable", check: "To be confirmed", none: "No information found" },
    k_keep: "Held for", k_cost: "Cost", k_id: "ID document",
    id_yes: "Required", id_no: "Not required", id_unk: "Unconfirmed",
    copy: "Copy address", copied: "Copied ✓", source: "Source", country_post: "Country's post office",
    leads: "Unverified leads", ret1: "Return to sender", ret2: "No information found",
    def_summary: "No official page describing this service was found.",
    ph_legend: "Greyed out: replace with your own details. Write the rest exactly as shown.",
    poste: "Poste restante", par_avion: "AIR MAIL", meter_paid: "POSTAGE PAID",
    h1: (n) => `Poste restante: ${n}`,
    title: (n) => `Poste restante in ${n}: address, holding period and fees`,
    titleNo: (n) => `Poste restante in ${n}: information and leads`,
    brief_h: "In short", example_h: "Example address", details_h: "Holding period, cost and tips",
    brief: (n, l, a, d, c, i) => `${n}: poste restante is called “${l}” and is run by ${a}. A letter is held: ${d}. Cost: ${c}. ID document: ${i}.`,
    caveat_ok: "The holding period, the cost and the address format are confirmed by an official page.",
    caveat_check: "This entry is to be confirmed: at least one key piece of information could not be verified on an official page. Call the country's post office before sending anything important.",
    caveat_none: "We found no official page about this service. That doesn't prove it doesn't exist: many postal websites block automated access or simply don't mention it.",
    desc: (n, d, c, a) => `Poste restante in ${n}: example address, held for ${d}, cost: ${c}. Source: ${a}.`,
    descNo: (n, a) => `Poste restante in ${n}: no official page found for ${a}. Leads to check and alternatives.`,
    imgAlt: "Airmail envelope with the title Poste restante, stamps and postmarks",
    related: (r) => `More countries: ${r}`,
    all: "All countries", footer: "Made with a love of paper and ink · Information is indicative: always check with the local post office.",
    jmfta: "World Artists' Fake Stamp Day", jmftaHref: "/faux-timbre.html", support: "♥ Support the project", sameAs: "Français"
  }
};

/* ---------- outils ---------- */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const slugify = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const statusOf = (c) => (c.noInfo ? "none" : c.reliability === "ok" ? "ok" : "check");
const MENTION = /poste restante|postlagernd|fermo ?posta|general delivery|lista de correos|posta restante|до востребования|c\/o|postrestant|address point|\bGD\b/i;

function loc(id, lang) {
  const c = FR[id];
  const e = lang === "en" ? EN[id] : null;
  if (!e) return c;
  return Object.assign({}, c, e, { duration: Object.assign({}, c.duration, e.duration), cost: Object.assign({}, c.cost, e.cost) });
}

/* « Gratuit » → « gratuit » en milieu de phrase, mais « USA » ou « GPO » restent intacts */
const lc = (s) => String(s).replace(/^([A-ZÀ-ÖØ-Þ])([a-zß-öø-ÿ])/, (m, a, b) => a.toLowerCase() + b);

function clip(s, max) {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ") > 60 ? cut.lastIndexOf(" ") : cut.length).replace(/[ ,;:·.]+$/, "") + "…";
}

/* ---------- slugs ---------- */
const IDS = Object.keys(FR).sort();
const PAGES = {};
const seen = { fr: new Map(), en: new Map() };
for (const id of IDS) {
  if (!REGION_OF[id]) throw new Error(`Pays ${id} (${FR[id].name}) sans région : l'ajouter dans REGION_OF`);
  if (!EN[id] || !EN[id].name) throw new Error(`Pays ${id} (${FR[id].name}) sans traduction anglaise`);
  const fr = slugify(FR[id].name), en = slugify(EN[id].name);
  for (const [lang, s] of [["fr", fr], ["en", en]]) {
    if (seen[lang].has(s)) throw new Error(`Slug ${lang} en double : ${s} (${seen[lang].get(s)} et ${id})`);
    seen[lang].set(s, id);
  }
  PAGES[id] = { fr, en, region: REGION_OF[id] };
}
const urlOf = (id, lang) => `${STR[lang].prefix}${PAGES[id][lang]}/`;
const isIndexable = (id) => INDEX_NOINFO || !FR[id].noInfo;

/* ---------- décor postal (même rendu que la carte ; garder en phase avec app.js) ---------- */
function wavesSVG() {
  const row = (y) => `<path d="M0 ${y} q7.5 -6 15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>`;
  return `<svg class="waves" viewBox="0 0 120 40" aria-hidden="true">${row(6)}${row(15)}${row(24)}${row(33)}</svg>`;
}
function postmarkSVG(top, bottom, n) {
  const day = String((n % 27) + 1).padStart(2, "0");
  const tt = esc(top.toUpperCase());
  const fs = tt.length > 16 ? 9.5 : tt.length > 11 ? 11 : 13;
  return `<svg class="postmark" viewBox="0 0 160 160" aria-hidden="true">
      <defs><path id="pmt" d="M 24 80 A 56 56 0 0 1 136 80"/><path id="pmb" d="M 14 80 A 66 66 0 0 0 146 80"/></defs>
      <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" stroke-width="3"/>
      <circle cx="80" cy="80" r="43" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text font-size="${fs}" font-weight="700" letter-spacing="1.5" fill="currentColor" text-anchor="middle"><textPath href="#pmt" startOffset="50%">${tt}</textPath></text>
      <text font-size="11" font-weight="700" letter-spacing="2" fill="currentColor" text-anchor="middle"><textPath href="#pmb" startOffset="50%">${esc(bottom.toUpperCase())}</textPath></text>
      <text x="80" y="78" text-anchor="middle" font-size="26" font-weight="700" fill="currentColor">${day}</text>
      <text x="80" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">NOV 26</text>
    </svg>`;
}
function envMarks(id, c, T) {
  const n = parseInt(id, 10), v = n % 3;
  const amount = (0.5 + (n % 7) * 0.15).toFixed(2).replace(".", T.lang === "fr" ? "," : ".");
  const stamp = `<div class="stamp"><span class="flag">${c.flag}</span><span class="denom">P.R.</span></div>`;
  const oval = Stamps.oval({ top: T.poste.toUpperCase(), value: "1", bottom: T.par_avion });
  if (v === 1) return `<div class="env-marks" aria-hidden="true">${stamp}<div class="oval-wrap ink-blue">${oval}</div></div>`;
  const pm = `<div class="pm-wrap">${postmarkSVG(c.name, T.poste, n)}</div>`;
  const extra = v === 2 ? `<div class="reg-wrap ink-red" aria-hidden="true">${Stamps.registered({ code: String(10000 + ((n * 37) % 90000)) })}</div>` : "";
  return `<div class="env-marks" aria-hidden="true">${wavesSVG()}${stamp}${pm}</div>${extra}`;
}

/* ---------- une page pays ---------- */
function countryPage(id, lang) {
  const T = STR[lang], c = loc(id, lang);
  const other = lang === "fr" ? "en" : "fr";
  const st = statusOf(c), indexable = isIndexable(id);
  const url = SITE + urlOf(id, lang), urlFr = SITE + urlOf(id, "fr"), urlEn = SITE + urlOf(id, "en");
  const title = c.noInfo ? T.titleNo(c.name) : T.title(c.name);
  const idTxt = c.idRequired === true ? T.id_yes : c.idRequired === false ? T.id_no : T.id_unk;
  const description = clip(c.noInfo ? T.descNo(c.name, c.authority) : T.desc(c.name, lc(c.duration.value), lc(c.cost.label), c.authority), 158);
  const ink = `<span class="ink ${st}">${esc(T.st[st])}</span>`;
  const tips = (c.tips || []).map((x) => `<li>${esc(x)}</li>`).join("");

  /* pagination alphabétique (par adresse) */
  const order = IDS.slice().sort((a, b) => PAGES[a][lang].localeCompare(PAGES[b][lang], "en"));
  const i = order.indexOf(id);
  const prev = order[(i - 1 + order.length) % order.length], next = order[(i + 1) % order.length];
  const pagerLink = (pid, dir) => `<a href="${urlOf(pid, lang)}" rel="${dir}">${dir === "prev" ? "← " : ""}${esc(loc(pid, lang).name)}${dir === "next" ? " →" : ""}</a>`;

  let left, right;
  if (c.noInfo) {
    left = `
      <div class="return-box"><span class="return-stamp">${esc(T.ret1)}<br>${esc(T.ret2)}</span></div>
      <p>${esc(c.summary || T.def_summary)}</p>
      <p class="src">${esc(T.country_post)}${T.colon}<a href="${esc(c.source)}" target="_blank" rel="noopener">${esc(c.authority)} ↗</a></p>`;
    right = `
      <h2 class="k-title">${esc(T.leads)}</h2>
      ${tips ? `<ul>${tips}</ul>` : ""}
      <p class="caveat">${esc(T.caveat_none)}</p>`;
  } else {
    const ph = (s) => esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">$1</span>');
    const lines = c.address.map((l) => (MENTION.test(l.replace(/\[[^\]]*\]/g, "")) ? `<span class="mention">${ph(l)}</span>` : ph(l))).join("<br>");
    const copyText = esc(c.address.join("\n")).replace(/\n/g, "&#10;");
    left = `
      <h2 class="k-title">${esc(T.example_h)}</h2>
      <div class="envelope">
        <span class="par-avion" aria-hidden="true">Par avion</span>
        ${envMarks(id, c, T)}
        <p class="addr">${lines}</p>
      </div>
      <p class="env-legend">${esc(T.ph_legend)}</p>
      <button class="copy" type="button" data-copy="${copyText}" data-label="${esc(T.copy)}" data-done="${esc(T.copied)}">${esc(T.copy)}</button>`;
    right = `
      <h2 class="k-title">${esc(T.details_h)}</h2>
      <div class="facts">
        <div class="fact"><div class="k">${esc(T.k_keep)}</div><div class="v">${esc(c.duration.value)}</div></div>
        <div class="fact"><div class="k">${esc(T.k_cost)}</div><div class="v">${esc(c.cost.label)}</div></div>
        <div class="fact"><div class="k">${esc(T.k_id)}</div><div class="v">${esc(idTxt)}</div></div>
      </div>
      <p class="cost-detail">${esc(c.cost.detail)}</p>
      ${tips ? `<ul>${tips}</ul>` : ""}
      <p class="caveat">${esc(st === "ok" ? T.caveat_ok : T.caveat_check)}</p>
      <p class="src">${esc(T.source)}${T.colon}<a href="${esc(c.source)}" target="_blank" rel="noopener">${esc(c.authority)} ↗</a></p>`;
  }

  /* autres pays de la même région : maillage interne (uniquement des pages indexables) */
  const region = REGIONS.find((r) => r.id === PAGES[id].region);
  const siblings = IDS.filter((x) => x !== id && PAGES[x].region === region.id && isIndexable(x))
    .sort((a, b) => PAGES[a][lang].localeCompare(PAGES[b][lang], "en")).slice(0, 14);
  const related = siblings.length ? `
  <section class="related" aria-labelledby="related-h">
    <h2 class="k-title" id="related-h">${esc(T.related(region[lang]))}</h2>
    <ul class="country-links">
${siblings.map((x) => { const sc = loc(x, lang), ss = statusOf(sc); return `      <li><a href="${urlOf(x, lang)}"><span class="dot ${ss}" title="${esc(T.st[ss])}"></span><span aria-hidden="true">${sc.flag}</span> ${esc(sc.name)}</a></li>`; }).join("\n")}
    </ul>
  </section>
` : "";

  const brief = c.noInfo ? "" : `<p class="brief"><strong>${esc(T.brief_h)}.</strong> ${esc(T.brief(c.name, c.localName, c.authority, c.duration.value, c.cost.label, idTxt.toLowerCase()))}</p>`;

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": url, url, name: title, description, inLanguage: lang, isPartOf: { "@type": "WebSite", name: "Poste restante", url: SITE + "/" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: T.crumb, item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: c.name, item: url }
      ] }
    ]
  };

  return `<!doctype html>
<html lang="${lang}" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="fr" href="${urlFr}">
  <link rel="alternate" hreflang="en" href="${urlEn}">
  <link rel="alternate" hreflang="x-default" href="${urlFr}">
  <meta name="robots" content="${indexable ? "index, follow, max-image-preview:large" : "noindex, follow"}">
  <meta name="theme-color" content="#efe3c8" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#1d1812" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Poste restante">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${SITE}/social-preview.png">
  <meta property="og:image:width" content="1280">
  <meta property="og:image:height" content="640">
  <meta property="og:image:alt" content="${esc(T.imgAlt)}">
  <meta property="og:locale" content="${T.ogLocale}">
  <meta property="og:locale:alternate" content="${STR[other].ogLocale}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${SITE}/social-preview.png">
  <meta name="twitter:image:alt" content="${esc(T.imgAlt)}">
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
  <script>
    (function () {
      var t = null;
      try { t = localStorage.getItem('pr-theme'); } catch (e) {}
      if (t !== 'dark' && t !== 'light') t = (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', t);
    })();
  </script>
  <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/style.css">
</head>
<body>

<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
  <defs>
    <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6"/>
    </filter>
  </defs>
</svg>

<div class="airmail-bar" aria-hidden="true"></div>

<nav class="topbar" aria-label="Options">
  <a class="nav-link" href="/${T.homeQuery}#carte">${esc(T.back)}</a>
  <div class="seg" id="lang" role="group" aria-label="${esc(T.aria_lang)}">
    <a href="${urlOf(id, "fr")}" data-l="fr" hreflang="fr" lang="fr"${lang === "fr" ? ' aria-current="page"' : ""}>FR</a>
    <a href="${urlOf(id, "en")}" data-l="en" hreflang="en" lang="en"${lang === "en" ? ' aria-current="page"' : ""}>EN</a>
  </div>
  <button type="button" id="theme" class="icon-btn" aria-label="${esc(T.aria_theme)}">
    <svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
    <svg class="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
  </button>
  <a class="icon-btn" id="github" href="https://github.com/dianedelallee/poste-restante" target="_blank" rel="noopener" aria-label="${esc(T.aria_github)}">
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
  </a>
</nav>

<header class="country-hero">
  <nav class="crumbs" aria-label="Breadcrumb">
    <a href="/${T.homeQuery}">${esc(T.crumb)}</a> <span aria-hidden="true">›</span> <span>${esc(c.name)}</span>
  </nav>
  <h1><span class="flag" aria-hidden="true">${c.flag}</span> ${esc(T.h1(c.name))} ${ink}</h1>
  ${c.noInfo ? "" : `<p class="sub">${esc(c.localName)} · ${esc(c.authority)}</p>`}
  ${brief}
</header>

<main>
  <div class="country-grid">
    <article class="panel">${left}
    </article>
    <article class="panel">${right}
    </article>
  </div>
${related}
  <nav class="pager" aria-label="${esc(T.all)}">
    ${pagerLink(prev, "prev")}
    <a class="all" href="/${T.homeQuery}#pays">${esc(T.all)}</a>
    ${pagerLink(next, "next")}
  </nav>
</main>

<footer>
  <div class="airmail-bar" aria-hidden="true"></div>
  <p>${esc(T.footer)}</p>
  <p><a href="${T.jmftaHref}">${esc(T.jmfta)}</a></p>
  <p><a class="support" href="https://github.com/sponsors/dianedelallee" target="_blank" rel="noopener">${esc(T.support)}</a></p>
</footer>

<script src="/country-page.js" defer></script>
</body>
</html>
`;
}

/* ---------- écriture ---------- */
function write(rel, content) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

// ménage : on supprime les anciens dossiers générés pour ne pas garder de pays retirés
for (const dir of ["pays", "en/countries"]) fs.rmSync(path.join(ROOT, dir), { recursive: true, force: true });

let indexable = 0;
for (const id of IDS) {
  for (const lang of ["fr", "en"]) {
    write(urlOf(id, lang).slice(1) + "index.html", countryPage(id, lang));
  }
  if (isIndexable(id)) indexable++;
}

/* pages.js : lu par la carte (liens vers les pages, régions) */
write("pages.js",
  "/* Fichier généré par scripts/build-pages.js : ne pas modifier à la main. */\n" +
  "window.COUNTRY_PAGES = " + JSON.stringify(PAGES) + ";\n" +
  "window.COUNTRY_REGIONS = " + JSON.stringify(REGIONS) + ";\n");

/* sitemap.xml */
const alt = (id) => ["fr", "en"].map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${urlOf(id, l)}"/>`).join("\n") +
  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${urlOf(id, "fr")}"/>`;
const urls = [
  `  <url>\n    <loc>${SITE}/</loc>\n    <lastmod>2026-11-05</lastmod>\n  </url>`,
  `  <url>\n    <loc>${SITE}/faux-timbre.html</loc>\n    <lastmod>2026-11-05</lastmod>\n  </url>`
];
/* lastmod des fiches : date du dernier commit sur les données (git), sinon rien */
let dataLastmod = "";
try { dataLastmod = require("child_process").execSync("git log -1 --format=%cs -- data.js data.en.js", { cwd: ROOT }).toString().trim(); } catch (e) {}
const lastmod = dataLastmod ? `\n    <lastmod>${dataLastmod}</lastmod>` : "";
for (const id of IDS.filter(isIndexable)) {
  for (const lang of ["fr", "en"]) urls.push(`  <url>\n    <loc>${SITE}${urlOf(id, lang)}</loc>${lastmod}\n${alt(id)}\n  </url>`);
}
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`);

/* llms.txt : résumé du site pour les assistants IA (proposition de format : llmstxt.org ; aucun moteur n'a confirmé s'en servir) */
const llmsLine = (id) => {
  const en = loc(id, "en"), fr = loc(id, "fr");
  const idTxt = en.idRequired === true ? "ID required" : en.idRequired === false ? "ID not required" : "ID unconfirmed";
  const dur = /^(un|not )confirmed/i.test(en.duration.value) ? "holding period unconfirmed" : `held ${lc(en.duration.value)}`;
  return `- [${en.name}](${SITE}${urlOf(id, "en")}): ${dur}; cost: ${lc(en.cost.label)}; ${idTxt}. French: [${fr.name}](${SITE}${urlOf(id, "fr")})`;
};
const reliable = IDS.filter((id) => statusOf(FR[id]) === "ok").length;
const documented = IDS.filter(isIndexable);
const llms = `# Poste restante

> An independent, bilingual (French and English) guide to poste restante, also called general delivery: how to address a letter to a post office instead of a home, how long the mail is held, what it costs and whether an ID is required, country by country. ${IDS.length} countries are covered; each entry says how reliable its information is.

The information comes from postal operators' official pages where they could be read. Each entry is marked "Fairly reliable" (holding period, cost and address wording confirmed by an official page; ${reliable} entries), "To be confirmed" (a key piece of information is missing or comes from a secondary source) or "No information found" (this does not prove the service does not exist). Always check with the local post office before sending anything important. The site is not an official postal service.

## Main pages

- [Home, interactive map and country index](${SITE}/): search a country or click the map to see an example envelope, holding period, cost and tips. Available in French and English.
- [World Artists' Fake Stamp Day (JMFTA) 2026](${SITE}/faux-timbre.html): what the mail art day is, the rules to take part and the 2026 edition (Thursday 19 November 2026, with Angers, France as the destination). Available in French and English.
- [Source code and data](https://github.com/dianedelallee/poste-restante): the country data, in French and English, and how to contribute.

## Country pages

Pages with confirmed or partly confirmed information, by region. Each page has a French and an English version.

${REGIONS.map((r) => {
  const ids = documented.filter((id) => PAGES[id].region === r.id).sort((a, b) => PAGES[a].en.localeCompare(PAGES[b].en, "en"));
  return ids.length ? `### ${r.en}\n\n${ids.map(llmsLine).join("\n")}\n` : "";
}).filter(Boolean).join("\n")}
## Optional

- [Sitemap](${SITE}/sitemap.xml)
- [How to contribute](https://github.com/dianedelallee/poste-restante/blob/main/CONTRIBUTING.md)
`;
write("llms.txt", llms);

/* index.html : liste des pays, entre les repères */
const indexPath = path.join(ROOT, "index.html");
let home = fs.readFileSync(indexPath, "utf8");
const START = "<!-- COUNTRY-INDEX:START -->", END = "<!-- COUNTRY-INDEX:END -->";
if (!home.includes(START) || !home.includes(END)) throw new Error("Repères COUNTRY-INDEX introuvables dans index.html");
const block = REGIONS.map((r) => {
  const ids = IDS.filter((id) => PAGES[id].region === r.id).sort((a, b) => PAGES[a].fr.localeCompare(PAGES[b].fr, "en"));
  const items = ids.map((id) => {
    const c = FR[id], st = statusOf(c);
    return `        <li><a href="${urlOf(id, "fr")}" data-id="${id}"><span class="dot ${st}" title="${esc(STR.fr.st[st])}"></span><span aria-hidden="true">${c.flag}</span> ${esc(c.name)}</a></li>`;
  }).join("\n");
  return `      <details class="region" data-region="${r.id}">\n        <summary>${esc(r.fr)} <span class="count">${ids.length}</span></summary>\n        <ul class="country-links">\n${items}\n        </ul>\n      </details>`;
}).join("\n");
home = home.slice(0, home.indexOf(START) + START.length) + "\n" + block + "\n      " + home.slice(home.indexOf(END));
fs.writeFileSync(indexPath, home);

console.log(`${IDS.length} pays × 2 langues = ${IDS.length * 2} pages ; ${indexable * 2} indexables (dans le sitemap), ${(IDS.length - indexable) * 2} en noindex.`);
