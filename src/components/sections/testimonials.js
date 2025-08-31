export default function MetricsSection() {
  return (
    <div className="flex h-auto bg-white">
      <div className="w-[60%] mx-auto py-20 flex flex-col justify-center items-center">
        <h1 className="mb-12 text-5xl font-merriweather_bold">Testimonials</h1>

        <div className="flex w-full gap-6">
          {/* Portrait Card */}
          <div className="w-1/3">
            <div className="bg-[#f9eaea] rounded-lg p-6 h-full flex flex-col justify-between shadow-md">
              <p className="mb-4 text-lg italic font-inter">
                "We couldn’t stop smiling (and crying) when we saw our photos — every image felt like a memory frozen in time. Sumin made us feel completely at ease throughout the entire day. We’ll cherish these photos for the rest of our lives."
              </p>
              <p className="text-sm text-right font-inter_bold">— Samantha & Julian</p>
            </div>
          </div>

          {/* Landscape Cards */}
          <div className="flex flex-col w-2/3 gap-6">
            <div className="bg-[#f9eaea] rounded-lg p-6 shadow-md">
              <p className="mb-4 text-lg italic font-inter">
                "The way our story was captured still gives us goosebumps. Every little glance, laugh, and tear was preserved so beautifully. We’re beyond grateful for the care and artistry behind every shot."
              </p>
              <p className="text-sm text-right font-inter_bold">— Mika & Daniel</p>
            </div>

            <div className="bg-[#f9eaea] rounded-lg p-6 shadow-md">
              <p className="mb-4 text-lg italic font-inter">
                "Working with Sumin was one of the best decisions we made for our wedding. She captured everything so effortlessly. The photos and video feel like magic, we'll treasure them forever."
              </p>
              <p className="text-sm text-right font-inter_bold">— Isabel & Jay</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between w-full mt-4">
          <button className="text-lg font-inter hover:underline">
            📖 See all reviews here.
          </button>
          <button className="text-lg font-inter hover:underline">
            ✍️ Write your review here.
          </button>
        </div>

        <hr className="w-full my-10 border-t-4 border-black" />

        {/* Video Section */}
        <video
          src="/assets/videos/video.mp4"
          controls
          className="w-[80%] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
