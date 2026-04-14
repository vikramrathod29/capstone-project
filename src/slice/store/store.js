import { configureStore } from "@reduxjs/toolkit";
import cartreducer from '../cart';
import wishlistreducer from '../wishlist';


export const store=configureStore({

    reducer:{

        cart:cartreducer,
        wishlist:wishlistreducer
     },
});

export default store;