import fs from "node:fs/promises";

const USERNAME = process.env.GH_USERNAME || "khadimflash";
const TOKEN = process.env.GITHUB_TOKEN;
const MOCK = process.env.MOCK_DATA; // chemin vers un JSON pour tester en local sans API

if (!TOKEN && !MOCK) {
  console.error("GITHUB_TOKEN manquant.");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 1. Récupération des données (une seule requête GraphQL)
// ---------------------------------------------------------------------------

const QUERY = `
query ($login: String!, $cursor: String) {
  user(login: $login) {
    name
    followers { totalCount }
    contributionsCollection {
      totalCommitContributions
      restrictedContributionsCount
      totalPullRequestContributions
      totalIssueContributions
      totalPullRequestReviewContributions
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount } }
      }
    }
    pullRequests { totalCount }
    repositoriesContributedTo(contributionTypes: [COMMIT, PULL_REQUEST]) { totalCount }
    repositories(first: 100, after: $cursor, ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false) {
      totalCount
      pageInfo { hasNextPage endCursor }
      nodes {
        stargazerCount
        forkCount
        languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
          edges { size node { name color } }
        }
      }
    }
  }
}`;

async function graphql(variables) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: QUERY, variables }),
  });
  const json = await res.json();
  if (!res.ok || json.errors) {
    throw new Error(JSON.stringify(json.errors || json, null, 2));
  }
  return json.data.user;
}

async function fetchUser() {
  if (MOCK) return JSON.parse(await fs.readFile(MOCK, "utf8"));

  let user = null;
  let cursor = null;
  const repos = [];
  do {
    const page = await graphql({ login: USERNAME, cursor });
    user ??= page;
    repos.push(...page.repositories.nodes);
    cursor = page.repositories.pageInfo.hasNextPage
      ? page.repositories.pageInfo.endCursor
      : null;
  } while (cursor);
  user.repositories.nodes = repos;
  return user;
}

// ---------------------------------------------------------------------------
// 2. Calcul des indicateurs
// ---------------------------------------------------------------------------

// Langages de "balisage" / notebooks qui gonflent artificiellement les stats
const IGNORED_LANGUAGES = new Set(["Jupyter Notebook", "HTML", "CSS", "SCSS", "Makefile", "Dockerfile", "Shell", "Batchfile", "PowerShell"]);

function computeStats(user) {
  const repos = user.repositories.nodes;
  const cc = user.contributionsCollection;

  // Langages (hors forks, pondérés par taille)
  const langs = new Map();
  for (const repo of repos) {
    for (const { size, node } of repo.languages.edges) {
      if (IGNORED_LANGUAGES.has(node.name)) continue;
      const prev = langs.get(node.name) || { size: 0, color: node.color };
      prev.size += size;
      langs.set(node.name, prev);
    }
  }
  const totalSize = [...langs.values()].reduce((s, l) => s + l.size, 0) || 1;
  const sorted = [...langs.entries()].sort((a, b) => b[1].size - a[1].size);
  const top = sorted.slice(0, 5).map(([name, l]) => ({
    name,
    color: l.color || "#8b949e",
    pct: (l.size / totalSize) * 100,
  }));
  const otherPct = 100 - top.reduce((s, l) => s + l.pct, 0);
  if (otherPct > 0.5) top.push({ name: "Other", color: "#6e7681", pct: otherPct });

  // Streaks à partir du calendrier de contributions
  const days = cc.contributionCalendar.weeks.flatMap((w) => w.contributionDays);
  let longest = 0;
  let run = 0;
  for (const d of days) {
    run = d.contributionCount > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  let current = 0;
  let i = days.length - 1;
  if (i >= 0 && days[i].contributionCount === 0) i--; // aujourd'hui pas encore terminé
  for (; i >= 0 && days[i].contributionCount > 0; i--) current++;

  // Activité hebdomadaire (52 dernières semaines)
  const weekly = cc.contributionCalendar.weeks
    .map((w) => w.contributionDays.reduce((s, d) => s + d.contributionCount, 0))
    .slice(-52);

  return {
    name: user.name || USERNAME,
    stars: repos.reduce((s, r) => s + r.stargazerCount, 0),
    forks: repos.reduce((s, r) => s + r.forkCount, 0),
    repos: user.repositories.totalCount,
    followers: user.followers.totalCount,
    commits: cc.totalCommitContributions + cc.restrictedContributionsCount,
    prs: user.pullRequests.totalCount,
    issues: cc.totalIssueContributions,
    reviews: cc.totalPullRequestReviewContributions,
    contributedTo: user.repositoriesContributedTo.totalCount,
    contributions: cc.contributionCalendar.totalContributions,
    currentStreak: current,
    longestStreak: longest,
    languages: top,
    weekly,
  };
}

// ---------------------------------------------------------------------------
// 3. Rendu SVG (thème sombre + clair)
// ---------------------------------------------------------------------------

const THEMES = {
  dark: {
    bg1: "#0d1117", bg2: "#111827", border: "#30363d", tile: "#161b22",
    title: "#f0f6fc", text: "#c9d1d9", muted: "#8b949e", accent: "#1e88e5",
    accentSoft: "#1e88e533", track: "#21262d",
  },
  light: {
    bg1: "#ffffff", bg2: "#f6f8fa", border: "#d0d7de", tile: "#f6f8fa",
    title: "#1f2328", text: "#1f2328", muted: "#59636e", accent: "#1565c0",
    accentSoft: "#1565c022", track: "#e6e9ec",
  },
};

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const fmt = (n) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "")}k` : String(n);

function render(s, t) {
  const FONT = `font-family="'Segoe UI', Ubuntu, 'Helvetica Neue', Arial, sans-serif"`;
  const W = 1000;
  const H = 460;

  // --- Tuiles KPI (grille 4 x 2, colonne gauche) ---
  const kpis = [
    ["Total Stars", fmt(s.stars), "★"],
    ["Commits (1 an)", fmt(s.commits), "◆"],
    ["Pull Requests", fmt(s.prs), "⇄"],
    ["Contribs (1 an)", fmt(s.contributions), "▲"],
    ["Repos publics", fmt(s.repos), "▣"],
    ["Contribué à", fmt(s.contributedTo), "◎"],
    ["Streak actuel", `${s.currentStreak} j`, "↯"],
    ["Meilleur streak", `${s.longestStreak} j`, "✦"],
  ];
  const tileW = 132;
  const tileH = 88;
  const gap = 12;
  const tiles = kpis
    .map(([label, value, icon], idx) => {
      const col = idx % 4;
      const row = Math.floor(idx / 4);
      const x = 40 + col * (tileW + gap);
      const y = 118 + row * (tileH + gap);
      const delay = (idx * 0.08).toFixed(2);
      return `
    <g class="fade" style="animation-delay:${delay}s">
      <rect x="${x}" y="${y}" width="${tileW}" height="${tileH}" rx="12" fill="${t.tile}" stroke="${t.border}"/>
      <text x="${x + 16}" y="${y + 28}" fill="${t.muted}" font-size="12" ${FONT}>${esc(label)}</text>
      <text x="${x + 16}" y="${y + 66}" fill="${t.title}" font-size="28" font-weight="700" ${FONT}>${esc(value)}</text>
      <text x="${x + tileW - 16}" y="${y + 66}" fill="${t.accent}" font-size="16" text-anchor="end" ${FONT}>${icon}</text>
    </g>`;
    })
    .join("");

  // --- Langages (colonne droite) ---
  const lx = 640;
  const lw = 320;
  let acc = 0;
  const stacked = s.languages
    .map((l) => {
      const w = (l.pct / 100) * lw;
      const seg = `<rect x="${lx + acc}" y="146" width="${Math.max(w, 0)}" height="12" fill="${l.color}"/>`;
      acc += w;
      return seg;
    })
    .join("");
  const legend = s.languages
    .map((l, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const x = lx + col * 165;
      const y = 196 + row * 30;
      return `
      <g class="fade" style="animation-delay:${(0.3 + idx * 0.08).toFixed(2)}s">
        <circle cx="${x + 6}" cy="${y - 5}" r="6" fill="${l.color}"/>
        <text x="${x + 20}" y="${y}" fill="${t.text}" font-size="14" ${FONT}>${esc(l.name)}</text>
        <text x="${x + 150}" y="${y}" fill="${t.muted}" font-size="13" text-anchor="end" ${FONT}>${l.pct.toFixed(1)}%</text>
      </g>`;
    })
    .join("");

  // --- Courbe d'activité (52 semaines) ---
  const cx = 40;
  const cy = 362;
  const cw = 920;
  const ch = 68;
  const max = Math.max(...s.weekly, 1);
  const step = cw / Math.max(s.weekly.length - 1, 1);
  const pts = s.weekly.map((v, idx) => [cx + idx * step, cy + ch - (v / max) * ch]);
  const line = pts.map(([x, y], idx) => `${idx ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${cx + cw},${cy + ch} L${cx},${cy + ch} Z`;

  const updated = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "Africa/Dakar" });

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Statistiques GitHub de ${esc(s.name)}">
  <title>Statistiques GitHub de ${esc(s.name)}</title>
  <style>
    .fade { opacity: 0; animation: fade .6s ease forwards; }
    .draw { stroke-dasharray: 3000; stroke-dashoffset: 3000; animation: draw 2s ease forwards .4s; }
    @keyframes fade { to { opacity: 1; } }
    @keyframes draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) { .fade, .draw { animation: none; opacity: 1; stroke-dashoffset: 0; } }
  </style>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${t.bg1}"/><stop offset="100%" stop-color="${t.bg2}"/>
    </linearGradient>
    <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${t.accent}" stop-opacity=".35"/><stop offset="100%" stop-color="${t.accent}" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="bar"><rect x="${lx}" y="146" width="${lw}" height="12" rx="6"/></clipPath>
  </defs>

  <rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="18" fill="url(#bg)" stroke="${t.border}"/>

  <text x="40" y="58" fill="${t.title}" font-size="26" font-weight="700" ${FONT}>GitHub Analytics</text>
  <text x="40" y="84" fill="${t.muted}" font-size="14" ${FONT}>${fmt(s.followers)} followers · ${fmt(s.forks)} forks · ${fmt(s.reviews)} code reviews · ${fmt(s.issues)} issues (1 an)</text>
  <text x="${W - 40}" y="58" fill="${t.muted}" font-size="12" text-anchor="end" ${FONT}>Mis à jour le ${esc(updated)}</text>

  ${tiles}

  <text x="${lx}" y="132" fill="${t.muted}" font-size="12" letter-spacing="1" ${FONT}>LANGAGES LES PLUS UTILISÉS</text>
  <rect x="${lx}" y="146" width="${lw}" height="12" rx="6" fill="${t.track}"/>
  <g clip-path="url(#bar)">${stacked}</g>
  ${legend}

  <text x="40" y="348" fill="${t.muted}" font-size="12" letter-spacing="1" ${FONT}>ACTIVITÉ — 52 DERNIÈRES SEMAINES</text>
  <line x1="${cx}" y1="${cy + ch}" x2="${cx + cw}" y2="${cy + ch}" stroke="${t.border}"/>
  <path d="${area}" fill="url(#area)" class="fade" style="animation-delay:.6s"/>
  <path d="${line}" fill="none" stroke="${t.accent}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" class="draw"/>
  <text x="${cx + cw}" y="${cy - 6}" fill="${t.muted}" font-size="11" text-anchor="end" ${FONT}>max ${max} / semaine</text>
</svg>`;
}

// ---------------------------------------------------------------------------
// 4. Écriture
// ---------------------------------------------------------------------------

const user = await fetchUser();
const stats = computeStats(user);

await fs.mkdir("assets", { recursive: true });
await Promise.all(
  Object.entries(THEMES).map(([name, theme]) =>
    fs.writeFile(`assets/github-stats-${name}.svg`, render(stats, theme))
  )
);

console.log("Statistiques générées :", JSON.stringify({ ...stats, weekly: undefined }, null, 2));
