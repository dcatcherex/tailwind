import React, { useState } from "react";
import bot from "../../assets/images/avatars/mascot.svg";
import user from "../../assets/images/avatars/avatar2.png";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import axios from "axios";

const AiChat = () => {
  const [messages, setMessages] = useState("begin");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    console.log(inputValue)

    // Add user message
    // setMessages((prevMessages) => [
    //   ...prevMessages,
    //   { text: inputValue, isUser: true },
    // ]);

    try {
      // Call API or perform chatbot logic here
      const response = await axios.post("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: inputValue })
      });

      const data = await response.data;
      if(response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`)
      }

      setMessages(data.result)
      
      console.log(messages);

    } catch (error) {
      console.log(error);
    }

    // Clear input field after submitting
     setInputValue("");
  };

  return (
    <div className="h-[85vh] flex flex-col justify-between">
      <div className="flex-1 p-4 overflow-y-scroll scrollbar-hidden">
        {/* {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              message.isUser ? "bg-purple-900 text-darkviolet" : "bg-green-500 text-black"
            } mb-2`}
          >
            <img src={bot} alt="Bot Avatar" className="w-12 h-12" /> {message.text}
          </div>
        ))} */}
        <div>{messages}</div>
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