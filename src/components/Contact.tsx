import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sent, setSent] = useState(false); // track if already sent

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(formData.email);
  const isMessageValid = formData.message.length > 0 && formData.message.length <= 500;
  const isFormValid = isEmailValid && isMessageValid && formData.name && formData.subject;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sent) return; // block multiple submissions
    if (!isFormValid) return; // block invalid form

    emailjs
      .send(
        "service_49gow2n", // from EmailJS
        "template_aphctcc", // from EmailJS
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "HDju2lz_zL_e4yTXa" // Public key from EmailJS
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setSent(true); // prevent another email
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Oops! Something went wrong. Check console for details.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having 
            a conversation about technology. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-blue-900 mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-yellow-500 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                  <p className="text-gray-600">hannahh.ye@mail.utoronto.ca</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-yellow-500 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Location</h4>
                  <p className="text-gray-600">Toronto, Ontario, Canada</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-yellow-500 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Phone</h4>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/hhyxn" 
                  className="bg-white p-3 rounded-full shadow-sm text-gray-600 hover:text-blue-700 hover:shadow-md transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/xiaonan-ye/" 
                  className="bg-white p-3 rounded-full shadow-sm text-gray-600 hover:text-blue-700 hover:shadow-md transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={sent}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={sent}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 ${
                      formData.email && !isEmailValid ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your@email.com"
                  />
                  {formData.email && !isEmailValid && (
                    <p className="text-sm text-red-500 mt-1">Invalid email address</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={sent}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={500}
                  disabled={sent}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
                <div className="flex justify-between text-sm mt-1">
                  <span className={isMessageValid ? "text-gray-500" : "text-red-500"}>
                    {formData.message.length}/500
                  </span>
                  {!isMessageValid && (
                    <span className="text-red-500">Message must be 1–500 characters</span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={sent || !isFormValid}
                className="w-full bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                <span>{sent ? "Message Sent" : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
