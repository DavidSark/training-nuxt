<script setup>

const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
useSeoMeta({
  title: home.value.data.meta_title,
  ogTitle: home.value.data.meta_title,
  description: home.value.data.meta_description,
  ogDescription: home.value.data.meta_description,
  ogImage: home.value.data.meta_image.url,
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <div class="main">

    <Hero :title="home.data.hero_title" :text="home.data.hero_text" :buttons="home.data.hero_buttons" />

    <Information :information="home.data.information" />
    
    <RecipeCard :sectiontitle="home.data.menusection"></RecipeCard>

    <ServiceCard :servicetitle="home.data.servicetitle" :service="home.data.service" />

    <HowTo :titles="home.data.howtotitle" :items="home.data.how_to"/>

    <Testimonial :testimonial="home.data.testimonial" />

    <Newsletter :newsletter="home.data.newsletter" :button="home.data.newsletter_button" />

  </div>
</template>

<style lang="scss" scoped>
.main {
  margin: 0 rem(110) 0 rem(110);
}
</style>