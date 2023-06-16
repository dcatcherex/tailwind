import data from "../../assets/datas/samplequestions.json";
import { PrinterIcon } from "@heroicons/react/20/solid";

const ExamList = () => {
  const examTitle = "แบบทดสอบความสามารถด้านวิทยาศาสตร์";
  const academicYear = "ปีการศึกษา 2563";
  const gradeLevel = "ชั้นประถมศึกษาปีที่ 4";

  return (
    <div>
      {/* head */}
      <div className="p-2 mb-2 flex items-center justify-between">
        <h1 className="text-left font-medium text-xl text-darkviolet">
          {examTitle} {gradeLevel} {academicYear}
        </h1>
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

      <div className="text-lg grid grid-cols-1 px-6 sm:grid-cols-2  lg:grid-cols-3">
        {/* ข้อสอบ */}

        {data.map(({ id, question, options, answer }) => (
          <div key={id} className="font-body font-medium mb-6 w-[300px]">
            <h3 className=" font-medium list-decimal">
              {id}.{question}
            </h3>
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
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end  border-t-2 border-slate-200 mb-6 pt-6 text-light">
        <p className="font-light text-slate-500">
          {examTitle} {gradeLevel} {academicYear}
        </p>
        <div className="bg-red-500 flex-auto h-[1px]"></div>
      </div>
    </div>
  );
};

export default ExamList;
