<template>
  <div>
      <a @click.prevent="sendToCreationPage()" href="">Create</a>
      <div v-for="quest in questCollection">
        {{quest.title}}
      </div>
  </div>
</template>
<script>
import QuestService from "../service/quest";
export default 
{
    data(){
        return {questCollection: []}
    },
    beforeCreate(){
        return QuestService.get()
            .then(questCollection => this.questCollection = questCollection)
    },
    methods: {
        sendToCreationPage()
        {
            this.$router.push('/quest/new')
        }
    }
}
</script>
