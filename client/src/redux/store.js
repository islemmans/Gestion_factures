import{configureStore}from'@reduxjs/toolkit' ;

import reducer from './Reducers' ;
import { userSlice } from './slices/Users' ;
export const store =configureStore({
    reducer:{
        user:userSlice.reducer ,
    },
});

export default store ;