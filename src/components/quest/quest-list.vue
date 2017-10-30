<template>
  <div class="flex one center">
    <div class="two-third">
        <h1>Quest List</h1>
        <a @click.prevent="sendToCreationPage()" href="">Create Quest</a>
        <div class="flex three">
            <article class="card quest-card-space" v-for="quest in questCollection">
                <header>
                    <h3>{{quest.title}}</h3>
                </header>
                <footer>
                    <button class="success" @click="completeQuest(quest)">Fight</button>
                    <button class="error" @click="failQuest(quest)">Give Up</button>
                    <button @click="changeDueDate(quest)">Flee</button>
                </footer>
            </article>
        </div>
    </div>
  </div>
</template>
<script>
import QuestService from "@/service/quest";
import QuestStatus from '@/model/quest.status';
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
