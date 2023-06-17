import SelectBox from "../SelectBox/SelectBox";
import { useState } from "react";

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

const ExamPortal = () => {
  const [filterValue, setFilterValue] = useState("all");

  const filteredData = filterValue === "all" ? levels : filterValue;
  return (
    <div>
      <SelectBox choice={levels} />
      {/* button filter */}
      <div className="flex justify-center pt-4">
        <button
          className="btn px-4 py-2 min-w-[70px] rounded-full"
          onClick={() => setFilterValue("all")}
        >
          ทั้งหมด
        </button>
        <button
          className="btn px-4 py-2 min-w-[70px] rounded-full"
          onClick={() => setFilterValue("writing")}
        >
          ภาษาไทย
        </button>
        <button
          className="btn px-4 py-2 min-w-[70px] rounded-full"
          onClick={() => setFilterValue("social")}
        >
          คณิตศาสตร์
        </button>
        <button
          className="btn px-4 py-2 min-w-[70px] rounded-full"
          onClick={() => setFilterValue("education")}
        >
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
      <div className="m-4">
        <h3>ที่ใช้บ่อย</h3>
        <div className="flex gap-2 mt-2 overflow-auto">
          <div className="bg-white border-2 border-gray-300 rounded-lg">
            <div className="p-2 min-h-[100px] w-[150px] bg-violet-300 text-center text-lg flex justify-center  items-center text-darkviolet">
              การถ่ายทอดลักษณะของสิ่งมีชีวิต
            </div>
            <div className="px-2 text-slate-600">
              <div>วิทยาศาสตร์</div>
              <div className="flex flex-row justify-between text-sm items-center text-slate-500">
                <p>20 คำถาม</p>
                <p className="flex flex-row items-center gap-1">
                  5.2k
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


          <div className="bg-white border-2 border-gray-300 rounded-lg">
            <div className="p-2 min-h-[100px] w-[150px] bg-violet-300 text-center text-lg flex justify-center  items-center text-darkviolet">
              การถ่ายทอดลักษณะของสิ่งมีชีวิต
            </div>
            <div className="px-2 text-slate-600">
              <div>วิทยาศาสตร์</div>
              <div className="flex flex-row justify-between text-sm items-center text-slate-500">
                <p>20 คำถาม</p>
                <p className="flex flex-row items-center gap-1">
                  5.2k
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


          <div className="bg-white border-2 border-gray-300 rounded-lg">
            <div className="p-2 min-h-[100px] w-[150px] bg-violet-300 text-center text-lg flex justify-center  items-center text-darkviolet">
              การถ่ายทอดลักษณะของสิ่งมีชีวิต
            </div>
            <div className="px-2 text-slate-600">
              <div>วิทยาศาสตร์</div>
              <div className="flex flex-row justify-between text-sm items-center text-slate-500">
                <p>20 คำถาม</p>
                <p className="flex flex-row items-center gap-1">
                  5.2k
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


          
          <div className="bg-white border-2 border-gray-300 rounded-lg">
            <div className="p-2 min-h-[100px] w-[150px] bg-violet-300 text-center text-lg flex justify-center  items-center text-darkviolet">
              การถ่ายทอดลักษณะของสิ่งมีชีวิต
            </div>
            <div className="px-2 text-slate-600">
              <div>วิทยาศาสตร์</div>
              <div className="flex flex-row justify-between text-sm items-center text-slate-500">
                <p>20 คำถาม</p>
                <p className="flex flex-row items-center gap-1">
                  5.2k
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
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ExamPortal;
