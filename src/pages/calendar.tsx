import SEOHead from "@/components/SEOHead";
import Testimonials from "@/components/sections/Testimonials";
import TrustedBy from "@/components/sections/TrustedBy";
import FAQ from "@/components/sections/FAQ";
import CtaStrip from "@/components/sections/CtaStrip";
import { CALENDAR_FAQS } from "@/data/faqs";
import { HEADER_BG_URL } from "@/data/nav";

export default function Calendar() {
  return (
    <>
      <SEOHead
        title="Photography Classes & Events | Space Coast Camera, FL"
        description="Space Coast Camera offers photography classes and events in Indialantic, FL. Book a class on Florida's Space Coast today. Contact us at (321) 831-2652."
        keywords="photography classes Brevard County, photography events Space Coast, camera classes Florida, photography workshops Indialantic, beginner photography classes, Space Coast Camera classes, photography training Florida, book photography class, camera class near me, Space Coast photography"
        url="https://www.spacecoastcamera.com/calendar"
      />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url('${HEADER_BG_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
            Photography Classes &amp; Events on Florida&apos;s Space Coast
          </h1>
          <a
            href="#calendar-embed"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded transition-colors text-lg"
          >
            GO TO CLASSES
          </a>
        </div>
      </section>

      {/* Calendar embed */}
      <section id="calendar-embed" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Classes &amp; Events Calendar
          </h2>
          <iframe
            src="https://hyppohq.io/book/7ace84bc-8514-4972-966a-67d2c05a87d3?embed=true&theme=dark"
            style={{ width: "100%", minHeight: "700px", border: "none" }}
            allowFullScreen
            title="Classes & Events Calendar"
          />
        </div>
      </section>

      <Testimonials />

      <TrustedBy />

      <FAQ items={CALENDAR_FAQS} />

      <CtaStrip />
    </>
  );
}
