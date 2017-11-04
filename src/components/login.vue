<template>
    <div class="flex center three">
        <div class="two-third">
            <h1>Login</h1>
            <span v-if="loginError" style="color:red">User or password not found</span>
            <div>
                <label for="name">Player Name</label>
                <input type="text" v-model="player.name" placeholder="Ex: LordDestroyer" autofocus/>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" v-model="player.password" placeholder="Ex: ******">
            </div>
            <div>
                <button @click.prevent="login" type="submit">
                    Login
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import LoginService from "../service/login";
import CredentialService from "../service/credential";
export default {
  data() {
    return {
      loginError: false,
      player: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      LoginService.login(this.player)
        .then(token => CredentialService.setCredential(token))
        .then(() => this.$router.push("/status"))
        .catch(() => (this.loginError = true));
    }
  }
};
</script>
