<template>
  <div class="flex center three">
    <div class="two-third">
      <h1>Quest Creation</h1>
      <div>
        <label for="title">Title</label>
        <input id="title" type="text" 
          placeholder="Ex: Search ruins"
          v-model="quest.title" autofocus>
        <error-component property-name="title" :model="quest" :validation="validation"></error-component>
      </div>
      <div>
        <label for="difficulty">Difficulty</label>
        <input placeholder="Ex: 1" type="number" 
          min="1" max="5" id="difficulty"
          v-model="quest.difficulty">
        <error-component property-name="difficulty" :model="quest" :validation="validation"></error-component>
      </div>
      <div>
        <label for="due-date">Due date</label>
        <input placeholder="Ex: 1/1/2017" type="date" id="due-date"
          v-model="quest.dueDate">
        <error-component property-name="dueDate" :model="quest" :validation="validation"></error-component>
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
import ErrorComponent from "./error";
import Quest from "../model/quest";
import QuestService from "../service/quest";

export default {
  components: {ErrorComponent},
  data() {
    return {
      validation: Quest.validation,
      quest: {
        title: "",
        description: "",
        difficulty: 1,
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
    }
  }
};
</script>
