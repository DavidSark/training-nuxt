<script setup>
const props = defineProps({
image: Object,
title: Array,
text: Array,
price: Array
})
</script>

<template>
   <div class="card">
    <div class="card__image" >
     <img :src="image.url" :alt="image.alt">
    </div>

    <div class="card__content">
      <div class="card__content-flex">
        <PrismicRichText :field="title"/>
        <PrismicRichText :field="text"/>
        <PrismicRichText :field="price"/>
      </div>
      <div class="card__content-icon">
        
        <MyIcon name="right arrow2" color="black" stroke="white"></MyIcon>
    
        <MyIcon name="left arrow" color="white" stroke="black"></MyIcon>
       
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

.card{
  border: 1px solid black;
  margin-top: 100px;
  border-radius: 1.875rem;
  background: $white;
  box-shadow: 0px 0px 31px 0px rgba(0, 0, 0, 0.05);
  width: rem(258);
  height: rem(275);
  position: relative;
 &__image img{
   position: absolute;
    width: rem(260);
    top: rem(30);
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2); 
 } 



  &__content{
    &-flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: rem(140);
    gap: 10px;
    position: relative;
    
    }
    &-icon{
    position: absolute;
    display: flex;
    gap: 30px;
    bottom: rem(-50);
    left: 50%;
    transform: translate(-50%, -50%);    
    }
  }
  
  span{
    color: #EE140A;
  }
 
}
</style>