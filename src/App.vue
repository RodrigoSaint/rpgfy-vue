<template>
  <div id="app" style="height: 100%">
    <nav class="demo">
      <a href="#" class="brand">
        <img class="logo" src="/web/img/basket.png" />
        <span>RPGfy</span>
      </a>

      <input id="bmenub" type="checkbox" class="show">
      <label for="bmenub" class="burger pseudo button">Menu</label>
      <div v-if="!isLogged" class="menu">
        <a href="#/" class="button pseudo">Sign in</a>
        <a href="#/login" class="pseudo button">Login</a>
      </div>

      <div v-if="isLogged" class="menu">
        <a href="#/status" class="pseudo button">Status</a>        
        <a href="#/quest" class="pseudo button">Quest</a>
        <a href="#/quest/report" class="pseudo button">Report</a>
      </div>
  </nav>
    <div :class="[background]" class="center-both background-full flex one">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import CredentialService from "./service/credential";
import {mapState} from "vuex";
import mutationTypes from "./store/mutation-types";

export default {
  name: 'app',
  beforeCreate()
  {
    this.$store.commit(mutationTypes.CHANGE_LOG_STATE, CredentialService.getCredential())
  },
  computed: {
    ...mapState(['isLogged', 'background'])
  }
}
</script>
