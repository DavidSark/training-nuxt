<script setup>
const props = defineProps({
    servicetitle: Array,
    service: Array
})
</script>

<template>
    <div>
        <div  v-for="(item, index) in servicetitle" :key="index">
            <PrismicRichText class="c-text" :field="item.sub_title"/>
            <PrismicRichText class="c-title" :field="item.service_title"/>
        </div>
        <div class="c-card__grid">
            <div v-for="(item, index) in service" :key="index">
            <ServiceCardItem :title="item.service_title" :text="item.service_text" :image="item.service_icon" />
        </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.c-text {
  display: flex;
  justify-content: center;
  color:$primary-color;
  margin-top: rem(130);
  font-size: $medium-font-size;
}

.c-title {
  display: flex;
  justify-content: center;
  font-size:$big-font-size;
  margin-top:rem(10);
}

.c-card__grid{
    margin-top:rem(40) ;
    display: grid;
    gap: rem(20);
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
</style>