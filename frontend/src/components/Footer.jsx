import React from 'react';
import { Heart, Mail, Linkedin, Github, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AJ</span>
              </div>
              <span className="text-xl font-bold">Alex Johnson</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Full Stack Developer & Project Manager dedicated to building innovative web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links and Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4 text-white">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {[
                { icon: Mail, href: 'mailto:alex.johnson@email.com', color: 'hover:text-blue-400' },
                { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
                { icon: Github, href: '#', color: 'hover:text-gray-300' },
                { icon: Globe, href: '#', color: 'hover:text-purple-400' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-full hover:bg-gray-800`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400 text-xs">
              Available for freelance projects
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Alex Johnson. Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
            <div className="text-gray-400 text-sm">
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;