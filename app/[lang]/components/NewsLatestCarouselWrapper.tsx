import { getNewsArticles } from './getNewsArticles';
import NewsLatestCarousel from './NewsLatestCarousel';
import { NewsArticle } from './NewsCard';

type NewsLatestCarouselWrapperProps = {
  heading: string;
  limit?: number;
  basePath?: string;
};

export default function NewsLatestCarouselWrapper({ heading, limit = 3, basePath }: NewsLatestCarouselWrapperProps) {
  const allArticles = getNewsArticles();
  const latestArticles: NewsArticle[] = allArticles.slice(0, limit);

  if (latestArticles.length === 0) return null;

  return <NewsLatestCarousel articles={latestArticles} heading={heading} basePath={basePath} />;
}
