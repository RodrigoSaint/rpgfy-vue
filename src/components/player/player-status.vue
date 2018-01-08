<template>
  <div class="two-third-700 card">
      <header>Status</header>
      <div>
        <div class="flex one">
          <div>
            <strong>Name:</strong> {{player.name}}
          </div>
          <div>
            <strong>LV: </strong> {{player.level}}
          </div>
          <div>
            <strong>EXP: </strong> {{player.experience}}
          </div>
        </div>
      </div>
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
