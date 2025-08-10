<script setup lang="ts">
defineProps<{
  message: string
}>()
defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div>
    {{ message }}
    <button @click="$emit('close')">
      关闭弹窗
    </button>
  </div>
</template>
