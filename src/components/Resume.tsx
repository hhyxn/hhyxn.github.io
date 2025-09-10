import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Resume
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Check out my previous experiences and skills below. You can also download a PDF version of my resume for your reference.
          </p>
          <a
            href="/resume.pdf"
            download="Hannah_Resume.pdf"
            className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Resume Preview */}
        <div className="max-w-4xl mx-auto">
          <iframe
            src="/resume.pdf"
            title="Resume Preview"
            className="w-full h-[800px] border rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
