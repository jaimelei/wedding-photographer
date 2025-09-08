import { useState } from 'react';
import WriteTestimonialModal from '../modals/write-testimonial';
import SeeAllTestimonialsModal from '../modals/see-all-testimonials';

export default function TestimonialsSection() {
  const [showWriteModal, setShowWriteModal] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);

  return (
    <div className="flex h-auto bg-white">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto py-10 sm:py-12 xl:py-20 flex flex-col justify-center items-center">
        <h1 className="mb-10 text-3xl text-center sm:text-4xl md:text-5xl font-merriweather_bold">Testimonials</h1>

        {/* Testimonial Cards */}
        <div className="flex flex-col w-full gap-6 lg:flex-row">
          {/* Portrait Card */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#f9eaea] rounded-lg p-6 h-full flex flex-col justify-between shadow-md">
              <p className="mb-4 text-base italic sm:text-lg font-inter">
                "We couldn’t stop smiling (and crying) when we saw our photos — every image felt like a memory frozen in time. Sumin made us feel completely at ease throughout the entire day. We’ll cherish these photos for the rest of our lives."
              </p>
              <p className="text-sm text-right font-inter_bold">— Samantha & Julian</p>
            </div>
          </div>

          {/* Landscape Cards */}
          <div className="flex flex-col w-full gap-6 lg:w-2/3">
            <div className="bg-[#f9eaea] rounded-lg p-6 shadow-md">
              <p className="mb-4 text-base italic sm:text-lg font-inter">
                "The way our story was captured still gives us goosebumps. Every little glance, laugh, and tear was preserved so beautifully. We’re beyond grateful for the care and artistry behind every shot."
              </p>
              <p className="text-sm text-right font-inter_bold">— Mika & Daniel</p>
            </div>

            <div className="bg-[#f9eaea] rounded-lg p-6 shadow-md">
              <p className="mb-4 text-base italic sm:text-lg font-inter">
                "Working with Sumin was one of the best decisions we made for our wedding. She captured everything so effortlessly. The photos and video feel like magic, we'll treasure them forever."
              </p>
              <p className="text-sm text-right font-inter_bold">— Isabel & Jay</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between w-full mt-6 gap-x-4">
          <button
            className="text-sm sm:text-base font-inter hover:underline whitespace-nowrap"
            onClick={() => setShowAllModal(true)}
          >
            📖 See all reviews here.
          </button>
          <button
            className="text-sm sm:text-base font-inter hover:underline whitespace-nowrap"
            onClick={() => setShowWriteModal(true)}
          >
            ✍️ Write your review here.
          </button>
        </div>

        <hr className="w-full my-10 border-t-4 border-black" />

        {/* Video Section */}
        <video
          src="/assets/videos/video.mp4"
          controls
          className="w-full sm:w-[90%] md:w-[80%] rounded-lg shadow-md"
        />

        {/* Modals */}
        {showWriteModal && (
          <WriteTestimonialModal onClose={() => setShowWriteModal(false)} />
        )}
        {showAllModal && (
          <SeeAllTestimonialsModal onClose={() => setShowAllModal(false)} />
        )}
      </div>
    </div>
  );
}
