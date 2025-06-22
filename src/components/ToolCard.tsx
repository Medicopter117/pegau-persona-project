
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgGradient: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, description, icon: Icon, color, bgGradient }) => {
  return (
    <div className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2`}>
      <div className={`absolute inset-0 ${bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
      
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${bgGradient} mb-6`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">{name}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${bgGradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
      </div>
    </div>
  );
};

export default ToolCard;
