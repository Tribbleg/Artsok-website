import Button from "./Button";

// Full class strings are kept intact so Tailwind can detect them.
const artworks = [
  {
    src: "https://artsok.name.ng/img/0c2fc3bf1802d2044b480e7bd2cf28d4.jpg",
    alt: "Child art",
    position: "rotate-[-5deg] mt-4 md:mt-8",
  },
  {
    src: "https://artsok.name.ng/img/712c00b202016d3ce1cd81379d2df609.jpg",
    alt: "Canoe art",
    position: "rotate-[-3deg] -mt-2 md:-mt-6",
  },
  {
    src: "https://artsok.name.ng/img/73ae702959258eb2a9018c0a1cf45a48.jpg",
    alt: "Room artwork",
    position: "rotate-[2deg] mt-3 md:mt-6",
  },
  {
    src: "https://artsok.name.ng/img/bd9387bef57978d2eec18719e97a4621.jpg",
    alt: "Town art",
    position: "rotate-[5deg] -mt-2 md:-mt-6",
  },
  {
    src: "https://artsok.name.ng/img/hero1.jpg",
    alt: "Mbappe art",
    position: "rotate-[7deg] mt-4 md:mt-8",
  },
];

function Hero() {
  return (
    // overflow-x-hidden stops the rotated images from causing sideways scroll
    <div className="overflow-x-hidden px-4 pt-24 sm:px-6 md:pt-28 lg:px-10">
      {/* Hero Heading and Description */}
      <div className="mx-auto max-w-5xl text-center text-black">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          A place to showcase your{" "}
          <span className="text-red-800">masterpiece</span>
        </h1>

        <p className="mx-auto max-w-2xl text-sm font-medium text-gray-600 sm:text-base">
          Artists share their work, clients discover talent, and creativity gets
          the attention it deserves.
        </p>

        {/* Hero Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button
            text="Get Started"
            fontWeight="font-medium"
            color="bg-black"
          />

          <button className="rounded-full border border-gray-800 px-5 py-2 font-medium text-black">
            Explore Art
          </button>
        </div>
      </div>

      {/* Artwork Gallery */}
      <div className="flex flex-wrap items-center justify-center gap-3 px-2 py-10 sm:gap-5 md:gap-8 md:py-12">
        {artworks.map(({ src, alt, position }) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className={`h-40 w-28 cursor-pointer rounded-2xl object-cover object-center shadow-xl transition-all duration-500 ease-in-out hover:z-10 hover:-translate-y-4 hover:rotate-0 hover:scale-110 active:scale-110 sm:h-52 sm:w-36 md:h-60 md:w-44 md:rounded-3xl ${position}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
