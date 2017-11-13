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
                        <div class="component-row selected-item" v-if="selectedItem">
                            <img :src="selectedItem.image" :alt="selectedItem.name"> 
                            <h3>
                                <div class="icon star"></div>
                                {{selectedItem.name}}
                            </h3>
                            <p>{{selectedItem.description}}</p>
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
export default 
{
  computed: {
      itemListWithoutSelected: function () 
      {
        return this.itemList.filter(item => item != this.selectedItem);  
      },
      itemListFiltered: function () 
      {
          return this.itemListWithoutSelected.filter(item => item.name.toLowerCase().indexOf(this.filter.toLowerCase()) != -1)
      }
  },
  data () {
      return {
          display: false,
          filter: '',
          selectedItem: null,
          itemList: [
            {name: 'Mob 1', description: 'It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'},
            {name: 'Mob 2', description: 'It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'},
            {name: 'Mob 3', description: 'It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'},
            {name: 'Mob 4', description: 'It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'},
            {name: 'Mob 5', description: 'It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'},
            {name: 'Mob 6', description: 'It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'},
            {name: 'Mob 7', description: 'It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.', image: 'http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772'}
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
