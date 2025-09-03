import { useState, useEffect } from 'react';

/*
export default function SeeAllTestimonialsModal({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
    document.body.style.overflow = 'hidden';

    fetchTestimonials();

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/get-all-testimonials');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setTestimonials(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load testimonials.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  return (
    <div className={\`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 \${isVisible ? 'opacity-100' : 'opacity-0'}\`}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className={\`relative bg-[#f7e6d7] w-[90%] max-w-[700px] h-auto max-h-[50vh] rounded-lg border-2 border-black shadow-lg p-6 z-10 flex flex-col transform transition-all duration-300 \${isVisible ? 'scale-100' : 'scale-95'}\`}>
        <button onClick={handleClose} className="absolute text-2xl font-bold text-gray-700 top-4 right-4">
          &times;
        </button>
        <h2 className="mb-4 text-2xl text-center font-merriweather_bold">Read Testimonials</h2>
        <div className="pr-2 space-y-4 overflow-y-auto">
          {loading ? (
            <p className="italic font-inter">Loading...</p>
          ) : error ? (
            <p className="text-red-500 font-inter">{error}</p>
          ) : testimonials.length === 0 ? (
            <p className="italic font-inter">No testimonials found.</p>
          ) : (
            testimonials.map((t, idx) => (
              <div key={idx} className="p-4 bg-white border border-black rounded-lg shadow-sm">
                <p className="mb-2 italic text-gray-800 font-inter">"{t.message}"</p>
                <p className="text-sm text-right text-gray-600 font-inter_bold">— {t.name}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
*/

export default function SeeAllTestimonialsModal({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div className={`relative bg-[#f7e6d7] w-[90%] max-w-[700px] rounded-lg border-2 border-black shadow-lg p-6 z-10 flex flex-col transform transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        {/* Close Button */}
        <button onClick={handleClose} className="absolute text-2xl font-bold text-gray-700 top-4 right-4">
          &times;
        </button>

        <h2 className="mb-4 text-2xl text-center font-merriweather_bold">Apologies!</h2>
        <p className="text-lg text-center font-inter">
          Viewing testimonials is temporarily disabled in the deployed version.
        </p>
        <p className="mt-2 mb-4 text-base text-center text-gray-700 font-inter">
          Please watch the short demo video below to see how it works locally.
        </p>

        <video
          controls
          muted
          className="w-full border border-black rounded-lg"
        >
          <source src="/assets/videos/see-testimonials.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
