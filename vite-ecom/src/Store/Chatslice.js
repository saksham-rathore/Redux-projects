import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    { id: 1, text: "Hello 👋", sender: "bot" },
    { id: 2, text: "Hi! How are you?", sender: "user" },
  ],
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