<script setup lang="ts">
import { ElTableColumn } from 'element-plus'
import { omit } from 'es-toolkit'

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
    <template #default="scoped">
      <slot name="bodyCell" v-bind="{ scoped, column }">
        <TableCell v-if="column.children && column.children.length" :columns="column.children">
          <template v-if="$slots.bodyCell" #bodyCell>
            <slot name="bodyCell" v-bind="scoped" />
          </template>
          <template v-if="$slots.headerCell" #headerCell>
            <slot name="headerCell" v-bind="scoped" />
          </template>
          <template v-if="$slots.expandCell" #expandCell>
            <slot name="expandCell" v-bind="scoped" />
          </template>
          <template v-if="$slots.filterIconCell" #filterIconCell>
            <slot name="filterIconCell" v-bind="scoped" />
          </template>
        </TableCell>
      </slot>
    </template>
    <template v-if="$slots.headerCell" #header="scoped">
      <slot name="headerCell" v-bind="{ scoped, column }" />
    </template>
    <template v-if="$slots.expandCell" #expand="scoped">
      <slot name="expandCell" v-bind="{ scoped, column }" />
    </template>
    <template v-if="$slots.filterIconCell" #filter-icon="scoped">
      <slot name="filterIconCell" v-bind="{ scoped, column }" />
    </template>
  </ElTableColumn>
</template>

<style scoped></style>
