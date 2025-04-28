# AIGAME - 区块链游戏平台

AIGAME是一个基于Solana链的去中心化游戏生态平台，提供多种游戏模式，包括竞技、娱乐、团队和冒险副本。

## 功能特色

- 五大副本游戏模式
- 链上打金
- 账号交易
- 基于Solana链的去中心化游戏生态

## 技术栈

- Next.js
- React
- Tailwind CSS
- TypeScript

## 开发设置

### 前提条件

- Node.js 18.x 或更高版本
- npm 或 pnpm

### 安装

```bash
# 使用npm
npm install

# 或使用pnpm
pnpm install
```

### 开发服务器

```bash
# 使用npm
npm run dev

# 或使用pnpm
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 项目结构

```
/
├── app/                # Next.js 应用目录
│   ├── modes/          # 游戏模式页面
│   │   ├── pvp/        # 竞技模式
│   │   ├── casual/     # 娱乐模式
│   │   ├── team/       # 团队模式
│   │   └── adventure/  # 冒险模式
│   ├── page.tsx        # 首页
│   └── layout.tsx      # 布局组件
├── components/         # React组件
├── public/             # 静态资源
└── styles/             # 样式文件
```

## 部署

项目可以轻松部署到Vercel平台：

1. 创建一个Vercel账号并连接到你的Git仓库
2. 导入项目
3. 部署成功后，你将获得一个生产环境URL

## 贡献

欢迎提交PR和Issues来改进项目。

## 许可证

MIT 