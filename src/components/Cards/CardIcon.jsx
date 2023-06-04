import exam from "../../assets/exam.svg"

const CardIcon = () => {
  return (
    <div className=" flex flex-row  items-center justify-center gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
      <img className="w-6 h-6" src={exam} />
      <div>
        <h2 className="text-lg font-semibold text-purple">Instagram Caption</h2>
        <p className="text-base font-body text-gray-500 mt-1">
          สร้างเนื้อหาสำหรับ Instagram Caption
        </p>
      </div>
    </div>
  );
};

export default CardIcon;
