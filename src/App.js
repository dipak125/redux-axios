
import React, {useEffect} from "react";

import {useSelector,useDispatch} from "react-redux";
import {fetchTodos} from "./redux";

export default function App(){
  const state=useSelector((state)=>state)
  const{todos}=state;
 
 
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchTodos());
  },[])
  
return(
  <>
         
        <table class="table">
  <thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">completed</th>
    </tr>
  </thead>
  <tbody>
   {
     state.map(todo=>{console.log(todo.completed)
       return(
        <tr>
        <th scope="row">{todo.userId}</th>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{(todo.completed)? "true": "false"}</td>
      </tr>
       )
     })
   }
   
   
  </tbody>
</table>
    </>

)
}
