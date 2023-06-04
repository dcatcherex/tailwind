import viewicon from "../../assets/images/view.svg";
import link from "../../assets/images/link.svg";
import exam from "../../assets/images/exam.svg";
import quiz from "../../assets/images/quiz.png";
import ExamType from "../ExamType/ExamType";

import templates from "../../assets/datas/prompttemplatedata.json";

const TemplateSet = () => {
  return (
    <div>
      <main className=" bg-violet-100 grid grid-cols-2 gap-4 pt-4 mt-4 px-4">
        
        {templates.map(({id, title, des, view}) => (
        <div key ={id} className="flex flex-col gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
          <div>
            <div className="relative group-hover:visible ">
              <button className="hover:bg-red-500 absolute top-0 right-0 rounded-full bg-white p-2"><img className="w-3 h-3" src={viewicon} alt="" /></button>
            </div>
            <h2 className="text-lg font-semibold text-purple">
              {title}
            </h2>
            <p className="line-clamp-2 text-sm font-body text-gray-500 mt-1">
              {des}
            </p>
          </div>
          <div className="flex flex-row justify-between gap-x-2 mt-3">
            <div className="flex gap-x-2 items-center">
              <img className="w-3 h-3" src={viewicon} />
              <p className="text-xs font-light text-gray-400">{view}</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <buttn className="hover:bg-slate-500">
                <img className="w-3 h-3" src={link} />
              </buttn>
            </div>
          </div>

        </div>
        ))}

        <div className="flex flex-col gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
          <div>
            <h2 className="text-lg font-semibold text-purple">
              เขียนแผนการสอน
            </h2>
            <p className="text-sm font-body text-gray-500 mt-1">
              กำหนดชั้น สิ่งที่อยากให้เรียนรู้ ให้ AI ช่วยออกแบบให้
            </p>
          </div>
          <div className="flex flex-row justify-between gap-x-2 mt-3">
            <div className="flex gap-x-2 items-center">
              <img className="w-3 h-3" src={viewicon} />
              <p className="text-xs font-light text-gray-400">129</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <buttn className="hover:bg-slate-500">
                <img className="w-3 h-3" src={link} />
              </buttn>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
          <div>
            <h2 className="text-lg font-semibold text-purple">
              สรุปรายงานการประชุม
            </h2>
            <p className="text-sm font-body text-gray-500 mt-1">
              ใส่เนื้อหาให้ AI ช่วยสรุปการประชุมให้
            </p>
          </div>
          <div className="flex flex-row justify-between gap-x-2 mt-3">
            <div className="flex gap-x-2 items-center">
              <img className="w-3 h-3" src={viewicon} />
              <p className="text-xs font-light text-gray-400">129</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <buttn className="hover:bg-slate-500">
                <img className="w-3 h-3" src={link} />
              </buttn>
            </div>
          </div>
        </div>
      </main>

      <ExamType />

      <div className=" flex bg-white w-[100%-100px] h-[100px] mx-4 mt-2 rounded-md border-2 shadow-sm">
        <img
          className="w-[100px] h-[100px] rounded-l-md border-r-2 bg-v"
          src={quiz}
        />

        <div className="pt-2 px-2">
          <h2 className="text-lg font-medium">ปรนัยแบบถูกผิด (true-false)</h2>
          <p className="text-base font-body font-light text-gray-400 mt-1 s">
            วัดพฤติกรรมพุทธิพิสัยได้ครบทั้ง 6 ขั้น ตรวจง่าย
            เขียนข้อสอบได้คลุมเนื้อหา
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateSet;
