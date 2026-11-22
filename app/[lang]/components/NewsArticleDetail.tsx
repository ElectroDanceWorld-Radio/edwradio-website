import { notFound } from 'next/navigation';
import { getNewsArticles } from './getNewsArticles';
import { MediaItem, MediaRenderer, formatDisplayDate } from './NewsCard';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

type NewsArticleDetailProps = {
  id: string;
};

function VideoGrid({ media }: { media: MediaItem[] }) {
  if (media.length === 0) return null;
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gradient mb-6 title-bg">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {media.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-xl">
            <MediaRenderer media={[item]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NewsArticleDetail({ id }: NewsArticleDetailProps) {
  const articles = getNewsArticles();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  // Separate images from videos/embeds
  const images = article.media.filter((m) => m.type === 'image');
  const videos = article.media.filter((m) => m.type === 'video' || m.type === 'embed_video');
  const iframes = article.media.filter((m) => m.type === 'iframe');

  return (
    <section className="py-[50px] bg-grid-pattern relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Title & Category badge */}
        <div className="mb-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gradient title-bg">
            {article.title}
          </h1>
          {article.category && (
            <div className="mt-3">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {article.category}
              </span>
            </div>
          )}
        </div>

        {/* Date & Author */}
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 pb-8 border-b border-white/5">
          <time>{formatDisplayDate(article.date)}</time>
          {article.author && (
            <>
              <span className="text-gray-600">•</span>
              <span>{article.author}</span>
            </>
          )}
        </div>

        {/* Hero images at top */}
        {images.length > 0 && (
          <div className="mb-8">
            <MediaRenderer media={images} />
          </div>
        )}

        {/* Content with styled markdown */}
        <article className="prose prose-invert max-w-none">
          <ReactMarkdown
            rehypePlugins={[
              [
                rehypeSanitize,
                {
                  // Disallow dangerous elements that shouldn't appear in article content
                  disallowedTags: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'button', 'select', 'textarea'],
                },
              ],
            ]}
            components={{
              h2: ({ children, ...props }) => (
                <h2
                  className="text-2xl font-bold text-gradient mt-10 mb-4 title-bg pb-2 border-b border-white/10"
                  {...props}
                >
                  {children}
                </h2>
              ),
              p: ({ children, ...props }) => (
                <p className="text-gray-300 leading-relaxed text-lg mb-4" {...props}>
                  {children}
                </p>
              ),
              a: ({ children, ...props }) => (
                <a className="text-purple-400 no-underline hover:underline transition-all" {...props}>
                  {children}
                </a>
              ),
              strong: ({ children, ...props }) => (
                <strong className="text-white font-semibold" {...props}>
                  {children}
                </strong>
              ),
              blockquote: ({ children, ...props }) => (
                <blockquote className="border-l-4 border-purple-500/50 pl-4 py-2 my-6 bg-purple-500/5 rounded-r-lg italic text-gray-300" {...props}>
                  {children}
                </blockquote>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>

        {/* Videos grid at bottom */}
        <VideoGrid media={videos} />

        {/* Iframes (like Spotify embeds) */}
        {iframes.length > 0 && (
          <div className="mt-12">
            <MediaRenderer media={iframes} />
          </div>
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-white/5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
