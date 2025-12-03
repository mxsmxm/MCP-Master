import React from 'react';
import { McpTool, McpCategory } from '../types';
import ToolSimulation from './ToolSimulation';
import { 
  Database, Globe, LayoutTemplate, BookOpen, 
  Triangle, Cloud, Github, CreditCard, 
  ShieldAlert, Chrome, Search, Image, Flame, Figma,
  MessageSquare
} from 'lucide-react';

interface McpGridProps {
  tools: McpTool[];
}

const IconMap: Record<string, React.ElementType> = {
  'Chrome': Chrome,
  'Database': Database,
  'Flame': Flame,
  'Figma': Figma,
  'LayoutTemplate': LayoutTemplate,
  'BookOpen': BookOpen,
  'Search': Search,
  'Image': Image,
  'Triangle': Triangle,
  'Cloud': Cloud,
  'Github': Github,
  'ShieldAlert': ShieldAlert,
  'CreditCard': CreditCard
};

const McpGrid: React.FC<McpGridProps> = ({ tools }) => {
  // Group by category for better organization
  const toolsByCategory = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<McpCategory, McpTool[]>);

  return (
    <div className="space-y-16">
      {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
        <div key={category}>
          <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
            <span className="text-indigo-500 bg-indigo-500/10 p-1 rounded">#</span> {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(categoryTools as McpTool[]).map((tool) => {
              const IconComponent = IconMap[tool.iconName] || Globe;
              return (
                <div key={tool.id} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 flex flex-col">
                  
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 text-indigo-400 shadow-inner border border-slate-700/50">
                        <IconComponent size={24} />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                        {tool.id}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-100 mb-2">{tool.name}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{tool.description}</p>
                  </div>

                  {/* Visual Simulation Area */}
                  <div className="px-6 py-2">
                    <ToolSimulation type={tool.animationType} />
                  </div>

                  {/* Prompt Interaction */}
                  <div className="p-6 mt-auto">
                    <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 relative group-hover:border-indigo-500/30 transition-colors">
                      <div className="absolute -top-3 left-4 bg-slate-800 text-slate-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1">
                         <MessageSquare size={10} /> 提示词 (Prompt)
                      </div>
                      <p className="text-sm text-indigo-300 font-medium font-mono leading-relaxed">
                        "{tool.simplePrompt}"
                      </p>
                    </div>
                    
                    {/* Collapsible/Small details */}
                     <div className="mt-4 pt-4 border-t border-slate-800/50 flex flex-col gap-2">
                         <div className="text-xs text-slate-500">
                             <span className="font-semibold text-emerald-500">解决痛点:</span> {tool.solve}
                         </div>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default McpGrid;