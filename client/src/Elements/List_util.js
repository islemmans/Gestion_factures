import React from"react";
import {useSelector}from 'react-redux' ;
import { connect } from 'react-redux'


/*import { createStore,combineReducers } from "redux";





const list=[
   {   
     login:"tasnim" ,
     password:"mami",
     description:"student"
   },
   {  
     login:"tastas" ,
     password:"mammmi",
     description:"student4"
   },
   {    
     login:"tas" ,
     password:"ma",
     description:"student5"
   },
   {     
     login:"tasso" ,
     password:"mam",
     description:"student6"
   }
  ] ;

const add_todo_action='ajouter un utilisateut' ;

function todoReducer(state=list,action){
switch (action.type){
   case add_todo_action :
      return[...state,{login:'sadok',password:'789',description:'IT',...action.payload}];
   default:
      return state ;
}
}
const state=todoReducer(undefined,{}) ;
const newstate=todoReducer(state,{type:add_todo_action,payload:{login:'sadok',password:'789',description:'IT'}})



const store=createStore(todoReducer);

store.subscribe=(()=>console.log(store.getstate()))






/*export default function List_util(props){


  //const state=useSelector((state)=>state.User.value) ;
  
  return(
  <ul>   <table>
     <tr><th> login </th>
        <th>password</th>
        <th>description</th>
     </tr>
      
        </table>   
        {props.todos.map(todo=>(
        <table>
            <td>{todo.login}</td>
            <td>{todo.password}</td>
            <td>{todo.description}</td>

        </table>
    ))}


</ul>
      )
      }

/*      <tr><th> {state.login} </th>
      <th>{state.password}</th>
      <th>{state.description}</th>
   </tr>*/
      