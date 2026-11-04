# Contributing

Thank you for helping to map poste restante around the world. The most useful contributions are **corrections** (a holding period that changed, a fee that is now charged) and **new countries**, ideally backed by an official source.

## Ways to help

- **Report a mistake or a gap.** Open an issue with the country, what is wrong, and a link to where you found the right information.
- **Fix or complete an entry.** Edit the data files (see below) and open a pull request.
- **Add a country.** Same process, with a new entry.
- **Improve the site.** Bug fixes, accessibility, translations of the interface.

## Run the site locally

It is a static site with no build step:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Where the data lives

| File | Role |
| --- | --- |
| `data.js` | Country data in French. This is the source of truth. |
| `data.en.js` | English translation of the translatable fields. |

Each country is stored under its **ISO 3166-1 numeric code**, as a three-digit string (for example `"756"` for Switzerland, `"032"` for Argentina). You can find the codes on [Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1_numeric).

### A full entry (`data.js`)

```js
"756": {
  name: "Suisse", flag: "🇨🇭",
  localName: "Poste restante · Postlagernd · Fermo posta",
  authority: "La Poste Suisse",
  address: ["Camille DUPONT", "Poste restante", "Rue et numéro de la filiale", "NPA Localité", "SUISSE"],
  duration: { value: "1 mois", days: 30 },
  cost: { label: "Gratuit", detail: "Service gratuit selon La Poste Suisse." },
  idRequired: true,           // true, false, or null when not confirmed
  tips: ["…", "…"],
  reliability: "ok",          // "ok" or "check"
  source: "https://…"         // the most specific official page you used
}
```

- `address` is an example, written line by line. Keep the example name (`Camille DUPONT`) and the local wording (`POSTE RESTANTE`, `Postlagernd`…) as they are, and use generic lines for the rest. **Never invent a post office name**, unless it is written that way in an official example.
- `duration.days` is a number used only for sorting and display logic; use `0` when the duration is not confirmed, and write `"Non confirmé"` in `duration.value`.
- Use `idRequired: null` when you could not confirm whether an ID is required.

### An entry without information (`data.js`)

When no usable official page exists, add a short entry that is displayed as **No information found**:

```js
"032": {
  name: "Argentine", flag: "🇦🇷", authority: "Correo Argentino", noInfo: true,
  summary: "No official page describing the service was found…",
  tips: ["Unverified lead 1", "Unverified lead 2"],
  source: "https://www.correoargentino.com.ar"
}
```

In this case `tips` are **unverified leads** (an alternative like a PO box, an old guide, a hint to ask the post office). Do not include `address`, `duration` or `cost`.

### The English file (`data.en.js`)

Add the same key with the translatable fields only: `name`, `summary` (if any), `address`, `duration.value`, `cost.label`, `cost.detail`, `tips`, and `localName` only if it contains words that need translating. Do not repeat `flag`, `authority`, `source`, `reliability`, `idRequired` or `days`.

```js
"756": {
  name: "Switzerland",
  address: ["Camille DUPONT", "Poste restante", "Street and number of the branch", "Postcode City", "SWITZERLAND"],
  duration: { value: "1 month" },
  cost: { label: "Free", detail: "Free service according to Swiss Post." },
  tips: ["…", "…"]
}
```

The English entry must have **the same number of `tips` and `address` lines** as the French one.

## Rules for the information

These rules keep the site trustworthy.

1. **Prefer official sources**: the postal operator's website, its terms and conditions, tariffs, legal texts, and the [UPU addressing fact sheets](https://www.upu.int/en/Universal-Postal-Union/Activities/Addressing-Solutions). Archived copies of official pages (for example from the Wayback Machine) are fine; say so in the tip.
2. **Do not guess.** If a value is unconfirmed, write `Non confirmé` / `Unconfirmed` rather than a plausible number.
3. **Use `reliability: "ok"` only if the holding period, the cost and the address wording are all confirmed by an official page.** Otherwise use `"check"`.
4. **Say where a doubtful piece of information comes from** (secondary source, old page, search-engine summary) in the `tips`.
5. **Do not say a service has been withdrawn** unless an official source says so. A missing page is not proof.
6. **No phone numbers or email addresses from memory.** Only add contact details you read on an official page.
7. **Do not mix up similar services**: holding a parcel after a failed delivery, a PO box, mail forwarding and "hold mail" services are different products.
8. **No copyrighted material.** Do not add images, logos or text copied from other websites.

## Check your changes

Before opening a pull request, make sure both data files load and are consistent:

```bash
node -e "
global.window = {};
require('./data.js'); require('./data.en.js');
const fr = window.COUNTRIES, en = window.COUNTRIES_EN;
const bad = [];
for (const k of Object.keys(fr)) {
  const a = fr[k], b = en[k];
  if (!b) { bad.push(k + ': missing English entry'); continue; }
  if ((a.tips || []).length !== (b.tips || []).length) bad.push(k + ': tips count differs');
  if (a.address && (!b.address || a.address.length !== b.address.length)) bad.push(k + ': address lines differ');
}
console.log(Object.keys(fr).length + ' countries', bad.length ? bad : 'OK');
"
```

Then open the site locally and check the entry in both languages, in light and dark mode, and that the country shows up on the map.

## Pull request checklist

- [ ] The entry follows the format above, in `data.js` and `data.en.js`.
- [ ] Every piece of information is backed by a source, or is marked as unconfirmed.
- [ ] `source` points to the most specific official page used.
- [ ] The check above passes.
- [ ] The pull request describes what changed and where the information comes from.

Keep pull requests small and focused: one country, or one kind of change, per pull request.
