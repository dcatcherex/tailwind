import teacherpic from "../../assets/images/teacher.svg";
import SampleQuestion from "../../assets/datas/samplequestions.json";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon} from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

import circle1 from "../../assets/images/circle1.png"
import circle2 from "../../assets/images/circle2.png"
import circle3 from "../../assets/images/circle3.png"
import circle4 from "../../assets/images/circle4.png"
import circle5 from "../../assets/images/circle5.png"


import { set, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";


import IndicatorBar from "../IndicatorBar";


const GenerateQuiz = () => {
  const { register, handleSubmit } = useForm();
  const [jsonData, setJsondata] = useState([]);
  const [displayResult, setDisplayResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true)

    axios
      .post(
        "https://linkquiz-1-u2330317.deta.app/create_response",
        quizgenerate
      )
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        setJsondata(response.data);
        setDisplayResult(1);
      
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);

        // Load sample questions instead of making a POST request
        setJsondata(SampleQuestion);
        console.log(jsonData);
        setDisplayResult(1);
      })
      .finally(() => {
        setIsLoading(false);
      
      })
  };

  // const knowledgeTotal = jsonData.reduce((total, { bloom_level }) => {
  //   if (bloom_level === "Remember") {
  //     return total + 1;
  //   }
  //   return total;
  // }, 0);

  // const processTotal = jsonData.reduce((total, { bloom_level }) => {
  //   if (bloom_level === "Understand") {
  //     return total + 1;
  //   }
  //   return total;
  // }, 0);

  // const attributeTotal = jsonData.reduce((total, { bloom_level }) => {
  //   if (bloom_level === "attribute") {
  //     return total + 1;
  //   }
  //   return total;
  // }, 0);

  return (
    <>
      <div className="bg-fixed min-h-screen  bg-violet-100 flex max-w-[1280px] mx-auto flex-col items-center ">
        {/* end of search */}
        <main className="flex w-full flex-col items-center  px-4 mt-2 sm:mt-8">
        
          <h1 className="w-full text-center sm:text-left sm:text-4xl text-2xl max-w-[1280px] font-medium text-darkviolet mb-4">
            แบบทดสอบแบบเลือกตอบ (Multiple choice)
          </h1>
          <div className="max-w-[1280px] mt-4 mb-4 ">
            <p className="text-slate-700 mb-2 font-body mx-4 "><span className="bg-lime-300 px-2 rounded-md font-semibold">ข้อดี:</span>วัดพฤติกรรมพุทธิพิสัยได้ครบทั้ง 6 ขั้น ตรวจง่าย เขียนข้อสอบได้คลุมเนื้อหา</p>
            <p className="text-slate-700 font-body mx-4"><span className="bg-red-300 px-2 rounded-md font-semibold">จุดสังเกตุ:</span>สร้างยากโดยเฉพาะคำถามที่วัดพฤติกรรมขั้นสูง ใช้เวลาในการเขียนข้อสอบนาน วัดการแสดงวิธีทำ ทักษะการเขียน การวิพากษ์วิจารณ์ การอภิปรายแสดงความคิดเห็นไม่ได้</p>
          </div>
          <div> </div>
          {/* {displayResult?<div id="bar" className="mb-6  w-full">
                    <IndicatorBar
                      knowledge={knowledgeTotal}
                      process={processTotal}
                      attribute={attributeTotal}
                    />
                  </div>:""} */}
          

          {/* react hook form */}
          <div className=" flex flex-col sm:flex-row-reverse justify-between  gap-4 w-full mt-2 ">
            
            <form onSubmit={handleSubmit(onSubmit)} className=" px-4 pb-8 sm:border-2 border-dimviolet sm:p-4 sm:rounded-lg sm:shadow-lg text-lg">
              <div className="flex flex-row gap-2">
                <img src={circle1} alt="" className="w-6 h-6" />
                <div className="w-full mb-3 ">
                  <label htmlFor="grade" >เลือกระดับชั้น:</label>
                  <select
                    {...register("grade")}
                    className="w-full  rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2"
                  >
                    <option value="4">ประถมศึกษาปีที่ 4</option>
                    <option value="1">ประถมศึกษาปีที่ 1</option>
                    <option value="2">ประถมศึกษาปีที่ 2</option>
                    <option value="3">ประถมศึกษาปีที่ 3</option>
                    <option value="5">ประถมศึกษาปีที่ 5</option>
                    <option value="6">ประถมศึกษาปีที่ 6</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <img src={circle2} alt="" className="w-6 h-6" />
                <div className="w-full mb-3">
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
              </div>

              <div className="flex flex-row gap-2">
                <img src={circle3} alt="" className="w-6 h-6" />
                <div className="w-full mb-3">
                  <label htmlFor="part">เลือกภาคเรียน:</label>
                  <select
                    {...register("part")}
                    className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2"
                  >
                    <option value="1">ภาคเรียนที่ 1</option>
                    <option value="2">ภาคเรียนที่ 2</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <img src={circle4} alt="" className="w-6 h-6" />
                <div className="w-full mb-3">
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
              </div>

              <div className="flex flex-row gap-2">
                <img src={circle5} alt="" className="w-6 h-6" />
                <div className="w-full mb-3">
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
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn bg-dimviolet w-full cursor-pointer text-lg">{isLoading?'กำลังดำเนินการ...':'สร้างแบบทดสอบ'}</button>
              
            </form>
            {/* Conditional rendering */}
            <div className={`${displayResult ? 'border-2 border-dashed border-gray-300 rounded-lg ' : ''}`}>

              <IndicatorBar knowledge={2} process={1} attribute={1}/>
              {displayResult ? (
                // Render the form

                <div className=" mt-4 text-lg grid grid-cols-1 gap-4 sm:grid-cols-2 sm:mx-4 max-w-[800px]">
                  {/* ข้อสอบ */}
                  

                  {Object.entries(jsonData).map(
                    ([key, quiz]) => {
                      const { choices, correct_answer, question ,indicator,bloom_level} = quiz
                      return (
                      <div
                        key={key}
                        className={`  opacity-100 shadow-md p-4 font-body font-medium sm:rounded-lg item hover:rign-dimviolet hover:ring-2 hover:ring-dimviolet hover:scale-105 transition-transform duration-150 ${
                          bloom_level === "Remember"
                            ? "bg-lime-200"
                            : indicator === "Understand"
                            ? "bg-yellow-200"
                            : "bg-orange-200"
                        }`}
                      >
                        <h3 className=" font-medium list-decimal mb-2">
                          <span className="bg-purple text-white rounded-full px-2 py-1 mr-2 ">{key}.</span>{question}
                        </h3>
                        <h3 className=" font-light text-md list-decimal font-sans text-slate-500  bg-gray-100 px-2 rounded-full">
                          ตัวชี้วัด: {indicator}
                        </h3>
                        
                        <div className="flex gap-x-2 font-light font-base font-sans">
                        <>
                              <StarIcon className="w-4 h-4 text-purple" />
                            </>
                          {/* {difficulty === 1 && (
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
                          )} */}
                        </div>

                        <ol className="list-decimal my-2 pl-8">
                          {choices.map((option) => (
                            <li key={option} className="font-light py-0.5 ">
                              <span
                                className={`px-1 ${
                                  option === correct_answer
                                    ? "border-green-500 border-b-2"
                                    // : option === wrong_answer
                                    // ? "border-red-500 border-b-2"
                                    : ""
                                }`}
                              >
                                {option}
                              </span>
                            </li>
                          ))}
                        </ol>
                        <div className="flex justify-end left-[75%]">
                          <div className=" hover:text-dimviolet text-white p-1 cursor-pointer">
                            <ArrowPathIcon className=" w-6 h-6  " />
                          </div>
                          <div className=" hover:text-dimviolet text-white p-1 cursor-pointer">
                            <PencilSquareIcon className=" w-6 h-6  " />
                          </div>
                          <div className=" hover:text-dimviolet text-white p-1 cursor-pointer">
                            <TrashIcon className=" w-6 h-6  " />
                          </div>
                        </div>

                        {/* <div className="relative ">
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
                        </div> */}
                      </div>)
                    }
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
              ""
              )}

               {/* display loading */}
               {isLoading?<div className="flex justify-center items-center ">
                 <ArrowPathIcon className="w-10 h-10 animate-spin text-dimviolet"  />
               </div>:""}
          <PlusCircleIcon className="mt-2 w-14 h-14 mx-auto text-dimviolet" />
               
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
