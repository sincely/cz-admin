<template>
  <a-space>
    <a-button type="primary" @click="handleShow({ size: 'large' })">大尺寸</a-button>
    <a-button type="primary" @click="handleShow()">默认尺寸</a-button>
    <a-button type="primary" @click="handleShow({ size: 'small' })">小尺寸</a-button>
  </a-space>
</template>

<script setup>
import { Loading } from '@/components'

defineOptions({
  name: 'GlobalSize'
})

function handleShow(option = {}) {
  Loading.show(option)

  setTimeout(() => {
    Loading.hide()
  }, 2000)
}
</script>
