import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
//1. We need configureStore function to create our store(from @redux/toolkit)
//2.And this configureStore will help us to create a big object that contains slices and we can access this object globally throughout our application
//3. And now we need to provide this store to our application
const appStore = configureStore({
    //this below reducer is the main big reducer for our whole application
    reducer: {
        //we can have multiple reducers from different-different slices
        cart : cartReducer //from cartSlice
    }
}); 

export default appStore;