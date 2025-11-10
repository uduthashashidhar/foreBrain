import { Calendar, MapPin } from 'lucide-react';

type Photo = {
  src: string;
  title?: string;
  date?: string;
  location?: string;
};

export default function Gallery() {
  // Import all images from assets folder and derive location captions from filenames
  const imageModules = import.meta.glob('../assets/*.{jpg,jpeg,png}', { eager: true });

  function titleCase(input: string): string {
    return input
      .toLowerCase()
      .split(/\s+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  function formatLocationFromFilename(base: string): string {
    // Remove duplicate markers like (2) and extra underscores/dashes
    let cleaned = base.replace(/\s*\(\d+\)\s*/g, ' ').replace(/[._-]+/g, ' ').trim();
    const lower = cleaned.toLowerCase();

    // Known corrections and preferred names
    const corrections: Record<string, string> = {
      'nit nagpur': 'VNIT Nagpur',
      'corporate trainig': 'Corporate Training',
      'bits hydarabd': 'BITS Hyderabad',
      'iit hydarabad': 'IIT Hyderabad',
      'klh university': 'KLH University',
      'mallareddy university': 'Malla Reddy University',
      'ramachangra college': 'Ramachandra College',
    };

    if (corrections[lower]) return corrections[lower];

    // Generic upgrades for short names
    if (lower === 'klh') return 'KLH University';
    if (lower === 'iit') return 'IIT';
    if (lower === 'kits') return 'KITS';
    if (lower === 'bits') return 'BITS';

    return titleCase(cleaned);
  }

  const excluded = ['logo.png', 'founder.jpg', 'ceo.jpg'];
  const photos: Photo[] = Object.entries(imageModules)
    .filter(([path]) => !excluded.some((name) => path.endsWith(name)))
    .map(([path, mod]) => {
      const url = (mod as { default?: string }).default ?? (mod as unknown as string);
      const filename = path.split('/').pop() || '';
      const base = filename.replace(/\.[^.]+$/, '');
      const location = formatLocationFromFilename(base);
      return {
        src: url as string,
        location,
      };
    });

  return (
    <section id="gallery" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Gallery</h2>
          <p className="text-gray-400 mt-3 max-w-3xl">
            Highlights from our workshops and events — a quick look at the energy, collaboration, and learning.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {photos.map((photo, idx) => (
            <figure
              key={idx}
              className="group relative overflow-hidden rounded-xl neon-border"
            >
              <img
                src={photo.src}
                alt={photo.location || 'Gallery photo'}
                className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <div className="flex items-center space-x-4 text-gray-300 text-sm">
                  {photo.date && (
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1 text-cyan-400" />{photo.date}</span>
                  )}
                  {photo.location && (
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-purple-400" />{photo.location}</span>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}