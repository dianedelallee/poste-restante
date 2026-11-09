window.COUNTRIES_EN = Object.assign(window.COUNTRIES_EN || {}, {
  "250": { name: "France",
    address: ["[Mme Camille DUPONT]", "POSTE RESTANTE", "[Full address of the chosen post office]", "[POSTCODE CITY]", "FRANCE"],
    duration: { value: "15 days at the post office" },
    cost: { label: "Paid (recipient)", detail: "Contract to sign up for: €37 (15 days to 1 month) or €53 (1 to 3 months), 2026 prices. Then at pickup: €1.69 per letter, €0.83 per press item, €6.11 per Colissimo parcel." },
    tips: [
      "A French peculiarity: it is the recipient who signs up for a forwarding service to a poste restante. La Poste does not describe direct sending without a contract.",
      "Covered: letters, registered mail, Colissimo up to 2 kg, press items. Excluded: over 2 kg, Chronopost, declared-value items.",
      "Contract valid for 3 months at most, renewable. Mail is held for 15 days at the post office, so you need to stop by regularly."
    ] },
  "756": { name: "Switzerland",
    address: ["[Camille DUPONT]", "Poste restante", "[Street and number of the branch]", "[Postcode City]", "SWITZERLAND"],
    duration: { value: "1 month" },
    cost: { label: "Free", detail: "Free service according to Swiss Post." },
    tips: [
      "Any branch will do. The exact format for each one is given by Swiss Post's \"Locations and opening hours\" tool.",
      "\"Sous chiffre\" (box number) addresses are not accepted.",
      "A search summary mentioned 15 days for international mail: not confirmed by the official pages."
    ] },
  "276": { name: "Germany",
    address: ["[Camille DUPONT]", "Postlagernd", "[Branch address]", "[PLZ Ort]", "GERMANY"],
    duration: { value: "7 working days" },
    cost: { label: "Standard postage", detail: "No specific fees. Not to be confused with the \"Lagerservice\" (€15.90 to €17.90), which is a different service." },
    tips: [
      "For letters. Parcels are not mentioned on the official page.",
      "A password (Kennwort) can replace the name for ordinary mail. ID requirement: not officially specified.",
      "Not all branches offer the service: use the \"Postlagernd\" filter in the Postfinder."
    ] },
  "040": { name: "Austria",
    address: ["[Camille DUPONT (or Kennwort)]", "POSTLAGERND", "[Street of the branch]", "[PLZ Ort]", "AUSTRIA"],
    duration: { value: "at least 14 days" },
    cost: { label: "Paid", detail: "€1.00 net per item, collected on delivery (excl. VAT; whether VAT is included is not specified)." },
    tips: [
      "Letters only: parcels are not mentioned.",
      "A password can replace the name. ID requirement: not specified on the official page.",
      "Exact maximum holding period not confirmed."
    ] },
  "380": { name: "Italy",
    address: ["[Camille DUPONT (ID document number)]", "FERMOPOSTA", "[Exact name of the Ufficio Postale]", "[Via…, CAP Town]", "ITALY"],
    duration: { value: "30 days" },
    cost: { label: "Paid (sender)", detail: "€3.00 per item, paid by the sender on top of postage." },
    tips: [
      "The recipient's ID document number must be written on the envelope.",
      "Adults only. Applies to correspondence: parcels are not mentioned.",
      "Pickup is possible in a time slot booked online or through the app."
    ] },
  "724": { name: "Spain",
    address: ["[Camille DUPONT]", "LISTA DE CORREOS", "[POSTAL CODE] [CITY]", "SPAIN"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Unconfirmed", detail: "No current official Correos page describing the Lista de Correos was found: duration and cost are unknown." },
    tips: [
      "Does the service still exist under this name? Correos now promotes the Apartado de Correos (PO box). To be confirmed on 900 400 004 or at the counter.",
      "Historical lead: the 1964 postal regulations provide for delivery \"en lista\" for people with no fixed residence in the town.",
      "Documents accepted when collecting an item in general: DNI, passport, driving licence, residence card."
    ] },
  "620": { name: "Portugal",
    address: ["[NOME APELIDO]", "POSTA RESTANTE DA LOJA CTT [NAME OF THE LOJA]", "[ADDRESS OF THE LOJA]", "[POSTCODE] [CITY]", "PORTUGAL"],
    duration: { value: "End of the following month (letters) · 15 days (parcels)" },
    cost: { label: "Paid (recipient)", detail: "The recipient pays at pickup, per item, plus VAT: €1.46 up to 100 g, €2.11 up to 2 kg, €4.48 up to 30 kg." },
    tips: [
      "Write \"Posta Restante\" followed by the name of the chosen CTT loja, then that loja's address.",
      "Registered mail: only 6 working days after arrival at the loja.",
      "A 2026 CTT price list mentions 30 days maximum storage: the discrepancy with the help page is not settled."
    ] },
  "826": { name: "United Kingdom",
    address: ["[Ms Camille DUPONT]", "POSTE RESTANTE", "[Name of the Post Office]", "[Full address of the Post Office]", "[POSTCODE]", "UNITED KINGDOM"],
    duration: { value: "18 days (21 if posted from abroad)" },
    cost: { label: "Free", detail: "Free at participating Post Offices." },
    tips: [
      "Only some branches offer the service: check with the branch before sending.",
      "Can be used for 3 months maximum in the same town. Put a return address on the back.",
      "Foreign visitor: passport. Resident: passport + proof of address.",
      "The service can be withdrawn in case of abuse, sometimes without notice."
    ] },
  "056": { name: "Belgium",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Name of the post office]", "[Postcode and town]", "BELGIUM"],
    duration: { value: "1 month (15 days for registered mail)" },
    cost: { label: "Paid", detail: "Surcharge equivalent to 2 Prior stamps, paid by the sender or by the recipient at pickup. Amount in euros to be checked." },
    tips: [
      "The recipient is not notified of arrival: it is up to the sender to let them know.",
      "Court documents: only 8 days. Uncollected mail is returned to the sender.",
      "Parcels are not mentioned on the official page, whose content seems old."
    ] },
  "616": { name: "Poland",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[POSTAL CODE] [NAME OF THE OFFICE]", "POLAND"],
    duration: { value: "14 days" },
    cost: { label: "Free", detail: "Included in the price of the chosen service, no extra charge." },
    tips: [
      "Official order: name, \"poste restante\", then the postcode and name of the post office delivering the item.",
      "Reserved for private individuals.",
      "The 14-day period is not confirmed by a current official page: to be checked."
    ] },
  "643": { name: "Russia",
    address: ["[DUPONT Camille]", "До востребования", "[6-DIGIT POSTAL INDEX] [CITY]", "RUSSIA"],
    duration: { value: "30 days (letters) · 15 days (express parcels)" },
    cost: { label: "Free", detail: "Receiving mail carries no announced fees. Extending the holding period is paid (price not verified)." },
    tips: [
      "Court or administrative letters: only 7 days.",
      "The postal index (6-digit code) determines the pickup office.",
      "The Почта России online service is stated for Russia only; the case of an item sent from abroad is not confirmed.",
      "An SMS code can replace ID."
    ] },
  "840": { name: "United States",
    address: ["[Camille DUPONT]", "GENERAL DELIVERY", "[CITY] [STATE] [ZIP]-9999", "USA"],
    duration: { value: "30 days" },
    cost: { label: "No fee announced", detail: "The official regulations (DMM) mention no fee." },
    tips: [
      "The \"-9999\" format comes from travel guides, not from an official text: ask the post office for its exact ZIP code.",
      "Generally only one site per multi-facility post office; you can only use one location.",
      "The postmaster may refuse the service without adequate ID or limit the volume."
    ] },
  "124": { name: "Canada",
    address: ["[Camille DUPONT]", "GD [STN A]", "[CITY] [PROVINCE] [POSTAL CODE]", "CANADA"],
    duration: { value: "up to 4 months" },
    cost: { label: "Free", detail: "Free according to Canada Post. Possible fees for parcels: not confirmed." },
    tips: [
      "Line 2: \"GD\" (General Delivery) followed by the abbreviated station. The \"GD STN A\" example needs rechecking: it comes from an addressing guide seen indirectly.",
      "You must fill in a General Delivery service request at the chosen post office, at any office.",
      "Official photo ID required (foreign ID accepted). If the ID shows no address, proof of address is requested.",
      "Write in capital letters, without punctuation, with a space in the postal code."
    ] },
  "036": { name: "Australia",
    address: ["[Camille DUPONT]", "c/o POSTE RESTANTE", "[Name of the post office, STATE POSTCODE]", "AUSTRALIA"],
    duration: { value: "30 days" },
    cost: { label: "Unconfirmed", detail: "No official price found for this service. \"Mail hold\" (A$30.70 for the first week) is a different product." },
    tips: [
      "Official name: \"counter mail delivery\" (also called Post Restante), for people with no street delivery or staying less than 6 months in the area.",
      "The 30 days are counted from delivery to the post office, according to Australia Post's terms and conditions.",
      "The address format comes from secondary sources, not officially confirmed."
    ] },
  "392": { name: "Japan",
    address: ["〒[POST OFFICE POSTCODE]", "[POST OFFICE ADDRESS]", "[POST OFFICE NAME]郵便局留", "[Camille DUPONT] 様", "JAPAN"],
    duration: { value: "10 days" },
    cost: { label: "Free", detail: "No registration and no pickup fee." },
    tips: [
      "The 10 days are counted from the day after arrival at the post office. The post office does not notify you: track the item.",
      "Add the mention \"郵便局留\" (yūbinkyoku-dome) after the name of the post office.",
      "Document proving name and address (licence, My Number card, passport). A personal seal is requested, or a signature if you have none.",
      "For a parcel (ゆうパック), add the phone number. The page does not explicitly say parcels are accepted: to be confirmed with the post office."
    ] }
});
window.COUNTRIES_EN = Object.assign(window.COUNTRIES_EN || {}, {
  "356": {
    name: "India",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Name of the post office]", "[CITY] [6-DIGIT PIN CODE]", "INDIA"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Unconfirmed", detail: "No poste restante fee found." },
    tips: [
      "Secondary sources mention up to 1 month, but no current official page confirms it.",
      "A full name is essential: items addressed to a made-up name or without a surname are not handed over (Post Office Guide).",
      "“GPO” means General Post Office, the main office of some large cities, but not every city has one (many have a “Head Post Office”). Ask the post office which branch handles poste restante (general knowledge, not officially confirmed). ID requirement: unconfirmed."
    ]
  },
  "484": {
    name: "Mexico",
    address: ["[Camille DUPONT]", "LISTA DE CORREOS", "[POSTAL CODE] [CITY], [STATE]", "MEXICO"],
    duration: { value: "10 working days (international) · 15 (domestic)" },
    cost: { label: "Paid extension", detail: "Receiving: unconfirmed. A 10-working-day extension at the recipient's request, charged per day of storage (amount not found)." },
    tips: [
      "Two services: \"Lista de Correos\" (the name shown at the counter) and \"Poste Restante\" (reserved, pseudonyms allowed, nothing is published).",
      "Deadlines run from the first notice. Photo ID required (INE, passport, cédula…), plus the SPM 77 notice.",
      "A third party can collect with a power of attorney signed on the back of the notice.",
      "The exact address format is not confirmed."
    ]
  },
  "076": {
    name: "Brazil",
    address: ["[Camille DUPONT]", "POSTA RESTANTE", "[Name of the Correios branch]", "[CEP] [CITY] [STATE]", "BRAZIL"],
    duration: { value: "20 days (letters) · 7 to 30 days (parcels)" },
    cost: { label: "Paid", detail: "Additional service chosen by the sender: R$ 5.60 on an old page. Current fee to be checked." },
    tips: [
      "\"Posta Restante Pedida\" service: the sender requests it when posting and specifies a Correios branch.",
      "The name must match the ID exactly, with no nickname or abbreviation. A third party needs an authorization.",
      "Durations vary by type of item (PAC and SEDEX: 7 days in some cases). The address format is not confirmed."
    ]
  },
  "032": {
    name: "Argentina",
    summary: "No official Correo Argentino page describing a poste restante service was found (duration, cost and address format unknown).",
    tips: [
      "A secondary source mentions an address with the words \"Poste Restante\": not verified.",
      "Alternative documented by the UPU: the PO box (\"Casilla de Correos\").",
      "To be confirmed with Correo Argentino or at a branch (sucursal) before sending."
    ]
  },
  "152": {
    name: "Chile",
    summary: "No official Correos de Chile page describing this service was found. The official site was blocked by an anti-bot check: a page may exist.",
    tips: [
      "An expat guide (secondary source) says \"Lista de Correos\" is offered at every branch (sucursal): not confirmed.",
      "Alternative documented by the UPU: the PO box (\"Casilla\")."
    ]
  },
  "604": {
    name: "Peru",
    summary: "No official Serpost page describing this service was found (the official site could not be read).",
    tips: [
      "Traveler blogs and forums mention a \"Lista de Correos\" with the name as it appears on the passport: not verified.",
      "The durations found (3 months for ordinary letters) come from a third-party site: do not rely on them."
    ]
  },
  "170": {
    name: "Colombia",
    summary: "No official 4-72 page describing a poste restante service for individuals was found.",
    tips: [
      "The term \"lista de correos\" appears at 4-72 as a delivery method in remote areas, not as a service for travelers: based on summaries of official documents.",
      "Not to be confused with the \"Casillero Virtual\" (an address abroad for shopping from outside the country).",
      "Ask 4-72 directly."
    ]
  },
  "764": {
    name: "Thailand",
    summary: "No official Thailand Post page on duration, cost or ID could be consulted (the site blocks automated access: a page may exist).",
    tips: [
      "The UPU addressing sheet gives an example format \"Poste Restante / General Post Office / district, city, postal code\": it is an example, not a service rule.",
      "An unofficial travel guide says most offices hold mail for people without a fixed address: not confirmed.",
      "Wikipedia (not an official source) gives the local term \"รอจ่าย ไปรษณีย์\" (or \"รอจ่าย ปณ.\"), a name matching the ID or passport, and a small fee of 1 to 2 baht on collection: not verified.",
      "The Thailand Post website (thailandpost.co.th) returns a 403 error to automated access: to be checked from a browser or at a counter."
    ]
  },
  "704": {
    name: "Vietnam",
    summary: "No official VNPost page describing this service was found. It is unknown whether it is still offered.",
    tips: [
      "The UPU addressing sheet gives a \"Poste restante\" example with a Hanoi post office: a format, not a confirmation.",
      "VNPost hotline listed on their site: 1900 54 54 81.",
      "Possible alternative, not verified: the PO box."
    ]
  },
  "360": {
    name: "Indonesia",
    summary: "No official Pos Indonesia page could be consulted (the site blocks automated access).",
    tips: [
      "The UPU addressing sheet gives an example \"POSTE RESTANTE / MAIN POST OFFICE / city, postal code\": an example of a format, not a confirmation.",
      "Possible alternative, not verified: the PO box."
    ]
  },
  "524": {
    name: "Nepal",
    summary: "No official Nepal Post page on poste restante was found. The official site lists the PO box but not poste restante.",
    tips: [
      "A 2012 Nepal Tourism Board FAQ says Kathmandu has the only poste restante in the country: old information, to be rechecked.",
      "Contact for the central office (GPO): gpo@nepalpost.gov.np."
    ]
  },
  "352": {
    name: "Iceland",
    address: ["[Camille DUPONT]", "Poste restante", "[Name of the chosen pósthús (post office)]", "[Postal code (3 digits) and locality]", "ICELAND"],
    duration: { value: "60 days (letters) · 30 days (registered mail)" },
    cost: { label: "Unconfirmed", detail: "Pósturinn's terms refer to the price list without stating a figure for this specific case. A fee of 1,200 kr./month exists for forwarding or temporarily holding domestic mail: not necessarily the same service." },
    tips: [
      "The official terms explicitly cover travelers who have mail sent to a specific office.",
      "Applies to letters. A parcel is not treated as biðpóstur: the recipient is notified and the parcel waits 30 days at the office.",
      "A third party can collect with a written power of attorney (valid for 1 year, agent at least 15 years old).",
      "No sample address is published: the format above is a template. To be confirmed with Pósturinn (posturinn@posturinn.is)."
    ]
  },
  "554": {
    name: "New Zealand",
    address: ["[Camille DUPONT (Post Restante)]", "[Name of the chosen NZ Post Shop]", "[Number and street of the office]", "[Locality and postal code (4 digits)]", "NEW ZEALAND"],
    duration: { value: "2 months maximum" },
    cost: { label: "Free for 7 days, then paid", detail: "Charged per week after the first 7 days (GST included): NZD 11.00 for 7 to 14 days, 16.50 for 14 to 21, 22.00 for 21 to 28, then rising to NZD 49.50 for 56 to 63 days." },
    tips: [
      "Service for receiving letters and parcels (up to 30 kg) during a stay in New Zealand from abroad. No registration.",
      "Only some offices offer it: the NZ Post page lists them. Check the office before sending.",
      "Redirection from one poste restante office to another is possible, but not to a hotel, motel, campsite or guesthouse.",
      "The page says \"2 months\" but its fee table goes up to 63 days: inconsistency to be confirmed. ID requirement not specified."
    ]
  },
  "410": {
    name: "South Korea",
    summary: "No official Korea Post page describing a poste restante service was found. The official sites could not be read: the absence of information does not prove the service does not exist.",
    tips: [
      "Not to be confused with the rule on undelivered mail held at the office (10 days, up to 20): that is not a service where you have mail addressed to you.",
      "Possible alternative, not verified: a PO box (사서함)."
    ]
  },
  "156": {
    name: "China",
    summary: "No official China Post page on this service was found (duration, cost and ID requirement unknown).",
    tips: [
      "The UPU addressing guide gives an example format: name / name of the Post Office / Poste restante / 6-digit postal code and city / P.R. CHINA. This comes from the UPU, not China Post.",
      "Write the country name in a widely known international language.",
      "The durations found online come from historical Hong Kong guides and do not apply to mainland China."
    ]
  }
});
window.COUNTRIES_EN = Object.assign(window.COUNTRIES_EN || {}, {
  "372": {
    name: "Ireland", localName: "Address Point (Poste Restante service)",
    address: ["[Camille DUPONT]", "Exact Address Point address, provided at registration", "[Chosen Post Office]", "[Locality / Eircode]", "IRELAND"],
    duration: { value: "20 days maximum" },
    cost: { label: "Free", detail: "Free service according to the Address Point page. The An Post price list of February 2026 says \"Poste Restante: up to 3 months, free\": it may not be the same service." },
    tips: [
      "Service designed for people with no fixed address: you register at anpost.com/addresspoint, choose a Post Office and receive the address to use exactly as provided. The format is not published.",
      "Letters up to A4 and 100 g. Parcels are not covered. Collection in person with photo ID.",
      "Uncollected mail: returned to sender. The address does not count as proof of residence.",
      "No separate \"poste restante for travellers\" page was found: confirm at the counter."
    ]
  },
  "300": {
    name: "Greece",
    summary: "No official ELTA page describing a poste restante service was found (duration, cost and format unknown).",
    tips: [
      "Alternative described by ELTA: a rented PO box (Ταχυδρομική Θυρίδα, Τ.Θ.).",
      "Office closures and mail delays were reported by the press in late 2025: call ELTA before relying on it."
    ]
  },
  "203": {
    name: "Czech Republic",
    address: ["[Camille DUPONT]", "poste restante", "[Postal code of the chosen office (e.g. 397 04)]", "[POST OFFICE NAME]", "CZECH REPUBLIC"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Unconfirmed", detail: "An official letter from 2018 says the service is charged according to the tariff, with no amount given. No current amount found." },
    tips: [
      "Available to individuals (letters and parcels). Official order: first and last name, \"poste restante\", postal code of the office, name of the office (postal terms updated as of 1.4.2026).",
      "The recipient is not notified when mail arrives (2018 letter, old): the sender has to let them know.",
      "The 2026 terms give 15 days (extendable to 30) for items with a notice of arrival, but nothing says this applies to poste restante.",
      "Avoid \"personal delivery\" items (do vlastních rukou) sent to poste restante."
    ]
  },
  "348": {
    name: "Hungary",
    address: ["[Camille DUPONT]", "Poste restante", "[Exact name of the post office]", "[Postal code of the office]", "HUNGARY"],
    duration: { value: "10 working days (domestic) · 15 (from abroad)" },
    cost: { label: "Unconfirmed", detail: "The general terms (in force as of 1.11.2026) mention no specific fee. Prices are published separately and were not read." },
    tips: [
      "Only certain offices are designated: list in the Postakereső on posta.hu. The address of such an office can only be used for poste restante mail.",
      "Domestic parcels: the label must show a Hungarian mobile number (SMS) or the recipient's email.",
      "ID is required for registered items (parcels, ordinary registered mail), but is not checked for unregistered mail or simple registered mail.",
      "After the holding period, the item is returned to the sender."
    ]
  },
  "191": {
    name: "Croatia",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Postal code and name of the designated office]", "CROATIA"],
    duration: { value: "30 calendar days" },
    cost: { label: "Paid (amount unconfirmed)", detail: "On collection, the recipient pays the postage set by the tariff. Storage fees (ležarina) apply from arrival for some items. Current amounts in euros unconfirmed." },
    tips: [
      "Only offices designated by HP hand over poste restante mail: the official list is a PDF on posta.hr.",
      "Mandatory address: first and last name, \"POSTE RESTANTE\", postal code and name of the office. The 30 days start running as soon as the item arrives at the office.",
      "Accepted documents: identity card, passport, biometric residence card...",
      "Parcels and express items can also be addressed this way (based on the 2019 version of the terms, to be rechecked in the 2024 version)."
    ]
  },
  "504": {
    name: "Morocco",
    summary: "The official Moroccan post website was unreachable: no official page could be read on this service.",
    tips: [
      "A search summary of the poste.ma product page mentions a poste restante service with registration (2 photos and an ID) and 15 days of storage: not verified.",
      "Poste Maroc's addressing standards cite \"poste restante\" as a special mention, along with the PO box: same type of source.",
      "Alternatives mentioned: the PO box and the mail forwarding service."
    ]
  },
  "788": {
    name: "Tunisia",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Chosen post office]", "[POSTAL CODE CITY]", "TUNISIA"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Paid (amount to be verified)", detail: "The poste.tn price page lists a \"poste restante fee\" of 0.500 DT (domestic) and 1.000 DT (international). Another version of the page shows 1.000 and 2.000 DT. Dates and payer not specified." },
    tips: [
      "The poste.tn \"practical advice\" page suggests having your mail addressed to the office of your choice as poste restante, and refers you to an office or the 1828 call centre.",
      "The amounts come from a summary of the price page, not read directly. Offices concerned, parcels, storage period: unconfirmed."
    ]
  },
  "792": {
    name: "Turkey",
    address: ["[Camille DUPONT]", "Postrestant", "[Name of the PTT office / neighbourhood]", "[POSTAL CODE DISTRICT / PROVINCE]", "TURKEY"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Unconfirmed", detail: "No fee found. The regulations mention storage fees (ardiye) beyond the deadline." },
    tips: [
      "According to the 2011 PTT regulation (via a summary), the item bears the name followed by \"Postrestant\" and the place, is handed over at the PTT office on request, with ID at handover.",
      "The PTT addressing document allows \"Postrestant\" on the neighbourhood/village line.",
      "PTT does not accept international express items (Turpex) as postrestant.",
      "Duration: 30 days according to a news site (secondary source); a 2023 PTT table exists but could not be opened. To be verified."
    ]
  },
  "376": {
    name: "Israel",
    summary: "No official Israel Post page could be read (the site blocks automated access). Whether the service currently exists is unconfirmed.",
    tips: [
      "A travel guide and a French-language guide (secondary sources) mention a free poste restante, with ID and 30 days of storage. A parcel tracking site mentions 15 days for parcels: contradictory.",
      "The service may be limited to certain offices."
    ]
  },
  "528": {
    name: "Netherlands",
    address: ["[LAST NAME First name]", "Poste restante", "[Name and address of the chosen post office]", "[POSTAL CODE LOCALITY]", "NETHERLANDS"],
    duration: { value: "1 month (14 to 90 days from abroad)" },
    cost: { label: "Unconfirmed", detail: "No fee for receiving or extending found. The price of a PO box (Postbus) is a different product." },
    tips: [
      "PostNL describes the service for people with no fixed home or residence. Parcels would be excluded (2026 service framework, read via a summary).",
      "Service page read only via a search summary (the site timed out on direct reading), with mentions that seem old. No list of offices found.",
      "Alternative: the Postbus, which only receives PostNL items."
    ]
  },
  "752": {
    name: "Sweden",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Postal code and locality of the pickup point]", "SWEDEN"],
    duration: { value: "30 days (old page)" },
    cost: { label: "Unconfirmed", detail: "No fee found for poste restante or for an extension." },
    tips: [
      "Collection at a PostNord partner point with ID (summary of the official English page). The exact address format could not be read: the lines above are generic.",
      "The page refers to a list of postal codes where collection is possible.",
      "A search summary mentions a limited service since April 2026: unconfirmed.",
      "The 30 days come from a page about 6 years old. Parcels: unconfirmed."
    ]
  },
  "208": {
    name: "Denmark",
    summary: "No reliable information found. PostNord stopped delivering letters in Denmark after 30 December 2025, so a poste restante service for letters is unlikely.",
    tips: [
      "A summary of a PostNord page mentions a \"Poste Restante\" parcel sent to a chosen Parcel Shop: unconfirmed, duration (14 days) unconfirmed.",
      "PostNord pages block automated access: check from a browser."
    ]
  },
  "578": {
    name: "Norway",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Name of the post office or \"Post i butikk\"]", "[Postal code and locality of the point]", "NORWAY"],
    duration: { value: "3 weeks" },
    cost: { label: "Unconfirmed", detail: "No Posten page mentions a fee for poste restante." },
    tips: [
      "Reserved for people staying in or passing through Norway (official page). Send to a post office or a \"Post i butikk\", using the point's postal address (search on posten.no).",
      "Posten's page on collection deadlines classes poste restante among the 3-week items.",
      "Parcels: unconfirmed. ID for this specific service: unconfirmed."
    ]
  },
  "246": {
    name: "Finland",
    address: ["[Camille DUPONT (official first and last name)]", "POSTE RESTANTE", "[POSTAL CODE CITY]", "FINLAND"],
    duration: { value: "14 days" },
    cost: { label: "Free", detail: "Free according to Posti. A fee of €3.10 was considered in 2019 and then postponed under pressure from the regulator." },
    tips: [
      "The address uses the postal code and city, not the name of an office (official example: \"Mary Smith POSTE RESTANTE 33100 TAMPERE\"). Without official first and last name, the item is returned.",
      "Reserved for individuals. No forwarding and no collection at another point.",
      "Not all branches offer the service: search by postal code on posti.fi. A third party can collect with a power of attorney.",
      "Parcels are not mentioned: confirm with Posti."
    ]
  }
});
Object.assign(window.COUNTRIES_EN, {
  "686": { name: "Senegal",
    summary: "No official La Poste Sénégal page describing a poste restante service was found: neither the home page, the \"PO box\" page nor the FAQ mention it. Nothing allows us to say it exists or does not exist.",
    tips: [
      "What is confirmed (official FAQ, read directly): to collect an item at the office, go to the delivery office with ID within 15 days. The FAQ talks about items with a notice of attempted delivery, not poste restante.",
      "Same FAQ: a storage fee of 100 FCFA per day applies after 8 days of holding. This rule concerns items awaiting collection, not necessarily poste restante.",
      "Dominant use confirmed by the official site: the PO box (annual subscription, from 5,000 FCFA in rural areas to 10,000 FCFA in urban areas for an individual, taken out at an office). The FAQ states it is not compulsory: without a PO box, give a full street address and a phone number.",
      "UPU addressing sheet (02/2015): examples of counter, PO box (BP) and \"postchance\" addresses, but no poste restante example. 5-digit postcode in front of the delivery office name.",
      "Unverified lead: an old, secondary practical guide to Dakar mentions poste restante for letters and money orders at the price of an international stamp, with mail sent by default to the Poste Principale if no office is specified. To be confirmed with La Poste.",
      "To settle it: contact La Poste customer service or a post office before sending anything."
    ] },
  "384": { name: "Côte d'Ivoire",
    summary: "No official La Poste de Côte d'Ivoire page describing a poste restante service was found. The official site promotes the PO box, and the UPU addressing sheet says delivery is made to PO boxes.",
    tips: [
      "UPU addressing sheet (09/2004, old): delivery is made to PO boxes; the office code (two digits) must be in the address, for example \"06 B.P. 37 ABIDJAN 06\". Home delivery is described there as being tested for a single building.",
      "Official site (read directly): the \"Particuliers\" page presents the PO box (acquire or renew online); there is no mention of poste restante, holding period or ID.",
      "Unverified lead: travel guides of uneven quality mention poste restante use at the Abidjan central office, with no detail or official source.",
      "To settle it: contact La Poste de Côte d'Ivoire or the central office before sending mail."
    ] },
  "204": { name: "Benin",
    address: ["[Ms Camille DUPONT]", "POSTE RESTANTE", "[Chosen La Poste du Bénin commercial agency]", "[Locality]", "BENIN"],
    duration: { value: "Not specified" },
    cost: { label: "Paid", detail: "The official page states a delivery fee of 500 FCFA. It does not say who pays it or when." },
    tips: [
      "Official \"Service distribution\" page (read directly, undated, content possibly old): poste restante is described as \"mail to be held at the customer's disposal at the counter of a commercial agency\", for all commercial agencies, on request made at the agency's address.",
      "The exact address format is not given by this page: the lines above are generic. Ask the chosen agency how to write the item's address.",
      "Holding period and ID: not specified for poste restante. A photocopy of ID is mentioned only for PO boxes.",
      "Dominant use: the PO box (typical address \"10 BP 648 COTONOU\" according to the UPU addressing sheet, 11/2025). The UPU sheet does not describe poste restante."
    ] },
  "288": { name: "Ghana",
    address: ["[Mr Camille DUPONT]", "[Name of the post office]", "[Locality + postcode (e.g. Accra-Central GA-183)]", "[Region (e.g. GREATER ACCRA)]", "GHANA"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Unconfirmed", detail: "No source consulted gives a fee or holding period for poste restante in Ghana." },
    tips: [
      "UPU addressing sheet (03/2023): it gives a poste restante example with \"G.P.O Post Office\", \"Accra-Central GA-183\", \"GREATER ACCRA\", \"GHANA\". The format of the addressee name line is not shown there: the lines above are an adaptation.",
      "The main office (General Post Office) is on Asafoatse Nettey Road, Accra Central, according to the same sheet. Other offices: not verified.",
      "The official Ghana Post site could not be read in detail and no poste restante page was found. ID, holding period, cost: to be confirmed with Ghana Post (contact given on the UPU sheet).",
      "The service sold to the public is mainly the PO box (\"P.O. Box GP 1234\" format in the UPU sheet). Ghana Post also uses a digital address (e.g. GA-183-8164)."
    ] },
  "566": { name: "Nigeria",
    address: ["[Mr Camille DUPONT]", "c/o Postmaster", "[Name of the Post Office]", "[Locality + 6-digit postcode]", "[STATE (e.g. OYO STATE)]", "NIGERIA"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Unconfirmed", detail: "No source consulted gives a fee or holding period for poste restante in Nigeria." },
    tips: [
      "UPU addressing sheet: poste restante example with \"c/o Postmaster\", \"Oyo Post Office\", \"Oyo 211001\", \"OYO STATE\", \"NIGERIA\". The sheet is published by the UPU and describes neither holding period nor cost.",
      "ID: a NIPOST-related document and a forum (secondary, old, read through a search summary) say the addressee must prove their identity, and that the item must be marked \"poste restante\". Not confirmed by an official NIPOST page.",
      "The official NIPOST site (read directly) does not mention poste restante, neither in the FAQ nor in the Mails and Counters pages. Its FAQ asks for valid ID and the 9-digit tracking ID to collect a parcel.",
      "The usual service is the PO box or postal bag (P.O. Box / PMB, online application). Availability of poste restante at each office: to be confirmed with the chosen office."
    ] }
});
Object.assign(window.COUNTRIES_EN, {
  "120": {
    name: "Cameroon",
    summary: "No official CAMPOST page describing a poste restante service was found (duration, cost, ID and address format unknown). The official site presents the PO box as the traditional product.",
    tips: [
      "Official page read directly: CAMPOST describes the PO box as the product that gives the customer a legal address. To open one, an ID document (copy of national ID, passport or residence card) is required. No price or duration is given, and poste restante is not mentioned there.",
      "According to the local press (Cameroon Tribune), CAMPOST holds the monopoly on PO boxes: this is the dominant way to receive mail in Cameroon.",
      "Older secondary source, not verified: testimonies on an expat forum in Yaoundé mention a parcel collected as \"poste restante\" at a post office counter, with no official conditions.",
      "The UPU addressing sheet (07/2002) only gives a PO box example (\"BP … / YAOUNDE / CAMEROON\").",
      "To be confirmed with CAMPOST or at the counter before sending."
    ]
  },
  "450": {
    name: "Madagascar",
    summary: "No official Paositra Malagasy page describing a poste restante service could be read (duration, cost, ID and exact format unknown). The official site could not be accessed.",
    tips: [
      "Secondary source, undated and not verified: a travel guide says to have your name written in capitals followed by \"c/o Poste Restante\" and the pickup town, to warn the postmaster beforehand and to carry an ID.",
      "The UPU addressing sheet (08/2011) only gives examples of home delivery and PO box (\"B.P. …\"), with a 3-digit postcode before the town.",
      "Disruptions to the postal service were reported in 2025 in a notice from the UPU network: check the current status of the service.",
      "To be confirmed with Paositra Malagasy or at the counter before sending."
    ]
  },
  "480": {
    name: "Mauritius",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Chosen post office]", "[LOCALITY POSTCODE]", "MAURITIUS"],
    duration: { value: "2 months (international)" },
    cost: { label: "Not confirmed", detail: "No price is given on the official page consulted." },
    tips: [
      "Official page read directly: \"Poste Restante\" holds mail at the post office until the recipient collects it. Domestic mail unclaimed for over a month is handled according to regulation; international mail unclaimed for over two months is returned to the sender.",
      "The official page does not detail the address lines. The 5-digit postcode follows the locality name, according to the UPU addressing sheet (01/2026), which gives no poste restante example.",
      "Parcels, ID, which offices take part and prior registration: not specified. To be confirmed with Mauritius Post."
    ]
  },
  "854": {
    name: "Burkina Faso",
    address: ["[Camille DUPONT]", "Poste restante", "[POSTCODE LOCALITY]", "BURKINA FASO"],
    duration: { value: "Not confirmed" },
    cost: { label: "Not confirmed", detail: "No poste restante price was found. For comparison, the PO box is paid: 17,000 CFA francs incl. tax to subscribe, then 11,800 CFA francs incl. tax per year for an individual (official page)." },
    tips: [
      "Official (UPU addressing sheet, 12/2021): poste restante example on three lines, recipient's name, \"Poste restante\", then a 5-digit postcode and locality (example: 70000 TENKODOGO), with no office name.",
      "The official laposte.bf site promotes the PO box (online subscription, valid ID required) and does not mention poste restante: duration, cost and ID at pickup are not confirmed.",
      "The UPU describes the service as existing, but it is not known which offices offer it: to be confirmed with La Poste Burkina Faso (branches listed on laposte.bf)."
    ]
  },
  "466": {
    name: "Mali",
    summary: "No official or reliable source describing a poste restante service in Mali was found (duration, cost, ID and address format unknown).",
    tips: [
      "The UPU addressing sheet (07/2002, old) only gives home delivery examples (Bamako and other localities), with no poste restante and no postcode.",
      "A parcel tracking site (secondary source) says Mali has no national postcode system.",
      "Unverified lead: the PO box seems to be the usual practice for organizations (\"BP\" addresses in Bamako).",
      "To be confirmed with La Poste du Mali before sending."
    ]
  }
});
// North Africa: Algeria, Egypt, Morocco, Tunisia.
Object.assign(window.COUNTRIES_EN, {
  "012": { name: "Algeria",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Chosen post office]", "[POSTAL CODE TOWN]", "ALGERIA"],
    duration: { value: "1 month (ministry FAQ) · 15 days (Algérie Poste page, summary)" },
    cost: { label: "Paid (amount to be verified)", detail: "Ministry of Post FAQ (archived January 2025): fixed surcharge of DZD 55 per item and DZD 30 per newspaper or periodical, unless a subscription card is shown (DZD 2,000 per year). Who pays and when: not specified; prices possibly out of date." },
    tips: [
      "Two official sources disagree on the duration. The ministry FAQ says 1 month (an item received on 2 July is kept until 31 July inclusive). A summary of the poste.dz \"Postal services\" page, not read directly because the site blocks automated access, mentions 15 days.",
      "According to the ministry FAQ, mail can be addressed \"Poste Restante\" from any post office, for collection in person at the counter.",
      "Subscription card: issued by all post offices on request, valid for 1 year. File: application form, copy of a valid ID card, 2 ID photos. For a foreign subscriber or a simple pickup without a card, the required document is not confirmed.",
      "A summary of the poste.dz \"Poste restante\" page (not read directly) says items are handed over only to the addressee or their proxy, on presentation of an ID.",
      "An Algérie Poste post relayed by the press mentions 3 months maximum storage of mail: the scope is not specified. The 3 months in the FAQ concern forwarding to a poste restante, not storage at the office. Parcels: not mentioned."
    ] },
  "818": { name: "Egypt",
    summary: "No official page describing a poste restante service could be read: the Egypt Post website blocks automated access, including through the archive, and no usable source was found on this service.",
    tips: [
      "The UPU addressing sheet (July 2023) describes home delivery and the PO box (box number, post office name, locality, province) but no poste restante format. This does not prove the service does not exist.",
      "Unverified lead: ask at the counter of a main post office (the UPU sheet cites the main Cairo office, Attaba, in its PO box example) whether mail can be held for collection, for how long and with what ID.",
      "Unverified lead: the PO box, the only pick-up-at-the-office option documented by the UPU."
    ] },
  "504": { name: "Morocco",
    address: ["[MS CAMILLE DUPONT]", "POSTE RESTANTE", "[Chosen AGENCY]", "[POSTAL CODE TOWN]", "MOROCCO"],
    duration: { value: "15 days (summary of the poste.ma page)" },
    cost: { label: "Unconfirmed", detail: "No amount read. The summary of the poste.ma page describes the price as \"reasonable and accessible\", without a figure." },
    tips: [
      "Address format: UPU addressing sheet (2014), which gives \"GENERAL DELIVERY\" as an example (the UPU's English wording), the name of the Poste Maroc agency, then the 5-digit postcode before the town. Rules: capital letters, no punctuation, 38 characters per line at most.",
      "A summary of the poste.ma page (not read directly, the site is unreachable) says registration requires 2 recent photos and a valid ID, and mail is held for 15 consecutive days.",
      "The same summary mentions an Al Barid Bank agency, whereas the UPU sheet mentions a Poste Maroc agency: which type of office is meant is not settled.",
      "Parcels: not mentioned. No archived page could be read."
    ] },
  "788": { name: "Tunisia",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Chosen post office]", "[POSTAL CODE TOWN]", "TUNISIA"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Paid (payer to be verified)", detail: "poste.tn price page (archived captures of January 2025 and May 2026, identical): \"Taxe de la Poste Restante\" of 1.000 DT (domestic) and 2.000 DT (international). Payer and basis of calculation: not specified. An older version showed 0.500 and 1.000 DT." },
    tips: [
      "The poste.tn \"practical advice\" page (archived capture of March 2026) suggests having your mail addressed to the office of your choice with poste restante, and refers you to an office or the 1828 call centre.",
      "Postal code (law no. 98-38 of 2 June 1998, Official Gazette): poste restante items are those whose delivery must take place at a designated post office. An item for a minor is handed over only with the guardians' authorisation, otherwise it is returned to the sender.",
      "The same code requires keeping items that were neither delivered nor returned for 1 year at most: this is not the storage period at the office, which is not specified.",
      "Address: the UPU sheet (2014) describes a 4-digit postcode before the name of the office or town, with no poste restante example. Offices concerned, parcels, ID: unconfirmed."
    ] }
});
Object.assign(window.COUNTRIES_EN, {
  "710": { name: "South Africa",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[NAME OF THE POST OFFICE]", "[Postcode (4 digits)]", "SOUTH AFRICA"],
    duration: { value: "2 months at most (temporary service)" },
    cost: { label: "Free", detail: "The SAPO 2026/2027 tariff states that poste restante (temporary, two months at most) remains free of charge, and that a poste restante number can still be obtained free of charge." },
    tips: [
      "Only official source found: SAPO's 2026/2027 postal tariff (PDF), which gives no details on the address to write, the ID requirement or parcels. The address lines above follow the UPU addressing rule (office name, then postcode): the exact placement of the \"poste restante number\" is not specified.",
      "It is unclear whether the \"two months\" refers to how long you can use the service or how long each item is held: to be confirmed at the counter of the chosen office.",
      "In South Africa, the dominant use remains the PO box (R695 per year) or the Private Bag (R2,760 per year, mainly for organisations), according to the same 2026 tariff.",
      "Pick a specific office and ask whether it offers the service before sending anything."
    ] },
  "404": { name: "Kenya",
    summary: "No official Posta Kenya page describing a poste restante service was found: duration, cost and address format are not documented. The official site promotes the PO box and the Private Bag.",
    tips: [
      "The official site (Mail Services page) describes private letter boxes and the Private Bag (mainly for organisations receiving large volumes of mail). Individual box: Ksh 2,200, plus Ksh 1,000 key deposit and Ksh 50 e-Citizen fee.",
      "Posta Kenya's service charter asks for a copy of the identity card to rent an individual box. Nothing is said about poste restante.",
      "Kenya's UPU addressing sheet (09/2004) only shows a \"P O Box\" example. Unverified lead: ask a Posta office directly whether mail can be held at the counter.",
      "International parcels are not described either: do not rely on this service without written confirmation."
    ] },
  "834": { name: "Tanzania",
    address: ["[Ms Camille DUPONT]", "Poste Restante", "[Postcode (5 digits) NAME OF THE OFFICE]", "[Region]", "TANZANIA"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Unconfirmed", detail: "No official TPC page describing poste restante, its duration or its cost was found." },
    tips: [
      "The format comes from Tanzania's UPU addressing sheet (06/2013), which gives a \"Poste restante\" example: name, Poste Restante, postcode + post office, region, TANZANIA. Official source, but old.",
      "The TPC site (posta.co.tz) does not mention this service in the pages consulted (FAQ, tariffs, services). Is the service still offered? To be confirmed with the chosen office.",
      "The 5-digit postcode depends on the office: UPU example, 47200 KIGOMA. Ask the chosen office for it.",
      "The PO box (P.O. Box) remains the usual option: TPC also offers an online PO box application."
    ] },
  "231": { name: "Ethiopia",
    summary: "No official Ethiopost page describes a poste restante service. The official site describes collecting items at the post office, the (now virtual) PO box, and parcels.",
    tips: [
      "Collecting a parcel at the office (official Parcel page): official or company ID with a copy, and the tracking number. Handling fee of 50 ETB (under 10 kg) or 100 ETB (over 10 kg), plus a 20 ETB facilitation fee. To be collected within 10 days, then 0.75 ETB storage per day. This is not poste restante: it assumes an item already registered.",
      "Official \"Post Box Service\" page: annual subscription to a virtual PO box, from 750 ETB (individual, excl. 15% VAT) to 50,000 ETB (business).",
      "Ethiopia's UPU addressing sheet (07/2002) only gives home delivery and P.O. Box examples. Unverified lead: ask an Ethiopost office whether mail can be held at the counter."
    ] },
  "516": { name: "Namibia",
    address: ["[Ms Camille DUPONT]", "Poste Restante", "[NAME OF THE POST OFFICE]", "[Postcode (5 digits)]", "NAMIBIA"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Unconfirmed", detail: "The 2025/2026 postal tariff published in the Government Gazette (No. 8740, 15 September 2025) contains no \"poste restante\" line. That does not prove the service is free." },
    tips: [
      "The format comes from Namibia's UPU addressing sheet (created June 2020), which gives a \"Poste restante / PO Counter delivery\" example: name, Poste Restante, office name, postcode, NAMIBIA.",
      "Same official tariff: parcel storage at N$7.70 per day after 14 days from notification. Parcels arriving at the international mail centre can be transferred for collection at the office of your choice (conveyance fee shown as \"-\").",
      "PO boxes from N$450 to 835.50 per year depending on size and location, and Private Bags from N$484.50 to 1,608 per year depending on category: this is the dominant use. The poste restante service remains to be confirmed with a NamPost office.",
      "The nampost.com.na site was unreachable at the time of research: no official page describing the service could be read."
    ] }
});
Object.assign(window.COUNTRIES_EN, {
  "788": {
    name: "Tunisia",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Chosen post office]", "[POSTAL CODE TOWN]", "TUNISIA"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Paid (payer to be verified)", detail: "poste.tn price page (archived capture of 19 January 2026, re-read directly in the archive): \"Taxe de la Poste Restante\" of 1.000 DT (domestic) and 2.000 DT (international), listed among the letters' \"additional services\" tariffs, next to registration and acknowledgement of receipt. Payer (sender or addressee) and basis of calculation: not specified. An older version showed 0.500 and 1.000 DT." },
    tips: [
      "The poste.tn \"practical advice\" page (archived capture of 11 March 2026) suggests having your mail addressed to the office of your choice with poste restante, and refers you to an office or the 1828 call centre.",
      "Postal code (law no. 98-38 of 2 June 1998, Official Gazette, text read as PDF): poste restante items are those whose delivery must take place at a designated post office (article 2). A poste restante item for a minor is handed over only with the guardians' authorisation, otherwise it is returned to the sender (article 13).",
      "Article 14 of the same code requires keeping items that were neither delivered nor returned for 1 year at most, from the date of posting: this is not the storage period at the office, which is not specified. No order or general terms of sale setting this period were found.",
      "Address: the UPU sheet (April 2014) describes a 4-digit postcode before the name of the office or town (e.g. \"1002 TUNIS BELVEDERE\"), with no poste restante example: the lines above are an adaptation. Offices concerned, parcels, ID: unconfirmed.",
      "For details (storage period, ID to show, who pays the fee), ask the chosen office or call 1828: no official page consulted says."
    ]
  }
});
Object.assign(window.COUNTRIES_EN, {
  "508": { name: "Mozambique",
    summary: "No official source describes a poste restante service (\"posta restante\") in Mozambique. The state-owned company Correios de Moçambique was dissolved in 2021; in October 2024 the regulator INCM granted the universal postal operator licence to CORRE, whose website mentions neither poste restante, nor an address format, nor a holding period.",
    tips: [
      "Official INCM page (14 October 2024): the universal postal operator licence is handed to CORRE to fill \"the legal vacuum resulting from the dissolution, in 2021, of the state-owned company Correios de Moçambique\". This text is about the company; it says nothing about poste restante.",
      "Press (Diário Económico, 30 May 2025): the liquidation committee announces the permanent closure of Correios de Moçambique's premises from 1 June 2025 and the transfer of all activities to CORRE. Secondary source.",
      "CORRE's official site (corremz.com): it lists \"caixas de apartado\" (PO boxes) among the universal postal service offerings, but does not explain how to address mail, any holding period, any holding fees, or poste restante.",
      "Mozambique's UPU addressing sheet (03/2005, so old and in the name of the former national company) only gives home delivery and P.O. Box examples (4-digit postcode before the locality), with no poste restante example.",
      "Unverified lead: ask CORRE directly whether one of its access points can hold mail at the counter before having anything sent."
    ] },
  "894": { name: "Zambia",
    address: ["[Ms Camille DUPONT]", "[Post Restante]", "[NAME OF THE POST OFFICE Postcode (5 digits)]", "ZAMBIA"],
    duration: { value: "Unconfirmed" },
    cost: { label: "Unconfirmed", detail: "No official Zampost page describing poste restante, its duration or its cost was found." },
    tips: [
      "The format comes from Zambia's UPU addressing sheet (01/2013), which gives a \"Poste restante\" example: name, Post Restante, post office + postcode, ZAMBIA (example: LIVINGSTONE 23345). Official source, but old. The same sheet states that postcodes had not yet been assigned: ask the chosen office for the code.",
      "Zampost's official site (pages consulted: home, PO boxes) does not mention poste restante. Is the service still offered, for how long, with which ID? To be confirmed with the chosen office.",
      "The PO box remains the usual option: official \"PO Box Services\" page (140+ offices), annual rental payable in advance: 600 per year (individual), 1,500 (SME), 2,500 (non-profit), 7,000 (government and large businesses). ID asked to open a box: NRC, passport or driving licence. This is not poste restante.",
      "The UPU sheet also lists the Private Bag (example \"Private Bag E 345\") and private postal agencies, but these are other delivery modes."
    ] },
  "800": { name: "Uganda",
    summary: "No official Posta Uganda page describes a poste restante service: duration, cost and address format are not documented. The site promotes PO boxes (\"Physical Address\"), electronic addresses and the Private Bag.",
    tips: [
      "Uganda's UPU addressing sheet (updated 01/2026) only gives urban, rural, organisation and P.O. Box examples, with no poste restante example.",
      "Official \"Physical Address\" page: a lockable box in a post office, annual rental of UGX 30,000 to 120,000 depending on the office, plus UGX 10,000 for an authorisation card and UGX 15,000 for the padlock key. Individuals: copy of the identity card and a passport photo.",
      "Official \"Virtual Box\" page: a digital address at UGX 20,000 for an individual, whatever the office. The address format is not specified.",
      "Official \"Private Bags\" page: only for existing prepaid or contract customers, from UGX 3,000,000, billed monthly (the page also says \"annual fees\": inconsistency to clarify with Posta Uganda).",
      "Official \"Enquiry Fees\" page: UGX 10,000 for an enquiry about a postal address. Nothing on uncollected mail.",
      "Unverified lead: ask a Posta Uganda office directly whether mail can be held at the counter before having anything sent."
    ] },
  "646": { name: "Rwanda",
    summary: "No official source describes a poste restante service in Rwanda. The iPosita website presents PO box rentals and, since 2024, the electronic PO box (ePoBox); the UPU addressing sheet only gives a B.P. example.",
    tips: [
      "Official iPosita \"PO Box Rentals\" page (undated): a named box, the iPosita commits to receive, keep and make the mail available to the subscriber. Annual rental: 15,000 RWF (individual) and 30,000 RWF (company).",
      "ePoBox: official Irembo portal help page (modified 8 December 2025): online application with an Irembo account, phone number, national ID number (individual) or TIN (company), choice of post office; 8,000 RWF (individual) or 15,000 RWF (company); processing time of one working day. The address format is not specified there.",
      "Rwanda's UPU addressing sheet (03/2005, old) only shows a \"B.P.\" (PO box) example, with no poste restante.",
      "The operator's name varies by source (National Post Office, iPosita, Rwanda Post): it is the same national office.",
      "Unverified lead: ask an iPosita office directly whether mail can be held at the counter. An Australia Post guide (secondary source) says its International Express service does not deliver to poste restante for Rwanda."
    ] },
  "070": {
    name: "Bosnia and Herzegovina",
    address: [
      "[First name SURNAME]",
      "POSTE RESTANTE",
      "[Postcode and name of the post office]",
      "BOSNIA AND HERZEGOVINA"
    ],
    duration: { value: "30 days" },
    cost: { label: "Paid (amount unspecified)", detail: "The post office mentions the prescribed postage payable on delivery, with no amount on these pages." },
    tips: [
      "Mail is kept 30 days from arrival at the destination office.",
      "Official format: first and last name, the words \"POSTE RESTANTE\", postcode and name of the office.",
      "Express items cannot be addressed poste restante. ID requirement: not stated."
    ]
  },
  "100": {
    name: "Bulgaria",
    address: [
      "[First name SURNAME]",
      "До поискване",
      "[Name of the post office]",
      "BULGARIA"
    ],
    duration: { value: "20 days" },
    cost: { label: "Unconfirmed", detail: "The general terms mention no fee specific to this service." },
    tips: [
      "The general terms (2023) set 20 calendar days from arrival before the item is returned to the sender. The clauses read concern domestic mail.",
      "The addressee proves identity with an ID document.",
      "No clause found for incoming international mail: to be confirmed."
    ]
  },
  "116": {
    name: "Cambodia",
    summary: "No official Cambodia Post page clearly describing a poste restante service (duration, cost and address format) was found.",
    tips: [
      "\"POSTE RESTANTE\" with the name and a phone number: recommendation from a secondary source, not verified.",
      "The official website could not be opened (expired certificate): the only related page found is about PO boxes.",
      "Alternative documented by the UPU: the PO box.",
      "To be confirmed with Cambodia Post or at a counter before sending."
    ]
  },
  "292": {
    name: "Gibraltar",
    summary: "No official Royal Gibraltar Post Office page clearly describing a poste restante service (duration, cost and address format) was found.",
    tips: [
      "The government website mentions \"post restante facilities\" and PO boxes for hire, with no duration, cost or address format.",
      "ID reportedly required on collection according to a secondary source: not verified.",
      "Post office contact: cco@post.gi, 104 Main Street.",
      "Alternative documented by the UPU: the PO box.",
      "To be confirmed with Royal Gibraltar Post Office or at a counter before sending."
    ]
  },
  "344": {
    name: "Hong Kong",
    summary: "No official Hongkong Post page clearly describing a poste restante service (duration, cost and address format) was found.",
    tips: [
      "The official post office guide has a Poste Restante section but could not be opened: nothing is verified.",
      "\"Poste Restante\" or \"存局待領\", real full name required: secondary source, not verified.",
      "According to unverified snippets, the service is limited to a few offices including the General Post Office.",
      "Alternative documented by the UPU: the PO box.",
      "To be confirmed with Hongkong Post or at a counter before sending."
    ]
  },
  "440": {
    name: "Lithuania",
    summary: "No official Lietuvos paštas page clearly describing a poste restante service (duration, cost and address format) was found.",
    tips: [
      "The official website gives the format for international mail: first and last name, post office, and the words \"Poste restante\" (Iki pareikalavimo) in bold.",
      "No duration specific to this service: only the general one-month rule for items is stated.",
      "Fees and ID requirement: nothing found.",
      "Alternative documented by the UPU: the PO box.",
      "To be confirmed with Lietuvos paštas or at a counter before sending."
    ]
  },
  "442": {
    name: "Luxembourg",
    summary: "No official POST Luxembourg page clearly describing a poste restante service (duration, cost and address format) was found.",
    tips: [
      "No current official page on poste restante. A secondary source says the service has been discontinued: not confirmed.",
      "The 2018 POST Courrier general terms define an \"Envoi Poste Restante\" collected at a sales point for a handling fee: snippet not re-read.",
      "To be confirmed with POST Luxembourg.",
      "Alternative documented by the UPU: the PO box.",
      "To be confirmed with POST Luxembourg or at a counter before sending."
    ]
  },
  "446": {
    name: "Macau",
    summary: "No official Correios de Macau (CTT) page clearly describing a poste restante service (duration, cost and address format) was found.",
    tips: [
      "The official page says \"Posta Restante\" mail is collected at the post office for an additional fee (MOP 6.5 as we read it, to be checked) and that unclaimed items are returned after 90 days.",
      "ID and address format: not stated on that page. A secondary source cites \"存局候領\" and a name matching the ID.",
      "The service is reportedly offered only at some branches: not verified.",
      "Alternative documented by the UPU: the PO box.",
      "To be confirmed with Correios de Macau (CTT) or at a counter before sending."
    ]
  },
  "470": {
    name: "Malta",
    address: [
      "[Camille DUPONT]",
      "Poste Restante",
      "Valletta Boxes",
      "75, Old Bakery Str",
      "IL-BELT VALLETTA",
      "VLT 1000",
      "MALTA"
    ],
    duration: { value: "3 months" },
    cost: { label: "Free", detail: "No charge on collection according to MaltaPost." },
    tips: [
      "Mail is kept up to 3 months after it arrives in Malta. The service is for items sent from abroad.",
      "You must show identification when collecting.",
      "A search summary mentioned emailing info@maltapost.com beforehand: not confirmed by the official page."
    ]
  },
  "688": {
    name: "Serbia",
    address: [
      "[First name SURNAME]",
      "POSTE RESTANTE",
      "[Postcode and name of the post office]",
      "SERBIA"
    ],
    duration: { value: "30 days" },
    cost: { label: "Unconfirmed", detail: "No fee specific to poste restante is given on the official page." },
    tips: [
      "Mail is kept 30 days from arrival in the poste restante section of the destination post office.",
      "The official FAQ accepts \"POST RESTANT\" or \"POSTE RESTANTE\". A valid ID is required at the office.",
      "No precise fee found: to be confirmed with Pošta Srbije."
    ]
  },
  "702": {
    name: "Singapore",
    summary: "No official SingPost page clearly describing a poste restante service (duration, cost and address format) was found.",
    tips: [
      "The official page only lists \"Poste Restante\" as a section heading, with no duration, cost or rule.",
      "\"Poste restante\" or \"To Be Called For\", reportedly for travellers only: old secondary source, not verified.",
      "SingPost also offers a mail retention service, which is separate and probably paid.",
      "Alternative documented by the UPU: the PO box.",
      "To be confirmed with SingPost or at a counter before sending."
    ]
  },
  "703": {
    name: "Slovakia",
    address: [
      "[Camille DUPONT]",
      "POSTE RESTANTE",
      "[Postcode and name of the post office]",
      "SLOVAKIA"
    ],
    duration: { value: "18 days (letters), 10 days (parcels)" },
    cost: { label: "Unconfirmed", detail: "The general terms and the 2026 domestic tariff mention no fee specific to this service." },
    tips: [
      "Letters and registered items: 18 calendar days. Parcels and express items: 10 days.",
      "No notice is left for poste restante items: you have to check regularly.",
      "ID required; the tracking number may be asked for if the addressee knows it."
    ]
  },
  "705": {
    name: "Slovenia",
    address: [
      "[Camille DUPONT]",
      "Poste restante",
      "[Postcode and name of the post office]",
      "SLOVENIA"
    ],
    duration: { value: "30 days" },
    cost: { label: "Unconfirmed", detail: "No fee is stated on the service page or the form." },
    tips: [
      "The service is not automatic: the addressee must first sign an addressee's order (Naslovnikovo naročilo) at a post office, with an ID document.",
      "With that agreement, arrived mail is kept 30 days as \"poštno ležeče\". Without it, the general holding period is shorter.",
      "The words \"Poštno ležeče\" and \"Poste restante\" do not count as a sender address."
    ]
  },
  "144": {
    name: "Sri Lanka",
    address: [
      "[Camille DUPONT]",
      "POSTE RESTANTE",
      "[Name of the chosen post office]",
      "SRI LANKA"
    ],
    duration: { value: "1 month (2 months in seaport towns)" },
    cost: { label: "Unconfirmed", detail: "No poste restante fee on the official pages read. The Rs 50 per day warehousing charge applies to undelivered parcels." },
    tips: [
      "Mail is kept 2 months from receipt in a seaport town, 1 month elsewhere.",
      "The service is offered to tourists and travellers at \"selected\" offices, with no published list: ask the post office which one to use.",
      "You must identify yourself to collect mail, with no document specified. Sufficient address particulars are required to prevent mistakes."
    ]
  },
  "158": {
    name: "Taiwan",
    address: [
      "[Camille DUPONT]",
      "Poste Restante",
      "[Name of the post office]",
      "[Phone number]",
      "TAIWAN"
    ],
    duration: { value: "15 days (2 months for international)" },
    cost: { label: "Free for 15 days", detail: "Free for the first 15 days, then a daily storage fee from day 16 (amount varies, to be confirmed)." },
    tips: [
      "Domestic mail: 15 days from the day after arrival, extendable to 1 month by written request. International mail: 2 months, with 15 days free.",
      "The address must include the recipient's name (full, no abbreviation), phone number, the post office name and the words \"存局候領\" or \"Poste Restante\". With a mobile number, an SMS announces the arrival.",
      "Collection with an ID document. Express mail is held only 5 days."
    ]
  },
  "586": {
    name: "Pakistan",
    address: [
      "[Camille DUPONT]",
      "POSTE RESTANTE",
      "[Name of the chosen post office]",
      "PAKISTAN"
    ],
    duration: { value: "1 month (2 months in Karachi)" },
    cost: { label: "Unconfirmed", detail: "No fee stated on the official page." },
    tips: [
      "Mail is kept 2 months in Karachi and 1 month in all other cases, from its arrival at the designated office.",
      "ID requirement and exact address format: not stated on the official page.",
      "A search summary mentioned a 3-month limit on use: not confirmed."
    ]
  },
  "807": {
    name: "North Macedonia",
    address: [
      "[First name SURNAME]",
      "Пост рестант",
      "[Name of the post office]",
      "NORTH MACEDONIA"
    ],
    duration: { value: "30 days" },
    cost: { label: "Unconfirmed", detail: "No fee stated on the official page." },
    tips: [
      "Mail is kept 30 days from arrival at the destination postal unit.",
      "The recipient's address carries the words \"Пост рестант\". The service is presented as outside the universal service.",
      "Excluded: urgent items, EMS, court or administrative letters. ID requirement: not stated."
    ]
  },
  "499": {
    name: "Montenegro",
    address: [
      "[First name SURNAME]",
      "POSTE RESTANTE",
      "[Postcode and name of the post office]",
      "MONTENEGRO"
    ],
    duration: { value: "30 days" },
    cost: { label: "Unconfirmed", detail: "The domestic tariff shows 0.00 for sending poste restante. A supplement of 1.00 € excl. VAT exists for delivering such an item to a home address." },
    tips: [
      "The official rulebook (2017 catalogue, check whether it is current) sets 30 days for items addressed POSTE RESTANTE.",
      "Format: first and last name, the words \"POSTE RESTANTE\", postcode and name of the destination office.",
      "ID requirement: not found."
    ]
  },
  "428": {
    name: "Latvia",
    address: [
      "[First name SURNAME]",
      "Poste restante",
      "[Name of the post office]",
      "LATVIA"
    ],
    duration: { value: "2 months (10 days free)" },
    cost: { label: "Paid after 10 days", detail: "The official tariff charges 1.00 € per day beyond 10 days. No fee for letters of 500 g or less. Extension to 2 months: 2.20 €." },
    tips: [
      "The official rules (2005 regulation, check whether still in force) accept \"Poste restante\" for international mail.",
      "An ID document with photo and signature is required on collection. Mail is not handed over if the address only shows initials or a document number.",
      "No duration specific to this service found: the general rule is 2 months at most, with 10 days free."
    ]
  },
  "642": {
    name: "Romania",
    summary: "No official Poșta Română page clearly describing a poste restante service (duration, cost and address format) was found.",
    tips: [
      "The general terms (2026 revision) mention the \"Post Restant\" address with the contact point where to collect the item, the postcode, locality and county.",
      "No duration, fee or ID rule specific to this service in that document: only the general holding rule is given.",
      "Alternative documented by the UPU: the PO box.",
      "To be confirmed with Poșta Română or at a counter before sending."
    ]
  },
  "804": {
    name: "Ukraine",
    summary: "No official Ukrposhta page clearly describing a poste restante service (duration, cost and address format) was found.",
    tips: [
      "The service is called \"До запитання\". A search summary says Ukrposhta suspended acceptance of these items (early 2025, fraud risk): not verified, the official page returns a 403 error.",
      "Duration, fees and address format: not found.",
      "Alternative documented by the UPU: the PO box.",
      "To be confirmed with Ukrposhta or at a counter before sending."
    ]
  },
  "608": {
    name: "Philippines",
    summary: "No official PHLPost page clearly describing a poste restante service (duration, cost and address format) was found.",
    tips: [
      "A 2016 PHLPost annual report says the General Delivery Service is for transients without a fixed address, addressed \"c/o General Delivery Service\" followed by the name of the local post office.",
      "This is not a current service page: duration, fees and ID are not stated.",
      "Alternative documented by the UPU: the PO box.",
      "To be confirmed with PHLPost or at a counter before sending."
    ]
  }
});
