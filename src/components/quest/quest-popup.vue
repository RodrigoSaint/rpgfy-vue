<template>
    <div class="modal">
    <input :id="quest._id" v-model="opened" type="checkbox" />
    <label @click="closeModal" class="overlay"></label>
    <article>
        <header>
        <h3>{{quest.title}}</h3>
        <label @click="closeModal" class="close">&times;</label>
        </header>
        <section style="display:inline-block;" class="content">
            <div style="float:left;margin-right: 10px">
                <img :src="quest.mob.image" :alt="quest.title" class="quest-image">   
                <div style="margin:auto">
                    <star-rating disabled="true" v-model="quest.difficulty"></star-rating>
                </div>
            </div>
            <strong>{{quest.mob.name}}</strong>
            <div>{{quest.mob.description}}</div>
            <strong>Description</strong>
            <div>{{quest.description}}</div>
        </section>
        <footer>
        <button @click="completeQuest" class="success">Fight</button>
        <button @click="failQuest" class="warn">Run</button>
        <button @click="changeDueDate" class="error">Give up</button>
        </footer>
    </article>
    </div>
</template>

    
<script>
import QuestService from "@/service/quest";
import QuestStatus from '@/model/quest.status';
import StarRating from "@/components/common/star-rating";

import moment from 'moment';

export default 
{
  props: ['quest', 'opened'],
  components: {StarRating},
  methods: {
    closeModal(){
        this.$emit('modal-close');
    },
    completeQuest()
    {
        QuestService.changeStatus(this.quest, QuestStatus.completed)
            .then(() => {
                this.quest.status = QuestStatus.completed;
                alert('Quest completed')
            })
            .then(this.closeModal)
            .catch(() => alert('Error at completing quest'))
    },
    failQuest()
    {
        QuestService.changeStatus(this.quest, QuestStatus.fail)
            .then(() => {
                this.quest.status = QuestStatus.completed;
                alert('Quest fail')
            })
            .then(this.closeModal)
            .catch(() => alert('Error at falling quest'))
    },
    changeDueDate()
    {
        var newDueDate = moment().add(1, 'days').toDate();
        QuestService.changeDueDate(quest, newDueDate)
            .then(() => {
                this.quest.dueDate = newDueDate;
                alert('Quest duedate changed to tomorrow')
            })
            .then(this.closeModal)
            .catch(() => alert('Error at fleeing quest'))
    }
  }
}
</script>
