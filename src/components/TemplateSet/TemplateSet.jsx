import viewicon from "../../assets/images/view.svg";
import link from "../../assets/images/link.svg";
import exam from "../../assets/images/exam.svg";
import bot from "../../assets/images/avatars/mascot.svg";
import user from "../../assets/images/avatars/avatar2.png";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import allicon from "../../assets/images/icons/all.svg";
import educationicon from "../../assets/images/icons/education.svg";
import socialicon from "../../assets/images/icons/social.svg";
import writingicon from "../../assets/images/icons/writing.svg";

import quiz from "../../assets/images/quiz.png";
import ExamType from "../ExamType/ExamType";
import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion"

const TemplateSet = ({jsonData}) => {
  const [filterValue, setFilterValue] = useState("all");
  // const ITEMS_PER_PAGE = 20;
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleChangeFilter = (event) => {
    setFilterValue(event.target.value);
    // setCurrentPage(1); // Reset to the first page when changing the filter.
  };

    // Filter data based on selected option.
    const filteredData =
    filterValue === 'all'
      ? jsonData
      : jsonData.filter((item) => item.type === filterValue);

      const variants = {
          visible: {opacity: 1, y: 0 },
          hidden: {opacity: 0, y: 100}
      }

      const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
          // Send the input message to the backend or API for processing with ChatGPT
          // You can use libraries like axios to make the API call
    
          // For demonstration purpose, I'll just add the input message to the messages state directly
          setMessages((prevMessages) => [...prevMessages, { text: inputMessage, sender: 'user' }]);
          
          // Clear the input field after sending the message
          setInputMessage('');
        }
      };
    

  return (
    <div className="min-h-screen">
      {/* button filter */}
      <div className=" flex justify-center pt-4">
        <button className=" px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet" onClick={()=> setFilterValue("all")}><img src={allicon} className="w-20 h-20" alt="all icon"/> All</button>
        <button className=" px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet" onClick={()=> setFilterValue("writing")}><img src={writingicon} className="w-20 h-20" alt="all icon"/>Writing</button>
        <button className=" px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet" onClick={()=> setFilterValue("social")}><img src={socialicon} className="w-20 h-20" alt="all icon"/>Social</button>
        <button className=" px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet" onClick={()=> setFilterValue("education")}><img src={educationicon} className="w-20 h-20" alt="all icon"/>Education</button>
      </div>
      
      <main className=" max-w-[1280px] mx-auto bg-violet-100 grid grid-cols-2 grid- sm:grid-cols-3 md:grid-cols-4  gap-4 pt-2 mt-2 px-4 ">
        {filteredData.map(({ id, title, des, view }) => (
          <motion.div
            key={id}
            className=" gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100 " initial="hidden"
            animate="visible" variants={variants}
          >
              <div className="">
                {/* <div className="relative group-hover:visible">
                  <button className="hover:bg-red-500 absolute top-0 right-0 rounded-full bg-white p-2">
                    <img className="w-3 h-3" src={viewicon} alt="" />
                  </button>
                </div> */}
                <h2 className="text-lg font-semibold text-darkviolet">{title}</h2>
                <p className="line-clamp-2 text-sm font-body text-gray-500 mt-1">
                  {des}
                </p>
              </div>
              <div className="">
                <div className="flex flex-row justify-between gap-x-2 mt-3">
                  <div className="flex gap-x-2 items-center">
                    <img className="w-3 h-3" src={viewicon} />
                    <p className="text-xs font-light text-gray-400">{view}</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button className="hover:bg-slate-500">
                      <img className="w-3 h-3" src={link} />
                    </button>
                  </div>
                </div>
              </div>
          </motion.div>
        ))}
      </main>
       

      <div className="flex-1 p-4 overflow-y-scroll scrollbar-hidden">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              message.isUser ? "bg-purple-900 text-darkviolet" : "bg-green-500 text-black"
            } mb-2`}
          >
            <img src={bot} alt="Bot Avatar" className="w-12 h-12" /> {message.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="max-w-[1280px] mx-auto flex p-4 bg-purple-900 gap-x-4">
        <img src={bot} alt="" />
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="พูดคุยกับ เพื่อนครู AI..."
          className="flex-grow px-4 py-2 rounded-md bg-white text-black outline-none border-2 border-dimviolet"
        />
        <button type="submit" className="ml-2">
          <PaperAirplaneIcon className="h-6 w-6 text-dimviolet" />
        </button>
      </form>
    </div>


 
  );
};

export default TemplateSet;
