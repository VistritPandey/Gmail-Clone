import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
