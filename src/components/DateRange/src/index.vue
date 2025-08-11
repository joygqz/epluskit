<script setup lang="ts">
import type { DatePickerInstance } from 'element-plus'
import { ElDatePicker } from 'element-plus'
import { ref, useTemplateRef } from 'vue'
import 'element-plus/es/components/date-picker/style/css'

defineOptions({
  name: 'EkDateRange',
})

const { type = 'date', valueFormat = '' } = defineProps<{
  type?: 'date' | 'datetime' | 'month' | 'year'
  valueFormat?: string
  props?: Record<string, any>
  startProps?: Record<string, any>
  endProps?: Record<string, any>
}>()

const modelValue = defineModel<(Date | null)[]>({
  type: Array,
  default: [],
})

const _valueFormat = valueFormat || (type === 'datetime' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD')

const startValue = ref<Date | null>(null)
const endValue = ref<Date | null>(null)

const startPicker = useTemplateRef<DatePickerInstance>('startPickerRef')
const endPicker = useTemplateRef<DatePickerInstance>('endPickerRef')

function onStartChange(value: Date | null) {
  startValue.value = value
  if (!endValue.value || (endValue.value && value && value > endValue.value)) {
    endValue.value = startValue.value
    endPicker.value?.focus()
  }

  if (!value) {
    endValue.value = null
  }

  modelValue.value = [startValue.value, endValue.value]
}
function onEndChange(value: Date | null) {
  endValue.value = value
  if (!startValue.value || (startValue.value && value && value < startValue.value)) {
    startValue.value = endValue.value
    startPicker.value?.focus()
  }

  if (!value) {
    startValue.value = null
  }

  modelValue.value = [startValue.value, endValue.value]
}

const startPlaceholder = type === 'month' ? '开始月份' : type === 'year' ? '开始年' : type === 'datetime' ? '开始日期时间' : '开始日期'
const endPlaceholder = type === 'month' ? '结束月份' : type === 'year' ? '结束年' : type === 'datetime' ? '结束日期时间' : '结束日期'
</script>

<template>
  <div
    class="ek-date-range" :style="{
      '--ek-date-range-width': type === 'month' ? '300px' : type === 'date' ? '350px' : type === 'datetime' ? '450px' : '220px',
    }"
  >
    <ElDatePicker
      ref="startPickerRef" v-model="startValue" :type="type" :placeholder="startPlaceholder" :value-format="_valueFormat"
      v-bind="{
        ...props,
        ...startProps,
      }" @change="onStartChange"
    />
    <span class="ek-date-range-separator">至</span>
    <ElDatePicker
      ref="endPickerRef" v-model="endValue" :type="type" :placeholder="endPlaceholder" :value-format="_valueFormat"
      v-bind="{
        ...props,
        ...endProps,
      }" @change="onEndChange"
    />
  </div>
</template>

<style scoped>
@import './index.css';
</style>
