<script setup>
import {useGlobalStore} from '@/store/global'
const store = useGlobalStore()

onMounted (()=>{
  const cart = localStorage.getItem('cart')
  store.setCart(JSON.parse(cart))
})
</script>

<template>
  
    <MyHeader/>
    <NuxtPage/>
   <MyFooter/>
  
</template>
