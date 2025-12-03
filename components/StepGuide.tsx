import React, { useState } from 'react';
import { GuideSection } from '../types';
import { Terminal, Copy, Check } from 'lucide-react';

interface StepGuideProps {
  guides: GuideSection[];
}

const StepGuide: React.FC<StepGuideProps> = ({ guides }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <div className="flex border-b border-slate-800">
        {guides.map((guide, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-4 text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
              activeTab === index
                ? 'bg-slate-800 text-indigo-400 border-b-2 border-indigo-500'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {guide.platform}
          </button>
        ))}
      </div>

      <div className="p-6">
        <div className="space-y-8">
          {guides[activeTab].steps.map((step, stepIndex) => (
            <div key={stepIndex} className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${activeTab === 0 ? 'bg-indigo-500' : 'bg-emerald-500'}`}></div>
              </div>
              
              <h4 className="text-lg font-semibold text-slate-200 mb-2">{step.title}</h4>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">{step.content}</p>

              {step.code && (
                <div className="relative group">
                  <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-emerald-400 border border-slate-800 overflow-x-auto custom-scrollbar">
                    <pre>{step.code}</pre>
                  </div>
                  <button
                    onClick={() => handleCopy(step.code!, `${activeTab}-${stepIndex}`)}
                    className="absolute top-2 right-2 p-2 bg-slate-800 rounded-md text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    title="复制代码"
                  >
                    {copiedIndex === `${activeTab}-${stepIndex}` ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepGuide;