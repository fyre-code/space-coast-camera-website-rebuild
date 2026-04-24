import SEOHead from "@/components/SEOHead";
import Testimonials from "@/components/sections/Testimonials";
import TrustedBy from "@/components/sections/TrustedBy";
import CtaStrip from "@/components/sections/CtaStrip";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/Icons";
import { PHONE, PHONE_HREF, SOCIAL_LINKS } from "@/data/nav";

function SocialIcon({ name }: { name: string }) {
  const cls = "w-6 h-6 flex-shrink-0";
  switch (name) {
    case "Facebook": return <FacebookIcon className={cls} />;
    case "Instagram": return <InstagramIcon className={cls} />;
    case "TikTok": return <TikTokIcon className={cls} />;
    case "YouTube": return <YouTubeIcon className={cls} />;
    default: return null;
  }
}

export default function Connect() {
  return (
    <>
      <SEOHead
        title="Contact Space Coast Camera | Camera Rentals in Indialantic, FL"
        description="Contact Space Coast Camera for camera and lens rentals in Indialantic, FL. Visit us at 134 5th Ave STE 103, Indialantic, FL 32903. Call (321) 831-2652."
        keywords="contact Space Coast Camera, camera shop phone number, camera rental Indialantic, photography shop Brevard County, Space Coast Camera address, camera shop hours, camera rentals near me, lens rental contact, Florida camera shop, camera store Indialantic"
        url="https://www.spacecoastcamera.com/connect"
      />

      {/* Page heading */}
      <section className="bg-gray-900 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6">Contact Space Coast Camera</h1>
          <h2 className="text-2xl font-bold mb-8 text-gray-300">Contact Us</h2>
          <a
            href={PHONE_HREF}
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xl px-8 py-4 rounded transition-colors"
          >
            Call Now — {PHONE}
          </a>
        </div>
      </section>

      <Testimonials />

      {/* Address & Social */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Address */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Space Coast Camera Office Address
            </h2>
            <p className="text-gray-600 mb-1">134 5th Ave, Indialantic, FL 32903, USA</p>
            <p className="text-gray-600 mb-6">134 5th Ave STE 103, Indialantic, FL 32903</p>
            <a
              href={PHONE_HREF}
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded transition-colors"
            >
              {PHONE}
            </a>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h2>
            <ul className="space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-amber-500 transition-colors font-medium"
                  >
                    <SocialIcon name={link.name} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustedBy />

      <CtaStrip />
    </>
  );
}
