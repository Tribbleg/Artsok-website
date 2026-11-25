import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const WHATSAPP_URL = "https://wa.me/2347055754048";

const links = [
  { label: "About", href: "#about" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: WHATSAPP_URL, external: true },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center px-4 py-4 sm:px-6 md:py-5 lg:px-10">
        <a href="#" className="text-lg font-extrabold text-black">
          Artsok
        </a>

        {/* Desktop menu (md and up) */}
        <ul className="ml-auto hidden items-center space-x-5 font-medium text-gray-800 md:flex lg:space-x-7">
          {links.map(({ label, href, external }) => (
            <li key={href}>
              <a
                href={href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="transition hover:text-red-800"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <Button text="Submit Artwork" color="bg-black" />
          </li>
        </ul>

        {/* Hamburger button (phones only) */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="ml-auto rounded-lg p-2 text-black transition hover:bg-gray-100 md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-gray-100 bg-white px-4 pb-5 pt-3 font-medium text-gray-800 shadow-md sm:px-6 md:hidden"
        >
          {links.map(({ label, href, external }) => (
            <li key={href}>
              <a
                href={href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 transition hover:bg-gray-100 hover:text-red-800"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mt-2 px-3">
            <Button text="Submit Artwork" color="bg-black" />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
