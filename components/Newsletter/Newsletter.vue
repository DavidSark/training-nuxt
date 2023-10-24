<script setup>
const props = defineProps({
    newsletter: Array,
    button: Array,
})
</script>

<template>
    <div v-for="item in newsletter">
        <div class="card">
            <img :src="item.newsletter_image.url">
            <div class="card__info">
                <MyTitle el="h4" color="white" size="medium" bold="bold"><PrismicRichText :field="item.newsletter_title" /></MyTitle>
                <PrismicRichText :field="item.newsletter_text" />
                <div class="card__input">
                    <input placeholder="Type your email...">
                    <div class="card__input-absolute" v-for="item in button">
                        <MyButton :href="item.button_link.url" color="orange" size="small">{{item.button_label}}</MyButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    margin: rem(120) 0;
    background: $black;
    max-height: rem(300);
    border-radius: rem(50);
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        width: 40%;
        max-width: rem(600);
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: rem(30);
        color: white;
        max-width: fit-content;
        max-width: rem(570);
    }


    &__input {
        position: relative;

        input {
            width: 75%;
            height: rem(72);
            flex-shrink: 0;
            border-radius: rem(15);
            padding-left: rem(20);
            margin-right: rem(320);
            font-size: $regular-font-size;

            &:focus {
          outline: none;         
            }
        }
       
        &-absolute {
            position: absolute;
            top: 50%;
            right: 23%;
            transform: translateY(-50%);
        }
    }

}

@media screen and (max-width:1280px) {
    .card {
        img {
            display: none;
        }
    }
}
</style>