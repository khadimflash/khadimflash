<div align="right">

[![English](https://img.shields.io/badge/English-30363D?style=flat-square)](https://github.com/khadimflash) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-1E88E5?style=flat-square)](https://github.com/khadimflash/khadimflash/blob/main/README.fr.md)

</div>

<div align="center">

<img src="./assets/banner.svg" alt="Khadim GNING — Développeur Full-Stack" width="100%" />

# Khadim GNING

### Développeur Full-Stack · Ingénieur Backend · Développeur Mobile & Jeux vidéo

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&pause=1200&color=1E88E5&center=true&vCenter=true&width=650&lines=Des+produits+num%C3%A9riques+fiables;Des+architectures+backend+scalables;Des+exp%C3%A9riences+web+et+mobile;Passionn%C3%A9+de+jeu+vid%C3%A9o)](https://github.com/khadimflash)


[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/khadim-gning-a8b564282/)
[![Email](https://img.shields.io/badge/Email-Me_contacter-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gningkhadim23@gmail.com)

![Profile Views](https://komarev.com/ghpvc/?username=khadimflash&color=1E88E5&style=flat-square&label=VUES+DU+PROFIL)

</div>

---

## 👋 À propos

Je suis développeur full-stack basé à Dakar. Mon objectif : transformer des idées en produits numériques fiables et agréables à utiliser.

J’interviens sur le web, le mobile, le backend et le jeu vidéo, avec une attention particulière à la clean architecture, à la maintenabilité, à la performance et à l’expérience utilisateur.

> Je conçois des logiciels utiles, scalables et faits pour durer.

## 💼 Ce que je fais

| Backend & APIs | Produits Web & Mobile |
|---|---|
| Services robustes, API REST et architectures backend scalables. | Applications web responsives et expériences mobiles fluides. |

| Product Engineering | Développement de jeux |
|---|---|
| De l’architecture technique et des bases de données jusqu’au déploiement et à l’itération. | Expériences interactives et prototypes de jeux avec Unity et C#. |

---

## 🚀 Projets phares

L’essentiel de mon travail se trouve dans des dépôts privés de clients. Voici une sélection des produits que j’ai conçus et développés.

### 🚕 Titigo & TitigoPro — Plateforme VTC au Mali

![En production](https://img.shields.io/badge/En_production-2EA043?style=flat-square)

Plateforme VTC en production pour le marché malien, développée de bout en bout en tant que **seul ingénieur** pour **TaaTaa SARL**.

- Deux applications React Native — **Titigo** pour les passagers et **TitigoPro** pour les chauffeurs — publiées sur l’App Store et Google Play
- **API backend** (Node.js, Express 5, TypeScript) au service des apps passager, chauffeur et admin :
  - Cycle de vie des courses en temps réel via Socket.IO (demande, acceptation, début, fin, annulation) avec un dispatch progressif plutôt qu’un broadcast
  - Géolocalisation, estimation d’itinéraire et tarification avec PostgreSQL + PostGIS
  - Inscription sécurisée par OTP SMS en 3 étapes, JWT avec rotation des refresh tokens, validation Zod
  - Règles métier côté serveur : une seule course active par client, vérification et seuil de dette des chauffeurs, mise à jour atomique du paiement et des commissions
  - API d’administration avec contrôle d’accès par rôles (super admin, finance, opérations, support) et gestion des commissions
  - Sondes de santé et de disponibilité, Docker, modes dégradés pour les fournisseurs externes
- Dashboard d’administration sécurisé avec Cloudflare Tunnel + Access
- CI/CD avec GitHub Actions et déploiement sur Render

**Stack :** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![PostGIS](https://img.shields.io/badge/PostGIS-336791?style=flat-square&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socketdotio&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black) ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white)

[![Titigo – App Store](https://img.shields.io/badge/Titigo-App_Store-0D96F6?style=for-the-badge&logo=appstore&logoColor=white)](https://apps.apple.com/us/app/titigo/id6760189237) [![Titigo – Google Play](https://img.shields.io/badge/Titigo-Google_Play-414141?style=for-the-badge&logo=googleplay&logoColor=white)](https://play.google.com/store/apps/details?id=com.titigo.client) [![TitigoPro – App Store](https://img.shields.io/badge/TitigoPro-App_Store-0D96F6?style=for-the-badge&logo=appstore&logoColor=white)](https://apps.apple.com/us/app/titigopro/id6760154957) [![TitigoPro – Google Play](https://img.shields.io/badge/TitigoPro-Google_Play-414141?style=for-the-badge&logo=googleplay&logoColor=white)](https://play.google.com/store/apps/details?id=com.titigo.driver)

**Chiffres des stores** (données App Store mises à jour automatiquement) :

<div align="center">

| App | Téléchargements Google Play | Note App Store | Dernière version iOS |
|:--|:--|:--|:--|
| **Titigo** | ![Titigo downloads](https://img.shields.io/badge/Google_Play-1k%2B%20t%C3%A9l%C3%A9chargements-414141?style=flat-square&logo=googleplay&logoColor=white) | ![Titigo App Store rating](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760189237&query=%24.results%5B0%5D.averageUserRating&label=App%20Store&color=0D96F6&style=flat-square&logo=appstore&logoColor=white&suffix=%20%E2%98%85) ![Titigo ratings count](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760189237&query=%24.results%5B0%5D.userRatingCount&label=avis&color=555&style=flat-square) | ![Titigo iOS version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760189237&query=%24.results%5B0%5D.version&label=iOS&color=555&style=flat-square&logo=apple&logoColor=white&prefix=v) |
| **TitigoPro** | ![TitigoPro downloads](https://img.shields.io/badge/Google_Play-500%2B%20t%C3%A9l%C3%A9chargements-414141?style=flat-square&logo=googleplay&logoColor=white) | ![TitigoPro App Store rating](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760154957&query=%24.results%5B0%5D.averageUserRating&label=App%20Store&color=0D96F6&style=flat-square&logo=appstore&logoColor=white&suffix=%20%E2%98%85) ![TitigoPro ratings count](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760154957&query=%24.results%5B0%5D.userRatingCount&label=avis&color=555&style=flat-square) | ![TitigoPro iOS version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760154957&query=%24.results%5B0%5D.version&label=iOS&color=555&style=flat-square&logo=apple&logoColor=white&prefix=v) |

</div>

### 🏅 MySportPlus — Marketplace sportive

![En développement](https://img.shields.io/badge/En_d%C3%A9veloppement-F59E0B?style=flat-square)

Plateforme qui met en relation des sportifs et des professionnels du sport, développée pour **Nexa Consulting**. Je suis responsable de l’architecture et du développement backend.

- Deux applications mobiles (sportifs / professionnels) partageant un seul backend **NestJS**
- Schéma PostgreSQL de 32 modèles avec Prisma
- Messagerie temps réel avec Socket.IO, paiements Stripe Connect avec capture différée
- Moteur de feed déterministe et notifications push avec suivi de livraison par appareil
- Développement piloté par les specs : chaque règle métier a un identifiant stable cité par ses tests

**Stack :** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socketdotio&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white) ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white)

### 💰 Deccalma — Paiement mobile pour l’Afrique de l’Ouest

![En développement](https://img.shields.io/badge/En_d%C3%A9veloppement-F59E0B?style=flat-square)

Application de paiement mobile : dépôt et transfert d’argent, épargne bloquée (coffre), tontine entre proches et boutique d’or et de bijoux payée depuis le solde.

- Architecture Expo Router en TypeScript strict, avec session et code secret sécurisés, Face ID et stockage chiffré
- Trois variantes (développement / preview / production) installables côte à côte, compilées et publiées avec EAS

**Stack :** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white)

### 🚖 Tukki Flex — Solution VTC

![En développement](https://img.shields.io/badge/En_d%C3%A9veloppement-F59E0B?style=flat-square)

Solution VTC pour **Tukki Flex**, développée en équipe : application passager, application chauffeur et site vitrine.

- **Application passager** — Expo Router, NativeWind (Tailwind CSS) et TanStack Query ; cartes interactives et géolocalisation en direct, connexion par OTP avec stockage sécurisé des tokens, bottom sheets et QR codes
- **Application chauffeur** — React Native 0.79 (bare workflow) avec React Navigation et gestion des permissions natives
- **Site vitrine** — React + Vite, responsive avec des animations modernes
- En démarrage : **Coco Taxi**, une suite passager / chauffeur / backend pour un autre service VTC

**Stack :** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white) ![NativeWind](https://img.shields.io/badge/NativeWind-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white) ![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

---

## 🧰 Stack technique

<div align="center">

| Domaine | Technologies |
|:--|:--|
| **Langages** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white) ![Swift](https://img.shields.io/badge/Swift-F05138?style=flat-square&logo=swift&logoColor=white) ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white) ![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white) |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white) |
| **Mobile** | ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Android](https://img.shields.io/badge/Android_(Kotlin)-3DDC84?style=flat-square&logo=android&logoColor=white) ![iOS](https://img.shields.io/badge/iOS_(Swift)-000000?style=flat-square&logo=apple&logoColor=white) |
| **Backend & APIs** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) ![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white) |
| **Bases de données** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) |
| **ORM** | ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) ![TypeORM](https://img.shields.io/badge/TypeORM_(NestJS)-FE0803?style=flat-square&logo=typeorm&logoColor=white) |
| **Architecture** | ![System Design](https://img.shields.io/badge/System_Design-FF6B6B?style=flat-square&logo=diagramsdotnet&logoColor=white) |
| **Cloud & DevOps** | ![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat-square&logo=googlecloud&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-FF9900?style=flat-square) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![CI/CD](https://img.shields.io/badge/CI%2FCD-2088FF?style=flat-square&logo=githubactions&logoColor=white) |
| **Tests** | ![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white) ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) |
| **Développement de jeux** | ![Unity](https://img.shields.io/badge/Unity-000000?style=flat-square&logo=unity&logoColor=white) ![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) |

</div>

---

## 📊 Statistiques GitHub

<div align="center">

<a href="https://github.com/khadimflash?tab=repositories">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/github-stats-fr-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="./assets/github-stats-fr-light.svg" />
    <img src="./assets/github-stats-fr-dark.svg" alt="Statistiques GitHub de Khadim GNING : stars, commits, pull requests, streaks et langages" width="100%" />
  </picture>
</a>

<br /><br />

<a href="https://github.com/khadimflash?tab=followers">
  <img src="https://img.shields.io/github/followers/khadimflash?style=for-the-badge&logo=github&label=Abonn%C3%A9s&color=1E88E5" alt="Abonnés GitHub" />
</a>
<a href="https://github.com/khadimflash?tab=repositories">
  <img src="https://img.shields.io/github/stars/khadimflash?style=for-the-badge&logo=github&label=Stars&color=1E88E5" alt="Stars GitHub" />
</a>

</div>

---

## 🤝 Travaillons ensemble

Je suis ouvert aux collaborations sur des produits full-stack, des applications mobiles, des systèmes backend et des projets de jeux indépendants.

Vous avez un produit, une idée de startup ou un projet open source qui a besoin d’un partenaire technique solide ? N’hésitez pas à me contacter.

<div align="center">

**[Portfolio](https://tonportfolio.dev)** · **[LinkedIn](https://www.linkedin.com/in/khadim-gning-a8b564282/)** · **[Email](mailto:gningkhadim23@gmail.com)**

<br /><br />

*Construire avec curiosité, livrer avec intention.*

</div>
