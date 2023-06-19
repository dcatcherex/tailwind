import { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

const TakeExam = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState({});

  const [socket, setSocket] = useState(null);

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

    socket.emit("submit-answer", answerData);

    setSelectedOption(""); // Clear selection
  };
  return (
    <div className="bg-blue-100 min-h-screen">
      <h2>Quiz</h2>

      {/* A list of questions */}
      <ol className="flex gap-x-1">
        {questions.map((q, index) => (
          <li
            className="p-2 px-4 border-2 border-blue-300 active:bg-blue-300 hover:bg-blue-300 hover:text-white rounded-full"
            key={q._id}
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}
          </li>
        ))}
      </ol>

      {/* Current question */}
      {questions.length > 0 && (
        <>
          <form
            className="m-4 bg-white font-body rounded-lg text-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex px-2 py-3 bg-blue-500 text-white tracking-wide rounded-t-lg">
              <p className="p-0.5 px-3  text-white mb-4">
                {currentQuestionIndex + 1}.
              </p>
              <p>{questions[currentQuestionIndex].question}</p>
            </div>

            {/* Answer options */}
            <div className=" mt-4 pb-6">
                {questions[currentQuestionIndex].option.map((option, idx) => (
                  <div
                  className="mx-4 mt-2 " key={idx}>
                    <input
                      className=" btn w-full text-left text-lg border-2 border-gray-300 bg-transparent text-gray-700"
                      type="button"
                      id={`option-${idx}`}
                      name="quiz-option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                  </div>
                ))}
            </div>

            {/* <button className="" type="submit">
              Submit Answer
            </button> */}
          </form>

          {/* Show feedback if exists */}
          {feedback[questions[currentQuestionIndex]._id] && (
            <>
              <h3>Feedback:</h3>
              <p>{feedback[questions[currentQuestionIndex]._id]}</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TakeExam;
