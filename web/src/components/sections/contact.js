export default function MetricsSection() {
  return (
    <div className="flex h-auto bg-[#d4bbbb]">
      <div className="w-[60%] mx-auto py-12 flex flex-col justify-center items-center text-gray-800">

        {/* Contact + Navigation */}
        <div className="flex flex-col justify-between w-full gap-10 mb-12 md:flex-row">
          
          {/* Contact Information */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-4 text-2xl font-merriweather_bold">Contact Information</h2>
            <p className="mb-2 text-[17px] font-inter">
              📧 Email: <a href="mailto:hello@yourphotography.com" className="underline">hello@yourphotography.com</a>
            </p>
            <p className="mb-2 text-[17px] font-inter">📍 Location: Based in Seoul, South Korea</p>
            <p className="mb-2 text-[17px] font-inter">📞 Phone: 123456789</p>
            <p className="text-[17px] font-inter">📞 Telephone: 02-1234-5678</p>
          </div>

          {/* Navigation */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-4 text-2xl font-merriweather_bold">Navigation</h2>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 text-[17px] font-inter">
                <a href="#home" className="hover:underline">Home</a>
                <a href="#behind-the-lens" className="hover:underline">Behind the Lens</a>
                <a href="#what-i-offer" className="hover:underline">What I Offer</a>
                <a href="#featured-works" className="hover:underline">Featured Works</a>
              </div>
              <div className="flex flex-col gap-2 text-[17px] font-inter">
                <a href="#metrics" className="hover:underline">Metrics</a>
                <a href="#testimonials" className="hover:underline">Testimonials</a>
                <a href="#contact" className="hover:underline">Contact</a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center w-full gap-6 mb-10">
          <hr className="flex-grow border-t border-black" />
          <div className="flex items-center gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/download/521654/facebook.svg"
                alt="Facebook"
                className="w-7 h-7 hover:opacity-70"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/download/521711/instagram.svg"
                alt="Instagram"
                className="w-7 h-7 hover:opacity-70"
              />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/download/455372/tiktok.svg"
                alt="TikTok"
                className="w-7 h-7 hover:opacity-70"
              />
            </a>
          </div>
          <hr className="flex-grow border-t border-black" />
        </div>

        {/* Credits */}
        <div className="space-y-1 text-center">
          <p className="text-md font-inter">
            Website by <strong>J.L.I.</strong> Want one like this?{' '}
            <a href="https://jaimeleiindick.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">Just click here.</a>
          </p>
          <p className="text-gray-700 text-md font-inter">
            © 2025 Lee Sumin Photography. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}
