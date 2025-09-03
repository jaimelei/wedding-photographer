import { useEffect, useState } from 'react';

export default function FeaturedWorksModal({ id, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  const photoCounts = { 1: 3, 2: 5, 3: 2 };
  const count = photoCounts[id] || 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);

    // Lock scroll without triggering a layout shift
    document.body.style.overflow = 'hidden';

    // Animation trigger
    setTimeout(() => setIsVisible(true), 10);

    return () => {
      // Restore scroll
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);

    setTimeout(() => {
      onClose();
    }, 200);
  };

  const goPrev = () => setCurrentIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
  const goNext = () => setCurrentIndex((prev) => (prev === count - 1 ? 0 : prev + 1));

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={`relative bg-[#f7e6d7] w-[90%] max-w-[600px] h-[500px] rounded-lg border-2 border-black shadow-lg p-6 z-10 flex flex-col items-center justify-between transform transition-all duration-300 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Photo Placeholder */}
        <div className="flex-grow flex items-center justify-center w-full">
          <div className="w-[80%] h-[300px] border-2 border-black flex items-center justify-center text-lg font-semibold text-gray-700">
            Sample Photo {currentIndex + 1}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between w-full mt-6 px-8">
          <button
            onClick={goPrev}
            className="px-6 py-2 bg-gray-400 hover:bg-gray-300 rounded font-inter_bold"
          >
            Previous
          </button>
          <button
            onClick={goNext}
            className="px-6 py-2 bg-gray-400 hover:bg-gray-300 rounded font-inter_bold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
