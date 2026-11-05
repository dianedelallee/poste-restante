(function () {
  const root = document.documentElement;

  /* Adresse postale du destinataire 2026, à compléter UNIQUEMENT avec l'adresse publiée dans l'annonce de
     l'organisateur. Tant que ce tableau est vide, la page renvoie vers l'annonce, sans rien inventer.
     Exemple : ["Galerie …", "Rue et numéro", "Code postal VILLE", "FRANCE"] */
  const ADDRESS = ["Artpothicaire", "2 place Sainte-Croix", "49000 ANGERS", "FRANCE"];

  const LINKS = {
    insta: "https://www.instagram.com/p/DfHKf4SjUwY/",
    blog: "https://postenomade.over-blog.com/2026/10/17eme-journee-mondiale-du-faux-timbre-d-artiste.html"
  };

  const I18N = {
    fr: {
      title: "Journée mondiale du faux timbre d'artiste · Poste restante",
      desc: "Qu'est-ce que la Journée mondiale du faux timbre d'artiste ? Le principe, les règles pour participer et les infos de l'édition 2026 : jeudi 19 novembre, cap sur Angers.",
      nav_back: "← Poste restante",
      aria_lang: "Langue", aria_theme: "Mode jour / nuit", aria_github: "Voir le code sur GitHub",
      h_kicker: "Art postal · mail art",
      h_title: "Journée mondiale du faux timbre d'artiste",
      h_lede: "Le troisième jeudi de novembre, on envoie des lettres « affranchies » avec un faux timbre fait main. Cette année, on peut écrire à Angers.",
      h_addr: "Un faux timbre,<br>une vraie lettre",
      h_btn: "Comment participer ↓",
      s1_kicker: "C'est quoi ?",
      s1_title: "Un timbre qui n'existe pas, sur une lettre qui voyage",
      s1_p1: "La <strong>Journée mondiale du faux timbre d'artiste</strong> (JMFTA) est une initiative d'art postal : chacun fabrique son propre faux timbre (dessiné, peint, gravé, collé…), le colle sur une enveloppe <strong>à la place de l'affranchissement officiel</strong>, et l'envoie par la poste.",
      s1_p2: "Elle tient en une seule règle : <strong>pas de vrai timbre</strong>. Le faux timbre est l'œuvre, et la lettre doit voyager pour devenir du mail art, cette pratique qui consiste à créer un courrier unique et à l'envoyer réellement par la poste.",
      f1_k: "Créée par", f1_v: "Tony Mazzocchin, artiste plasticien",
      f2_k: "Quand", f2_v: "Le troisième jeudi de novembre",
      f3_k: "Qui peut participer", f3_v: "Tout le monde, artiste ou non",
      f4_k: "Où envoyer", f4_v: "Un destinataire différent chaque année",
      s2_kicker: "Participer",
      s2_title: "Comment participer, en quatre temps",
      st1_h: "Fabrique ton faux timbre",
      st1_p: "Toutes les techniques sont admises : dessin, peinture, gravure, collage, tampon… Cette année, l'organisateur suggère le style <strong>Pop Art</strong>, sans l'imposer. Aucun thème n'est obligatoire.",
      st2_h: "Colle-le sur l'enveloppe",
      st2_p: "Le faux timbre remplace l'affranchissement officiel. <strong>Ne colle surtout pas de vrai timbre</strong> : l'envoi perdrait sa valeur artistique. Écris aussi la mention « 17ème JMFTA » sur l'enveloppe.",
      st3_h: "Scanne, puis poste le jour J",
      st3_p: "Photographie ou scanne l'enveloppe avant de la poster. Les lettres doivent être postées <strong>uniquement le jeudi 19 novembre 2026</strong>.",
      st4_h: "Partage ta création",
      st4_p: "Envoie le visuel à l'organisateur par e-mail (l'adresse figure dans son annonce). Les créations sont publiées sur son blog et sur son compte Instagram, avec le hashtag <strong>#jmfta2026</strong>.",
      note_h: "Bon à savoir",
      note_p: "La Poste n'est pas officiellement partenaire de l'opération, et les autres postes peuvent réagir différemment. Ces lettres passent le plus souvent sans problème, mais elles ne sont pas affranchies : il arrive, rarement, que le destinataire doive payer une surtaxe, ou que l'envoi soit refusé. Prévois un destinataire prévenu, et note ton adresse au dos de l'enveloppe pour qu'un éventuel retour te parvienne.",
      s3_kicker: "Édition 2026",
      s3_title: "La 17e JMFTA : cap sur Angers",
      date_mon: "nov. 2026", date_dow: "jeudi",
      s3_p1: "Cette année, <strong>un nouveau destinataire s'est proposé</strong> pour accueillir la 17ème JMFTA : la <strong>Galerie L'Artpothicaire, à Angers</strong>. Elle exposera toutes les mail art reçues, à une date encore à définir.",
      s3_p2: "L'appel de septembre invitait aussi chacun à choisir ses propres destinataires : tu peux donc envoyer ton faux timbre à la galerie, à un proche, ou aux deux.",
      c1: "<strong>Date :</strong> jeudi 19 novembre 2026, pour poster. L'appel ne mentionne aucune tolérance.",
      c2: "<strong>Mention :</strong> « 17ème JMFTA » sur l'enveloppe.",
      c3: "<strong>Règle :</strong> un faux timbre à la place de l'affranchissement officiel, jamais de vrai timbre.",
      c4: "<strong>Style :</strong> libre, avec le Pop Art en suggestion.",
      c5: "<strong>Partage :</strong> blog Poste Nomade, Instagram <em>@mazzocchintony</em>, hashtag <em>#jmfta2026</em>.",
      s4_kicker: "Un peu d'histoire",
      s4_title: "D'où vient cette journée ?",
      s4_p1: "Tony Mazzocchin, artiste plasticien et pratiquant du mail art, raconte avoir lancé la journée alors qu'il était alité après une fracture : il écrivait à ses élèves de lycée « sous forme de mail art ». Comme on était en novembre, il a lancé la journée par e-mail auprès de ses correspondants, puis sur les réseaux. La première édition lui a valu environ 200 lettres.",
      s4_p2: "Il a fixé lui-même la règle de la date : le troisième jeudi de novembre. La presse situe la création en 2010 ; dans un billet de 2021, il parle d'une journée « née il y a douze ans ». Les éditions sont numérotées depuis : 2026 est la 17e.",
      s4_h: "Quelques éditions",
      t1: "<strong>2021 (12e)</strong> : jeudi 18 novembre, courrier adressé à Lausanne.",
      t2: "<strong>2024 (15e)</strong> : jeudi 21 novembre, au Micro Musée International d'Art Postal de Rencurel, sur le thème « Mailart Museum ».",
      t3: "<strong>2025 (16e)</strong> : sans thème imposé.",
      t4: "<strong>2026 (17e)</strong> : jeudi 19 novembre, avec Angers comme destination.",
      s4_p3: "Au fil des éditions, le courrier a aussi été adressé à des lieux comme le Musée de La Poste, à Paris, ou le village suisse de Denens.",
      s5_kicker: "Sources",
      s5_title: "D'où viennent ces informations",
      s5_p: "Cette page est indépendante et n'est pas affiliée à l'organisateur. Les règles de 2026 viennent de ses annonces ; vérifie toujours l'annonce avant d'envoyer, car elle prime sur cette page.",
      l1: "Annonce de la 17e JMFTA (30 septembre 2026) ↗",
      l2: "Annonce du nouveau destinataire à Angers (26 octobre 2026) ↗",
      l3: "Histoire de la journée, par son fondateur (2021) ↗",
      l4: "Publication Instagram sur l'édition à Angers ↗",
      l5: "Article de presse sur l'édition 2025 (Entrevue) ↗",
      l6: "Compte rendu de l'édition 2024 (blog de Paco) ↗",
      footer: "Fait avec amour du papier et de l'encre · Les infos sont indicatives, vérifie toujours auprès de la poste locale.",
      support: "♥ Soutenir le projet",
      full_date: "Jeudi 19 novembre 2026",
      rel_n: (n) => `dans ${n} jours`, rel_1: "demain", rel_0: "c'est aujourd'hui !", rel_past: "édition passée",
      addr_fallback: "L'adresse postale exacte est indiquée dans l'annonce de l'organisateur. Vérifie-la avant d'envoyer :",
      addr_l1: "Publication Instagram ↗", addr_l2: "Annonce du 26 octobre ↗",
      addr_caption: "Adresse relevée sur la publication Instagram de l'édition à Angers. Vérifie-la dans l'annonce avant d'envoyer.",
      copy: "Copier l'adresse", copied: "Copié ✓",
      pm_top: "17E JMFTA", pm_bottom: "ANGERS", pm_mon: "NOV 26", locale: "fr-FR"
    },
    en: {
      title: "World Artists' Fake Stamp Day · Poste restante",
      desc: "What is the World Artists' Fake Stamp Day? The idea, how to take part and the 2026 edition: Thursday 19 November, heading for Angers.",
      nav_back: "← Poste restante",
      aria_lang: "Language", aria_theme: "Light / dark mode", aria_github: "View the code on GitHub",
      h_kicker: "Postal art · mail art",
      h_title: "World Artists' Fake Stamp Day",
      h_lede: "On the third Thursday of November, people post letters “franked” with a hand-made fake stamp. This year, you can write to Angers.",
      h_addr: "A fake stamp,<br>a real letter",
      h_btn: "How to take part ↓",
      s1_kicker: "What is it?",
      s1_title: "A stamp that doesn't exist, on a letter that travels",
      s1_p1: "The <strong>World Artists' Fake Stamp Day</strong> (JMFTA, from its French name) is a postal art initiative: everyone makes their own fake stamp (drawn, painted, engraved, collaged…), sticks it on an envelope <strong>instead of the official postage</strong>, and sends it through the post.",
      s1_p2: "It comes down to a single rule: <strong>no real stamp</strong>. The fake stamp is the artwork, and the letter has to travel to become mail art, the practice of creating a unique piece of mail and really sending it through the post.",
      f1_k: "Created by", f1_v: "Tony Mazzocchin, visual artist",
      f2_k: "When", f2_v: "The third Thursday of November",
      f3_k: "Who can take part", f3_v: "Everyone, artist or not",
      f4_k: "Where to send", f4_v: "A different recipient every year",
      s2_kicker: "Take part",
      s2_title: "How to take part, in four steps",
      st1_h: "Make your fake stamp",
      st1_p: "Any technique goes: drawing, painting, engraving, collage, rubber stamp… This year, the organiser suggests <strong>Pop Art</strong> style, without making it compulsory. There is no required theme.",
      st2_h: "Stick it on the envelope",
      st2_p: "The fake stamp replaces the official postage. <strong>Never stick a real stamp on it</strong>: the item would lose its artistic value. Also write the mention “17ème JMFTA” on the envelope.",
      st3_h: "Scan it, then post it on the day",
      st3_p: "Photograph or scan the envelope before posting it. Letters must be posted <strong>only on Thursday 19 November 2026</strong>.",
      st4_h: "Share your creation",
      st4_p: "Email the image to the organiser (the address is in his announcement). Creations are published on his blog and on his Instagram account, with the hashtag <strong>#jmfta2026</strong>.",
      note_h: "Good to know",
      note_p: "The French postal service (La Poste) is not an official partner of the event, and other postal services may react differently. These letters usually go through without any problem, but they are not franked: occasionally, the recipient has to pay a surcharge, or the item is refused. Warn your recipient, and write your own address on the back so that a returned letter can reach you.",
      s3_kicker: "2026 edition",
      s3_title: "The 17th JMFTA: heading for Angers",
      date_mon: "Nov. 2026", date_dow: "Thursday",
      s3_p1: "This year, <strong>a new recipient has come forward</strong> to host the 17th JMFTA: <strong>Galerie L'Artpothicaire, in Angers</strong>. It will exhibit all the mail art received, at a date still to be set.",
      s3_p2: "September's call also invited everyone to choose their own recipients: so you can send your fake stamp to the gallery, to a friend, or both.",
      c1: "<strong>Date:</strong> Thursday 19 November 2026, for posting. The call mentions no leeway.",
      c2: "<strong>Mention:</strong> “17ème JMFTA” on the envelope.",
      c3: "<strong>Rule:</strong> a fake stamp instead of the official postage, never a real stamp.",
      c4: "<strong>Style:</strong> free, with Pop Art as a suggestion.",
      c5: "<strong>Sharing:</strong> Poste Nomade blog, Instagram <em>@mazzocchintony</em>, hashtag <em>#jmfta2026</em>.",
      s4_kicker: "A bit of history",
      s4_title: "Where does this day come from?",
      s4_p1: "Tony Mazzocchin, a visual artist and mail art practitioner, says he started the day when he was bedridden after a fracture: he was writing to his high-school students “in the form of mail art”. As it was November, he launched the day by email to his correspondents, then on social media. The first edition brought him about 200 letters.",
      s4_p2: "He set the date rule himself: the third Thursday of November. The press places its creation in 2010; in a 2021 post, he speaks of a day “born twelve years ago”. Editions have been numbered since: 2026 is the 17th.",
      s4_h: "A few editions",
      t1: "<strong>2021 (12th)</strong>: Thursday 18 November, mail addressed to Lausanne.",
      t2: "<strong>2024 (15th)</strong>: Thursday 21 November, at the Micro Musée International d'Art Postal in Rencurel, on the theme “Mailart Museum”.",
      t3: "<strong>2025 (16th)</strong>: no imposed theme.",
      t4: "<strong>2026 (17th)</strong>: Thursday 19 November, with Angers as the destination.",
      s4_p3: "Over the years, mail has also been addressed to places such as the Musée de La Poste in Paris, or the Swiss village of Denens.",
      s5_kicker: "Sources",
      s5_title: "Where this information comes from",
      s5_p: "This page is independent and not affiliated with the organiser. The 2026 rules come from his announcements; always check the announcement before sending, as it takes precedence over this page.",
      l1: "Announcement of the 17th JMFTA (30 September 2026) ↗",
      l2: "Announcement of the new recipient in Angers (26 October 2026) ↗",
      l3: "History of the day, by its founder (2021) ↗",
      l4: "Instagram post about the Angers edition ↗",
      l5: "Press article about the 2025 edition (Entrevue) ↗",
      l6: "Report on the 2024 edition (Paco's blog) ↗",
      footer: "Made with a love of paper and ink · Information is indicative: always check with the local post office.",
      support: "♥ Support the project",
      full_date: "Thursday 19 November 2026",
      rel_n: (n) => `in ${n} days`, rel_1: "tomorrow", rel_0: "today!", rel_past: "past edition",
      addr_fallback: "The exact postal address is given in the organiser's announcement. Check it before sending:",
      addr_l1: "Instagram post ↗", addr_l2: "26 October announcement ↗",
      addr_caption: "Address taken from the Instagram post about the Angers edition. Check it in the announcement before sending.",
      copy: "Copy address", copied: "Copied ✓",
      pm_top: "17TH JMFTA", pm_bottom: "ANGERS", pm_mon: "NOV 26", locale: "en-GB"
    }
  };

  let lang = root.lang === "en" ? "en" : "fr";
  const t = (k) => (I18N[lang][k] !== undefined ? I18N[lang][k] : I18N.fr[k]);
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const stored = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };

  /* tampon rond de l'accueil de la page */
  function postmarkSVG() {
    const id = "pm" + Math.random().toString(36).slice(2, 8);
    const top = esc(t("pm_top")), bottom = esc(t("pm_bottom"));
    return `<svg class="postmark" viewBox="0 0 160 160" aria-hidden="true">
      <defs><path id="${id}t" d="M 24 80 A 56 56 0 0 1 136 80"/><path id="${id}b" d="M 14 80 A 66 66 0 0 0 146 80"/></defs>
      <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" stroke-width="3"/>
      <circle cx="80" cy="80" r="43" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text font-size="13" font-weight="700" letter-spacing="1.5" fill="currentColor" text-anchor="middle"><textPath href="#${id}t" startOffset="50%">${top}</textPath></text>
      <text font-size="11" font-weight="700" letter-spacing="2" fill="currentColor" text-anchor="middle"><textPath href="#${id}b" startOffset="50%">${bottom}</textPath></text>
      <text x="80" y="78" text-anchor="middle" font-size="26" font-weight="700" fill="currentColor">19</text>
      <text x="80" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">${esc(t("pm_mon"))}</text>
    </svg>`;
  }

  /* compte à rebours jusqu'au jeudi 19 novembre 2026 */
  function renderCountdown() {
    const el = $("countdown");
    if (!el) return;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const n = Math.round((new Date(2026, 10, 19) - today) / 864e5);
    const rel = n > 1 ? t("rel_n")(n) : n === 1 ? t("rel_1") : n === 0 ? t("rel_0") : t("rel_past");
    el.textContent = `${t("full_date")} · ${rel}`;
  }

  /* adresse du destinataire : on n'affiche que ce qui est publié dans l'annonce */
  function renderAddress() {
    const box = $("jmfta-address");
    if (!box) return;
    if (ADDRESS.length) {
      box.innerHTML = `<div class="envelope"><p class="addr">${ADDRESS.map(esc).join("<br>")}</p></div>
        <p class="addr-caption">${esc(t("addr_caption"))}</p>
        <button class="copy" type="button">${esc(t("copy"))}</button>`;
      const btn = box.querySelector(".copy");
      btn.addEventListener("click", () => {
        const done = () => { btn.textContent = t("copied"); setTimeout(() => (btn.textContent = t("copy")), 1600); };
        if (navigator.clipboard) navigator.clipboard.writeText(ADDRESS.join("\n")).then(done, () => {});
      });
    } else {
      box.innerHTML = `<p class="addr-note">${esc(t("addr_fallback"))} <a href="${LINKS.insta}" target="_blank" rel="noopener">${esc(t("addr_l1"))}</a> · <a href="${LINKS.blog}" target="_blank" rel="noopener">${esc(t("addr_l2"))}</a></p>`;
    }
  }

  function applyStatic() {
    root.lang = lang;
    document.title = t("title");
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("desc"));
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    document.querySelectorAll("#lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.l === lang)));
    const pm = $("hero-pm");
    if (pm) pm.innerHTML = postmarkSVG();
    renderCountdown();
    renderAddress();
  }

  function setLang(l, persist) {
    lang = l === "en" ? "en" : "fr";
    if (persist) store("pr-lang", lang);
    applyStatic();
  }
  document.querySelectorAll("#lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.l, true)));

  function setTheme(th, persist) {
    root.setAttribute("data-theme", th);
    if (persist) store("pr-theme", th);
  }
  $("theme").addEventListener("click", () => setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true));
  if (window.matchMedia) {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) mq.addEventListener("change", (e) => { if (!stored("pr-theme")) setTheme(e.matches ? "dark" : "light", false); });
  }

  setLang(lang, false);
})();
