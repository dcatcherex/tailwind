import teacherpic from "../../assets/images/teacher.svg";
import SampleQuestion from "../../assets/datas/samplequestions.json";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { json } from "react-router-dom";

import ExamList from "../ExamList/ExamList";

import IndicatorBar from "../IndicatorBar";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import ProgressBar from "../ProgressBar";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { PrinterIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { WifiIcon } from "@heroicons/react/24/outline";

const GenerateQuiz = () => {
  const { register, handleSubmit } = useForm();
  const [jsondata, setJsondata] = useState([]);
  const [displayResult, setDisplayResult] = useState(0);
  const number_quiz_display = 6;

  const onSubmit = (data) => {
    const { grade, subject, topic, part, num } = data;
    const quizgenerate = {
      grade: parseInt(grade),
      subject: subject,
      part: parseInt(part),
      topic: topic,
      num_question: parseInt(num),
    };

    console.log(data);
    console.log(quizgenerate);

    axios
      .post(
        "https://linkquiz-1-u2330317.deta.app/create_response",
        quizgenerate
      )
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);

        // Load sample questions instead of making a POST request
        setJsondata(SampleQuestion);
        console.log(jsondata);
        setDisplayResult(1);
        console.log(displayResult);
      });
  };

  const knowledgeTotal = jsondata.reduce((total, { indicator }) => {
    if (indicator === "knowledge") {
      return total + 1;
    }
    return total;
  }, 0);

  const processTotal = jsondata.reduce((total, { indicator }) => {
    if (indicator === "process") {
      return total + 1;
    }
    return total;
  }, 0);

  const attributeTotal = jsondata.reduce((total, { indicator }) => {
    if (indicator === "attribute") {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <>
      <div className="bg-fixed min-h-screen  bg-violet-100 flex max-w-[1280px] mx-auto flex-col items-center ">
        {/* end of search */}
        <main className="flex w-full flex-col items-center  px-4 mt-8 sm:mt-12">
          <img
            className="hidden sm:visible max-w-[300px] sm:max-w-[500px]"
            src={teacherpic}
          />
          <h1 className="text-center sm:text-6xl text-2xl max-w-[708px] font-medium text-purple mb-8">
            สร้างแบบทดสอบแบบเลือกตอบ
          </h1>
          {displayResult?<div id="bar" className="mb-6  w-full">
                    <IndicatorBar
                      knowledge={knowledgeTotal}
                      process={processTotal}
                      attribute={attributeTotal}
                    />
                  </div>:""}
          

          {/* react hook form */}
          <div className=" flex flex-col sm:flex-row-reverse justify-between  gap-4 w-full ">
            
            <form onSubmit={handleSubmit(onSubmit)} className=" px-4 ">
              <div className="mb-3">
                <label htmlFor="grade">เลือกระดับชั้น:</label>
                <select
                  {...register("grade")}
                  className=" w-full  rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2"
                >
                  <option value="1">ประถมศึกษาปีที่ 1</option>
                  <option value="2">ประถมศึกษาปีที่ 2</option>
                  <option value="3">ประถมศึกษาปีที่ 3</option>
                  <option value="4">ประถมศึกษาปีที่ 4</option>
                  <option value="5">ประถมศึกษาปีที่ 5</option>
                  <option value="6">ประถมศึกษาปีที่ 6</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="subject">เลือกกลุ่มสาระ:</label>
                <select
                  {...register("subject")}
                  className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2"
                >
                  <option value="S">วิทยาศาสตร์</option>
                  <option value="M">คณิตศาสตร์</option>
                  <option value="E">ภาษาอังกฤษ</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="part">เลือกภาคเรียน:</label>
                <select
                  {...register("part")}
                  className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2"
                >
                  <option value="1">ภาคเรียนที่ 1</option>
                  <option value="2">ภาคเรียนที่ 2</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="topic">เลือกหัวข้อ:</label>
                <select
                  {...register("topic")}
                  className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2"
                >
                  <option value="สิ่งต่างๆรอบตัว">สิ่งต่าง ๆ รอบตัว</option>
                  <option value="สิ่งมีชีวิต">สิ่งมีชีวิต</option>
                  <option value="แรงและพลังงาน">แรงและพลังงาน</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="num">เลือกจำนวนข้อ:</label>
                <select
                  {...register("num")}
                  className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2"
                >
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>
              <input
                type="submit"
                className="btn bg-dimviolet w-full cursor-pointer"
              />
            </form>
            {/* Conditional rendering */}
            <div className="">
            
              {displayResult ? (
                // Render the form

                <div className="mt-4 text-lg grid grid-cols-1 gap-4 sm:grid-cols-2 sm:mx-4 max-w-[800px]">
                  {/* ข้อสอบ */}
                  

                  {jsondata.map(
                    ({
                      id,
                      question,
                      options,
                      answer,
                      indicator,
                      difficulty,
                      right,
                      wrong,
                      wrong_answer,
                    }) => (
                      <div
                        key={id}
                        className={`shadow-md p-4 font-body font-medium sm:rounded-lg item ${
                          indicator === "knowledge"
                            ? "bg-lime-200"
                            : indicator === "process"
                            ? "bg-yellow-200"
                            : "bg-orange-200"
                        }`}
                      >
                        <h3 className=" font-medium list-decimal">
                          {id}.{question}
                        </h3>
                        <div className="flex gap-x-2 font-light font-base font-sans">
                          {difficulty === 1 && (
                            <>
                              <StarIcon className="w-4 h-4 text-red-500" />
                            </>
                          )}
                          {difficulty === 2 && (
                            <>
                              <StarIcon className="w-4 h-4 text-red-500" />
                              <StarIcon className="w-4 h-4 -ml-2 text-red-500" />
                            </>
                          )}
                          {difficulty === 3 && (
                            <>
                              <StarIcon className="w-4 h-4 text-red-500" />
                              <StarIcon className="w-4 h-4 -ml-2 text-red-500" />
                            </>
                          )}
                        </div>
                        <ol className="list-decimal my-2 pl-8">
                          {options.map((option) => (
                            <li key={option} className="font-light py-0.5 ">
                              <span
                                className={`px-1 ${
                                  option === answer
                                    ? "border-green-500 border-b-2"
                                    : option === wrong_answer
                                    ? "border-red-500 border-b-2"
                                    : ""
                                }`}
                              >
                                {option}
                              </span>
                            </li>
                          ))}
                        </ol>
                        <div className="relative ">
                          {right[1] - right[0] > 0 ? (
                            <ArrowUpIcon className="absolute bottom-6 right-6 w-6 h-6 text-green-700 object-right" />
                          ) : right[1] - right[0] < 0 ? (
                            <ArrowDownIcon className="absolute bottom-6 right-6 w-6 h-6 text-red-700 object-right" />
                          ) : (
                            ""
                          )}

                          <ProgressBar
                            correct={right[0]}
                            incorrect={wrong[0]}
                            total={right[0] + wrong[0]}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : (
                // <>
                //   {/* ... */}
                //   <h1>ตัวอย่างแบบทดสอบ</h1>
                //   jsondata.map(({ id, question, answer }) => {
                //     return (
                //       <div key={id}>
                //         <p>{question}</p>
                //         <p>{answer}</p>
                //       </div>
                //     );
                //   })}
                // </>
                // Render a message while loading sample questions
                <p>I'm Lucky</p>
              )}
            </div>
          </div>

          {/* Topic2 */}

          {/* <Combobox2 /> */}
        </main>
      </div>
    </>
  );
};

export default GenerateQuiz;
