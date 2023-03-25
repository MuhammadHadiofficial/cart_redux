import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state,action) => {
        console.log(action,"action")
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
        let items=state.items;
        items.push(action.payload)
        
        state.items=items;
      },
      removeFromCart: (state,action) => {
        let items=state.items;
        items=items.filter(item=>item.id!==action.payload)
        state.items=items;
      },
      resetCart: (state, action) => {
        state.items=[]
      },
    },
  })

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer