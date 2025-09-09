import React from 'react';
import PolaroidCarousel from "./PolaroidWall";
import { Code, Cpu, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Development",
      description: "Proficient in multiple programming languages including C++, Python, JavaScript, and Java."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hardware Design",
      description: "Experience with digital circuit design, FPGA programming, and embedded systems."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Strong analytical skills and creative approach to solving complex engineering challenges."
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
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            
            {/* Full Width Content */}
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">My Journey</h3>

              {/* 🔄 Replaced first paragraph with carousel */}
              <div className="mb-6">
                <PolaroidCarousel />
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm particularly interested in machine learning, and how I can use AI 
                to make a positive impact on peoples lives. I believe in learning by doing, 
                which is why I'm constantly working on personal projects and seeking opportunities 
                to apply my skills in real-world scenarios.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding or studying, you can find me exploring Toronto's restaurants. 
                Let me know if you have a recommendation!
              </p>
            </div>

          </div>
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

      </div>
    </section>
  );
};

export default About;
