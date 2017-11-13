<template>
  <div>
      <icon v-for="number in numberCollection" 
        :class="{'star': (number <= value), 'star-unselected': (number > value) }" 
        @click="updateValue(number)"
        :key='number' 
        :value='number'></icon>
  </div>
</template>
<script>
export default {
  props: ['value'],
  data(){
      return {numberCollection: [1,2,3,4,5]}
  },
  methods: {
    updateValue: function (value) 
    {
      this.$emit('input', value)
    }
  }
}
</script>
<style scoped>
    icon.star, icon.star-unselected{
        transform: scale(1.25, 1.25);
        margin-right: 20px;
        margin-top: 5px;
        cursor: pointer;
    }
</style>
