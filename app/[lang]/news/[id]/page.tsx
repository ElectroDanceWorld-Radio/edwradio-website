import { notFound } from 'next/navigation';
import { getNewsArticles } from '../../components/getNewsArticles';
import NewsArticleDetail from '../../components/NewsArticleDetail';

export function generateStaticParams() {
  const articles = getNewsArticles();
  const langs = ['en', 'es'];
  
  return articles.flatMap((article) =>
    langs.map((lang) => ({ lang, id: article.id }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { id } = await params;
  const articles = getNewsArticles();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return { title: 'Article not found' };
  }

  return {
    title: `${article.title} | EDW Radio`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { id } = await params;
  
  return (
    <div className="animate-fade-in-up">
      <NewsArticleDetail id={id} />
    </div>
  );
}
