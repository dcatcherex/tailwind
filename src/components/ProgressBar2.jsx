const ProgressBar2 = ({ progress, total, progress_color = "bg-lime-300",total_color = "bg-slate-300" }) => {
  const progressRate = (progress / total) * 100;

  return (
    <>
      <div className={`flex h-[10px] ${total_color} rounded-lg`}>
        <div
          className={`${progress_color}  rounded-full`} style={{ width: `${progressRate}%` }}
        />
        
      </div>
    </>
  );
};

export default ProgressBar2;
