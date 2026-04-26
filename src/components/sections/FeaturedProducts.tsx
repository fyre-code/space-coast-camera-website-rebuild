import { SHOP_URL } from "@/data/nav";
import { CameraIcon } from "@/components/Icons";

const PRODUCTS = ["Cameras", "Lenses", "Bundles", "Accessories"];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {PRODUCTS.map((product) => (
            <a
              key={product}
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
            >
              <CameraIcon className="w-14 h-14 text-amber-500 group-hover:text-amber-400 transition-colors" />
              <span className="text-white font-semibold">{product}</span>
            </a>
          ))}
        </div>

        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3 rounded transition-colors"
        >
          Browse Our Gear
        </a>
      </div>
    </section>
  );
}
