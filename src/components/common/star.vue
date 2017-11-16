<template>
    <div @click="starClicked" class="icon star" :class="starClass"></div>
</template>
<script>
export default 
{
    props: ['star-number', 'value', 'disabled'],
    computed: {
        starClass()
        {
            return {unselected: (this.starNumber > this.value), disabled: this.disabled }
        }
    },
    methods: {
        starClicked()
        {
            this.$emit('click', this.starNumber);
        }
    }
}
</script>