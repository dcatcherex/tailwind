import viewicon from "../../assets/images/view.svg";
import link from "../../assets/images/link.svg";
import exam from "../../assets/images/exam.svg";

import allicon from "../../assets/images/icons/all.svg";
import educationicon from "../../assets/images/icons/education.svg";
import socialicon from "../../assets/images/icons/social.svg";
import writingicon from "../../assets/images/icons/writing.svg";

import quiz from "../../assets/images/quiz.png";
import ExamType from "../ExamType/ExamType";
import { useState } from "react";
import {motion} from "framer-motion"

const TemplateSet = ({jsonData}) => {
  const [filterValue, setFilterValue] = useState("all");
  // const ITEMS_PER_PAGE = 20;

  const handleChangeFilter = (event) => {
    setFilterValue(event.target.value);
    // setCurrentPage(1); // Reset to the first page when changing the filter.
  };

    // Filter data based on selected option.
    const filteredData =
    filterValue === 'all'
      ? jsonData
      : jsonData.filter((item) => item.type === filterValue);

      const variants = {
          visible: {opacity: 1, y: 0 },
          hidden: {opacity: 0, y: 100}
      }

  return (
    <div className="min-h-screen">
      {/* button filter */}
      <div className=" flex justify-center pt-4">
        <button className=" px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet" onClick={()=> setFilterValue("all")}><img src={allicon} className="w-20 h-20" alt="all icon"/> All</button>
        <button className=" px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet" onClick={()=> setFilterValue("writing")}><img src={writingicon} className="w-20 h-20" alt="all icon"/>Writing</button>
        <button className=" px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet" onClick={()=> setFilterValue("social")}><img src={socialicon} className="w-20 h-20" alt="all icon"/>Social</button>
        <button className=" px-4 py-2 min-w-[70px] hover:scale-125 transition-transform text-darkviolet" onClick={()=> setFilterValue("education")}><img src={educationicon} className="w-20 h-20" alt="all icon"/>Education</button>
      </div>
      
      <main className=" max-w-[1280px] mx-auto bg-violet-100 grid grid-cols-2 grid- sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-2 mt-2 px-4 ">
        {filteredData.map(({ id, title, des, view }) => (
          <motion.div
            key={id}
            className="gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100 " initial="hidden"
            animate="visible" variants={variants}
          >
              <div className="">
                {/* <div className="relative group-hover:visible">
                  <button className="hover:bg-red-500 absolute top-0 right-0 rounded-full bg-white p-2">
                    <img className="w-3 h-3" src={viewicon} alt="" />
                  </button>
                </div> */}
                <h2 className="text-lg font-semibold text-darkviolet">{title}</h2>
                <p className="line-clamp-2 text-sm font-body text-gray-500 mt-1">
                  {des}
                </p>
              </div>
              <div className="">
                <div className="flex flex-row justify-between gap-x-2 mt-3">
                  <div className="flex gap-x-2 items-center">
                    <img className="w-3 h-3" src={viewicon} />
                    <p className="text-xs font-light text-gray-400">{view}</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <button className="hover:bg-slate-500">
                      <img className="w-3 h-3" src={link} />
                    </button>
                  </div>
                </div>
              </div>
          </motion.div>
        ))}
      </main>


 
    </div>
  );
};

export default TemplateSet;
