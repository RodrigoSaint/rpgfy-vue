<template>
  <div class="two-third card">
    <header>Quest Creation</header>
    <div>
      <div class="flex two">
        <div>
          <label for="title">Title</label>
          <input id="title" type="text" 
            placeholder="Ex: Search ruins"
            v-model="quest.title" autofocus>
          <error-component property-name="title" :model="quest" :validation="validation"></error-component>
        </div>
        <div>
          <label for="difficulty">Difficulty</label>
          <star-rating :increment="1" 
                :max-rating="5" 
                inactive-color="#8c8c8c" 
                active-color="#e6eb1f"
                :padding="8"
                v-model="quest.difficulty"
                :show-rating="false"
                :border-width="5"
                :star-size="20">
          </star-rating>
          <error-component property-name="difficulty" :model="quest" :validation="validation"></error-component>
        </div>
        <div>
          <label for="due-date">Due date</label>
          <datepicker :format="customFormatter" language="pt-br" id="due-date" 
            placeholder="Ex: 1/1/2017" v-model="quest.dueDate"></datepicker>
          <error-component property-name="dueDate" :model="quest" 
            :validate-config="validateConfig" :validation="validation"></error-component>
        </div>
        <div>
          <label for="select-mob">Select Mob</label>
          <monster-selection></monster-selection>
        </div>
        <div class="full">
          <label for="description">Description</label>
          <textarea id="description" 
            placeholder="Ex: Search ruins for treasures!"
            v-model="quest.description"></textarea>
          <error-component property-name="description" :model="quest" :validation="validation"></error-component>
        </div>
      </div>
    </div>
    <footer>
      <button @click="save()" type="submit">
        Save
      </button>
    </footer>
  </div>
</template>
<script>
import Quest from "@/model/quest";
import QuestService from "@/service/quest";
import dateConfig from '@/date-config'
import setValidateConfig from '@/validate-config'
import mutationTypes from "@/store/mutation-types";
import MonsterSelection from "@/components/quest/monster-selection";

import StarRating from 'vue-star-rating'
import Datepicker from 'vuejs-datepicker';
import * as moment from 'moment';
import ErrorComponent from "vue-validatejs";


export default {
  beforeCreate(){
    this.$store.commit(mutationTypes.CHANGE_BACKGROUND, 'background-plain')
  },
  components: {
    ErrorComponent,
    StarRating,
    Datepicker,
    MonsterSelection
  },
  data() {
    return {
      validation: {},
      validateConfig: setValidateConfig,
      quest: {
        title: "",
        description: "",
        difficulty: 3,
        dueDate: undefined
      }
    };
  },
  methods: 
  {
    save()
    {
      this.validation = Quest.validation;
      Quest.validate(this.quest)
        .then(() => this.sendRequest())
        .catch(() => this.$swal('Invalid information', 'There are some invalid fields', 'error'))
    },
    sendRequest()
    {
      return QuestService.create(this.quest)
        .then(() => this.$swal('Success!', 'The quest was created.', 'success'))
        .then(() => this.$router.push('/quest'))
        .catch(() =>  this.$swal('Error', 'We had a issue trying to write your quest', 'error'))
    },
    customFormatter(date) {
      return moment(date).format(dateConfig.dateFormat.short);
    }
  }
};
</script>
