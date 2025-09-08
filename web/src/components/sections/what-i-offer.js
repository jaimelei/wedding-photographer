import {
  CameraIcon,
  SparklesIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

export default function WhatIOfferSection() {
  return (
    <div className="bg-[#f9eaea] h-auto flex">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[60%] mx-auto py-10 sm:py-12 xl:py-20 flex flex-col lg:flex-row gap-12 xl:gap-16">
        {/* SERVICES COLUMN */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center items-center">
          <h1 className="mb-8 text-3xl text-center sm:text-4xl md:text-5xl xl:text-5xl font-merriweather_bold lg:text-left">
            What I Offer
          </h1>
          <div className="flex flex-col w-full gap-6">
            {/* Engagement Shoots */}
            <div className="flex w-full gap-4 sm:gap-6">
              <div className="flex items-start">
                <SparklesIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#4b3b3b]" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl sm:text-2xl font-inter_bold">
                  Engagement Shoots
                </h2>
                <p className="text-base text-justify sm:text-lg font-inter">
                  A relaxed and fun session to celebrate your love before the
                  big day. We’ll capture natural moments that reflect your
                  personalities and connection. These photos are perfect for
                  invitations, announcements, or just for keeps.
                </p>
              </div>
            </div>

            {/* Full Wedding Photography */}
            <div className="flex w-full gap-4 sm:gap-6">
              <div className="flex items-start">
                <CameraIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#4b3b3b]" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl sm:text-2xl font-inter_bold">
                  Full Wedding Photography
                </h2>
                <p className="text-base text-justify sm:text-lg font-inter">
                  From morning preparations to your final dance, every detail is
                  thoughtfully documented. I focus on genuine emotions and
                  candid interactions throughout the day. The result is a
                  timeless visual story you'll treasure forever.
                </p>
              </div>
            </div>

            {/* Wedding Videography */}
            <div className="flex w-full gap-4 sm:gap-6">
              <div className="flex items-start">
                <VideoCameraIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#4b3b3b]" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl sm:text-2xl font-inter_bold">
                  Wedding Videography
                </h2>
                <p className="text-base text-justify sm:text-lg font-inter">
                  Your day in motion, captured through cinematic highlight reels
                  and full-length films. I offer storytelling-driven videos that
                  preserve not just how it looked, but how it felt. Relive the
                  vows, the laughter, and every meaningful glance for years to
                  come.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PHOTO CAROUSEL COLUMN */}
        <div className="w-full lg:w-[40%] h-auto relative overflow-hidden group">
          {/* Horizontal scroll on base/sm */}
          <div className="relative w-full overflow-hidden lg:hidden">
            <div className="flex gap-4 animate-scroll-horizontal w-max">
              {[...Array(2)].flatMap(() =>
                [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <img
                    key={`scroll-h-${num}-${Math.random()}`}
                    src={`/assets/images/wedding-${num}.jpg`}
                    className="object-cover w-48 h-auto rounded-xl sm:w-60"
                  />
                ))
              )}
            </div>
          </div>

          {/* Vertical scroll on lg+ */}
          <div className="hidden lg:block absolute top-0 left-0 w-full animate-verticalScroll group-hover:[animation-play-state:paused]">
            <div className="flex flex-col gap-4">
              {[...Array(2)].flatMap(() =>
                [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <img
                    key={`scroll-${num}-${Math.random()}`}
                    src={`/assets/images/wedding-${num}.jpg`}
                    className="object-cover w-full h-auto rounded-xl"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
