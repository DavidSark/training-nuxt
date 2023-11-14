<script setup>
import { useGlobalStore } from '@/store/global'
const store = useGlobalStore()

onMounted(() => {
  const cart = localStorage.getItem('cart')
  store.setCart(JSON.parse(cart))
})
</script>

<template>
  <div>
    <MyHeader />
    <div class="appmain">

      <NuxtPage />
      <MyFooter />
    </div>
  </div>
</template>

<style lang="scss" >
.appmain {
  overflow: hidden;
}
</style>