import { getDictionary } from '../dictionaries';
import PlaylistCarousel from '../components/PlaylistCarousel';

export default async function MusicPage() {
  const dict = await getDictionary();

  return (
    <section className="py-[50px] bg-grid-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-3 title-bg">
            {dict.music.title}
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <PlaylistCarousel />

        {/* Podcasts section */}
        <div className="mt-12 animate-fade-in-up-delay-2">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-3 title-bg">
              {dict.music.programs}
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>
          <div style={{ height: '150px', position: 'relative' }}>
            <iframe src="https://embed.podcasts.apple.com/us/podcast/electrodanceworld-radio-programs/id6836433999" style={{ top: '0', left: '0', width: '100%', height: '100%', position: 'absolute', border: '0', borderRadius: '10px' }} sandbox="allow-scripts allow-same-origin" allowFullScreen allow="encrypted-media *; fullscreen *; clipboard-write *"></iframe>
          </div>
        </div>

        {/* Send us section */}
        <div className="mt-12 animate-fade-in-up-delay-2">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-3 title-bg">
              {dict.music.sendUs}
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>
          <div className="glass-light rounded-xl p-6 md:p-8 overflow-hidden">
            <div style={{ position: 'relative', height: '130px' }}>
              <div>
                <iframe width="100%" height="130px" src="https://groover.co/influencer/widget/0.electrodanceworld-radio?color=s-black&ratio=rectangle&format=responsive&size=360&customText=Envíanos tu tema a través de Groover, ¡te garantizamos que lo escucharemos y te daremos nuestra opinión !&picture=true" frameBorder="0" sandbox="allow-scripts allow-same-origin"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
