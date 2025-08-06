import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

const Skills = ({ data }) => {
  const [visibleBars, setVisibleBars] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.getAttribute('data-skill-id');
            setVisibleBars(prev => ({ ...prev, [skillId]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = document.querySelectorAll('[data-skill-id]');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {data.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {data.categories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const skillId = `${categoryIndex}-${skillIndex}`;
                    const isVisible = visibleBars[skillId];
                    
                    return (
                      <div key={skillIndex} data-skill-id={skillId}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="text-sm text-gray-600 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={isVisible ? skill.level : 0} 
                            className="h-3 bg-gray-200"
                          />
                          <div 
                            className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;