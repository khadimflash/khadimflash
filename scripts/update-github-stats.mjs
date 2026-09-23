import fs from "node:fs/promises";

const username = "khadimflash";
const token = process.env.GITHUB_TOKEN;

async function github(path) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${path}`);
  }

  return response.json();
}

const user = await github(`/users/${username}`);
const repositories = await github(
  `/users/${username}/repos?per_page=100&sort=updated`
);

const languages = {};

for (const repository of repositories) {
  const repoLanguages = await github(
    `/repos/${username}/${repository.name}/languages`
  );

  for (const [language, bytes] of Object.entries(repoLanguages)) {
    languages[language] = (languages[language] || 0) + bytes;
  }
}

const topLanguages = Object.entries(languages)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);

const totalBytes = topLanguages.reduce((sum, [, bytes]) => sum + bytes, 0);

const languageRows = topLanguages
  .map(([language, bytes], index) => {
    const percentage = ((bytes / totalBytes) * 100).toFixed(1);
    const y = 215 + index * 32;

    return `
      <text x="540" y="${y}" fill="#c9d1d9" font-family="Arial" font-size="15">
        ${language}
      </text>
      <rect x="650" y="${y - 14}" width="230" height="10" rx="5" fill="#21262d"/>
      <rect x="650" y="${y - 14}" width="${percentage * 2.3}" height="10" rx="5" fill="#1e88e5"/>
      <text x="900" y="${y}" fill="#8b949e" font-family="Arial" font-size="14">
        ${percentage}%
      </text>
    `;
  })
  .join("");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="430" viewBox="0 0 1000 430">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
  </defs>

  <rect width="1000" height="430" rx="18" fill="url(#background)" stroke="#30363d"/>

  <text x="50" y="60" fill="#ffffff" font-family="Arial" font-size="28" font-weight="700">
    GitHub Analytics
  </text>

  <text x="50" y="95" fill="#8b949e" font-family="Arial" font-size="15">
    Live data fetched from the GitHub API
  </text>

  <line x1="50" y1="125" x2="950" y2="125" stroke="#30363d"/>

  <text x="70" y="175" fill="#8b949e" font-family="Arial" font-size="14">
    PUBLIC REPOSITORIES
  </text>
  <text x="70" y="215" fill="#58a6ff" font-family="Arial" font-size="34" font-weight="700">
    ${user.public_repos}
  </text>

  <text x="290" y="175" fill="#8b949e" font-family="Arial" font-size="14">
    FOLLOWERS
  </text>
  <text x="290" y="215" fill="#58a6ff" font-family="Arial" font-size="34" font-weight="700">
    ${user.followers}
  </text>

  <text x="540" y="175" fill="#8b949e" font-family="Arial" font-size="14">
    TOP LANGUAGES
  </text>

  ${languageRows}

  <text x="70" y="385" fill="#8b949e" font-family="Arial" font-size="13">
    Updated automatically by GitHub Actions
  </text>
</svg>
`;

await fs.mkdir("assets", { recursive: true });
await fs.writeFile("assets/github-stats.svg", svg.trim());

console.log("GitHub statistics generated successfully.");
