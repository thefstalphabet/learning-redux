import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import themeReducer from "../reducers/themeReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

export default store;
