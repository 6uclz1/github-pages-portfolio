'use client';

import { useEffect, useState } from 'react';
import { getWebApps } from '@/lib/github';
import { WebApp } from '@/types/github';
import WebAppCard from '@/components/WebAppCard';
import { Github, Globe } from 'lucide-react';

export default function Home() {
  const [webApps, setWebApps] = useState<WebApp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWebApps = async () => {
      try {
        const apps = await getWebApps();
        setWebApps(apps);
      } catch (err) {
        setError('Failed to fetch web applications');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebApps();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading web applications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              6uclz1&apos;s Web Applications
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            A collection of web applications hosted on GitHub Pages
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Github className="w-4 h-4 text-gray-500" />
            <a
              href="https://github.com/6uclz1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              @6uclz1
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {webApps.length} Web Applications
          </h2>
          <p className="text-gray-600">
            Sorted by last updated date
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webApps.map((webApp) => (
            <WebAppCard key={webApp.name} webApp={webApp} />
          ))}
        </div>

        {webApps.length === 0 && (
          <div className="text-center py-12">
            <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No web applications found</p>
          </div>
        )}
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-500 text-sm">
            <p>
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
            <p className="mt-1">
              Data fetched from GitHub API
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
