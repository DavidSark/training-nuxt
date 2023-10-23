<script setup>
const props = defineProps({
    menucard: Array
})
</script>

<template>
    <div class="grid">
        <div v-for="item in menucard">
            <HeroCardItem :image="item.menucard_image" :title="item.menucard_title" :text="item.menucard_text" :price="item.menucard_price"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .grid{
        display: grid;
        grid-template-columns: repeat(2, 280px);
    }
</style>