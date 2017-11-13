<template>
    <div>
        <label for="modal_1" class="button">Select mob</label>

        <div class="modal">
            <input id="modal_1" type="checkbox" />
            <label for="modal_1" class="overlay"></label>
            <div>
                <header>
                    <h3>Select a mob</h3>
                    <label for="modal_1" class="close">&times;</label>
                </header>
                <div>
                    <div class="flex one">
                        <input v-model="filter" type="text">
                        <div class="component-row" v-if="selectedItem">
                            <img class="component-image" :src="selectedItem.image" :alt="selectedItem.name"> <label>{{selectedItem.name}}</label>                            
                        </div>
                        <div class="component-row" @click="selectItem(item)" v-bind:key="item.name" v-for="item in itemListFiltered">
                            <img class="component-image" :src="item.image" :alt="item.name"> <label>{{item.name}}</label>
                        </div>
                    </div>
                </div>
                <footer>
                    <a class="button" href="#">Select item</a>
                    <label for="modal_1" class="button dangerous">
                        Cancel
                    </label>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
export default 
{
  computed: {
      itemListFiltered: function () 
      {
          return this.itemList.filter(item => item.name.toLowerCase().indexOf(this.filter.toLowerCase()) != -1)
      }
  },
  data () {
      return {
          display: false,
          filter: '',
          selectedItem: null,
          itemList: [
            {name: 'Mob 1', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'},
            {name: 'Mob 2', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'},
            {name: 'Mob 3', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'},
            {name: 'Mob 4', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'}
        ]
      }
  },
  methods: {
      selectItem(item)
      {
          this.selectedItem = item;
      }
  }
}
</script>
<style>
    .component-image
    {
        max-height: 100px;
        max-width: 200px;
        border: 1px solid black;
        border-radius: .2px;
    }

</style>
