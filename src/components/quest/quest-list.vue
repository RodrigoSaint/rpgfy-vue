<template>
    <div class="two-third semi-transparent-background basic-spacing">
        <div style="margin-right: 10px">
            <h1>Quest List</h1>
            <a @click.prevent="sendToCreationPage()" href="">Create Quest</a>
            <hr>
        </div>
        <div class="flex three" style="max-height: 50vh; overflow-y: scroll">
            <div class="quest" :key="quest._id" v-for="quest in questCollection">
                <label for="modal_1">
                    <div class="card" >
                        <header>
                            <h3>{{quest.title}}</h3>
                        </header>
                        <img :src="quest.mob.image" :alt="quest.mob.description" class="quest-image">   
                        <footer>
                            <star-rating disabled="true" v-model="quest.difficulty"></star-rating>
                        </footer>
                    </div>
                </label>
            </div>
        </div>
  </div>
</template>
<script>
import QuestService from "@/service/quest";
import QuestStatus from '@/model/quest.status';
import mutationTypes from "@/store/mutation-types";
import StarRating from "@/components/common/star-rating";
import moment from 'moment';

export default 
{
    components:{StarRating},
    data(){
        return {questCollection: []}
    },
    beforeCreate(){
        this.$store.commit(mutationTypes.CHANGE_BACKGROUND, 'background-plain')
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
<style scoped>
    footer{
        min-height: 50px;
    }
    footer > div
    {
        display: table; 
        margin: auto;
    }

    .quest>.card:hover
    {
        cursor: pointer;
        background-color: lightgray;
    }


</style>

