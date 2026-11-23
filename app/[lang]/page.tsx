import { getDictionary } from './dictionaries';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import ProductsCarousel from './components/ProductsCarousel';
import NewsLatestCarouselWrapper from './components/NewsLatestCarouselWrapper';
import PartnersSection from './components/PartnersSection';
import ScrollReveal from './components/ScrollReveal';
import ParallaxSection from './components/ParallaxSection';

export default async function Page() {
  const dict = await getDictionary();
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <ScrollReveal>
        <ParallaxSection speed={0.12}>
          <WelcomeSection
            title={dict.welcome.title}
            text1a={dict.welcome.text1a}
            text1b={dict.welcome.text1b}
            text2a={dict.welcome.text2a}
            text2b={dict.welcome.text2b}
            imageAlt={dict.welcome.imageAlt}
          />
        </ParallaxSection>
      </ScrollReveal>

      {/* Latest News Carousel */}
      <ScrollReveal>
        <ParallaxSection speed={0.18}>
          <NewsLatestCarouselWrapper heading={dict.news.heading} limit={3} basePath="news" />
        </ParallaxSection>
      </ScrollReveal>

      {/* Products Section */}
      <ScrollReveal>
        <ParallaxSection speed={0.1}>
          <ProductsCarousel heading={dict.header.nav.products} products={dict.products.items} buyText={dict.products.buy} />
        </ParallaxSection>
      </ScrollReveal>

      {/* Partners Section */}
      <ScrollReveal>
        <ParallaxSection speed={0.15}>
          <PartnersSection
            title={dict.aboutPage.partners}
            description={dict.content.section1_text}
            partners={dict.aboutPage.partnersList}
          />
        </ParallaxSection>
      </ScrollReveal>
    </>
  );
}
