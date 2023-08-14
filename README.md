### 项目运行环境
`node 14.21.1`

`pnpm 7.12.2`

### 启动和编译
```bash

pnpm i

# 运行 example 中的 npm run dev
pnpm run dev

# 运行 packages下的 npm run build , 打包 packages
pnpm run build

```

### 本地 example 调试（非打包模式）

*移除`packages/package.json` 中的 main 和 module 字段*


### 本地 example 调试（打包模式）

*在`packages/package.json` 中新增 main 和 module 字段*

```json
  "main": "./dist/lib/index.js",
  "module": "./dist/es/index.js",
```
