<script setup>
const props = defineProps({
    tag: String,
    title: String,
    items: Array,
    titles: Array
})

const isOdd = (index) => {
    return index % 2 !== 0
}


</script>

<template>
    <section class="c-how-to">
        <div v-for="item  in titles" >
            <PrismicRichText class="c-text" :field="item.howto_subtitle" />
            <PrismicRichText class="c-title" :field="item.howto_title" />
        </div>
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
    .c-text {
    display: flex;
    justify-content: center;
    color: $primary-color;
    margin-top: rem(130);
    font-size: $small-font-size;
}

.c-title {
    display: flex;
    justify-content: center;
    font-size: $big-font-size;
    margin-top: rem(10);
    margin-bottom: rem(40);
}
}
</style>