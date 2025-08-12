<script setup lang="ts">
import { getCurrentInstance, h } from 'vue'
import TestDialogContent from './TestDialogContent.vue'

const dialog = useEkDialog({
  title: '提示',
}, {
  content: h(TestDialogContent, {
    message: '这是一个测试弹窗',
    onClose: () => dialog.close(),
  }),
})

console.log(getCurrentInstance()?.appContext.config.globalProperties.$useEkDialog)

function onOpen() {
  dialog.open()
}

function onDestroy() {
  dialog.destroy()
}
</script>

<template>
  <div>
    <button @click="onOpen">
      打开弹窗
    </button>
    <button @click="onDestroy">
      销毁弹窗
    </button>
  </div>
</template>
