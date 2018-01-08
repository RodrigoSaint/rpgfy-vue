<template>
    <div class="two-third semi-transparent-background basic-spacing">
        <div style="margin-right: 10px">
            <h1>Quest List</h1>
            <a @click.prevent="sendToCreationPage()" href="">Create Quest</a>
            <hr>
        </div>
        <div class="flex one two-700 three-900" style="max-height: 50vh; overflow-y: scroll">
            <div class="quest" :key="quest._id" v-for="quest in questCollection">
                <div @click="selectQuest(quest)" class="card" >
                    <header>
                        <h3>{{quest.title}}</h3>
                    </header>
                    <img :src="quest.mob.image" :alt="quest.title" class="quest-image">   
                    <footer>
                        <star-rating disabled="true" v-model="quest.difficulty"></star-rating>
                    </footer>
                </div>
            </div>
            <quest-popup v-if="selectedQuest" 
                @modal-close="deselectQuest"
                :opened="modalOpened" 
                :quest="selectedQuest"></quest-popup> 
        </div>
  </div>
</template>
<script>
import mutationTypes from "@/store/mutation-types";
import StarRating from "@/components/common/star-rating";
import QuestService from "@/service/quest";
import QuestStatus from '@/model/quest.status';

import QuestPopup from "./quest-popup";

export default 
{
    components:{ StarRating, QuestPopup},
    computed: {
        modalOpened(){ return this.selectedQuest != undefined; },
        questCollection() { return this.rawQuestCollection
            .filter(quest => quest.status == QuestStatus.started) 
        }
    },
    data(){
        return {rawQuestCollection: [], selectedQuest: undefined}
    },
    beforeCreate(){
        this.$store.commit(mutationTypes.CHANGE_BACKGROUND, 'background-plain')
        return QuestService.get()
            .then(rawQuestCollection => this.rawQuestCollection = rawQuestCollection)
    },
    methods: 
    {
        deselectQuest()
        {
            this.selectedQuest = undefined;
        },
        selectQuest(quest)
        {
            this.selectedQuest = quest;
        },
        sendToCreationPage()
        {
            this.$router.push('/quest/new')
        },
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

