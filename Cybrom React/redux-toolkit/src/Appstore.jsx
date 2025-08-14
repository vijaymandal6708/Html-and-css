import { configureStore } from "@reduxjs/toolkit";
import CartSlicereducer  from './CartSlice'

let Appstore = configureStore({
    reducer:{
        cart: CartSlicereducer
    }
})

export default Appstore