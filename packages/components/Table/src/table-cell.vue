<script setup lang="ts">
import type { TableColumn } from '@/types'
import { ElTableColumn } from 'element-plus'

defineOptions({
  name: 'TableCell',
})

defineProps<{
  columns: TableColumn[]
}>()

function getColumn(column: TableColumn) {
  const { children, ...rest } = column
  return rest as TableColumn
}
</script>

<template>
  <ElTableColumn
    v-for="column in columns" :key="column.columnKey || column.prop || column.label" v-bind="column"
  >
    <template #default="scoped">
      <slot name="bodyCell" v-bind="scoped">
        {{ getColumn(column) }}
        <TableCell v-if="column.children && column.children.length" :columns="column.children" />
      </slot>
    </template>
    <template #header="scoped">
      <slot name="headerCell" v-bind="scoped" />
    </template>
    <template #expand="scoped">
      <slot name="expandCell" v-bind="scoped" />
    </template>
    <template #filter-icon="scoped">
      <slot name="filterIconCell" v-bind="scoped" />
    </template>
  </ElTableColumn>
</template>

<style scoped></style>
