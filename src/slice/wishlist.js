import { createSlice } from "@reduxjs/toolkit";

const initialState={
    wishitem:[]
}

   const wishlistslice= createSlice({

        name:"wishlist",
        initialState,
        reducers:{

            addtowishlist(state,action){
                
            },
             removewishlistitem(state,action){
                state.wishitem.filter(i=>i.id !==action.payload)

            },
            
            clearwishlist(state,action){
            }
        }

    });
export const {addtowishlist,removewishlistitem,clearwishlist}=wishlistslice.actions;
export default wishlistslice.reducer;