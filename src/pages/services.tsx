import SEOHead from "@/components/SEOHead";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import TrustedBy from "@/components/sections/TrustedBy";
import FAQ from "@/components/sections/FAQ";
import CtaStrip from "@/components/sections/CtaStrip";
import { SERVICES_FAQS } from "@/data/faqs";
import { PHONE_HREF, SHOP_URL } from "@/data/nav";

interface ServiceSectionProps {
  title: string;
  description: string;
  cta: { text: string; href: string; external?: boolean };
  imageAlt: string;
  reverse?: boolean;
}

function ServiceSection({ title, description, cta, imageAlt, reverse }: ServiceSectionProps) {
  const imageBlock = (
    <div className="rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center min-h-64">
      <div className="text-center p-8">
        <svg
          className="w-20 h-20 text-gray-400 mx-auto mb-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <p className="text-sm text-gray-500 italic">{imageAlt}</p>
      </div>
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">{description}</p>
      <div>
        {cta.external ? (
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3 rounded transition-colors"
          >
            {cta.text}
          </a>
        ) : (
          <a
            href={cta.href}
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3 rounded transition-colors"
          >
            {cta.text}
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {reverse ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <SEOHead
        title="Camera & Lens Rental Services | Space Coast Camera, FL"
        description="Space Coast Camera provides camera rentals, lens cleaning, sensor cleaning, troubleshooting, and photography classes in Indialantic, FL. Call (321) 831-2652."
        keywords="camera rentals Florida, lens cleaning Brevard County, sensor cleaning service, camera troubleshooting, photography classes Space Coast, camera sales Indialantic, lens rentals Florida, camera repair help, Space Coast Camera services, photography equipment rental"
        url="https://www.spacecoastcamera.com/services"
      />

      <Hero
        heading="See Our Services"
        ctas={[{ text: "Call Now — (321) 831-2652", href: PHONE_HREF }]}
      />

      <ServiceSection
        title="Rentals"
        description={`Need pro gear without the full price tag?\n\nWe offer camera, lens, lighting, and accessory rentals with flexible timeframes and local pickup. Tell us what you're shooting and we'll help you match the right setup.`}
        cta={{ text: "Browse Our Gear", href: SHOP_URL, external: true }}
        imageAlt="Camera on a shelf representing Space Coast Camera's Rentals in Brevard County Florida"
      />

      <ServiceSection
        title="Sensor Cleaning"
        description={`Keep your glass performing at its best with professional cleaning and inspection.\n\nSensor cleanings start at $70 (final investment depends on condition and scope).\n\nContact us to schedule a drop-off.`}
        cta={{ text: "Contact Us", href: "/connect" }}
        imageAlt="Photographer cleaning a lens representing Space Coast Camera's lens cleaning"
        reverse
      />

      <ServiceSection
        title="Troubleshooting"
        description={`Something not working right?\n\nWe help diagnose common camera and lens issues: settings, focus problems, error messages, connectivity, and general setup. We'll get you back to shooting fast.\n\n(If we can't help, we'll find someone who can)`}
        cta={{ text: "Contact Us", href: "/connect" }}
        imageAlt="Photographer troubleshooting camera representing Space Coast Camera's troubleshooting services"
      />

      <ServiceSection
        title="Sales"
        description={`Looking to buy instead of rent?\n\nWe sell select camera and lens gear (availability varies). We will also purchase or trade gear if you're looking to sell.\n\nCall or text first so we can confirm what's in stock and help you choose the right fit.`}
        cta={{ text: "Browse Our Gear", href: SHOP_URL, external: true }}
        imageAlt="Camera on a shelf representing Space Coast Camera's gear sales"
        reverse
      />

      <Testimonials />

      <TrustedBy />

      <FAQ items={SERVICES_FAQS} />

      <CtaStrip />
    </>
  );
}
