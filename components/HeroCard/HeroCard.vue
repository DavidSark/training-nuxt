<script setup>
const props = defineProps({
  card: Array
})
</script>

<template>
   
   <div class="card" v-for="item in card">
    <div class="card__image" >
      <img :src="item.hero_card_image.url" :alt="item.hero_card_image.alt" :class="className">
    </div>

    <div class="card__content">
      <div class="card__content-flex">
      
      </div>
      <div class="card__content-icon">
        
        <MyIcon name="right arrow2" color="black" stroke="white"></MyIcon>
    
        <MyIcon name="left arrow" color="white" stroke="black"></MyIcon>
       
      </div>
    </div>
    <div v-for="item in card">
    <PrismicRichText :field="item.hero_card_title"></PrismicRichText>
    <PrismicRichText :field="item.hero_card_description"></PrismicRichText>
    <img :src="item.hero_card_image.url" />
    <PrismicRichText :field="item.hero_card_price"></PrismicRichText>
   </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
  margin-top: 100px;
  border-radius: 1.875rem;
  background: $white;
  box-shadow: 0px 0px 31px 0px rgba(0, 0, 0, 0.05);
  width: rem(258);
  height: rem(275);
  position: relative;
  &__image img{
    position: absolute;
    width: rem(350);
    top: rem(40);
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