import { SHOP_URL } from "@/data/nav";
import { CameraIcon } from "@/components/Icons";

const STEPS = [
  { number: "1", label: "Browse" },
  { number: "2", label: "Rent" },
  { number: "3", label: "Return" },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center">
                <CameraIcon className="w-10 h-10 text-black" />
              </div>
              <div className="text-6xl font-extrabold text-gray-200 -mt-2 select-none">
                {step.number}
              </div>
              <div className="text-xl font-bold text-gray-900 -mt-4">{step.label}</div>
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
  );
}
