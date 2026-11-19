import { getAssetPath } from './getAssetPath';
import { getDictionary } from '../dictionaries';

export default async function Hero() {
  const dict = await getDictionary();
  return (
    <section className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center overflow-hidden">
      {/* Static background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${getAssetPath('/hero.webp')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1a1a2e',
        }}
      />

      {/* Animated gradient overlay - light shader */}
      <div
        className="absolute inset-0 z-1 animate-gradient-shift"
        style={{
          background: 'linear-gradient(135deg, rgba(26,26,46,0.8) 0%, rgba(42,10,74,0.6) 25%, rgba(139,92,246,0.3) 50%, rgba(42,10,74,0.6) 75%, rgba(26,26,46,0.8) 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Shimmer line effect */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute h-0.5 w-full animate-shimmer"
          style={{
            top: '50%',
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)',
          }}
        />
      </div>

      {/* Branding: Logo | Tagline */}
      <div className="relative z-20 flex items-center gap-4 md:gap-8 max-w-5xl mx-auto px-4">
        {/* Logo - left, smaller */}
        <img
          src={getAssetPath('/logo.webp')}
          alt="EDW Radio"
          className="h-24 md:h-32 lg:h-40 flex-shrink-0 object-contain"
        />
        {/* Vertical divider bar */}
        <div className="hidden md:block w-px h-24 md:h-32 bg-gradient-to-b from-transparent via-purple-400 to-transparent flex-shrink-0" />
        {/* Tagline - right, big text */}
        <div className="text-center md:text-left">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-gradient leading-snug title-bg">
            {dict.home.tagline}
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl text-purple-300 leading-snug mt-1">
            {dict.home.taglineSub}
          </p>
        </div>
      </div>

    </section>
  );
}
