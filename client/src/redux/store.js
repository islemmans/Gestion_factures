import{configureStore}from'@reduxjs/toolkit' ;

import reducer from './Reducers' ;
import { userSlice } from'./slices/User' ;
export const store =configureStore({
    reducer:{
        user:userSlice.reducer ,
    },
});

export default store ;





/*
const action =createToggle("tot");
export const createToggle=(login)=>{
    return{
        type:"todo/toggleTask",
        payload:login
} }*/


