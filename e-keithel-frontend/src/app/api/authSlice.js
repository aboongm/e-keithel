import { createSlice } from "@reduxjs/toolkit" 

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isLoggedIn: false },
  reducers: {
    setCredentials: (state, action) => {
      localStorage.setItem("user", JSON.stringify({
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: action.payload.isLoggedIn
      }))
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = action.payload.isLoggedIn
    },
    logOut: (state, action) => {
      localStorage.clear()
      state.user = null
      state.token = null
      state.isLoggedIn = false
    }
  },
})

export const { setCredentials, logOut } = authSlice.actions

export const selectAuth = (state) => state.auth

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentIsLoggedIn = (state) => state.auth.isLoggedIn
