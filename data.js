// Données des pays. Pour en ajouter un : copier une fiche, changer l'id (code ISO numérique, 3 chiffres).
// reliability: "ok" = plutôt fiable · "check" = à confirmer auprès de la poste locale
window.COUNTRIES = {
  "250": {
    name: "France", flag: "🇫🇷", localName: "Poste restante", authority: "La Poste",
    address: ["[Mme Camille DUPONT]", "POSTE RESTANTE", "[Adresse complète du bureau de poste choisi]", "[CODE POSTAL VILLE]", "FRANCE"],
    duration: { value: "15 jours au bureau", days: 15 },
    cost: { label: "Payant (destinataire)", detail: "Contrat à souscrire : 37 € (15 jours à 1 mois) ou 53 € (1 à 3 mois), tarifs 2026. Puis au retrait : 1,69 € par courrier, 0,83 € par presse, 6,11 € par Colissimo." },
    idRequired: true,
    tips: [
      "Spécificité française : c'est le destinataire qui souscrit un service de transfert vers une poste restante. L'envoi direct sans contrat n'est pas décrit par La Poste.",
      "Pris en charge : courrier, recommandés, Colissimo jusqu'à 2 kg, presse. Exclus : plus de 2 kg, Chronopost, valeurs déclarées.",
      "Contrat de 3 mois maximum, à renouveler. Les courriers restent 15 jours au bureau : il faut passer régulièrement."
    ],
    reliability: "ok", source: "https://www.laposte.fr/conseils-pratiques/recevoir-ses-courriers-et-colis-dans-le-bureau-de-poste-de-son-choix"
  },
  "756": {
    name: "Suisse", flag: "🇨🇭", localName: "Poste restante · Postlagernd · Fermo posta", authority: "La Poste Suisse",
    address: ["[Camille DUPONT]", "Poste restante", "[Rue et numéro de la filiale]", "[NPA Localité]", "SUISSE"],
    duration: { value: "1 mois", days: 30 },
    cost: { label: "Gratuit", detail: "Service gratuit selon La Poste Suisse." },
    idRequired: true,
    tips: [
      "N'importe quelle filiale convient. Le format exact de chacune est donné par l'outil « Sites et heures d'ouverture » de La Poste.",
      "Les adresses « sous chiffre » ne sont pas admises.",
      "Un résumé de recherche évoquait 15 jours pour l'international : non confirmé par les pages officielles."
    ],
    reliability: "ok", source: "https://www.post.ch/fr/reception/lieux-de-reception/envoi-adresse-poste-restante"
  },
  "276": {
    name: "Allemagne", flag: "🇩🇪", localName: "Postlagernd", authority: "Deutsche Post",
    address: ["[Camille DUPONT]", "Postlagernd", "[Adresse de la filiale]", "[PLZ Ort]", "ALLEMAGNE"],
    duration: { value: "7 jours ouvrés", days: 7 },
    cost: { label: "Affranchissement normal", detail: "Pas de frais spécifiques. Ne pas confondre avec le « Lagerservice » (15,90 à 17,90 €), qui est un autre service." },
    idRequired: null,
    tips: [
      "Pour les lettres. Les colis ne sont pas mentionnés sur la page officielle.",
      "Un mot de passe (Kennwort) peut remplacer le nom pour un envoi ordinaire. Pièce d'identité : non précisée officiellement.",
      "Toutes les filiales ne proposent pas le service : filtre « Postlagernd » dans le Postfinder."
    ],
    reliability: "check", source: "https://www.deutschepost.de/de/p/postlagernd.html"
  },
  "040": {
    name: "Autriche", flag: "🇦🇹", localName: "Postlagernd", authority: "Österreichische Post",
    address: ["[Camille DUPONT (ou Kennwort)]", "POSTLAGERND", "[Rue de la filiale]", "[PLZ Ort]", "AUTRICHE"],
    duration: { value: "au moins 14 jours", days: 14 },
    cost: { label: "Payant", detail: "1,00 € net par envoi, perçu à la remise (HT, TTC non précisé)." },
    idRequired: null,
    tips: [
      "Lettres uniquement : les colis ne sont pas mentionnés.",
      "Un mot de passe peut remplacer le nom. Pièce d'identité : non précisée sur la page officielle.",
      "Durée maximale exacte non confirmée."
    ],
    reliability: "check", source: "https://www.post.at/p/a/postlagernd"
  },
  "380": {
    name: "Italie", flag: "🇮🇹", localName: "Fermo posta", authority: "Poste Italiane",
    address: ["[Camille DUPONT (n° de pièce d'identité)]", "FERMOPOSTA", "[Nom exact de l'Ufficio Postale]", "[Via…, CAP Localité]", "ITALIE"],
    duration: { value: "30 jours", days: 30 },
    cost: { label: "Payant (expéditeur)", detail: "3,00 € par envoi, payés par l'expéditeur en plus de l'affranchissement." },
    idRequired: true,
    tips: [
      "Il faut inscrire sur l'enveloppe le numéro du document d'identité du destinataire.",
      "Réservé aux majeurs. Concerne la correspondance : les colis ne sont pas mentionnés.",
      "Retrait possible sur créneau réservé en ligne ou via l'app."
    ],
    reliability: "ok", source: "https://www.poste.it/prodotti/fermoposta.html"
  },
  "724": {
    name: "Espagne", flag: "🇪🇸", localName: "Lista de Correos", authority: "Correos",
    address: ["[Camille DUPONT]", "LISTA DE CORREOS", "[CODE POSTAL] [VILLE]", "ESPAGNE"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Non confirmé", detail: "Aucune page officielle actuelle de Correos décrivant la Lista de Correos n'a été trouvée : durée et coût sont inconnus." },
    idRequired: true,
    tips: [
      "Le service existe-t-il encore sous ce nom ? Correos met aujourd'hui en avant l'Apartado de Correos (boîte postale). À confirmer au 900 400 004 ou au guichet.",
      "Piste historique : le règlement postal de 1964 prévoit la remise « en lista » pour les personnes sans résidence fixe dans la localité.",
      "Pièces acceptées au retrait d'un envoi en général : DNI, passeport, permis de conduire, carte de résident."
    ],
    reliability: "check", source: "https://www.correos.es/es/es/particulares/recibir/planifica-tus-entregas/apartado-postal"
  },
  "620": {
    name: "Portugal", flag: "🇵🇹", localName: "Posta restante", authority: "CTT",
    address: ["[NOME APELIDO]", "POSTA RESTANTE DA LOJA CTT [NOM DE LA LOJA]", "[ADRESSE DE LA LOJA]", "[CODE POSTAL] [VILLE]", "PORTUGAL"],
    duration: { value: "Fin du mois suivant (lettres) · 15 jours (colis)", days: 30 },
    cost: { label: "Payant (destinataire)", detail: "Le destinataire paie au retrait, par objet, TVA en plus : 1,46 € jusqu'à 100 g, 2,11 € jusqu'à 2 kg, 4,48 € jusqu'à 30 kg." },
    idRequired: true,
    tips: [
      "Indique « Posta Restante » suivi du nom de la loja CTT choisie, puis l'adresse de cette loja.",
      "Courrier recommandé : 6 jours ouvrés seulement après l'arrivée en loja.",
      "Un tarif CTT 2026 évoque 30 jours maximum de stockage : l'écart avec la page d'aide n'est pas tranché."
    ],
    reliability: "check", source: "https://www.ctt.pt/particulares/receber/locais-de-entrega-alternativos/lojas-ctt"
  },
  "826": {
    name: "Royaume-Uni", flag: "🇬🇧", localName: "Poste Restante", authority: "Royal Mail / Post Office",
    address: ["[Ms Camille DUPONT]", "POSTE RESTANTE", "[Nom du Post Office]", "[Adresse complète du Post Office]", "[CODE POSTAL]", "ROYAUME-UNI"],
    duration: { value: "18 jours (21 si posté de l'étranger)", days: 18 },
    cost: { label: "Gratuit", detail: "Gratuit dans les Post Offices participants." },
    idRequired: true,
    tips: [
      "Seules certaines branches proposent le service : confirme avec la branche avant d'envoyer.",
      "Utilisable 3 mois maximum dans une même ville. Mets une adresse de retour au dos.",
      "Visiteur étranger : passeport. Résident : passeport + justificatif de domicile.",
      "Le service peut être retiré en cas d'abus, parfois sans préavis."
    ],
    reliability: "ok", source: "https://www.postoffice.co.uk/poste-restante"
  },
  "056": {
    name: "Belgique", flag: "🇧🇪", localName: "Poste restante", authority: "bpost",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Nom du bureau de poste]", "[Code postal et localité]", "BELGIQUE"],
    duration: { value: "1 mois (15 jours en recommandé)", days: 30 },
    cost: { label: "Payant", detail: "Majoration équivalente à 2 timbres Prior, payée par l'expéditeur ou par le destinataire au retrait. Montant en euros à vérifier." },
    idRequired: true,
    tips: [
      "Le destinataire n'est pas prévenu de l'arrivée : c'est à l'expéditeur de l'informer.",
      "Plis judiciaires : 8 jours seulement. Courrier non retiré : renvoyé à l'expéditeur.",
      "Les colis ne sont pas mentionnés sur la page officielle, dont le contenu semble ancien."
    ],
    reliability: "check", source: "https://www.bpost.be/fr/poste-restante"
  },
  "616": {
    name: "Pologne", flag: "🇵🇱", localName: "Poste restante", authority: "Poczta Polska",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[CODE POSTAL] [NOM DU BUREAU]", "POLOGNE"],
    duration: { value: "14 jours", days: 14 },
    cost: { label: "Gratuit", detail: "Inclus dans le prix du service choisi, sans supplément." },
    idRequired: true,
    tips: [
      "Ordre officiel : nom, « poste restante », puis code postal et nom du bureau remettant l'envoi.",
      "Réservé aux personnes physiques.",
      "La durée de 14 jours n'est pas confirmée par une page officielle actuelle : à vérifier."
    ],
    reliability: "check", source: "https://www.poczta-polska.pl/paczki-i-listy/odbior/poste-restante/"
  },
  "643": {
    name: "Russie", flag: "🇷🇺", localName: "До востребования (do vostrebovaniya)", authority: "Почта России",
    address: ["[DUPONT Camille]", "До востребования", "[INDICE POSTAL À 6 CHIFFRES] [VILLE]", "RUSSIE"],
    duration: { value: "30 jours (lettres) · 15 jours (colis express)", days: 30 },
    cost: { label: "Gratuit", detail: "Réception sans frais annoncés. La prolongation de garde est payante (tarif non vérifié)." },
    idRequired: true,
    tips: [
      "Lettres judiciaires ou administratives : 7 jours seulement.",
      "L'indice postal (code à 6 chiffres) détermine le bureau de retrait.",
      "Le service en ligne de Почта России est annoncé pour la Russie uniquement ; le cas d'un envoi depuis l'étranger n'est pas confirmé.",
      "Un code SMS peut remplacer la pièce d'identité."
    ],
    reliability: "ok", source: "https://info.pochta.ru/support/post-rules/sendings-storage"
  },
  "840": {
    name: "États-Unis", flag: "🇺🇸", localName: "General Delivery", authority: "USPS",
    address: ["[Camille DUPONT]", "GENERAL DELIVERY", "[VILLE] [ÉTAT] [ZIP]-9999", "USA"],
    duration: { value: "30 jours", days: 30 },
    cost: { label: "Aucun frais annoncé", detail: "Le règlement officiel (DMM) ne mentionne aucun frais." },
    idRequired: true,
    tips: [
      "Le format « -9999 » vient de guides de voyage, pas d'un texte officiel : demande au bureau son code ZIP exact.",
      "En général un seul site par bureau multi-installations ; on ne peut utiliser qu'un seul lieu.",
      "Le postmaster peut refuser le service sans pièce d'identité adéquate ou limiter le volume."
    ],
    reliability: "ok", source: "https://pe.usps.com/text/dmm300/508.htm"
  },
  "124": {
    name: "Canada", flag: "🇨🇦", localName: "General Delivery / Poste restante", authority: "Postes Canada",
    address: ["[Camille DUPONT]", "GD [STN A]", "[VILLE] [PROVINCE] [CODE POSTAL]", "CANADA"],
    duration: { value: "jusqu'à 4 mois", days: 120 },
    cost: { label: "Gratuit", detail: "Gratuit selon Postes Canada. Frais éventuels pour les colis : non confirmé." },
    idRequired: true,
    tips: [
      "Ligne 2 : « GD » (General Delivery) suivi de la station abrégée. L'exemple « GD STN A » est à revérifier : il vient d'un guide d'adressage vu indirectement.",
      "Il faut remplir une demande de service de livraison générale au bureau choisi, dans n'importe quel bureau.",
      "Pièce officielle avec photo exigée (étrangère acceptée). Sans adresse sur la pièce, un justificatif de domicile est demandé.",
      "Écrire en majuscules, sans ponctuation, avec une espace dans le code postal."
    ],
    reliability: "check", source: "https://www.canadapost-postescanada.ca/cpc/en/support/kb/receiving/delivery-faq/receive-your-mail-while-travelling-across-canada.page"
  },
  "036": {
    name: "Australie", flag: "🇦🇺", localName: "Poste Restante", authority: "Australia Post",
    address: ["[Camille DUPONT]", "c/o POSTE RESTANTE", "[Nom du bureau de poste, ÉTAT CODE POSTAL]", "AUSTRALIE"],
    duration: { value: "30 jours", days: 30 },
    cost: { label: "Non confirmé", detail: "Aucun tarif officiel trouvé pour ce service. Le « Mail hold » (30,70 $ la première semaine) est un autre produit." },
    idRequired: true,
    tips: [
      "Nom officiel : « counter mail delivery » (aussi appelé Post Restante), pour qui n'a pas de livraison à la rue ou séjourne moins de 6 mois dans la zone.",
      "Les 30 jours sont comptés à partir de la livraison au bureau, d'après les conditions générales d'Australia Post.",
      "Le format d'adresse vient de sources secondaires, non confirmé officiellement."
    ],
    reliability: "check", source: "https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-general-terms-and-conditions.pdf"
  },
  "392": {
    name: "Japon", flag: "🇯🇵", localName: "郵便局留め (yūbinkyoku-dome)", authority: "Japan Post",
    address: ["〒[CODE POSTAL DU BUREAU]", "[ADRESSE DU BUREAU]", "[NOM DU BUREAU]郵便局留", "[Camille DUPONT] 様", "JAPON"],
    duration: { value: "10 jours", days: 10 },
    cost: { label: "Gratuit", detail: "Sans inscription ni frais de retrait." },
    idRequired: true,
    tips: [
      "Les 10 jours sont comptés à partir du lendemain de l'arrivée au bureau. La poste ne prévient pas : suis l'envoi.",
      "Mets la mention « 郵便局留 » (yūbinkyoku-dome) après le nom du bureau.",
      "Pièce prouvant nom et adresse (permis, carte My Number, passeport). Un sceau est demandé, à défaut une signature.",
      "Pour un colis (ゆうパック), ajoute le numéro de téléphone. La page ne dit pas explicitement que les colis sont acceptés : à confirmer avec le bureau."
    ],
    reliability: "ok", source: "https://www.post.japanpost.jp/service/send/domestic/option/shisho/"
  },
  "356": {
    name: "Inde", flag: "🇮🇳", localName: "Poste Restante", authority: "India Post",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Nom du bureau de poste]", "[VILLE] [CODE PIN À 6 CHIFFRES]", "INDE"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Non confirmé", detail: "Aucun tarif de poste restante trouvé." },
    idRequired: null,
    tips: [
      "Des sources secondaires indiquent jusqu'à 1 mois, mais aucune page officielle actuelle ne le confirme.",
      "Un nom complet est indispensable : les envois à un nom fictif ou sans nom de famille ne sont pas remis (Post Office Guide).",
      "« GPO » signifie General Post Office, le bureau principal de certaines grandes villes, mais toutes n'en ont pas (beaucoup ont un « Head Post Office »). Demande à la poste quel bureau tient la poste restante (connaissance générale, non confirmée officiellement). Pièce d'identité : non confirmée."
    ],
    reliability: "check", source: "https://www.indiapost.gov.in/api/documents/file/po-guide-part-i-20250816-b519a4"
  },
  "484": {
    name: "Mexique", flag: "🇲🇽", localName: "Lista de Correos", authority: "Correos de México",
    address: ["[Camille DUPONT]", "LISTA DE CORREOS", "[CODE POSTAL] [VILLE], [ÉTAT]", "MEXIQUE"],
    duration: { value: "10 jours ouvrés (international) · 15 (national)", days: 14 },
    cost: { label: "Prolongation payante", detail: "Réception : non confirmé. Prolongation de 10 jours ouvrés à la demande du destinataire, facturée par jour de stockage (montant non trouvé)." },
    idRequired: true,
    tips: [
      "Deux services : « Lista de Correos » (nom affiché au guichet) et « Poste Restante » (réservé, pseudonymes permis, rien n'est publié).",
      "Les délais courent à partir du premier avis. Pièce avec photo exigée (INE, passeport, cédula…), plus l'avis SPM 77.",
      "Un tiers peut retirer avec une procuration signée au dos de l'avis.",
      "Le format exact de l'adresse n'est pas confirmé."
    ],
    reliability: "check", source: "https://www.correosdemexico.gob.mx/DatosAbiertos/Normateca/SUS/coM/CO2.pdf"
  },
  "076": {
    name: "Brésil", flag: "🇧🇷", localName: "Posta restante", authority: "Correios",
    address: ["[Camille DUPONT]", "POSTA RESTANTE", "[Nom de l'agence des Correios]", "[CEP] [VILLE] [ÉTAT]", "BRÉSIL"],
    duration: { value: "20 jours (lettres) · 7 à 30 jours (colis)", days: 20 },
    cost: { label: "Payant", detail: "Service additionnel choisi par l'expéditeur : R$ 5,60 sur une page ancienne. Tarif actuel à vérifier." },
    idRequired: true,
    tips: [
      "Service « Posta Restante Pedida » : l'expéditeur le demande à l'envoi et indique une agence des Correios.",
      "Le nom doit être identique à la pièce d'identité, sans surnom ni abréviation. Un tiers a besoin d'une autorisation.",
      "Les durées varient selon le type d'envoi (PAC et SEDEX : 7 jours dans certains cas). Le format d'adresse n'est pas confirmé."
    ],
    reliability: "check", source: "https://www.correios.com.br/receber/prazo-de-guarda"
  },

  // ---- Pays sans page officielle trouvée : noInfo = true ----
  "032": {
    name: "Argentine", flag: "🇦🇷", authority: "Correo Argentino", noInfo: true,
    summary: "Aucune page officielle de Correo Argentino décrivant un service de poste restante n'a été trouvée (durée, coût et format d'adresse inconnus).",
    tips: [
      "Une source secondaire évoque une adresse avec la mention « Poste Restante » : non vérifié.",
      "Alternative documentée par l'UPU : la boîte postale (« Casilla de Correos »).",
      "À confirmer auprès de Correo Argentino ou en sucursal avant d'envoyer."
    ],
    source: "https://www.correoargentino.com.ar"
  },
  "152": {
    name: "Chili", flag: "🇨🇱", authority: "Correos de Chile", noInfo: true,
    summary: "Aucune page officielle de Correos de Chile décrivant ce service n'a été trouvée. Le site officiel était bloqué par un contrôle anti-bot : une page existe peut-être.",
    tips: [
      "Un guide d'expatriés (source secondaire) dit que la « Lista de Correos » est offerte dans toute sucursal : non confirmé.",
      "Alternative documentée par l'UPU : la boîte postale (« Casilla »)."
    ],
    source: "https://www.correos.cl"
  },
  "604": {
    name: "Pérou", flag: "🇵🇪", authority: "Serpost", noInfo: true,
    summary: "Aucune page officielle de Serpost décrivant ce service n'a été trouvée (le site officiel n'a pas pu être lu).",
    tips: [
      "Blogs et forums de voyageurs parlent d'une « Lista de Correos » avec le nom comme sur le passeport : non vérifié.",
      "Les durées trouvées (3 mois pour les lettres simples) viennent d'un site tiers : ne pas s'y fier."
    ],
    source: "https://www.gob.pe/serpost"
  },
  "170": {
    name: "Colombie", flag: "🇨🇴", authority: "4-72 Servicios Postales Nacionales", noInfo: true,
    summary: "Aucune page officielle de 4-72 décrivant un service de poste restante pour particuliers n'a été trouvée.",
    tips: [
      "Le terme « lista de correos » apparaît chez 4-72 comme mode de livraison dans les zones reculées, pas comme service pour voyageurs : d'après des résumés de documents officiels.",
      "Ne pas confondre avec le « Casillero Virtual » (adresse à l'étranger pour acheter hors du pays).",
      "À demander directement à 4-72."
    ],
    source: "https://www.4-72.com.co"
  },
  "764": {
    name: "Thaïlande", flag: "🇹🇭", authority: "Thailand Post", noInfo: true,
    summary: "Aucune page officielle de Thailand Post sur la durée, le coût ou la pièce d'identité n'a pu être consultée (le site bloque les accès automatiques : une page existe peut-être).",
    tips: [
      "La fiche d'adressage de l'UPU donne un exemple de format « Poste Restante / General Post Office / district, ville, code postal » : c'est un exemple, pas une règle de service.",
      "Un guide de voyage non officiel dit que la plupart des bureaux gardent le courrier des personnes sans adresse fixe : non confirmé.",
      "Wikipédia (source non officielle) indique le terme local « รอจ่าย ไปรษณีย์ » (ou « รอจ่าย ปณ. »), un nom identique à la pièce d'identité ou au passeport, et de petits frais de 1 à 2 bahts au retrait : non vérifié.",
      "Le site de Thailand Post (thailandpost.co.th) renvoie une erreur 403 aux accès automatiques : à vérifier depuis un navigateur ou au guichet."
    ],
    source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/thaEn.pdf"
  },
  "704": {
    name: "Vietnam", flag: "🇻🇳", authority: "Vietnam Post (VNPost)", noInfo: true,
    summary: "Aucune page officielle de VNPost décrivant ce service n'a été trouvée. On ne sait pas s'il est encore offert.",
    tips: [
      "La fiche d'adressage de l'UPU donne un exemple « Poste restante » avec un bureau de poste de Hanoï : un format, pas une confirmation.",
      "Hotline VNPost indiquée sur leur site : 1900 54 54 81.",
      "Alternative possible, non vérifiée : la boîte postale."
    ],
    source: "https://vietnampost.vn"
  },
  "360": {
    name: "Indonésie", flag: "🇮🇩", authority: "Pos Indonesia", noInfo: true,
    summary: "Aucune page officielle de Pos Indonesia n'a pu être consultée (le site bloque les accès automatiques).",
    tips: [
      "La fiche d'adressage de l'UPU donne un exemple « POSTE RESTANTE / MAIN POST OFFICE / ville, code postal » : un exemple de format, pas une confirmation.",
      "Alternative possible, non vérifiée : la boîte postale."
    ],
    source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/idnEn.pdf"
  },
  "524": {
    name: "Népal", flag: "🇳🇵", authority: "Nepal Post (General Post Office)", noInfo: true,
    summary: "Aucune page officielle de Nepal Post sur la poste restante n'a été trouvée. Le site officiel liste la boîte postale mais pas la poste restante.",
    tips: [
      "Une FAQ du Nepal Tourism Board de 2012 dit que Katmandou a la seule poste restante du pays : info ancienne à revérifier.",
      "Contact du bureau central (GPO) : gpo@nepalpost.gov.np."
    ],
    source: "https://gpo.gov.np"
  },
  "352": {
    name: "Islande", flag: "🇮🇸", localName: "Biðpóstur (poste restante)", authority: "Pósturinn",
    address: ["[Camille DUPONT]", "Poste restante", "[Nom du pósthús (bureau) choisi]", "[Code postal (3 chiffres) et localité]", "ISLANDE"],
    duration: { value: "60 jours (lettres) · 30 jours (recommandés)", days: 60 },
    cost: { label: "Non confirmé", detail: "Les conditions de Pósturinn renvoient à la grille tarifaire sans chiffrer ce cas précis. Un tarif de 1 200 kr./mois existe pour la réexpédition ou garde temporaire d'un courrier domestique : pas forcément le même service." },
    idRequired: null,
    tips: [
      "Les conditions officielles visent explicitement les voyageurs qui se font adresser du courrier à un bureau précis.",
      "Concerne les lettres. Un colis n'est pas traité comme du biðpóstur : le destinataire est avisé et le colis attend 30 jours au bureau.",
      "Un tiers peut retirer avec une procuration écrite (valable 1 an, mandataire d'au moins 15 ans).",
      "Aucun exemple d'adresse n'est publié : la forme ci-dessus est un modèle. À confirmer auprès de Pósturinn (posturinn@posturinn.is)."
    ],
    reliability: "check", source: "https://posturinn.is/posturinn/upplysingar/vidskiptaskilmalar/"
  },
  "554": {
    name: "Nouvelle-Zélande", flag: "🇳🇿", localName: "Poste Restante", authority: "NZ Post",
    address: ["[Camille DUPONT (Post Restante)]", "[Nom du NZ Post Shop choisi]", "[Numéro et rue du bureau]", "[Localité et code postal (4 chiffres)]", "NOUVELLE-ZÉLANDE"],
    duration: { value: "2 mois maximum", days: 60 },
    cost: { label: "Gratuit 7 jours, puis payant", detail: "Facturation par semaine après les 7 premiers jours (TVA incluse) : 11,00 NZD de 7 à 14 jours, 16,50 de 14 à 21, 22,00 de 21 à 28, puis en hausse jusqu'à 49,50 NZD de 56 à 63 jours." },
    idRequired: null,
    tips: [
      "Service pour recevoir lettres et colis (jusqu'à 30 kg) pendant un séjour en Nouvelle-Zélande depuis l'étranger. Pas d'inscription.",
      "Seuls certains bureaux le proposent : la page de NZ Post en donne la liste. Vérifie le bureau avant d'envoyer.",
      "Redirection possible d'un bureau poste restante à un autre, mais pas vers un hôtel, motel, camping ou pension.",
      "La page dit « 2 mois » mais son tableau tarifaire va jusqu'à 63 jours : incohérence à confirmer. Pièce d'identité non précisée."
    ],
    reliability: "check", source: "https://www.nzpost.co.nz/personal/receiving-mail/poste-restante"
  },
  "410": {
    name: "Corée du Sud", flag: "🇰🇷", authority: "Korea Post (우정사업본부)", noInfo: true,
    summary: "Aucune page officielle de Korea Post décrivant un service de poste restante n'a été trouvée. Les sites officiels n'ont pas pu être lus : l'absence d'information ne prouve pas que le service n'existe pas.",
    tips: [
      "Ne pas confondre avec la règle sur le courrier non remis conservé au bureau (10 jours, jusqu'à 20) : ce n'est pas un service où l'on se fait adresser du courrier.",
      "Alternative possible, non vérifiée : une boîte postale (사서함)."
    ],
    source: "https://www.epost.kr"
  },
  "156": {
    name: "Chine", flag: "🇨🇳", authority: "China Post (中国邮政)", noInfo: true,
    summary: "Aucune page officielle de China Post sur ce service n'a été trouvée (durée, coût et pièce d'identité inconnus).",
    tips: [
      "Le guide d'adressage de l'UPU donne un exemple de format : nom / nom du Post Office / Poste restante / code postal à 6 chiffres et ville / P.R. CHINA. C'est l'UPU, pas China Post.",
      "Écrire le nom du pays dans une langue internationale connue.",
      "Les durées trouvées en ligne viennent de guides historiques de Hong Kong et ne s'appliquent pas à la Chine continentale."
    ],
    source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/chnEn.pdf"
  },
  "372": {
    name: "Irlande", flag: "🇮🇪", localName: "Address Point (service Poste Restante)", authority: "An Post",
    address: ["[Camille DUPONT]", "Adresse Address Point exacte, fournie à l'inscription", "[Post Office choisi]", "[Localité / Eircode]", "IRLANDE"],
    duration: { value: "20 jours maximum", days: 20 },
    cost: { label: "Gratuit", detail: "Service gratuit selon la page Address Point. Le barème An Post de février 2026 indique « Poste Restante : jusqu'à 3 mois, gratuit » : ce n'est peut-être pas le même service." },
    idRequired: true,
    tips: [
      "Service conçu pour les personnes sans domicile fixe : on s'inscrit sur anpost.com/addresspoint, on choisit un Post Office et on reçoit l'adresse à utiliser exactement comme fournie. Le format n'est pas publié.",
      "Lettres jusqu'à A4 et 100 g. Les colis ne sont pas prévus. Retrait en personne avec pièce d'identité avec photo.",
      "Courrier non retiré : renvoyé à l'expéditeur. L'adresse ne vaut pas justificatif de domicile.",
      "Aucune page distincte « poste restante pour voyageurs » trouvée : à confirmer au guichet."
    ],
    reliability: "check", source: "https://www.anpost.com/AddressPoint"
  },
  "300": {
    name: "Grèce", flag: "🇬🇷", authority: "ELTA (Hellenic Post)", noInfo: true,
    summary: "Aucune page officielle d'ELTA décrivant un service de poste restante n'a été trouvée (durée, coût et format inconnus).",
    tips: [
      "Alternative décrite par ELTA : la boîte postale louée (Ταχυδρομική Θυρίδα, Τ.Θ.).",
      "Des fermetures de bureaux et des retards de courrier ont été signalés fin 2025 par la presse : appeler ELTA avant de s'y fier."
    ],
    source: "https://www.elta.gr/tachudromiki-thurida-tth"
  },
  "203": {
    name: "République tchèque", flag: "🇨🇿", localName: "Poste restante", authority: "Česká pošta",
    address: ["[Camille DUPONT]", "poste restante", "[Code postal du bureau choisi (ex. 397 04)]", "[NOM DU BUREAU DE POSTE]", "RÉPUBLIQUE TCHÈQUE"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Non confirmé", detail: "Un courrier officiel de 2018 dit que le service est facturé selon le tarif, sans montant. Aucun montant actuel trouvé." },
    idRequired: null,
    tips: [
      "Possible pour une personne physique (lettres et colis). Ordre officiel : nom et prénom, « poste restante », code postal du bureau, nom du bureau (conditions postales mises à jour au 1.4.2026).",
      "Le destinataire n'est pas prévenu de l'arrivée (courrier de 2018, ancien) : c'est à l'expéditeur de l'informer.",
      "Les conditions 2026 donnent 15 jours (prolongeables à 30) pour les envois avisés, mais rien ne dit que cela vaut pour la poste restante.",
      "Éviter les envois « en main propre » (do vlastních rukou) en poste restante."
    ],
    reliability: "check", source: "https://www.postaonline.cz/documents/10180/282441/zps.pdf"
  },
  "348": {
    name: "Hongrie", flag: "🇭🇺", localName: "Postán maradó (Poste restante)", authority: "Magyar Posta",
    address: ["[Camille DUPONT]", "Poste restante", "[Nom exact du bureau de poste]", "[Code postal du bureau]", "HONGRIE"],
    duration: { value: "10 jours ouvrés (national) · 15 (depuis l'étranger)", days: 15 },
    cost: { label: "Non confirmé", detail: "Les conditions générales (en vigueur au 1.11.2026) ne mentionnent aucun tarif spécifique. Les tarifs sont publiés à part et n'ont pas été lus." },
    idRequired: null,
    tips: [
      "Seuls certains bureaux sont désignés : liste dans le Postakereső sur posta.hu. L'adresse d'un tel bureau ne sert que pour du courrier poste restante.",
      "Colis nationaux : l'étiquette doit porter un numéro de mobile hongrois (SMS) ou un e-mail du destinataire.",
      "Pièce d'identité exigée pour les envois enregistrés (colis, recommandé ordinaire), mais pas vérifiée pour le courrier non enregistré ni le recommandé simple.",
      "Après la durée, l'envoi est renvoyé à l'expéditeur."
    ],
    reliability: "check", source: "https://www.posta.hu/static/internet/download/PASZF_ASZF01_ASZF.pdf"
  },
  "191": {
    name: "Croatie", flag: "🇭🇷", localName: "Poste restante", authority: "Hrvatska pošta (HP)",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Code postal et nom du bureau désigné]", "CROATIE"],
    duration: { value: "30 jours calendaires", days: 30 },
    cost: { label: "Payant (montant non confirmé)", detail: "Au retrait, le destinataire paie l'affranchissement fixé par le tarif. Des frais de garde (ležarina) s'appliquent dès l'arrivée pour certains envois. Montants actuels en euros non confirmés." },
    idRequired: true,
    tips: [
      "Seuls les bureaux désignés par HP remettent le courrier poste restante : la liste officielle est un PDF sur posta.hr.",
      "Adresse obligatoire : nom et prénom, « POSTE RESTANTE », code postal et nom du bureau. Les 30 jours courent dès l'arrivée au bureau.",
      "Pièces acceptées : carte d'identité, passeport, carte biométrique de séjour…",
      "Colis et envois express peuvent aussi être adressés ainsi (d'après la version 2019 des conditions, à relire dans la version 2024)."
    ],
    reliability: "check", source: "https://www.posta.hr/UserDocsImages/posta/Dokumenti/2023/OPCI_UVJETI/12/Opci_uvjeti_za_obavljanje_ostalih_postanskih_usluga-1-1-2024.pdf?vel=613480"
  },
  "504": {
    name: "Maroc", flag: "🇲🇦", authority: "Barid Al-Maghrib (Poste Maroc)", noInfo: true,
    summary: "Le site officiel de la poste marocaine était injoignable : aucune page officielle n'a pu être lue sur ce service.",
    tips: [
      "Un résumé de recherche de la page produit de poste.ma parle d'un service de poste restante avec inscription (2 photos et une pièce d'identité) et 15 jours de garde : non vérifié.",
      "Les normes d'adressage de Poste Maroc citent « poste restante » comme mention spéciale, avec la boîte postale : même type de source.",
      "Alternatives citées : la boîte postale et le service de réexpédition."
    ],
    source: "https://www.poste.ma"
  },
  "788": {
    name: "Tunisie", flag: "🇹🇳", localName: "Poste restante", authority: "La Poste Tunisienne",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Bureau de poste choisi]", "[CODE POSTAL VILLE]", "TUNISIE"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Payant (montant à vérifier)", detail: "La page des tarifs de poste.tn indique une « taxe de la poste restante » de 0,500 DT (régime interne) et 1,000 DT (international). Une autre version de la page affiche 1,000 et 2,000 DT. Dates et payeur non précisés." },
    idRequired: null,
    tips: [
      "La page « conseils pratiques » de poste.tn suggère de faire adresser son courrier au bureau de son choix en poste restante, et renvoie vers un bureau ou le centre d'appels 1828.",
      "Les montants viennent d'un résumé de la page tarifs, non lue directement. Bureaux concernés, colis, durée de garde : non confirmés."
    ],
    reliability: "check", source: "https://www.poste.tn/index_service.php?code_menu=10&code_sous_menu=21&code_sous_sous_menu=59"
  },
  "792": {
    name: "Turquie", flag: "🇹🇷", localName: "Postrestant", authority: "PTT",
    address: ["[Camille DUPONT]", "Postrestant", "[Nom du bureau PTT / quartier]", "[CODE POSTAL ILÇE / İL]", "TURQUIE"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Non confirmé", detail: "Aucun tarif trouvé. La réglementation évoque des frais de garde (ardiye) au-delà du délai." },
    idRequired: true,
    tips: [
      "Selon le règlement PTT de 2011 (via un résumé), l'envoi porte le nom suivi de « Postrestant » et du lieu, est remis au bureau PTT sur demande, avec pièce d'identité à la remise.",
      "Le document d'adressage de PTT autorise « Postrestant » à la ligne quartier/village.",
      "PTT n'accepte pas les envois express internationaux (Turpex) en postrestant.",
      "Durée : 30 jours selon un site d'actualités (secondaire), un tableau PTT de 2023 existe mais n'a pas pu être ouvert. À vérifier."
    ],
    reliability: "check", source: "https://postakodu.ptt.gov.tr/Dosyalar/adres.pdf"
  },
  "376": {
    name: "Israël", flag: "🇮🇱", authority: "Israel Postal Company (Israel Post)", noInfo: true,
    summary: "Aucune page officielle d'Israel Post n'a pu être lue (le site bloque les accès automatiques). L'existence actuelle du service n'est pas confirmée.",
    tips: [
      "Un guide de voyage et un guide francophone (sources secondaires) parlent d'une poste restante gratuite, avec pièce d'identité et 30 jours de garde. Un site de suivi de colis parle de 15 jours pour les colis : contradictoire.",
      "Le service pourrait être limité à certains bureaux."
    ],
    source: "https://www.israelpost.co.il"
  },
  "528": {
    name: "Pays-Bas", flag: "🇳🇱", localName: "Poste restante", authority: "PostNL",
    address: ["[NOM DE FAMILLE Prénom]", "Poste restante", "[Nom et adresse du bureau de poste choisi]", "[CODE POSTAL LOCALITÉ]", "PAYS-BAS"],
    duration: { value: "1 mois (14 à 90 jours depuis l'étranger)", days: 30 },
    cost: { label: "Non confirmé", detail: "Aucun tarif de réception ou de prolongation trouvé. Le tarif d'une boîte postale (Postbus) est un autre produit." },
    idRequired: null,
    tips: [
      "PostNL décrit le service pour qui n'a ni domicile ni résidence fixe. Les colis seraient exclus (cadre de service 2026, lu via un résumé).",
      "Page du service lue seulement via un résumé de recherche (le site expirait en lecture directe), avec des mentions qui semblent anciennes. Aucune liste de bureaux trouvée.",
      "Alternative : la Postbus, qui ne reçoit que des envois PostNL."
    ],
    reliability: "check", source: "https://www.postnl.nl/klantenservice/verzendopties/post-naar-iemand-zonder-vaste-woon-verblijfplaats/"
  },
  "752": {
    name: "Suède", flag: "🇸🇪", localName: "Poste Restante", authority: "PostNord",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Code postal et localité du point de retrait]", "SUÈDE"],
    duration: { value: "30 jours (page ancienne)", days: 30 },
    cost: { label: "Non confirmé", detail: "Aucun tarif trouvé pour la poste restante ni pour une prolongation." },
    idRequired: true,
    tips: [
      "Retrait dans un point partenaire PostNord avec pièce d'identité (résumé de la page officielle anglaise). Le format exact de l'adresse n'a pas pu être lu : les lignes ci-dessus sont génériques.",
      "La page renvoie à une liste de codes postaux où le retrait est possible.",
      "Un résumé de recherche évoque un service limité depuis avril 2026 : non confirmé.",
      "Les 30 jours viennent d'une page d'environ 6 ans. Colis : non confirmé."
    ],
    reliability: "check", source: "https://www.postnord.se/en/private/receiving/poste-restante/"
  },
  "208": {
    name: "Danemark", flag: "🇩🇰", authority: "PostNord Danmark", noInfo: true,
    summary: "Aucune info fiable trouvée. PostNord a cessé la distribution de lettres au Danemark après le 30 décembre 2025, donc un service de poste restante pour lettres est peu probable.",
    tips: [
      "Un résumé de page PostNord évoque un colis « Poste Restante » envoyé à un Parcel Shop choisi : non confirmé, durée (14 jours) non confirmée.",
      "Les pages PostNord bloquent les accès automatiques : à vérifier depuis un navigateur."
    ],
    source: "https://www.postnord.dk/en/private/receive-as-a-private-customer/flexible-delivery/"
  },
  "578": {
    name: "Norvège", flag: "🇳🇴", localName: "Poste Restante", authority: "Posten Norge",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Nom du bureau de poste ou du « Post i butikk »]", "[Code postal et localité du point]", "NORVÈGE"],
    duration: { value: "3 semaines", days: 21 },
    cost: { label: "Non confirmé", detail: "Aucune page de Posten ne mentionne de tarif pour la poste restante." },
    idRequired: null,
    tips: [
      "Réservé à qui séjourne ou est de passage en Norvège (page officielle). Envoyer à un bureau de poste ou à un « Post i butikk », avec l'adresse postale du point (recherche sur posten.no).",
      "La page des délais de retrait de Posten classe la poste restante parmi les envois à 3 semaines.",
      "Colis : non confirmé. Pièce d'identité pour ce service précis : non confirmée."
    ],
    reliability: "check", source: "https://www.posten.no/en/sending/domestic/addressing"
  },
  "246": {
    name: "Finlande", flag: "🇫🇮", localName: "Poste restante", authority: "Posti",
    address: ["[Camille DUPONT (prénom et nom officiels)]", "POSTE RESTANTE", "[CODE POSTAL VILLE]", "FINLANDE"],
    duration: { value: "14 jours", days: 14 },
    cost: { label: "Gratuit", detail: "Gratuit selon Posti. Un tarif de 3,10 € avait été envisagé en 2019 puis reporté sous la pression du régulateur." },
    idRequired: null,
    tips: [
      "L'adresse utilise le code postal et la ville, pas le nom d'un bureau (exemple officiel : « Mary Smith POSTE RESTANTE 33100 TAMPERE »). Sans prénom et nom officiels, l'envoi est renvoyé.",
      "Réservé aux particuliers. Pas de réexpédition ni de retrait dans un autre point.",
      "Toutes les agences n'offrent pas le service : recherche par code postal sur posti.fi. Un tiers peut retirer avec une procuration.",
      "Les colis ne sont pas mentionnés : à confirmer avec Posti."
    ],
    reliability: "ok", source: "https://www.posti.fi/en/receiving/mail-delivery/poste-restante"
  }
};
Object.assign(window.COUNTRIES, {
  "686": {
    name: "Sénégal", flag: "🇸🇳", authority: "La Poste (SN Poste)",
    noInfo: true,
    summary: "Aucune page officielle de La Poste du Sénégal décrivant un service de poste restante n'a été trouvée : ni la page d'accueil, ni la page « Boîte postale », ni la FAQ ne le mentionnent. Rien ne permet d'affirmer qu'il existe ou qu'il n'existe pas.",
    tips: [
      "Ce qui est confirmé (FAQ officielle, lue directement) : pour un envoi à retirer au bureau, il faut se présenter au bureau de livraison avec une pièce d'identité, dans un délai de 15 jours. La FAQ parle d'envois avec avis de passage, pas de poste restante.",
      "Même FAQ : des frais de magasinage de 100 FCFA par jour s'appliquent après 8 jours de garde. Cette règle concerne les envois en instance, pas forcément la poste restante.",
      "Usage dominant confirmé par le site officiel : la boîte postale (abonnement annuel, de 5 000 FCFA en milieu rural à 10 000 FCFA en milieu urbain pour un particulier, souscrit en bureau). La FAQ précise qu'elle n'est pas obligatoire : sans boîte postale, on indique une adresse géographique complète et un numéro de téléphone.",
      "Fiche d'adressage UPU (02/2015) : exemples d'adresses au guichet, en boîte postale (BP) et en « postchance », mais aucun exemple de poste restante. Code postal à 5 chiffres devant le nom du bureau de distribution.",
      "Piste non vérifiée : un guide pratique sur Dakar, ancien et secondaire, évoque la poste restante pour lettres et mandats au prix d'un timbre international, avec envoi par défaut à la Poste Principale si le bureau n'est pas précisé. À confirmer auprès de La Poste.",
      "Pour trancher : contacter le service client de La Poste ou un bureau de poste avant d'envoyer quoi que ce soit."
    ],
    source: "https://www.laposte.sn/faq/"
  },
  "384": {
    name: "Côte d'Ivoire", flag: "🇨🇮", authority: "La Poste de Côte d'Ivoire",
    noInfo: true,
    summary: "Aucune page officielle de La Poste de Côte d'Ivoire décrivant un service de poste restante n'a été trouvée. Le site officiel met en avant la boîte postale, et la fiche d'adressage UPU indique que la distribution se fait en boîtes postales.",
    tips: [
      "Fiche d'adressage UPU (09/2004, ancienne) : la distribution se fait en boîtes postales ; le code du bureau (deux chiffres) doit figurer dans l'adresse, par exemple « 06 B.P. 37 ABIDJAN 06 ». Des livraisons à domicile y sont décrites comme en test pour un seul immeuble.",
      "Site officiel (lu directement) : la page « Particuliers » présente la boîte postale (acquisition ou renouvellement en ligne) ; aucune mention de poste restante, de durée de conservation ou de pièce d'identité n'y figure.",
      "Piste non vérifiée : des guides de voyage de qualité inégale évoquent un usage de la poste restante au bureau central d'Abidjan, sans détail ni source officielle.",
      "Pour trancher : contacter La Poste de Côte d'Ivoire ou le bureau central avant d'envoyer du courrier."
    ],
    source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/civEn.pdf"
  },
  "204": {
    name: "Bénin", flag: "🇧🇯", localName: "Poste restante", authority: "La Poste du Bénin",
    address: ["[Mme Camille DUPONT]", "POSTE RESTANTE", "[Agence commerciale de La Poste du Bénin choisie]", "[Localité]", "BÉNIN"],
    duration: { value: "Non précisée", days: 0 },
    cost: { label: "Payant", detail: "La page officielle indique une taxe de livraison de 500 FCFA. Elle ne précise pas qui la paie ni à quel moment." },
    idRequired: null,
    tips: [
      "Page officielle « Service distribution » (lue directement, non datée, contenu possiblement ancien) : la poste restante est décrite comme du « courrier à garder à la disposition du client au guichet d'une agence commerciale », pour toutes les agences commerciales, sur demande formulée à l'adresse de l'agence.",
      "Le format exact de l'adresse n'est pas donné par cette page : les lignes ci-dessus sont génériques. Demande à l'agence choisie comment libeller l'envoi.",
      "Durée de conservation et pièce d'identité : non précisées pour la poste restante. La photocopie de pièce d'identité n'est mentionnée que pour les boîtes postales.",
      "Usage dominant : la boîte postale (adresse type « 10 BP 648 COTONOU » selon la fiche d'adressage UPU, 11/2025). La fiche UPU ne décrit pas la poste restante."
    ],
    reliability: "check", source: "https://laposte.bj/service-distribution/"
  },
  "288": {
    name: "Ghana", flag: "🇬🇭", localName: "Poste Restante", authority: "Ghana Post",
    address: ["[Mr Camille DUPONT]", "[Nom du bureau de poste]", "[Localité + code postal (ex. Accra-Central GA-183)]", "[Région (ex. GREATER ACCRA)]", "GHANA"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Non confirmé", detail: "Aucune source consultée ne donne un tarif ou une durée pour la poste restante au Ghana." },
    idRequired: null,
    tips: [
      "Fiche d'adressage UPU (03/2023) : elle donne un exemple de poste restante avec « G.P.O Post Office », « Accra-Central GA-183 », « GREATER ACCRA », « GHANA ». Le format de la ligne du nom du destinataire n'y figure pas : les lignes ci-dessus sont une adaptation.",
      "Le bureau principal (General Post Office) se trouve Asafoatse Nettey Road, Accra Central, selon la même fiche. Autres bureaux : non vérifiés.",
      "Le site officiel de Ghana Post n'a pas pu être lu en détail et aucune page sur la poste restante n'a été trouvée. Pièce d'identité, durée, coût : à confirmer auprès de Ghana Post (contact indiqué sur la fiche UPU).",
      "Le service vendu au public est surtout la boîte postale (format « P.O. Box GP 1234 » dans la fiche UPU). Ghana Post utilise aussi une adresse numérique (« digital address », ex. GA-183-8164)."
    ],
    reliability: "check", source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/ghaEn.pdf"
  },
  "566": {
    name: "Nigeria", flag: "🇳🇬", localName: "Poste restante (c/o Postmaster)", authority: "NIPOST (Nigerian Postal Service)",
    address: ["[Mr Camille DUPONT]", "c/o Postmaster", "[Nom du bureau de poste (Post Office)]", "[Localité + code postal à 6 chiffres]", "[ÉTAT (ex. OYO STATE)]", "NIGERIA"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Non confirmé", detail: "Aucune source consultée ne donne un tarif ou une durée pour la poste restante au Nigeria." },
    idRequired: null,
    tips: [
      "Fiche d'adressage UPU : exemple de poste restante avec « c/o Postmaster », « Oyo Post Office », « Oyo 211001 », « OYO STATE », « NIGERIA ». La fiche est publiée par l'UPU, elle ne décrit ni durée ni coût.",
      "Pièce d'identité : un document lié à NIPOST et un forum (secondaires, anciens, lus via un résumé de recherche) disent que le destinataire doit prouver son identité, et que l'envoi doit porter la mention « poste restante ». Non confirmé par une page officielle NIPOST.",
      "Le site officiel de NIPOST (lu directement) ne mentionne pas la poste restante, ni dans la FAQ, ni dans les pages Mails et Counters. Sa FAQ demande une pièce d'identité valide et le numéro de suivi à 9 chiffres pour retirer un colis.",
      "Le service courant est la boîte postale ou le sac postal (P.O. Box / PMB, demande en ligne). Disponibilité de la poste restante par bureau : à confirmer auprès du bureau choisi."
    ],
    reliability: "check", source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/ngaEn.pdf"
  }
});
// Afrique centrale, de l'Ouest et océan Indien : fiches approfondies (Cameroun, Madagascar, Maurice, Burkina Faso, Mali).
Object.assign(window.COUNTRIES, {
  "120": {
    name: "Cameroun", flag: "🇨🇲", authority: "CAMPOST (Cameroon Postal Services)", noInfo: true,
    summary: "Aucune page officielle de CAMPOST décrivant un service de poste restante n'a été trouvée (durée, coût, pièce d'identité et format d'adresse inconnus). Le site officiel présente la boîte postale comme produit traditionnel.",
    tips: [
      "Page officielle lue directement : CAMPOST décrit la boîte postale comme le produit qui donne une adresse légale au client. Pour l'ouvrir, une pièce d'identité (copie de CNI, passeport ou carte de résident) est demandée. Aucun tarif ni durée n'est indiqué, et la poste restante n'y est pas mentionnée.",
      "Selon la presse locale (Cameroon Tribune), CAMPOST a le monopole des boîtes postales : c'est l'usage dominant pour recevoir du courrier au Cameroun.",
      "Source secondaire ancienne, non vérifiée : des témoignages sur un forum d'expatriés à Yaoundé évoquent un colis retiré en « poste restante » au guichet d'un bureau, sans conditions officielles.",
      "La fiche d'adressage de l'UPU (07/2002) ne donne qu'un exemple de boîte postale (« BP … / YAOUNDE / CAMEROON »).",
      "À confirmer auprès de CAMPOST ou au guichet avant d'envoyer."
    ],
    source: "https://campost.cm/?page_id=428"
  },
  "450": {
    name: "Madagascar", flag: "🇲🇬", authority: "Paositra Malagasy", noInfo: true,
    summary: "Aucune page officielle de Paositra Malagasy décrivant un service de poste restante n'a pu être lue (durée, coût, pièce d'identité et format exact inconnus). Le site officiel n'a pas pu être consulté.",
    tips: [
      "Source secondaire, non datée et non vérifiée : un guide de voyage indique de faire écrire son nom en majuscules suivi de « c/o Poste Restante » et de la ville de retrait, de prévenir le receveur des postes et d'avoir une pièce d'identité sur soi.",
      "La fiche d'adressage de l'UPU (08/2011) ne donne que des exemples de livraison à domicile et de boîte postale (« B.P. … »), avec un code postal de 3 chiffres avant la ville.",
      "Des perturbations du service postal ont été signalées en 2025 dans un avis du réseau UPU : vérifier l'état actuel du service.",
      "À confirmer auprès de Paositra Malagasy ou au guichet avant d'envoyer."
    ],
    source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/mdgEn.pdf"
  },
  "480": {
    name: "Maurice", flag: "🇲🇺", localName: "Poste restante", authority: "The Mauritius Post Ltd",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Bureau de poste choisi]", "[LOCALITÉ CODE POSTAL]", "MAURITIUS"],
    duration: { value: "2 mois (international)", days: 60 },
    cost: { label: "Non confirmé", detail: "Aucun tarif n'est indiqué sur la page officielle consultée." },
    idRequired: null,
    tips: [
      "Page officielle lue directement : « Poste Restante » garde le courrier au bureau de poste jusqu'à ce que le destinataire le retire. Le courrier intérieur non réclamé depuis plus d'un mois est traité selon la réglementation ; le courrier international non réclamé depuis plus de deux mois est renvoyé à l'expéditeur.",
      "Les lignes de l'adresse ne sont pas détaillées par la page officielle. Le code postal à 5 chiffres suit le nom de la localité, d'après la fiche d'adressage de l'UPU (01/2026), qui ne donne pas d'exemple de poste restante.",
      "Colis, pièce d'identité, bureaux concernés et inscription préalable : non précisés. À confirmer auprès de Mauritius Post."
    ],
    reliability: "check", source: "https://www.mauritiuspost.mu/?p=8474"
  },
  "854": {
    name: "Burkina Faso", flag: "🇧🇫", localName: "Poste restante", authority: "La Poste Burkina Faso (ex-SONAPOST)",
    address: ["[Camille DUPONT]", "Poste restante", "[CODE POSTAL LOCALITÉ]", "BURKINA FASO"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Non confirmé", detail: "Aucun tarif de poste restante n'a été trouvé. Pour comparaison, la boîte postale est payante : 17 000 F CFA TTC d'abonnement puis 11 800 F CFA TTC par an pour un particulier (page officielle)." },
    idRequired: null,
    tips: [
      "Officielle (fiche d'adressage UPU, 12/2021) : exemple de poste restante en trois lignes, nom du destinataire, « Poste restante », puis code postal à 5 chiffres et localité (exemple : 70000 TENKODOGO), sans nom de bureau.",
      "Le site officiel laposte.bf met en avant la boîte postale (abonnement en ligne, pièce d'identité valide demandée) et ne mentionne pas la poste restante : durée, coût et pièce d'identité au retrait ne sont pas confirmés.",
      "Le service est décrit par l'UPU comme existant, mais on ne sait pas quels bureaux le proposent : à confirmer auprès de La Poste Burkina Faso (agences listées sur laposte.bf)."
    ],
    reliability: "check", source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/bfaEn.pdf"
  },
  "466": {
    name: "Mali", flag: "🇲🇱", authority: "La Poste du Mali (Office national des postes)", noInfo: true,
    summary: "Aucune source officielle ou fiable décrivant un service de poste restante au Mali n'a été trouvée (durée, coût, pièce d'identité et format d'adresse inconnus).",
    tips: [
      "La fiche d'adressage de l'UPU (07/2002, ancienne) ne donne que des exemples de livraison à domicile (Bamako et autres localités), sans poste restante ni code postal.",
      "Un site de suivi de colis (source secondaire) indique que le Mali n'a pas de système de codes postaux national.",
      "Piste non vérifiée : la boîte postale semble être l'usage courant pour les organisations (adresses « BP » à Bamako).",
      "À confirmer auprès de La Poste du Mali avant d'envoyer."
    ],
    source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/mliEn.pdf"
  }
});
// Afrique du Nord : Algérie, Égypte, Maroc, Tunisie.
Object.assign(window.COUNTRIES, {
  "012": {
    name: "Algérie", flag: "🇩🇿", localName: "Poste restante", authority: "Algérie Poste",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Bureau de poste choisi]", "[CODE POSTAL LOCALITÉ]", "ALGÉRIE"],
    duration: { value: "1 mois (FAQ du ministère) · 15 jours (page Algérie Poste, résumé)", days: 15 },
    cost: { label: "Payant (montant à vérifier)", detail: "FAQ du ministère de la Poste (archivée janvier 2025) : surtaxe fixe de 55 DZD par objet et de 30 DZD par journal ou périodique, sauf sur présentation d'une carte d'abonnement (2 000 DZD par an). Qui paie et à quelle date : non précisé ; tarifs possiblement dépassés." },
    idRequired: null,
    tips: [
      "Deux sources officielles divergent sur la durée. La FAQ du ministère indique 1 mois (un objet reçu le 2 juillet est gardé jusqu'au 31 juillet inclus). Un résumé de la page « Services postaux » de poste.dz, non lue directement car le site refuse l'accès automatisé, évoque 15 jours.",
      "D'après la FAQ du ministère, le courrier peut être adressé « Poste Restante » depuis n'importe quel bureau, pour retrait en personne au guichet.",
      "Carte d'abonnement : délivrée par tous les bureaux sur demande, valable 1 an. Dossier : formulaire de demande, copie de la carte d'identité en cours de validité, 2 photos d'identité. Pour un abonné étranger ou un simple retrait sans carte, la pièce exigée n'est pas confirmée.",
      "Un résumé de la page poste.dz « Poste restante » (non lue directement) indique une remise au seul destinataire ou à son mandataire, sur présentation d'une pièce d'identité.",
      "Une publication d'Algérie Poste relayée par la presse parle de 3 mois de conservation du courrier au maximum : le cadre n'est pas précisé. Les 3 mois de la FAQ concernent la réexpédition vers une poste restante, pas la garde au bureau. Colis : non mentionnés."
    ],
    reliability: "check", source: "https://www.mpt.gov.dz/faq-postal-services/"
  },
  "818": {
    name: "Égypte", flag: "🇪🇬", authority: "Egypt Post (البريد المصري)", noInfo: true,
    summary: "Aucune page officielle décrivant un service de poste restante n'a pu être lue : le site d'Egypt Post refuse l'accès automatisé, y compris via l'archive, et aucune source exploitable n'a été trouvée sur ce service.",
    tips: [
      "La fiche d'adressage de l'UPU (juillet 2023) décrit la livraison à domicile et la boîte postale (numéro de boîte, nom du bureau, localité, province) mais aucun format de poste restante. Cela ne prouve pas que le service n'existe pas.",
      "Piste non vérifiée : demander au guichet d'un bureau principal (la fiche UPU cite le bureau principal du Caire, Attaba, dans son exemple de boîte postale) si le courrier peut être gardé pour retrait, pour quelle durée et avec quelle pièce d'identité.",
      "Piste non vérifiée : la boîte postale, seule formule de retrait au bureau documentée par l'UPU."
    ],
    source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/egyEn.pdf"
  },
  "504": {
    name: "Maroc", flag: "🇲🇦", localName: "Poste restante", authority: "Barid Al-Maghrib (Poste Maroc)",
    address: ["[MME CAMILLE DUPONT]", "POSTE RESTANTE", "[AGENCE choisie]", "[CODE POSTAL LOCALITÉ]", "MAROC"],
    duration: { value: "15 jours (résumé de la page poste.ma)", days: 15 },
    cost: { label: "Non confirmé", detail: "Aucun montant lu. Le résumé de la page poste.ma décrit le prix comme « raisonnable et accessible », sans chiffre." },
    idRequired: null,
    tips: [
      "Format d'adresse : fiche d'adressage de l'UPU (2014), qui donne en exemple « GENERAL DELIVERY » (mention anglaise de l'UPU), le nom de l'agence Poste Maroc, puis le code postal à 5 chiffres devant la localité. Règles : majuscules, sans ponctuation, 38 caractères par ligne au maximum.",
      "Un résumé de la page poste.ma (non lue directement, le site est injoignable) indique une inscription avec 2 photos récentes et une pièce d'identité valide, et un courrier tenu à disposition 15 jours consécutifs.",
      "Le même résumé parle d'une agence d'Al Barid Bank, alors que la fiche UPU parle d'une agence Poste Maroc : le type de bureau concerné n'est pas tranché.",
      "Colis : non mentionnés. Aucune page archivée n'a pu être lue."
    ],
    reliability: "check", source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/marEn.pdf"
  },
  "788": {
    name: "Tunisie", flag: "🇹🇳", localName: "Poste restante", authority: "La Poste Tunisienne",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Bureau de poste choisi]", "[CODE POSTAL LOCALITÉ]", "TUNISIE"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Payant (payeur à vérifier)", detail: "Page des tarifs de poste.tn (captures archivées de janvier 2025 et mai 2026, identiques) : « Taxe de la Poste Restante » de 1,000 DT (régime interne) et 2,000 DT (régime international). Payeur et mode de calcul : non précisés. Une version plus ancienne affichait 0,500 et 1,000 DT." },
    idRequired: null,
    tips: [
      "La page « conseils pratiques » de poste.tn (capture archivée de mars 2026) suggère de faire adresser son courrier au bureau de son choix avec la poste restante, et renvoie vers un bureau ou le centre d'appels 1828.",
      "Code de la poste (loi n° 98-38 du 2 juin 1998, Journal officiel) : les envois poste restante sont ceux dont la livraison s'effectue obligatoirement dans un bureau de poste désigné. Un envoi destiné à un mineur ne lui est remis qu'avec l'autorisation de ses tuteurs, sinon il est renvoyé à l'expéditeur.",
      "Le même code impose de conserver 1 an au maximum les envois ni livrés ni retournés : ce n'est pas la durée de garde au bureau, qui n'est pas précisée.",
      "Adresse : la fiche UPU (2014) décrit un code postal à 4 chiffres devant le nom du bureau ou de la localité, sans exemple de poste restante. Bureaux concernés, colis, pièce d'identité : non confirmés."
    ],
    reliability: "check", source: "https://www.poste.tn/nos_tarifs.php?code=3"
  }
});
Object.assign(window.COUNTRIES, {
  "710": {
    name: "Afrique du Sud", flag: "🇿🇦", localName: "Poste restante", authority: "South African Post Office (SAPO)",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[NOM DU BUREAU DE POSTE]", "[Code postal (4 chiffres)]", "AFRIQUE DU SUD"],
    duration: { value: "2 mois au maximum (service temporaire)", days: 60 },
    cost: { label: "Gratuit", detail: "Le tarif 2026/2027 de la SAPO indique que la poste restante (temporaire, deux mois au plus) reste gratuite, et qu'un numéro de poste restante peut toujours être obtenu gratuitement." },
    idRequired: null,
    tips: [
      "Seule source officielle trouvée : le tarif postal 2026/2027 de la SAPO (PDF), qui ne détaille ni l'adresse à écrire, ni la pièce d'identité, ni les colis. Les lignes de l'adresse ci-dessus suivent la règle d'adressage UPU (nom du bureau, puis code postal) : le placement exact du « numéro de poste restante » n'est pas précisé.",
      "Il n'est pas clair si les « deux mois » désignent la durée d'utilisation du service ou la durée de garde de chaque courrier : à confirmer au guichet du bureau choisi.",
      "En Afrique du Sud, l'usage dominant reste la boîte postale (R695 par an) ou le Private Bag (R2 760 par an, surtout pour les organisations), selon le même tarif 2026.",
      "Choisis un bureau précis et demande-lui s'il propose le service avant d'envoyer quoi que ce soit."
    ],
    reliability: "check", source: "https://www.postoffice.co.za/Questions/Postalrates.pdf"
  },
  "404": {
    name: "Kenya", flag: "🇰🇪", authority: "Postal Corporation of Kenya (Posta Kenya)",
    noInfo: true,
    summary: "Aucune page officielle de Posta Kenya décrivant un service de poste restante n'a été trouvée : durée, coût et format d'adresse ne sont pas documentés. Le site officiel met en avant la boîte postale et le Private Bag.",
    tips: [
      "Le site officiel (page Mail Services) décrit les boîtes postales privées et le Private Bag (réservé surtout aux organisations qui reçoivent beaucoup de courrier). Boîte individuelle : Ksh 2 200, plus Ksh 1 000 de caution pour les clés et Ksh 50 de frais e-Citizen.",
      "La charte de service de Posta Kenya demande une copie de la carte d'identité pour louer une boîte individuelle. Rien n'est dit pour la poste restante.",
      "La fiche d'adressage UPU du Kenya (09/2004) ne montre qu'un exemple en « P O Box ». Piste non vérifiée : demander directement à un bureau Posta si le courrier peut être gardé au guichet.",
      "Les colis internationaux ne sont pas décrits non plus : ne compte pas sur ce service sans confirmation écrite."
    ],
    source: "https://posta.co.ke/services/services/"
  },
  "834": {
    name: "Tanzanie", flag: "🇹🇿", localName: "Poste Restante", authority: "Tanzania Posts Corporation (TPC)",
    address: ["[Ms Camille DUPONT]", "Poste Restante", "[Code postal (5 chiffres) NOM DU BUREAU]", "[Région]", "TANZANIE"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Non confirmé", detail: "Aucune page officielle de la TPC décrivant la poste restante, sa durée ou son coût n'a été trouvée." },
    idRequired: null,
    tips: [
      "Le format vient de la fiche d'adressage UPU de la Tanzanie (06/2013), qui donne un exemple « Poste restante » : nom, Poste Restante, code postal + bureau de poste, région, TANZANIA. Source officielle, mais ancienne.",
      "Le site de la TPC (posta.co.tz) ne mentionne pas ce service dans les pages consultées (FAQ, tarifs, services). Le service est-il toujours proposé ? À confirmer auprès du bureau choisi.",
      "Le code postal à 5 chiffres dépend du bureau : exemple UPU, 47200 KIGOMA. Demande-le au bureau retenu.",
      "L'usage courant reste la boîte postale (P.O. Box) : la TPC propose aussi une demande en ligne de boîte postale."
    ],
    reliability: "check", source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/tzaEn.pdf"
  },
  "231": {
    name: "Éthiopie", flag: "🇪🇹", authority: "Ethiopian Postal Service (Ethiopost)",
    noInfo: true,
    summary: "Aucune page officielle d'Ethiopost ne décrit un service de poste restante. Le site officiel décrit le retrait des envois au bureau de poste, la boîte postale (désormais virtuelle) et les colis.",
    tips: [
      "Retrait d'un colis au bureau (page officielle Parcel) : pièce d'identité officielle ou d'entreprise avec une copie, et numéro de suivi. Frais de traitement de 50 ETB (moins de 10 kg) ou 100 ETB (plus de 10 kg), plus 20 ETB de frais de facilitation. À retirer dans les 10 jours, ensuite 0,75 ETB de stockage par jour. Ce n'est pas de la poste restante : cela suppose un envoi déjà enregistré.",
      "Page officielle « Post Box Service » : abonnement annuel à une boîte postale virtuelle, de 750 ETB (individuel, hors 15 % de TVA) à 50 000 ETB (entreprise).",
      "La fiche d'adressage UPU de l'Éthiopie (07/2002) ne donne que des exemples de livraison à domicile et en P.O. Box. Piste non vérifiée : demander à un bureau Ethiopost si le courrier peut être gardé au guichet."
    ],
    source: "https://ethio.post/send-and-receive/receive/"
  },
  "516": {
    name: "Namibie", flag: "🇳🇦", localName: "Poste Restante", authority: "Namibia Post Limited (NamPost)",
    address: ["[Ms Camille DUPONT]", "Poste Restante", "[NOM DU BUREAU DE POSTE]", "[Code postal (5 chiffres)]", "NAMIBIE"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Non confirmé", detail: "Le tarif postal 2025/2026 publié au Government Gazette (n° 8740, 15 septembre 2025) ne contient aucune ligne « poste restante ». Cela ne prouve pas que le service soit gratuit." },
    idRequired: null,
    tips: [
      "Le format vient de la fiche d'adressage UPU de la Namibie (créée en juin 2020), qui donne un exemple « Poste restante / PO Counter delivery » : nom, Poste Restante, nom du bureau, code postal, NAMIBIA.",
      "Même tarif officiel : stockage des colis à N$7,70 par jour après 14 jours suivant la notification. Les colis arrivés au centre de courrier international peuvent être transférés pour retrait au bureau de son choix (frais de conveyance indiqués « - »).",
      "Boîtes postales de N$450 à 835,50 par an selon la taille et le lieu, et Private Bags de N$484,50 à 1 608 par an selon la catégorie : c'est l'usage dominant. Le service poste restante reste à confirmer auprès d'un bureau NamPost.",
      "Le site nampost.com.na était inaccessible au moment de la recherche : aucune page officielle de description du service n'a pu être lue."
    ],
    reliability: "check", source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/namEn.pdf"
  }
});
Object.assign(window.COUNTRIES, {
  "788": {
    name: "Tunisie", flag: "🇹🇳", localName: "Poste restante", authority: "La Poste Tunisienne",
    address: ["[Camille DUPONT]", "POSTE RESTANTE", "[Bureau de poste choisi]", "[CODE POSTAL LOCALITÉ]", "TUNISIE"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Payant (payeur à vérifier)", detail: "Page des tarifs de poste.tn (capture archivée du 19 janvier 2026, relue directement dans l'archive) : « Taxe de la Poste Restante » de 1,000 DT (régime interne) et 2,000 DT (régime international), listée parmi les « Tarifs des services supplémentaires » des lettres, avec la recommandation et l'accusé de réception. Payeur (expéditeur ou destinataire) et mode de calcul : non précisés. Une version plus ancienne affichait 0,500 et 1,000 DT." },
    idRequired: null,
    tips: [
      "La page « conseils pratiques » de poste.tn (capture archivée du 11 mars 2026) suggère de faire adresser son courrier au bureau de son choix avec la poste restante, et renvoie vers un bureau ou le centre d'appels 1828.",
      "Code de la poste (loi n° 98-38 du 2 juin 1998, Journal officiel, texte lu en PDF) : les envois poste restante sont ceux dont la livraison s'effectue obligatoirement dans un bureau de poste désigné (article 2). Un envoi poste restante destiné à un mineur ne lui est remis qu'avec l'autorisation de ses tuteurs, sinon il est renvoyé à l'expéditeur (article 13).",
      "L'article 14 du même code impose de conserver 1 an au maximum, à compter du dépôt, les envois ni livrés ni retournés : ce n'est pas la durée de garde au bureau, qui n'est pas précisée. Aucun arrêté ni condition générale de vente fixant cette durée n'a été trouvé.",
      "Adresse : la fiche UPU (avril 2014) décrit un code postal à 4 chiffres devant le nom du bureau ou de la localité (ex. « 1002 TUNIS BELVEDERE »), sans exemple de poste restante : les lignes ci-dessus sont une adaptation. Bureaux concernés, colis, pièce d'identité : non confirmés.",
      "Pour le détail (durée de garde, pièce à présenter, qui paie la taxe), il faut interroger le bureau choisi ou le 1828 : aucune page officielle consultée ne le dit."
    ],
    reliability: "check", source: "https://www.poste.tn/nos_tarifs.php?code=3"
  }
});
Object.assign(window.COUNTRIES, {
  "508": {
    name: "Mozambique", flag: "🇲🇿", authority: "CORRE – Correio Expresso de Moçambique (opérateur postal universel désigné)",
    noInfo: true,
    summary: "Aucune source officielle ne décrit un service de poste restante (« posta restante ») au Mozambique. L'entreprise publique Correios de Moçambique a été éteinte en 2021 ; le régulateur INCM a délivré en octobre 2024 la licence d'opérateur postal universel à CORRE, dont le site ne parle ni de poste restante, ni de format d'adresse, ni de durée de garde.",
    tips: [
      "Page officielle de l'INCM (14 octobre 2024) : la licence d'opérateur postal universel est remise à CORRE pour combler « le vide légal résultant de l'extinction, en 2021, de l'entreprise publique Correios de Moçambique ». Ce texte concerne l'entreprise, il ne dit rien de la poste restante.",
      "Presse (Diário Económico, 30 mai 2025) : la commission de liquidation annonce la fermeture définitive des installations des Correios de Moçambique à partir du 1er juin 2025 et le transfert de toutes les activités à CORRE. Source secondaire.",
      "Site officiel de CORRE (corremz.com) : il cite les « caixas de apartado » (boîtes postales) parmi les services du service postal universel, mais n'explique ni comment adresser un courrier, ni durée de conservation, ni tarifs de garde, ni poste restante.",
      "La fiche d'adressage UPU du Mozambique (03/2005, donc ancienne et au nom de l'ancienne entreprise nationale) ne donne que des exemples de livraison à domicile et en P.O. Box (code postal à 4 chiffres devant la localité), sans exemple de poste restante.",
      "Piste non vérifiée : demander directement à CORRE si un de ses points d'accès peut garder le courrier au guichet, avant de faire envoyer quoi que ce soit."
    ],
    source: "https://www.incm.gov.mz/2024/10/14/incm-entrega-licenca-ao-operador-postal-universal/"
  },
  "894": {
    name: "Zambie", flag: "🇿🇲", localName: "Post Restante", authority: "Zambia Postal Services Corporation (Zampost)",
    address: ["[Ms Camille DUPONT]", "[Post Restante]", "[NOM DU BUREAU DE POSTE Code postal (5 chiffres)]", "ZAMBIE"],
    duration: { value: "Non confirmé", days: 0 },
    cost: { label: "Non confirmé", detail: "Aucune page officielle de Zampost décrivant la poste restante, sa durée ou son coût n'a été trouvée." },
    idRequired: null,
    tips: [
      "Le format vient de la fiche d'adressage UPU de la Zambie (01/2013), qui donne un exemple « Poste restante » : nom, Post Restante, bureau de poste + code postal, ZAMBIA (exemple : LIVINGSTONE 23345). Source officielle, mais ancienne. La même fiche précise que les codes postaux n'étaient pas encore attribués : demande le code au bureau choisi.",
      "Le site officiel de Zampost (pages consultées : accueil, boîtes postales) ne mentionne pas la poste restante. Le service est-il toujours proposé, pour combien de temps, avec quelles pièces d'identité ? À confirmer auprès du bureau choisi.",
      "L'usage courant reste la boîte postale : page officielle « PO Box Services » (140 bureaux et plus), location annuelle payable d'avance : 600 par an (particulier), 1 500 (PME), 2 500 (association), 7 000 (administration et grandes entreprises). Pièce demandée pour ouvrir une boîte : NRC, passeport ou permis de conduire. Ce n'est pas de la poste restante.",
      "La fiche UPU cite aussi le Private Bag (exemple « Private Bag E 345 ») et des agences postales privées, mais ce sont d'autres modes de livraison."
    ],
    reliability: "check", source: "https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/zmbEn.pdf"
  },
  "800": {
    name: "Ouganda", flag: "🇺🇬", authority: "Uganda Post Limited (Posta Uganda)",
    noInfo: true,
    summary: "Aucune page officielle de Posta Uganda ne décrit un service de poste restante : durée, coût et format d'adresse ne sont pas documentés. Le site met en avant les boîtes postales (« Physical Address »), les adresses électroniques et le Private Bag.",
    tips: [
      "La fiche d'adressage UPU de l'Ouganda (mise à jour 01/2026) ne donne que des exemples en ville, en zone rurale, en organisation et en P.O. Box, aucun exemple de poste restante.",
      "Page officielle « Physical Address » : boîte fermée à clé dans un bureau de poste, location annuelle de 30 000 à 120 000 UGX selon le bureau, plus 10 000 UGX de carte d'autorisation et 15 000 UGX pour la clé du cadenas. Particulier : copie de la carte d'identité et photo d'identité.",
      "Page officielle « Virtual Box » : adresse numérique à 20 000 UGX pour un particulier, quel que soit le bureau. Le format d'adresse n'est pas précisé.",
      "Page officielle « Private Bags » : réservé aux clients déjà prépayés ou sous contrat, à partir de 3 000 000 UGX, facturation mensuelle (la page parle aussi de « frais annuels » : incohérence à clarifier avec Posta Uganda).",
      "Page officielle « Enquiry Fees » : 10 000 UGX pour une demande de renseignement sur une adresse postale. Rien sur le courrier non réclamé.",
      "Piste non vérifiée : demander directement à un bureau Posta Uganda si le courrier peut être gardé au guichet, avant de faire envoyer quoi que ce soit."
    ],
    source: "https://ugapost.co.ug/our-services/physical-address/"
  },
  "646": {
    name: "Rwanda", flag: "🇷🇼", authority: "National Post Office of Rwanda (iPosita, ex-Rwanda Post)",
    noInfo: true,
    summary: "Aucune source officielle ne décrit un service de poste restante au Rwanda. Le site de l'iPosita présente la location de boîtes postales et, depuis 2024, la boîte postale électronique (ePoBox) ; la fiche d'adressage UPU ne donne qu'un exemple en B.P.",
    tips: [
      "Page officielle « PO Box Rentals » de l'iPosita (non datée) : boîte nominative, l'iPosita s'engage à recevoir, conserver et mettre le courrier à la disposition de l'abonné. Location annuelle : 15 000 RWF (particulier) et 30 000 RWF (entreprise).",
      "ePoBox : page d'aide officielle du portail Irembo (modifiée le 8 décembre 2025) : demande en ligne avec compte Irembo, numéro de téléphone, identifiant national (particulier) ou TIN (entreprise), choix du bureau de poste ; 8 000 RWF (particulier) ou 15 000 RWF (entreprise) ; délai de traitement d'un jour ouvrable. Le format d'adresse n'y est pas précisé.",
      "La fiche d'adressage UPU du Rwanda (03/2005, ancienne) ne montre qu'un exemple « B.P. » (boîte postale), sans poste restante.",
      "Les noms de l'opérateur varient selon les sources (National Post Office, iPosita, Rwanda Post) : il s'agit du même office national.",
      "Piste non vérifiée : demander directement à un bureau de l'iPosita si le courrier peut être gardé au guichet. Un guide de l'Australia Post (source secondaire) indique que son service International Express ne livre pas en poste restante vers le Rwanda."
    ],
    source: "https://i-posita.rw/pobox/"
  },
  "070": {
    name: "Bosnie-Herzégovine", flag: "🇧🇦", localName: "POSTE RESTANTE", authority: "BH Pošta",
    address: [
      "[Prénom NOM]",
      "POSTE RESTANTE",
      "[Code postal et nom du bureau de poste]",
      "BOSNIE-HERZÉGOVINE"
    ],
    duration: { value: "30 jours", days: 30 },
    cost: { label: "Payant (non précisé)", detail: "La poste indique « la poste prescrite » à payer à la remise, sans montant sur ces pages." },
    idRequired: null,
    tips: [
      "Le courrier est gardé 30 jours à partir de son arrivée au bureau de destination.",
      "Format officiel : nom et prénom, mention « POSTE RESTANTE », code postal et nom du bureau.",
      "Les envois express ne peuvent pas être adressés en poste restante. Pièce d'identité : non précisée."
    ],
    reliability: "check", source: "https://www.posta.ba/pravilno-adresiranje/"
  },
  "100": {
    name: "Bulgarie", flag: "🇧🇬", localName: "До поискване · Poste restante", authority: "Bulgarian Posts (Български пощи)",
    address: [
      "[Prénom NOM]",
      "До поискване",
      "[Nom du bureau de poste]",
      "BULGARIE"
    ],
    duration: { value: "20 jours", days: 20 },
    cost: { label: "Non confirmé", detail: "Les conditions générales ne mentionnent aucun tarif propre à ce service." },
    idRequired: true,
    tips: [
      "Les conditions générales (2023) fixent 20 jours calendaires à partir de l'arrivée, avant retour à l'expéditeur. Les clauses lues concernent le courrier intérieur.",
      "Le destinataire justifie son identité avec une pièce d'identité.",
      "Aucune clause trouvée pour le courrier international entrant : à confirmer."
    ],
    reliability: "check", source: "https://www.bgpost.bg/cms/static/ОУ_2023.pdf"
  },
  "116": {
    name: "Cambodge", flag: "🇰🇭", authority: "Cambodia Post", noInfo: true,
    summary: "Aucune page officielle de Cambodia Post décrivant clairement un service de poste restante (durée, coût et format d'adresse) n'a été trouvée.",
    tips: [
      "Mention « POSTE RESTANTE », avec le nom et un numéro de téléphone : recommandation d'une source secondaire, non vérifiée.",
      "Le site officiel n'a pu être ouvert (certificat expiré) : la seule page liée trouvée concerne les boîtes postales.",
      "Alternative documentée par l'UPU : la boîte postale.",
      "À confirmer auprès de Cambodia Post ou au guichet avant d'envoyer."
    ],
    source: "https://cambodiapost.post"
  },
  "292": {
    name: "Gibraltar", flag: "🇬🇮", authority: "Royal Gibraltar Post Office", noInfo: true,
    summary: "Aucune page officielle de Royal Gibraltar Post Office décrivant clairement un service de poste restante (durée, coût et format d'adresse) n'a été trouvée.",
    tips: [
      "Le site du gouvernement cite des « post restante facilities » et des boîtes postales à louer, sans durée, coût ni format d'adresse.",
      "Pièce d'identité exigée au retrait selon une source secondaire : non vérifié.",
      "Contact de la poste : cco@post.gi, 104 Main Street.",
      "Alternative documentée par l'UPU : la boîte postale.",
      "À confirmer auprès de Royal Gibraltar Post Office ou au guichet avant d'envoyer."
    ],
    source: "https://www.gibraltar.gov.gi/public-services/post-office"
  },
  "344": {
    name: "Hong Kong", flag: "🇭🇰", authority: "Hongkong Post", noInfo: true,
    summary: "Aucune page officielle de Hongkong Post décrivant clairement un service de poste restante (durée, coût et format d'adresse) n'a été trouvée.",
    tips: [
      "Le guide officiel des bureaux de poste contient une section Poste Restante, mais n'a pas pu être ouvert : rien n'est vérifié.",
      "Mentions « Poste Restante » ou « 存局待領 », nom réel complet exigé : source secondaire, non vérifié.",
      "Selon des extraits non vérifiés, le service serait limité à quelques bureaux dont le General Post Office.",
      "Alternative documentée par l'UPU : la boîte postale.",
      "À confirmer auprès de Hongkong Post ou au guichet avant d'envoyer."
    ],
    source: "https://www.hongkongpost.hk/filemanager/common/poguide/en/po_guide.pdf"
  },
  "440": {
    name: "Lituanie", flag: "🇱🇹", authority: "Lietuvos paštas", noInfo: true,
    summary: "Aucune page officielle de Lietuvos paštas décrivant clairement un service de poste restante (durée, coût et format d'adresse) n'a été trouvée.",
    tips: [
      "Le site officiel donne le format pour l'étranger : nom et prénom, bureau de poste, et la mention « Poste restante » (Iki pareikalavimo) en gras.",
      "Aucune durée propre à ce service : seule la règle générale d'un mois pour les envois est indiquée.",
      "Frais et pièce d'identité : rien trouvé.",
      "Alternative documentée par l'UPU : la boîte postale.",
      "À confirmer auprès de Lietuvos paštas ou au guichet avant d'envoyer."
    ],
    source: "https://www.post.lt/lt/duk"
  },
  "442": {
    name: "Luxembourg", flag: "🇱🇺", authority: "POST Luxembourg", noInfo: true,
    summary: "Aucune page officielle de POST Luxembourg décrivant clairement un service de poste restante (durée, coût et format d'adresse) n'a été trouvée.",
    tips: [
      "Aucune page officielle actuelle sur la poste restante. Une source secondaire indique que le service a été abandonné : non confirmé.",
      "Les conditions générales 2018 de POST Courrier définissent un « Envoi Poste Restante » retiré en point de vente moyennant des frais : extrait non relu.",
      "À confirmer auprès de POST Luxembourg.",
      "Alternative documentée par l'UPU : la boîte postale.",
      "À confirmer auprès de POST Luxembourg ou au guichet avant d'envoyer."
    ],
    source: "https://www.post.lu"
  },
  "446": {
    name: "Macao", flag: "🇲🇴", authority: "Correios de Macau (CTT)", noInfo: true,
    summary: "Aucune page officielle de Correios de Macau (CTT) décrivant clairement un service de poste restante (durée, coût et format d'adresse) n'a été trouvée.",
    tips: [
      "La page officielle indique que le courrier « Posta Restante » se retire au bureau avec des frais supplémentaires (MOP 6,5 selon notre lecture, à vérifier) et que les envois non réclamés sont renvoyés après 90 jours.",
      "Pièce d'identité et format d'adresse : non précisés sur cette page. Une source secondaire cite « 存局候領 » et un nom identique à la pièce d'identité.",
      "Le service ne serait offert que dans certains bureaux : non vérifié.",
      "Alternative documentée par l'UPU : la boîte postale.",
      "À confirmer auprès de Correios de Macau (CTT) ou au guichet avant d'envoyer."
    ],
    source: "https://www.ctt.gov.mo/MacauPost/Contents/Recipient.aspx?lang=en-us"
  },
  "470": {
    name: "Malte", flag: "🇲🇹", localName: "Poste Restante", authority: "MaltaPost",
    address: [
      "[Camille DUPONT]",
      "Poste Restante",
      "Valletta Boxes",
      "75, Old Bakery Str",
      "IL-BELT VALLETTA",
      "VLT 1000",
      "MALTE"
    ],
    duration: { value: "3 mois", days: 90 },
    cost: { label: "Gratuit", detail: "Aucun frais au retrait selon MaltaPost." },
    idRequired: true,
    tips: [
      "Le courrier est gardé jusqu'à 3 mois après son arrivée à Malte. Service pour les envois venant de l'étranger.",
      "Il faut présenter une pièce d'identité au retrait.",
      "Un résumé de recherche évoquait un e-mail préalable à info@maltapost.com : non confirmé par la page officielle."
    ],
    reliability: "ok", source: "https://maltapost.com/posterestante"
  },
  "688": {
    name: "Serbie", flag: "🇷🇸", localName: "Poste restante · Post restant", authority: "Pošta Srbije",
    address: [
      "[Prénom NOM]",
      "POSTE RESTANTE",
      "[Code postal et nom du bureau de poste]",
      "SERBIE"
    ],
    duration: { value: "30 jours", days: 30 },
    cost: { label: "Non confirmé", detail: "Aucun tarif propre à la poste restante n'est indiqué sur la page officielle." },
    idRequired: true,
    tips: [
      "Le courrier est gardé 30 jours à partir de son arrivée dans la section poste restante du bureau de destination.",
      "La FAQ officielle accepte « POST RESTANT » ou « POSTE RESTANTE ». Pièce d'identité valide exigée au bureau.",
      "Pas de tarif précis trouvé : à confirmer avec Pošta Srbije."
    ],
    reliability: "check", source: "https://www.posta.rs/eng/korisnicki-servis/najcesca-pitanja.aspx"
  },
  "702": {
    name: "Singapour", flag: "🇸🇬", authority: "SingPost", noInfo: true,
    summary: "Aucune page officielle de SingPost décrivant clairement un service de poste restante (durée, coût et format d'adresse) n'a été trouvée.",
    tips: [
      "La page officielle ne cite « Poste Restante » que comme titre de section, sans durée, coût ni règle.",
      "Mentions « Poste restante » ou « To Be Called For », réservé aux voyageurs : source secondaire ancienne, non vérifié.",
      "SingPost propose aussi un service de rétention du courrier, distinct et probablement payant.",
      "Alternative documentée par l'UPU : la boîte postale.",
      "À confirmer auprès de SingPost ou au guichet avant d'envoyer."
    ],
    source: "https://www.singpost.com/publications/section-1-counter-services"
  },
  "703": {
    name: "Slovaquie", flag: "🇸🇰", localName: "Poste restante", authority: "Slovenská pošta",
    address: [
      "[Camille DUPONT]",
      "POSTE RESTANTE",
      "[Code postal et nom du bureau de poste]",
      "SLOVAQUIE"
    ],
    duration: { value: "18 jours (lettres), 10 jours (colis)", days: 18 },
    cost: { label: "Non confirmé", detail: "Les conditions générales et le tarif intérieur 2026 ne mentionnent aucun tarif propre à ce service." },
    idRequired: true,
    tips: [
      "Lettres, recommandés : 18 jours calendaires. Colis et envois express : 10 jours.",
      "Aucun avis n'est laissé pour les envois en poste restante : il faut passer régulièrement.",
      "Pièce d'identité exigée ; le numéro de suivi peut être demandé s'il est connu du destinataire."
    ],
    reliability: "check", source: "https://www.posta.sk/files/68384ff484936d59ffefcb96/postove-podmienky-vseobecne-na-slovensko.pdf"
  },
  "705": {
    name: "Slovénie", flag: "🇸🇮", localName: "Poštno ležeče · Poste restante", authority: "Pošta Slovenije",
    address: [
      "[Camille DUPONT]",
      "Poste restante",
      "[Code postal et nom du bureau de poste]",
      "SLOVÉNIE"
    ],
    duration: { value: "30 jours", days: 30 },
    cost: { label: "Non confirmé", detail: "Aucun tarif indiqué sur la page du service ni sur le formulaire." },
    idRequired: null,
    tips: [
      "Le service n'est pas automatique : le destinataire doit d'abord signer une « commande du destinataire » (Naslovnikovo naročilo) dans un bureau, avec une pièce d'identité.",
      "Avec cet accord, le courrier arrivé est gardé 30 jours comme « poštno ležeče ». Sans lui, le délai général est plus court.",
      "Les mentions « Poštno ležeče » et « Poste restante » ne comptent pas comme adresse d'expéditeur."
    ],
    reliability: "check", source: "https://www.posta.si/zasebno/postne-storitve/prejemanje/naslovnikovo-narocilo"
  },
  "144": {
    name: "Sri Lanka", flag: "🇱🇰", localName: "Poste Restante · To be called for", authority: "Sri Lanka Post",
    address: [
      "[Camille DUPONT]",
      "POSTE RESTANTE",
      "[Nom du bureau de poste choisi]",
      "SRI LANKA"
    ],
    duration: { value: "1 mois (2 mois dans les villes portuaires)", days: 30 },
    cost: { label: "Non confirmé", detail: "Aucun tarif de poste restante sur les pages officielles lues. Les frais d'entreposage de 50 Rs par jour concernent les colis non livrés." },
    idRequired: true,
    tips: [
      "Courrier gardé 2 mois à partir de la réception dans une ville portuaire, 1 mois ailleurs.",
      "Le service est offert aux touristes et voyageurs dans des bureaux « sélectionnés », sans liste publiée : demande à la poste lequel choisir.",
      "Il faut s'identifier pour retirer le courrier, sans document précisé. Les « particularités suffisantes » sur l'adresse sont exigées pour éviter les erreurs."
    ],
    reliability: "check", source: "https://slpost.gov.lk/services/poste-restante/"
  },
  "158": {
    name: "Taïwan", flag: "🇹🇼", localName: "存局候領 · Poste Restante", authority: "Chunghwa Post (中華郵政)",
    address: [
      "[Camille DUPONT]",
      "Poste Restante",
      "[Nom du bureau de poste]",
      "[Téléphone]",
      "TAÏWAN"
    ],
    duration: { value: "15 jours (2 mois pour l'international)", days: 15 },
    cost: { label: "Gratuit 15 jours", detail: "Gratuit les 15 premiers jours, puis des frais de garde par jour à partir du 16e jour (montant variable, à confirmer)." },
    idRequired: true,
    tips: [
      "Courrier du pays : 15 jours à partir du lendemain de l'arrivée, prolongeables à 1 mois par demande écrite. Courrier international : 2 mois, dont 15 jours sans frais.",
      "L'adresse doit comporter le nom du destinataire (complet, sans abréviation), son téléphone, le nom du bureau et la mention « 存局候領 » ou « Poste Restante ». Avec un numéro de portable, un SMS prévient à l'arrivée.",
      "Retrait sur présentation d'une pièce d'identité. Le courrier express est gardé 5 jours seulement."
    ],
    reliability: "ok", source: "https://www.post.gov.tw/post/internet/Law/index.jsp?ID=170301&ch_class_id=34"
  },
  "586": {
    name: "Pakistan", flag: "🇵🇰", localName: "Poste Restante", authority: "Pakistan Post",
    address: [
      "[Camille DUPONT]",
      "POSTE RESTANTE",
      "[Nom du bureau de poste choisi]",
      "PAKISTAN"
    ],
    duration: { value: "1 mois (2 mois à Karachi)", days: 30 },
    cost: { label: "Non confirmé", detail: "Aucun tarif indiqué sur la page officielle." },
    idRequired: null,
    tips: [
      "Le courrier est gardé 2 mois à Karachi et 1 mois dans tous les autres cas, à partir de son arrivée au bureau désigné.",
      "Pièce d'identité et format exact de l'adresse : non précisés sur la page officielle.",
      "Un résumé de recherche évoquait un maximum de 3 mois d'usage : non confirmé."
    ],
    reliability: "check", source: "https://pakpost.gov.pk/postretanate.php"
  },
  "807": {
    name: "Macédoine du Nord", flag: "🇲🇰", localName: "Пост рестант", authority: "Pošta na Severna Makedonija",
    address: [
      "[Prénom NOM]",
      "Пост рестант",
      "[Nom du bureau de poste]",
      "MACÉDOINE DU NORD"
    ],
    duration: { value: "30 jours", days: 30 },
    cost: { label: "Non confirmé", detail: "Aucun tarif indiqué sur la page officielle." },
    idRequired: null,
    tips: [
      "Le courrier est gardé 30 jours à partir de son arrivée à l'unité postale de destination.",
      "L'adresse du destinataire porte la mention « Пост рестант ». Le service est présenté comme hors du service universel.",
      "Exclus : envois urgents, EMS, courriers judiciaires ou administratifs. Pièce d'identité : non précisée."
    ],
    reliability: "check", source: "https://www.posta.com.mk/%D0%BF%D0%BE%D1%88%D1%82%D0%B5%D0%BD%D1%81%D0%BA%D0%B8-%D0%BF%D1%80%D0%B0%D1%82%D0%BA%D0%B8-%D0%BD%D0%B0%D0%B4%D0%B2%D0%BE%D1%80-%D0%BE%D0%B4-%D0%BE%D0%BF%D1%81%D0%B5%D0%B3%D0%BE%D1%82-%D0%BD%D0%B0/"
  },
  "499": {
    name: "Monténégro", flag: "🇲🇪", localName: "Poste restante", authority: "Pošta Crne Gore",
    address: [
      "[Prénom NOM]",
      "POSTE RESTANTE",
      "[Code postal et nom du bureau de poste]",
      "MONTÉNÉGRO"
    ],
    duration: { value: "30 jours", days: 30 },
    cost: { label: "Non confirmé", detail: "Le tarif intérieur indique 0,00 pour l'envoi en poste restante. Un supplément de 1,00 € HT existe pour la livraison à domicile d'un tel envoi." },
    idRequired: null,
    tips: [
      "Le règlement officiel (catalogue 2017, à vérifier s'il est à jour) fixe 30 jours pour les envois adressés POSTE RESTANTE.",
      "Format : nom et prénom, mention « POSTE RESTANTE », code postal et nom du bureau de destination.",
      "Pièce d'identité : non trouvée."
    ],
    reliability: "check", source: "https://www.postacg.me/wp-content/uploads/Pravilnik-o-obavljanju-postanskih-usluga.pdf"
  },
  "428": {
    name: "Lettonie", flag: "🇱🇻", localName: "Uz pieprasījumu · Poste restante", authority: "Latvijas Pasts",
    address: [
      "[Prénom NOM]",
      "Poste restante",
      "[Nom du bureau de poste]",
      "LETTONIE"
    ],
    duration: { value: "2 mois (10 jours gratuits)", days: 60 },
    cost: { label: "Payant après 10 jours", detail: "La tarification officielle compte 1,00 € par jour au-delà de 10 jours. Pas de frais pour les lettres de 500 g ou moins. Prolongation à 2 mois : 2,20 €." },
    idRequired: true,
    tips: [
      "Les règles officielles (arrêté de 2005, à vérifier s'il est toujours en vigueur) acceptent « Poste restante » pour l'international.",
      "Pièce d'identité avec photo et signature exigée au retrait. Le courrier n'est pas remis si l'adresse n'indique que des initiales ou un numéro de document.",
      "Aucune durée propre à ce service trouvée : la règle générale est de 2 mois maximum, dont 10 jours gratuits."
    ],
    reliability: "check", source: "https://www.vestnesis.lv/ta/id/112023-pasta-noteikumi"
  },
  "642": {
    name: "Roumanie", flag: "🇷🇴", authority: "Poșta Română", noInfo: true,
    summary: "Aucune page officielle de Poșta Română décrivant clairement un service de poste restante (durée, coût et format d'adresse) n'a été trouvée.",
    tips: [
      "Les conditions générales (révision 2026) citent l'adresse « Post Restant » avec le point de contact où retirer l'envoi, le code postal, la localité et le département.",
      "Aucune durée, frais ni règle d'identité propres à ce service dans ce document : seule la règle générale de conservation y figure.",
      "Alternative documentée par l'UPU : la boîte postale.",
      "À confirmer auprès de Poșta Română ou au guichet avant d'envoyer."
    ],
    source: "https://www.posta-romana.ro/cnpr-data/_editor/files/Condi%C8%9Bii%20generale%20privind%20furnizarea%20serviciilor%20postale_CNPR_trimise_rev_07.04.2026_transmis%20ANCOM%20%281%29.pdf"
  },
  "804": {
    name: "Ukraine", flag: "🇺🇦", authority: "Ukrposhta", noInfo: true,
    summary: "Aucune page officielle de Ukrposhta décrivant clairement un service de poste restante (durée, coût et format d'adresse) n'a été trouvée.",
    tips: [
      "Le service s'appelle « До запитання ». Un résumé de recherche indique que Ukrposhta a suspendu l'acceptation de ces envois (début 2025, risque de fraude) : non vérifié, la page officielle renvoie une erreur 403.",
      "Durée, frais et format d'adresse : non trouvés.",
      "Alternative documentée par l'UPU : la boîte postale.",
      "À confirmer auprès de Ukrposhta ou au guichet avant d'envoyer."
    ],
    source: "https://www.ukrposhta.ua"
  },
  "608": {
    name: "Philippines", flag: "🇵🇭", authority: "PHLPost", noInfo: true,
    summary: "Aucune page officielle de PHLPost décrivant clairement un service de poste restante (durée, coût et format d'adresse) n'a été trouvée.",
    tips: [
      "Un rapport annuel 2016 de PHLPost indique que le « General Delivery Service » est destiné aux personnes de passage sans adresse fixe, avec l'adresse « c/o General Delivery Service » suivie du nom du bureau.",
      "Ce n'est pas une page de service actuelle : durée, frais et pièce d'identité ne sont pas indiqués.",
      "Alternative documentée par l'UPU : la boîte postale.",
      "À confirmer auprès de PHLPost ou au guichet avant d'envoyer."
    ],
    source: "https://phlpost.gov.ph/wp-content/uploads/2022/07/Annual-Report-2016-Highlights-only.pdf"
  }
});
