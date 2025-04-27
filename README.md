# Next.js 游戏网站项目文档

这是一个使用 Next.js 15.2.4 构建的现代化游戏网站项目，集成了多个高级特性和组件。

## 技术栈

- **框架**: Next.js 15.2.4
- **UI 框架**: React 19
- **样式解决方案**: Tailwind CSS
- **UI 组件库**: Radix UI
- **动画**: Framer Motion
- **表单处理**: React Hook Form + Zod
- **支付集成**: Stripe
- **类型系统**: TypeScript

## 项目结构

```
├── app/                    # Next.js 应用主目录
│   ├── modes/             # 游戏模式相关页面
│   ├── layout.tsx         # 应用布局组件
│   ├── page.tsx           # 主页面组件
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── ui/               # UI 基础组件
│   ├── 3d-card.tsx      # 3D 卡片效果组件
│   ├── animated-*.tsx    # 动画相关组件
│   ├── game-*.tsx       # 游戏相关组件
│   ├── navbar.tsx       # 导航栏组件
│   └── footer.tsx       # 页脚组件
├── styles/               # 样式文件
├── public/              # 静态资源
├── lib/                 # 工具函数和库
└── hooks/              # 自定义 React Hooks
```

## 主要功能组件

### 1. 动画和视觉效果
- `AnimatedGradientText`: 渐变文字动画
- `AnimatedBackground`: 动态背景效果
- `ParticleBackground`: 粒子效果背景
- `FloatingNFT`: 浮动 NFT 展示
- `3DCard`: 3D 卡片交互效果

### 2. 游戏相关组件
- `GameModeCard`: 游戏模式选择卡片
- `GameStats`: 游戏统计展示
- `ModeFeature`: 游戏模式特性展示
- `ModeNav`: 模式导航组件

### 3. NFT 和奖励系统
- `NFTShowcase`: NFT 展示组件
- `RewardCard`: 奖励卡片组件

### 4. 布局和导航
- `Navbar`: 响应式导航栏
- `Footer`: 页面底部信息
- `ParallaxSection`: 视差滚动效果

### 5. 支付集成
- `Stripe`: Stripe 支付集成组件

## 开发指南

### 环境要求
- Node.js 18+
- pnpm 包管理器

### 安装依赖
```bash
pnpm install
```

### 开发服务器
```bash
pnpm dev
```

### 构建项目
```bash
pnpm build
```

### 启动生产服务器
```bash
pnpm start
```

## 样式指南

项目使用 Tailwind CSS 进行样式管理，通过 `tailwind.config.ts` 配置主题和样式变量。主要特性包括：
- 响应式设计
- 暗色模式支持
- 自定义动画
- 组件变体

## 注意事项

1. 确保在开发前配置好所有必要的环境变量
2. Stripe 集成需要配置相应的 API 密钥
3. 组件使用 TypeScript 开发，请确保类型定义完整
4. 动画效果可能需要考虑性能优化

## 部署

项目可以部署到任何支持 Next.js 的平台，推荐使用：
- Vercel
- Netlify
- AWS Amplify

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

[MIT License](LICENSE) 