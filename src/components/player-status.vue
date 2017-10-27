<template>
  <div>
      <span>Player Name</span>
      <span>{{player.name}}</span>
      <span>LV {{player.level}}</span>
      <span>EXP {{player.experience}}</span>
  </div>
</template>
<script>
import PlayerService from "../service/player";
export default 
{
  beforeCreate(){
    return PlayerService.get()
      .then(player => this.player = player);
  },
  data(){
    return {player: {}}
  }
}
</script>
