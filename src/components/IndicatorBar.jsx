const IndicatorBar = ({ knowledge, process, attribute }) => {
  const total = knowledge + process + attribute;
  const knowledgeRate = (knowledge / total) * 100;
  const processRate = (process / total) * 100;
  const attributeRate = (attribute / total) * 100;

  return (
    <>
      <div className="flex justify-end text-xs text-gray-500"></div>
      <div className="flex w-full h-[20px] bg-slate-200 rounded-lg text-center text-xs ">
        <div
          className=" bg-lime-300"
          style={{ width: `${knowledgeRate}%` }}>ความรู้ (K) {knowledgeRate}%</div>
        
        
        <div
          className="bg-yellow-300"
          style={{ width: `${processRate}%` }}
        >ทักษะกระบวนการ (P) {processRate}%</div>
        <div
          className="bg-orange-300"
          style={{ width: `${attributeRate}%` }}
        >คุณลักษณะ (A) {attributeRate}%</div>
      </div>
    </>
  );
};

export default IndicatorBar;
