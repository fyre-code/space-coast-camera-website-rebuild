import { SHOP_URL } from "@/data/nav";

interface CtaStripProps {
  text?: string;
  href?: string;
  external?: boolean;
  bg?: string;
}

export default function CtaStrip({
  text = "Browse Our Gear",
  href = SHOP_URL,
  external = true,
  bg = "bg-amber-500",
}: CtaStripProps) {
  const className = `${bg} py-10 text-center`;
  const btnClass =
    "inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3 rounded transition-colors text-lg";

  return (
    <div className={className}>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={btnClass}>
          {text}
        </a>
      ) : (
        <a href={href} className={btnClass}>
          {text}
        </a>
      )}
    </div>
  );
}
