<!-- #region snippet -->
<template>
  <a-space :size="24" direction="vertical">
    <x-qrcode :error-level="level" :value="text"></x-qrcode>
    <a-segmented v-model:value="level" :options="segmentedData" />
  </a-space>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('http://xy-admin.xuanyunet.com')
const segmentedData = ['L', 'M', 'Q', 'H']
const level = ref(segmentedData[0])
</script>
