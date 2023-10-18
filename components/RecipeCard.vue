<script setup>
defineProps({
  id: Number,
  title: String,
  description: String,
  image: String
})

import { useGlobalStore} from '@/store/global'
const store = useGlobalStore();

const isAlreadyInCart = (id) =>{
  return store.cart.includes(id)
}

const buttonLabel = computed(()=> isAlreadyInCart(id) ? 'Remove from cart' : 'Add to cart')
</script>

<template>  
 

 <div class='card'>
    <div class='card__image'>
      <img :src='image' :alt='imageAlt'/>
    </div>

    <div class="card__content">
      <div class="card__content-flex">
        <MyTitle el="h2" size='small' bold="bold" >{{ title }}</MyTitle>
      </div>
      <div class='card__button'>
        <div class="card__button-flex">
        <MyButton v-if="!isAlreadyInCart(id)" variant='rounded' size='small' @click="store.addToCart(id)">Add to Cart</MyButton>
        <MyButton v-else variant='rounded' size='small' @click="store.removeFromCart(id)">Remove</MyButton>
        </div>
        <MyButton variant='rounded' bg="nobg" size='small' class="test"><RouterLink :to="`/recipes/${id}`">Plus d'infos</RouterLink></MyButton>
    
        <!-- <RouterLink :to="`/recipes/${id}`">Plus d'info</RouterLink> -->
      </div>
    </div>
  </div>










 <!-- <div class="c-recipe-card">
    <div class="c-recipe-card__content">
      <div class="c-recipe-card__content-flex">
        <img class="c-recipe-card__image" :src="image" alt="">
        <p class="c-recipe-card__title">{{ title }}</p>
        <p class="c-recipe-card__description">{{ description }}</p>
      </div>
      <RouterLink :to="`/recipes/${id}`">Plus d'infos</RouterLink>
    </div>
   
  </div> -->




</template>








<style lang="scss">
.card{
 border-radius: rem(20);
 overflow: hidden;
 box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.10);
 &__image img{ 
    object-fit: cover;
    height: 100%;
    width: 100%;
    aspect-ratio: 1;
 }
 &__content{
  padding: rem(0) rem(10) rem(40) rem(10);
 
  &-flex{
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    &-note{
      display: flex;
      align-items: center;
      p{
        font-size: $small-font-size;
      }
    }
  }
 
 }
 &__button{
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-flex{display: flex; flex-direction: column; gap: 10px;}
  > * {
    a{
      text-decoration: none;
      color: $primary-color;
    }
  }
 }
}
</style>