<template>
  <div>
      <a @click.prevent="sendToCreationPage()" href="">Create</a>
      <div v-for="quest in questCollection">
        {{quest.title}}
        <button @click="completeQuest(quest)">Fight</button>
        <button @click="failQuest(quest)">Give Up</button>
        <button @click="changeDueDate(quest)">Flee</button>
      </div>
  </div>
</template>
<script>
import QuestService from "../service/quest";
import QuestStatus from '../model/quest.status';
import moment from 'moment';
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
        },
        completeQuest(quest)
        {
            QuestService.changeStatus(quest, QuestStatus.completed)
                .then(() => {
                    quest.status = QuestStatus.completed;
                    alert('Quest completed')
                })
                .catch(() => alert('Error at completing quest'))
        },
        failQuest(quest)
        {
            QuestService.changeStatus(quest, QuestStatus.fail)
                .then(() => {
                    quest.status = QuestStatus.completed;
                    alert('Quest fail')
                })
                .catch(() => alert('Error at falling quest'))
        },
        changeDueDate(quest)
        {
            var newDueDate = moment().add(1, 'days').toDate();
            QuestService.changeDueDate(quest, newDueDate)
                .then(() => {
                    quest.dueDate = newDueDate;
                    alert('Quest duedate changed to tomorrow')
                })
                .catch(() => alert('Error at fleeing quest'))
        }
    }
}
</script>
