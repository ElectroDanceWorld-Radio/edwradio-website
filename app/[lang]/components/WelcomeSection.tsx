import { getAssetPath } from './getAssetPath';

interface WelcomeSectionProps {
  title: string;
  text1a: string;
  text1b: string;
  text2a: string;
  text2b: string;
  imageAlt: string;
  grooverText: string;
}

export default function WelcomeSection({
  title,
  text1a,
  text1b,
  text2a,
  text2b,
  imageAlt,
  grooverText,
}: WelcomeSectionProps) {
  return (
    <section className="py-[50px] bg-subtle-gradient bg-grid-pattern relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="bg-orb bg-orb-purple w-64 md:w-96 h-64 md:h-96 -top-32 md:-top-48 -left-32 md:-left-48" />
      <div className="bg-orb bg-orb-blue w-64 md:w-80 h-64 md:h-80 -bottom-24 md:-bottom-40 -right-24 md:-right-40" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-3 title-bg">{title}</h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Three-column layout: 2 text columns + 1 image column (stacks on mobile) */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Column 1: Text */}
          <div className="flex-1 animate-fade-in-up-delay-1 space-y-4">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">{text1a}</p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">{text1b}</p>
          </div>

          {/* Column 2: Text */}
          <div className="flex-1 animate-fade-in-up-delay-2 space-y-4">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">{text2a}</p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">{text2b}</p>
          </div>

          {/* Column 3: Image with gradient frame */}
          <div className="flex-1 animate-fade-in-up-delay-3">
            <div className="image-frame h-full md:min-h-[300px]">
              <div
                className="w-full h-full min-h-[200px] md:min-h-[300px] bg-cover bg-center"
                style={{ backgroundImage: `url(${getAssetPath('/welcome.png')})` }}
                role="img"
                aria-label={imageAlt}
              />
            </div>
          </div>
        </div>

        {/* Section separator */}
        <div className="section-separator" />

        {/* Groover Widget */}
        <div className="mt-6 glass rounded-xl p-4 animate-fade-in-up-delay-3">
          <iframe
            loading="lazy"
            width="100%"
            height="130"
            src={`https://groover.co/influencer/widget/0.electrodanceworld-radio?color=s-black&ratio=rectangle&format=responsive&size=360&customText=${encodeURIComponent(grooverText)}&picture=true`}
            frameBorder="0"
            title="Groover - Submit your music"
          />
        </div>
      </div>
    </section>
  );
}
