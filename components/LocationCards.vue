<script setup>
import MyIcon from './elements/MyIcon.vue'
import MyTitle from './elements/MyTitle.vue'
import MyDesc from './elements/MyDesc.vue'
</script>

<template>
    <div class="cards">
        <div class="cards__element">
            <MyIcon name="clock" color="orange" stroke="white" size="small"></MyIcon>
            <MyTitle el="h2" bold="bold">Today 10:00am - 10:00pm</MyTitle>
            <MyDesc size="small">Working time</MyDesc>
        </div>
        <div class="cards__element -bord">
            <MyIcon name="map" color="orange" stroke="white" size="small"></MyIcon>
            <MyTitle el="h2" bold="bold">Today 10:00am - 10:00pm</MyTitle>
            <MyDesc size="small">Working time</MyDesc>
        </div>
        <div class="cards__element">
            <MyIcon name="phone" color="orange" stroke="white" size="small"></MyIcon>
            <MyTitle el="h2" bold="bold">Today 10:00am - 10:00pm</MyTitle>
            <MyDesc size="small">Working time</MyDesc>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cards {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: rem(50);
        background: $white;
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.05);
        
        &__element{
            display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: rem(0) rem(50)
                  
           
        }
        .-bord{
                border-left: 1px solid $black;
                border-right: 1px  solid $black;
                height: rem(163);
                padding: rem(0) rem(50)
            }
        
    }
</style>