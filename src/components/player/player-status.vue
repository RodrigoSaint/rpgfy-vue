<template>
  <div class="two-third card">
      <span>Player Name</span>
      <span>{{player.name}}</span>
      <span>LV {{player.level}}</span>
      <span>EXP {{player.experience}}</span>
  </div>
</template>
<script>
import PlayerService from "@/service/player";
import mutationTypes from "@/store/mutation-types";

export default 
{
  beforeCreate(){
    this.$store.commit(mutationTypes.CHANGE_BACKGROUND, 'background-castle')

    return PlayerService.get()
      .then(player => this.player = player);
  },
  data(){
    return {player: {}}
  }
}
</script>
