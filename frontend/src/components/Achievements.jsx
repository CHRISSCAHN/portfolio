import React from 'react';
import { Trophy, Award, Mic, Users, Github, FileCheck } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Achievements = ({ data }) => {
  const getIcon = (iconName) => {
    const icons = {
      trophy: Trophy,
      award: Award,
      mic: Mic,
      users: Users,
      github: Github,
      certificate: Certificate
    };
    const Icon = icons[iconName] || Trophy;
    return <Icon className="w-6 h-6" />;
  };

  const getIconColor = (type) => {
    const colors = {
      Research: 'text-blue-600 bg-blue-100',
      Award: 'text-yellow-600 bg-yellow-100',
      Speaking: 'text-purple-600 bg-purple-100',
      Leadership: 'text-green-600 bg-green-100',
      'Open Source': 'text-orange-600 bg-orange-100',
      Certification: 'text-indigo-600 bg-indigo-100'
    };
    return colors[type] || 'text-gray-600 bg-gray-100';
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Milestones and recognitions that mark my journey in software development and project management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((achievement) => (
              <Card 
                key={achievement.id} 
                className="group bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <CardContent className="p-6">
                  {/* Icon and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg transition-all duration-300 group-hover:scale-110 ${getIconColor(achievement.type)}`}>
                      {getIcon(achievement.icon)}
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-white text-gray-600 border border-gray-200">
                        {achievement.date}
                      </Badge>
                      <div className="text-xs text-gray-500 mt-1">{achievement.type}</div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    {/* Impact */}
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                        <span className="text-xs font-medium text-gray-700">Impact:</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{achievement.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Create the Next Achievement Together?</h3>
              <p className="text-lg opacity-90 mb-6">
                Let's collaborate on your next project and add another success story to both our portfolios
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;