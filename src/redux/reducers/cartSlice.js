import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalCount: 0,
  totalPrice: 0,
  productsList: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productsList = [...state.productsList, action.payload]
      state.totalCount += 1
      state.totalPrice += action.payload.price
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload[0]
      state.totalCount -= 1
      state.totalPrice -= action.payload[1]
      state.productsList = state.productsList.filter(item => item.id !== productId)
    }
  }
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer
