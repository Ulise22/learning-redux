import { configureStore } from '@reduxjs/toolkit'

// Reducer

import userReducer from './reducers/userSlice'

export default configureStore({
  reducer: {
    user: userReducer
  }
})
