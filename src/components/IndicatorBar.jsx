const IndicatorBar = ({
  remembering,
  understanding,
  applying,
  analyzing,
  evaluating,
  creating,
}) => {
  const total =
    remembering + understanding + applying + analyzing + evaluating + creating;
  const rememberingRate = (remembering / total) * 100;
  const understandingRate = (understanding / total) * 100;
  const applyingRate = (applying / total) * 100;
  const analyzingRate = (analyzing / total) * 100;
  const evaluatingRate = (evaluating / total) * 100;
  const creatingRate = (creating / total) * 100;

  return (
    <>
      <div className="flex w-full bg-slate-200 rounded-lg text-center text-sm items-center">
        {rememberingRate > 0 ? (
          <div
            className=" bg-lime-300 py-1"
            style={{ width: `${rememberingRate}%` }}
          >
            (R) {remembering} | {rememberingRate}%
          </div>
        ) : (
          ""
        )}

        {understandingRate > 0 ? (
          <div
            className="bg-yellow-300 py-1"
            style={{ width: `${understandingRate}%` }}
          >
            (U) {understanding} | {understandingRate}%
          </div>
        ) : (
          ""
        )}

        {applyingRate > 0 ? (
          <div
            className="bg-orange-300 py-1"
            style={{ width: `${applyingRate}%` }}
          >
            (A) {applying} | {applyingRate}%
          </div>
        ) : (
          ""
        )}

        {analyzingRate > 0 ? (
          <div
            className=" bg-sky-300 py-1"
            style={{ width: `${analyzingRate}%` }}
          >
            (A2) {analyzing} | {analyzingRate}%
          </div>
        ) : (
          ""
        )}
        {evaluatingRate > 0 ? (
          <div
            className="bg-rose-300 py-1"
            style={{ width: `${evaluatingRate}%` }}
          >
            (E) {evaluating} | {evaluatingRate}%
          </div>
        ) : (
          ""
        )}
        {creatingRate > 0 ? (
          <div
            className="bg-indigo-300 py-1"
            style={{ width: `${creatingRate}%` }}
          >
            (C) {creating} | {creatingRate}%
          </div>
        ) : (
          ""
        )}
      </div>

      {/* <div className="flex">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative left-[30%]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative left-[50%]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative left-[70%]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative left-[80%]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative left-[90%]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
  </svg>
</div> */}
    </>
  );
};

export default IndicatorBar;
