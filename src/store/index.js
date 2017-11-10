import Vuex from "vuex";
import mutationTypes from "./mutation-types";

export default function getStore() 
{
    return new Vuex.Store({
        state: {
            isLogged: false,
            background: ''
        },
        mutations: {
            [mutationTypes.CHANGE_LOG_STATE] (state, isLogged)
            {
                state.isLogged = isLogged;
            },
            [mutationTypes.CHANGE_BACKGROUND](state, backgroundClass){
                state.background = backgroundClass;
            }
        }
    })
}