import React, { useEffect, useState } from 'react';

const ConceptVisual: React.FC = () => {
  const [activePacket, setActivePacket] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePacket((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center overflow-hidden relative shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      
      <h3 className="text-xl font-bold text-slate-300 mb-8 z-10">MCP 工作原理：AI 的 "USB 接口"</h3>

      <div className="relative w-full max-w-3xl aspect-[16/6] z-10">
        <svg viewBox="0 0 800 300" className="w-full h-full drop-shadow-lg">
          {/* Defs for gradients */}
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="toolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Connection Lines */}
          <path d="M 200 150 L 350 150" stroke="#334155" strokeWidth="4" />
          <path d="M 450 150 L 600 150" stroke="#334155" strokeWidth="4" />

          {/* AI Model Box */}
          <g transform="translate(50, 75)">
            <rect width="150" height="150" rx="12" fill="url(#aiGradient)" />
            <text x="75" y="65" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">AI 模型</text>
            <text x="75" y="90" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">Claude / Codex</text>
            <circle cx="75" cy="115" r="4" fill="white" className="animate-pulse" />
          </g>

          {/* MCP Protocol Box (The Bridge) */}
          <g transform="translate(350, 100)">
            <rect width="100" height="100" rx="50" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
            <text x="50" y="45" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">MCP</text>
            <text x="50" y="65" textAnchor="middle" fill="#64748b" fontSize="10">协议层 (Protocol)</text>
            
            {/* Spinning Indicator Ring */}
            <circle cx="50" cy="50" r="40" stroke="#6366f1" strokeWidth="2" strokeDasharray="10 10" fill="none">
               <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* External Tools Box */}
          <g transform="translate(600, 75)">
            <rect width="150" height="150" rx="12" fill="url(#toolGradient)" />
            <text x="75" y="65" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">外部工具</text>
            <text x="75" y="90" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">DB / 浏览器 / API</text>
            
            {/* Tool Icons (Simplified) */}
            <rect x="55" y="110" width="15" height="15" rx="2" fill="white" opacity="0.8" />
            <rect x="80" y="110" width="15" height="15" rx="2" fill="white" opacity="0.8" />
          </g>

          {/* Data Packet Animation - Request */}
          <circle r="6" fill="#fbbf24">
            <animateMotion 
              dur="2s" 
              repeatCount="indefinite" 
              path="M 200 150 L 600 150" 
              keyPoints="0;1" 
              keyTimes="0;1"
              calcMode="linear"
            />
          </circle>

          {/* Data Packet Animation - Response */}
           <circle r="6" fill="#60a5fa">
            <animateMotion 
              dur="2s" 
              repeatCount="indefinite" 
              path="M 600 150 L 200 150" 
              begin="1s"
              keyPoints="0;1" 
              keyTimes="0;1"
              calcMode="linear"
            />
          </circle>
        </svg>
      </div>
      
      <div className="mt-6 flex gap-8 text-sm text-slate-400 z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <span>用户请求 / 上下文</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <span>数据 / 动作反馈</span>
        </div>
      </div>
    </div>
  );
};

export default ConceptVisual;