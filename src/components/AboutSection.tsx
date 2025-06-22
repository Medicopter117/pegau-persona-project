
import React from 'react';
import { Code2, Coffee, Gamepad2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Über mich
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ein leidenschaftlicher Entwickler aus Sachsen mit Fokus auf Python und Bot-Entwicklung
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Coding</h3>
            <p className="text-gray-400">
              Täglich am Programmieren neuer Features und Lösungen mit Python, Discord.py und modernen Frameworks.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Coffee className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Lernen</h3>
            <p className="text-gray-400">
              Kontinuierliche Weiterbildung in neuen Technologien und Best Practices der Softwareentwicklung.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Gamepad2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Gaming</h3>
            <p className="text-gray-400">
              In der Freizeit Gaming und Entwicklung von Discord-Bots für Gaming-Communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
