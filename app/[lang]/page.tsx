import { getDictionary } from './dictionaries';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import ProductsCarousel from './components/ProductsCarousel';
import NewsLatestCarouselWrapper from './components/NewsLatestCarouselWrapper';
import PartnersSection from './components/PartnersSection';

export default async function Page() {
  const dict = await getDictionary();
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <WelcomeSection
        title={dict.welcome.title}
        text1a={dict.welcome.text1a}
        text1b={dict.welcome.text1b}
        text2a={dict.welcome.text2a}
        text2b={dict.welcome.text2b}
        imageAlt={dict.welcome.imageAlt}
      />

      {/* Latest News Carousel */}
      <NewsLatestCarouselWrapper heading={dict.news.heading} limit={3} basePath="news" />

      {/* Products Section */}
      <ProductsCarousel heading={dict.header.nav.products} products={dict.products.items} buyText={dict.products.buy} />

      {/* Partners Section */}
      <PartnersSection
        title={dict.aboutPage.partners}
        description={dict.content.section1_text}
        partners={dict.aboutPage.partnersList}
      />
    </>
  );
}
