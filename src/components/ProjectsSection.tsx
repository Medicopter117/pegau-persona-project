
import React from 'react';
import { Github, ExternalLink, Star, Shield, Radio, Server } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "ManagerX",
      description: "ManagerX ein DiscordBot für Moderation und mehr",
      tech: ["Python", "Py-cord", "Ezcord"],
      stars: 56,
      link: "#",
      icon: Shield
    },
    {
      title: "OPPRO.NET Network",
      description: "Discord Server",
      tech: ["Discord"],
      stars: 89,
      link: "#",
      icon: Server
    },
    {
      title: "RadioBot",
      description: "Radio für Discord",
      tech: ["Python", "Discord.py"],
      stars: 34,
      link: "#",
      icon: Radio
    },
    {
      title: "Discord Music Bot",
      description: "Ein fortschrittlicher Musik-Bot für Discord mit Playlist-Management und Audio-Effekten.",
      tech: ["Python", "py-cord", "YouTube API"],
      stars: 42,
      link: "#"
    },
    {
      title: "Server Management Tool",
      description: "Discord Bot für Server-Verwaltung mit Moderation, Logging und Auto-Moderation Features.",
      tech: ["Python", "ezcord", "SQLite"],
      stars: 28,
      link: "#"
    },
    {
      title: "API Wrapper Library",
      description: "Python-Bibliothek zum einfachen Umgang mit verschiedenen APIs für Discord-Bot-Entwicklung.",
      tech: ["Python", "Requests", "AsyncIO"],
      stars: 15,
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meine Projekte
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Eine Auswahl meiner aktuellen und vergangenen Entwicklungsprojekte
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className={`animate-fade-in group`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.icon && <project.icon className="w-6 h-6 text-blue-400" />}
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.link} className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
