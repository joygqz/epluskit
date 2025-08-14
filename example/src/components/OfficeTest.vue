<script setup lang="ts">
import type { IConfig } from '@onlyoffice/document-editor-vue'
import jwt from './jwt.ts'

async function getToken(config: IConfig) {
  return await jwt(config, 'lwiopzbySTTvvvIMjJeG2yDhqb3h3q1V')
}
</script>

<template>
  <div style="width: 100vw;height: 100vh;">
    <EkOnlyOffice
      document-server-url="http://localhost:2333" :document="{
        fileType: 'xlsx',
        key: `${Date.now()}`,
        title: 'test.docx',
        url: 'http://192.168.31.88:5173/1.xlsx', // 文档地址
        permissions: {
          download: false, // 是否允许下载
          print: false, // 是否允许打印
          edit: true, // 是否允许编辑
          copy: false, // 是否允许复制
        },
      }"
      :get-token="getToken"
    />
  </div>
</template>
