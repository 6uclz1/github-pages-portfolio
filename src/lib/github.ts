import { GitHubRepository, WebApp } from '@/types/github';

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = '6uclz1';

export async function fetchGitHubRepositories(): Promise<GitHubRepository[]> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}/repos?per_page=100&sort=updated`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'GitHub-Pages-Portfolio'
      }
    });
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch GitHub repositories:', error);
    throw error;
  }
}

export function filterWebApps(repositories: GitHubRepository[]): WebApp[] {
  return repositories
    .filter(repo => repo.has_pages && !repo.name.includes('template'))
    .map(repo => ({
      name: repo.name,
      description: repo.description,
      url: repo.homepage || `https://${USERNAME}.github.io/${repo.name}/`,
      repoUrl: repo.html_url,
      language: repo.language,
      topics: repo.topics || [],
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
    }))
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export async function getWebApps(): Promise<WebApp[]> {
  const repositories = await fetchGitHubRepositories();
  return filterWebApps(repositories);
}