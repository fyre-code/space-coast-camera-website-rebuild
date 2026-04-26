import SEOHead from "@/components/SEOHead";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import TrustedBy from "@/components/sections/TrustedBy";
import FAQ from "@/components/sections/FAQ";
import CtaStrip from "@/components/sections/CtaStrip";
import { CameraIcon } from "@/components/Icons";
import { ABOUT_FAQS } from "@/data/faqs";
import { PHONE_HREF, SHOP_URL, JOE_PHOTO_URL, LAW_FIRM_URL } from "@/data/nav";

const WHAT_WE_DO = [
  "Lens Cleaning & Troubleshooting",
  "Camera & Lens Rentals",
  "Photography Classes",
];

const WHY_US = [
  { label: "Local Brevard County Business" },
  { label: "High Quality Equipment" },
  { label: "Fast Pickup" },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Space Coast Camera | Camera Rentals in Indialantic, FL"
        description="Space Coast Camera is a local camera and lens rental shop in Indialantic, FL, serving Brevard County photographers and videographers. Call (321) 831-2652."
        keywords="about Space Coast Camera, Joe Mitchell photographer, camera shop Indialantic, lens rentals Brevard County, photography shop Florida, camera equipment rental, local camera store, Space Coast Camera owner, photography classes Brevard, camera and lens rental"
        url="https://www.spacecoastcamera.com/about"
      />

      <Hero
        heading="About Space Coast Camera"
        ctas={[
          { text: "Call Now — (321) 831-2652", href: PHONE_HREF },
          { text: "Browse Our Gear", href: SHOP_URL, external: true, variant: "secondary" },
        ]}
      />

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Space Coast Camera is a local, creator-first shop serving photographers and
              videographers across Florida&apos;s Space Coast. We make it easy to get the right gear
              for the job—whether you&apos;re renting a pro camera or lens for a weekend shoot, need
              help troubleshooting your setup, or want hands-on training to level up your skills.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We&apos;re built around three things: reliable equipment, clear guidance, and real support
              from people who actually know the craft. From first-time renters to working
              professionals, our goal is simple—help you capture better work with less guesswork.
            </p>
            <a
              href="/connect"
              className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-7 py-3 rounded transition-colors"
            >
              Contact Us
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={JOE_PHOTO_URL}
              alt="Joe Mitchell, owner of Space Coast Camera, photographer and local business owner"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {WHAT_WE_DO.map((item) => (
              <div
                key={item}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm"
              >
                <CameraIcon className="w-14 h-14 text-amber-500" />
                <span className="font-semibold text-gray-900 text-center">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />

      {/* Meet The Owner */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Meet The Owner:</h2>
          <h3 className="text-2xl font-bold text-amber-500 text-center mb-10">Joe Mitchell</h3>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Space Coast Camera is owned by Joe Mitchell—a lifelong creative with a deep respect
                for the craft behind a great image. He&apos;s been taking pictures for 48 years,
                starting when he was 12.
              </p>
              <p>
                Joe built Space Coast Camera to give local photographers and filmmakers an easier way
                to access professional gear, get real help when something isn&apos;t working, and
                learn skills that actually translate to better results on shoots.
              </p>
              <p>
                Joe is also the founder of The Mitchell Law Firm, where he represents clients across
                Florida. While the camera shop and the law firm are separate businesses, the same
                standards drive both: attention to detail, clear communication, and doing what you
                said you&apos;d do.
              </p>
              <div className="pt-2">
                <a
                  href={LAW_FIRM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3 rounded transition-colors"
                >
                  Joe&apos;s Law Firm
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={JOE_PHOTO_URL}
                alt="Joe Mitchell, owner of Space Coast Camera, photographer and local business owner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            {WHY_US.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm"
              >
                <CameraIcon className="w-14 h-14 text-amber-500" />
                <span className="font-semibold text-gray-900 text-center">{item.label}</span>
              </div>
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

      {/* Why Would A Lawyer Own A Camera Company */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Would A Lawyer Own A Camera Company?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A trial lawyer owning a camera isn&apos;t as random as it sounds!
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Practicing personal injury and trial law requires sophisticated storytelling and the
            connection between visual image creation and telling the story of an injured person or
            family is second nature to someone who has been involved with imaging for 48 years.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            What it comes down to is precision, accountability, and telling the story in an
            effective manner.
          </p>
          <a
            href={LAW_FIRM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3 rounded transition-colors"
          >
            Visit Joe&apos;s Law Firm
          </a>
        </div>
      </section>

      <TrustedBy />

      <FAQ items={ABOUT_FAQS} showCta={false} />

      <CtaStrip text="Browse Our Gear" />
    </>
  );
}
