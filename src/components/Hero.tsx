import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate random positions for dots
  const generateDots = (count: number, color: string) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 20 + 10,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 10 + 15,
      color
    }));
  };

  const blueDots = generateDots(15, '#3B82F6');
  const yellowDots = generateDots(12, '#F59E0B');

  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-gray-900 relative overflow-hidden">
      {/* Animated Background Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue Dots */}
        {blueDots.map((dot) => (
          <div
            key={`blue-${dot.id}`}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: dot.color,
              animationDelay: `${dot.animationDelay}s`,
              animationDuration: `${dot.animationDuration}s`,
            }}
          />
        ))}
        
        {/* Yellow Dots */}
        {yellowDots.map((dot) => (
          <div
            key={`yellow-${dot.id}`}
            className="absolute rounded-full opacity-25 animate-float-reverse"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: dot.color,
              animationDelay: `${dot.animationDelay}s`,
              animationDuration: `${dot.animationDuration}s`,
            }}
          />
        ))}

        {/* Large Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-yellow-500 rounded-full opacity-15 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-10 animate-ping-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-full mb-6 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">H</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500"> Xiao Nan Ye</span>
          </h1>
          
          <div className="animate-fade-in-up animation-delay-400">
            <p className="text-2xl md:text-3xl mb-4 text-blue-700 font-semibold">
              You can call me Hannah!
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm a third year computer engineering student at the University of Toronto, passionate about food, ML, and software design and applications.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-600">
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group border-3 border-yellow-500 text-yellow-600 px-10 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          <div className="flex justify-center space-x-8 mb-16 animate-fade-in-up animation-delay-800">
            <a 
              href="https://github.com/hhyxn" 
              className="group p-4 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 border border-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/xiaonan-ye/" 
              className="group p-4 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 border border-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:hannahh.ye@mail.utoronto.ca" 
              className="group p-4 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-600 hover:text-yellow-500 transition-all duration-300 transform hover:scale-110 border border-gray-100"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-300 animate-bounce-gentle p-3 bg-white rounded-full shadow-lg hover:shadow-xl"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;