export default function HeroSection() {
  return (
    <div className="relative bg-hero bg-cover bg-no-repeat bg-[-685px_center] sm:bg-[-500px_center] md:bg-[-800px_center] lg:bg-center h-[85vh] flex">
      <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%] mx-auto my-6 sm:my-24 md:my-28 lg:my-32">
        <div className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] xl:w-[50%] flex flex-col gap-2 sm:gap-8 md:gap-10 xl:gap-12">
          <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-merriweather_bold">
            Capturing Love, One Moment at a Time
          </h1>
          <h2 className="text-base italic sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-inter">
            Timeless wedding photography with an editorial touch, preserving every candid moment with elegance.
          </h2>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="font-inter_bold text-white bg-[#4b3b3b] py-3 px-4 w-full sm:w-64 mt-60 sm:mt-0 rounded-xl transition"
          >
            Book a Consultation
          </button>
        </div>

        {/* Banner */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[3rem] sm:-bottom-[3.75rem] md:-bottom-[4rem] xl:-bottom-[4.5rem] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] h-[100px] sm:h-[130px] xl:h-[150px] bg-[#f7e6d7] shadow-xl rounded-xl flex items-center justify-center border-2 border-black text-center">
          <span className="text-md w-[90%] sm:w-[55%] xl:w-[45%] mt-4 xl:mt-7 sm:text-xl md:text-2xl xl:text-4xl font-amoresa">
            “You focus on living the moment. I’ll make sure it lasts forever.”
          </span>
        </div>
      </div>
    </div>
  );
}
