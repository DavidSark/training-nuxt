<script setup>
const props = defineProps({
    tag: String,
    title: String,
    items: Array,
})

const isOdd = (index) => {
    return index % 2 !== 0
}


</script>

<template>
    <section class="c-how-to">
        <span class="c-how-to__tag">{{ tag }}</span>
        <h2 class="c-how-to__title">{{ title }}</h2>
        <div class="c-how-to__list">
            <div v-for="(item, index) in items" :class="['c-how-item']">
                <HowToItem :reversed="isOdd(index)" :title="item.how_to_title" :text="item.how_to_text" :image="item.how_to_image"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.c-how-to{
    &__list{
        display:flex;
        flex-flow:row wrap;
    }

    &__item {
        flex: 1;
    }
}
</style>