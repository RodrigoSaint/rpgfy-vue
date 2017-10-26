<template>
    <div>
        <h1>User Creation</h1>
        <form>
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
            <div>
                <button @click.prevent="save" type="submit">
                    Save
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import ErrorComponent from "./error";
import Player from "../model/player";

export default 
{
    components:{
        ErrorComponent
    },
    data () 
    {
        return {
           validation: Player.validation,
           player: {
               name: "",
               email: "",
               password: "",
               playerClass: ""
           } 
        }
    },
    methods: {
        save()
        {
            Player.validate(this.player)
                .then(() => console.log(this.player))
                .catch(() => alert("Invalid player"))
        }
    }
}
</script>

