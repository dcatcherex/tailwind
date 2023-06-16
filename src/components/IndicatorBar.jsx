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
          style={{ width: `${knowledgeRate}%` }}>(K) {knowledgeRate}%</div>
        
        
        <div
          className="bg-yellow-300 py-1"
          style={{ width: `${processRate}%` }}
        >(P) {processRate}%</div>
        <div
          className="bg-orange-300 py-1"
          style={{ width: `${attributeRate}%` }}
        >(A) {attributeRate}%</div>
      </div>
    </>
  );
};

export default IndicatorBar;
