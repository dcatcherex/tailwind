import { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import PaginatedList from "../PaginatedList";
// import ChooseOptions from "../../components/Exam/SelectedOptions";
import TimeBar from "./TimeBar";
import ExamHead from "./ExamHead"
import data from "../../assets/datas/samplequestions.json";

import btnfour from "../../assets/images/gameinterface/btnfour.png"
import btnheart from "../../assets/images/gameinterface/btnheart.png"
import btnone from "../../assets/images/gameinterface/btnone.png"
import btnrandom from "../../assets/images/gameinterface/btnrandom.png"
import btnthree from "../../assets/images/gameinterface/btnthree.png"
import btntwo from "../../assets/images/gameinterface/btntwo.png"
import arrowright from "../../assets/images/gameinterface/arrowright.png"
import arrowleft from "../../assets/images/gameinterface/arrowleft.png"

const TakeExam = () => {
   const [questions, setQuestions] = useState(data);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState({});
  //store selected options
  const [selectedOptions, setSelectedOptions] = useState({});

  const [progress, setProgress] = useState(100);

  const [socket, setSocket] = useState(null);

  //Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 100 / 1000);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Socket connection
  // useEffect(() => {
  //   const s = io("http://localhost:3000"); // Connect to server (use your server URL)
  //   setSocket(s);

  //   axios
  //     .get("http://127.0.0.1:3000/quiz")
  //     .then((response) => {
  //       setQuestions(response.data);
  //     })
  //     .catch((error) => console.error(`Error fetching data: ${error}`));

  //   s.on("feedback", (data) => {
  //     setFeedback((prevFeedback) => ({
  //       ...prevFeedback,
  //       [data.questionId]: data.isCorrect ? "Correct!" : "Incorrect",
  //     }));
  //   });

  //   return () => {
  //     s.disconnect();
  //   };
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const answerData = {
      questionId: questions[currentQuestionIndex]._id,
      selectedOption: selectedOption,
    };

    // Save the selected option for the current question
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questions[currentQuestionIndex]._id]: selectedOption,
    }));

    socket.emit("submit-answer", answerData);

    setSelectedOption(""); // Clear selection
  };

  const handleQuestionSelect = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex); // Update selected question index in TakeExam component
  };

  return (
    <div className="bg-blue-100 min-h-screen p-4">
      <div className="max-w-[1280px] mx-auto ">
        <ExamHead />
        {/* time bar */}
        <TimeBar progress={progress} questions={questions} />
        {/* Current question */}
        {questions.length > 0 && (
          <>
            <form
              className=" max-w-[500px]  mx-auto mt-10 bg-white font-body rounded-lg text-lg mb-4"
              onSubmit={handleSubmit}
            >
              <div className="flex px-2 py-3 min-h-[80px] bg-blue-500 text-white tracking-wide rounded-t-lg">
                <p className="p-0.5 px-3  text-white mb-4">
                  {currentQuestionIndex + 1}.
                </p>
                <p>{questions[currentQuestionIndex].question}</p>
              </div>
              {/* Answer options */}
              <div className=" mt-4 pb-6">
                {questions[currentQuestionIndex].options.map((option) => (
                  <div className="mx-4 mt-2 " key={option._id}>
                    <button
                      className={`btn hover:bg-blue-500 hover:text-white  w-full text-left text-lg border-2 border-gray-300 bg-transparent text-gray-700 ${
                        (selectedOptions[questions[currentQuestionIndex]._id] ||
                          "") === option
                          ? "bg-blue-500" // Apply background color if this option is selected for current question
                          : ""
                      }`}
                      type="button"
                      id={`option-${option._id}`}
                      name="quiz-option"
                      value={option}
                      onClick={(e) => setSelectedOption(e.target.value)}
                    >
                      {option}
                    </button>
                  </div>
                ))}
                {/* {selectedOption} */}
                <div></div>
              </div>
            </form>
            {/* A list of questions */}
          </>
        )}
        <div className="">
          <button className="invisible sm:visible sm:fixed sm:bottom-[20%] left-[28%] rotate-45 rounded-full text-white   hover:ring-2 hover:ring-dimviolet"><img src={arrowleft} className="w-20" alt="" />
          </button>
          <button className="invisible sm:visible sm:fixed sm:bottom-[13%] left-[32%] rotate-45 rounded-full text-white   hover:ring-2 hover:ring-dimviolet"><img src={arrowright} className="w-20" alt="" />
          </button>
          <button className="invisible sm:visible sm:fixed sm:bottom-[23%] left-[70%] rounded-full text-white   hover:ring-2 hover:ring-dimviolet"><img src={btnone} className="w-12" alt="" />
          </button>
          <button className="invisible sm:visible sm:fixed sm:bottom-[20%] left-[67%] rounded-full text-white   hover:ring-2 hover:ring-dimviolet"><img src={btntwo} className="w-12" alt="" />
          </button>
          <button className="invisible sm:visible sm:fixed sm:bottom-[15.5%] left-[65%] rounded-full text-white   hover:ring-2 hover:ring-dimviolet"><img src={btnthree} className="w-12" alt="" />
          </button>
          <button className="invisible sm:visible sm:fixed sm:bottom-[10%] left-[64%] rounded-full text-white   hover:ring-2 hover:ring-dimviolet"><img src={btnfour} className="w-12" alt="" />
          </button>
          <button className="invisible sm:visible sm:fixed sm:bottom-[10%] left-[68%] rounded-full text-white p-1  hover:ring-2 hover:ring-dimviolet"><img src={btnrandom} className="w-24" alt="" />
          </button>
          
        </div>
        <div className="">
          <PaginatedList
            jsonData={questions}
            questionSelect={handleQuestionSelect} // Pass the handleQuestionSelect function as the questionSelect prop
            selectedOptions={selectedOptions} // Pass the selectedOptions object as a prop
          />
        </div>
      </div>
    </div>
  );
};

export default TakeExam;
