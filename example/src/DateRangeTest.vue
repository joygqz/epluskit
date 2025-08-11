<script setup lang="ts">
import { EkDateRange } from 'epluskit'
import { ref } from 'vue'

const form = ref({
  dateRange: [],
  dateTimeRange: [],
  monthRange: [],
  yearRange: [],
})
</script>

<template>
  <EkDateRange v-model="form.dateRange" />
  {{ form.dateRange }}
  <EkDateRange v-model="form.dateTimeRange" type="datetime" />
  {{ form.dateTimeRange }}
  <EkDateRange v-model="form.monthRange" type="month" />
  {{ form.monthRange }}
  <EkDateRange v-model="form.yearRange" type="year" />
  {{ form.yearRange }}
</template>

<style scoped></style>
