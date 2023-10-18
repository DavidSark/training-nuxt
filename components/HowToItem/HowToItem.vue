

<script setup>
const props = defineProps({
    image: Object,
    title: Array,
    text: Array,
    reversed: Boolean,
})
</script>

<template>
    <div :class="['c-how-to-item', {'-is-reversed': reversed}]">
        <img :src="image.url" :alt="image.alt" class="c-how-to-item__image">
        <div class="c-how-to__content" >
            <PrismicRichText class="c-how-to-item__title" :field="title"/>
            <PrismicRichText class="c-how-to-item__text" :field="text"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.c-how-to-item{
    $self:&;
    display:flex;
    flex-flow: column wrap;
    padding: 0 2rem;
    border:1px solid red;

    &.-reversed{
        flex-flow: column-reverse wrap;
        border: 1px solid green;
    }
}
</style>