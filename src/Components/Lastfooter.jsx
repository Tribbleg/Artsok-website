import { FaWhatsapp, FaBehance, FaDribbble } from "react-icons/fa";

const socials = [
  { label: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/2347055754048" },
  { label: "Behance", icon: FaBehance, href: "https://www.behance.net/" },
  { label: "Dribbble", icon: FaDribbble, href: "https://dribbble.com/" },
];

export default function Lastfooter() {
  return (
    <footer className="mt-10 bg-black px-4 py-6 sm:px-6 md:mt-14 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-300 sm:text-base md:text-lg">
          © 2026 Artsok. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-2.5 text-xl text-white transition hover:bg-white/10 hover:text-[#25D366]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
