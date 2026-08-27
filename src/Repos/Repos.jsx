import { useEffect, useState } from "react";
import { linkGroups } from "../Links/linksList";
import {
  repoCardStyle,
  repoDescriptionStyle,
  repoMetaStyle,
  repoNameStyle,
  reposAllStyle,
  reposGridStyle,
  reposSectionStyle,
  reposSubtitleStyle,
} from "../utils/styles/styles";

const USER = "oliveirasWell";
const PROFILE = `https://github.com/${USER}`;
const FEED = `https://api.github.com/users/${USER}/repos?sort=pushed&per_page=100`;

// This site is itself a repo and would always sit at the top of the feed.
const SITE_REPO = "oliveiraswell.github.io";
const HOW_MANY = 6;

// Repos already written up by hand in the links panel, derived from the list
// itself so the two sections cannot drift apart as it is edited. The curated
// entry wins: it carries a real description and never falls out of the window.
const curated = new Set(
  linkGroups
    .flatMap((group) => group.items)
    .map((item) => item.link.match(/github\.com\/oliveirasWell\/([^/]+)/i)?.[1])
    .filter(Boolean),
);

// The account has no stars to rank by, so "best" means "most recently pushed",
// which is what sort=pushed already gives us - forks and archives aside.
export const pickBest = (repos) =>
  repos
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        repo.name !== SITE_REPO &&
        !curated.has(repo.name),
    )
    .slice(0, HOW_MANY);

const monthYear = (iso, language) =>
  new Date(iso).toLocaleDateString(language === "pt" ? "pt-BR" : "en", {
    month: "short",
    year: "numeric",
  });

export const Repos = ({ t, language }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const aborter = new AbortController();

    fetch(FEED, { signal: aborter.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((all) => setRepos(pickBest(all)))
      .catch(() => {}); // rate limited or offline: the section just stays out

    return () => aborter.abort();
  }, []);

  // Nothing to show and nothing to apologise for - the section only exists
  // once GitHub actually answered.
  if (repos.length === 0) {
    return null;
  }

  return (
    <section style={reposSectionStyle}>
      <h2>{t.reposTitle}</h2>
      <span style={reposSubtitleStyle}>{t.reposSubtitle}</span>

      <div style={reposGridStyle}>
        {repos.map((repo) => (
          <a
            key={repo.id}
            className="link"
            style={repoCardStyle}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={repoNameStyle}>{repo.name}</span>
            {repo.description && (
              <span style={repoDescriptionStyle}>{repo.description}</span>
            )}
            <span style={repoMetaStyle}>
              {[repo.language, monthYear(repo.pushed_at, language)]
                .filter(Boolean)
                .join(" · ")}
            </span>
          </a>
        ))}
      </div>

      <a
        className="link"
        style={reposAllStyle}
        href={PROFILE}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.reposAll} →
      </a>
    </section>
  );
};
