const ProgressBar = ({ correct, incorrect, total }) => {
  const correctRate = (correct / total) * 100;
  const incorrectRate = (incorrect / total) * 100;
  const currentRate = correctRate + incorrectRate;

  return (
    <>
        {/* <div className="flex justify-end text-xs text-gray-500">{currentRate}%</div> */}
      <div className="flex h-[10px] bg-slate-300 rounded-lg">
        <div
          className=" bg-lime-500 rounded-s-full "
          style={{ width: `${correctRate}%` }}
        />
        <div
          className=" bg-red-500 rounded-e-full"
          style={{ width: `${incorrectRate}%` }}
        />
      </div>
    </>
  );
};

export default ProgressBar;
