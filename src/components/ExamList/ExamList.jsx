import data from "../../assets/datas/samplequestions.json";
import IndicatorBar from "../IndicatorBar";
import { Link } from "react-router-dom";
import ExamHead from "../../components/Exam/ExamHead";
import { StarIcon } from "@heroicons/react/20/solid";
import ProgressBar from "../ProgressBar";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { ArrowUpIcon } from "@heroicons/react/20/solid";

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
        <div className="btn rounded-full fixed right-4 bottom-[50%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
            />
          </svg>
          พิมพ์
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
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          ให้การบ้าน
        </button>

        <Link
          to={"/examsetting"}
          className=" text-base font-light py-4 btn bg-dimviolet inline-flex justify-center gap-x-1.5 items-center"
        >
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
              d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
            />
          </svg>
          จัดสอบ
        </Link>
      </div>

      <div className="mt-4 text-lg grid grid-cols-1 gap-4 sm:grid-cols-2 sm:mx-4 lg:grid-cols-3 lg:mx-4 ">
        {/* ข้อสอบ */}

        {data.map(
          ({ id, question, options, answer, indicator, difficulty,right,wrong }) => (
            <div
              key={id}
              className={` p-4 font-body font-medium sm:rounded-lg item ${
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
                        option === answer ? "border-green-500 border-b-2" : ""
                      }`}
                    >
                      {option}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="relative ">
                <ArrowUpIcon className="absolute bottom-6 right-6 w-6 h-6 text-green-700 object-right" />
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
