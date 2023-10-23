<script setup>
const props = defineProps({
    image: Object,
    title: Array,
    text: Array,
})
</script>



<template>
  <div class="card__content">
   
    <img :src="`/icons/${image}.svg`" >
    <p class="card__content-width">
      <PrismicRichText :field="title" />
      <PrismicRichText :field="text" />
    </p>
  </div>
</template>

<style lang="scss" scoped>

.card__content{
  display: inline-flex;
  padding: rem(103) rem(52);
  flex-direction: column;
  align-items: center;
  gap:rem(42);
  transition: all .5s;
 
  border-radius: rem(35);
  border: 1px solid $gray;
  background: $white;
  
  

  &-width{
    min-width: rem(300);
    max-width: rem(380);
    text-align: center;
  }

 

}

.card__content:hover{
  cursor: pointer;
  border: 1px solid rgba(182, 182, 182, 0.00);
  box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.15);
}

.title{
  font-size: $regular-font-size;
    }
</style>