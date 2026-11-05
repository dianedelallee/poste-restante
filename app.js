(function () {
  const DATA = window.COUNTRIES || {};
  const EN = window.COUNTRIES_EN || {};
  const WORLD_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json";
  const root = document.documentElement;

  /* ---------- textes de l'interface ---------- */
  const I18N = {
    fr: {
      title: "Poste restante · le tour du monde du courrier en attente",
      desc: "Comment adresser une lettre en poste restante, pays par pays : intitulé, durée de conservation, coûts.",
      hero_kicker: "Carnet de correspondante",
      hero_lede: "Écrire à quelqu'un qui n'a pas d'adresse fixe. Ou qui en a une, mais préfère retirer sa lettre au guichet, comme au bon vieux temps.",
      hero_addr: "À l'attention de toi,<br>quelque part dans le monde",
      hero_btn: "Voir la carte ↓",
      p_title: "Le principe, en trois temps",
      p1_h: "On écrit",
      p1_p: "L'expéditeur adresse la lettre à un <strong>bureau de poste</strong> plutôt qu'à un domicile, avec la mention locale (<em>poste restante</em>, <em>general delivery</em>, <em>lista de correos</em>…).",
      p2_h: "La poste garde",
      p2_p: "La lettre attend au guichet pendant une <strong>durée limitée</strong> : de 7 jours à plusieurs mois selon les pays, et parfois contre des frais. Passé ce délai, elle repart à l'expéditeur.",
      p3_h: "On retire",
      p3_p: "Le destinataire se présente avec une <strong>pièce d'identité</strong>. Le nom sur l'enveloppe doit correspondre exactement à celui du document.",
      m_title: "Le bureau de tri",
      m_hint: "Cherche un pays, pioche au hasard, ou clique sur la carte.",
      s_label: "Destinataire",
      s_ph: "Japon, Suisse, Chili…",
      s_random: "Un pays au hasard",
      m_error: "La carte n'a pas pu se charger (connexion ?). Utilise la recherche ci-dessus.",
      panel_empty: "Choisis un pays pour voir comment adresser ta lettre.",
      t_title: "Quelques réflexes",
      t1_h: "Nom exact", t1_p: "Écris-le comme sur ton passeport. Majuscule pour le nom de famille, on évite les surnoms.",
      t2_h: "Bureau précis", t2_p: "Quand tu peux, nomme le bureau de poste et son code postal : la ville seule ne suffit pas toujours.",
      t3_h: "Anticipe le délai", t3_p: "Compte le temps d'acheminement <em>plus</em> la durée de garde. Mieux vaut arriver avant la lettre.",
      t4_h: "Pas de colis", t4_p: "La poste restante vise surtout les lettres. Pour les colis, les règles (et les frais) changent souvent.",
      t5_h: "Appelle avant", t5_p: "Tous les bureaux ne proposent pas le service. Un petit coup de fil évite un aller-retour inutile.",
      t6_h: "Les mots locaux", t6_p: "Ajoute la mention locale : un facteur lira plus vite « <em>Lista de Correos</em> » qu'une traduction.",
      c_title: "Une info manque ou est fausse ?",
      c_p1: "Les règles changent, les postes aussi. Chaque fiche porte un tampon :",
      c_p2: "Mieux vaut appeler la poste du pays avant d'envoyer quoi que ce soit d'important.",
      footer: "Fait avec amour du papier et de l'encre · Les infos sont indicatives, vérifie toujours auprès de la poste locale.",
      st_ok: "Plutôt fiable", st_check: "À confirmer", st_none: "Aucune info trouvée",
      aria_lang: "Langue", aria_theme: "Mode jour / nuit", aria_github: "Voir le code sur GitHub",
      aria_legend: "Filtrer par fiabilité de l'information", aria_map: "Carte du monde interactive",
      aria_zin: "Zoomer", aria_zout: "Dézoomer", aria_zreset: "Réinitialiser",
      sorting: "Bureau de tri", poste: "Poste restante",
      no_entry: (q) => `Pas encore de fiche pour « ${q} »`,
      not_doc: "pas encore documenté",
      k_keep: "Conservation", k_cost: "Coût", k_id: "Pièce d'identité",
      id_yes: "Exigée", id_no: "Non exigée", id_unk: "Non confirmé",
      copy: "Copier l'adresse", copied: "Copié ✓",
      source: "Source", country_post: "Poste du pays",
      leads: "Pistes non vérifiées",
      ret1: "Retour à l'expéditeur", ret2: "Aucune info trouvée",
      def_summary: "Aucune page officielle décrivant ce service n'a été trouvée.",
      locale: "fr-FR",
      meter_paid: "PORT PAYÉ", par_avion: "PAR AVION", prio_a: "PRIORITAIRE", prio_b: "PRIORITY",
      ph_legend: "En grisé : à remplacer par tes informations. Le reste s'écrit tel quel.",
      nav_jmfta: "✉ Journée du faux timbre · 19 nov.", support: "♥ Soutenir le projet"
    },
    en: {
      title: "Poste restante · a world tour of held letters",
      desc: "How to address a letter to poste restante, country by country: wording, holding period, fees.",
      hero_kicker: "A pen pal's notebook",
      hero_lede: "Writing to someone with no fixed address. Or to someone who has one but would rather pick up their letter at the counter, like in the good old days.",
      hero_addr: "For you,<br>somewhere in the world",
      hero_btn: "See the map ↓",
      p_title: "How it works, in three steps",
      p1_h: "You write",
      p1_p: "The sender addresses the letter to a <strong>post office</strong> instead of a home, using the local wording (<em>poste restante</em>, <em>general delivery</em>, <em>lista de correos</em>…).",
      p2_h: "The post office holds it",
      p2_p: "The letter waits at the counter for a <strong>limited time</strong>: from 7 days to several months depending on the country, sometimes for a fee. After that, it goes back to the sender.",
      p3_h: "You collect it",
      p3_p: "The recipient shows up with an <strong>ID document</strong>. The name on the envelope must match the document exactly.",
      m_title: "The sorting office",
      m_hint: "Search for a country, pick one at random, or click the map.",
      s_label: "Addressee",
      s_ph: "Japan, Switzerland, Chile…",
      s_random: "Random country",
      m_error: "The map could not load (connection?). Use the search above.",
      panel_empty: "Pick a country to see how to address your letter.",
      t_title: "A few good habits",
      t1_h: "Exact name", t1_p: "Write it as it appears on your passport. Surname in capitals, no nicknames.",
      t2_h: "Precise office", t2_p: "When you can, name the post office and its postcode: the city alone isn't always enough.",
      t3_h: "Plan for the delay", t3_p: "Count the transit time <em>plus</em> the holding period. It's better to arrive before the letter does.",
      t4_h: "No parcels", t4_p: "Poste restante mostly covers letters. For parcels, the rules (and fees) change often.",
      t5_h: "Call ahead", t5_p: "Not every office offers the service. A quick call saves a wasted trip.",
      t6_h: "Local words", t6_p: "Add the local wording: a postal clerk will spot “<em>Lista de Correos</em>” faster than a translation.",
      c_title: "Something missing or wrong?",
      c_p1: "Rules change, and so do postal services. Every entry carries a stamp:",
      c_p2: "It's wise to call the country's post office before sending anything important.",
      footer: "Made with a love of paper and ink · Information is indicative: always check with the local post office.",
      st_ok: "Fairly reliable", st_check: "To be confirmed", st_none: "No information found",
      aria_lang: "Language", aria_theme: "Light / dark mode", aria_github: "View the code on GitHub",
      aria_legend: "Filter by reliability of the information", aria_map: "Interactive world map",
      aria_zin: "Zoom in", aria_zout: "Zoom out", aria_zreset: "Reset",
      sorting: "Sorting office", poste: "Poste restante",
      no_entry: (q) => `No entry yet for “${q}”`,
      not_doc: "not documented yet",
      k_keep: "Held for", k_cost: "Cost", k_id: "ID document",
      id_yes: "Required", id_no: "Not required", id_unk: "Unconfirmed",
      copy: "Copy address", copied: "Copied ✓",
      source: "Source", country_post: "Country's post office",
      leads: "Unverified leads",
      ret1: "Return to sender", ret2: "No information found",
      def_summary: "No official page describing this service was found.",
      locale: "en-GB",
      meter_paid: "POSTAGE PAID", par_avion: "AIR MAIL", prio_a: "PRIORITY", prio_b: "PRIORITAIRE",
      ph_legend: "Greyed out: replace with your own details. Write the rest exactly as shown.",
      nav_jmfta: "✉ Fake stamp day · 19 Nov", support: "♥ Support the project"
    }
  };
  let lang = root.lang === "en" ? "en" : "fr";
  const t = (k) => (I18N[lang][k] !== undefined ? I18N[lang][k] : I18N.fr[k]);

  const $ = (id) => document.getElementById(id);
  const panel = $("panel"), tooltip = $("tooltip"), mapWrap = document.querySelector(".map-wrap");
  const input = $("q"), results = $("results"), legend = $("legend");

  const idOf = (f) => String(f.id == null ? "" : f.id).padStart(3, "0");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const statusOf = (c) => (c.noInfo ? "none" : c.reliability === "ok" ? "ok" : "check");
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const stored = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };

  /* fiche pays dans la langue courante (le français est la source, l'anglais la surcharge) */
  function loc(id) {
    const c = DATA[id];
    const e = lang === "en" ? EN[id] : null;
    if (!e) return c;
    return Object.assign({}, c, e, { duration: Object.assign({}, c.duration, e.duration), cost: Object.assign({}, c.cost, e.cost) });
  }

  const entries = Object.keys(DATA).map((id) => {
    const c = DATA[id];
    return { id, c, key: norm([c.name, (EN[id] || {}).name || "", c.localName || "", c.authority || ""].join(" ")) };
  });
  const sortedEntries = () => entries.slice().sort((a, b) => loc(a.id).name.localeCompare(loc(b.id).name, lang));

  let selectedId = null, filter = null, paths = null, svg = null, zoom = null, feats = {};
  const W = 960, H = 500;

  /* ---------- décor postal ---------- */
  function wavesSVG() {
    const row = (y) => `<path d="M0 ${y} q7.5 -6 15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>`;
    return `<svg class="waves" viewBox="0 0 120 40" aria-hidden="true">${row(6)}${row(15)}${row(24)}${row(33)}</svg>`;
  }
  function postmarkSVG(top, bottom) {
    const id = "pm" + Math.random().toString(36).slice(2, 8);
    const d = new Date();
    const day = String(d.getDate()).padStart(2, "0");
    const mon = d.toLocaleDateString(t("locale"), { month: "short" }).replace(".", "").toUpperCase();
    const tt = esc(top.toUpperCase());
    const fs = tt.length > 16 ? 9.5 : tt.length > 11 ? 11 : 13;
    return `<svg class="postmark" viewBox="0 0 160 160" aria-hidden="true">
      <defs><path id="${id}t" d="M 24 80 A 56 56 0 0 1 136 80"/><path id="${id}b" d="M 14 80 A 66 66 0 0 0 146 80"/></defs>
      <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" stroke-width="3"/>
      <circle cx="80" cy="80" r="43" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text font-size="${fs}" font-weight="700" letter-spacing="1.5" fill="currentColor" text-anchor="middle"><textPath href="#${id}t" startOffset="50%">${tt}</textPath></text>
      <text font-size="11" font-weight="700" letter-spacing="2" fill="currentColor" text-anchor="middle"><textPath href="#${id}b" startOffset="50%">${esc(bottom.toUpperCase())}</textPath></text>
      <text x="80" y="78" text-anchor="middle" font-size="26" font-weight="700" fill="currentColor">${day}</text>
      <text x="80" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">${esc(mon)} ${String(d.getFullYear()).slice(2)}</text>
    </svg>`;
  }
  const renderHeroPm = () => { const el = $("hero-pm"); if (el) el.innerHTML = postmarkSVG(t("poste"), t("sorting")); };

  /* tampons décoratifs : valeurs et numéros purement illustratifs */
  const amount = (n) => (0.5 + (n % 7) * 0.15).toFixed(2).replace(".", lang === "fr" ? "," : ".");
  const meterSVG = (n) => (window.Stamps ? Stamps.meter({ head: t("meter_paid"), value: amount(n), foot: t("poste").toUpperCase(), code: "N° " + String(40 + n).padStart(4, "0") }) : "");
  const ovalSVG = () => (window.Stamps ? Stamps.oval({ top: t("poste").toUpperCase(), value: "1", bottom: t("par_avion") }) : "");
  const regSVG = (n) => (window.Stamps ? Stamps.registered({ code: String(10000 + ((n * 37) % 90000)) }) : "");
  const prioSVG = () => (window.Stamps ? Stamps.priority({ a: t("prio_a"), b: t("prio_b") }) : "");

  function renderDeco() {
    const hd = $("hero-deco");
    if (hd) hd.innerHTML = `<div class="d d-meter ink-red">${meterSVG(3)}</div><div class="d d-oval ink-black">${ovalSVG()}</div>`;
    const cd = $("contrib-deco");
    if (cd) cd.innerHTML = `<div class="ink-blue">${prioSVG()}</div>`;
  }

  /* tampons de l'enveloppe : trois variantes selon le pays, pour varier les fiches */
  function envMarks(id, c) {
    const n = parseInt(id, 10), v = n % 3;
    const stamp = `<div class="stamp"><span class="flag">${c.flag}</span><span class="denom">P.R.</span></div>`;
    if (v === 1) return `<div class="env-marks" aria-hidden="true">${stamp}<div class="oval-wrap ink-blue">${ovalSVG()}</div></div>`;
    const pm = `<div class="pm-wrap">${postmarkSVG(c.name, t("poste"))}</div>`;
    const extra = v === 2 ? `<div class="reg-wrap ink-red" aria-hidden="true">${regSVG(n)}</div>` : "";
    return `<div class="env-marks" aria-hidden="true">${wavesSVG()}${stamp}${pm}</div>${extra}`;
  }

  /* ---------- panneau ---------- */
  const MENTION = /poste restante|postlagernd|fermo ?posta|general delivery|lista de correos|posta restante|до востребования|c\/o|postrestant|address point|\bGD\b/i;

  function renderPanel(id) {
    if (!DATA[id]) return;
    const c = loc(id);
    const st = statusOf(c);
    const ink = `<span class="ink ${st}">${t("st_" + st)}</span>`;
    const tips = (c.tips || []).map((x) => `<li>${esc(x)}</li>`).join("");

    if (c.noInfo) {
      panel.innerHTML = `
        <h3><span aria-hidden="true">${c.flag}</span> ${esc(c.name)}</h3>
        <p class="sub">${esc(c.authority)}</p>
        <div class="return-box"><span class="return-stamp">${esc(t("ret1"))}<br>${esc(t("ret2"))}</span></div>
        <p>${esc(c.summary || t("def_summary"))}</p>
        ${tips ? `<p class="k-title">${esc(t("leads"))}</p><ul>${tips}</ul>` : ""}
        <p class="src">${esc(t("country_post"))} : <a href="${esc(c.source)}" target="_blank" rel="noopener">${esc(c.authority)} ↗</a></p>`;
      return;
    }

    /* les parties entre [crochets] sont à remplacer : elles s'affichent en grisé */
    const ph = (s) => esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">$1</span>');
    const lines = c.address.map((l) => (MENTION.test(l.replace(/\[[^\]]*\]/g, "")) ? `<span class="mention">${ph(l)}</span>` : ph(l))).join("<br>");
    const idTxt = c.idRequired === true ? t("id_yes") : c.idRequired === false ? t("id_no") : t("id_unk");

    panel.innerHTML = `
      <h3><span aria-hidden="true">${c.flag}</span> ${esc(c.name)} ${ink}</h3>
      <p class="sub">${esc(c.localName)} · ${esc(c.authority)}</p>

      <div class="envelope">
        <span class="par-avion" aria-hidden="true">Par avion</span>
        ${envMarks(id, c)}
        <p class="addr">${lines}</p>
      </div>
      <p class="env-legend">${esc(t("ph_legend"))}</p>
      <button class="copy" type="button">${esc(t("copy"))}</button>

      <div class="facts" style="margin-top:1rem">
        <div class="fact"><div class="k">${esc(t("k_keep"))}</div><div class="v">${esc(c.duration.value)}</div></div>
        <div class="fact"><div class="k">${esc(t("k_cost"))}</div><div class="v">${esc(c.cost.label)}</div></div>
        <div class="fact"><div class="k">${esc(t("k_id"))}</div><div class="v">${esc(idTxt)}</div></div>
      </div>
      <p class="cost-detail">${esc(c.cost.detail)}</p>
      ${tips ? `<ul>${tips}</ul>` : ""}
      <p class="src">${esc(t("source"))} : <a href="${esc(c.source)}" target="_blank" rel="noopener">${esc(c.authority)} ↗</a></p>`;

    panel.querySelector(".copy").addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const done = () => { btn.textContent = t("copied"); setTimeout(() => (btn.textContent = t("copy")), 1600); };
      if (navigator.clipboard) navigator.clipboard.writeText(c.address.join("\n")).then(done, () => {});
    });
  }

  /* ---------- sélection ---------- */
  function focusOnMap(id) {
    const f = feats[id];
    if (!f || !svg) return;
    const [[x0, y0], [x1, y1]] = path.bounds(f);
    const dx = x1 - x0, dy = y1 - y0, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    const k = Math.max(1, Math.min(8, 0.6 / Math.max(dx / W, dy / H)));
    svg.transition().duration(650).call(zoom.transform, d3.zoomIdentity.translate(W / 2, H / 2).scale(k).translate(-cx, -cy));
  }

  function select(id, opts = {}) {
    if (!DATA[id]) return;
    selectedId = id;
    renderPanel(id);
    if (paths) paths.classed("selected", (d) => idOf(d) === id);
    input.value = loc(id).name;
    closeResults();
    try { history.replaceState(null, "", "#pays-" + id); } catch (e) {}
    if (!opts.noZoom) focusOnMap(id);
    if (opts.scroll !== false && window.matchMedia("(max-width: 820px)").matches) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- recherche (combobox) ---------- */
  let active = -1, shown = [];
  function closeResults() { results.hidden = true; input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant"); active = -1; }
  function setActive(i) {
    active = i;
    [...results.children].forEach((li, n) => li.setAttribute("aria-selected", n === i ? "true" : "false"));
    if (i >= 0 && results.children[i]) { input.setAttribute("aria-activedescendant", results.children[i].id); results.children[i].scrollIntoView({ block: "nearest" }); }
  }
  function renderResults() {
    const q = norm(input.value.trim());
    shown = q ? sortedEntries().filter((e) => e.key.includes(q)) : [];
    if (!q) return closeResults();
    results.innerHTML = shown.length
      ? shown.slice(0, 8).map((e, i) => {
          const c = loc(e.id), st = statusOf(c);
          return `<li role="option" id="opt-${i}" aria-selected="false" data-id="${e.id}"><span class="dot ${st}"></span><span aria-hidden="true">${c.flag}</span><span class="nm">${esc(c.name)}</span><span class="sub">${esc(t("st_" + st))}</span></li>`;
        }).join("")
      : `<li class="none-found" role="option" aria-disabled="true">${esc(t("no_entry")(input.value.trim()))}</li>`;
    results.hidden = false;
    input.setAttribute("aria-expanded", "true");
    active = -1;
  }
  input.addEventListener("input", renderResults);
  input.addEventListener("focus", () => { input.select(); if (input.value.trim()) renderResults(); });
  input.addEventListener("keydown", (e) => {
    const n = Math.min(shown.length, 8);
    if (e.key === "ArrowDown") { e.preventDefault(); if (results.hidden) renderResults(); setActive(n ? (active + 1) % n : -1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(n ? (active - 1 + n) % n : -1); }
    else if (e.key === "Enter") { const pick = shown[active >= 0 ? active : 0]; if (pick && !results.hidden) { e.preventDefault(); select(pick.id); } }
    else if (e.key === "Escape") closeResults();
  });
  results.addEventListener("mousedown", (e) => { const li = e.target.closest("li[data-id]"); if (li) { e.preventDefault(); select(li.dataset.id); } });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search")) closeResults(); });

  $("random").addEventListener("click", () => {
    const pool = entries.filter((e) => !e.c.noInfo && (!filter || statusOf(e.c) === filter));
    const list = pool.length ? pool : entries;
    select(list[Math.floor(Math.random() * list.length)].id);
  });

  /* ---------- légende / filtres ---------- */
  function applyFilter() {
    legend.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.s === filter)));
    if (paths) paths.classed("dim", (d) => { if (!filter) return false; const c = DATA[idOf(d)]; return !c || statusOf(c) !== filter; });
  }
  const counts = { ok: 0, check: 0, none: 0 };
  entries.forEach((e) => counts[statusOf(e.c)]++);
  function renderLegend() {
    legend.innerHTML = ["ok", "check", "none"].map((s) =>
      `<button type="button" data-s="${s}" aria-pressed="false"><span class="dot ${s}"></span>${esc(t("st_" + s))} <span class="n">${counts[s]}</span></button>`).join("");
    applyFilter();
  }
  legend.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-s]");
    if (!b) return;
    filter = filter === b.dataset.s ? null : b.dataset.s;
    applyFilter();
  });

  /* ---------- langue ---------- */
  function applyStatic() {
    root.lang = lang;
    document.title = t("title");
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("desc"));
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => el.setAttribute("placeholder", t(el.dataset.i18nPh)));
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    document.querySelectorAll("#lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.l === lang)));
  }
  function setLang(l, persist) {
    lang = l === "en" ? "en" : "fr";
    if (persist) store("pr-lang", lang);
    applyStatic();
    renderLegend();
    renderHeroPm();
    renderDeco();
    if (selectedId) { renderPanel(selectedId); input.value = loc(selectedId).name; }
    if (!results.hidden) renderResults();
    if (paths) paths.attr("aria-label", (d) => (DATA[idOf(d)] ? loc(idOf(d)).name : null));
  }
  document.querySelectorAll("#lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.l, true)));

  /* ---------- thème jour / nuit ---------- */
  function setTheme(th, persist) {
    root.setAttribute("data-theme", th);
    if (persist) store("pr-theme", th);
  }
  $("theme").addEventListener("click", () => setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true));
  if (window.matchMedia) {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => { if (!stored("pr-theme")) setTheme(e.matches ? "dark" : "light", false); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
  }

  /* ---------- démarrage ---------- */
  const m = /^#pays-(\d{3})$/.exec(location.hash);
  if (m && DATA[m[1]]) { selectedId = m[1]; }
  setLang(lang, false);
  if (selectedId) { renderPanel(selectedId); input.value = loc(selectedId).name; }

  /* ---------- carte ---------- */
  if (!window.d3 || !window.topojson) { $("map-error").hidden = false; return; }

  svg = d3.select("#map");
  svg.attr("viewBox", `0 0 ${W} ${H}`);
  const defs = svg.append("defs");
  defs.append("pattern").attr("id", "hatch").attr("width", 5).attr("height", 5).attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)")
    .call((p) => {
      p.append("rect").attr("width", 5).attr("height", 5).attr("fill", "transparent");
      p.append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 5).attr("stroke", "#9a8b72").attr("stroke-width", 1.6);
    });
  const g = svg.append("g");
  const projection = d3.geoNaturalEarth1().fitExtent([[8, 8], [W - 8, H - 8]], { type: "Sphere" });
  const path = d3.geoPath(projection);

  zoom = d3.zoom().scaleExtent([1, 14]).translateExtent([[0, 0], [W, H]]).extent([[0, 0], [W, H]]).on("zoom", (e) => g.attr("transform", e.transform));
  svg.call(zoom);
  $("zin").onclick = () => svg.transition().duration(250).call(zoom.scaleBy, 1.6);
  $("zout").onclick = () => svg.transition().duration(250).call(zoom.scaleBy, 1 / 1.6);
  $("zreset").onclick = () => svg.transition().duration(350).call(zoom.transform, d3.zoomIdentity);

  d3.json(WORLD_URL).then((world) => {
    /* sans l'Antarctique (010) : aucune fiche dessus, et il mange la moitié de la hauteur de la carte */
    const features = topojson.feature(world, world.objects.countries).features.filter((f) => idOf(f) !== "010");
    projection.fitExtent([[8, 8], [W - 8, H - 8]], { type: "FeatureCollection", features });
    features.forEach((f) => { feats[idOf(f)] = f; });
    paths = g.selectAll("path").data(features).join("path")
      .attr("class", (d) => { const c = DATA[idOf(d)]; return "country" + (c ? " on s-" + statusOf(c) : ""); })
      .attr("d", path)
      .attr("tabindex", (d) => (DATA[idOf(d)] ? 0 : null))
      .attr("role", (d) => (DATA[idOf(d)] ? "button" : null))
      .attr("aria-label", (d) => (DATA[idOf(d)] ? loc(idOf(d)).name : null))
      .on("click", (e, d) => { if (DATA[idOf(d)]) select(idOf(d), { noZoom: true }); })
      .on("keydown", (e, d) => { if ((e.key === "Enter" || e.key === " ") && DATA[idOf(d)]) { e.preventDefault(); select(idOf(d), { noZoom: true }); } })
      .on("mousemove", (e, d) => {
        const id = idOf(d);
        const label = DATA[id] ? `${DATA[id].flag} ${loc(id).name}` : (d.properties && d.properties.name) || "";
        if (!label) return;
        const r = mapWrap.getBoundingClientRect();
        tooltip.hidden = false;
        tooltip.textContent = label + " · " + (DATA[id] ? t("st_" + statusOf(DATA[id])) : t("not_doc"));
        tooltip.style.left = e.clientX - r.left + "px";
        tooltip.style.top = e.clientY - r.top + "px";
      })
      .on("mouseleave", () => { tooltip.hidden = true; });
    if (selectedId) { paths.classed("selected", (d) => idOf(d) === selectedId); focusOnMap(selectedId); }
    applyFilter();
  }).catch(() => { $("map-error").hidden = false; });
})();
