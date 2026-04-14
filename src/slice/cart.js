import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartitem:[1,2,3]
}

   const cartSlice=createSlice({

        name:"cart",
        initialState,
        reducers:{

            addtocart(state,action){
                const newitem=action.payload;
                const existingitem= state.cartitem.find(newitem.id== newitem.id);

                if(existingitem){

                    existingitem.quantity++;
                }else{

                    state.cartitem.push(newitem);
                }
            },
            removecartitem(state,action){
                state.cartitem.filter(i=>i.id !==action.payload)

            },
            incrementqty(state,action){
              const item= state.cartitem.find(i=>i.id ===action.payload)

              if (item){
                item.quantity++;
              }

            },
            decrementqty(state,action){
              const item= state.cartitem.find(i=>i.id ===action.payload)

              if (item){
                item.quantity--;
              } else {

                const item1= state.cartitem.filter(i=>i.id !==action.payload)
              }

            },
            clearcart(state,action){

            }
        }
        
    });

    export const {addtocart,removecartitem,incrementqty,decrementqty,clearcart}=cartSlice.actions;
export default cartSlice.reducer;