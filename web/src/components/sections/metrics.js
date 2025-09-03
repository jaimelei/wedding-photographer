export default function MetricsSection() {
  return (
    <div className="bg-[#f7e6d7] h-auto flex">
      <div className="w-[60%] mx-auto py-20 flex flex-col justify-center items-center">
        <div className="flex justify-center w-full gap-36">
          <div className="flex flex-col items-center text-center w-60">
            <h1 className="text-6xl font-merriweather_bold">47</h1>
            <hr className="w-full my-2 border-t-2 border-black" />
            <h2 className="text-xl font-inter">Weddings Captured</h2>
          </div>

          <div className="flex flex-col items-center text-center w-60">
            <h1 className="text-6xl font-merriweather_bold">1230+</h1>
            <hr className="w-full my-2 border-t-2 border-black" />
            <h2 className="text-xl font-inter">Minutes of Video Edited</h2>
          </div>

          <div className="flex flex-col items-center text-center w-60">
            <h1 className="text-6xl font-merriweather_bold">3</h1>
            <hr className="w-full my-2 border-t-2 border-black" />
            <h2 className="text-xl font-inter">Years of Experience</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
