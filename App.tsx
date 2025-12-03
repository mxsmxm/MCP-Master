import React from 'react';
import { INSTALLATION_GUIDES, MCP_TOOLS, AGGREGATORS } from './constants';
import ConceptVisual from './components/ConceptVisual';
import StepGuide from './components/StepGuide';
import McpGrid from './components/McpGrid';
import { Box, Plug, Search, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Plug className="text-white" size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">MCP Master</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#concept" className="hover:text-white transition-colors">概念介绍</a>
            <a href="#guide" className="hover:text-white transition-colors">安装指南</a>
            <a href="#tools" className="hover:text-white transition-colors">精选工具 (Top 15)</a>
            <a href="#aggregators" className="hover:text-white transition-colors">资源目录</a>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            解锁 AI 的上下文能力
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 pb-2">
            模型上下文协议 (MCP) 权威指南
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            给你的 AI 装上眼睛、耳朵和双手。一份关于 15+ 款最佳 MCP 工具（涵盖数据库、浏览器和云部署）的综合指南。
          </p>
        </section>

        {/* Concept Visualization */}
        <section id="concept" className="scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">什么是 MCP?</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
              你可以把 MCP 想象成大语言模型 (LLM) 的 <strong className="text-white">通用 USB 接口</strong>。
              以前 AI 只能陪你“聊天”，但有了 MCP，模型就可以安全地连接到你的本地文件、GitHub 仓库、数据库和浏览器，真正替你完成工作。它就像是 AI 的标准化工具箱。
            </p>
          </div>
          <ConceptVisual />
        </section>

        {/* Installation Guide */}
        <section id="guide" className="scroll-mt-24">
           <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">如何使用 MCP</h2>
              <p className="text-slate-400">Claude Code, Codex, Cline 以及 Gemini CLI 的详细配置步骤。</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-800 rounded-md text-xs font-mono text-slate-400 border border-slate-700">Scope: 项目级 vs 用户级</span>
            </div>
          </div>
          <StepGuide guides={INSTALLATION_GUIDES} />
        </section>

        {/* Tools Grid */}
        <section id="tools" className="scroll-mt-24">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Top 15 精选 MCP 工具</h2>
            <p className="text-slate-400 max-w-3xl">
              源自视频实战演示：这些核心工具能让你的 AI 编程助手瞬间进化为全栈开发 Agent。
            </p>
          </div>
          <McpGrid tools={MCP_TOOLS} />
        </section>

        {/* Aggregators */}
        <section id="aggregators" className="scroll-mt-24 bg-gradient-to-br from-indigo-900/20 to-slate-900/50 rounded-2xl p-8 border border-indigo-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Search className="text-indigo-400" size={28} />
            <h2 className="text-2xl font-bold">在哪里发现更多 MCP?</h2>
          </div>
          <p className="text-slate-400 mb-8">
            MCP 生态系统每天都在壮大。你可以通过以下聚合平台找到几乎适用于任何工具的 Server。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {AGGREGATORS.map((agg, idx) => (
              <a 
                key={idx} 
                href={agg.url} 
                target="_blank" 
                rel="noreferrer"
                className="block p-6 bg-slate-950 rounded-xl border border-slate-800 hover:border-indigo-500 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg group-hover:text-indigo-400 transition-colors">{agg.name}</h3>
                  <ExternalLink size={16} className="text-slate-500 group-hover:text-indigo-400" />
                </div>
                <p className="text-slate-400 text-sm">{agg.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2025 MCP Master Guide. 基于视频文稿整理。</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>构建你自己的 MCP: Python SDK / TS SDK</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;