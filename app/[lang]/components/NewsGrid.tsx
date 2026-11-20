"use client";

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { NewsArticle, MediaItem, formatDisplayDate, getThumbnailMedia } from './NewsCard';
import { getAssetPath } from './getAssetPath';

function getThumbnailUrl(media: MediaItem[] | undefined): string | undefined {
  if (!media || media.length === 0) return undefined;
  const thumb = getThumbnailMedia(media);
  if (!thumb) return undefined;

  if (thumb.type === 'image') return getAssetPath(thumb.src);
  if (thumb.type === 'video' && thumb.poster) return getAssetPath(thumb.poster);
  return undefined;
}

function NewsCardItem({ article, basePath }: { article: NewsArticle; basePath?: string }) {
  const thumbnailUrl = getThumbnailUrl(article.media);
  const href = basePath ? `./${basePath}/${article.id}` : `./${article.id}`;

  return (
    <Link href={href} className="block group">
      <article className="rounded-2xl overflow-hidden shadow-xl card-hover glass-light flex flex-col h-full">
        {/* Thumbnail */}
        {thumbnailUrl && (
          <div
            className="h-48 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category badge */}
          {article.category && (
            <span className="inline-block self-start px-3 py-1 mb-3 text-xs font-medium tracking-wide uppercase rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {article.category}
            </span>
          )}

          {/* Date & Author */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <time>{formatDisplayDate(article.date)}</time>
            {article.author && (
              <>
                <span className="text-gray-600">•</span>
                <span>{article.author}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-300 leading-relaxed text-sm line-clamp-3 flex-1">
            {article.excerpt}
          </p>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

type NewsGridClientProps = {
  articles: NewsArticle[];
  heading?: string;
  basePath?: string;
};

export default function NewsGrid({ articles, heading, basePath }: NewsGridClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Get unique categories from articles
  const categories = useMemo(() => {
    const cats = new Set(articles.map((a) => a.category).filter(Boolean));
    return ['All', ...Array.from(cats).sort()];
  }, [articles]);

  // Filter articles by category
  const filteredArticles = useMemo(() => {
    let filtered = articles;
    if (activeCategory !== 'All') {
      filtered = filtered.filter((a) => a.category === activeCategory);
    }
    return filtered;
  }, [articles, activeCategory]);

  return (
    <section className="py-[50px] bg-grid-pattern relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        {heading && (
          <div className="text-center mb-6 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gradient mb-3 title-bg">
              {heading}
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>
        )}

        {/* Category filter buttons */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up-delay-1">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const count = category === 'All'
                ? articles.length
                : articles.filter((a) => a.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 border ${
                    isActive
                      ? 'bg-purple-500/30 text-purple-200 border-purple-400/50 shadow-lg shadow-purple-500/20'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-gray-200 hover:border-white/20'
                  }`}
                >
                  {category}
                  <span className="ml-2 text-xs opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Cards grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <NewsCardItem key={article.id} article={article} basePath={basePath} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No news articles yet.</p>
            <p className="text-gray-500 text-sm mt-2">
              Add JSON files to <code className="bg-white/5 px-2 py-1 rounded">public/news/</code> to get started.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
