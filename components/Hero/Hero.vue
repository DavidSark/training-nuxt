<script setup>
const env = useRuntimeConfig()
import MyButton from '../elements/MyButton.vue';
import RecipeCard from '../RecipeCard.vue';
const props = defineProps({
    title: Array,
    text: Array,
    buttons: Array
})

const { data: recipes } = await useAsyncData('recipes', async () => {
    return $fetch(env.public.apiUrl + '/recipes')
})



</script>

<template>
    <div>
        <section class="c-hero">
            <div class="c-hero__title">
                <PrismicRichText :field="title"></PrismicRichText>
            </div>

            <div class="c-hero__text">
                <PrismicRichText :field="text"></PrismicRichText>
            </div>

            <div class="c-hero__buttons">
                <div v-for="button in buttons">
                <MyButton :href="button.button_link.url" :variant="button.button_type">{{ button.button_label }}</MyButton>
                </div>
            </div>

            <div class="recipes-list">
                <div v-for="(recipes, index) in recipes" :key="recipe_id">
                    <RecipeCard :title="recipes.recipe_name" :description="recipes.recipe_description"
                        :image="recipes.image_url" :id="recipes.recipe_id"></RecipeCard>
                </div>
            </div>


        </section>
    </div>
</template>

<style lang="scss" >
.c-hero {
    &__title {
        font-size: 48px;
        font-weight: 700;
        line-height: 1.2;
        color: black;

        strong {
            color: orange;

        }
    }

    .recipes-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: rem(40);
  }

    &__text {
        font-size: 18px;
        line-height: 1.3;
        color: black
    }

    &__buttons {
        display: flex;
        flex-flow: row wrap;
        align-items: center;

        &:not(:first-child) {
            margin-top: 2rem;
        }
    }
}
</style>