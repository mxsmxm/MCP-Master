export enum McpCategory {
  BROWSER = '浏览器自动化',
  DATABASE = '数据库',
  DESIGN = '设计与 UI',
  KNOWLEDGE = '知识与文档',
  DEPLOYMENT = '部署与运维',
  TOOLS = '开发工具与安全',
  PAYMENT = '支付系统',
  MEDIA = '媒体与素材生成'
}

export type AnimationType = 
  | 'BROWSER' 
  | 'DATABASE' 
  | 'DESIGN' 
  | 'SEARCH' 
  | 'DEPLOY' 
  | 'GIT' 
  | 'SECURITY' 
  | 'PAYMENT' 
  | 'MEDIA';

export interface McpTool {
  id: string;
  name: string;
  description: string;
  category: McpCategory;
  solve: string;
  iconName: string;
  usageExample: string;
  simplePrompt: string;
  animationType: AnimationType;
}

export interface Step {
  title: string;
  content: string;
  code?: string;
}

export interface GuideSection {
  platform: string;
  steps: Step[];
}