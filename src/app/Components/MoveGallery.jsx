"use client";
import React, { useState } from "react";

const MoveGallery = () => {
  const [stopScroll, setStopScroll] = useState(false);

  const cardData = [
  {
    title: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "Python",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "Java",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "C++",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop&q=60",
  },
  
  {
    title: "Go (Golang)",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "Rust",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&auto=format&fit=crop&q=60",
  },

   {
    title: "HTML5",
    image:
      "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "CSS3",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "React.js",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "Next.js",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "Node.js",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&auto=format&fit=crop&q=60",
  },
  
  {
    title: "Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=60",
  },
];

  return (
    <>
      <style>
        {`
          .marquee-inner {
            animation: marqueeScroll linear infinite;
          }

          @keyframes marqueeScroll {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <div
        className="overflow-hidden w-full relative max-w-6xl mx-auto py-10"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

       
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: `${cardData.length * 2500}ms`,
          }}
        >
          {[...cardData, ...cardData].map((card, index) => (
            <div
              key={index}
              className="w-56 mx-4 h-[20rem] relative overflow-hidden group transition-all duration-300 hover:scale-95 flex-shrink-0 rounded-xl"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm flex items-center justify-center px-4">
                <p className="text-white text-lg font-semibold text-center">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
};

export default MoveGallery;