# Poste restante

A small static website that collects, country by country, how to address a letter to *poste restante*: the exact wording, how long the post office keeps it, what it costs, and whether you need to show an ID.

It is a pen pal's notebook: a place to look things up before sending a letter to someone who has no fixed address, or who simply prefers to collect their mail at the counter.

## What is poste restante?

*Poste restante* (also called *general delivery* in the US and Canada, *lista de correos* in Spain and Latin America, *Postlagernd* in German-speaking countries, *fermo posta* in Italy…) is a postal service where a letter is addressed to a **post office** instead of a home. It works in three steps:

1. **You write.** The sender addresses the letter to a post office, using the local wording.
2. **The post office holds it.** The letter waits at the counter for a limited time, from a few days to several months depending on the country, sometimes for a fee. After that it is sent back.
3. **You collect it.** The recipient shows up with an ID document. The name on the envelope has to match the document exactly.

The rules differ a lot from one country to the next, and the information is scattered across postal operators' websites, legal texts and travel forums. This project gathers it in one place.

## What the site does

- An **interactive world map**, coloured by how reliable the information is. Click a country (or search for it) to see:
  - an example **address** written on an envelope, with the local wording highlighted;
  - the **holding period**, the **cost**, whether an **ID** is required;
  - practical tips and a link to the postal operator.
- **Search** with autocomplete, a random-country button, and a legend that filters the map by reliability.
- **French and English** (French by default), and a **light / dark** mode.
- Hand-drawn SVG **postmarks and stamps** for a postal look. They are original drawings, and all values and numbers on them are purely decorative.

## How to read the reliability stamps

Every entry carries an ink stamp:

| Stamp | Meaning |
| --- | --- |
| **Fairly reliable** | Holding period, cost and address wording are confirmed by an official page. |
| **To be confirmed** | There is an entry, but at least one key piece of information is missing or comes from a secondary source. Fields we could not confirm say so explicitly. |
| **No information found** | We found no usable official page. This is **not** proof that the service does not exist: many postal websites block automated access or simply say nothing about it. |

Please call or visit the post office before sending anything important.

## Project layout

```
index.html     page structure and static texts
style.css      styles (postal theme, light/dark)
app.js         map, search, panels, language and theme switches
stamps.js      SVG generators for the decorative stamps
data.js        country data (French, the source of truth)
data.en.js     English overrides for the country data
```

It is plain HTML, CSS and JavaScript, with no build step. The map uses [d3](https://d3js.org/) and [topojson](https://github.com/topojson/topojson) from cdnjs, and the [world-atlas](https://github.com/topojson/world-atlas) data from jsDelivr. Fonts come from Google Fonts.

## Run it locally

Serve the folder with any static server, for example:

```bash
cd poste-restante
python3 -m http.server 8000   # then open http://localhost:8000
```

The map needs an internet connection to load its libraries.

## Deploy on GitHub Pages

1. Push the repository to GitHub.
2. In **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/ (root)`.
3. The site is live at `https://<user>.github.io/poste-restante/`.

## Contributing

Corrections and new countries are very welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Disclaimer

The information is indicative and can be outdated. Postal operators change their rules and fees without notice. Always check with the local post office.
