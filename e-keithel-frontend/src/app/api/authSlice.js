import { createSlice } from "@reduxjs/toolkit" 

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      localStorage.setItem("user", JSON.stringify({
        user: action.payload.user,
        token: action.payload.token
      }))
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logOut: (state, action) => {
      localStorage.clear()
      state.user = null
      state.token = null
    }
  },
})

export const { setCredentials, logOut } = authSlice.actions

export const selectAuth = (state) => state.auth

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token