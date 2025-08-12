<script setup lang="ts">
import { ElTable } from 'element-plus'
import TableCell from './table-cell.vue'
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'
import './index.css'

defineOptions({
  name: 'EkTable',
})

const { columns, data } = defineProps<{
  columns?: any
  data?: Record<string, any>[]
}>()
</script>

<template>
  <ElTable :data="data" v-bind="$attrs">
    <TableCell v-if="columns && columns.length" :columns="columns" />
    <template #empty="scoped">
      <slot name="empty" v-bind="scoped" />
    </template>
    <template #append="scoped">
      <slot name="append" v-bind="scoped" />
    </template>
  </ElTable>
</template>

<style scoped>
@import './index.css';
</style>
