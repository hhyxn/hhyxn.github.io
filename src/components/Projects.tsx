import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {title: "Word Embbedings from LLMs with GloVe Vocabulary (Research)",
      description: "This repository contains precomputed LLaMA embedding vectors generated using the GloVe vocabulary (~350k+ words). These embeddings are taken from the last layer (32) of the LLaMA 3-8B model. It also contains gpt-oss-120b layer 35 and lasyer 36 (last layer) embeddings.",
      technologies: ["C++", "Data Structures", "Algorithms"],
      github: "https://github.com/cimhasgithub/Llama3_Vectors_Glove_Words",
      demo: null,
      image: ""},
    {
      title: "Neighbourhood Explorer (GIS Tool)",
      description: "Implemented pathfinding and optimization algorithms (Dijkstra’s, A*, 3-opt, simulated annealing, multistart) for the TSP problem, improving path cost by 8%. Optimized C++ functions and STL usage for faster computation, improving runtime by 10%. Unable to share code due to academic integrity policies.",
      technologies: ["C++", "Data Structures", "Algorithms"],
      github: null,
      demo: "public/ECE297 - OP2.pdf",
      image: "images/ece297.png"
    },
    {
      title: "Diabetic Retinopathy Detection",
      description: "Built a CNN with transfer learning (VGG-16) and image preprocessing in PyTorch for multi-class DR classification. Applied data augmentation, hyperparameter tuning, and visualization to improve model interpretability and performance.",
      technologies: ["Python", "PyTorch", "VGG-16", "CNN", "Data Augmentation"],
      github: "null",
      demo: "public/Final Report A-1.pdf",
      image: "images/retina.png"
    },
    {
      title: "Cake Stacker",
      description: "A game that lets you build a cake! Coded in C and Assembly to program a DE1SoC FPGA to animate slides of cake layers. Used VGA for display, Audio for music, and Keyboard for user input. Unable to share code due to academic integrity policies.",
      technologies: ["Assembly", "C"],
      github: null,
      demo: "https://drive.google.com/file/d/1NR3XWPORzbv5L1Jc3T8BQl6QSqmxgYmj/view?usp=sharing",
      image: "images/background.jpg"
    },
    {
      title: "Beat Buddy",
      description: "Designed an Arduino-based embedded system using force sensors to measure step frequency and dynamically sync music BPM via the Spotify API. Built a full-stack Flask + React app to interface with the hardware for real-time interaction and music control.",
      technologies: ["Arduino", "Python", "Flask", "React", "Spotify API"],
      github: "https://github.com/hhyxn/MakeUofT",
      demo: "https://youtu.be/LYrQ7irBr7Q",
      image: "images/beatbuddy.jpeg"
    },
    {
      title: "Remember Granny (Hackathon)",
      description: "Created a security education website using HTML/CSS and Groq APIs within 24 hours. Trained an LSTM model for password strength classification with 98.7% accuracy.",
      technologies: ["HTML", "CSS", "Python", "LSTM", "Groq APIs"],
      github: "https://github.com/hhyxn/newhack_FINALFINAL",
      demo: null,
      image: "images/remember.png"
    },
    {
      title: "Reversi",
      description: "Designed a competitive Reversi bot in C using a simplified MiniMax algorithm, ranking in the top 40 among classmates. Improved algorithm efficiency by 10% with a weighted decision matrix and applied advanced debugging techniques. Unable to share code due to academic integrity policies.",
      technologies: ["C", "Algorithms"],
      github: null,
      demo: null,
      image: ""
    },
    
    {
      title: "Piano Tiles",
      description: "Piano Tiles in verilog on an FPGA. Used VGA for display, Audio for sound effects, and Keyboard for user input. Unable to share code due to academic integrity policies.",
      technologies: ["Verilog", "FPGA"],
      github: null,
      demo: "https://drive.google.com/file/d/1HV1ziBJe5mNTIPex0dNBE0rG9t5uvF6S/view?resourcekey",
      image: "images/piano.png"
    },
    {
      title: "Digital Healthcare Software",
      description: "Developed a healthcare informational GUI in Java using AWT with a user-friendly login system. Presented the project to a class of 35, highlighting features and impact.",
      technologies: ["Java"],
      github: "https://github.com/hhyxn/Digital-Health-Care-System",
      demo: null,
      image: ""
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
            in software development, hardware design, and AI applications.
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
                  {project.github && project.github !== "null" && (
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                      <span>
                        {project.demo.endsWith(".pdf")
                          ? "Report"
                          : project.demo.includes("drive.google.com")
                          ? "Video"
                          : "Demo"}
                      </span>
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
