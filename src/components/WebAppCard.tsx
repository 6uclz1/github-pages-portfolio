'use client';

import { WebApp } from '@/types/github';
import { ExternalLink, Calendar, Code } from 'lucide-react';

interface WebAppCardProps {
  webApp: WebApp;
}

export default function WebAppCard({ webApp }: WebAppCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      TypeScript: 'bg-blue-500',
      JavaScript: 'bg-yellow-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-blue-400',
      Python: 'bg-green-500',
      Astro: 'bg-purple-500',
    };
    return colors[language || ''] || 'bg-gray-500';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
          {webApp.name}
        </h3>
        <div className="flex gap-2 ml-4">
          <a
            href={webApp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
            title="サイトを開く"
          >
            <ExternalLink size={18} />
          </a>
          <a
            href={webApp.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-colors"
            title="GitHubリポジトリを開く"
          >
            <Code size={18} />
          </a>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 h-12 overflow-hidden">
        {webApp.description || 'No description available'}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {webApp.language && (
            <span className="flex items-center gap-1 text-xs text-gray-700 dark:text-gray-300">
              <div
                className={`w-3 h-3 rounded-full ${getLanguageColor(webApp.language)}`}
              />
              {webApp.language}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <Calendar size={12} />
          {formatDate(webApp.updatedAt)}
        </div>
      </div>

      {webApp.topics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {webApp.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {topic}
            </span>
          ))}
          {webApp.topics.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full">
              +{webApp.topics.length - 3}
            </span>
          )}
        </div>
      )}
    </div>
  );
}