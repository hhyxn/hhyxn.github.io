import React from 'react';
import { Download, Calendar, MapPin, GraduationCap } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Applied Science in Computer Engineering",
      institution: "University of Toronto",
      location: "Toronto, ON",
      period: "2022 - 2026 (Expected)",
      details: "Relevant Coursework: Data Structures & Algorithms, Digital Logic Design, Computer Organization, Software Engineering, Embedded Systems"
    }
  ];

  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Tech Company Inc.",
      location: "Toronto, ON",
      period: "Summer 2024",
      details: [
        "Developed web applications using React and Node.js for internal tools",
        "Collaborated with cross-functional teams to deliver features on schedule",
        "Participated in code reviews and agile development processes"
      ]
    },
    {
      title: "Research Assistant",
      company: "University of Toronto",
      location: "Toronto, ON",
      period: "Fall 2023 - Present",
      details: [
        "Assisted in computer vision research projects using Python and OpenCV",
        "Conducted literature reviews and data analysis for academic publications",
        "Mentored undergraduate students in research methodologies"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["C/C++", "Python", "JavaScript", "Java", "VHDL", "Assembly"],
    "Web Technologies": ["React", "Node.js", "HTML/CSS", "MongoDB", "Express.js"],
    "Tools & Platforms": ["Git", "Linux", "Arduino", "FPGA", "MATLAB", "Quartus"],
    "Engineering Skills": ["Digital Circuit Design", "Embedded Systems", "Signal Processing", "PCB Design"]
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Resume
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            My educational background, work experience, and technical skills that make me 
            a well-rounded Computer Engineering student.
          </p>
          <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center space-x-2">
            <Download size={20} />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-yellow-500" size={32} />
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-blue-900 mb-2">{edu.degree}</h4>
                <div className="flex flex-col md:flex-row md:items-center text-gray-600 mb-3 space-y-1 md:space-y-0 md:space-x-4">
                  <span className="font-semibold">{edu.institution}</span>
                  <span className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {edu.location}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-600">{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-8">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{exp.title}</h4>
                  <div className="flex flex-col md:flex-row md:items-center text-gray-600 mb-4 space-y-1 md:space-y-0 md:space-x-4">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-600 flex items-start">
                        <span className="text-yellow-500 mr-2 mt-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;