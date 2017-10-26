<template>
    <div>
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

export default 
{
    data()
    {
        return {
            player: {
                playerName: '',
                password: ''
            }
        }
    },
    methods:{
        login()
        {
            console.log(this.player)
        }
    }
}
</script>
