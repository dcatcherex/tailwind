import { useState } from "react";
import QuizListData from "../../assets/datas/quizlistdata.json";

import allicon from "../../assets/images/icons/all.svg";
import mathsicon from "../../assets/images/icons/maths.svg"
import touchicon from "../../assets/images/icons/touch.svg"
import translationicon from "../../assets/images/icons/translation.svg"

import {motion} from "framer-motion"

import { Link } from "react-router-dom";

const levels = [
  "ประถมศึกษาปีที่ 1",
  "ประถมศึกษาปีที่ 2",
  "ประถมศึกษาปีที่ 3",
  "ประถมศึกษาปีที่ 4",
  "ประถมศึกษาปีที่ 5",
  "ประถมศึกษาปีที่ 6",
  "มัธยมศึกษาปีที่ 1",
  "มัธยมศึกษาปีที่ 2",
  "มัธยมศึกษาปีที่ 3",
];

const subjects = [
  "ภาษาไทย",
  "คณิตศาสตร์",
  "เทคโนโลยี",
  "วิทยาศาสตร์",
  "ศาสนาและวัฒนธรรม",
  "สุขศึกษาและพลศึกษา",
  "ทัศนศิลป์",
  "ดนตรีและนาฏศิลป์",
  "การงานอาชีพ",
  "ภาษาต่างประเทศ",
];

const topics = [
  "สิ่งมีชีวิตรอบตัว",
  "พืชดอก",
  "สัตว์มีกระดูกสันหลัง",
  "สารรอบตัว",
  "แรง",
  "แสง",
  "ดวงจันทร์และระบบสุริยะ",
];

const variants = {
  visible: {opacity: 1, x: 0 },
  hidden: {opacity: 0, x: 100}
}

const ExamPortal = () => {
  const [filterValue, setFilterValue] = useState("all");
  const timeFilteredData = QuizListData.sort((a, b) => a.time - b.time).slice(
    0,
    5
  );
  const likeFilteredData = QuizListData.filter((item) => item.like === true);

  const filteredData = filterValue === "all" ? subjects : filterValue;
  return (
    <div className="min-h-screen">
      {/* <SelectBox choice={levels} /> */}
      {/* button filter */}
      <div className="flex justify-center pt-4  max-w-[1280px] mx-auto ">
        <button
          className="px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet"
          onClick={() => setFilterValue("all")}
        ><img src={allicon} className="w-20 h-20" alt="all icon"/>
          ทั้งหมด
        </button>
        <button
          className="px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet"
          onClick={() => setFilterValue("writing")}
        ><img src={translationicon} className="w-20 h-20" alt="all icon"/>
          ภาษา
        </button>
        <button
          className="px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet"
          onClick={() => setFilterValue("social")}
        ><img src={mathsicon} className="w-20 h-20" alt="all icon"/>
          คณิตศาสตร์
        </button>
        <button
          className=" px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet"
          onClick={() => setFilterValue("education")}
        ><img src={touchicon} className="w-20 h-20" alt="all icon"/>
          เทคโนโลยี
        </button>
        
        {/* <button className="btn px-4 py-2 min-w-[70px] rounded-full" onClick={()=> setFilterValue("writing")}>ศาสนาและวัฒนธรรม</button>
        <button className="btn px-4 py-2 min-w-[70px] rounded-full" onClick={()=> setFilterValue("social")}>สุขศึกษาและพลศึกษา</button>
        <button className="btn px-4 py-2 min-w-[70px] rounded-full" onClick={()=> setFilterValue("education")}>ทัศนศิลป์</button>
        <button className="btn px-4 py-2 min-w-[70px] rounded-full" onClick={()=> setFilterValue("social")}>ดนตรีและนาฏศิลป์</button>
        <button className="btn px-4 py-2 min-w-[70px] rounded-full" onClick={()=> setFilterValue("education")}>การงานอาชีพ</button>
        <button className="btn px-4 py-2 min-w-[70px] rounded-full" onClick={()=> setFilterValue("education")}>ภาษาต่างประเทศ</button> */}
      </div>

      {/* ที่ใช้บ่อย */}
      <motion.div className=" " initial="hidden"
    animate="visible" variants={variants}>
        <div className=" m-4 max-w-[1280px] mx-auto pl-4 ">
          <h3 className="inline-flex gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
            ที่ใช้บ่อย
          </h3>
          <div className="flex gap-2 sm:gap-4 mt-1 overflow-auto ">
            {timeFilteredData.map(
              ({ id, section, level, subject, question, view }) => (
                <Link to={'/examlist'}
                  key={id}
                  className="  bg-white rounded-lg border-2 border-violet-100 hover:border-2  hover:border-dimviolet cursor-pointer  "
                >
                  <div className="p-2 min-h-[100px] w-[150px] bg-violet-300 text-center text-lg flex justify-center  items-center text-darkviolet   rounded-t-md">
                    {subject}
                  </div>
                  <div className="px-2 text-slate-600">
                    <div className="flex flex-row justify-between items-center">
                      <div>{section}</div>
                      <div>{level}</div>
                    </div>
                    <div className="flex flex-row justify-between text-sm items-center text-slate-500">
                      <p>{question} คำถาม</p>
                      <p className="flex flex-row items-center gap-1">
                        {view}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="gray"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </Link>
              )
            )}
            {/*  */}
          </div>
        </div>
        <div className="m-4 max-w-[1280px] mx-auto pl-4">
          <h3 className="inline-flex gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            ที่เลือกไว้
          </h3>
          <div className="flex gap-2 sm:gap-4 mt-1 overflow-auto">
            {likeFilteredData.map(
              ({ id, section, level, subject, question, view }) => (
                <div
                  key={id}
                  className="bg-white rounded-lg border-2 border-violet-100 hover:border-2  hover:border-dimviolet cursor-pointer "
                >
                  <div className="p-2 min-h-[100px] w-[150px] bg-violet-300 text-center text-lg flex justify-center  items-center text-darkviolet rounded-t-md">
                    {subject}
                  </div>
                  <div className="px-2 text-slate-600">
                    <div className="flex flex-row justify-between items-center">
                      <div>{section}</div>
                      <div>{level}</div>
                    </div>
                    <div className="flex flex-row justify-between text-sm items-center text-slate-500">
                      <p>{question} คำถาม</p>
                      <p className="flex flex-row items-center gap-1">
                        {view}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="gray"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
            {/*  */}
          </div>
        </div>
        <div className="m-4 max-w-[1280px] mx-auto pl-4">
          <h3 className="inline-flex gap-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
            มาใหม่
          </h3>
          <div className="flex gap-2 sm:gap-4 mt-1 overflow-auto">
            {likeFilteredData.map(
              ({ id, section, level, subject, question, view }) => (
                <div
                  key={id}
                  className="bg-white rounded-lg border-2 border-violet-100 hover:border-2  hover:border-dimviolet cursor-pointer "
                >
                  <div className="p-2 min-h-[100px] w-[150px] bg-violet-300 text-center text-lg flex justify-center  items-center text-darkviolet rounded-t-md">
                    {subject}
                  </div>
                  <div className="px-2 text-slate-600">
                    <div className="flex flex-row justify-between items-center">
                      <div>{section}</div>
                      <div>{level}</div>
                    </div>
                    <div className="flex flex-row justify-between text-sm items-center text-slate-500">
                      <p>{question} คำถาม</p>
                      <p className="flex flex-row items-center gap-1">
                        {view}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="gray"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
            {/*  */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExamPortal;
