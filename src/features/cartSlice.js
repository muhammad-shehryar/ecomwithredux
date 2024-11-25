import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
         const item =  state.find((product)=>product.id === action.payload.id)
         if(item){
            item.quantity+=1
            console.log("another item added");
         }else{
            state.push({...action.payload,quantity:1})
            console.log("item addded");
         }
        },
       removeFromCart:(state,action)=>{
          console.log(action.payload);
        return state.filter((product)=>product.id !== action.payload.id)
       },
       clearCart:()=>[]
    }
})

export const {addToCart,removeFromCart,clearCart}=cartSlice.actions;

export default cartSlice.reducer;