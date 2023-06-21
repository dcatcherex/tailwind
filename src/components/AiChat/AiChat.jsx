import  { useState, useRef } from 'react';
import bot from '../../assets/images/avatars/mascot.svg';
import user from '../../assets/images/avatars/avatar2.png';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const AiChat = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (inputValue.trim() === '') {
        return;
      }
  
      // Add user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, isUser: true },
      ]);
  
      // Call API or perform chatbot logic here
  
      // Clear input field after submitting
      setInputValue('');
    };
  
    return (
      <div className=" h-[87vh] flex flex-col justify-between">
        <div className="flex-1 p-4 overflow-y-scroll scrollbar-hidden">
          {messages.map((message, index) => (
            
            <div
              key={index}
              className={`p-2 rounded-lg ${message.isUser ? 'bg-purple-900 text-darkviolet' : 'bg-green-500 text-black'} mb-2`}
            >
              <img src={bot} className='w-12 h-12'/> {message.text}
            </div>
          ))}
        </div>
  
        <form onSubmit={handleFormSubmit} className="flex p-4 bg-purple-900">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="พูดคุยกับ เพื่อนครู AI..."
            className="flex-grow px-4 py-2 rounded-md bg-gray-100 text-black outline-none border-2 border-dimviolet"
          />
          <button type="submit" className="ml-2">
            <PaperAirplaneIcon className="h-6 w-6 text-dimviolet" />
          </button>
        </form>
      </div>
    );
};

export default AiChat;