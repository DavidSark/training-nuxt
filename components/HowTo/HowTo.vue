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
        <div v-for="item  in titles">
            <PrismicRichText class="c-text" :field="item.howto_subtitle" />
            <PrismicRichText class="c-title" :field="item.howto_title" />
        </div>
        <div class="c-how-to-content">
            <div v-for="(item, index) in items" :key="index">
                <HowToItem :reversed="isOdd(index)" :middle="index === 1" :end="index === 2" :endtext="index === 2"
                    :title="item.how_to_title" :text="item.how_to_text" :image="item.how_to_image" />
            </div>


        </div>
        <div class="c-how-to-content-line">
            <img src="/line.png" alt="">
        </div>
        <div class="c-how-to-content-line2">
            <img src="/line2.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
.c-how-to {
    position: relative;

    &-content {
        display: flex;
        justify-content: space-between;

        &-line,
        &-line2 {
            display: none;
        }
    }

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

@media screen and (min-width:1510px) and (max-width:1537px) {
    .c-how-to {
        &-content {
            &-line {
                display: block;
                position: absolute;
                width: 26vw;
                top: 34.5%;
                left: 10%;
            }

            &-line2 {
                display: block;
                position: absolute;
                width: 26vw;
                top: 34.5%;
                right: 10%;
            }
        }
    }
}
</style>