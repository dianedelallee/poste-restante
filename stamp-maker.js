/* Atelier « Fabrique ton faux timbre » : dessine un timbre Pop Art dans un canvas, avec des bords dentelés,
   puis l'exporte en PNG (timbre seul, fond transparent) ou en planche A4 à imprimer. Tout reste dans le navigateur. */
(function () {
  const canvas = document.getElementById("stamp-canvas");
  if (!canvas) return;
  const root = document.documentElement;
  const W = 600, H = 750;
  const ZONE = { x: 44, y: 44, w: 512, h: 520 }; /* zone du motif */
  const BAND_Y = 564; /* bandeau du bas : valeur faciale */

  const PALETTES = [
    { id: "pop", bg: "#ffd93b", a: "#e63946", b: "#1d4ed8", c: "#fffdf5", ink: "#14110f" },
    { id: "bonbon", bg: "#ff8fc0", a: "#16bde0", b: "#ffe14d", c: "#fffdf5", ink: "#1c1633" },
    { id: "menthe", bg: "#35c9b8", a: "#ff6b35", b: "#fdf0d5", c: "#fffdf5", ink: "#14221f" },
    { id: "encre", bg: "#efe3c8", a: "#c0392b", b: "#1f4e8c", c: "#fbf4e2", ink: "#2a2118" }
  ];
  const MOTIFS = ["dots", "bubble", "sun", "envelope", "etoile", "coeur", "avion"];
  const VALUES = ["0 €", "0,00", "GRATIS", "∞", "1 BISOU", "0 F"];
  const PAPER = "#fbf4e2";
  const NATURE = [
    { id: "foret", bg: "#cfe8c8", a: "#2f7d4f", b: "#e9805f", c: "#fffdf5", ink: "#1d3b2b" },
    { id: "printemps", bg: "#fbd5e0", a: "#4f9d69", b: "#f2b134", c: "#fffdf5", ink: "#3a2a3a" },
    { id: "automne", bg: "#f5deb3", a: "#b5541c", b: "#6b8e23", c: "#fffbf0", ink: "#3d2a1a" },
    { id: "lagon", bg: "#cfe6ef", a: "#2c8c8c", b: "#ef8354", c: "#fffdf5", ink: "#173a4a" }
  ];
  const ANIMAUX = [
    { id: "jungle", bg: "#ffe08a", a: "#e07b39", b: "#3a7ca5", c: "#fffdf5", ink: "#2b1d12" },
    { id: "nuit", bg: "#2b3a67", a: "#f2b134", b: "#e56b6f", c: "#fff6e0", ink: "#10162b", val: "#f2b134" },
    { id: "prairie", bg: "#b8e0b0", a: "#8d6e63", b: "#f08a5d", c: "#fffdf5", ink: "#2b2118" },
    { id: "bonbon2", bg: "#ffc4d6", a: "#7a5c99", b: "#4fb0c6", c: "#fffdf5", ink: "#2a1a33" }
  ];
  const ENFANT = [
    { id: "crayons", bg: "#fffaf0", a: "#e8473a", b: "#2d7fd3", c: "#ffc93c", g: "#43a85a", ink: "#3a2f2a" },
    { id: "pastel", bg: "#fff8ee", a: "#f28b9d", b: "#7db7e8", c: "#ffd97a", g: "#8fd19e", ink: "#5a4a42" },
    { id: "feutres", bg: "#fffef5", a: "#d6246e", b: "#1e5bd6", c: "#ffb400", g: "#12a150", ink: "#1b1b1b" },
    { id: "cire", bg: "#f6ecd9", a: "#c0392b", b: "#3b6ea8", c: "#e3a82b", g: "#5a8f3c", ink: "#4a3a30" }
  ];
  const JAPON = [
    { id: "hinomaru", bg: "#f3ead8", a: "#c8102e", b: "#1f2f5c", c: "#fffdf5", ink: "#1a1a2e" },
    { id: "indigo", bg: "#27407a", a: "#f0ead6", b: "#d6403a", c: "#fffdf5", ink: "#101a3a", val: "#f0ead6" },
    { id: "sakura", bg: "#f9d9dd", a: "#c2455c", b: "#5b7f95", c: "#fffdf5", ink: "#3a1f2b" },
    { id: "matcha", bg: "#d4dfb4", a: "#4f7a3a", b: "#c8553d", c: "#fffdf5", ink: "#243020" }
  ];
  const STYLES = {
    pop: { motifs: MOTIFS, pals: PALETTES, words: ["POP!", "ZAP!", "WOW", "BOUM!", "YEAH", "MIAM"], word: "POP!" },
    nature: { motifs: ["fleur", "feuillage", "cactus", "tulipes", "champignon", "montagne", "arbre"], pals: NATURE, words: ["JARDIN", "FLEUR", "BONJOUR", "MERCI"], word: "JARDIN" },
    animaux: { motifs: ["chat", "hibou", "poisson", "papillon", "renard", "escargot", "baleine"], pals: ANIMAUX, words: ["MIAOU", "COUCOU", "BLUB", "HOU HOU"], word: "MIAOU" },
    japon: { motifs: ["fugu", "balai", "maneki", "daruma", "fuji", "lanterne", "sakura"], pals: JAPON, words: ["ARIGATO", "KAWAII", "SAKURA", "BONJOUR"], word: "ARIGATO" },
    enfant: { motifs: ["maison", "arcenciel", "bonhomme", "fusee", "fleurs", "bateau", "minou"], pals: ENFANT, words: ["BISOUS", "COUCOU", "SALUT", "MERCI"], word: "BISOUS" }
  };
  const I18N = {
    fr: {
      motif: { dots: "Pois", bubble: "Bulle", sun: "Soleil", envelope: "Enveloppe", fleur: "Fleur", feuillage: "Feuillage", cactus: "Cactus", tulipes: "Tulipes", chat: "Chat", hibou: "Hibou", poisson: "Poisson", papillon: "Papillon", maison: "Maison", arcenciel: "Arc-en-ciel", bonhomme: "Bonhomme", fusee: "Fusée", etoile: "Étoile", coeur: "Cœur", avion: "Avion en papier", champignon: "Champignon", montagne: "Montagne", arbre: "Arbre", renard: "Renard", escargot: "Escargot", baleine: "Baleine", fleurs: "Fleurs", bateau: "Bateau", minou: "Minou", fugu: "Fugu", balai: "Balayette", maneki: "Maneki-neko", daruma: "Daruma", fuji: "Mont Fuji", lanterne: "Lanterne", sakura: "Cerisier" },
      pal: { pop: "Pop", bonbon: "Bonbon", menthe: "Menthe", encre: "Encre", foret: "Forêt", printemps: "Printemps", automne: "Automne", lagon: "Lagon", jungle: "Jungle", nuit: "Nuit", prairie: "Prairie", bonbon2: "Bonbon", crayons: "Crayons", pastel: "Pastel", feutres: "Feutres", cire: "Cire", hinomaru: "Soleil levant", indigo: "Indigo", sakura: "Sakura", matcha: "Matcha" },
      style: { pop: "Pop Art", nature: "Nature", animaux: "Animaux", japon: "Japon", enfant: "Dessin d'enfant" }, l_style: "Style",
      alt: "Aperçu de ton faux timbre",
      kicker: "L'atelier", title: "Fabrique ton faux timbre",
      intro: "Pas le temps de dessiner ? Compose un timbre (Pop Art, nature, animaux, Japon ou dessin d'enfant) en quelques clics, télécharge-le, imprime-le, découpe-le et colle-le sur ton enveloppe. Il remplace l'affranchissement : n'ajoute pas de vrai timbre.",
      l_motif: "Motif", l_pal: "Couleurs", l_word: "Mot", l_value: "Valeur faciale",
      random: "Surprends-moi", png: "Télécharger le timbre (PNG)", sheet: "Planche A4 : ce timbre", sheet_all: "Planche A4 : tous les motifs du style",
      tip: "N'oublie pas d'écrire « 17ème JMFTA » sur l'enveloppe, et de la poster le jeudi 19 novembre.",
      value_default: "0 €", file: "faux-timbre", sheet_file: "faux-timbres-a4", sheet_all_file: "faux-timbres-a4-tous-les-motifs"
    },
    en: {
      motif: { dots: "Dots", bubble: "Bubble", sun: "Sun", envelope: "Envelope", fleur: "Flower", feuillage: "Foliage", cactus: "Cactus", tulipes: "Tulips", chat: "Cat", hibou: "Owl", poisson: "Fish", papillon: "Butterfly", maison: "House", arcenciel: "Rainbow", bonhomme: "Little man", fusee: "Rocket", etoile: "Star", coeur: "Heart", avion: "Paper plane", champignon: "Mushroom", montagne: "Mountains", arbre: "Tree", renard: "Fox", escargot: "Snail", baleine: "Whale", fleurs: "Flowers", bateau: "Boat", minou: "Kitty", fugu: "Fugu", balai: "Straw broom", maneki: "Maneki-neko", daruma: "Daruma", fuji: "Mount Fuji", lanterne: "Lantern", sakura: "Cherry tree" },
      pal: { pop: "Pop", bonbon: "Candy", menthe: "Mint", encre: "Ink", foret: "Forest", printemps: "Spring", automne: "Autumn", lagon: "Lagoon", jungle: "Jungle", nuit: "Night", prairie: "Meadow", bonbon2: "Candy", crayons: "Crayons", pastel: "Pastel", feutres: "Felt tips", cire: "Wax", hinomaru: "Rising sun", indigo: "Indigo", sakura: "Cherry blossom", matcha: "Matcha" },
      style: { pop: "Pop Art", nature: "Nature", animaux: "Animals", japon: "Japan", enfant: "Child's drawing" }, l_style: "Style",
      alt: "Preview of your fake stamp",
      kicker: "The workshop", title: "Make your fake stamp",
      intro: "No time to draw? Put together a stamp (Pop Art, nature, animals, Japan or child's drawing) in a few clicks, download it, print it, cut it out and stick it on your envelope. It replaces the postage: don't add a real stamp.",
      l_motif: "Motif", l_pal: "Colours", l_word: "Word", l_value: "Face value",
      random: "Surprise me", png: "Download the stamp (PNG)", sheet: "A4 sheet: this stamp", sheet_all: "A4 sheet: all motifs of this style",
      tip: "Remember to write “17ème JMFTA” on the envelope, and to post it on Thursday 19 November.",
      value_default: "0 €", file: "fake-stamp", sheet_file: "fake-stamps-a4", sheet_all_file: "fake-stamps-a4-all-motifs"
    }
  };
  const lang = () => (root.lang === "en" ? "en" : "fr");
  const t = (k) => I18N[lang()][k];

  const state = { style: "pop", motif: "dots", pal: "pop", word: "POP!", value: "0 €" };
  const $ = (id) => document.getElementById(id);
  const palette = () => STYLES[state.style].pals.find((p) => p.id === state.pal) || STYLES[state.style].pals[0];
  const FONT = (px, w) => `${w || 800} ${px}px Fraunces, Georgia, serif`;

  /* ---------- petits outils de dessin ---------- */
  function polygon(ctx, pts) {
    ctx.beginPath();
    pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.closePath();
  }
  function burst(ctx, cx, cy, r1, r2, n, fill, ink, lw) {
    const pts = [];
    for (let i = 0; i < n * 2; i++) {
      const a = (Math.PI * i) / n - Math.PI / 2, r = i % 2 ? r1 : r2;
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
    polygon(ctx, pts);
    ctx.fillStyle = fill; ctx.fill();
    if (ink) { ctx.lineWidth = lw || 7; ctx.strokeStyle = ink; ctx.lineJoin = "round"; ctx.stroke(); }
  }
  function halftone(ctx, x0, y0, w, h, step, radius, color) {
    ctx.fillStyle = color;
    for (let y = y0, row = 0; y < y0 + h + step; y += step, row++) {
      for (let x = x0 + (row % 2 ? step / 2 : 0); x < x0 + w + step; x += step) {
        const r = radius(x, y);
        if (r > 0.6) { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); }
      }
    }
  }
  function heart(ctx, cx, cy, s) {
    ctx.beginPath();
    ctx.moveTo(cx, cy + s);
    ctx.bezierCurveTo(cx - 1.6 * s, cy - 0.2 * s, cx - 0.6 * s, cy - 1.1 * s, cx, cy - 0.4 * s);
    ctx.bezierCurveTo(cx + 0.6 * s, cy - 1.1 * s, cx + 1.6 * s, cy - 0.2 * s, cx, cy + s);
    ctx.closePath();
  }
  /* mot en gros caractères, contour d'encre et ombre décalée, réduit pour tenir dans maxW */
  function word(ctx, text, cx, cy, maxW, size, fill, ink, shadow) {
    if (!text) return;
    let px = size;
    ctx.font = FONT(px);
    const w = ctx.measureText(text).width;
    if (w > maxW) { px = Math.floor((px * maxW) / w); ctx.font = FONT(px); }
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(8, px / 7);
    if (shadow) { ctx.strokeStyle = shadow; ctx.strokeText(text, cx + 6, cy + 7); ctx.fillStyle = shadow; ctx.fillText(text, cx + 6, cy + 7); }
    ctx.strokeStyle = ink; ctx.strokeText(text, cx, cy);
    ctx.fillStyle = fill; ctx.fillText(text, cx, cy);
  }

  /* ---------- les cinq motifs ---------- */
  const MOTIF_DRAW = {
    dots(ctx, p, w) {
      halftone(ctx, ZONE.x, ZONE.y, ZONE.w, ZONE.h, 22, (x, y) => 13 * (1 - Math.hypot(x - ZONE.x, y - ZONE.y) / 640), p.a);
      ctx.beginPath(); ctx.arc(300, 270, 140, 0, Math.PI * 2);
      ctx.fillStyle = p.b; ctx.fill();
      ctx.save(); ctx.clip();
      halftone(ctx, 160, 130, 280, 280, 18, (x, y) => 9 * Math.max(0, (y - 200) / 210) + 1 * ((x - 160) / 280), p.c);
      ctx.restore();
      ctx.beginPath(); ctx.arc(300, 270, 140, 0, Math.PI * 2);
      ctx.lineWidth = 9; ctx.strokeStyle = p.ink; ctx.stroke();
      ctx.beginPath(); ctx.arc(300, 270, 106, Math.PI * 1.15, Math.PI * 1.5);
      ctx.lineWidth = 12; ctx.lineCap = "round"; ctx.strokeStyle = p.c; ctx.stroke(); ctx.lineCap = "butt";
      word(ctx, w, 300, 500, 440, 104, p.c, p.ink, p.a);
    },
    bubble(ctx, p, w) {
      halftone(ctx, ZONE.x, ZONE.y, ZONE.w, ZONE.h, 26, () => 7, p.a);
      const body = () => { ctx.beginPath(); ctx.roundRect(78, 100, 444, 300, 70); };
      const tail = () => polygon(ctx, [[180, 360], [140, 480], [290, 370]]);
      ctx.lineWidth = 10; ctx.strokeStyle = p.ink; ctx.lineJoin = "round";
      body(); ctx.stroke(); tail(); ctx.stroke();
      ctx.fillStyle = p.c; body(); ctx.fill(); tail(); ctx.fill();
      burst(ctx, 470, 100, 16, 36, 6, p.b, p.ink, 5);
      burst(ctx, 110, 470, 12, 28, 5, p.b, p.ink, 5);
      word(ctx, w, 300, 252, 380, 130, p.a, p.ink, p.b);
    },
    sun(ctx, p, w) {
      burst(ctx, 300, 275, 150, 245, 16, p.a, p.ink, 7);
      ctx.beginPath(); ctx.arc(300, 275, 128, 0, Math.PI * 2);
      ctx.fillStyle = p.b; ctx.fill(); ctx.lineWidth = 9; ctx.strokeStyle = p.ink; ctx.stroke();
      ctx.fillStyle = p.ink;
      [[250, 262], [350, 262]].forEach(([x, y]) => { ctx.beginPath(); ctx.ellipse(x, y, 40, 30, 0, 0, Math.PI * 2); ctx.fill(); });
      ctx.fillRect(280, 250, 40, 9);
      ctx.strokeStyle = p.c; ctx.lineWidth = 6; ctx.lineCap = "round";
      [[236, 252, 256, 244], [336, 252, 356, 244]].forEach(([x1, y1, x2, y2]) => { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); });
      ctx.strokeStyle = p.ink; ctx.lineWidth = 9;
      ctx.beginPath(); ctx.arc(300, 296, 58, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke(); ctx.lineCap = "butt";
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.a);
    },
    envelope(ctx, p, w) {
      halftone(ctx, ZONE.x, ZONE.y, ZONE.w, ZONE.h, 24, (x, y) => 11 * (1 - Math.hypot(x - 300, y - 300) / 400), p.a);
      const x = 86, y = 150, ew = 428, eh = 280;
      ctx.fillStyle = p.c; ctx.fillRect(x, y, ew, eh);
      ctx.save(); ctx.beginPath(); ctx.rect(x, y, ew, eh); ctx.clip();
      ctx.lineWidth = 12;
      for (let i = -eh; i < ew + eh; i += 36) {
        ctx.strokeStyle = (i / 36) % 2 === 0 ? p.a : p.b;
        ctx.beginPath(); ctx.moveTo(x + i, y + eh); ctx.lineTo(x + i + eh, y); ctx.stroke();
      }
      ctx.restore();
      ctx.fillStyle = p.c; ctx.fillRect(x + 16, y + 16, ew - 32, eh - 32);
      ctx.strokeStyle = p.ink; ctx.lineWidth = 7; ctx.lineJoin = "round"; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(x + 16, y + 16); ctx.lineTo(300, y + 150); ctx.lineTo(x + ew - 16, y + 16); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + 16, y + eh - 16); ctx.lineTo(x + 150, y + 140); ctx.moveTo(x + ew - 16, y + eh - 16); ctx.lineTo(x + ew - 150, y + 140); ctx.stroke();
      ctx.lineCap = "butt";
      ctx.lineWidth = 9; ctx.strokeRect(x, y, ew, eh);
      heart(ctx, 300, y + 128, 36); ctx.fillStyle = p.a; ctx.fill(); ctx.lineWidth = 7; ctx.stroke();
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.b);
    }
  };


  /* ---------- styles nature, animaux et dessin d'enfant ---------- */
  function leaf(ctx, x, y, len, wid, ang, fill, ink) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    ctx.beginPath(); ctx.moveTo(0, 0);
    ctx.bezierCurveTo(wid, -len * 0.3, wid, -len * 0.75, 0, -len);
    ctx.bezierCurveTo(-wid, -len * 0.75, -wid, -len * 0.3, 0, 0);
    ctx.fillStyle = fill; ctx.fill(); ctx.lineWidth = 6; ctx.strokeStyle = ink; ctx.lineJoin = "round"; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -len * 0.08); ctx.lineTo(0, -len * 0.82); ctx.lineWidth = 4; ctx.stroke();
    ctx.restore();
  }
  function flower5(ctx, x, y, r, fill, center, ink) {
    ctx.lineWidth = 4; ctx.strokeStyle = ink; ctx.fillStyle = fill;
    for (let i = 0; i < 5; i++) {
      const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      ctx.beginPath(); ctx.arc(x + Math.cos(a) * r, y + Math.sin(a) * r, r * 0.8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(x, y, r * 0.6, 0, Math.PI * 2); ctx.fillStyle = center; ctx.fill(); ctx.stroke();
  }
  /* formes remplies puis contourées : on trace tous les contours, puis tous les remplissages, pour fondre les recouvrements */
  function union(ctx, paths, fill, ink, lw) {
    ctx.lineWidth = lw * 2; ctx.strokeStyle = ink; ctx.lineJoin = "round";
    paths.forEach((f) => { ctx.beginPath(); f(); ctx.stroke(); });
    ctx.fillStyle = fill;
    paths.forEach((f) => { ctx.beginPath(); f(); ctx.fill(); });
  }
  const oval = (ctx, x, y, rx, ry, rot) => { ctx.beginPath(); ctx.ellipse(x, y, rx, ry, rot || 0, 0, Math.PI * 2); };
  const fillStroke = (ctx, fill, ink, lw) => { ctx.fillStyle = fill; ctx.fill(); ctx.lineWidth = lw; ctx.strokeStyle = ink; ctx.lineJoin = "round"; ctx.stroke(); };
  function tulipHead(ctx, x, y, s) {
    ctx.beginPath(); ctx.moveTo(x - s, y - s); ctx.lineTo(x - s * 0.5, y - s * 0.4); ctx.lineTo(x, y - s * 1.1); ctx.lineTo(x + s * 0.5, y - s * 0.4); ctx.lineTo(x + s, y - s);
    ctx.bezierCurveTo(x + s * 1.1, y + s * 0.4, x + s * 0.5, y + s, x, y + s);
    ctx.bezierCurveTo(x - s * 0.5, y + s, x - s * 1.1, y + s * 0.4, x - s, y - s); ctx.closePath();
  }

  Object.assign(MOTIF_DRAW, {
    /* --- nature --- */
    fleur(ctx, p, w) {
      [[100, 110, 18], [505, 130, 22], [95, 430, 20], [500, 420, 16]].forEach(([x, y, r]) => flower5(ctx, x, y, r, p.b, p.c, p.ink));
      ctx.lineWidth = 6; ctx.strokeStyle = p.ink; ctx.fillStyle = p.c;
      for (let i = 0; i < 14; i++) {
        ctx.save(); ctx.translate(300, 270); ctx.rotate((Math.PI * 2 * i) / 14);
        ctx.beginPath(); ctx.ellipse(0, -108, 30, 74, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
      }
      ctx.beginPath(); ctx.arc(300, 270, 62, 0, Math.PI * 2); fillStroke(ctx, p.b, p.ink, 7);
      ctx.save(); ctx.beginPath(); ctx.arc(300, 270, 56, 0, Math.PI * 2); ctx.clip();
      halftone(ctx, 238, 208, 124, 124, 17, () => 4.5, p.ink); ctx.restore();
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.a);
    },
    feuillage(ctx, p, w) {
      ctx.strokeStyle = p.ink; ctx.lineWidth = 9; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(300, 450); ctx.lineTo(300, 100); ctx.stroke(); ctx.lineCap = "butt";
      for (let i = 0; i < 6; i++) {
        const y = 420 - i * 55, len = 130 - i * 10, wid = 42 - i * 3;
        leaf(ctx, 300, y, len, wid, -1.0, i % 2 ? p.b : p.a, p.ink);
        leaf(ctx, 300, y, len, wid, 1.0, i % 2 ? p.a : p.b, p.ink);
      }
      leaf(ctx, 300, 125, 95, 30, 0, p.a, p.ink);
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.a);
    },
    cactus(ctx, p, w) {
      const R = (x, y, ww, hh, r) => () => ctx.roundRect(x, y, ww, hh, r);
      union(ctx, [R(250, 120, 100, 240, 50), R(165, 200, 58, 120, 29), R(165, 275, 125, 50, 25), R(377, 170, 58, 120, 29), R(310, 245, 125, 50, 25)], p.a, p.ink, 8);
      ctx.strokeStyle = p.ink; ctx.globalAlpha = 0.4; ctx.lineWidth = 5;
      [278, 322].forEach((x) => { ctx.beginPath(); ctx.moveTo(x, 150); ctx.lineTo(x, 335); ctx.stroke(); });
      ctx.globalAlpha = 1; ctx.fillStyle = p.c;
      for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.arc(i % 2 ? 266 : 334, 160 + i * 28, 4, 0, Math.PI * 2); ctx.fill(); }
      flower5(ctx, 300, 106, 13, p.b, p.c, p.ink);
      ctx.beginPath(); ctx.roundRect(215, 350, 170, 32, 8); fillStroke(ctx, p.b, p.ink, 8);
      polygon(ctx, [[232, 382], [368, 382], [350, 440], [250, 440]]); fillStroke(ctx, p.b, p.ink, 8);
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.a);
    },
    tulipes(ctx, p, w) {
      leaf(ctx, 300, 450, 200, 50, -0.4, p.a, p.ink); leaf(ctx, 300, 450, 200, 50, 0.4, p.a, p.ink);
      const stems = [[190, 252, 220, 380], [300, 212, 300, 330], [410, 257, 380, 380]];
      ctx.lineCap = "round";
      stems.forEach(([x, y, cx, cy]) => {
        [[p.ink, 16], [p.a, 8]].forEach(([col, lw]) => { ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(300, 450); ctx.quadraticCurveTo(cx, cy, x, y); ctx.stroke(); });
      });
      ctx.lineCap = "butt";
      [[190, 210, 42, p.b], [300, 160, 52, p.c], [410, 215, 42, p.b]].forEach(([x, y, s, col]) => { tulipHead(ctx, x, y, s); fillStroke(ctx, col, p.ink, 7); });
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.a);
    },
    /* --- animaux --- */
    chat(ctx, p, w) {
      const ear = (pts) => () => polygon(ctx, pts);
      union(ctx, [() => ctx.arc(300, 265, 140, 0, Math.PI * 2), ear([[185, 175], [175, 55], [275, 120]]), ear([[415, 175], [425, 55], [325, 120]])], p.a, p.ink, 8);
      ctx.fillStyle = p.b;
      polygon(ctx, [[203, 150], [198, 98], [245, 128]]); ctx.fill(); polygon(ctx, [[397, 150], [402, 98], [355, 128]]); ctx.fill();
      ctx.strokeStyle = p.ink; ctx.lineWidth = 6; ctx.lineCap = "round";
      [[-1, 0], [0, 0], [1, 0]].forEach(([i]) => { ctx.beginPath(); ctx.moveTo(300 + i * 24, 140); ctx.lineTo(300 + i * 18, 172); ctx.stroke(); });
      [250, 350].forEach((x) => {
        oval(ctx, x, 248, 32, 38); fillStroke(ctx, p.c, p.ink, 6);
        oval(ctx, x, 250, 10, 27); ctx.fillStyle = p.ink; ctx.fill();
        ctx.beginPath(); ctx.arc(x - 4, 236, 5, 0, Math.PI * 2); ctx.fillStyle = p.c; ctx.fill();
      });
      polygon(ctx, [[283, 292], [317, 292], [300, 312]]); fillStroke(ctx, p.b, p.ink, 5);
      ctx.strokeStyle = p.ink; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(300, 312); ctx.lineTo(300, 328); ctx.moveTo(300, 328); ctx.quadraticCurveTo(284, 350, 258, 334); ctx.moveTo(300, 328); ctx.quadraticCurveTo(316, 350, 342, 334); ctx.stroke();
      [[225, 305, 115, 285], [225, 320, 110, 322], [225, 335, 120, 360]].forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.moveTo(600 - x1, y1); ctx.lineTo(600 - x2, y2); ctx.stroke();
      });
      ctx.lineCap = "butt";
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.b);
    },
    hibou(ctx, p, w) {
      ctx.strokeStyle = p.ink; ctx.lineWidth = 12; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(90, 442); ctx.lineTo(510, 442); ctx.stroke(); ctx.lineCap = "butt";
      polygon(ctx, [[205, 135], [188, 62], [255, 108]]); fillStroke(ctx, p.a, p.ink, 8);
      polygon(ctx, [[395, 135], [412, 62], [345, 108]]); fillStroke(ctx, p.a, p.ink, 8);
      oval(ctx, 300, 275, 125, 165); fillStroke(ctx, p.a, p.ink, 8);
      oval(ctx, 172, 305, 32, 100, 0.15); fillStroke(ctx, p.b, p.ink, 8);
      oval(ctx, 428, 305, 32, 100, -0.15); fillStroke(ctx, p.b, p.ink, 8);
      oval(ctx, 300, 340, 78, 92); fillStroke(ctx, p.c, p.ink, 6);
      ctx.lineWidth = 4;
      for (let r = 0; r < 3; r++) for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(268 + i * 32 + (r % 2) * 0, 315 + r * 32, 13, 0, Math.PI); ctx.stroke(); }
      [250, 350].forEach((x) => {
        ctx.beginPath(); ctx.arc(x, 225, 50, 0, Math.PI * 2); fillStroke(ctx, p.c, p.ink, 7);
        ctx.beginPath(); ctx.arc(x, 228, 21, 0, Math.PI * 2); ctx.fillStyle = p.ink; ctx.fill();
        ctx.beginPath(); ctx.arc(x - 7, 220, 6, 0, Math.PI * 2); ctx.fillStyle = p.c; ctx.fill();
      });
      polygon(ctx, [[284, 262], [316, 262], [300, 302]]); fillStroke(ctx, p.b, p.ink, 6);
      ctx.strokeStyle = p.ink; ctx.lineWidth = 6; ctx.lineCap = "round";
      [-1, 1].forEach((d) => { for (let k = -1; k <= 1; k++) { ctx.beginPath(); ctx.moveTo(300 + d * 40, 428); ctx.lineTo(300 + d * 40 + k * 12, 442); ctx.stroke(); } });
      ctx.lineCap = "butt";
      word(ctx, w, 300, 510, 440, 100, p.c, p.ink, p.b);
    },
    poisson(ctx, p, w) {
      polygon(ctx, [[390, 265], [505, 168], [482, 265], [505, 362]]); fillStroke(ctx, p.b, p.ink, 8);
      polygon(ctx, [[215, 190], [290, 105], [345, 178]]); fillStroke(ctx, p.b, p.ink, 8);
      polygon(ctx, [[265, 345], [300, 412], [350, 338]]); fillStroke(ctx, p.b, p.ink, 8);
      oval(ctx, 260, 265, 155, 100); fillStroke(ctx, p.a, p.ink, 8);
      ctx.save(); oval(ctx, 260, 265, 150, 95); ctx.clip();
      ctx.strokeStyle = p.c; ctx.globalAlpha = 0.75; ctx.lineWidth = 4;
      for (let r = 0; r < 6; r++) for (let x = 170 + (r % 2) * 18; x < 420; x += 36) { ctx.beginPath(); ctx.arc(x, 190 + r * 28, 18, 0, Math.PI); ctx.stroke(); }
      ctx.restore(); ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(190, 238, 23, 0, Math.PI * 2); fillStroke(ctx, p.c, p.ink, 6);
      ctx.beginPath(); ctx.arc(186, 240, 10, 0, Math.PI * 2); ctx.fillStyle = p.ink; ctx.fill();
      ctx.strokeStyle = p.ink; ctx.lineWidth = 6; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(112, 282); ctx.lineTo(150, 292); ctx.moveTo(230, 215); ctx.arc(225, 265, 60, -0.9, 0.9); ctx.stroke(); ctx.lineCap = "butt";
      [[95, 175, 14], [68, 120, 9], [125, 112, 18]].forEach(([x, y, r]) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = p.c; ctx.globalAlpha = 0.8; ctx.fill(); ctx.globalAlpha = 1; ctx.lineWidth = 4; ctx.stroke(); });
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.b);
    },
    papillon(ctx, p, w) {
      [[205, 205, 105, 70, -0.45, p.a], [395, 205, 105, 70, 0.45, p.a], [225, 330, 72, 55, 0.5, p.b], [375, 330, 72, 55, -0.5, p.b]].forEach(([x, y, rx, ry, rot, col]) => { oval(ctx, x, y, rx, ry, rot); fillStroke(ctx, col, p.ink, 8); });
      ctx.fillStyle = p.c;
      [[190, 200, 16], [150, 232, 10], [225, 238, 8], [410, 200, 16], [450, 232, 10], [375, 238, 8], [225, 330, 14], [375, 330, 14]].forEach(([x, y, r]) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); });
      oval(ctx, 300, 285, 17, 105); ctx.fillStyle = p.ink; ctx.fill();
      ctx.beginPath(); ctx.arc(300, 175, 21, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = p.ink; ctx.lineWidth = 6; ctx.lineCap = "round";
      [-1, 1].forEach((d) => { ctx.beginPath(); ctx.moveTo(300 + d * 6, 158); ctx.quadraticCurveTo(300 + d * 25, 110, 300 + d * 52, 98); ctx.stroke(); ctx.beginPath(); ctx.arc(300 + d * 54, 97, 7, 0, Math.PI * 2); ctx.fillStyle = p.ink; ctx.fill(); });
      ctx.lineCap = "butt";
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.b);
    }
  });

  /* --- dessin d'enfant : traits tremblés, coloriage au crayon qui déborde --- */
  function rng(seed) { return () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  let kr = rng(11);
  const jit = (j) => (kr() - 0.5) * 2 * j;
  function wob(ctx, pts, close, j) {
    const out = [], n = pts.length, segs = close ? n : n - 1;
    for (let i = 0; i < segs; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % n];
      const k = Math.max(1, Math.round(Math.hypot(x2 - x1, y2 - y1) / 24));
      for (let m = 0; m < k; m++) out.push([x1 + ((x2 - x1) * m) / k + jit(j), y1 + ((y2 - y1) * m) / k + jit(j)]);
    }
    if (!close) out.push([pts[n - 1][0] + jit(j), pts[n - 1][1] + jit(j)]);
    ctx.beginPath();
    out.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    if (close) ctx.closePath();
  }
  const circ = (cx, cy, r) => Array.from({ length: 34 }, (_, i) => [cx + Math.cos((Math.PI * 2 * i) / 34) * r, cy + Math.sin((Math.PI * 2 * i) / 34) * r]);
  const star = (cx, cy, r) => Array.from({ length: 10 }, (_, i) => { const a = (Math.PI * i) / 5 - Math.PI / 2, d = i % 2 ? r * 0.45 : r; return [cx + Math.cos(a) * d, cy + Math.sin(a) * d]; });
  function kshape(ctx, p, pts, fill) {
    const xs = pts.map((q) => q[0]), ys = pts.map((q) => q[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    if (fill === "paper") { wob(ctx, pts, true, 3); ctx.fillStyle = p.bg; ctx.fill(); }
    else if (fill) {
      ctx.save(); wob(ctx, pts, true, 4); ctx.clip();
      const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, L = Math.hypot(x1 - x0, y1 - y0), a = -0.8 + jit(0.3);
      ctx.strokeStyle = fill; ctx.lineWidth = 9; ctx.lineCap = "round";
      for (let d = -L / 2; d < L / 2; d += 7) {
        ctx.globalAlpha = 0.7 + kr() * 0.25;
        const ox = Math.cos(a + Math.PI / 2) * d, oy = Math.sin(a + Math.PI / 2) * d;
        ctx.beginPath();
        ctx.moveTo(cx + ox - (Math.cos(a) * L) / 2 + jit(3), cy + oy - (Math.sin(a) * L) / 2 + jit(3));
        ctx.lineTo(cx + ox + (Math.cos(a) * L) / 2 + jit(3), cy + oy + (Math.sin(a) * L) / 2 + jit(3));
        ctx.stroke();
      }
      ctx.restore();
    }
    ctx.strokeStyle = p.ink; ctx.lineJoin = "round"; ctx.lineCap = "round";
    ctx.lineWidth = 7; wob(ctx, pts, true, 2.5); ctx.stroke();
    ctx.lineWidth = 3; wob(ctx, pts, true, 2.5); ctx.stroke();
  }
  function kline(ctx, p, pts, lw, col) {
    ctx.strokeStyle = col || p.ink; ctx.lineWidth = lw || 7; ctx.lineCap = "round"; ctx.lineJoin = "round";
    wob(ctx, pts, false, 2.5); ctx.stroke();
  }
  function ksun(ctx, p, x, y, r) {
    for (let i = 0; i < 9; i++) { const a = (Math.PI * 2 * i) / 9; kline(ctx, p, [[x + Math.cos(a) * (r + 12), y + Math.sin(a) * (r + 12)], [x + Math.cos(a) * (r + 34), y + Math.sin(a) * (r + 34)]], 7, p.c); }
    kshape(ctx, p, circ(x, y, r), p.c);
  }
  Object.assign(MOTIF_DRAW, {
    maison(ctx, p) {
      ksun(ctx, p, 105, 110, 36);
      kshape(ctx, p, [[350, 215], [350, 150], [388, 150], [388, 215]], p.g);
      kshape(ctx, p, [[185, 275], [415, 275], [415, 440], [185, 440]], p.c);
      kshape(ctx, p, [[160, 280], [300, 140], [440, 280]], p.a);
      kshape(ctx, p, [[270, 440], [270, 350], [330, 350], [330, 440]], p.b);
      ctx.fillStyle = p.ink; ctx.beginPath(); ctx.arc(318, 398, 5, 0, Math.PI * 2); ctx.fill();
      [[205, 300], [345, 300]].forEach(([x, y]) => { kshape(ctx, p, [[x, y], [x + 52, y], [x + 52, y + 50], [x, y + 50]], p.b); kline(ctx, p, [[x + 26, y + 4], [x + 26, y + 46]], 4, p.bg); kline(ctx, p, [[x + 4, y + 25], [x + 48, y + 25]], 4, p.bg); });
      const z = []; for (let x = 70; x <= 530; x += 22) z.push([x, (x / 22) % 2 ? 432 : 450]);
      kline(ctx, p, z, 9, p.g);
      [100, 480].forEach((x) => { kline(ctx, p, [[x, 440], [x, 390]], 6, p.g); kshape(ctx, p, circ(x, 378, 16), p.a); });
      kline(ctx, p, [[369, 140], [380, 118], [362, 98], [376, 78]], 5, p.ink);
    },
    arcenciel(ctx, p) {
      ksun(ctx, p, 300, 92, 32);
      [[p.a, 200], [p.c, 166], [p.g, 132], [p.b, 98]].forEach(([col, r]) => {
        const pts = []; for (let k = 0; k <= 26; k++) { const a = Math.PI + (Math.PI * k) / 26; pts.push([300 + Math.cos(a) * r, 402 + Math.sin(a) * r]); }
        kline(ctx, p, pts, 30, col);
      });
      [[95, 412, 36], [140, 392, 46], [185, 416, 34], [505, 412, 36], [460, 392, 46], [415, 416, 34]].forEach(([x, y, r]) => kshape(ctx, p, circ(x, y, r), "paper"));
      [[100, 100, 20], [500, 110, 24], [470, 320, 16]].forEach(([x, y, r]) => kshape(ctx, p, star(x, y, r), p.a));
    },
    bonhomme(ctx, p) {
      ctx.save(); ctx.translate(0, -30);
      kline(ctx, p, [[420, 285], [440, 200]], 4, p.ink);
      kshape(ctx, p, circ(445, 155, 46), p.a);
      kshape(ctx, p, [[300, 268], [212, 440], [388, 440]], p.b);
      kline(ctx, p, [[262, 315], [190, 350]], 8); kline(ctx, p, [[338, 315], [422, 285]], 8);
      kline(ctx, p, [[272, 440], [272, 478]], 8); kline(ctx, p, [[328, 440], [328, 478]], 8);
      kline(ctx, p, [[258, 484], [290, 484]], 9, p.a); kline(ctx, p, [[310, 484], [342, 484]], 9, p.a);
      kshape(ctx, p, circ(300, 185, 82), p.c);
      for (let i = 0; i < 7; i++) kline(ctx, p, [[236 + i * 21, 118 + Math.abs(i - 3) * 4], [230 + i * 23, 88 + jit(6)]], 7, p.a);
      ctx.fillStyle = p.ink; [[270, 175], [330, 175]].forEach(([x, y]) => { ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.fill(); });
      kline(ctx, p, [[262, 215], [284, 234], [316, 234], [338, 215]], 6);
      kline(ctx, p, [[298, 190], [294, 205], [304, 205]], 4);
      ctx.restore();
      [[110, 110, 20], [120, 400, 16], [495, 420, 22]].forEach(([x, y, r]) => kshape(ctx, p, star(x, y, r), p.c));
    },
    fusee(ctx, p) {
      [[110, 120, 26], [480, 100, 20], [492, 300, 28], [112, 350, 22]].forEach(([x, y, r]) => kshape(ctx, p, star(x, y, r), p.c));
      kshape(ctx, p, circ(115, 235, 36), p.b); kline(ctx, p, [[62, 258], [168, 212]], 5, p.ink);
      kshape(ctx, p, [[260, 335], [300, 440], [340, 335]], p.c);
      kshape(ctx, p, [[280, 335], [300, 395], [320, 335]], p.a);
      kshape(ctx, p, [[245, 265], [180, 365], [250, 335]], p.a); kshape(ctx, p, [[355, 265], [420, 365], [350, 335]], p.a);
      kshape(ctx, p, [[300, 85], [346, 140], [362, 230], [356, 335], [244, 335], [238, 230], [254, 140]], "paper");
      kshape(ctx, p, [[300, 85], [346, 140], [254, 140]], p.a);
      kshape(ctx, p, circ(300, 225, 32), p.b);
    }
  });
  /* ---------- motifs supplémentaires ---------- */
  const ell = (cx, cy, rx, ry) => Array.from({ length: 34 }, (_, i) => [cx + Math.cos((Math.PI * 2 * i) / 34) * rx, cy + Math.sin((Math.PI * 2 * i) / 34) * ry]);
  const arcPath = (ctx, x, y, r) => () => ctx.arc(x, y, r, 0, Math.PI * 2);
  Object.assign(MOTIF_DRAW, {
    /* --- pop art --- */
    etoile(ctx, p, w) {
      halftone(ctx, ZONE.x, ZONE.y, ZONE.w, ZONE.h, 22, (x, y) => 12 * (1 - Math.hypot(x - 300, y - 270) / 380), p.a);
      burst(ctx, 300, 250, 92, 225, 5, p.b, p.ink, 10);
      burst(ctx, 300, 255, 50, 122, 5, p.a, p.ink, 6);
      burst(ctx, 100, 100, 12, 34, 5, p.c, p.ink, 5); burst(ctx, 505, 130, 10, 28, 5, p.c, p.ink, 5); burst(ctx, 95, 430, 10, 28, 5, p.c, p.ink, 5);
      word(ctx, w, 300, 505, 440, 104, p.c, p.ink, p.a);
    },
    coeur(ctx, p, w) {
      halftone(ctx, ZONE.x, ZONE.y, ZONE.w, ZONE.h, 26, () => 7, p.b);
      burst(ctx, 300, 250, 190, 255, 12, p.c, p.ink, 7);
      heart(ctx, 300, 235, 165); fillStroke(ctx, p.a, p.ink, 10);
      word(ctx, w, 300, 505, 440, 104, p.c, p.ink, p.b);
    },
    avion(ctx, p, w) {
      halftone(ctx, ZONE.x, ZONE.y, ZONE.w, ZONE.h, 24, (x, y) => 10 * (1 - Math.hypot(x - 470, y - 150) / 520), p.b);
      [[110, 140], [440, 390]].forEach(([x, y]) => union(ctx, [arcPath(ctx, x, y, 34), arcPath(ctx, x + 40, y - 14, 44), arcPath(ctx, x + 88, y, 32)], p.c, p.ink, 6));
      ctx.setLineDash([20, 16]); ctx.strokeStyle = p.ink; ctx.lineWidth = 7; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(70, 430); ctx.bezierCurveTo(150, 470, 230, 380, 190, 330); ctx.bezierCurveTo(170, 300, 140, 330, 175, 350); ctx.stroke();
      ctx.setLineDash([]); ctx.lineCap = "butt";
      polygon(ctx, [[130, 255], [470, 150], [265, 300]]); fillStroke(ctx, p.c, p.ink, 8);
      polygon(ctx, [[265, 300], [470, 150], [300, 410]]); fillStroke(ctx, p.a, p.ink, 8);
      polygon(ctx, [[265, 300], [320, 330], [300, 410]]); fillStroke(ctx, p.b, p.ink, 8);
      word(ctx, w, 300, 505, 440, 104, p.c, p.ink, p.a);
    },
    /* --- nature --- */
    champignon(ctx, p, w) {
      leaf(ctx, 190, 445, 70, 18, -0.5, p.a, p.ink); leaf(ctx, 410, 445, 70, 18, 0.5, p.a, p.ink); leaf(ctx, 160, 445, 55, 14, -1.0, p.a, p.ink); leaf(ctx, 440, 445, 55, 14, 1.0, p.a, p.ink);
      ctx.beginPath(); ctx.roundRect(235, 282, 130, 152, [0, 0, 40, 40]); fillStroke(ctx, p.c, p.ink, 8);
      oval(ctx, 300, 282, 170, 26); fillStroke(ctx, p.c, p.ink, 8);
      ctx.beginPath(); ctx.ellipse(300, 282, 170, 150, 0, Math.PI, 0); ctx.closePath(); fillStroke(ctx, p.b, p.ink, 9);
      [[225, 205, 26], [335, 170, 31], [405, 245, 22], [285, 245, 18], [175, 262, 14]].forEach(([x, y, r]) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); fillStroke(ctx, p.c, p.ink, 5); });
      flower5(ctx, 105, 405, 12, p.c, p.b, p.ink); flower5(ctx, 500, 400, 11, p.c, p.b, p.ink);
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.a);
    },
    montagne(ctx, p, w) {
      ctx.beginPath(); ctx.arc(445, 125, 50, 0, Math.PI * 2); fillStroke(ctx, p.b, p.ink, 7);
      polygon(ctx, [[30, 440], [220, 140], [330, 300], [400, 210], [570, 440]]); fillStroke(ctx, p.a, p.ink, 9);
      polygon(ctx, [[220, 140], [185, 205], [205, 195], [225, 217], [245, 195], [263, 208]]); fillStroke(ctx, p.c, p.ink, 6);
      polygon(ctx, [[400, 210], [372, 255], [392, 247], [408, 264], [428, 250]]); fillStroke(ctx, p.c, p.ink, 6);
      [[95, 410, 1], [140, 420, 0.8], [490, 415, 1], [450, 425, 0.75]].forEach(([x, y, s]) => {
        polygon(ctx, [[x, y - 90 * s], [x - 32 * s, y - 35 * s], [x + 32 * s, y - 35 * s]]); fillStroke(ctx, p.ink, p.ink, 4);
        polygon(ctx, [[x, y - 60 * s], [x - 42 * s, y], [x + 42 * s, y]]); fillStroke(ctx, p.ink, p.ink, 4);
      });
      ctx.beginPath(); ctx.rect(30, 436, 540, 70); fillStroke(ctx, p.c, p.ink, 8);
      word(ctx, w, 300, 505, 440, 100, p.a, p.ink, p.b);
    },
    arbre(ctx, p, w) {
      oval(ctx, 300, 445, 160, 24); fillStroke(ctx, p.c, p.ink, 7);
      polygon(ctx, [[272, 320], [328, 320], [342, 440], [258, 440]]); fillStroke(ctx, p.b, p.ink, 8);
      ctx.strokeStyle = p.ink; ctx.lineWidth = 6; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(300, 400); ctx.lineTo(300, 330); ctx.moveTo(300, 360); ctx.lineTo(255, 300); ctx.moveTo(300, 345); ctx.lineTo(345, 295); ctx.stroke(); ctx.lineCap = "butt";
      union(ctx, [arcPath(ctx, 300, 185, 100), arcPath(ctx, 205, 245, 80), arcPath(ctx, 395, 245, 80), arcPath(ctx, 300, 265, 88)], p.a, p.ink, 8);
      [[260, 160], [340, 200], [215, 245], [385, 270], [300, 285], [320, 130], [255, 225]].forEach(([x, y]) => { ctx.beginPath(); ctx.arc(x, y, 13, 0, Math.PI * 2); fillStroke(ctx, p.b, p.ink, 4); });
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.a);
    },
    /* --- animaux --- */
    renard(ctx, p, w) {
      polygon(ctx, [[150, 175], [160, 50], [262, 125]]); fillStroke(ctx, p.a, p.ink, 8);
      polygon(ctx, [[450, 175], [440, 50], [338, 125]]); fillStroke(ctx, p.a, p.ink, 8);
      polygon(ctx, [[172, 150], [175, 95], [225, 132]]); fillStroke(ctx, p.ink, p.ink, 3);
      polygon(ctx, [[428, 150], [425, 95], [375, 132]]); fillStroke(ctx, p.ink, p.ink, 3);
      polygon(ctx, [[130, 175], [300, 150], [470, 175], [440, 300], [300, 415], [160, 300]]); fillStroke(ctx, p.a, p.ink, 9);
      polygon(ctx, [[135, 215], [235, 290], [168, 305]]); fillStroke(ctx, p.c, p.ink, 6);
      polygon(ctx, [[465, 215], [365, 290], [432, 305]]); fillStroke(ctx, p.c, p.ink, 6);
      polygon(ctx, [[215, 305], [300, 255], [385, 305], [300, 415]]); fillStroke(ctx, p.c, p.ink, 6);
      [[240, 235], [360, 235]].forEach(([x, y]) => { oval(ctx, x, y, 14, 20, x < 300 ? 0.4 : -0.4); ctx.fillStyle = p.ink; ctx.fill(); ctx.beginPath(); ctx.arc(x - 4, y - 7, 4, 0, Math.PI * 2); ctx.fillStyle = p.c; ctx.fill(); });
      ctx.beginPath(); ctx.arc(300, 395, 17, 0, Math.PI * 2); ctx.fillStyle = p.ink; ctx.fill();
      ctx.strokeStyle = p.ink; ctx.lineWidth = 5; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(300, 410); ctx.lineTo(300, 420); ctx.stroke(); ctx.lineCap = "butt";
      word(ctx, w, 300, 510, 440, 96, p.c, p.ink, p.b);
    },
    escargot(ctx, p, w) {
      ctx.strokeStyle = p.ink; ctx.lineWidth = 6; ctx.lineCap = "round";
      [[118, 300, 92, 228], [150, 300, 168, 222]].forEach(([x1, y1, x2, y2]) => { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.beginPath(); ctx.arc(x2, y2, 11, 0, Math.PI * 2); ctx.fillStyle = p.ink; ctx.fill(); });
      ctx.lineCap = "butt";
      union(ctx, [() => ctx.roundRect(90, 300, 74, 132, 37), () => ctx.roundRect(100, 372, 380, 62, 31)], p.a, p.ink, 8);
      ctx.beginPath(); ctx.arc(128, 340, 7, 0, Math.PI * 2); ctx.fillStyle = p.ink; ctx.fill();
      ctx.beginPath(); ctx.arc(133, 372, 20, 0.1, Math.PI * 0.9); ctx.lineWidth = 5; ctx.strokeStyle = p.ink; ctx.stroke();
      ctx.beginPath(); ctx.arc(330, 285, 118, 0, Math.PI * 2); fillStroke(ctx, p.b, p.ink, 9);
      ctx.beginPath(); ctx.strokeStyle = p.c; ctx.lineWidth = 9; ctx.lineCap = "round";
      for (let t = 0; t <= 12.5; t += 0.2) { const r = 8 + t * 8, x = 330 + Math.cos(t) * r, y = 285 + Math.sin(t) * r; t ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke(); ctx.lineCap = "butt";
      word(ctx, w, 300, 510, 440, 100, p.c, p.ink, p.b);
    },
    baleine(ctx, p, w) {
      ctx.lineWidth = 7; ctx.strokeStyle = p.c; ctx.lineCap = "round";
      [[190, 205, 150, 120], [190, 205, 230, 120]].forEach(([x1, y1, x2, y2]) => { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.quadraticCurveTo(x1, y1 - 50, x2, y2); ctx.stroke(); });
      ctx.lineCap = "butt";
      [[150, 105, 12], [235, 100, 14], [192, 85, 10]].forEach(([x, y, r]) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); fillStroke(ctx, p.c, p.ink, 4); });
      leaf(ctx, 435, 305, 125, 42, 0.35, p.b, p.ink); leaf(ctx, 435, 305, 115, 42, 1.15, p.b, p.ink);
      oval(ctx, 260, 320, 175, 108); fillStroke(ctx, p.a, p.ink, 9);
      ctx.save(); oval(ctx, 260, 320, 168, 101); ctx.clip(); oval(ctx, 260, 450, 210, 90); ctx.fillStyle = p.c; ctx.fill(); ctx.restore();
      ctx.beginPath(); ctx.arc(145, 295, 11, 0, Math.PI * 2); ctx.fillStyle = p.ink; ctx.fill();
      ctx.beginPath(); ctx.arc(155, 335, 42, 0.2, 1.1); ctx.lineWidth = 6; ctx.strokeStyle = p.ink; ctx.stroke();
      ctx.strokeStyle = p.b; ctx.lineWidth = 9; ctx.lineCap = "round";
      for (let k = 0; k < 2; k++) { ctx.beginPath(); for (let x = 50; x <= 550; x += 10) { const y = 452 + k * 24 + Math.sin(x / 22 + k) * 7; x === 50 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); }
      ctx.lineCap = "butt";
      word(ctx, w, 300, 515, 440, 90, p.c, p.ink, p.b);
    },
    /* --- dessin d'enfant --- */
    fleurs(ctx, p) {
      const z = []; for (let x = 60; x <= 540; x += 22) z.push([x, (x / 22) % 2 ? 440 : 424]);
      kline(ctx, p, z, 9, p.g);
      [[160, 240, p.a, 22], [300, 170, p.b, 26], [440, 255, p.a, 22]].forEach(([x, y, col, r]) => {
        kline(ctx, p, [[x, 430], [x + jit(8), (y + 430) / 2], [x, y + 40]], 8, p.g);
        kshape(ctx, p, [[x, 380], [x - 52, 360], [x - 18, 338]], p.g);
        for (let i = 0; i < 6; i++) { const a = (Math.PI * 2 * i) / 6; kshape(ctx, p, circ(x + Math.cos(a) * r * 1.5, y + Math.sin(a) * r * 1.5, r), col); }
        kshape(ctx, p, circ(x, y, r * 0.9), p.c);
      });
    },
    bateau(ctx, p) {
      ksun(ctx, p, 100, 105, 30);
      kline(ctx, p, [[300, 340], [300, 100]], 7);
      kshape(ctx, p, [[310, 110], [310, 320], [430, 320]], p.c);
      kshape(ctx, p, [[290, 150], [290, 320], [190, 320]], "paper");
      kshape(ctx, p, [[300, 100], [300, 130], [345, 115]], p.a);
      kshape(ctx, p, [[130, 340], [470, 340], [420, 410], [180, 410]], p.a);
      [[235, 372], [300, 372], [365, 372]].forEach(([x, y]) => kshape(ctx, p, circ(x, y, 10), p.c));
      [0, 1].forEach((k) => { const pts = []; for (let x = 50; x <= 550; x += 20) pts.push([x, 428 + k * 26 + Math.sin(x / 16 + k * 2) * 9]); kline(ctx, p, pts, 10, p.b); });
    },
    minou(ctx, p) {
      kline(ctx, p, [[385, 400], [440, 385], [470, 335], [452, 290]], 22, p.ink);
      kline(ctx, p, [[385, 400], [440, 385], [470, 335], [452, 290]], 14, p.c);
      kshape(ctx, p, ell(300, 395, 92, 58), p.c);
      [[262, 440], [338, 440]].forEach(([x, y]) => kshape(ctx, p, circ(x, y, 18), p.c));
      kshape(ctx, p, [[196, 170], [192, 80], [272, 130]], p.c); kshape(ctx, p, [[404, 170], [408, 80], [328, 130]], p.c);
      kshape(ctx, p, [[210, 158], [208, 112], [250, 138]], p.a); kshape(ctx, p, [[390, 158], [392, 112], [350, 138]], p.a);
      kshape(ctx, p, circ(300, 235, 108), p.c);
      for (let i = -1; i <= 1; i++) kline(ctx, p, [[300 + i * 22, 140], [300 + i * 16, 170]], 6, p.a);
      ctx.fillStyle = p.ink; [[262, 222], [338, 222]].forEach(([x, y]) => { ctx.beginPath(); ctx.arc(x, y, 9, 0, Math.PI * 2); ctx.fill(); });
      kshape(ctx, p, [[290, 252], [310, 252], [300, 266]], p.a);
      kline(ctx, p, [[300, 266], [300, 280], [280, 292]], 5); kline(ctx, p, [[300, 280], [320, 292]], 5);
      [[-1, 0], [-1, 1], [-1, 2]].forEach(([d, i]) => { kline(ctx, p, [[255, 268 + i * 12], [185, 252 + i * 22]], 4); kline(ctx, p, [[345, 268 + i * 12], [415, 252 + i * 22]], 4); });
    }
  });
  /* ---------- style Japon ---------- */
  const STRAW = "#e0b25a", WOOD = "#8a5a2b", PETAL = "#ffe0e6";
  function seigaiha(ctx, x0, y0, w, h, r, col, bg, alpha) {
    ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, w, h); ctx.clip();
    ctx.lineWidth = 3;
    for (let row = 0; y0 + row * r * 0.5 < y0 + h + r; row++) {
      const y = y0 + r + row * r * 0.5;
      for (let x = x0 - (row % 2 ? r : 0); x < x0 + w + r; x += r * 2) {
        ctx.globalAlpha = 1; ctx.beginPath(); ctx.arc(x, y, r, Math.PI, 0); ctx.closePath(); ctx.fillStyle = bg; ctx.fill();
        ctx.globalAlpha = alpha; ctx.strokeStyle = col;
        for (let k = 1; k <= 3; k++) { ctx.beginPath(); ctx.arc(x, y, (r * k) / 3.2, Math.PI, 0); ctx.stroke(); }
      }
    }
    ctx.restore();
  }
  function lantern(ctx, p, cx, cy, s) {
    ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s);
    ctx.beginPath(); ctx.roundRect(-55, -150, 110, 28, 6); fillStroke(ctx, p.ink, p.ink, 6);
    ctx.beginPath(); ctx.roundRect(-55, 122, 110, 28, 6); fillStroke(ctx, p.ink, p.ink, 6);
    oval(ctx, 0, 0, 108, 134); fillStroke(ctx, p.a, p.ink, 9);
    ctx.save(); oval(ctx, 0, 0, 104, 130); ctx.clip();
    ctx.strokeStyle = p.ink; ctx.globalAlpha = 0.45; ctx.lineWidth = 4;
    for (let i = -5; i <= 5; i++) { ctx.beginPath(); ctx.ellipse(0, i * 24, 140, 12, 0, 0, Math.PI * 2); ctx.stroke(); }
    ctx.restore(); ctx.globalAlpha = 1;
    ctx.beginPath(); ctx.arc(0, 0, 46, 0, Math.PI * 2); fillStroke(ctx, p.c, p.ink, 6);
    ctx.beginPath(); ctx.arc(0, 0, 30, 0, Math.PI * 2); ctx.lineWidth = 4; ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, 10, 0, Math.PI * 2); ctx.fillStyle = p.a; ctx.fill();
    ctx.strokeStyle = p.b; ctx.lineWidth = 5; ctx.lineCap = "round";
    for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(i * 18, 150); ctx.lineTo(i * 18, 190); ctx.stroke(); }
    ctx.lineCap = "butt"; ctx.restore();
  }
  Object.assign(MOTIF_DRAW, {
    fugu(ctx, p, w) {
      seigaiha(ctx, ZONE.x, ZONE.y, ZONE.w, ZONE.h, 34, p.b, p.bg, 0.3);
      polygon(ctx, [[420, 255], [495, 205], [495, 305]]); fillStroke(ctx, p.b, p.ink, 8);
      for (let i = 0; i < 26; i++) { const a = (Math.PI * 2 * i) / 26; polygon(ctx, [[300 + Math.cos(a - 0.07) * 136, 255 + Math.sin(a - 0.07) * 136], [300 + Math.cos(a) * 166, 255 + Math.sin(a) * 166], [300 + Math.cos(a + 0.07) * 136, 255 + Math.sin(a + 0.07) * 136]]); ctx.fillStyle = p.ink; ctx.fill(); }
      ctx.beginPath(); ctx.arc(300, 255, 140, 0, Math.PI * 2); fillStroke(ctx, p.c, p.ink, 9);
      ctx.save(); ctx.beginPath(); ctx.arc(300, 255, 136, 0, Math.PI * 2); ctx.clip();
      ctx.fillStyle = p.b; ctx.fillRect(150, 100, 300, 105);
      ctx.fillStyle = p.c; [[240, 150, 9], [300, 135, 11], [360, 150, 9], [330, 185, 8], [270, 188, 8], [400, 190, 7]].forEach(([x, y, r]) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); });
      ctx.restore();
      oval(ctx, 305, 300, 48, 28, -0.3); fillStroke(ctx, p.b, p.ink, 6);
      ctx.beginPath(); ctx.arc(230, 232, 30, 0, Math.PI * 2); fillStroke(ctx, p.c, p.ink, 7);
      ctx.beginPath(); ctx.arc(222, 234, 14, 0, Math.PI * 2); ctx.fillStyle = p.ink; ctx.fill();
      ctx.beginPath(); ctx.arc(217, 228, 4, 0, Math.PI * 2); ctx.fillStyle = p.c; ctx.fill();
      ctx.beginPath(); ctx.arc(184, 285, 12, 0, Math.PI * 2); fillStroke(ctx, p.a, p.ink, 5);
      ctx.globalAlpha = 0.55; ctx.beginPath(); ctx.arc(215, 290, 17, 0, Math.PI * 2); ctx.fillStyle = p.a; ctx.fill(); ctx.globalAlpha = 1;
      word(ctx, w, 300, 505, 440, 100, p.c, p.ink, p.a);
    },
    balai(ctx, p, w) {
      [[110, 140], [490, 190], [440, 95], [150, 300]].forEach(([x, y], i) => { oval(ctx, x, y, 14, 9, i * 0.9); fillStroke(ctx, PETAL, p.ink, 3); });
      ctx.beginPath(); ctx.roundRect(284, 55, 32, 215, 14); fillStroke(ctx, WOOD, p.ink, 7);
      ctx.beginPath(); ctx.moveTo(262, 262); ctx.lineTo(338, 262); ctx.lineTo(478, 428); ctx.quadraticCurveTo(300, 462, 122, 428); ctx.closePath(); fillStroke(ctx, STRAW, p.ink, 9);
      ctx.save(); ctx.clip();
      ctx.strokeStyle = p.ink; ctx.globalAlpha = 0.4; ctx.lineWidth = 3;
      for (let i = -9; i <= 9; i++) { ctx.beginPath(); ctx.moveTo(300 + i * 4, 265); ctx.lineTo(300 + i * 26, 440); ctx.stroke(); }
      ctx.restore(); ctx.globalAlpha = 1;
      [[226, 36], [266, 30]].forEach(([y, h]) => { ctx.beginPath(); ctx.roundRect(262, y, 76, h, 8); fillStroke(ctx, p.a, p.ink, 6); });
      ctx.beginPath(); ctx.roundRect(268, 270, 64, 18, 6); fillStroke(ctx, p.a, p.ink, 6);
      word(ctx, w, 300, 510, 440, 100, p.c, p.ink, p.a);
    },
    maneki(ctx, p, w) {
      ctx.beginPath(); ctx.roundRect(200, 428, 200, 26, 10); fillStroke(ctx, p.b, p.ink, 7);
      union(ctx, [() => ctx.ellipse(300, 345, 108, 90, 0, 0, Math.PI * 2), () => ctx.roundRect(392, 168, 48, 160, 24)], p.c, p.ink, 8);
      ctx.beginPath(); ctx.ellipse(416, 168, 30, 36, 0, 0, Math.PI * 2); fillStroke(ctx, p.c, p.ink, 7);
      ctx.strokeStyle = p.ink; ctx.lineWidth = 4; ctx.lineCap = "round";
      [[404, 156, 404, 172], [418, 152, 418, 172], [432, 156, 432, 172]].forEach(([a, b, c, d]) => { ctx.beginPath(); ctx.moveTo(a, b); ctx.lineTo(c, d); ctx.stroke(); }); ctx.lineCap = "butt";
      oval(ctx, 236, 365, 32, 24, 0.3); fillStroke(ctx, p.c, p.ink, 6);
      polygon(ctx, [[208, 150], [200, 70], [268, 112]]); fillStroke(ctx, p.c, p.ink, 8);
      polygon(ctx, [[392, 150], [400, 70], [332, 112]]); fillStroke(ctx, p.c, p.ink, 8);
      polygon(ctx, [[218, 135], [214, 96], [250, 118]]); ctx.fillStyle = p.a; ctx.fill(); polygon(ctx, [[382, 135], [386, 96], [350, 118]]); ctx.fill();
      oval(ctx, 300, 205, 112, 90); fillStroke(ctx, p.c, p.ink, 8);
      ctx.beginPath(); ctx.roundRect(215, 282, 170, 30, 14); fillStroke(ctx, p.a, p.ink, 7);
      ctx.beginPath(); ctx.arc(300, 326, 17, 0, Math.PI * 2); fillStroke(ctx, "#f2c14e", p.ink, 5);
      ctx.strokeStyle = p.ink; ctx.lineWidth = 6; ctx.lineCap = "round";
      [262, 338].forEach((x) => { ctx.beginPath(); ctx.arc(x, 205, 17, Math.PI, 0); ctx.stroke(); });
      ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(288, 238, 12, 0.1, Math.PI - 0.1); ctx.arc(312, 238, 12, 0.1, Math.PI - 0.1); ctx.stroke();
      [[-1], [1]].forEach(([d]) => { [[0, 0], [0, 14]].forEach(([_, dy]) => { ctx.beginPath(); ctx.moveTo(300 + d * 55, 235 + dy); ctx.lineTo(300 + d * 120, 225 + dy * 1.8); ctx.stroke(); }); });
      ctx.lineCap = "butt";
      polygon(ctx, [[291, 222], [309, 222], [300, 233]]); ctx.fillStyle = p.a; ctx.fill();
      ctx.globalAlpha = 0.5; [[238, 232], [362, 232]].forEach(([x, y]) => { ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI * 2); ctx.fillStyle = p.a; ctx.fill(); }); ctx.globalAlpha = 1;
      word(ctx, w, 300, 510, 440, 96, p.c, p.ink, p.a);
    },
    daruma(ctx, p, w) {
      oval(ctx, 300, 442, 112, 14); ctx.globalAlpha = 0.25; ctx.fillStyle = p.ink; ctx.fill(); ctx.globalAlpha = 1;
      oval(ctx, 300, 285, 150, 158); fillStroke(ctx, p.a, p.ink, 9);
      ctx.strokeStyle = p.c; ctx.lineWidth = 5; ctx.lineCap = "round";
      [[190, 360, 250, 420], [410, 360, 350, 420]].forEach(([x1, y1, x2, y2]) => { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.quadraticCurveTo((x1 + x2) / 2 + (x1 < 300 ? 14 : -14), (y1 + y2) / 2 - 10, x2, y2); ctx.stroke(); });
      ctx.lineCap = "butt";
      ctx.beginPath(); ctx.arc(300, 372, 28, 0, Math.PI * 2); ctx.lineWidth = 6; ctx.strokeStyle = p.c; ctx.stroke(); ctx.beginPath(); ctx.arc(300, 372, 8, 0, Math.PI * 2); ctx.fillStyle = p.c; ctx.fill();
      oval(ctx, 300, 232, 112, 82); fillStroke(ctx, p.c, p.ink, 8);
      ctx.strokeStyle = p.ink; ctx.lineWidth = 11; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(206, 205); ctx.quadraticCurveTo(250, 160, 292, 205); ctx.moveTo(308, 205); ctx.quadraticCurveTo(350, 160, 394, 205); ctx.stroke();
      ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(196, 262); ctx.quadraticCurveTo(210, 312, 258, 292); ctx.quadraticCurveTo(222, 288, 232, 262); ctx.moveTo(404, 262); ctx.quadraticCurveTo(390, 312, 342, 292); ctx.quadraticCurveTo(378, 288, 368, 262); ctx.stroke(); ctx.lineCap = "butt";
      [[258, 233, false], [342, 233, true]].forEach(([x, y, pupil]) => { ctx.beginPath(); ctx.arc(x, y, 24, 0, Math.PI * 2); fillStroke(ctx, p.c, p.ink, 5); if (pupil) { ctx.beginPath(); ctx.arc(x, y + 2, 11, 0, Math.PI * 2); ctx.fillStyle = p.ink; ctx.fill(); } });
      polygon(ctx, [[292, 258], [308, 258], [300, 272]]); ctx.fillStyle = p.a; ctx.fill();
      word(ctx, w, 300, 510, 440, 100, p.c, p.ink, p.a);
    },
    fuji(ctx, p, w) {
      ctx.beginPath(); ctx.arc(425, 120, 56, 0, Math.PI * 2); fillStroke(ctx, p.a, p.ink, 7);
      const mount = () => { ctx.beginPath(); ctx.moveTo(40, 440); ctx.quadraticCurveTo(210, 270, 262, 160); ctx.lineTo(338, 160); ctx.quadraticCurveTo(390, 270, 560, 440); ctx.closePath(); };
      mount(); ctx.fillStyle = p.b; ctx.fill();
      ctx.save(); mount(); ctx.clip();
      polygon(ctx, [[200, 140], [400, 140], [430, 215], [380, 238], [345, 200], [300, 252], [262, 202], [225, 238], [175, 215]]); ctx.fillStyle = p.c; ctx.fill();
      ctx.restore();
      mount(); ctx.lineWidth = 9; ctx.strokeStyle = p.ink; ctx.lineJoin = "round"; ctx.stroke();
      [[60, 322, 210], [345, 385, 190]].forEach(([x, y, ww]) => { ctx.beginPath(); ctx.roundRect(x, y, ww, 30, 15); fillStroke(ctx, p.c, p.ink, 6); });
      ctx.strokeStyle = p.b; ctx.lineWidth = 9; ctx.lineCap = "round";
      for (let k = 0; k < 2; k++) { ctx.beginPath(); for (let x = 50; x <= 550; x += 10) { const y = 458 + k * 24 + Math.sin(x / 20 + k) * 7; x === 50 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); }
      ctx.lineCap = "butt";
      word(ctx, w, 300, 515, 440, 90, p.c, p.ink, p.a);
    },
    lanterne(ctx, p, w) {
      ctx.strokeStyle = p.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(44, 85); ctx.quadraticCurveTo(300, 135, 556, 85); ctx.stroke();
      [[135, 108, 128, 0.5], [465, 108, 128, 0.5], [300, 110, 120, 0.9]].forEach(([x, y]) => { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 14); ctx.stroke(); });
      lantern(ctx, p, 135, 205, 0.5); lantern(ctx, p, 465, 205, 0.5);
      lantern(ctx, p, 300, 255, 0.95);
      word(ctx, w, 300, 515, 440, 90, p.c, p.ink, p.a);
    },
    sakura(ctx, p, w) {
      ctx.beginPath(); ctx.arc(150, 140, 70, 0, Math.PI * 2); fillStroke(ctx, p.a, p.ink, 7);
      ctx.lineCap = "round";
      [[p.ink, 24], [WOOD, 14]].forEach(([col, lw]) => { ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(40, 430); ctx.bezierCurveTo(190, 400, 260, 250, 520, 200); ctx.stroke(); });
      [[330, 300, 345, 380], [440, 225, 470, 300]].forEach(([x1, y1, x2, y2]) => { ctx.strokeStyle = p.ink; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.strokeStyle = WOOD; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); });
      ctx.lineCap = "butt";
      [[150, 405, 24], [230, 380, 20], [300, 330, 26], [380, 285, 22], [450, 230, 26], [510, 200, 18], [345, 385, 22], [470, 300, 20], [265, 255, 16], [405, 190, 16]].forEach(([x, y, r]) => flower5(ctx, x, y, r, PETAL, p.a, p.ink));
      [[90, 330, 0.5], [200, 220, 1.2], [520, 330, 2.1], [90, 220, 0.2], [380, 440, 1.0]].forEach(([x, y, a]) => { oval(ctx, x, y, 14, 9, a); fillStroke(ctx, PETAL, p.ink, 3); });
      word(ctx, w, 300, 510, 440, 100, p.c, p.ink, p.a);
    }
  });
  function drawChild(ctx, p) {
    kr = rng(11);
    ctx.fillStyle = p.bg; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = p.ink; ctx.lineWidth = 6; ctx.lineCap = "round"; ctx.lineJoin = "round";
    wob(ctx, [[46, 46], [554, 46], [554, 704], [46, 704]], true, 3); ctx.stroke();
    MOTIF_DRAW[state.motif](ctx, p);
    const text = state.word.toUpperCase();
    ctx.save(); ctx.translate(300, 505); ctx.rotate(-0.03);
    let px = 110; ctx.font = `700 ${px}px Caveat, cursive`;
    const tw = ctx.measureText(text).width;
    if (tw > 440) { px = Math.floor((px * 440) / tw); ctx.font = `700 ${px}px Caveat, cursive`; }
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = p.a; ctx.fillText(text, 0, 0);
    ctx.restore();
    kline(ctx, p, [[130, 568], [300, 574], [470, 566]], 7, p.c);
    ctx.fillStyle = p.ink; ctx.textAlign = "left"; ctx.font = "700 92px Caveat, cursive";
    const vw = ctx.measureText(state.value).width;
    if (vw > 270) ctx.font = `700 ${Math.floor((92 * 270) / vw)}px Caveat, cursive`;
    ctx.fillText(state.value, 76, 645);
    ctx.fillStyle = p.b; ctx.textAlign = "right"; ctx.font = "700 40px Caveat, cursive";
    ctx.fillText("17ème JMFTA", 528, 628); ctx.fillText("2026", 528, 672);
  }

  /* ---------- le timbre complet, à l'échelle s ---------- */
  function drawStamp(ctx, s) {
    const p = palette();
    ctx.save();
    ctx.setTransform(s, 0, 0, s, 0, 0);
    ctx.clearRect(0, 0, W, H);
    if (state.style === "enfant") drawChild(ctx, p);
    else drawFramed(ctx, p);
    /* dentelure : on perce des demi-cercles le long des quatre bords */
    ctx.globalCompositeOperation = "destination-out";
    const hole = (x, y) => { ctx.beginPath(); ctx.arc(x, y, 11, 0, Math.PI * 2); ctx.fill(); };
    const nx = Math.round(W / 36), ny = Math.round(H / 36);
    for (let i = 0; i <= nx; i++) { hole((i * W) / nx, 0); hole((i * W) / nx, H); }
    for (let j = 0; j <= ny; j++) { hole(0, (j * H) / ny); hole(W, (j * H) / ny); }
    ctx.restore();
  }
  function drawFramed(ctx, p) {
    ctx.fillStyle = "#fffdf5"; ctx.fillRect(0, 0, W, H);
    /* motif */
    ctx.save();
    ctx.beginPath(); ctx.rect(ZONE.x, ZONE.y, ZONE.w, ZONE.h); ctx.clip();
    ctx.fillStyle = p.bg; ctx.fillRect(ZONE.x, ZONE.y, ZONE.w, ZONE.h);
    (MOTIF_DRAW[state.motif] || MOTIF_DRAW.dots)(ctx, p, state.word.toUpperCase());
    ctx.restore();
    /* bandeau de la valeur faciale */
    ctx.fillStyle = p.ink; ctx.fillRect(ZONE.x, BAND_Y, ZONE.w, H - 44 - BAND_Y);
    let px = 92; const val = state.value;
    ctx.font = FONT(px);
    const vw = ctx.measureText(val).width;
    if (vw > 300) { px = Math.floor((px * 300) / vw); ctx.font = FONT(px); }
    ctx.fillStyle = p.val || p.bg; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    ctx.fillText(val, 70, BAND_Y + 62);
    ctx.fillStyle = p.c; ctx.textAlign = "right";
    ctx.font = FONT(23, 700); ctx.fillText("17E JMFTA", 534, BAND_Y + 44);
    ctx.font = FONT(23, 700); ctx.fillText("2026", 534, BAND_Y + 74);
    ctx.textAlign = "center"; ctx.font = FONT(15, 700);
    ctx.fillStyle = p.val || p.bg; ctx.fillText("FAUX TIMBRE · MAIL ART", 300, BAND_Y + 118);
    /* cadre */
    ctx.strokeStyle = p.ink; ctx.lineWidth = 5; ctx.strokeRect(ZONE.x, ZONE.y, ZONE.w, H - 88);
  }

  const ctxMain = canvas.getContext("2d");
  const redraw = () => drawStamp(ctxMain, 1);

  /* ---------- exports ---------- */
  function save(blob, name) {
    if (!blob) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }
  function exportPng() {
    const c = document.createElement("canvas");
    c.width = W * 2; c.height = H * 2;
    drawStamp(c.getContext("2d"), 2);
    c.toBlob((b) => save(b, t("file") + ".png"), "image/png");
  }
  /* planche A4 à 300 dpi : 42 timbres de 2,7 × 3,4 cm (6 colonnes × 7 rangées), avec un trait de coupe léger.
     all = false : le même timbre douze fois ; all = true : une rangée par motif du style (7 motifs par style, 6 timbres chacun) */
  function exportSheet(all) {
    const sw = 320, sh = 400, gap = 50, cols = 6, rows = 7, SW = 2480, SH = 3508;
    const motifs = all ? STYLES[state.style].motifs : [state.motif];
    const keep = state.motif;
    const tiles = motifs.map((m) => {
      state.motif = m;
      const c = document.createElement("canvas");
      c.width = sw; c.height = sh;
      drawStamp(c.getContext("2d"), sw / W);
      return c;
    });
    state.motif = keep;
    const sheet = document.createElement("canvas");
    sheet.width = SW; sheet.height = SH;
    const g = sheet.getContext("2d");
    g.fillStyle = "#fff"; g.fillRect(0, 0, SW, SH);
    const x0 = (SW - (cols * sw + (cols - 1) * gap)) / 2, y0 = (SH - (rows * sh + (rows - 1) * gap)) / 2;
    g.strokeStyle = "#bbb"; g.lineWidth = 2; g.setLineDash([8, 8]);
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const x = x0 + c * (sw + gap), y = y0 + r * (sh + gap);
      g.strokeRect(x - 6, y - 6, sw + 12, sh + 12);
      g.drawImage(tiles[r % tiles.length], x, y);
    }
    sheet.toBlob((bl) => save(bl, t(all ? "sheet_all_file" : "sheet_file") + ".png"), "image/png");
  }

  /* ---------- interface ---------- */
  function buildControls() {
    const L = I18N[lang()];
    const St = STYLES[state.style];
    $("sm-styles").innerHTML = Object.keys(STYLES).map((k) => `<button type="button" class="chip" data-st="${k}" aria-pressed="${state.style === k}">${L.style[k]}</button>`).join("");
    const motifs = $("sm-motifs"), pals = $("sm-palettes");
    motifs.innerHTML = St.motifs.map((m) => `<button type="button" class="chip" data-m="${m}" aria-pressed="${state.motif === m}">${L.motif[m]}</button>`).join("");
    pals.innerHTML = St.pals.map((p) => `<button type="button" class="swatch" data-p="${p.id}" aria-pressed="${state.pal === p.id}" aria-label="${L.pal[p.id]}" title="${L.pal[p.id]}" style="--s1:${p.bg || PAPER};--s2:${p.a || p.ink};--s3:${p.b || p.ink}"></button>`).join("");
    document.querySelectorAll("[data-sm]").forEach((el) => { el.textContent = L[el.dataset.sm]; });
    canvas.setAttribute("aria-label", L.alt);
  }
  function syncPressed() {
    document.querySelectorAll("#sm-styles .chip").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.st === state.style)));
    document.querySelectorAll("#sm-motifs .chip").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.m === state.motif)));
    document.querySelectorAll("#sm-palettes .swatch").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.p === state.pal)));
    $("sm-word").value = state.word; $("sm-value").value = state.value;
  }
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const isDefaultWord = (w) => Object.values(STYLES).some((x) => x.word === w);
  function setStyle(k) {
    const St = STYLES[k];
    if (isDefaultWord(state.word)) state.word = St.word;
    state.style = k; state.motif = St.motifs[0]; state.pal = St.pals[0].id;
    buildControls(); syncPressed(); redraw();
  }
  $("sm-styles").addEventListener("click", (e) => {
    const b = e.target.closest("[data-st]"); if (b && b.dataset.st !== state.style) setStyle(b.dataset.st);
  });
  $("sm-motifs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-m]"); if (!b) return;
    state.motif = b.dataset.m; syncPressed(); redraw();
  });
  $("sm-palettes").addEventListener("click", (e) => {
    const b = e.target.closest("[data-p]"); if (!b) return;
    state.pal = b.dataset.p; syncPressed(); redraw();
  });
  $("sm-word").addEventListener("input", (e) => { state.word = e.target.value; redraw(); });
  $("sm-value").addEventListener("input", (e) => { state.value = e.target.value; redraw(); });
  $("sm-random").addEventListener("click", () => {
    const k = pick(Object.keys(STYLES)), St = STYLES[k];
    state.style = k; state.motif = pick(St.motifs); state.pal = pick(St.pals).id; state.word = pick(St.words); state.value = pick(VALUES);
    buildControls(); syncPressed(); redraw();
  });
  $("sm-png").addEventListener("click", exportPng);
  $("sm-sheet").addEventListener("click", () => exportSheet(false));
  $("sm-sheet-all").addEventListener("click", () => exportSheet(true));

  function onLang() {
    const l = lang();
    buildControls(); syncPressed(); redraw();
  }
  document.addEventListener("pr-langchange", onLang);

  buildControls(); syncPressed(); redraw();
  /* les polices sont chargées à la demande : on redessine dès qu'elles sont prêtes */
  if (document.fonts && document.fonts.load) {
    Promise.all([document.fonts.load("800 80px Fraunces", "POP! 0 €"), document.fonts.load("700 20px Fraunces", "17E JMFTA"), document.fonts.load("700 80px Caveat", "BISOUS 0 €")]).then(redraw, () => {});
  }
})();
