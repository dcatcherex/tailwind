import viewicon from "../../assets/images/view.svg";
import link from "../../assets/images/link.svg";
import exam from "../../assets/images/exam.svg";
import quiz from "../../assets/images/quiz.png";
import ExamType from "../ExamType/ExamType";
import { useState } from "react";

import templates from "../../assets/datas/prompttemplatedata.json";

const TemplateSet = () => {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(templates.length / ITEMS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedData = templates.slice(startIndex, endIndex);

  const displayWithFilter = ()=> {
    const [filterValue, setFilterValue] = useState("");
  }

  // const filteredData = data.filter((item) => {
  //   // Return true if there's no active filter or if the item matches the active filter.
  //   return !filterValue || item.type === filterValue;
  // });

  return (
    <div>
      {/* button filter */}
      <div>
        <button className="btn" onClick={()=> setFilterValue("")}>All</button>
        <button className="btn" onClick={()=> setFilterValue("writing")}>Writing</button>
        <button className="btn" onClick={()=> setFilterValue("social")}>Social</button>
        <button className="btn" onClick={()=> setFilterValue("social")}>Education</button>
      </div>
      
      <main className=" bg-violet-100 grid grid-cols-2 gap-4 pt-4 mt-4 px-4">
        {paginatedData.map(({ id, title, des, view }) => (
          <div
            key={id}
            className="flex flex-col gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100"
          >
            <div>
              <div className="relative group-hover:visible ">
                <button className="hover:bg-red-500 absolute top-0 right-0 rounded-full bg-white p-2">
                  <img className="w-3 h-3" src={viewicon} alt="" />
                </button>
              </div>
              <h2 className="text-lg font-semibold text-purple">{title}</h2>
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
      </main>
      <button
        className="btn"
        onClick={handleClickPrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleClickPage(pageNumber)}
          className={
            currentPage === pageNumber
              ? "btn bg-violet-500 border-violet-500"
              : "btn"
          }
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="btn"
        onClick={handleClickNext}
        disabled={endIndex >= templates.length}
      >
        Next
      </button>

      {/* <ExamType /> */}
    </div>
  );
};

export default TemplateSet;
