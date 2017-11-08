<template>
  <div class="flex center three">
    <div class="two-third card">
      <header>Quest Creation</header>
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
        <!-- <input placeholder="Ex: 1/1/2017" type="date" 
          v-model="quest.dueDate">  -->
        <datepicker :format="customFormatter" language="pt-br" id="due-date" 
          placeholder="Ex: 1/1/2017" v-model="quest.dueDate"></datepicker>
        <error-component property-name="dueDate" :model="quest" 
         :validate-config="validateConfig" :validation="validation"></error-component>
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description" 
          placeholder="Ex: Search ruins for treasures!"
          v-model="quest.description"></textarea>
        <error-component property-name="description" :model="quest" :validation="validation"></error-component>
      </div>
      <div>
        <button @click="save()" type="submit">
          Save
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import ErrorComponent from "vue-validatejs";
import Quest from "@/model/quest";
import QuestService from "@/service/quest";
import StarRating from 'vue-star-rating'
import Datepicker from 'vuejs-datepicker';
import * as moment from 'moment';
import dateConfig from '../../date-config'
import setValidateConfig from '../../validate-config'


export default {
  components: {
    ErrorComponent,
    StarRating,
    Datepicker
    },
  data() {
    return {
      validation: Quest.validation,
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
      Quest.validate(this.quest)
        .then(() => this.sendRequest())
        .catch(() => alert('Invalid Quest'))
    },
    sendRequest()
    {
      return QuestService.create(this.quest)
        .then(() => alert('Sucess'))
        .then(() => this.$router.push('/quest'))
        .catch(() => alert('Error Sending request'))
    },
    customFormatter(date) {
      return moment(date).format(dateConfig.dateFormat.short);;
    }
  }
};
</script>
