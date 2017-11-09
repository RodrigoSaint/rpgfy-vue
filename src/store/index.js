import Vuex from "vuex";

export default function getStore() 
{
    return new Vuex.Store({
        state: {
            isLogged: false 
        },
        mutations: {
            changeLogState(state, isLogged)
            {
                state.isLogged = isLogged;
            }
        }
    })
}