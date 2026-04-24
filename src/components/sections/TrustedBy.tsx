import { SHOP_URL } from "@/data/nav";

export default function TrustedBy() {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Trusted By</h2>
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-5xl font-extrabold text-amber-500 mb-2">
              197+
            </div>
            <div className="text-lg text-gray-300">Photographers</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-amber-500 mb-2">
              97+
            </div>
            <div className="text-lg text-gray-300">Brands</div>
          </div>
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
