import { HEADER_BG_URL, PHONE, PHONE_HREF, SHOP_URL } from "@/data/nav";

interface CtaButton {
  text: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

interface HeroProps {
  heading: string;
  subHeading?: string;
  ctas?: CtaButton[];
  minHeight?: string;
}

export default function Hero({
  heading,
  subHeading,
  ctas = [],
  minHeight = "60vh",
}: HeroProps) {
  return (
    <section
      className="relative flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: `url('${HEADER_BG_URL}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          {heading}
        </h1>
        {subHeading && (
          <p className="text-lg sm:text-xl text-gray-200 mb-8">{subHeading}</p>
        )}

        {ctas.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {ctas.map((cta, i) => {
              const isExternal = cta.external || cta.href.startsWith("http");
              const base =
                "inline-block font-bold px-7 py-3 rounded transition-colors text-sm sm:text-base";
              let cls = base;
              if (cta.variant === "secondary" || i === 1) {
                cls += " bg-white text-gray-900 hover:bg-gray-100";
              } else if (cta.variant === "outline") {
                cls +=
                  " border-2 border-white text-white hover:bg-white hover:text-gray-900";
              } else {
                cls += " bg-amber-500 hover:bg-amber-400 text-black";
              }
              return isExternal ? (
                <a
                  key={i}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {cta.text}
                </a>
              ) : (
                <a key={i} href={cta.href} className={cls}>
                  {cta.text}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export function CallNowCta() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href={PHONE_HREF}
        className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3 rounded transition-colors"
      >
        Call Now — {PHONE}
      </a>
      <a
        href={SHOP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-7 py-3 rounded transition-colors"
      >
        Browse Our Gear
      </a>
    </div>
  );
}
