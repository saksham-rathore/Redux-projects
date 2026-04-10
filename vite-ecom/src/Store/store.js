import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './Chatslice'

const store =  configureStore({
  reducer: {
    chat: chatReducer,
    
  }
});

export default store;