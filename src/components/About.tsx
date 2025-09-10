import React from 'react';
import PolaroidCarousel from "./PolaroidWall";
import BouncingBubbles from "./BouncingBubbles"; // Add this import
import { Code, Cpu, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Development",
      description: "Proficient in multiple programming languages including C++, C, Python, JavaScript, and Java."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hardware Design",
      description: "Experience with digital circuit design, analog circuit design, FPGA programming, and embedded systems."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem Solving",
      description: "From doing lots of Leetcode!"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Effective team player with experience in agile development and project management."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Computer Engineering student at the University of Toronto, 
            currently in my third year. I love exploring the intersection of healthcare and software, 
            and I'm always eager to learn new technologies and take on challenging projects.
          </p>
        </div>

        {/* My Journey + Carousel */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Fun Moments in Life</h3>

          <div className="mb-6">
            <PolaroidCarousel />
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            When I'm not coding or studying, you can find me exploring Toronto's restaurants. 
            Let me know if you have a recommendation!
          </p>

          {/* Research Paper Section */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center">
            <h4 className="text-2xl font-bold text-blue-900 mb-4">
              Check out my recommendations in downtown near University of Toronto!
            </h4>
            <p className="text-gray-700 mb-4">
              An AI-generated paper with my reviews! (and my co-author's of course)
            </p>

            {/* Small PDF preview */}
            <iframe
              src="/Food_Research.pdf"
              className="w-full h-[600px] md:h-[800px] mx-auto rounded-md shadow-inner"
              title="Food Paper Preview"
            ></iframe>

            {/* Download link */}
            <a
              href="/Food_Research.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-700 underline"
            >
              Download full paper (PDF)
            </a>
          </div>
        </div>

      {/* Skills Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-blue-900">
          My Skills!
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div className="text-yellow-500 mb-4 group-hover:text-blue-700 transition-colors duration-300">
              {skill.icon}
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-3">
              {skill.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-blue-900">
          Languages
        </h3>
      </div>
        {/* Replace the entire bubble section with your new component */}
        <BouncingBubbles />

      </div>
    </section>
  );
};

export default About;