
# node 环境初始化

create time: 20250530

在 Node.js 环境中运行 TypeScript（`.ts` 文件），你需要进行一些初始化配置。下面是一步步的指南，适用于新项目或给已有 Node 项目加上 TypeScript 支持：

---

### ✅ 步骤一：初始化项目（如果还没有）

```bash

npm init -
```

---

### ✅ 步骤二：安装 TypeScript 和 Node.js 相关的依赖

```bash

npm install typescript ts-node @types/node --save-dev
```

- `typescript`: TypeScript 编译器
- `ts-node`: 允许直接运行 `.ts` 文件，无需手动编译
- `@types/node`: 为 Node.js 提供的 TypeScript 类型定义

---

### ✅ 步骤三：初始化 TypeScript 配置文件

```bash

npx tsc --init
```

这会生成 `tsconfig.json` 文件。你可以修改其中一些常见配置来适应 Node 环境：

```json
{
  "compilerOptions": {
    "target": "ES2020",                     // 目标 JS 版本
    "module": "CommonJS",                   // Node 使用 CommonJS
    "moduleResolution": "node",             // 让编译器像 Node 一样解析模块
    "esModuleInterop": true,                // 支持 `import fs from 'fs'`
    "outDir": "./dist",                     // 编译输出目录
    "rootDir": "./src",                     // 源文件目录（推荐）
    "strict": true,                         // 开启严格模式
    "skipLibCheck": true},
  "include": ["src"]                        // 只编译 src 目录
}
```

---

### ✅ 步骤四：项目结构建议

```
your-project/
├── src/
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
```

---

### ✅ 步骤五：运行 TypeScript 文件

**临时运行：**

```bash
npx ts-node src/index.ts
```

**编译后运行：**

```bash
npx tsc           # 编译成 JS 文件（输出到 dist 目录）
node dist/index.js
```

---

### ✅ （可选）添加运行脚本到 `package.json`

```json
"scripts": {
  "start": "ts-node src/index.ts",
  "build": "tsc",
  "serve": "node dist/index.js"
}
```

这样你就可以用：

```bash
npm run start   # 直接运行 TypeScript
npm run build   # 编译为 JavaScript
npm run serve   # 运行已编译好的代码
```