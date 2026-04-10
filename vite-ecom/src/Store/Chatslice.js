import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  status: "idle",
};

const chatSlice = createSlice({
    name : "chatbot",
    initialState,
    reducers: {
        sendMessage: (state, action) => { 
            state.messages.push({
                id: Date.now(),
                text: action.payload,
                sender: "user"
            })
        },

        receiveMessage: (state, action) => {
            state.messages.push({
                id: Date.now(), 
                text: action.payload,
                sender: "bot"
            })
        }

    }
});

export const {sendMessage, receiveMessage} = chatSlice.actions;
export default chatSlice.reducer