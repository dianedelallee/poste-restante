/* Tampons et marques postales dessinés en SVG, dans l'esprit des anciennes oblitérations.
   Chaque générateur renvoie une chaîne SVG en currentColor : la couleur d'encre se règle en CSS. */
window.Stamps = (function () {
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ligne ondulée d'oblitération : n arches de 12 unités à partir de (x, y) */
  function wave(x, y, n) {
    let d = `M${x} ${y} q6 -5 12 0`;
    for (let i = 1; i < n; i++) d += " t12 0";
    return `<path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
  }

  /* cadre à double filet : « PORT PAYÉ / 0,85 / POSTE RESTANTE » */
  function meter({ head, value, foot, code }) {
    return `<svg class="stamp-svg" viewBox="0 0 120 92" aria-hidden="true">
      <rect x="3" y="3" width="114" height="86" rx="3" fill="none" stroke="currentColor" stroke-width="3"/>
      <rect x="9" y="9" width="102" height="74" rx="1.5" fill="none" stroke="currentColor" stroke-width="1"/>
      <text x="60" y="25" text-anchor="middle" font-size="10" letter-spacing="2" fill="currentColor">${esc(head)}</text>
      <line x1="18" y1="31" x2="102" y2="31" stroke="currentColor" stroke-width="1"/>
      <text x="60" y="63" text-anchor="middle" font-size="31" font-weight="700" fill="currentColor">${esc(value)}</text>
      <text x="60" y="77" text-anchor="middle" font-size="7.5" letter-spacing="1.5" fill="currentColor">${esc(foot)}</text>
      ${code ? `<text x="105" y="19" text-anchor="end" font-size="6" fill="currentColor">${esc(code)}</text>` : ""}
    </svg>`;
  }

  /* ovale entouré de lignes ondulées */
  function oval({ top, value, bottom }) {
    const left = [20, 30, 40, 50].map((y) => wave(12, y, 4)).join("");
    const right = [20, 30, 40, 50].map((y) => wave(160, y, 4)).join("");
    return `<svg class="stamp-svg" viewBox="0 0 220 70" aria-hidden="true">
      ${left}${right}
      <ellipse cx="110" cy="35" rx="50" ry="30" fill="none" stroke="currentColor" stroke-width="3"/>
      <ellipse cx="110" cy="35" rx="44" ry="24" fill="none" stroke="currentColor" stroke-width="1"/>
      <text x="110" y="23" text-anchor="middle" font-size="7" letter-spacing="1.2" fill="currentColor">${esc(top)}</text>
      <text x="110" y="47" text-anchor="middle" font-size="25" font-weight="700" fill="currentColor">${esc(value)}</text>
      <text x="110" y="57" text-anchor="middle" font-size="6" letter-spacing="1.5" fill="currentColor">${esc(bottom)}</text>
    </svg>`;
  }

  /* étiquette de recommandé : grand « R » dans une case, puis le numéro */
  function registered({ code }) {
    return `<svg class="stamp-svg" viewBox="0 0 130 44" aria-hidden="true">
      <rect x="2" y="2" width="126" height="40" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="36" y1="2" x2="36" y2="42" stroke="currentColor" stroke-width="2.5"/>
      <text x="19" y="34" text-anchor="middle" font-size="32" font-weight="700" fill="currentColor">R</text>
      <text x="44" y="17" font-size="7" letter-spacing="1" fill="currentColor">N°</text>
      <text x="44" y="35" font-size="17" font-weight="700" letter-spacing="1.5" fill="currentColor">${esc(code)}</text>
    </svg>`;
  }

  /* étiquette bilingue de courrier prioritaire */
  function priority({ a, b }) {
    return `<svg class="stamp-svg" viewBox="0 0 150 46" aria-hidden="true">
      <rect x="2" y="2" width="146" height="42" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="8" y1="8" x2="142" y2="8" stroke="currentColor" stroke-width="1"/>
      <line x1="8" y1="38" x2="142" y2="38" stroke="currentColor" stroke-width="1"/>
      <text x="75" y="21" text-anchor="middle" font-size="12" font-weight="700" letter-spacing="1.6" fill="currentColor">${esc(a)}</text>
      <text x="75" y="33" text-anchor="middle" font-size="12" font-weight="700" letter-spacing="1.6" fill="currentColor">${esc(b)}</text>
    </svg>`;
  }

  return { meter, oval, registered, priority };
})();
