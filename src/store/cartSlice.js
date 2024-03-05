import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalItemCount: 0
    },
    reducers:{
        addItem: (state, action) => { 
            const cartItem = state.items.find(
                (item) => item.card.info.id === action.payload.card.info.id
                )
            if(cartItem) {
                //console.log(current(cartItem));
                cartItem.quantity++ 
            }  else {
                state.items.push({...action.payload, quantity:1})
                state.totalItemCount++  
            }
           
        },
        removeItem: (state, action) => {
            const cartItem = state.items.find(item => item.card.info.id === action.payload.card.info.id)
            if(cartItem.quantity === 1){
                state.items = state.items.filter(item => item.card.info.id !== action.payload.card.info.id)
                state.totalItemCount--
            } else {
                cartItem.quantity--
            }
        },
        clearCart: (state) => {
           state.items =  state.items.length = 0
           state.totalItemCount = state.totalItemCount.length = 0
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer