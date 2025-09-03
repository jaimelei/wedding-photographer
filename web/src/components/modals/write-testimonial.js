// import { useState, useEffect } from 'react';

// export default function WriteTestimonialModal({ onClose }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [secondName, setSecondName] = useState('');
//   const [message, setMessage] = useState('');
//   const [charCount, setCharCount] = useState(0);
//   const [error, setError] = useState('');

//   // Animate on open
//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 10);
//     // Lock scroll
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false);
//     setTimeout(onClose, 200);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fullName = `${firstName.trim()} & ${secondName.trim()}`.trim();

//     if (!firstName || !secondName || !message) {
//       setError('All fields are required.');
//       return;
//     }

//     const payload = {
//       name: fullName,
//       message,
//     };

//     try {
//       const res = await fetch('http://localhost:8080/api/post-testimonial', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         throw new Error('Failed to submit testimonial');
//       }

//       handleClose(); // Close modal after successful submission
//     } catch (err) {
//       console.error(err);
//       setError('Failed to send. Please try again.');
//     }
//   };

//   return (
//     <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

//       {/* Modal */}
//       <div className={`relative bg-[#f7e6d7] w-[90%] max-w-[600px] h-auto rounded-lg border-2 border-black shadow-lg p-6 z-10 flex flex-col justify-between transform transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        
//         {/* Close */}
//         <button
//           onClick={handleClose}
//           className="absolute text-2xl font-bold text-gray-700 top-4 right-4"
//         >
//           &times;
//         </button>

//         <h2 className="mb-4 text-2xl text-center font-merriweather_bold">Write Testimonials</h2>

//         <form className="flex flex-col justify-between w-full h-full" onSubmit={handleSubmit}>
//           <div>
//             {/* Name Inputs */}
//             <div className="flex gap-2 mb-4">
//               <input
//                 type="text"
//                 placeholder="Wife's Name"
//                 className="w-full p-2 border border-black rounded font-inter"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Husband's Name"
//                 className="w-full p-2 border border-black rounded font-inter"
//                 value={secondName}
//                 onChange={(e) => setSecondName(e.target.value)}
//               />
//             </div>

//             {/* Message Textarea */}
//             <div>
//               <textarea
//                 maxLength={205}
//                 placeholder="Please write your review here."
//                 className="w-full h-32 p-3 border border-black rounded resize-none font-inter"
//                 value={message}
//                 onChange={(e) => {
//                   setMessage(e.target.value);
//                   setCharCount(e.target.value.length);
//                 }}
//               ></textarea>
//               <div className="mt-1 text-sm text-right text-gray-600 font-inter">{charCount}/205</div>
//             </div>

//             {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full py-3 mt-4 text-white transition bg-black rounded font-inter_bold hover:bg-gray-800"
//           >
//             Submit Testimonial
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

export default function WriteTestimonialModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-[#f7e6d7] w-[90%] max-w-[700px] rounded-lg border-2 border-black shadow-lg p-6 z-10 text-center font-inter">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-2xl font-bold text-gray-700 top-4 right-4"
        >
          &times;
        </button>

        <h2 className="mb-4 text-2xl font-merriweather_bold">Apologies!</h2>
        <p className="text-lg">
          Writing testimonials is temporarily disabled in the deployed version.
        </p>
        <p className="mt-2 text-base text-gray-700">
          Please refer to the short video below to see how the feature works locally.
        </p>

        {/* Video Preview */}
        <div className="mt-6">
          <video
            controls
            muted
            className="w-full border border-black rounded-lg"
          >
            <source src="/assets/videos/write-testimonial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
