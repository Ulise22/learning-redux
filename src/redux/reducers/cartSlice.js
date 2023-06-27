import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalCount: 0,
  totalFee: 0,
  productsList: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productsList = [...state.productsList, action.payload]
      state.totalCount += 1
      state.totalFee += action.payload.price
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload
      const deletedProduct = state.productsList.find(item => item.id === productId)
      state.totalCount -= deletedProduct.amount
      state.totalFee -= deletedProduct.totalPrice
      state.productsList = state.productsList.filter(item => item.id !== productId)
    },
    addOneProduct: (state, action) => {
      const productIndex = action.payload
      state.totalCount += 1
      state.productsList[productIndex].amount += 1
      state.productsList[productIndex].totalPrice += state.productsList[productIndex].price
      state.totalFee += state.productsList[productIndex].price
    },
    subtractProduct: (state, action) => {
      const productIndex = action.payload
      state.totalCount -= 1
      state.productsList[productIndex].amount -= 1
      state.productsList[productIndex].totalPrice -= state.productsList[productIndex].price
      state.totalFee -= state.productsList[productIndex].price
    }
  }
})

export const { addProductToCart, removeProductFromCart, addOneProduct, subtractProduct } = cartSlice.actions

export default cartSlice.reducer
