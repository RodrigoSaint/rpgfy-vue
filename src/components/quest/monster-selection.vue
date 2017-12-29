<template>
    <div>
        <label for="modal_1" class="button">Select mob</label>
        <div class="modal">
            <input id="modal_1" type="checkbox" />
            <label for="modal_1" class="overlay"></label>
            <div>
                <header>
                    <h3><div class="icon dragon-mob"></div>Monster Selection</h3>
                    <label for="modal_1" class="close">&times;</label>
                </header>
                <div style="padding: 1em">
                    <div class="flex one">
                        <input v-model="filter" type="text" placeholder="Filter">
                        <div class="component-row selected-item" v-if="value">
                            <img :src="value.image" :alt="value.name"> 
                            <h3>
                                <div class="icon star"></div>
                                {{value.name}}
                            </h3>
                            <p>{{value.description}}</p>
                        </div>
                        <div class="component-row" @click="selectItem(item)" v-bind:key="item.name" v-for="item in itemListFiltered">
                            <img :src="item.image" :alt="item.name"> 
                            <h3><div class="icon star-unselected"></div>{{item.name}}</h3>
                            <p>{{item.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MobService from "@/service/mob";
export default 
{
  computed: {
      itemListWithoutSelected: function () 
      {
        return this.itemList.filter(item => item != this.value);  
      },
      itemListFiltered: function () 
      {
          return this.itemListWithoutSelected
            .filter(item => item.name.toLowerCase().indexOf(this.filter.toLowerCase()) != -1)
      }
  },
  props: ['value'],
  beforeCreate()
  {
      return MobService.get()
        .then(mobCollection => this.itemList = mobCollection);
  },
  data () {
      return {
          display: false,
          filter: '',
          selectedItem: null,
          itemList: []
      }
  },
  methods: {
      selectItem(item)
      {
          this.$emit('input', item);
      }
  }
}
</script>
<style>
    .selected-item
    {
        background-color: lightgray;        
    }
    .component-row > img
    {
        max-height: 100px;
        max-width: 200px;
        float: left;
        margin-right: 1em;
    }

    .component-row
    {
        border-bottom: 1px solid black;
        border-radius: .2px;
    }

    .component-row:hover
    {
        background-color: lightgray;
        cursor: pointer; 
    }

</style>
