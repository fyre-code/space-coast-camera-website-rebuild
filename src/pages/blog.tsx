import SEOHead from "@/components/SEOHead";
import { HEADER_BG_URL } from "@/data/nav";

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Camera Rental Tips & Gear Guides Blog | Space Coast Camera"
        description="Space Coast Camera's blog for camera rental tips, gear guides, and photography advice in Indialantic, FL. Contact us at (321) 831-2652."
        keywords="camera rental tips, photography gear guides, lens rental advice, Space Coast Camera blog, camera equipment guides, photography tips Florida, Brevard County photography, camera shop blog, photography advice Space Coast, best camera gear rentals"
        url="https://www.spacecoastcamera.com/blog"
      />

      {/* Mini hero */}
      <section
        className="relative flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url('${HEADER_BG_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "35vh",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Blog</h1>
          <p className="text-gray-300 mt-3 text-lg">
            Camera rental tips, gear guides &amp; photography advice
          </p>
        </div>
      </section>

      {/* Blog embed */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <iframe
            src="https://hyppohq.io/blog/space-coast-camera/camera-rentals-tips-gear-guides?embed=true"
            style={{ width: "100%", minHeight: "600px", border: "none" }}
            allowFullScreen
            loading="lazy"
            title="Space Coast Camera Blog"
          />
        </div>
      </section>
    </>
  );
}
