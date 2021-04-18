import axios from "axios";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const todoReducer=(state=[],action)=>{
    
    switch(action.type){
        case "FETCH_TODOS": return action.payload
        default: return state
    }
   
}
export const store=createStore(todoReducer,composeWithDevTools(applyMiddleware(thunk)));

export const getTodos=(payload)=>{
    
    return{
        type: "FETCH_TODOS",
        payload
    }
}
export const fetchTodos=()=>{
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
           
            dispatch(getTodos(res.data))
        })
    }
}