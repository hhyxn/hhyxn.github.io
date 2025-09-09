import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Home IoT System",
      description: "Developed a comprehensive IoT system for home automation using Arduino, Raspberry Pi, and a web dashboard. Features include temperature monitoring, lighting control, and security integration.",
      technologies: ["C++", "Python", "React", "MQTT", "Arduino"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg"
    },
    {
      title: "CPU Design Project",
      description: "Designed and implemented a 16-bit RISC processor in VHDL. The project includes instruction set architecture, ALU design, and pipeline implementation with hazard detection.",
      technologies: ["VHDL", "Digital Logic", "Assembly", "ModelSim"],
      github: "https://github.com",
      demo: null,
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
    },
    {
      title: "Machine Learning Trading Bot",
      description: "Built a cryptocurrency trading bot using machine learning algorithms to predict market trends. Implemented backtesting framework and risk management strategies.",
      technologies: ["Python", "TensorFlow", "Pandas", "API Integration"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg"
    },
    {
      title: "Real-Time Chat Application",
      description: "Created a full-stack real-time chat application with user authentication, private messaging, and group chat functionality. Features modern UI and responsive design.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills 
            in both software development and hardware design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;