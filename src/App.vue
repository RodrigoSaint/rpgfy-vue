<template>
  <div id="app" class="background-world-map center-both">
    <nav class="demo">
      <a href="#" class="brand">
        <img class="logo" src="/web/img/basket.png" />
        <span>RPGfy</span>
      </a>

      <input id="bmenub" type="checkbox" class="show">
      <label for="bmenub" class="burger pseudo button">Menu</label>

      <div class="menu">
        <a href="#/" class="button pseudo">Sign in</a>
        <a href="#/login" class="pseudo button">Login</a>
        <a href="#/quest" class="pseudo button">Quest</a>
        <a href="#/quest/report" class="pseudo button">Report</a>
      </div>
  </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
