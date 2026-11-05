# Fonts

The site hosts its own fonts instead of loading them from Google Fonts. This removes a render-blocking request to a third party and avoids sending visitors' IP addresses to Google.

| Family | Use | Licence |
| --- | --- | --- |
| [Fraunces](https://fonts.google.com/specimen/Fraunces) | titles | SIL Open Font License 1.1 |
| [Inter](https://fonts.google.com/specimen/Inter) | body text | SIL Open Font License 1.1 |
| [Caveat](https://fonts.google.com/specimen/Caveat) | handwritten addresses | SIL Open Font License 1.1 |
| [Special Elite](https://fonts.google.com/specimen/Special+Elite) | typewriter labels and stamps | Apache License 2.0 |

Only the `latin` and `latin-ext` subsets are included. They cover French, English and the other European languages used in the country pages. Other scripts (Cyrillic, Greek, Japanese…) fall back to a system font.

The `@font-face` rules are at the top of `style.css`, between the `FONTS:START` and `FONTS:END` comments. The files come from the Google Fonts CSS API (`https://fonts.googleapis.com/css2`); to refresh them, download the new `woff2` files and update those rules.
