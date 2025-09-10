import React, { useState, useEffect, useRef } from "react";

const PolaroidWall = () => {
  const polaroids = [
    { id: 1, image: "images/IMG_9467.HEIC", caption: "Exploring Waterloo", rotation: -5 },
    { id: 2, image: "images/IMG_7052.JPG", caption: "First day of Frosh", rotation: 3 },
    { id: 3, image: "images/IMG_1C1286E73381-1.jpeg", caption: "I'm serious when it comes to food", rotation: -2 },
    { id: 4, image: "images/IMG_4333.JPG", caption: "Having lots of fun with my first ciruits lab", rotation: 4 },
    { id: 5, image: "images/IMG_5172.JPG", caption: "First time playing on a Steinway", rotation: -4 },
    { id: 6, image: "images/IMG_5869.JPG", caption: "Study hard, eat good", rotation: 2 },
    { id: 7, image: "images/IMG_9676.HEIC", caption: "Me and my worst fears (Birds)", rotation: -3 },
    { id: 8, image: "images/IMG_0012.JPG", caption: "Leetcode Grind with my coworker", rotation: 5 },
    { id: 9, image: "images/54349385076_2bd35aca7d_o.jpg", caption: "Presenting Lovelytics at UTMIST Mid-year Showcase!", rotation: -1 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 6;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? polaroids.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= polaroids.length ? 0 : prev + 1
    );
  };

  const visiblePolaroids = polaroids.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  // Corkboard canvas
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const browns = ["#D2A679", "#C68642", "#A97448"];
    const blockSize = 1; // small pixel blocks for variation

    for (let y = 0; y < height; y += blockSize) {
      for (let x = 0; x < width; x += blockSize) {
        ctx.fillStyle = browns[Math.floor(Math.random() * browns.length)];
        ctx.fillRect(x, y, blockSize, blockSize);
      }
    }
  }, []);

  return (
    <div className="relative w-full h-[550px] flex items-center justify-center">
      {/* Corkboard with 3D wooden frame */}
      <div className="relative w-[95%] h-[440px] shadow-2xl border-[40px] border-[#ae855c]">
        {/* Frame bevel effect */}
        <div className="absolute inset-0 border-[12px]  border-[#5C2C00] shadow-inner pointer-events-none" />

        {/* Corkboard canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full "
        />

        {/* Fairy lights */}
        <div className="absolute top-8 left-0 w-full h-16 overflow-hidden z-10">
          <svg className="w-full h-full">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M0,30 Q200,25 400,30 T800,30 T1200,30"
              stroke="#8B4513"
              strokeWidth="3"
              fill="none"
            />
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i}>
                <circle
                  cx={100 + i * 120}
                  cy={30}
                  r="6"
                  fill="#FFD700"
                  filter="url(#glow)"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <circle cx={100 + i * 120} cy={30} r="3" fill="#FFF700" />
              </g>
            ))}
          </svg>
        </div>

        {/* Carousel buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-20"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-20"
        >
          ▶
        </button>

        {/* Polaroids */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-6 z-10">
          {visiblePolaroids.map((polaroid) => (
            <div
              key={polaroid.id}
              className="relative"
              style={{
                transform: `rotate(${polaroid.rotation}deg)`,
              }}
            >
              {/* Pin + string */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                <div
                  className="w-0.5 h-8 mx-auto mb-1"
                  style={{
                    background: "linear-gradient(to bottom, #8B4513, #654321)",
                  }}
                />
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg border-2 border-red-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full mx-auto mt-1"></div>
                </div>
                <div className="w-1 h-2 bg-gray-400 mx-auto -mt-1"></div>
              </div>

              {/* Polaroid */}
              <div className="bg-white p-2 pb-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 hover:z-30 relative">
                <div className="w-28 h-32 bg-gray-200 overflow-hidden">
                  <img
                    src={polaroid.image}
                    alt={polaroid.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-1 text-center">
                  <p
                    className="text-[10px] font-handwritten text-gray-700 min-h-[1rem] leading-tight"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    {polaroid.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolaroidWall;
