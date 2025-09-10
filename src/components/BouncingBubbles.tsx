import React, { useState, useEffect, useRef } from 'react';

const BouncingBubbles = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  
  const [bubbles, setBubbles] = useState([]);
  
  const languages = [
    { name: "Python", level: 20 },
    { name: "C++", level: 18 },
    { name: "C", level: 12 },
    { name: "Java", level: 10 },
    { name: "JavaScript", level: 4 },
    { name: "Assembly", level: 5 },
    { name: "Verilog", level: 5 },
    { name: "MATLAB", level: 4 },
    { name: "HTML/CSS", level: 3 },
    { name: "Typescript", level: 2 },
    { name: "English", level: 25 },
    { name: "Mandarin", level: 15 },
    { name: "Cantonese", level: 10 },
    { name: "French", level: 5 },
  ];

  // Initialize bubbles with physics properties
  useEffect(() => {
    const containerWidth = 800; // approximate container width
    const containerHeight = 300; // approximate container height
    
    const initialBubbles = languages.map((lang, index) => {
      const size = 40 + lang.level * 8;
      const radius = size / 2;
      
      return {
        id: index,
        name: lang.name,
        level: lang.level,
        x: Math.random() * (containerWidth - size) + radius,
        y: Math.random() * (containerHeight - size) + radius,
        vx: (Math.random() - 0.5) * 2, // velocity x
        vy: (Math.random() - 0.5) * 2, // velocity y
        radius: radius,
        size: size,
      };
    });
    
    setBubbles(initialBubbles);
  }, []);

  // Physics simulation
  useEffect(() => {
    if (bubbles.length === 0) return;

    const animate = () => {
      setBubbles(prevBubbles => {
        const container = containerRef.current;
        if (!container) return prevBubbles;
        
        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height - 60; // account for title
        
        return prevBubbles.map(bubble => {
          let newX = bubble.x + bubble.vx;
          let newY = bubble.y + bubble.vy;
          let newVx = bubble.vx;
          let newVy = bubble.vy;
          
          // Bounce off walls
          if (newX - bubble.radius <= 0 || newX + bubble.radius >= containerWidth) {
            newVx = -newVx;
            newX = Math.max(bubble.radius, Math.min(containerWidth - bubble.radius, newX));
          }
          
          if (newY - bubble.radius <= 60 || newY + bubble.radius >= containerHeight) { // 60px for title
            newVy = -newVy;
            newY = Math.max(60 + bubble.radius, Math.min(containerHeight - bubble.radius, newY));
          }
          
          return {
            ...bubble,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        });
      });
      
      // Check for bubble collisions
      setBubbles(prevBubbles => {
        const newBubbles = [...prevBubbles];
        
        for (let i = 0; i < newBubbles.length; i++) {
          for (let j = i + 1; j < newBubbles.length; j++) {
            const bubble1 = newBubbles[i];
            const bubble2 = newBubbles[j];
            
            const dx = bubble2.x - bubble1.x;
            const dy = bubble2.y - bubble1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = bubble1.radius + bubble2.radius;
            
            if (distance < minDistance) {
              // Collision detected - calculate bounce
              const angle = Math.atan2(dy, dx);
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);
              
              // Rotate velocities
              const vx1 = bubble1.vx * cos + bubble1.vy * sin;
              const vy1 = bubble1.vy * cos - bubble1.vx * sin;
              const vx2 = bubble2.vx * cos + bubble2.vy * sin;
              const vy2 = bubble2.vy * cos - bubble2.vx * sin;
              
              // Swap x velocities (elastic collision)
              const finalVx1 = vx2;
              const finalVx2 = vx1;
              
              // Rotate back
              newBubbles[i].vx = finalVx1 * cos - vy1 * sin;
              newBubbles[i].vy = vy1 * cos + finalVx1 * sin;
              newBubbles[j].vx = finalVx2 * cos - vy2 * sin;
              newBubbles[j].vy = vy2 * cos + finalVx2 * sin;
              
              // Separate bubbles to prevent sticking
              const overlap = minDistance - distance;
              const separationX = (dx / distance) * (overlap / 2);
              const separationY = (dy / distance) * (overlap / 2);
              
              newBubbles[i].x -= separationX;
              newBubbles[i].y -= separationY;
              newBubbles[j].x += separationX;
              newBubbles[j].y += separationY;
            }
          }
        }
        
        return newBubbles;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [bubbles.length]);

  return (
    <div className="mt-16 relative w-full h-96 bg-gray-50 rounded-xl shadow-inner overflow-hidden" ref={containerRef}>

      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute flex items-center justify-center rounded-full text-white font-semibold transition-all duration-75 ease-linear bubble-shadow"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x - bubble.radius}px`,
            top: `${bubble.y - bubble.radius}px`,
            backgroundColor: 'rgba(59, 130, 246, 0.5)', // Blue-500 with 50% opacity
            fontSize: `${Math.max(10, bubble.size / 6)}px`,
            backdropFilter: 'blur(1px)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
          }}
          title={`${bubble.name} - Experience Level ${bubble.level}`}
        >
          {bubble.name}
        </div>
      ))}
    </div>
  );
};

export default BouncingBubbles;