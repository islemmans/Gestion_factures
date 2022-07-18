import{createSlice}from "@reduxjs/toolkit";

//import { taskCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";
 const domaine='student' ;

  
export const userSlice=createSlice({
    
 name:"user",
 initialState:[{login:"",password:"" ,description:""},
 {login:"",password:"" ,description:""},],

 reducers:{
      addutil:(state,action)=>{
        const newutil={
            login:action.payload.login,
            password:action.payload.password,
            domaine:'avocat'
        }
        state.push(newutil);
      },
      supputil:(state,action)=>{
        state=state.filtrer(t => t.login!==action.payload.login);
      },

      modifutil:(state,action)=>{
        const util=state.find(t => t.login===action.payload.password);
        util.domaine=domaine ;
      },


      /*  login:(state,action)=>{
        state.value=action.payload;  },*/

        },
    });
    
export const {addutil,supputil,modifutil} =userSlice.actions;
export default userSlice.reducer ;
           
                                              