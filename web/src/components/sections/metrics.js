export default function MetricsSection() {
  return (
    <div className="bg-[#f7e6d7] h-auto flex">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[60%] mx-auto py-10 sm:py-12 xl:py-20 flex flex-col justify-center items-center">
        <div className="flex flex-col flex-wrap items-center justify-center w-full sm:flex-row gap-y-10 gap-x-10 xl:gap-x-36">
          {/* Wedding Captured */}
          <div className="flex flex-col items-center text-center w-[150px] sm:w-[200px]">
            <h1 className="text-5xl sm:text-6xl font-merriweather_bold">47</h1>
            <hr className="w-full my-2 border-t-2 border-black" />
            <h2 className="text-base sm:text-lg font-inter">Weddings Captured</h2>
          </div>

          {/* Minutes Edited */}
          <div className="flex flex-col items-center text-center w-[150px] sm:w-[200px]">
            <h1 className="text-5xl sm:text-6xl font-merriweather_bold">1230+</h1>
            <hr className="w-full my-2 border-t-2 border-black" />
            <h2 className="text-base sm:text-lg font-inter">Minutes of Video Edited</h2>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col items-center text-center w-[150px] sm:w-[200px]">
            <h1 className="text-5xl sm:text-6xl font-merriweather_bold">3</h1>
            <hr className="w-full my-2 border-t-2 border-black" />
            <h2 className="text-base sm:text-lg font-inter">Years of Experience</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
