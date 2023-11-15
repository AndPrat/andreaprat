import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MessageState } from "./types";
import { Message } from "../../types";

const initialMessageState: MessageState = {
  messages: [],
};

const messageSlice = createSlice({
  name: "messages",
  initialState: initialMessageState,
  reducers: {
    sendMessage: (
      currentMessageState,
      action: PayloadAction<Message[]>,
    ): MessageState => ({
      ...currentMessageState,
      messages: action.payload,
    }),
  },
});

export const messagesReducer = messageSlice.reducer;

export const { sendMessage: sendMessageActionCreator } = messageSlice.actions;
