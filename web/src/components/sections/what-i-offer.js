import { CameraIcon, SparklesIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

export default function WhatIOfferSection() {
  return (
    <div className="bg-[#f9eaea] h-auto flex">
      <div className="w-[60%] mx-auto py-20 flex gap-16">
        {/* SERVICES COLUMN */}
        <div className="flex flex-col w-[60%] justify-center items-center">
          <h1 className="text-5xl font-merriweather_bold mb-8">What I Offer</h1>
          <div className="gap-6 flex flex-col">
            {/* Engagement Shoots */}
            <div className="flex gap-6 w-full">
              <div className="flex items-start">
                <SparklesIcon className="w-12 h-12 text-[#4b3b3b]" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-inter_bold">Engagement Shoots</h2>
                <p className="text-lg font-inter text-justify">
                  A relaxed and fun session to celebrate your love before the big day. We’ll capture natural moments that reflect your personalities and connection. These photos are perfect for invitations, announcements, or just for keeps.
                </p>
              </div>
            </div>

            {/* Full Wedding Photography */}
            <div className="flex gap-6 w-full">
              <div className="flex items-start">
                <CameraIcon className="w-12 h-12 text-[#4b3b3b]" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-inter_bold">Full Wedding Photography</h2>
                <p className="text-lg font-inter text-justify">
                  From morning preparations to your final dance, every detail is thoughtfully documented. I focus on genuine emotions and candid interactions throughout the day. The result is a timeless visual story you'll treasure forever.
                </p>
              </div>
            </div>

            {/* Wedding Videography */}
            <div className="flex gap-6 w-full">
              <div className="flex items-start">
                <VideoCameraIcon className="w-12 h-12 text-[#4b3b3b]" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-inter_bold">Wedding Videography</h2>
                <p className="text-lg font-inter text-justify">
                  Your day in motion, captured through cinematic highlight reels and full-length films. I offer storytelling-driven videos that preserve not just how it looked, but how it felt. Relive the vows, the laughter, and every meaningful glance for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PHOTO CAROUSEL COLUMN */}
        <div className="w-[40%] h-auto overflow-hidden relative group">
          <div className="absolute top-0 left-0 w-full animate-verticalScroll group-hover:[animation-play-state:paused]">
            <div className="flex flex-col gap-4">
              <img src="/assets/images/wedding-1.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-2.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-3.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-4.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-5.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-6.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-7.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-8.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-1.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-2.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-3.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-4.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-5.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-6.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-7.jpg" className="rounded-xl w-full" />
              <img src="/assets/images/wedding-8.jpg" className="rounded-xl w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
