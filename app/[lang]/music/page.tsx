import { getDictionary } from '../dictionaries';

export default async function MusicPage() {
  const dict = await getDictionary();

  return (
    <section className="py-[50px] bg-subtle-gradient bg-grid-pattern relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="bg-orb bg-orb-purple w-64 md:w-96 h-64 md:h-96 -top-32 md:-top-48 -left-32 md:-left-48" />
      <div className="bg-orb bg-orb-blue w-64 md:w-80 h-64 md:h-80 -bottom-24 md:-bottom-40 -right-24 md:-right-40" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-3 title-bg">
            {dict.music.title}
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up-delay-1">
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/08KWxKkBn3cOdsOlBawhEC?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/027A3DN89FURE5SLdHVE5E?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/0k1L3fJr5ok5r8qWzjBttW?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/4iykerHeuREdyOt30t9xNV?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/7JHN9IB9sMXlP00fI3vWGR?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/24WCocynQjuFpVinjYZhst?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/1QYtD3jOTOcbKxaVuOgiOz?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/1YKBWIZxdvUaKTyyQlFk33?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/1Bj53BgkOH43MiC3VwVI3F?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/5Kbav9vvkHQ0gVQpihIXxP?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/7li1nJESdGcs8xbZuW99gr?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/6ZH9nKVWusH92YR0N9t3NK?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/0Qt12c5t1HAh67A562idlC?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/4hvRARa0aprMx4GOwYgj6A?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/4Xngyx6OtQiqLNOOg49APz?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/0jJQYRcaCYe65gICSStczm?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/5oyEbiMll95HQWl52duLP2?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/7ofEAtnLdg5mMjNrNPHEgt?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="glass rounded-xl overflow-hidden">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/4wDMJCzl5dsxwzmSM38QuP?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>

        {/* Programs section */}
        <div className="mt-12 animate-fade-in-up-delay-2">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-3 title-bg">
              {dict.music.programs}
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
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
          <div className="glass rounded-xl p-6 md:p-8 overflow-hidden">
            <div style={{ position: 'relative', height: '130px' }}>
              <div>
                <iframe width="100%" height="130px" src="https://groover.co/influencer/widget/0.electrodanceworld-radio?color=s-black&ratio=rectangle&format=responsive&size=360&customText=Envíanos tu tema a través de Groover, ¡te garantizamos que lo escucharemos y te daremos nuestra opinión !&picture=true" frameBorder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
