
import React from 'react';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            LennyPegauOfficial
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-xl md:text-2xl text-blue-200">
            <MapPin className="w-6 h-6" />
            <span>Pegau, Sachsen</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Entwickler mit Leidenschaft für Python und Discord Bot Development. 
            Immer auf der Suche nach neuen Herausforderungen und innovativen Lösungen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
