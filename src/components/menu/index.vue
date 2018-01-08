<template>
    <div class="menu">
        <a v-for="menuItem in menuItemCollection" 
            :href="menuItem.link" 
            :key="menuItem.link" 
            class="pseudo button">
            <div :class="menuItem.icon"></div>
            {{menuItem.content}}
        </a>        
    </div>
</template>
<script>
import {mapState} from "vuex";
import mutationTypes from "@/store/mutation-types";
import CredentialService from "@/service/credential";

const menuItemCollection = [
    {link: '#/', icon: 'icon power', content: 'Sign in', logged: false},
    {link: '#/login', icon: 'icon map-old', content: 'Login', logged: false},
    {link: '#/status', icon: 'icon sword', content: 'Status', logged: true},
    {link: '#/quest', icon: 'icon book', content: 'Quest', logged: true}
]

export default {
    beforeCreate()
    {
        this.$store.commit(mutationTypes.CHANGE_LOG_STATE, CredentialService.getCredential())
    },
    computed: {
        ...mapState(['isLogged']),
        menuItemCollection(){
            const isLogged = this.isLogged != undefined;
            return menuItemCollection.filter(menuItem => menuItem.logged == isLogged);
        }
    }
}
</script>
