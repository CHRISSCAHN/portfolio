import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {data.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.description}
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights</h3>
                {data.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {data.stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-white border-0">
                  <CardContent className="p-0">
                    <div className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;