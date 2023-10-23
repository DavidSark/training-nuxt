<script setup>
const props = defineProps({
service: Array
})
</script>

<template>
    <div v-for="(item, index) in service" :key="index">
      
        <ServiceCardItem :title="item.service_title" :text="item.service_text" :image="item.service_icon" />
    </div>
</template>

<style lang="scss" scoped>

</style>