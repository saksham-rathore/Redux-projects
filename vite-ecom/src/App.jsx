import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from './Store/Chatslice';

function App() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  const handleSend = () => {
    dispatch(sendMessage("hello"));
  }

  const handleReceive = () => {
    dispatch(receiveMessage("hello"));
  }

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='border border-rounded h-230 w-150'>
        <div className='border h-20 bg-blue-500'>
          <h1 className='text-white text-center text-5xl'>Chatbot</h1>
        </div>
        <div>
          
          <div>
            {messages.map((message) => (
              <div key={message.id}>
                <p>{message.text}</p>
              </div>
            ))}
            <button onClick={handleReceive}></button>
          </div>

        </div>
        <div className='flex justify-center items-center pt-184'>
          <input type="text" placeholder='Type your message' className='border h-20 w-130'/>
          <button className='border h-20 w-20 bg-blue-500 text-white' onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default App