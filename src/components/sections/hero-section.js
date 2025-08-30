export default function HeroSection() {
  const sectionStyle = {
    width: "100%",
    backgroundImage: "url('/your-image.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "100px 20px",
    color: "white",
    textAlign: "center",
  };

  return (
    <div className="bg-hero bg-cover bg-center h-[85vh] flex">
        <div className="w-[70%] mx-auto my-32">
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
        </div>
    </div>
  );
}
