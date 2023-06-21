
const TimeBar = ({progress,questions,}) => {
  return (
    <div><div className="bg-gray-300 rounded-full">
    <div
      id="timebar"
      className="mt-4 h-2 bg-blue-500 rounded-full"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
  <div className="flex justify-between text-sm text-gray-500">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <p>Answered: 4/{questions.length}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 ml-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <p>Unanswered: 4/{questions.length}</p>
    </div>
    <div>01:00:00</div>
  </div></div>
  )
}

export default TimeBar