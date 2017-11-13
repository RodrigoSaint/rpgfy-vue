<template>
    <div class="card two-third">
        <header>User Creation</header>
        <div>
            <div>
                <label for="name">Name</label>
                <input id="name"
                    v-model="player.name" 
                    type="text" 
                    placeholder="Ex: LordDestroyer"
                    required 
                    autofocus>
                <error-component property-name="name" :model="player" :validation="validation"></error-component>
            </div>
            <div>
                <label for="email">E-mail</label>
                <input id="email"
                    type="email" 
                    placeholder="Ex: lord@gmail.com"
                    v-model="player.email"
                    required>
                <error-component property-name="email" :model="player" :validation="validation"></error-component>
                    
            </div>
            <div>
                <label for="password">Password</label>
                <input id="password"
                    type="password" 
                    placeholder="Ex: *******"
                    v-model="player.password"
                    required>
                <error-component property-name="password" :model="player" :validation="validation"></error-component>
            </div>
            <div>
                <label for="class">Class</label>
                <select v-model="player.playerClass" id="class">
                    <option value="">Select a class</option>
                    <option value="1">Warrior</option>
                    <option value="2">Ranger</option>
                    <option value="3">Mage</option>
                    <option value="4">Priest</option>
                </select>
                <error-component property-name="playerClass" :model="player" :validation="validation"></error-component>
            </div>
        </div>
        <footer>
            <button @click.prevent="save" type="submit">
                Save
            </button>
        </footer>
    </div>
</template>

<script>
import ErrorComponent from "vue-validatejs";
import Player from "@/model/player";
import PlayerService from "@/service/player";
import mutationTypes from "@/store/mutation-types";

export default {
  components: {
    ErrorComponent
  },
  beforeCreate(){
      this.$store.commit(mutationTypes.CHANGE_BACKGROUND, 'background-castle')
  },
  data() {
    return {
      validation: {},
      player: {
        name: "",
        email: "",
        password: "",
        playerClass: ""
      }
    };
  },
  methods: {
    save() {
        this.validation = Player.validation;
        Player.validate(this.player)
            .then(() => this.sendRequest())
            .then(() => this.$router.push("/login"))
            .catch(() => alert("Invalid player"));
    },
    sendRequest() {
      return PlayerService.create(this.player)
        .then(() => alert("Sucess"))
        .catch(() => alert("Error saving the user"));
    }
  }
};
</script>

