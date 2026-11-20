import Link from 'next/link';

interface FooterProps {
  dict: {
    footer: {
      social: {
        title: string;
        facebook: string;
        instagram: string;
        youtube: string;
        odysee: string;
        telegram: string;
        whatsapp: string;
      };
      hearUsAt: {
        title: string;
        spotify: string;
        deezer: string;
        soundcloud: string;
        youtubeMusic: string;
        applePodcasts: string;
        amazonMusic: string;
      };
      info: {
        title: string;
        description: string;
        email: string;
      };
      copyright: string;
    };
  };
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  const prefix = `/${lang}`;

  return (
    <footer className="relative bg-[#0a0312] text-gray-400">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1: Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">{dict.footer.social.title}</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.facebook.com/electrodanceworldradiotrance/" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.social.facebook}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/electrodanceworld.radio" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.social.instagram}
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCwkCG-P1mgOrouWrYpLfVKQ" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.social.youtube}
                </a>
              </li>
              <li>
                <a href="https://odysee.com/@ElectroDanceWorld" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.social.odysee}
                </a>
              </li>
              <li>
                <a href="https://t.me/ElectroDanceWorld" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.social.telegram}
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/channel/0029VaCZkiP8PgsIucMd253y" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.social.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Hear us at */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">{dict.footer.hearUsAt.title}</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://open.spotify.com/playlist/08KWxKkBn3cOdsOlBawhEC" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.hearUsAt.spotify}
                </a>
              </li>
              <li>
                <a href="https://www.deezer.com/us/playlist/9637651482" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.hearUsAt.deezer}
                </a>
              </li>
              <li>
                <a href="https://soundcloud.com/musica-nueva-carlos852159/sets/electrodanceworld-radio" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.hearUsAt.soundcloud}
                </a>
              </li>
              <li>
                <a href="https://music.youtube.com/@electrodanceworldradio" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.hearUsAt.youtubeMusic}
                </a>
              </li>
              <li>
                <a href="https://podcasts.apple.com/us/podcast/electrodanceworld-radio-programs/id6836433999" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.hearUsAt.applePodcasts}
                </a>
              </li>
              <li>
                <a href="https://music.amazon.es/podcasts/395c417d-fe32-4249-9a14-9cd78d276a83" className="hover:text-purple-300 transition-colors duration-200">
                  {dict.footer.hearUsAt.amazonMusic}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">{dict.footer.info.title}</h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-500">{dict.footer.info.description}</p>
            <a href="mailto:info@edwradio.com" className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200">
              {dict.footer.info.email}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 pb-16">
        <p className="text-center py-6 text-sm text-gray-500">{dict.footer.copyright}</p>
      </div>
    </footer>
  );
}
