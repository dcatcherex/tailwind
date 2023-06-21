import { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import PaginatedList from "../PaginatedList";
// import ChooseOptions from "../../components/Exam/SelectedOptions";
import TimeBar from "./TimeBar";
const TakeExam = () => {
  const examTitle = "แบบทดสอบความสามารถด้านวิทยาศาสตร์";
  const academicYear = "ปีการศึกษา 2563";
  const gradeLevel = "ชั้นประถมศึกษาปีที่ 4";

  const [questions, setQuestions] = useState([]);
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
  useEffect(() => {
    const s = io("http://localhost:3000"); // Connect to server (use your server URL)
    setSocket(s);

    axios
      .get("http://127.0.0.1:3000/quiz")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => console.error(`Error fetching data: ${error}`));

    s.on("feedback", (data) => {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [data.questionId]: data.isCorrect ? "Correct!" : "Incorrect",
      }));
    });

    return () => {
      s.disconnect();
    };
  }, []);

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
      <h1 className="text-left font-medium text-xl text-darkviolet">
        {examTitle} {gradeLevel} {academicYear}
      </h1>
      
      {/* time bar */}
      <TimeBar progress={progress} questions={questions} />


      {/* Current question */}
      {questions.length > 0 && (
        <>
          <form
            className="mt-10 bg-white font-body rounded-lg text-lg"
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
                    className={`btn w-full text-left text-lg border-2 border-gray-300 bg-transparent text-gray-700 ${
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
              {selectedOption}
              <div>
  
    
  </div>
            </div>

            {/* <button className="" type="submit">
              Submit Answer
            </button> */}
          </form>


          {/* A list of questions */}

          {/* <ol className=" flex gap-x-1 mt-6 overflow-x-auto ">
            {questions.map((q, index) => (
              <li
                className="p-2 px-4 border-2 border-blue-300 active:bg-blue-300 hover:bg-blue-300 hover:text-white rounded-full"
                key={q._id}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </li>
            ))}
          </ol> */}
        </>
      )}
      <button className="invisible sm:visible sm:fixed sm:bottom-10 right-10 bg-blue-500 text-white rounded-full p-4">
        dsdfs
      </button>

      {/* <PaginatedList jsonData={questions} questionSelect={(index) => setCurrentQuestionIndex(index)} /> */}

      <PaginatedList
        jsonData={questions}
        questionSelect={handleQuestionSelect} // Pass the handleQuestionSelect function as the questionSelect prop
        selectedOptions={selectedOptions} // Pass the selectedOptions object as a prop
      />
    </div>
  );
};

export default TakeExam;
