import { getDictionary } from '../dictionaries';
import { getAssetPath } from '../components/getAssetPath';

const productLinks = [
  'https://shop.beacons.ai/electrodanceworldradio/782a1aea-db78-413e-8255-3063b9fed91b',
  'https://shop.beacons.ai/electrodanceworldradio/2a7f6a1f-3e33-4feb-960d-b444bd4ff503',
  'https://shop.beacons.ai/electrodanceworldradio/0e4da8c4-20f2-4598-8991-ed8e75a3de43',
  'https://shop.beacons.ai/electrodanceworldradio/10d07cb5-0621-42a1-b4b5-1311aaa63012',
  'https://shop.beacons.ai/electrodanceworldradio/e37e0680-d9cb-462a-b3b6-c70bceb1f3e9',
  'https://shop.beacons.ai/electrodanceworldradio/48871cfc-5b98-4db2-a419-85c4d58c9c0f',
  'https://shop.beacons.ai/electrodanceworldradio/e6ac668b-b636-43b7-8187-6dc29d438e61',
  'https://shop.beacons.ai/electrodanceworldradio/65633461-5c89-4c14-ae4b-74384cb90e24',
  'https://shop.beacons.ai/electrodanceworldradio/51b68ff3-677b-43be-a814-1649c752dd6b',
];

export default async function ProductsPage() {
  const dict = await getDictionary();

  return (
    <section className="py-[50px] bg-grid-pattern relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-3 title-bg">
            {dict.header.nav.products}
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up-delay-1">
          {dict.products.items.map((product, index) => (
            <div key={index} className="glass rounded-xl p-6 hover:translate-y-[-4px] transition-transform duration-300 flex flex-col">
              <div
                className="h-48 rounded-lg mb-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${getAssetPath(`/product${index + 1}.webp`)})` }}
              />
              <h3 className="text-xl font-semibold text-white mb-1">{product.title}</h3>
              <p className="text-purple-300 text-sm font-medium mb-2 flex-1">{product.subtitle}</p>
              <a
                href={productLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 text-center block rounded-lg py-2.5 text-white font-semibold no-underline"
              >
                {dict.products.buy}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
