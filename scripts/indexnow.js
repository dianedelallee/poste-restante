#!/usr/bin/env node
/* Prévient les moteurs de recherche compatibles IndexNow (Bing, Yandex, Seznam, Naver…) que des pages existent ou ont changé.
   Google ne prend pas IndexNow en charge : pour lui, passer par Search Console.

   Usage :
     node scripts/indexnow.js                 essai à blanc : affiche ce qui serait envoyé, n'envoie rien
     node scripts/indexnow.js --send          envoie toutes les adresses du sitemap
     node scripts/indexnow.js --send URL...   envoie seulement les adresses données

   Prérequis : le fichier-clé <KEY>.txt (à la racine du site) doit déjà être en ligne ; c'est lui qui prouve
   que le site nous appartient. La clé est publique par conception. */
"use strict";
const fs = require("fs");
const path = require("path");

const SITE = "https://www.poste-restante.club";
const HOST = "www.poste-restante.club";
const KEY = "c4f2060a79898618f4ded587a4b5eb47";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const send = args.includes("--send");
const given = args.filter((a) => /^https?:\/\//.test(a));

const sitemap = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
const fromSitemap = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const urlList = [...new Set(given.length ? given : fromSitemap)];

if (urlList.some((u) => new URL(u).host !== HOST)) throw new Error(`Toutes les adresses doivent être sur ${HOST}`);
if (!fs.existsSync(path.join(ROOT, `${KEY}.txt`)) || fs.readFileSync(path.join(ROOT, `${KEY}.txt`), "utf8").trim() !== KEY) {
  throw new Error(`Le fichier ${KEY}.txt est absent ou ne contient pas la clé`);
}

console.log(`${urlList.length} adresse(s) · clé ${KEY.slice(0, 6)}… · fichier-clé ${KEY_LOCATION}`);
if (!send) {
  console.log("Essai à blanc : rien n'est envoyé. Ajoute --send pour envoyer.");
  urlList.slice(0, 5).forEach((u) => console.log("  " + u));
  if (urlList.length > 5) console.log(`  … et ${urlList.length - 5} autres`);
  process.exit(0);
}

(async () => {
  const check = await fetch(KEY_LOCATION).catch(() => null);
  if (!check || !check.ok || (await check.text()).trim() !== KEY) {
    console.error(`Le fichier-clé n'est pas (encore) en ligne à ${KEY_LOCATION} : envoi annulé.`);
    process.exit(1);
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList })
  });
  const meaning = { 200: "reçu", 202: "reçu, vérification de la clé en cours", 400: "requête invalide", 403: "clé invalide ou fichier-clé introuvable", 422: "adresses hors du site ou clé non conforme", 429: "trop de requêtes" };
  console.log(`Réponse : ${res.status} ${meaning[res.status] || res.statusText}`);
  process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
})();
