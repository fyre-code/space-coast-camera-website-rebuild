import { useState } from "react";
import { SHOP_URL } from "@/data/nav";
import type { FAQItem } from "@/data/faqs";
import { ChevronDownIcon } from "@/components/Icons";

interface FAQProps {
  items: FAQItem[];
  showCta?: boolean;
}

export default function FAQ({ items, showCta = true }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          FAQs
        </h2>

        <div className="space-y-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 flex-shrink-0 text-amber-500 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {showCta && (
          <div className="text-center mt-10">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3 rounded transition-colors"
            >
              Browse Our Gear
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
