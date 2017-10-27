<template>
    <div>
        <span v-if="loginError" style="color:red">User or password not found</span>
        <div>
            <label for="playerName">Player Name</label>
            <input type="text" v-model="player.playerName" placeholder="Ex: LordDestroyer" autofocus/>
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
</template>
<script>
import LoginService from "../service/login";
import CredentialService from "../service/credential";
export default 
{
    data()
    {
        return {
            loginError: false,
            player: {
                playerName: '',
                password: ''
            }
        }
    },
    methods:{
        login()
        {
            LoginService.login(this.player)
                .then(token => CredentialService.setCredential(token))
                .then(() => this.$router.push('/status'))
                .catch(() => this.loginError = true)
        }
    }
}
</script>
