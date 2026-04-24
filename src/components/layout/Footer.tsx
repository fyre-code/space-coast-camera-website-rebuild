import Link from "next/link";
import {
  LOGO_URL,
  LOGO_ALT,
  PHONE,
  PHONE_HREF,
  SOCIAL_LINKS,
} from "@/data/nav";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/Icons";

function SocialIcon({ name }: { name: string }) {
  const iconClass = "w-5 h-5 flex-shrink-0";
  switch (name) {
    case "Facebook":
      return <FacebookIcon className={iconClass} />;
    case "Instagram":
      return <InstagramIcon className={iconClass} />;
    case "TikTok":
      return <TikTokIcon className={iconClass} />;
    case "YouTube":
      return <YouTubeIcon className={iconClass} />;
    default:
      return null;
  }
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Top 3-column section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left: Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <Link href="/">
            <img
              src={LOGO_URL}
              alt={LOGO_ALT}
              className="h-32 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center: Contact & Hours */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Contact Information & Hours
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-gray-400">Mon – Thu:</span> 10am – 5pm EST
            </li>
            <li>
              <span className="text-gray-400">Fri – Sat:</span> By appointment
            </li>
            <li className="pt-2">134 5th Ave STE 103</li>
            <li>Indialantic, FL 32903</li>
            <li className="pt-2">
              <a
                href={PHONE_HREF}
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                {PHONE}
              </a>
            </li>
            <li>
              <a
                href="mailto:joe@spacecoastcamera.com"
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                joe@spacecoastcamera.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Social Media */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
          <ul className="space-y-3">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors"
                >
                  <SocialIcon name={link.name} />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Middle: Privacy & Terms */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="sm:text-right">
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright & Attribution */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center space-y-1">
          <p className="text-xs text-gray-500">
            Copyright &copy; {year} Space Coast Camera &amp; Lens Rental, Inc —
            All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600">
            Powered by{" "}
            <a
              href="https://hyppohq.ai/systems/website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-amber-400 transition-colors"
            >
              HyppoAI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
