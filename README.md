<div align="right">

[![English](https://img.shields.io/badge/English-1E88E5?style=flat-square)](https://github.com/khadimflash) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-30363D?style=flat-square)](https://github.com/khadimflash/khadimflash/blob/main/README.fr.md)

</div>

<div align="center">

<img src="./assets/banner.svg" alt="Khadim GNING — Full-Stack Developer" width="100%" />

# Khadim GNING

### Full-Stack Developer · Backend Engineer · Mobile & Game Developer

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&pause=1200&color=1E88E5&center=true&vCenter=true&width=650&lines=Building+reliable+digital+products;Designing+scalable+backend+systems;Creating+web+and+mobile+experiences;Exploring+game+development)](https://github.com/khadimflash)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/khadim-gning-a8b564282/)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gningkhadim23@gmail.com)

![Profile Views](https://komarev.com/ghpvc/?username=khadimflash&color=1E88E5&style=flat-square&label=PROFILE+VIEWS)

</div>

---

## 👋 About Me

I’m a full-stack developer based in Dakar, focused on transforming ideas into reliable and enjoyable digital products.

I work across web, mobile, backend, and game development, with particular attention to clean architecture, maintainability, performance, and thoughtful user experiences.

> I build software that is useful, scalable, and made to last.

## 💼 What I Do

| Backend & APIs | Web & Mobile Products |
|---|---|
| Robust services, REST APIs, and scalable backend architectures. | Responsive web applications and smooth mobile experiences. |

| Product Engineering | Game Development |
|---|---|
| From technical architecture and databases to deployment and iteration. | Interactive experiences and game prototypes with Unity and C#. |

---

## 🚀 Featured Projects

Most of my work lives in private client repositories. Here is a selection of the products I have designed and built.

### 🚕 Titigo & TitigoPro — Ride-hailing platform for Mali

![Live](https://img.shields.io/badge/Live-2EA043?style=flat-square)

Production ride-hailing platform for the Malian market, built end to end as **sole engineer** for **TaaTaa SARL**.

- Two React Native apps — **Titigo** for passengers and **TitigoPro** for drivers — published on the App Store and Google Play
- **Backend API** (Node.js, Express 5, TypeScript) serving the passenger, driver and admin apps:
  - Real-time ride lifecycle over Socket.IO (request, accept, start, complete, cancel) with progressive dispatch rather than broadcast
  - Geolocation, route estimation and pricing with PostgreSQL + PostGIS
  - Secure 3-step OTP registration by SMS, JWT with rotating refresh tokens, Zod validation
  - Server-side business rules: one active ride per client, driver verification and debt threshold, atomic payment and commission updates
  - Admin API with role-based access control (super admin, finance, operations, support) and commission management
  - Health and readiness probes, Docker, graceful fallbacks for external providers
- Admin dashboard secured with Cloudflare Tunnel + Access
- CI/CD with GitHub Actions and deployment on Render

**Stack:** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![PostGIS](https://img.shields.io/badge/PostGIS-336791?style=flat-square&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socketdotio&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black) ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white)

[![Titigo – App Store](https://img.shields.io/badge/Titigo-App_Store-0D96F6?style=for-the-badge&logo=appstore&logoColor=white)](https://apps.apple.com/us/app/titigo/id6760189237) [![Titigo – Google Play](https://img.shields.io/badge/Titigo-Google_Play-414141?style=for-the-badge&logo=googleplay&logoColor=white)](https://play.google.com/store/apps/details?id=com.titigo.client) [![TitigoPro – App Store](https://img.shields.io/badge/TitigoPro-App_Store-0D96F6?style=for-the-badge&logo=appstore&logoColor=white)](https://apps.apple.com/us/app/titigopro/id6760154957) [![TitigoPro – Google Play](https://img.shields.io/badge/TitigoPro-Google_Play-414141?style=for-the-badge&logo=googleplay&logoColor=white)](https://play.google.com/store/apps/details?id=com.titigo.driver)

**Store metrics** (App Store data refreshes automatically):

<div align="center">

| App | Google Play downloads | App Store rating | Latest iOS version |
|:--|:--|:--|:--|
| **Titigo** | ![Titigo downloads](https://img.shields.io/badge/Google_Play-1k%2B%20downloads-414141?style=flat-square&logo=googleplay&logoColor=white) | ![Titigo App Store rating](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760189237&query=%24.results%5B0%5D.averageUserRating&label=App%20Store&color=0D96F6&style=flat-square&logo=appstore&logoColor=white&suffix=%20%E2%98%85) ![Titigo ratings count](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760189237&query=%24.results%5B0%5D.userRatingCount&label=ratings&color=555&style=flat-square) | ![Titigo iOS version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760189237&query=%24.results%5B0%5D.version&label=iOS&color=555&style=flat-square&logo=apple&logoColor=white&prefix=v) |
| **TitigoPro** | ![TitigoPro downloads](https://img.shields.io/badge/Google_Play-500%2B%20downloads-414141?style=flat-square&logo=googleplay&logoColor=white) | ![TitigoPro App Store rating](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760154957&query=%24.results%5B0%5D.averageUserRating&label=App%20Store&color=0D96F6&style=flat-square&logo=appstore&logoColor=white&suffix=%20%E2%98%85) ![TitigoPro ratings count](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760154957&query=%24.results%5B0%5D.userRatingCount&label=ratings&color=555&style=flat-square) | ![TitigoPro iOS version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D6760154957&query=%24.results%5B0%5D.version&label=iOS&color=555&style=flat-square&logo=apple&logoColor=white&prefix=v) |

</div>

### 🏅 MySportPlus — Two-sided sports marketplace

![In development](https://img.shields.io/badge/In_development-F59E0B?style=flat-square)

Platform connecting athletes with sports professionals, built for **Nexa Consulting**. I own the backend architecture and development.

- Two mobile apps (athletes / professionals) sharing a single **NestJS** backend
- 32-model PostgreSQL schema with Prisma
- Real-time messaging with Socket.IO, Stripe Connect payments with deferred capture
- Deterministic feed engine and push notifications with per-device delivery tracking
- Spec-driven development: every business rule has a stable ID referenced by its tests

**Stack:** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socketdotio&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white) ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white)

### 💰 Deccalma — Mobile payments for West Africa

![In development](https://img.shields.io/badge/In_development-F59E0B?style=flat-square)

Mobile payment app: deposits and money transfers, locked savings vault, tontines between relatives, and a gold & jewelry shop paid from the wallet balance.

- Expo Router architecture in strict TypeScript, with secure session and PIN code, Face ID and encrypted storage
- Three app variants (development / preview / production) installable side by side, built and shipped with EAS

**Stack:** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white)

### 🚖 Tukki Flex — Ride-hailing solution

![In development](https://img.shields.io/badge/In_development-F59E0B?style=flat-square)

Ride-hailing solution for **Tukki Flex**, built as a team: passenger app, driver app and showcase website.

- **Passenger app** — Expo Router, NativeWind (Tailwind CSS) and TanStack Query; interactive maps and live geolocation, OTP sign-in with secure token storage, bottom sheets and QR codes
- **Driver app** — React Native 0.79 (bare workflow) with React Navigation and native permission handling
- **Showcase website** — React + Vite, responsive with modern animations
- Also getting started: **Coco Taxi**, a passenger / driver / backend suite for another ride-hailing service

**Stack:** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white) ![NativeWind](https://img.shields.io/badge/NativeWind-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white) ![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

---

## 🧰 Tech Stack

<div align="center">

| Domain | Technologies |
|:--|:--|
| **Languages** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white) ![Swift](https://img.shields.io/badge/Swift-F05138?style=flat-square&logo=swift&logoColor=white) ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white) ![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white) |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white) |
| **Mobile** | ![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Android](https://img.shields.io/badge/Android_(Kotlin)-3DDC84?style=flat-square&logo=android&logoColor=white) ![iOS](https://img.shields.io/badge/iOS_(Swift)-000000?style=flat-square&logo=apple&logoColor=white) |
| **Backend & APIs** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) ![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white) |
| **Databases** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) |
| **ORM** | ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) ![TypeORM](https://img.shields.io/badge/TypeORM_(NestJS)-FE0803?style=flat-square&logo=typeorm&logoColor=white) |
| **Architecture** | ![System Design](https://img.shields.io/badge/System_Design-FF6B6B?style=flat-square&logo=diagramsdotnet&logoColor=white) |
| **Cloud & DevOps** | ![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat-square&logo=googlecloud&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-FF9900?style=flat-square) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![CI/CD](https://img.shields.io/badge/CI%2FCD-2088FF?style=flat-square&logo=githubactions&logoColor=white) |
| **Testing** | ![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white) ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) |
| **Game Development** | ![Unity](https://img.shields.io/badge/Unity-000000?style=flat-square&logo=unity&logoColor=white) ![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) |

</div>

---

## 📊 GitHub Analytics

<div align="center">

<a href="https://github.com/khadimflash?tab=repositories">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/github-stats-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="./assets/github-stats-light.svg" />
    <img src="./assets/github-stats-dark.svg" alt="Khadim GNING GitHub statistics: stars, commits, pull requests, streaks and languages" width="100%" />
  </picture>
</a>

<br /><br />

<a href="https://github.com/khadimflash?tab=followers">
  <img src="https://img.shields.io/github/followers/khadimflash?style=for-the-badge&logo=github&label=Followers&color=1E88E5" alt="GitHub followers" />
</a>
<a href="https://github.com/khadimflash?tab=repositories">
  <img src="https://img.shields.io/github/stars/khadimflash?style=for-the-badge&logo=github&label=Stars&color=1E88E5" alt="GitHub stars" />
</a>

</div>

---

## 🤝 Let’s Work Together

I’m open to collaborations on full-stack products, mobile applications, backend systems, and indie game ideas.

If you have a product, startup idea, or open-source project that needs a strong technical partner, feel free to reach out.

<div align="center">

**[Portfolio](https://tonportfolio.dev)** · **[LinkedIn](https://www.linkedin.com/in/khadim-gning-a8b564282/)** · **[Email](mailto:gningkhadim23@gmail.com)**

<br /><br />

*Building with curiosity, shipping with purpose.*

</div>
