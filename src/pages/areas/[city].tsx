import { GetStaticPaths, GetStaticProps } from "next";
import SEOHead from "@/components/SEOHead";
import CtaStrip from "@/components/sections/CtaStrip";
import { AREAS, AreaData } from "@/data/areas";
import { HEADER_BG_URL, PHONE, PHONE_HREF, SHOP_URL, JOE_PHOTO_URL } from "@/data/nav";

interface Props {
  area: AreaData;
}

export default function AreaPage({ area }: Props) {
  return (
    <>
      <SEOHead
        title={`Camera & Lens Rentals in ${area.name}, FL | Space Coast Camera`}
        description={`Space Coast Camera provides camera and lens rentals in ${area.name}, FL. Serving Brevard County photographers and videographers. Contact us at (321) 831-2652.`}
        keywords={`camera rentals ${area.name}, lens rentals ${area.name} FL, Space Coast Camera ${area.name}, photography equipment ${area.name}, camera shop near ${area.name}, Brevard County camera rental, photography rentals Florida, lens cleaning ${area.name}, Space Coast Camera, photography classes near ${area.name}`}
        url={`https://www.spacecoastcamera.com/areas/${area.slug}`}
      />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url('${HEADER_BG_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
            Space Coast Camera is {area.name}&apos;s #1 Stop!
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3 rounded transition-colors"
            >
              Call Now — {PHONE}
            </a>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-bold px-7 py-3 rounded transition-colors"
            >
              Browse Our Gear
            </a>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Visit Us — Serving {area.name} &amp; All of Brevard County
          </h2>
          <div className="inline-grid sm:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">134 5th Ave STE 103</p>
              <p className="text-gray-600">Indialantic, FL 32903</p>
              <a
                href={PHONE_HREF}
                className="block mt-2 text-amber-600 font-semibold hover:text-amber-700"
              >
                {PHONE}
              </a>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">Mon – Thu: 10am – 5pm EST</p>
              <p className="text-gray-600">Fri – Sat: By appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Space Coast Camera for this city */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-stretch">
          {/* Joe Mitchell photo */}
          <div className="rounded-lg overflow-hidden shadow-lg min-h-72">
            <img
              src={JOE_PHOTO_URL}
              alt={`Joe Mitchell, owner of Space Coast Camera, serving photographers in ${area.name}, Florida`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Blurb box — same height as image */}
          <div className="bg-gray-900 text-white rounded-lg p-8 flex flex-col justify-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              The Best Gear for Photographers in {area.name}
            </h2>
            <p className="text-gray-300 leading-relaxed">{area.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded transition-colors"
              >
                Call Now
              </a>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-6 py-3 rounded transition-colors"
              >
                Browse Our Gear
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form embed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Contact Us</h2>
          <iframe
            src="https://hyppohq.io/f/contact-form?embed=true&theme=light"
            style={{ width: "100%", minHeight: "600px", border: "none" }}
            allowFullScreen
            loading="lazy"
            title="Contact Space Coast Camera"
          />
        </div>
      </section>

      {/* Google Reviews embed */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our Customers Say
          </h2>
          <iframe
            src="https://hyppohq.io/w/space-coast-camera-google?embed=true"
            style={{ width: "100%", minHeight: "400px", border: "none" }}
            allowFullScreen
            title="Customer Reviews"
          />
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = AREAS.map((area) => ({ params: { city: area.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const area = AREAS.find((a) => a.slug === params?.city);
  if (!area) return { notFound: true };
  return { props: { area } };
};
