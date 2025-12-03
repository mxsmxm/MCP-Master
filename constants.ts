import { McpTool, McpCategory, GuideSection } from './types';

export const MCP_TOOLS: McpTool[] = [
  {
    id: 'chrome-devtools',
    name: 'Chrome DevTools',
    category: McpCategory.BROWSER,
    description: '无需浏览器插件，直接在 AI 上下文中控制和调试 Chrome。',
    solve: '允许 AI 读取控制台错误 (Console Errors) 和 DOM 元素，自动修复网页 Bug。',
    iconName: 'Chrome',
    usageExample: '检查浏览器控制台的报错，并修复那个失效的事件监听器。',
    simplePrompt: "修复当前页面控制台中的所有错误。",
    animationType: 'BROWSER'
  },
  {
    id: 'neon',
    name: 'Neon',
    category: McpCategory.DATABASE,
    description: 'Serverless Postgres 数据库管理工具。',
    solve: '让 AI 能够瞬间创建项目并管理数据库 Schema，无需手动配置。',
    iconName: 'Database',
    usageExample: '创建一个新的 Postgres 项目，并建立一张用户表。',
    simplePrompt: "创建一个包含邮箱和密码字段的 'users' 表。",
    animationType: 'DATABASE'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: McpCategory.DATABASE,
    description: '带有 Auth 和 DB 的开源 Firebase 替代方案。',
    solve: 'AI 可以帮你设置身份验证 (Auth) 和行级安全策略 (RLS)。',
    iconName: 'Flame',
    usageExample: '配置一个新的认证提供商，并生成 RLS 策略。',
    simplePrompt: "设置 Auth 并创建一个公开的 'posts' 表。",
    animationType: 'DATABASE'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: McpCategory.DESIGN,
    description: '将设计文件直接连接到代码生成流程。',
    solve: '读取 Design Tokens 和布局，生成像素级完美的还原代码。',
    iconName: 'Figma',
    usageExample: '检查 "Login V2" 画板并生成 React 代码。',
    simplePrompt: "将 Figma 中的 'Login V2' 画板转换为 React 代码。",
    animationType: 'DESIGN'
  },
  {
    id: 'shadcn',
    name: 'shadcn/ui',
    category: McpCategory.DESIGN,
    description: '基于 Radix UI 和 Tailwind 的可复用组件库工具。',
    solve: 'AI 可以自动查找、安装并实现特定的 UI 组件。',
    iconName: 'LayoutTemplate',
    usageExample: '安装 Dialog 组件并实现一个模态框。',
    simplePrompt: "为登录表单添加一个 Shadcn Dialog 组件。",
    animationType: 'DESIGN'
  },
  {
    id: 'context7',
    name: 'Context7',
    category: McpCategory.KNOWLEDGE,
    description: '为库和框架获取最新的文档和上下文。',
    solve: '解决 AI 知识截止问题，检索最新的官方文档。',
    iconName: 'BookOpen',
    usageExample: '搜索 Python 3.14 "template strings" 的相关文档。',
    simplePrompt: "查阅 Python 3.14 模板字符串是如何工作的。",
    animationType: 'SEARCH'
  },
  {
    id: 'ref-mcp',
    name: 'REF MCP',
    category: McpCategory.KNOWLEDGE,
    description: '针对小众技术文档的深度参考搜索。',
    solve: '访问通用模型容易忽略的冷门或内部技术文档。',
    iconName: 'Search',
    usageExample: '查找内部库的技术参考手册。',
    simplePrompt: "查找 'blob-stream' 库的 API 参考文档。",
    animationType: 'SEARCH'
  },
  {
    id: 'replicate',
    name: 'Replicate',
    category: McpCategory.MEDIA,
    description: '在云端运行机器学习模型 (如图像生成)。',
    solve: '动态生成占位图或素材，美化产品原型。',
    iconName: 'Image',
    usageExample: '生成一张逼真的办公室照片作为占位符。',
    simplePrompt: "生成一张未来感工作空间的 Hero 图片。",
    animationType: 'MEDIA'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: McpCategory.DEPLOYMENT,
    description: '前端云部署平台。',
    solve: '无需离开编辑器即可部署项目并检查构建日志。',
    iconName: 'Triangle',
    usageExample: '部署最新提交 (commit) 并检查构建日志。',
    simplePrompt: "将此项目部署到 Vercel 并给我访问链接。",
    animationType: 'DEPLOY'
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: McpCategory.DEPLOYMENT,
    description: 'Web 性能与安全平台。',
    solve: '管理 Workers、DNS 记录，并分析流量日志。',
    iconName: 'Cloud',
    usageExample: '分析流量日志，查找 500 错误。',
    simplePrompt: "检查 Cloudflare 日志中最近的 500 错误。",
    animationType: 'DEPLOY'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: McpCategory.TOOLS,
    description: '代码托管与版本控制。',
    solve: '直接创建 PR、搜索代码库、分析 Issue 和代码差异。',
    iconName: 'Github',
    usageExample: '创建一个新分支并开启 Pull Request。',
    simplePrompt: "提交这些更改并开启一个名为 'fix-auth' 的 PR。",
    animationType: 'GIT'
  },
  {
    id: 'semgrep',
    name: 'Semgrep',
    category: McpCategory.TOOLS,
    description: '静态安全分析工具。',
    solve: '扫描代码漏洞 (SAST) 并提供修复建议。',
    iconName: 'ShieldAlert',
    usageExample: '扫描 /api 目录是否存在 SQL 注入漏洞。',
    simplePrompt: "扫描当前文件是否存在安全漏洞。",
    animationType: 'SECURITY'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: McpCategory.PAYMENT,
    description: '金融支付基础设施平台。',
    solve: '创建测试商品、调试支付流程和 Checkout 页面。',
    iconName: 'CreditCard',
    usageExample: '创建一个价格 $50 的测试商品 "Gold Plan"。',
    simplePrompt: "在 Stripe 测试模式下创建一个 $50 的 'Pro Plan' 商品。",
    animationType: 'PAYMENT'
  },
];

export const INSTALLATION_GUIDES: GuideSection[] = [
  {
    platform: 'Claude Code',
    steps: [
      {
        title: '安装 Claude Code',
        content: '确保你的机器上已经安装了 Claude Code CLI 工具。',
        code: 'npm install -g @anthropic-ai/claude-code'
      },
      {
        title: '添加 MCP (项目级)',
        content: '将工具仅添加到当前项目文件夹中。',
        code: 'cloud mcp add <mcp-name> -- <command>'
      },
      {
        title: '添加 MCP (用户级)',
        content: '如果想让工具在所有项目中全局可用，请使用 user scope 参数。',
        code: 'cloud mcp add <mcp-name> --scope user -- <command>'
      },
      {
        title: '管理工具',
        content: '列出或移除已安装的 MCP 工具。',
        code: 'cloud mcp list\ncloud mcp remove <mcp-name>'
      }
    ]
  },
  {
    platform: 'VSCode (Cline)',
    steps: [
      {
        title: '安装并打开设置',
        content: '从 VSCode 市场安装 "Cline" 插件。打开 Cline 侧边栏，点击 "MCP Servers" 图标（堆叠图标）以打开配置文件。',
        code: 'ext install saoudrizwan.claude-dev'
      },
      {
        title: '编辑 Config JSON',
        content: '将你的 MCP server 配置添加到 JSON 文件中。以下是一个添加本地文件系统访问权限的示例。',
        code: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username/Desktop"]
    }
  }
}`
      },
      {
        title: '验证连接',
        content: '保存文件。你应该能看到 Cline MCP 菜单中的服务器名称旁出现绿点。现在你可以使用类似 "读取桌面文件夹中的文件" 这样的提示词了。',
        code: 'Checking status: Connected'
      }
    ]
  },
  {
    platform: 'Codex / 自定义配置',
    steps: [
      {
        title: '定位配置文件',
        content: '找到配置文件。在 Windows 上，它通常位于你的用户目录下。',
        code: 'C:\\Users\\<User>\\.codex\\config.toml'
      },
      {
        title: '编辑 TOML 配置',
        content: '在 [mcpServers] 部分下添加 MCP server 定义。这让 AI 能够“看到”该工具。',
        code: `[mcpServers.neon]
command = "npx"
args = ["-y", "@neon/mcp-server"]
env = { NEON_API_KEY = "your-key" }`
      },
      {
        title: '重启并连接',
        content: '重启 Codex 应用。在聊天框输入 /mcp 来验证连接是否成功。',
        code: '/mcp'
      }
    ]
  },
  {
    platform: 'VSCode + Gemini CLI',
    steps: [
      {
        title: '环境设置',
        content: '安装 Gemini CLI 并将 API Key 导出到环境变量中。',
        code: 'npm install -g @google/gemini-cli\nexport GOOGLE_API_KEY=your_key_here'
      },
      {
        title: 'MCP Server 配置',
        content: '在项目根目录下创建一个 JSON 文件 (如 mcp_config.json) 来注册你的工具。',
        code: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}`
      },
      {
        title: '带上下文启动',
        content: '启动 Gemini 界面并指向你的配置文件。模型现在就可以调用定义好的工具了。',
        code: 'gemini chat --mcp-config ./mcp_config.json'
      }
    ]
  }
];

export const AGGREGATORS = [
  {
    name: "Smithery.ai",
    url: "https://smithery.ai",
    desc: "一个综合性的 MCP Server 注册表。"
  },
  {
    name: "Glama",
    url: "https://glama.ai/mcp",
    desc: "发现并分享适用于各种用例的 MCP 工具。"
  },
  {
    name: "GitHub Official List",
    url: "https://github.com/modelcontextprotocol/servers",
    desc: "包含参考实现和社区服务器的官方仓库列表。"
  }
];