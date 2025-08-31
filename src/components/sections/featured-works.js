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
    <div className="bg-white h-auto flex">
      <div className="w-[60%] mx-auto py-20 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-merriweather_bold mb-12">Featured Works</h1>
        
        <div className="w-full flex justify-center items-center gap-8">
          {[1, 2, 3].map((id) => {
            const isHovered = hoveredId === id;
            const isAnotherHovered = hoveredId !== null && !isHovered;
            const { img, title, subtitle } = cardContent[id];

            return (
                <div
                key={id}
                onClick={() => handleCardClick(id)}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                    flex-1 min-w-0 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden
                    ${isHovered ? 'scale-110 z-10' : isAnotherHovered ? 'scale-90 opacity-80' : (activeId === id ? 'scale-110 z-10' : 'scale-95')}
                `}
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
                <div className="w-full flex border-2 border-black flex-col items-center justify-start p-8 text-black">
                    <img
                    src={img}
                    alt={title}
                    className="rounded-lg w-full h-[400px] object-cover object-center mb-4"
                    />
                    <h1 className="text-2xl font-bold font-merriweather_bold text-center">{title}</h1>
                    <h2 className="text-lg font-inter text-center mt-1">{subtitle}</h2>
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
