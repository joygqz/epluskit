<script setup lang="ts">
const columns = [
  // {
  //   label: '1',
  //   type: 'expand',
  //   key: 'expand',
  // },
  {
    label: '2',
    type: 'selection',
  },
  {
    label: '3',
    type: 'index',
  },
  {
    label: 'Name',
    prop: 'name',
    children: [

      {
        label: 'Tel',
        prop: 'tel',
      },
      {
        label: 'Phone',
        prop: 'phone',
      },
      {
        label: 'Address',
        prop: 'address',
        customRender: (text: string) => {
          return `地址：${text}`
        },
      },
    ],
  },
  {
    label: 'Name1',
    key: 'operation',
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
    children: [
      {
        key: '4',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '5',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
      },
    ],
  },
]
</script>

<template>
  <EkTable
    :columns="columns" :data="data" row-key="key"
    default-expand-all
  >
    <template #bodyCell="{ column }">
      <div v-if="column.key === 'operation'">
        操作
      </div>
      <div v-if="column.key === 'expand'">
        展开内容
      </div>
    </template>
  </EkTable>
</template>

<style scoped></style>
