function Footer() {
  return (
    <footer className="rounded-2xl bg-gradient-to-br from-[#111111] to-[#3f3f3f] px-4 py-14 text-center sm:px-6 md:rounded-3xl md:py-20 lg:py-24">
      <h1 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
        Ready to get discovered for your creativity?
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-sm font-extralight text-gray-300 sm:text-base md:text-lg">
        Submit your artwork and let clients and recruiters connect with you
        directly.
      </p>

      <a
        href="#"
        className="mt-8 inline-block rounded-full bg-[#b5271b] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#9a2016] sm:px-8 sm:py-3.5 sm:text-base md:py-4"
      >
        Submit Your Artwork
      </a>
    </footer>
  );
}

export default Footer;
