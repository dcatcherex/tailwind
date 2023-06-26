const IndicatorBar = ({ knowledge, process, attribute }) => {
  const total = knowledge + process + attribute;
  const knowledgeRate = (knowledge / total) * 100;
  const processRate = (process / total) * 100;
  const attributeRate = (attribute / total) * 100;

  return (
    <>
      <div className="flex w-full bg-slate-200 rounded-lg text-center text-sm items-center">
        <div
          className=" bg-lime-300 py-1"
          style={{ width: `${knowledgeRate}%` }}>(K) {knowledge} |  {knowledgeRate}%</div>
        
        
        <div
          className="bg-yellow-300 py-1"
          style={{ width: `${processRate}%` }}
        >(P) {process} | {processRate}%</div>
        <div
          className="bg-orange-300 py-1"
          style={{ width: `${attributeRate}%` }}
        >(A) {attribute} | {attributeRate}%</div>
      </div>
  
<div className="flex">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative left-[40%]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative left-[75%]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
  </svg>
</div>


      
    </>
  );
};

export default IndicatorBar;
