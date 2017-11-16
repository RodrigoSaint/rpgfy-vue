<template>
  <div>
    <star v-for="number in numberCollection" :key="number"
      :star-number="number"
      :disabled="disabled"
      :value="value"
      @click="updateValue"></star>
      <!-- <div v-for="number in numberCollection" class="icon"
        :class="{'star': (number <= value), 'star-unselected': (number > value), disabled: disabled }" 
        @click="updateValue(number)"
        :key='number' 
        :value='number'></div> -->
  </div>
</template>
<script>
import Star from "./star";
export default {
  props: ['value', 'disabled'],
  components: {Star},
  data(){
      return {
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

