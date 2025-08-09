<script setup lang="ts">
import { useEkDialog } from 'epluskit'
import TestDialogContent from './components/TestDialogContent.vue'

const dialog = useEkDialog({
  title: '提示',
  content: TestDialogContent,
})

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
