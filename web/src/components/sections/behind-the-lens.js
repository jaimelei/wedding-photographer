export default function BehindTheLensSection() {
  return (
    <div className="flex h-auto bg-white">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[60%] mx-auto pt-20 sm:pt-28 md:pt-28 xl:pt-40 pb-5 sm:pb-6 md:pb-8 xl:pb-20 flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-20">

        {/* PHOTO COLUMN */}
        <div className="w-full lg:w-[40%]">
          <img
            src="/assets/images/photographer.png"
            alt="Behind the lens"
            className="object-cover w-full h-auto shadow-lg rounded-xl"
          />
        </div>

        {/* TEXT COLUMN */}
        <div className="w-full lg:w-[60%]">
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-merriweather_bold sm:mb-7 md:mb-8">
            Behind the Lens
          </h1>
          <p className="mb-5 text-base text-justify sm:text-lg font-inter sm:mb-6">
            Hi, I’m Lee Sumin—a wedding photographer with a heart for romance and an eye for the little moments that tell the big story. I specialize in capturing soft, candid imagery that feels authentic, timeless, and full of emotion. Each wedding is unique, and I strive to preserve the genuine connections, laughter, and fleeting glances that make every love story special.
          </p>
          <p className="mb-5 text-base text-justify sm:text-lg font-inter sm:mb-6">
            Based in Seoul, South Korea, I work with couples across the country, creating images that they can cherish for a lifetime. My approach is relaxed and unobtrusive, allowing couples to be themselves while I document their day with care and creativity. From the intimate details to the grand celebrations, my goal is to ensure that every memory is beautifully remembered.
          </p>
        </div>
      </div>
    </div>
  );
}
