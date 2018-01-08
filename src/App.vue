<template>
  <div id="app" style="height: 100%">
    <nav class="demo">
      <a href="#" class="brand">
        <img class="logo" src="/web/img/basket.png" />
        <span>RPGfy</span>
      </a>
      <input id="bmenub" type="checkbox" class="show">
      <label for="bmenub" class="burger pseudo button">Menu</label>
      <custom-menu></custom-menu>
      
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
import CustomMenu from "@/components/menu";
export default {
  name: 'app',
  components: {CustomMenu},
  computed: {
    ...mapState(['background'])
  }
}
</script>
