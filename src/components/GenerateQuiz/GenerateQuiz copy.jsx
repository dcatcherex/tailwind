import teacherpic from "../../assets/images/teacher.svg";
import circle1 from "../../assets/images/circle1.png";
import circle2 from "../../assets/images/circle2.png";
import circle3 from "../../assets/images/circle3.png";
import circle4 from "../../assets/images/circle4.png";

import apps from "../../assets/images/apps.svg";
import examwhite from "../../assets/images/examwhite.svg";
import bot from "../../assets/images/icons/bot.svg";

import SelectBox from "../SelectBox/SelectBox";
import Buttongroups from "../Buttongroups/Buttongroups";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import Select from "react-select"
import { useState, useEffect } from "react";
import axios from 'axios'

const buttontexts = ["1 ข้อ", "5 ข้อ", "10 ข้อ", "20 ข้อ"];
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

const GenerateQuiz = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { grade, subject, topic, part, num } = data;
    const quizgenerate = {"grade":parseInt(grade), "subject":subject,"part":parseInt(part), "topic":topic,  "num_question":parseInt(num)}
      
    console.log(data)
    console.log(quizgenerate)

    
    
  };






  return (
    <>
      <div className="bg-fixed min-h-screen  bg-violet-100 flex max-w-5xl mx-auto flex-col items-center ">
        {/* end of search */}
        <main className="flex w-full flex-col items-center  px-4 mt-8 sm:mt-12">
          <img
            className="hidden sm:visible max-w-[300px] sm:max-w-[500px]"
            src={teacherpic}
          />
          <h1 className="text-center sm:text-6xl text-2xl max-w-[708px] font-medium text-purple mb-8">
            สร้างแบบทดสอบแบบเลือกตอบ
          </h1>

          {/* react hook form */}

          <form onSubmit={handleSubmit(onSubmit)} >
            <div>
              <label htmlFor="grade">เลือกระดับชั้น:</label>
              <select {...register("grade")}>
                <option value="1">ประถมศึกษาปีที่ 1</option>
                <option value="2">ประถมศึกษาปีที่ 2</option>
                <option value="3">ประถมศึกษาปีที่ 3</option>
                <option value="4">ประถมศึกษาปีที่ 4</option>
                <option value="5">ประถมศึกษาปีที่ 5</option>
                <option value="6">ประถมศึกษาปีที่ 6</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject">เลือกกลุ่มสาระ:</label>
              <select {...register("subject")}>
                <option value="S">วิทยาศาสตร์</option>
                <option value="M">คณิตศาสตร์</option>
                <option value="E">ภาษาอังกฤษ</option>
              </select>
            </div>

            <div>
              <label htmlFor="part">เลือกภาคเรียน:</label>
              <select {...register("part")}>
                <option value="1">ภาคเรียนที่ 1</option>
                <option value="2">ภาคเรียนที่ 2</option>
              </select>
            </div>

            <div>
              <label htmlFor="topic">เลือกหัวข้อ:</label>
              <select {...register("topic")}>
                <option value="สิ่งต่างๆรอบตัว">สิ่งต่าง ๆ รอบตัว</option>
                <option value="สิ่งมีชีวิต">สิ่งมีชีวิต</option>
                <option value="แรงและพลังงาน">แรงและพลังงาน</option>
              </select>
            </div>

            <div>
              <label htmlFor="num">เลือกจำนวนข้อ:</label>
              <select {...register("num")}>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
            <input type="submit" className="btn" />

          </form>

          <div className="flex flex-1 w-full flex-row mt-6 mb-2 space-x-3">
            <img alt="1 icon" src={circle1} className="w-6 h-6" />
            <p className=" text-lg font-medium text-left tracking-wide">
              เลือกระดับชั้น
            </p>
          </div>

          <SelectBox choice={levels} />

          {/* Topic2 */}

          <div className="flex flex-1 w-full flex-row mt-6 mb-2 space-x-3">
            <img alt="2 icon" src={circle2} className="w-6 h-6" />
            <p className=" text-lg font-medium text-left tracking-wide">
              เลือกกลุ่มสาระ
            </p>
          </div>
          <SelectBox choice={subjects} />

          <div className="flex flex-1 w-full flex-row mt-6 mb-2 space-x-3">
            <img alt="3 icon" src={circle3} className="w-6 h-6" />
            <p className=" text-lg font-medium text-left tracking-wide">
              เลือกหัวข้อ
            </p>
          </div>
          <SelectBox choice={topics} />

          <div className="flex flex-1 w-full flex-row mt-6 mb-2 space-x-3">
            <img alt="2 icon" src={circle3} className="w-6 h-6" />
            <p className=" text-lg font-medium text-left tracking-wide">
              เลือกจำนวนข้อ
            </p>
          </div>
          {/* <Combobox2 /> */}
          <Buttongroups text={buttontexts} />

          <Link
            to="/examlist"
            className=" text-lg w-full justify-center inline-flex gap-x-1.5 items-center px-4 py-4 bg-dimviolet hover:bg-violet-300 rounded-md text-white font-light tracking-wide mt-8"
          >
            <img className="w-5 h-5 stroke-white" src={examwhite} />
            สร้างข้อสอบ
          </Link>
          <p className="text-sm text-slate-500 mt-2 font-light ">
            สร้างเนื้อหาต่าง ๆ ไปแล้ว 0 ครั้ง
          </p>
        </main>

        <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
          <div className="font-light text-slate-500">
            Powered by
            <a
              href="https://openai.com/blog/chatgpt"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:underline transition underline-offset-2"
            >
              {" "}
              ChatGPT API{" "}
            </a>
          </div>
          {/* <div className="">
            Created by <p className="font-bold">Jone & Kiw</p>
          </div> */}
        </footer>
        <div className="fixed w-full bottom-0 box-border flex flex-1 flex-row items-center justify-between border-t-4 border-violet-200 divide-x divide-violet-200">
          <a
            className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-4 bg-purple hover:bg-slate-500 flex-1 text-white font-light"
            href=""
          >
            <img className="w-4 h-4" src={apps} />
            รวมสื่อ
          </a>
          <a
            className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-4 bg-purple hover:bg-slate-500 flex-1 text-white font-light "
            href=""
          >
            <img className="w-5 h-5" src={examwhite} />
            สร้าง
          </a>
          <a
            className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-4 bg-purple hover:bg-slate-500 flex-1 text-white font-light"
            href=""
          >
            <img className="fill-current text-green-600 w-6 h-6" src={bot} />
            เพื่อนครู AI
          </a>
        </div>
      </div>
    </>
  );
};

export default GenerateQuiz;
