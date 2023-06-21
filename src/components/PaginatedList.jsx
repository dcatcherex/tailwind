import { useState } from "react";

const PaginatedList = ({ jsonData, questionSelect,selectedOptions  }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages.
  const totalPages = Math.ceil(jsonData.length / itemsPerPage);

  // Extract paginated data.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = jsonData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Update selected question when changing the page
  };

  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  //   const newQuestionIndex = (newPage - 1) * itemsPerPage; // Calculate index of the first question on the new page
  //   questionSelect(newQuestionIndex); // Call the questionSelect prop with the new question index
  // };

  return (
    <>
      <div className="flex justify-center gap-x-1 text-slate-500">
        {currentPage > 1 && (
          <button
            className="p-2 px-4 border-2 border-blue-300 active:bg-blue-500 hover:bg-blue-500 hover:text-white rounded-full"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {"<"}
          </button>
        )}
        {paginatedData.map((q, index) => (
          <button
          className={`p-2 px-4 border-2 border-blue-300 active:bg-blue-500 hover:bg-blue-500 hover:text-white rounded-full ${
            selectedOptions[q._id] ? "bg-green-500" : ""
          }`} // Apply background color if there's a saved answer for this question
          key={q._id}
          onClick={() => questionSelect(startIndex + index)}
        >
            {startIndex + index + 1}
          </button>
        ))}
        <div className="">
          {currentPage < totalPages && (
            <button
              className="p-2 px-4 border-2 border-blue-300 active:bg-blue-500 hover:bg-blue-500 hover:text-white rounded-full"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {">"}
            </button>
          )}
        </div>
      </div>
      <div className="mb-20"></div>
    </>
  );
};

export default PaginatedList;
