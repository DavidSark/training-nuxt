<script setup>
const props = defineProps({
service: Array
})
</script>

<template>
    <div class="card__grid">
        <div v-for="(item, index) in service" :key="index">
        <ServiceCardItem :title="item.service_title" :text="item.service_text" :image="item.service_icon" />
    </div>
    </div>
</template>

<style lang="scss" scoped>
.card__grid{
    display: grid;
    gap: rem(20);
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
</style>