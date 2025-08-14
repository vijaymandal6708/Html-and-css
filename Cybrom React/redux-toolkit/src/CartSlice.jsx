import { createSlice } from "@reduxjs/toolkit";

let CartSlice = createSlice({
    name:"cart",
    initialState: {
        cartitems:[]
    },
    reducers:{
        additem: (state,action)=>{
            state.cartitems.push(action.payload)
        }
    }
})

export const {additem} = CartSlice.actions 
export default CartSlice.reducer    