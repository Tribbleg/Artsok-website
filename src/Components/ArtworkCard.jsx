import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import sections from "./data/Product.json";

const WHATSAPP_NUMBER = "2347055754048";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function ArtworkCard({ title, artist, image, selected, onSelect }) {
  const message = encodeURIComponent(
    `Hi, I'm interested in "${title}" by ${artist}.`,
  );

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`cursor-pointer overflow-hidden rounded-xl bg-white pb-4 text-center 
        outline-none transition duration-300 ease-out sm:rounded-2xl sm:pb-6
        hover:-translate-y-2 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#25D366]
        ${
          selected
            ? "-translate-y-2 shadow-xl ring-2 ring-[#25D366]"
            : "shadow-sm"
        }`}
    >
      <img
        src={image}
        alt={`${title} by ${artist}`}
        className={`block h-auto w-full transition duration-300 ${
          selected ? "scale-[1.03]" : ""
        }`}
      />

      <h3 className="mt-3 px-2 text-sm font-bold text-gray-900 sm:mt-5 sm:text-lg lg:text-xl">
        {title}
      </h3>
      <p className="mt-1 px-2 text-xs text-gray-500 sm:text-base">
        By {artist}
      </p>

      <a
        href={`${WHATSAPP_URL}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1ebe5b] sm:mt-4 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-base"
      >
        <FaWhatsapp className="text-base sm:text-lg" />
        Message
      </a>
    </div>
  );
}

function ArtworkSection({ heading, artworks, selectedId, setSelectedId }) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-900 sm:mb-6 sm:text-2xl">
        {heading}
      </h2>
      {/* 2 columns on phones and tablets, 4 on large screens */}
      <div className="grid grid-cols-2 items-start gap-3 sm:gap-6 lg:grid-cols-4 lg:items-stretch">
        {artworks.map((art) => (
          <ArtworkCard
            key={art.id}
            {...art}
            selected={selectedId === art.id}
            onSelect={() =>
              setSelectedId(selectedId === art.id ? null : art.id)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function ArtworkGallery() {
  // Only one card stays "lifted" at a time; click it again to put it back.
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section
      id="portfolio"
      className="min-h-screen scroll-mt-20 bg-gray-100 px-4 py-8 sm:px-6 md:py-10 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-10 md:space-y-14">
        {sections.map((section) => (
          <ArtworkSection
            key={section.id}
            heading={section.heading}
            artworks={section.artworks}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-green-200 bg-[#25D366] text-white shadow-lg transition hover:scale-105 sm:bottom-24 sm:right-6 sm:h-16 sm:w-16"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </a>
    </section>
  );
}
