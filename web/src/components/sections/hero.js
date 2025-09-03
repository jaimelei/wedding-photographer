export default function HeroSection() {
  return (
    <div className="relative bg-hero bg-cover bg-center h-[85vh] flex">
      <div className="w-[60%] mx-auto my-32">
        <div className="w-[50%] gap-12 flex flex-col">
          <h1 className="text-6xl font-merriweather_bold">Capturing Love, One Moment at a Time</h1>
          <h2 className="text-2xl font-inter italic">Timeless wedding photography with an editorial touch, preserving every candid moment with elegance.</h2>
          <button
              onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
              }
              }}
              className="font-inter_bold text-white bg-[#4b3b3b] py-3 w-64 rounded-xl transition"
          >
              Book a Consultation
          </button>
        </div>

        {/* BANNER SECTION */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[4.5rem] w-[60%] h-[150px] bg-[#f7e6d7] shadow-xl rounded-xl flex items-center justify-center border-2 border-black">
          <span className="text-4xl font-amoresa w-[45%] text-center mt-7">“You focus on living the moment. I’ll make sure it lasts forever.</span>
        </div>    
      </div>
    </div>
  );
}
