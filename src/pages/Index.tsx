
import React from 'react';
import Hero from '@/components/Hero';
import ToolCard from '@/components/ToolCard';
import { Code, Terminal, Bot, Zap, FileCode } from 'lucide-react';

const Index = () => {
  const tools = [
    {
      name: "PyCharm",
      description: "Meine bevorzugte IDE für Python-Entwicklung mit intelligenter Code-Vervollständigung und Debugging-Tools.",
      icon: Code,
      color: "text-green-400",
      bgGradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      name: "Visual Studio Code",
      description: "Vielseitiger Code-Editor für verschiedene Programmiersprachen mit umfangreichen Extensions.",
      icon: FileCode,
      color: "text-blue-400",
      bgGradient: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      name: "Python",
      description: "Meine Hauptprogrammiersprache für Backend-Entwicklung, Automatisierung und Datenverarbeitung.",
      icon: Terminal,
      color: "text-yellow-400",
      bgGradient: "bg-gradient-to-br from-yellow-500 to-orange-600"
    },
    {
      name: "ezcord",
      description: "Framework für die einfache Entwicklung von Discord-Bots mit Python und modernen Features.",
      icon: Bot,
      color: "text-purple-400",
      bgGradient: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      name: "py-cord",
      description: "Moderne Python-Bibliothek für Discord Bot Development mit Slash Commands und Interactions.",
      icon: Zap,
      color: "text-indigo-400",
      bgGradient: "bg-gradient-to-br from-indigo-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-900">
      <Hero />
      
      {/* Tools Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meine Tools & Technologien
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Diese Tools und Technologien verwende ich täglich für meine Entwicklungsprojekte
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={tool.name} className={`animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <ToolCard {...tool} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">LennyPegauOfficial</h3>
          <p className="text-gray-400">
            Python Developer aus Pegau, Sachsen • Spezialisiert auf Discord Bot Development
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
