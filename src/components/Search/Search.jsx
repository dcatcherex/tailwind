const Search = () => {
  return (
    <div className="relative">
      <input
        className="block w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:border-gray-500"
        type="search"
        name=""
        id=""
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-400"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            strokeOpacity="0"
            fillOpacity="0"
          />
          <circle cx={11} cy={11} r={8} />
          <line x1={21} y1={21} x2={16.65} y2={16.65} />
        </svg>
      </span>
    </div>
  );
};

export default Search;
