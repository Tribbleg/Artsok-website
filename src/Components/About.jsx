import { Handshake } from "lucide-react";

function About() {
  return (
    <div id="about" className="bg-white px-4 py-10 sm:px-6 md:px-14 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Main two-column layout: stacked on phones/tablets, side by side on lg+ */}
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-10">
          {/* Left side - About content and feature cards */}
          <div className="w-full lg:w-1/2">
            <button className="mt-4 rounded-full bg-red-800 px-4 py-2 text-sm font-medium text-white">
              About Artsok
            </button>

            <div className="mt-3">
              <h1 className="mb-3 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                Where Creativity Meets{" "}
                {/* Forced line break only on md+; on phones the text wraps naturally */}
                <br className="hidden md:block" />
                <span className="text-red-800">opportunity</span>
              </h1>

              <p className="mt-5 text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
                Artsok is a platform designed to help creative talents showcase
                their masterpieces to the world. Artists, designers, and digital
                creators can display their work while clients and recruiters
                discover amazing talent.
              </p>
            </div>

            {/* Feature cards */}
            <section className="mt-8">
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="group flex cursor-pointer items-center gap-4 rounded-xl bg-white px-4 py-4 shadow-[0_5px_20px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7 shrink-0 text-red-800 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10c0-.55-.45-1-1-1h-2.1a2.9 2.9 0 0 1-2.9-2.9c0-.55.15-1.08.42-1.53A10 10 0 0 0 12 2Zm-5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm2-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm5-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                  </svg>

                  <div className="min-w-0">
                    <h2 className="mb-1 text-base font-semibold text-black sm:text-lg">
                      Showcase Masterpieces
                    </h2>
                    <p className="text-sm text-gray-600">
                      Display your best creative works.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group flex cursor-pointer items-center gap-4 rounded-xl bg-white px-4 py-4 shadow-[0_5px_20px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7 shrink-0 text-red-800 transition-transform duration-500 group-hover:scale-110"
                  >
                    <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-7.5 9a7.5 7.5 0 0 1 15 0v.5h-15V21Zm6-6.5 1.5 2 1.5-2 1 7h-5l1-7Z" />
                  </svg>

                  <div className="min-w-0">
                    <h2 className="mb-1 text-base font-semibold text-black sm:text-lg">
                      Get Discovered
                    </h2>
                    <p className="text-sm text-gray-600">
                      Recruiters and clients find your talent.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group flex cursor-pointer items-center gap-4 rounded-xl bg-white px-4 py-4 shadow-[0_5px_20px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]">
                  <Handshake
                    size={30}
                    strokeWidth={2}
                    className="shrink-0 text-red-800 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  />

                  <div className="min-w-0">
                    <h2 className="mb-1 text-base font-semibold text-black sm:text-lg">
                      Connect with Clients
                    </h2>
                    <p className="text-sm text-gray-600">
                      Collaborate and get new opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right side - on lg+ the image stretches to match the left column's height */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl sm:aspect-[16/10] lg:mt-4 lg:aspect-auto lg:w-1/2">
            <img
              src="https://artsok.name.ng/img/about-art.jpg"
              alt="Creative artwork"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
