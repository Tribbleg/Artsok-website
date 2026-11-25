const steps = [
  {
    number: "01",
    icon: "☎",
    title: "Contact Admin",
    text: "Send your artwork to be reviewed.",
  },
  {
    number: "02",
    icon: "⇧",
    title: "Get Featured",
    text: "Your project gets uploaded to Artsok.",
  },
  {
    number: "03",
    icon: "◉",
    title: "Get Discovered",
    text: "Clients and recruiters discover your work.",
  },
];

function Howitworks() {
  return (
    <div
      id="how-it-works"
      className="scroll-mt-20 bg-gray-100 px-4 py-12 sm:px-6 md:py-16"
    >
      <h1 className="mb-8 text-center text-3xl font-extrabold sm:text-4xl md:mb-12">
        How It Works
      </h1>

      {/* 1 column on phones, 3 columns from md up */}
      <div className="mx-auto grid max-w-[1570px] grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
        {steps.map(({ number, icon, title, text }) => (
          <div
            key={number}
            className="relative flex min-h-[200px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[22px] bg-white px-6 py-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95 md:min-h-[235px]"
          >
            <span className="absolute right-5 top-4 text-6xl font-bold leading-none text-gray-100 md:right-7 md:top-5 md:text-[80px]">
              {number}
            </span>

            <div className="relative z-10">
              <div className="mb-3 text-3xl text-red-700 md:mb-4 md:text-4xl">
                {icon}
              </div>
              <h2 className="mb-2 text-xl font-bold md:mb-3 lg:text-2xl">
                {title}
              </h2>
              <p className="text-base text-gray-600 lg:text-lg">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Howitworks;
