import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
