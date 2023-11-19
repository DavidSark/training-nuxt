<script setup>
const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))


const env = useRuntimeConfig()

const props = defineProps({
    title: Array,
    text: Array,
    buttons: Array,


})

const { data: recipes } = await useAsyncData('recipes', async () => {
    return $fetch(env.public.apiUrl + '/recipes')
})



</script>

<template>
    <div class="hero">
        <div class="hero__deliveryButton">
            <ButtonDelivery></ButtonDelivery>
        </div>
        <div class="hero__title">
            <div class="hero__title-space">
                <MyTitle el="h2" size="big" bold="bold">
                    <PrismicRichText :field="title"></PrismicRichText>
                </MyTitle>
            </div>
            <MyDesc>
                <PrismicRichText :field="text"></PrismicRichText>
            </MyDesc>

            <div class="hero__buttons">
                <div v-for="button in buttons">
                    <MyButton :href="button.button_link.url" :variant="button.button_type">
                        {{ button.button_label }}
                    </MyButton>
                </div>
            </div>
        </div>
        <div class="hero__cardsmenu">
            <HeroCard :menucard="home.data.menucard"></HeroCard>
            <div class="hero__cardsmenu-bg"></div>
        </div>
    </div>
</template>

<style lang="scss" >
.hero {
    text-transform: capitalize;
    position: relative;
    display: flex;
    padding-top: rem(30);
    justify-content: space-between;

    &__deliveryButton {
        position: absolute;
        top: rem(40);
    }

    &__title {
        width: rem(650);
        min-width: rem(600);
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
            color: $black;
        }

        &-space {
            margin: rem(140) 0 rem(50) 0;
            strong{
                color: $primary-color;
            }
        }
    }

    &__cardsmenu {

        position: relative;
        padding-right: rem(40);

        &-bg {
            position: absolute;
            width: rem(445);
            height: rem(837);
            background: #D9D9D9;
            z-index: -99;
            top: 0;
            right: 0;
            border-radius: rem(30);
            background: linear-gradient(200deg, #D9D9D9 -18.39%, rgba(217, 217, 217, 0.00) 89.51%);
        }
    }

    &__buttons {
        margin-top: rem(80);
        display: flex;
        gap: rem(40);
        align-items: center;
        &-order {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: rem(20);
        }
    }

}
</style>