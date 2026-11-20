import { getNewsArticles } from './getNewsArticles';
import NewsGrid from './NewsGrid';

type NewsGridWrapperProps = {
  heading?: string;
  limit?: number;
  basePath?: string;
};

export default async function NewsGridWrapper({ heading, limit, basePath }: NewsGridWrapperProps) {
  const allArticles = getNewsArticles();
  let articles = allArticles;
  if (limit) {
    articles = articles.slice(0, limit);
  }
  return <NewsGrid articles={articles} heading={heading} basePath={basePath} />;
}
