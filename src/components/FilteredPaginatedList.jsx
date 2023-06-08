import { useState } from 'react';

const FilteredPaginatedList = ({ jsonData }) => {
  const [filterValue, setFilterValue] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleChangeFilter = (event) => {
    setFilterValue(event.target.value);
    setCurrentPage(1); // Reset to the first page when changing the filter.
  };

  // Filter data based on selected option.
  const filteredData =
    filterValue === 'all'
      ? jsonData
      : jsonData.filter((item) => item.type === filterValue);

  // Calculate total pages.
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Extract paginated data.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

   const handlePageChange = (newPage) => {
     setCurrentPage(newPage);
   };

   return (
     <>
       <div>
         <select value={filterValue} onChange={handleChangeFilter}>
           <option value="all">All</option>
           <option value="writing">Writing</option>
           <option value="education">Education</option>
         </select>
       </div>

       <ul>
         {paginatedData.map((item, id) => (
           <li key={id}>{`${item.title} (${item.type})`}</li>
         ))}
       </ul>

      <div>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    </>
  );
};

export default FilteredPaginatedList;