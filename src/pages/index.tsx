import SEOHead from "@/components/SEOHead";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";
import HowItWorks from "@/components/sections/HowItWorks";
import TrustedBy from "@/components/sections/TrustedBy";
import FAQ from "@/components/sections/FAQ";
import CtaStrip from "@/components/sections/CtaStrip";
import { HOME_FAQS } from "@/data/faqs";
import { PHONE_HREF, SHOP_URL } from "@/data/nav";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Space Coast Camera | Camera & Lens Rentals in Indialantic, FL"
        description="Space Coast Camera provides camera and lens rentals in Indialantic, FL. Brevard County's only local camera shop. Contact us at (321) 831-2652."
        keywords="camera rentals Indialantic FL, lens rentals Brevard County, Space Coast Camera, photography equipment rental, camera shop Florida, photography classes Space Coast, lens cleaning service, camera rental near me, Brevard photography, Florida camera shop"
        url="https://www.spacecoastcamera.com/"
      />

      <Hero
        heading="Brevard's One and Only Camera & Lens Store!"
        ctas={[
          { text: "Call Now — (321) 831-2652", href: PHONE_HREF },
          { text: "Browse Our Gear", href: SHOP_URL, external: true, variant: "secondary" },
          { text: "Book A Class", href: "/calendar", variant: "outline" },
        ]}
      />

      <FeaturedProducts />

      <Testimonials />

      <HowItWorks />

      <TrustedBy />

      <FAQ items={HOME_FAQS} />

      <CtaStrip />
    </>
  );
}
