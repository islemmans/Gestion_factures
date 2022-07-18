import{createSlice}from "@reduxjs/toolkit";

//import { taskCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";

export const userSlice=createSlice({
    
 name:"user",
 initialState:[],

 reducers:{
      addutil:(state,action)=>{
        const newutil={
          nomdossier:action.payload.nomdossier,
           
        }
        state.push(newutil);
      },
      supputil:(state,action)=>{
        state=state.filtrer(t => t.nomdossier!==action.payload.nomdossier);
      },

      modifutil:(state,action)=>{
        const util=state.find(t => t.nomdossier===action.payload.nomdossier);
        util.nomdossier=nomdossier ;
      },


      /*  login:(state,action)=>{
        state.value=action.payload;  },*/

        },
    });
    
export const {addutil,supputil,modifutil} =userSlice.actions;
export default userSlice.reducer ;
           
                                              