import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      console.log("openSendMessage call");
      state.sendMessageIsOpen = true;
      console.log("sendMessageIsOpen is " + state.sendMessageIsOpen);
    },
    closeSendMessage: (state) => {
      console.log("closeSendMessage call");
      state.sendMessageIsOpen = false;
      console.log("closesendMessage is " + state.sendMessageIsOpen);
    },
  },
});

export const {
  selectMail,
  openSendMessage,
  closeSendMessage,
} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
