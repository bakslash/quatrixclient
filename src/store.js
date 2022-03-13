import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./slices/login";
import messageReducer from "./slices/message";

const reducer = {
  login: loginReducer,
  message: messageReducer
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;