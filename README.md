# EplusKit

[![npm version](https://img.shields.io/npm/v/epluskit.svg)](https://www.npmjs.com/package/epluskit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

基于 Element Plus 的扩展与工具库

## 简介

一个为 [Element Plus](https://element-plus.org/) 生态打造的扩展组件与工具集合，助力更高效地开发 Vue 3 项目。

- 提供常用业务组件和增强型工具
- 支持按需引入和全量引入
- 兼容 TypeScript

## 安装

```bash
pnpm add element-plus epluskit
```

## 快速上手

### 全量引入

```ts
import ElementPlus from 'element-plus'
import EplusKit from 'epluskit'
import { createApp } from 'vue'
import App from './App.vue'
import 'epluskit/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(EplusKit)
app.mount('#app')
```

### 按需引入

```ts
import { Dialog } from 'epluskit'

app.use(Dialog)
```

## 组件与工具目录

- Dialog 对话框
- ...（更多组件和工具，详见 `packages/components`）

## License

MIT
