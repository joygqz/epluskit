<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref<Date[]>([])
const val2 = ref<Date[]>([])
const val3 = ref<Date[]>([])
const val4 = ref<Date[]>([])
</script>

<template>
  <el-form :inline="true">
    <el-form-item label="日期范围">
      <EkDateRange v-model="val1" />
      {{ val1 }}
    </el-form-item>
    <el-form-item label="日期范围（时间）">
      <EkDateRange v-model="val2" type="datetime" />
      {{ val2 }}
    </el-form-item>
    <el-form-item label="月份范围">
      <EkDateRange v-model="val3" type="month" />
      {{ val3 }}
    </el-form-item>
    <el-form-item label="年份范围">
      <EkDateRange v-model="val4" type="year" />
      {{ val4 }}
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
