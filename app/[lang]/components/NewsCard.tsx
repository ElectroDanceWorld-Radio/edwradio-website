import { getAssetPath } from './getAssetPath';

export type MediaItem = {
  type: 'image' | 'video' | 'embed_video' | 'iframe';
  src: string;
  alt?: string;
  title?: string;
  poster?: string;
  height?: string;
};

export type NewsArticle = {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  media: MediaItem[];
  tags: string[];
};

function formatDisplayDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function MediaRenderer({ media }: { media: MediaItem[] }) {
  if (media.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {media.map((item, index) => {
        switch (item.type) {
          case 'image':
            return (
              <div
                key={index}
                className="w-full h-48 sm:h-64 rounded-xl overflow-hidden"
              >
                <img
                  src={getAssetPath(item.src)}
                  alt={item.alt || ''}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            );

          case 'video':
            return (
              <div
                key={index}
                className="w-full h-48 sm:h-64 rounded-xl overflow-hidden bg-black"
              >
                <video
                  controls
                  poster={item.poster ? getAssetPath(item.poster) : undefined}
                  className="w-full h-full object-cover"
                >
                  <source src={getAssetPath(item.src)} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );

          case 'embed_video':
            return (
              <div
                key={index}
                className="w-full rounded-xl overflow-hidden"
                style={{ paddingBottom: '56.25%', position: 'relative' }}
              >
                <iframe
                  src={item.src}
                  title={item.title || 'Embedded video'}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            );

          case 'iframe':
            return (
              <div
                key={index}
                className="w-full rounded-xl overflow-hidden"
                style={{
                  height: item.height ? `${item.height}px` : '380px',
                }}
              >
                <iframe
                  src={item.src}
                  title={item.title || 'Embedded content'}
                  className="w-full h-full rounded-xl border-0"
                  loading="lazy"
                />
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

function getThumbnailMedia(media: MediaItem[]): MediaItem | undefined {
  const image = media.find((m) => m.type === 'image');
  if (image) return image;
  const video = media.find((m) => m.type === 'video');
  if (video) return video;
  return media[0];
}

export { MediaRenderer, formatDisplayDate, getThumbnailMedia };
