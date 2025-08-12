<script setup lang="ts">
const columns = [
  {
    label: 'Name',
    prop: 'name',
  },
]
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
]
</script>

<template>
  <EkTable :columns="columns" :data="data">
    <template #bodyCell="{ column, record }">
      <span v-if="column.key === 'operation'">{{ record }}</span>
    </template>
    <template #headerCell="{ column }">
      <span v-if="column.key === 'operation'">操作121</span>
    </template>
  </EkTable>
</template>

<style scoped>

</style>
