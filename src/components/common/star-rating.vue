<template>
  <div>
      <div v-for="number in numberCollection" class="icon"
        :class="{'star': (number <= value), 'star-unselected': (number > value), disabled: disabled }" 
        @click="updateValue(number)"
        :key='number' 
        :value='number'></div>
  </div>
</template>
<script>
export default {
  props: ['value', 'disabled'],
  data(){
      return {
        disabled: false,
        numberCollection: [1,2,3,4,5]
      }
  },
  methods: {
    updateValue: function (value) 
    {
      if(!this.disabled) this.$emit('input', value)
    }
  }
}
</script>
<style scoped>
    .icon.star, .icon.star-unselected
    {
        transform: scale(1.25, 1.25);
        margin-right: 20px;
        margin-top: 5px;
        cursor: pointer;
    }
    .icon.star.disabled{
      cursor: default;
    }
</style>
