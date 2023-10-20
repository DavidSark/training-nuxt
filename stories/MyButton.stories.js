import MyButton from '@/components/elements/MyButton.vue'

export default {
  title: 'Elements/MyButton',
  component: MyButton,
  argTypes: {
    href : {
      control: "text"
    },
    size: {
      control: "select",
      options: ['regular', 'small']
    },
    variant: {
      control: "select",
      options: ['default', 'rounded']
    },
    sizeText:{
      control: "select",
      options: ['default', 'medium']
    }
  }
}

export const PrimaryButton = {
  render: (args) => {
    return {
      components: {
        MyButton,
      },
      setup(){
        return { args }
      },
      template: `<MyButton v-bind="args">See more Product</MyButton>`
    }
  },
  args: {
    size: "regular",
    variant: "default",
  }
}

export const SecondaryButton = {
  ...PrimaryButton,
  args: {
    size: "regular",
    variant: "rounded"
  }
}


export const SmallPrimaryButton = {
  ...PrimaryButton,
  args: {
    size: "small",
    variant: "default"
  }
}

export const SmallSecondaryButton = {
  ...PrimaryButton,
  args: {
    size: "small",
    variant: "rounded"
  }
}
