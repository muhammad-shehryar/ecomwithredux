import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        loggedIn:false,
        userDetails:null,
    },
    reducers:{
        logIn:(state,action)=>{
            state.loggedIn = true,
            state.userDetails = action.payload;
        },
        logOut:(state)=>{
            state.loggedIn=false;
            state.userDetails=null;
        }

    }
})

export const {logIn,logOut}= userSlice.actions;
export default userSlice.reducer;