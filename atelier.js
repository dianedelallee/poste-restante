/* Page de l'atelier : langue, thème et textes fixes. Le timbre lui-même est géré par stamp-maker.js. */
(function () {
  const root = document.documentElement;
  const I18N = {
    fr: {
      title: "Fabrique ton faux timbre : atelier en ligne",
      desc: "Compose un faux timbre Pop Art, nature, animaux ou dessin d'enfant, puis télécharge-le et imprime-le.",
      nav_back: "← Journée du faux timbre",
      aria_lang: "Langue", aria_theme: "Mode jour / nuit", aria_github: "Voir le code sur GitHub",
      footer: "Fait avec amour du papier et de l'encre · Les infos sont indicatives, vérifie toujours auprès de la poste locale.",
      footer_jmfta: "Journée mondiale du faux timbre d'artiste",
      footer_home: "Poste restante : comment adresser une lettre, pays par pays",
      support: "♥ Soutenir le projet"
    },
    en: {
      title: "Make your fake stamp: online workshop",
      desc: "Put together a Pop Art, nature, animals or child's drawing fake stamp, then download and print it.",
      nav_back: "← Fake stamp day",
      aria_lang: "Language", aria_theme: "Light / dark mode", aria_github: "View the code on GitHub",
      footer: "Made with a love of paper and ink · Information is indicative: always check with the local post office.",
      footer_jmfta: "World Artists' Fake Stamp Day",
      footer_home: "Poste restante: how to address a letter, country by country",
      support: "♥ Support the project"
    }
  };
  let lang = root.lang === "en" ? "en" : "fr";
  const t = (k) => I18N[lang][k];
  const $ = (id) => document.getElementById(id);
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const stored = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };

  function apply() {
    root.lang = lang;
    document.title = t("title");
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("desc"));
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    document.querySelectorAll("#lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.l === lang)));
    document.dispatchEvent(new Event("pr-langchange"));
  }
  document.querySelectorAll("#lang button").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.l === "en" ? "en" : "fr"; store("pr-lang", lang); apply();
  }));

  function setTheme(th, persist) {
    root.setAttribute("data-theme", th);
    if (persist) store("pr-theme", th);
  }
  $("theme").addEventListener("click", () => setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true));
  if (window.matchMedia) {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) mq.addEventListener("change", (e) => { if (!stored("pr-theme")) setTheme(e.matches ? "dark" : "light", false); });
  }
  if (lang === "en") apply();
})();
