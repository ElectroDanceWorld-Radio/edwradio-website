import { getDictionary } from '../dictionaries';

export default async function MusicPage() {
  const dict = await getDictionary();

  return (
    <section className="py-[50px] bg-subtle-gradient bg-grid-pattern relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="bg-orb bg-orb-purple w-64 md:w-96 h-64 md:h-96 -top-32 md:-top-48 -left-32 md:-left-48" />
      <div className="bg-orb bg-orb-blue w-64 md:w-80 h-64 md:h-80 -bottom-24 md:-bottom-40 -right-24 md:-right-40" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-3 title-bg">
            {dict.music.title}
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Placeholder content */}
        <div className="glass rounded-xl p-6 md:p-8 animate-fade-in-up-delay-1 text-center">
          <p className="text-base md:text-lg text-gray-300">
            {dict.music.text}
          </p>
        </div>
      </div>
    </section>
  );
}
