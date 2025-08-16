<script setup lang="ts">
import { ElTableColumn } from 'element-plus'
import { omit } from 'es-toolkit'
import VNodeRenderer from '@/utils/v-node-renderer'

defineOptions({
  name: 'TableCell',
})

defineProps<{
  columns: any[]
}>()
</script>

<template>
  <ElTableColumn
    v-for="column in columns" :key="column.columnKey || column.prop || column.label" v-bind="omit(column, ['children'])"
  >
    <template #default="scope">
      <VNodeRenderer v-if="column.customRender" :vnode="column.customRender(scope.row[column.prop], scope, column)" />
      <slot v-else name="bodyCell" v-bind="{ scope, column }">
        <TableCell v-if="column.children && column.children.length" :columns="column.children">
          <template v-if="$slots.bodyCell" #bodyCell>
            <slot name="bodyCell" v-bind="scope" />
          </template>
          <template v-if="$slots.headerCell" #headerCell>
            <slot name="headerCell" v-bind="scope" />
          </template>
          <template v-if="$slots.expandCell" #expandCell>
            <slot name="expandCell" v-bind="scope" />
          </template>
          <template v-if="$slots.filterIconCell" #filterIconCell>
            <slot name="filterIconCell" v-bind="scope" />
          </template>
        </TableCell>
      </slot>
    </template>
    <template v-if="$slots.headerCell" #header="scope">
      <slot name="headerCell" v-bind="{ scope, column }" />
    </template>
    <template v-if="$slots.expandCell" #expand="scope">
      <slot name="expandCell" v-bind="{ scope, column }" />
    </template>
    <template v-if="$slots.filterIconCell" #filter-icon="scope">
      <slot name="filterIconCell" v-bind="{ scope, column }" />
    </template>
  </ElTableColumn>
</template>

<style scoped></style>
