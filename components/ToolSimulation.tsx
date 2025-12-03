import React from 'react';
import { AnimationType } from '../types';

interface ToolSimulationProps {
  type: AnimationType;
}

const ToolSimulation: React.FC<ToolSimulationProps> = ({ type }) => {
  const getVisuals = () => {
    switch (type) {
      case 'BROWSER':
        return (
          <>
            {/* Browser Window */}
            <rect x="20" y="20" width="160" height="110" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            <circle cx="35" cy="35" r="4" fill="#ef4444" />
            <circle cx="50" cy="35" r="4" fill="#f59e0b" />
            <circle cx="65" cy="35" r="4" fill="#10b981" />
            
            {/* Bug to Fix Animation */}
            <path d="M 50 70 L 150 70" stroke="#ef4444" strokeWidth="4" strokeLinecap="round">
              <animate attributeName="stroke" values="#ef4444;#10b981;#10b981" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M 50 90 L 120 90" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
            
            {/* Cursor */}
            <path d="M 120 110 L 120 110" stroke="#a855f7" strokeWidth="2">
                 <animate d="M 80 80 L 90 95 L 95 90 Z" attributeName="d" values="M 160 160 L 160 160; M 90 60 L 100 75 L 105 70 Z" dur="3s" repeatCount="indefinite" />
                 <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </path>
          </>
        );
      
      case 'DATABASE':
        return (
          <>
            {/* DB Drums */}
            <path d="M 50 40 C 50 30 150 30 150 40 L 150 80 C 150 90 50 90 50 80 Z" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
            <ellipse cx="100" cy="40" rx="50" ry="10" fill="#3b82f6" opacity="0.5" />
            
            {/* Data Row Injection */}
            <rect x="60" y="60" width="80" height="8" rx="2" fill="#10b981" opacity="0">
              <animate attributeName="y" values="20;60" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="60" y="75" width="60" height="8" rx="2" fill="#10b981" opacity="0">
               <animate attributeName="y" values="35;75" dur="2s" begin="0.5s" repeatCount="indefinite" />
               <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </rect>
          </>
        );

      case 'DESIGN':
        return (
          <>
            {/* Design File */}
            <rect x="30" y="30" width="60" height="80" rx="4" fill="#1e293b" stroke="#f472b6" strokeWidth="2" strokeDasharray="4 2" />
            <rect x="40" y="45" width="40" height="4" fill="#f472b6" />
            <rect x="40" y="55" width="20" height="4" fill="#f472b6" />
            
            {/* Transformation Arrow */}
            <path d="M 100 70 L 115 70" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
            
            {/* Code Output */}
            <rect x="125" y="30" width="60" height="80" rx="4" fill="#1e293b" stroke="#6366f1" strokeWidth="2">
               <animate attributeName="stroke-dasharray" values="0 200; 200 0" dur="2s" repeatCount="indefinite" />
            </rect>
            <path d="M 135 45 L 175 45 M 135 55 L 165 55 M 135 65 L 155 65" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" opacity="0.5">
               <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
            </path>
          </>
        );

      case 'SEARCH':
        return (
          <>
             {/* Doc Stack */}
             <rect x="110" y="40" width="50" height="70" rx="2" fill="#334155" />
             <rect x="100" y="50" width="50" height="70" rx="2" fill="#475569" />
             
             {/* Magnifying Glass */}
             <g transform="translate(60, 80)">
                <circle cx="0" cy="0" r="20" fill="none" stroke="#a855f7" strokeWidth="3" />
                <line x1="14" y1="14" x2="28" y2="28" stroke="#a855f7" strokeWidth="3" />
                <animateTransform attributeName="transform" type="translate" values="50,80; 100,80; 50,80" dur="3s" repeatCount="indefinite" />
             </g>
             
             {/* Found Highlight */}
             <rect x="110" y="60" width="30" height="4" fill="#fbbf24" opacity="0">
               <animate attributeName="opacity" values="0;0;1;0" dur="3s" repeatCount="indefinite" />
             </rect>
          </>
        );
      
      case 'DEPLOY':
        return (
          <>
            {/* Cloud */}
            <path d="M 130 80 A 20 20 0 0 0 110 60 A 10 10 0 0 0 100 65 A 25 25 0 0 0 60 80 A 15 15 0 0 0 70 110 L 130 110 A 15 15 0 0 0 130 80 Z" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
            
            {/* Rocket/Upload */}
            <g>
               <path d="M 100 100 L 100 40" stroke="#10b981" strokeWidth="3" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" values="8;0" dur="0.5s" repeatCount="indefinite" />
               </path>
               <path d="M 90 50 L 100 40 L 110 50" stroke="#10b981" strokeWidth="3" fill="none">
                  <animateTransform attributeName="transform" type="translate" values="0,60; 0,0" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" />
               </path>
            </g>
          </>
        );

      case 'GIT':
        return (
          <>
            {/* Main Branch */}
            <line x1="40" y1="110" x2="40" y2="30" stroke="#64748b" strokeWidth="4" />
            <circle cx="40" cy="110" r="6" fill="#64748b" />
            <circle cx="40" cy="70" r="6" fill="#64748b" />
            
            {/* Feature Branch */}
            <path d="M 40 70 C 40 50 80 90 80 70 L 80 50" fill="none" stroke="#f43f5e" strokeWidth="4" strokeDasharray="100">
               <animate attributeName="stroke-dashoffset" values="100;0" dur="2s" repeatCount="indefinite" />
            </path>
            <circle cx="80" cy="50" r="6" fill="#f43f5e">
              <animate attributeName="opacity" values="0;1" dur="2s" repeatCount="indefinite" />
            </circle>
            
            {/* PR Icon */}
            <path d="M 110 40 L 130 40 L 130 60" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.5">
               <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
            </path>
          </>
        );
        
      case 'SECURITY':
        return (
          <>
             {/* Code Lines */}
             <rect x="40" y="30" width="120" height="90" rx="4" fill="#1e293b" stroke="#334155" />
             <line x1="50" y1="50" x2="150" y2="50" stroke="#475569" strokeWidth="2" />
             <line x1="50" y1="70" x2="150" y2="70" stroke="#475569" strokeWidth="2" />
             <line x1="50" y1="90" x2="120" y2="90" stroke="#475569" strokeWidth="2" />
             
             {/* Shield Scan */}
             <path d="M 100 20 L 130 30 V 60 C 130 85 100 100 100 100 C 100 100 70 85 70 60 V 30 Z" fill="#10b981" opacity="0.3">
               <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
             </path>
             <path d="M 100 40 L 110 60 L 90 60 Z" fill="#ef4444">
                <animateTransform attributeName="transform" type="scale" values="0;1" dur="0.5s" begin="1s" fill="freeze" />
             </path>
          </>
        );

      case 'PAYMENT':
        return (
          <>
            {/* Card */}
            <rect x="40" y="40" width="120" height="70" rx="6" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
            <rect x="40" y="55" width="120" height="15" fill="#334155" />
            <rect x="50" y="80" width="30" height="10" rx="2" fill="#64748b" />
            
            {/* Coin/Transaction */}
            <circle cx="140" cy="100" r="15" fill="#eab308">
               <animate attributeName="cy" values="120;100" dur="0.5s" fill="freeze" />
            </circle>
            <text x="140" y="105" textAnchor="middle" fontSize="14" fill="#713f12" fontWeight="bold">$</text>
            
            {/* Success Check */}
            <path d="M 150 40 L 160 30" stroke="#10b981" strokeWidth="3">
               <animate attributeName="opacity" values="0;1" dur="1s" repeatCount="indefinite" />
            </path>
          </>
        );
      
      case 'MEDIA':
        return (
          <>
            {/* Image Placeholder */}
            <rect x="50" y="30" width="100" height="80" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="80" cy="50" r="8" fill="#475569" />
            <path d="M 50 90 L 70 70 L 90 90 L 110 60 L 150 110" fill="none" stroke="#475569" strokeWidth="2" />
            
            {/* Loading/Generating Overlay */}
            <rect x="50" y="30" width="100" height="80" rx="4" fill="#f59e0b" opacity="0.1">
               <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
            </rect>
            
            {/* Pixels appearing */}
            <rect x="60" y="40" width="10" height="10" fill="#f59e0b">
               <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0s" fill="freeze" />
            </rect>
            <rect x="75" y="40" width="10" height="10" fill="#f59e0b">
               <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.2s" fill="freeze" />
            </rect>
             <rect x="90" y="40" width="10" height="10" fill="#f59e0b">
               <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.4s" fill="freeze" />
            </rect>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-32 bg-slate-950/50 rounded-lg border border-slate-800 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <svg viewBox="0 0 200 140" className="w-full h-full drop-shadow-lg">
        {getVisuals()}
      </svg>
    </div>
  );
};

export default ToolSimulation;