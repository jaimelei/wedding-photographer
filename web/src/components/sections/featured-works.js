import { useState } from 'react';
import FeaturedWorksModal from '../modals/featured-works';

export default function FeaturedWorksSection() {
  const [activeId, setActiveId] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const handleCardClick = (id) => {
    setActiveId(id);
    setIsModalOpen(true);
  };

  const cardContent = {
    1: {
      img: '/assets/images/work-1.jpg',
      title: 'Mr. and Mrs. Kim',
      subtitle: 'May 07, 2004',
    },
    2: {
      img: '/assets/images/work-2.jpg',
      title: 'Mr. and Mrs. Ahn',
      subtitle: 'September 01, 2003',
    },
    3: {
      img: '/assets/images/work-3.jpg',
      title: 'Mr. and Mrs. Yoon',
      subtitle: 'August 06, 2003',
    },
  };

  return (
    <div className="flex h-auto bg-white">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto py-10 sm:py-12 xl:py-20 flex flex-col justify-center items-center">
        <h1 className="mb-12 text-3xl text-center sm:text-4xl md:text-5xl font-merriweather_bold">Featured Works</h1>

        <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row">
          {[1, 2, 3].map((id) => {
            const { img, title, subtitle } = cardContent[id];

            // Behavior for md and up
            const isHovered = hoveredId === id;
            const isAnotherHovered = hoveredId !== null && !isHovered;
            const mdScale =
              isHovered
                ? 'md:scale-110 md:z-10'
                : isAnotherHovered
                ? 'md:scale-90 md:opacity-80'
                : activeId === id
                ? 'md:scale-110 md:z-10'
                : 'md:scale-95';

            return (
              <div
                key={id}
                onClick={() => handleCardClick(id)}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`w-full md:flex-1 min-w-0 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ${mdScale}`}
                style={{
                  background: `linear-gradient(180deg, 
                    #f9eaea 0%, 
                    #c8adad 16%, 
                    #bb9797 32%, 
                    #bb9c79 48%, 
                    #c2ac96 64%, 
                    #f7e6d7 80%, 
                    #ffffff 90%, 
                    #ffffff 100%)`,
                }}
              >
                <div className="flex flex-col items-center justify-start w-full p-6 text-black border-2 border-black sm:p-8">
                  <img
                    src={img}
                    alt={title}
                    className="rounded-lg w-full h-[250px] sm:h-[300px] md:h-[200px] object-cover object-center mb-4"
                  />
                  <h1 className="text-xl font-bold text-center sm:text-2xl font-merriweather_bold">{title}</h1>
                  <h2 className="mt-1 text-sm text-center sm:text-lg font-inter">{subtitle}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <FeaturedWorksModal
          id={activeId}
          onClose={() => {
            setIsModalOpen(false);
            setActiveId(2);
          }}
        />
      )}
    </div>
  );
}
