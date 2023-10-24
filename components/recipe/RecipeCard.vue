<script setup>
const env = useRuntimeConfig()

const props = defineProps({
    title: Array,
    text: Array,
    buttons: Array,
    sectiontitle:Array
})

const { data: recipes } = await useAsyncData('recipes', async () => {
    return $fetch(env.public.apiUrl + '/recipes')
})


</script>

<template>
    <div>
        <div v-for="item in sectiontitle">
            <PrismicRichText class="c-text" :field="item.menusection_subtitle"></PrismicRichText>
            <PrismicRichText class="c-title" :field="item.menusection_title"></PrismicRichText>
        </div>
        <div class="recipes-list">
            <div v-for="(recipes, index) in recipes" :key="recipe_id">
                <RecipeCardItem :title="recipes.recipe_name" :description="recipes.recipe_description"
                    :image="recipes.image_url" :id="recipes.recipe_id" />
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

.recipes-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: rem(40);
}
</style>