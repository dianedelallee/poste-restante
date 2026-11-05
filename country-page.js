/* Petits réglages communs aux pages pays générées : thème, mémorisation de la langue, copie de l'adresse. */
(function () {
  const root = document.documentElement;
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const stored = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };

  const themeBtn = document.getElementById("theme");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store("pr-theme", next);
    });
  }
  if (window.matchMedia) {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) mq.addEventListener("change", (e) => { if (!stored("pr-theme")) root.setAttribute("data-theme", e.matches ? "dark" : "light"); });
  }

  /* choisir une langue la mémorise, pour que l'accueil s'ouvre dans la même langue */
  document.querySelectorAll("#lang a[data-l]").forEach((a) => a.addEventListener("click", () => store("pr-lang", a.dataset.l)));

  document.querySelectorAll(".copy[data-copy]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const done = () => { btn.textContent = btn.dataset.done; setTimeout(() => (btn.textContent = btn.dataset.label), 1600); };
      if (navigator.clipboard) navigator.clipboard.writeText(btn.dataset.copy).then(done, () => {});
    });
  });
})();
