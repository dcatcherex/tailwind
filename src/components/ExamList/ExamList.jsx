import data from "../../assets/datas/samplequestions.json";
import IndicatorBar from "../IndicatorBar";
import { Link } from "react-router-dom";
import ExamHead from "../../components/Exam/ExamHead";
import { StarIcon } from "@heroicons/react/20/solid";
import ProgressBar from "../ProgressBar";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import {PrinterIcon} from "@heroicons/react/24/outline";
import {BookOpenIcon} from "@heroicons/react/24/outline";
import {WifiIcon} from "@heroicons/react/24/outline";

const ExamList = () => {
  const knowledgeTotal = data.reduce((total, { indicator }) => {
    if (indicator === "knowledge") {
      return total + 1;
    }
    return total;
  }, 0);

  const processTotal = data.reduce((total, { indicator }) => {
    if (indicator === "process") {
      return total + 1;
    }
    return total;
  }, 0);

  const attributeTotal = data.reduce((total, { indicator }) => {
    if (indicator === "attribute") {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <div>
      {/* head */}
      <div className="p-2 mb-2 flex items-center justify-between">
        <ExamHead />
        <div className="btn rounded-full fixed right-4 m-auto bottom-[50%] z-10">
          <div className="flex flex-col items-center justify-center  rounded-full">
            <PrinterIcon className="w-6 h-6 text-white" />
            <p>พิมพ์</p>
          </div>
        </div>
      </div>

      <div id="bar" className="mb-2">
        <IndicatorBar
          knowledge={knowledgeTotal}
          process={processTotal}
          attribute={attributeTotal}
        />
      </div>
      <div className="px-4 mt-8 text-base font-light font-sans text-slate-600 text-center  ">
        อ้างอิง: หนังสือเรียนรายวิชาพื้นฐานวิทยาศาสตร์และเทคโนโลยี ป.4 เล่ม 1
        เรื่อง...
      </div>

      {/* ปุ่มสอบ */}
      <div className=" p-4 grid grid-cols-2 gap-x-2  ">
        <button className="text-base font-light py-4 btn bg-dimviolet inline-flex justify-center gap-x-1.5 items-center ">
          <BookOpenIcon className="w-6 h-6" />
          ให้การบ้าน
        </button>

        <Link
          to={"/examsetting"}
          className=" text-base font-light py-4 btn bg-dimviolet inline-flex justify-center gap-x-1.5 items-center"
        >
          <WifiIcon className="w-6 h-6" />
          จัดสอบ
        </Link>
      </div>

      <div className="mt-4 text-lg grid grid-cols-1 gap-4 sm:grid-cols-2 sm:mx-4 lg:grid-cols-3 lg:mx-4 ">
        {/* ข้อสอบ */}

        {data.map(
          ({ id, question, options, answer, indicator, difficulty,right,wrong,wrong_answer }) => (
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
                        option === answer ? "border-green-500 border-b-2" :option === wrong_answer ? "border-red-500 border-b-2" : ""
                      }`}
                    >
                      {option}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="relative ">{(right[1]-right[0])>0?<ArrowUpIcon className="absolute bottom-6 right-6 w-6 h-6 text-green-700 object-right" />:(right[1]-right[0])<0?<ArrowDownIcon className="absolute bottom-6 right-6 w-6 h-6 text-red-700 object-right" />:""}
                
                
                <ProgressBar correct={right[0]} incorrect={wrong[0]} total={right[0]+wrong[0]} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ExamList;
