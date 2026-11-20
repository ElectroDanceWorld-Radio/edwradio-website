import { getDictionary } from '../dictionaries';
import NewsLatestCarouselWrapper from '../components/NewsLatestCarouselWrapper';
import NewsGridWrapper from '../components/NewsGridWrapper';

export default async function NewsPage() {
  const dict = await getDictionary();

  return (
    <>
      {/* Latest News Carousel */}
      <NewsLatestCarouselWrapper heading={dict.newsPage.news} limit={3} />

      {/* News section with card grid */}
      <div className="animate-fade-in-up-delay-1">
        <NewsGridWrapper heading="" />
      </div>


    </>
  );
}
