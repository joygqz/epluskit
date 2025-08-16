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
  columns?: any[]
  data?: Record<string, any>[]
}>()
</script>

<template>
  <ElTable :data="data" :border="true" :stripe="true" v-bind="$attrs">
    <TableCell v-if="columns && columns.length" :columns="columns">
      <template #bodyCell="scope">
        <slot name="bodyCell" v-bind="scope" />
      </template>
      <template #headerCell="scope">
        <slot name="headerCell" v-bind="scope" />
      </template>
      <template #expandCell="scope">
        <slot name="expandCell" v-bind="scope" />
      </template>
      <template #filterIconCell="scope">
        <slot name="filterIconCell" v-bind="scope" />
      </template>
    </TableCell>
    <template #empty="scope">
      <slot name="empty" v-bind="scope" />
    </template>
    <template #append="scope">
      <slot name="append" v-bind="scope" />
    </template>
  </ElTable>
</template>

<style scoped>
@import './index.css';
</style>
