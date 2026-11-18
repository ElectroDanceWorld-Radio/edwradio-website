import { getDictionary } from './dictionaries';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import NewsCarousel from './components/NewsCarousel';
import CollaborationsSection from './components/CollaborationsSection';

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

      {/* News Section */}
      <NewsCarousel heading={dict.news.heading} news={dict.news.items} />

      {/* Content Sections */}
      <CollaborationsSection
        title={dict.content.section1_title}
        description={dict.content.section1_text}
        cards={dict.content.collaborations}
      />
    </>
  );
}
