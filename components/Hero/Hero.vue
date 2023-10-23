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
    <section class="c-hero">
        <div class="c-hero-flex">
            <div class="c-hero-flex-title">
                <PrismicRichText :field="title"></PrismicRichText>
            </div>

            <div class="c-hero-flex-text">
                <PrismicRichText :field="text"></PrismicRichText>
            </div>

            <div class="c-hero-flex-buttons">
                <div v-for="button in buttons">
                    <MyButton :href="button.button_link.url" :variant="button.button_type">{{ button.button_label }}
                    </MyButton>
                </div>
            </div>
        </div>


        <HeroCard :menucard="home.data.menucard"></HeroCard>


        <RecipeCard></RecipeCard>


    </section>
</template>

<style lang="scss" >
.c-hero {
    &-flex {
        &-text {
            font-size: 18px;
            line-height: 1.3;
            color: black
        }

        &-buttons {
            display: flex;
            flex-flow: row wrap;
            align-items: center;

            &:not(:first-child) {
                margin-top: 2rem;
            }
        }

        &-title {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.2;
            color: black;

            strong {
                color: orange;

            }
        }
    }
}
</style>