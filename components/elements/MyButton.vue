<script setup>
import MyIcon from '@/components/elements/MyIcon.vue'
const props = defineProps({
  href: String,
  size: String,
  variant: String,
  color: String,
  bg: String,
  hasIcon: Boolean
})

const className = computed(() => ({
  ' -withIcon': props.hasIcon,
  ' -rounded': props.variant === 'rounded',
  ' -video': props.variant === 'video',
  ' -small': props.size === 'small',
  ' -black': props.color === 'black',
  ' -orange2': props.color === 'orange',
  ' -orange': props.variant === 'orange',
  ' -nobg': props.bg === "nobg",
  
}))

const isVideoButton = computed(() => {
  return props.variant === 'video'
})
</script>
<template>
  <a v-if="href" :href="href" class="c-button" :class="className">
    <MyIcon name="play" stroke="orange" v-if="isVideoButton" />
    <slot></slot>
  </a>

  <button v-else-if="hasIcon" class="c-button -hasIcon" :class="className">
    <slot></slot>
    <MyIcon v-if="hasIcon" :class="className" name="right arrow" color="white" stroke="orange" size="big" />
  </button>

  <button v-else class="c-button" :class="className">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.c-button {
  background-color: $primary-color;
  background: linear-gradient(180deg, $secondary-color 0%, $primary-color 100%);
  border: none;
  border-radius: rem(15);
  box-shadow: 0px rem(4) rem(4) rgba(0, 0, 0, 0.25);
  display: inline-flex;
  gap: rem(29);
  justify-content: space-between;
  align-items: center;
  color: $white;
  font-family: $primary-font;
  font-size: $regular-font-size;
  font-weight: 600;
  padding: rem(20) rem(50);
  text-decoration: none;
  word-wrap: break-word;
  width: fit-content;
  cursor: pointer;
  &.-hasIcon{
    padding: rem(20) rem(10); 
  }
  &.-rounded {
    background: $primary-color;
    box-shadow: none;
    border-radius: rem(37);
    font-weight: 500;
  }

  &.-video {
    background: white;
    box-shadow: none;
    color: black;
  }
  &.-nobg {
    background: transparent;
    box-shadow: none;
    border-radius: rem(37);
    font-weight: 500;
    padding: rem(26) rem(64);
    border: 1px solid $primary-color;
  }
  &.-black {
    a{
      text-decoration: none;
      color: $black;
    }
  }
  &.-orange {
    background: $primary-color;
  }
  &.-orange2 {
    background: $primary-color;
  }
  &.-small {
    font-size: $small-font-size;
    padding: rem(14) rem(29);
    font-weight: 400;
  }
  &.-withIcon {
    padding-top: rem(5);
    padding-bottom: rem(5);
    padding-right: rem(5);
    &.-small {
      gap: rem(13);
    }
  }
}
</style>