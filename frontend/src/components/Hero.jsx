import React from 'react';
import { MapPin, Calendar, Briefcase, BookOpen, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';

const Hero = ({ data }) => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-400 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {data.name}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200">
                {data.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                {data.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-6">
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{data.experience}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">{data.projectsCompleted}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-300">{data.researchPapers}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image Placeholder */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-gray-400">AJ</div>
                </div>
              </div>
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-sm">PHP</span>
              </div>
              <div className="absolute top-20 -left-8 w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-xs">Vue</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="text-white animate-bounce hover:text-blue-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;