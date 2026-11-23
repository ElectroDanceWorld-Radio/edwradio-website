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

const Icon = ({ name }: { name: string }) => {
  const base = "w-4 h-4 text-gray-400 group-hover:text-[#8b5cf6] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]";
  switch (name) {
    case 'facebook':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
    case 'instagram':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
    case 'youtube':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
    case 'odysee':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.965 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-3.209-8.167 7.272 7.272 0 0 1-.799 3.218c-.548.957-2.281 2.77-3.264 3.699a.723.723 0 0 0 .056 1.104c.996.74 2.658 2.151 2.788 3.422.176 1.835 1.6 4.02 1.675 4.159a.67.67 0 0 1-.105.327 12.067 12.067 0 0 1-2.03 1.898 2.435 2.435 0 0 1-.807.126c-1.944-.04-1.526-1.866-1.712-2.905s-.78-3.085-2.716-2.788c0 0 .484 4.243-1.489 5.546s-5.843 2.27-6.55-.408 2.46-2.384 2.684-2.384c.223 0 2.233-.632 1.267-2.53-.967-1.898-2.01-3.5-2.01-3.5a11.37 11.37 0 0 0-2.735 1.285 5.42 5.42 0 0 0-1.061.82c-1.065 1.104-2.19 1.713-2.954 1.358a1.368 1.368 0 0 1-.32-.221A11.926 11.926 0 0 1 .1 13.503c.43-.641 2.082-2.038 3.696-2.906 1.304-.702 2.737-.988 3.118-1.355-.671-2.235-1.882-5.703.832-7.33C9.881.634 12.69-.142 13.77 2.958c1.08 3.1.802 3.796 1.267 3.796.465 0 1.608.223 2.09-1.75.356-1.445.574-2.685 1.379-3.087A12 12 0 0 0 12 0a12 12 0 0 0-.035 0zm-.498 2.125c-.353-.019-.78.05-1.303.224 0 0-1.895.52-1.749 2.53.13 1.777 1.08 2.753 3.053 2.01 1.972-.737 2.31-1.264 1.824-2.753-.364-1.117-.765-1.956-1.825-2.011zm.48.726a.249.249 0 0 1 .183.07 1.58 1.58 0 0 1 .232.346.253.253 0 0 1-.197.37.253.253 0 0 1-.233-.131 1.559 1.559 0 0 0-.148-.232.256.256 0 0 1 0-.353.249.249 0 0 1 .163-.07zm3.529.152a.22.22 0 0 1 .192.103.22.22 0 0 1-.07.305.22.22 0 1 1-.122-.408zM12.609 4.27a.253.253 0 0 1 .227.133 1.5 1.5 0 0 1 .102.982.253.253 0 0 1-.246.205h-.049a.253.253 0 0 1-.2-.295 1.013 1.013 0 0 0-.071-.697.253.253 0 0 1 .237-.328zm-8.035.552a.12.12 0 0 1 .029.003.12.12 0 1 1-.147.091.12.12 0 0 1 .118-.094zm15.77 3.419.273.539.593.12-.539.275-.123.592-.272-.539-.592-.123.538-.272zm-17.767.535a.22.22 0 0 1 .193.104.22.22 0 0 1-.07.304.22.22 0 1 1-.123-.408zm16.004 2.79a.258.258 0 0 1 .062.007.258.258 0 1 1-.31.195.258.258 0 0 1 .248-.202zM4.914 16.115a.17.17 0 0 1 .165.14.17.17 0 0 1-.137.197.17.17 0 1 1-.028-.337zm9.769 4.094a.2.2 0 0 1 .036.004.2.2 0 1 1-.233.15.2.2 0 0 1 .197-.154z"/></svg>;
    case 'telegram':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>;
    case 'whatsapp':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
    case 'spotify':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>;
    case 'deezer':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.693 10.024c.381 0 .693-1.256.693-2.807 0-1.55-.312-2.807-.693-2.807C.312 4.41 0 5.666 0 7.217s.312 2.808.693 2.808ZM21.038 1.56c-.364 0-.684.805-.91 2.096C19.765 1.446 19.184 0 18.526 0c-.78 0-1.464 2.036-1.784 5-.312-2.158-.788-3.536-1.325-3.536-.745 0-1.386 2.704-1.62 6.472-.442-1.932-1.083-3.145-1.793-3.145s-1.35 1.213-1.793 3.145c-.242-3.76-.874-6.463-1.628-6.463-.537 0-1.013 1.378-1.325 3.535C6.938 2.036 6.262 0 5.474 0c-.658 0-1.247 1.447-1.602 3.665-.217-1.291-.546-2.105-.91-2.105-.675 0-1.221 2.807-1.221 6.272 0 3.466.546 6.273 1.221 6.273.277 0 .537-.476.736-1.273.32 2.928.996 4.938 1.776 4.938.606 0 1.143-1.204 1.507-3.11.251 3.622.875 6.195 1.602 6.195.46 0 .875-1.023 1.187-2.677C10.142 21.6 11 24 12.004 24c1.005 0 1.863-2.4 2.235-5.822.312 1.654.727 2.677 1.186 2.677.728 0 1.352-2.573 1.603-6.195.364 1.906.9 3.11 1.507 3.11.78 0 1.455-2.01 1.775-4.938.208.797.46 1.273.737 1.273.675 0 1.22-2.807 1.22-6.273-.008-3.457-.553-6.272-1.23-6.272ZM23.307 10.024c.381 0 .693-1.256.693-2.807 0-1.55-.312-2.807-.693-2.807-.381 0-.693 1.256-.693 2.807s.312 2.808.693 2.808Z"/></svg>;
    case 'soundcloud':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"/></svg>;
    case 'youtubemusic':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/></svg>;
    case 'applepodcasts':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.85 3.29.85.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.41 1.44-1.38 2.85M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>;
    case 'amazonmusic':
      return <svg className={base} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>;
    default:
      return null;
  }
};

export default function Footer({ dict, lang }: FooterProps) {
  const prefix = `/${lang}`;

  const socialLinks = [
    { name: 'facebook', href: 'https://www.facebook.com/electrodanceworldradiotrance/', label: dict.footer.social.facebook },
    { name: 'instagram', href: 'https://www.instagram.com/electrodanceworld.radio', label: dict.footer.social.instagram },
    { name: 'youtube', href: 'https://www.youtube.com/channel/UCwkCG-P1mgOrouWrYpLfVKQ', label: dict.footer.social.youtube },
    { name: 'odysee', href: 'https://odysee.com/@ElectroDanceWorld', label: dict.footer.social.odysee },
    { name: 'telegram', href: 'https://t.me/ElectroDanceWorld', label: dict.footer.social.telegram },
    { name: 'whatsapp', href: 'https://www.whatsapp.com/channel/0029VaCZkiP8PgsIucMd253y', label: dict.footer.social.whatsapp },
  ];

  const streamingLinks = [
    { name: 'spotify', href: 'https://open.spotify.com/playlist/08KWxKkBn3cOdsOlBawhEC', label: dict.footer.hearUsAt.spotify },
    { name: 'deezer', href: 'https://www.deezer.com/us/playlist/9637651482', label: dict.footer.hearUsAt.deezer },
    { name: 'soundcloud', href: 'https://soundcloud.com/musica-nueva-carlos852159/sets/electrodanceworld-radio', label: dict.footer.hearUsAt.soundcloud },
    { name: 'youtubemusic', href: 'https://music.youtube.com/@electrodanceworldradio', label: dict.footer.hearUsAt.youtubeMusic },
    { name: 'applepodcasts', href: 'https://podcasts.apple.com/us/podcast/electrodanceworld-radio-programs/id6836433999', label: dict.footer.hearUsAt.applePodcasts },
    { name: 'amazonmusic', href: 'https://music.amazon.es/podcasts/395c417d-fe32-4249-9a14-9cd78d276a83', label: dict.footer.hearUsAt.amazonMusic },
  ];

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
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon name={link.name} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Hear us at */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">{dict.footer.hearUsAt.title}</h3>
            <ul className="space-y-3">
              {streamingLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon name={link.name} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
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
