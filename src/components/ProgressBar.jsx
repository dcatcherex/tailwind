const ProgressBar = ({ correct, incorrect, total }) => {
  const correctRate = (correct / total) * 100;
  const incorrectRate = (incorrect / total) * 100;
  const currentRate = correctRate + incorrectRate;

  return (
    <>
        <div className="flex justify-end text-xs text-gray-500">{currentRate}%</div>
      <div className="flex w-full h-[10px] bg-slate-200 rounded-lg">
        <div
          className="bg-gradient-to-r from-lime-300 to-lime-500 "
          style={{ width: `${correctRate}%` }}
        />
        <div
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-e-full"
          style={{ width: `${incorrectRate}%` }}
        />
      </div>
    </>
  );
};

export default ProgressBar;
