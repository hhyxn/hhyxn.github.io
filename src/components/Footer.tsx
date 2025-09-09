import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Xiao Nan (Hannah) Ye</h3>
            <p className="text-blue-200 max-w-md mx-auto">
              Computer Engineering Student at University of Toronto.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;