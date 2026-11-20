import fs from 'fs';
import path from 'path';
import { NewsArticle } from './NewsCard';

export function getNewsArticles(): NewsArticle[] {
  const newsDir = path.join(process.cwd(), 'public', 'news');
  if (!fs.existsSync(newsDir)) {
    return [];
  }

  const files = fs.readdirSync(newsDir).filter((f) => f.endsWith('.json'));
  const articles: NewsArticle[] = [];

  for (const file of files) {
    try {
      const filePath = path.join(newsDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const article: NewsArticle = JSON.parse(content);
      articles.push(article);
    } catch {
      // Skip invalid JSON files
    }
  }

  // Sort by date, newest first
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return articles;
}
