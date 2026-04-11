import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from './Store/Chatslice';

function App() {
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  const handleSend = () => {
    if (!input.trim()) return;

    // dispatch(chatSlice.actions.sendMessage(input));
    setTyping(true);

    // Fake bot reply
    setTimeout(() => {
      // dispatch(chatSlice.actions.receiveMessage("Got it 👍"));
      setTyping(false);
    }, 800);

    setInput("");
  };

  return (
    <div className="h-screen flex flex-col max-w-md mx-auto border rounded">
      <div className="bg-blue-500 text-white p-3 font-bold">Chat App</div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {typing && (
        <div className="px-3 text-sm text-gray-500">Bot is typing...</div>
      )}

      <div className="p-3 flex gap-2 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App