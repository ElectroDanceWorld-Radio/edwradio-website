import { getDictionary } from '../dictionaries';
import NewsCarousel from '../components/NewsCarousel';

export default async function NewsPage() {
  const dict = await getDictionary();

  return (
    <>
      {/* News section */}
      <div className="animate-fade-in-up-delay-1">
        <NewsCarousel heading={dict.newsPage.news} news={dict.news.items} />
      </div>

      {/* Events section */}
      <section className="py-[50px] bg-subtle-gradient bg-grid-pattern relative overflow-hidden">
        <div className="bg-orb bg-orb-purple w-64 md:w-96 h-64 md:h-96 -top-32 md:-top-48 -left-32 md:-left-48" />
        <div className="bg-orb bg-orb-blue w-64 md:w-80 h-64 md:h-80 -bottom-24 md:-bottom-40 -right-24 md:-right-40" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-6 animate-fade-in-up-delay-2">
            <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-3 title-bg">
              {dict.newsPage.events}
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>
        </div>
      </section>

    </>
  );
}
