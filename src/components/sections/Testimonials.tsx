import { GOOGLE_REVIEW_URL } from "@/data/nav";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Testimonials
        </h2>

        <iframe
          src="https://hyppohq.io/w/space-coast-camera-google?embed=true"
          style={{ width: "100%", minHeight: "400px", border: "none" }}
          allowFullScreen
          loading="lazy"
          title="Customer Reviews"
        />

        <div className="text-center mt-8">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-7 py-3 rounded transition-colors"
          >
            Leave A Review
          </a>
        </div>
      </div>
    </section>
  );
}
