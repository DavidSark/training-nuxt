<script setup>
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
    <div class="recipes-list">
        <div v-for="(recipes, index) in recipes" :key="recipe_id">
            <RecipeCardItem :title="recipes.recipe_name" :description="recipes.recipe_description"
                :image="recipes.image_url" :id="recipes.recipe_id" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.recipes-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: rem(40);
}
</style>