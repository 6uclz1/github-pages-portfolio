export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  has_pages: boolean;
  created_at: string;
  updated_at: string;
  topics: string[];
}

export interface WebApp {
  name: string;
  description: string | null;
  url: string;
  repoUrl: string;
  language: string | null;
  topics: string[];
  createdAt: string;
  updatedAt: string;
}