export default function BehindTheLensSection() {
  return (
    <div className="bg-white h-auto flex">
        <div className="w-[60%] mx-auto pt-40 pb-20 flex gap-20">
            {/* PHOTO COLUMN */}
            <div className="w-[40%]">
                <img
                    src="/assets/images/photographer.png"
                    alt="Behind the lens"
                    className="w-full h-auto rounded-xl object-cover shadow-lg"
                />
            </div>

            {/* TEXT COLUMN */}
            <div className="w-[60%]">
                <h1 className="text-5xl font-merriweather_bold mb-8">Behind the Lens</h1>
                <p className="text-lg font-inter mb-6 text-justify">
                    Hi, I’m Lee Sumin—a wedding photographer with a heart for romance and an eye for the little moments that tell the big story. I specialize in capturing soft, candid imagery that feels authentic, timeless, and full of emotion. Each wedding is unique, and I strive to preserve the genuine connections, laughter, and fleeting glances that make every love story special.
                </p>
                <p className="text-lg font-inter mb-6 text-justify">
                    Based in Seoul, South Korea, I work with couples across the country, creating images that they can cherish for a lifetime. My approach is relaxed and unobtrusive, allowing couples to be themselves while I document their day with care and creativity. From the intimate details to the grand celebrations, my goal is to ensure that every memory is beautifully remembered.
                </p>
            </div>
        </div>
    </div>
  );
}
