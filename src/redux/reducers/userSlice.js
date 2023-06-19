import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  fullName: '',
  token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email
      state.fullName = action.payload.fullName
      state.token = action.payload.token
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
