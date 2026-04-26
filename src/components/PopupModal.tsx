import { useState, useEffect } from "react";
import { CloseIcon } from "@/components/Icons";
import { LAW_FIRM_URL } from "@/data/nav";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("popup-shown")) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("popup-shown", "true");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Let Us Tell Your Story
        </h2>

        <p className="text-gray-700 mb-3">
          A trial lawyer owning a camera isn&apos;t as random as it sounds.
        </p>
        <p className="text-gray-700 mb-3">
          Practicing personal injury and trial law requires sophisticated
          storytelling and the connection between visual image creation and
          telling the story of an injured person or family is second nature to
          someone who has been involved with imaging for 48 years.
        </p>
        <p className="text-gray-700 mb-6">
          What it comes down to is precision, accountability, and telling the
          story in an effective manner.
        </p>

        <a
          href={LAW_FIRM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded transition-colors"
        >
          Visit My Law Firm
        </a>
      </div>
    </div>
  );
}
