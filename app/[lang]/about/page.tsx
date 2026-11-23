import { getDictionary } from '../dictionaries';
import AboutPageClient from '../components/AboutPageClient';

export default async function AboutPage() {
  const dict = await getDictionary();

  return <AboutPageClient dict={dict} />;
}
