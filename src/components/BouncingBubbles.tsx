import React, { useState, useEffect, useRef } from 'react';

const BouncingBubbles = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);
  const [draggedBubble, setDraggedBubble] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

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
    const containerWidth = 800;
    const containerHeight = 300;

    const initialBubbles = languages.map((lang, index) => {
      const size = 40 + lang.level * 5;
      const radius = size / 2;
      return {
        id: index,
        name: lang.name,
        level: lang.level,
        x: Math.random() * (containerWidth - size) + radius,
        y: Math.random() * (containerHeight - size) + radius,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
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
        const containerHeight = containerRect.height - 60;

        return prevBubbles.map(bubble => {
          // Don't update position if this bubble is being dragged
          if (draggedBubble === bubble.id) {
            return bubble;
          }

          let newX = bubble.x + bubble.vx;
          let newY = bubble.y + bubble.vy;
          let newVx = bubble.vx;
          let newVy = bubble.vy;

          // Bounce off walls
          if (newX - bubble.radius <= 0 || newX + bubble.radius >= containerWidth) {
            newVx = -newVx;
            newX = Math.max(bubble.radius, Math.min(containerWidth - bubble.radius, newX));
          }

          if (newY - bubble.radius <= 60 || newY + bubble.radius >= containerHeight) {
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
              // Check if either bubble is being dragged
              const bubble1Dragged = draggedBubble === bubble1.id;
              const bubble2Dragged = draggedBubble === bubble2.id;

              if (!bubble1Dragged && !bubble2Dragged) {
                // Normal collision - calculate bounce
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
              }

              // Always separate bubbles to prevent overlap
              const overlap = minDistance - distance;
              const separationX = (dx / distance) * (overlap / 2);
              const separationY = (dy / distance) * (overlap / 2);

              // If one bubble is dragged, only push the other one away
              if (bubble1Dragged) {
                newBubbles[j].x += separationX * 2;
                newBubbles[j].y += separationY * 2;
              } else if (bubble2Dragged) {
                newBubbles[i].x -= separationX * 2;
                newBubbles[i].y -= separationY * 2;
              } else {
                // Neither dragged - push both apart
                newBubbles[i].x -= separationX;
                newBubbles[i].y -= separationY;
                newBubbles[j].x += separationX;
                newBubbles[j].y += separationY;
              }
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
  }, [bubbles.length, draggedBubble]);

  const handleMouseDown = (e, bubble) => {
    e.preventDefault();
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    setDraggedBubble(bubble.id);
    setDragOffset({
      x: mouseX - bubble.x,
      y: mouseY - bubble.y
    });
  };

  const handleMouseMove = (e) => {
    if (draggedBubble === null) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    setBubbles(prevBubbles =>
      prevBubbles.map(bubble =>
        bubble.id === draggedBubble
          ? { ...bubble, x: mouseX - dragOffset.x, y: mouseY - dragOffset.y, vx: 0, vy: 0 }
          : bubble
      )
    );
  };

  const handleMouseUp = (e) => {
    if (draggedBubble !== null) {
      // Give the bubble a small random velocity when released
      setBubbles(prevBubbles =>
        prevBubbles.map(bubble =>
          bubble.id === draggedBubble
            ? { ...bubble, vx: (Math.random() - 0.5) * 3, vy: (Math.random() - 0.5) * 3 }
            : bubble
        )
      );
      setDraggedBubble(null);
    }
  };

  return (
    <div 
      className="mt-16 relative w-full h-96 bg-gray-50 rounded-xl shadow-inner overflow-hidden" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute flex items-center justify-center rounded-full text-white font-semibold transition-all duration-75 ease-linear bubble-shadow"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x - bubble.radius}px`,
            top: `${bubble.y - bubble.radius}px`,
            backgroundColor: 'rgba(59, 130, 246, 0.5)',
            fontSize: `${Math.max(10, bubble.size / 6)}px`,
            backdropFilter: 'blur(1px)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            cursor: draggedBubble === bubble.id ? 'grabbing' : 'grab',
            userSelect: 'none',
          }}
          title={`${bubble.name} - Experience Level ${bubble.level}`}
          onMouseDown={(e) => handleMouseDown(e, bubble)}
        >
          {bubble.name}
        </div>
      ))}
    </div>
  );
};

export default BouncingBubbles;