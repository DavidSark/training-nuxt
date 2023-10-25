<script setup>
const props = defineProps({
    testimonial: Array,
})
</script>

<template>
    <div v-for="item in testimonial">

        <PrismicRichText class="c-text" :field="item.testimonial_subtitle" />
        <PrismicRichText class="c-title" :field="item.testimonial_title" />

        <div class="card">
            <div class="card__right">
                <div class="card__right-info">
                    <div class="card__right-info-image">
                        <img :src="item.user_image.url">
                    </div>
                    <div class="card__right-info-desc">
                        <PrismicRichText :field="item.user_name" />
                        <PrismicRichText :field="item.user_job" />
                    </div>
                </div>
                <div class="card__right-text">
                    <PrismicRichText :field="item.user_comment" />
                </div>
                <div class="card__icons-left">
                    <MyIcon color="orange" stroke="white" name="left arrow"></MyIcon>
                </div>

                <div class="card__icons-right">
                    <MyIcon color="orange" stroke="white" name="right arrow2"></MyIcon>
                </div>
            </div>

            <div class="card__left">
                <img :src="item.testimonial_image.url">
            </div>
        </div>





    </div>
</template>

<style lang="scss" scoped>
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

.card {

    display: flex;
    align-items: center;
    margin-bottom: rem(100);

    // gap: rem(100);
    &__right {
        position: relative;
        border-radius: rem(35);
        background: $white;
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.10);
        height: rem(445);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: rem(40);
        margin-bottom: rem(40);
        flex: 1;

        &-info {
            display: flex;
            justify-content: center;
            align-items: center;

            &-image {
                margin: 0 rem(20);

                img {
                    border-radius: 100%;
                }
            }
        }

        &-text {
            width: rem(570);
            margin: 0 auto;
            text-align: center;
            margin-bottom: rem(60);
            padding: 0 40px;
        }
    }

    &__icons-left {
        position: absolute;
        top: 50%;
        left: -3.5%;
    }

    &__icons-right {
        position: absolute;
        top: 50%;
        right: -3.5%;
    }

}</style>