import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import appReducer from "./slices/appSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
   reducer: {
      app: appReducer,
      cart: cartReducer,
      user: userReducer,
   },
});
