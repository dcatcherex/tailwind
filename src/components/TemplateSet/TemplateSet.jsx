const TemplateSet = () => {
  return (
    <div>
        <main className="bg-violet-500 grid grid-cols-2 gap-4 pt-4 mt-4 px-4">
          <div className=" flex flex-row  items-center justify-center gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
            <img className="w-6 h-6" src="../src/assets/images/exam.svg" />
            <div>
              <h2 className="text-base font-semibold text-purple">
                Instagram Caption
              </h2>
              <p className="text-xs font-body text-gray-500 mt-1">
                สร้างเนื้อหาสำหรับ Instagram Caption
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
            <div>
              <h2 className="text-base font-semibold text-purple">
                Instagram Caption
              </h2>
              <p className="text-xs font-body text-gray-500 mt-1">
                สร้างเนื้อหาสำหรับ Instagram Caption
              </p>
            </div>
            <div className="flex flex-row justify-between gap-x-2 mt-3">
              <div className="flex gap-x-2 items-center">
                <img className="w-3 h-3" src="../src/assets/images/view.svg" />
                <p className="text-xs font-light text-gray-400">129</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <buttn className="hover:bg-slate-500">
                  <img className="w-3 h-3" src="../src/assets/images/link.svg" />
                </buttn>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
            <div>
              <h2 className="text-base font-semibold text-purple">
                Instagram Caption
              </h2>
              <p className="text-xs font-body text-gray-500 mt-1">
                สร้างเนื้อหาสำหรับ Instagram Caption
              </p>
            </div>
            <div className="flex flex-row justify-between gap-x-2 mt-3">
              <div className="flex gap-x-2 items-center">
                <img className="w-3 h-3" src="../src/assets/images/view.svg" />
                <p className="text-xs font-light text-gray-400">129</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <buttn className="hover:bg-slate-500">
                  <img className="w-3 h-3" src="../src/assets/images/link.svg" />
                </buttn>
              </div>
            </div>
          </div>
          
        </main>
        

        <div className="bg-violet-100 pt-4">
            
            <div className=" flex bg-white w-[100%-100px] h-[100px] mx-4 mt-2 rounded-md border-2 shadow-sm">
                <img className="w-[100px] h-[100px] rounded-l-md border-r-2" src="../src/assets/images/quiz.png" />

                <div className="pt-2 px-2">
                  <h2 className="text-base font-medium">Quiz</h2>
                  <p className="text-sm font-body font-light text-gray-400 mt-1 s">A series of multiple choice questions. Tap the correct answer to earn points</p>
                </div>
            </div>
            <div className=" flex bg-white w-[100%-100px] h-[100px] mx-4 mt-2 rounded-md border-2">
                <img className="w-[100px] h-[100px] rounded-l-md border-r-2" src="../src/assets/images/quiz.png" />
                <div className="pt-2 px-2">
                  <h2 className="text-base font-medium">Match up</h2>
                  <p className="text-sm font-body font-light text-gray-400 mt-1">Drag and drop the correct answer to earn points</p>
                </div>
            </div>
            <div className=" flex bg-white w-[100%-100px] h-[100px] mx-4 mt-2 rounded-md border-2">
                <img className="w-[100px] h-[100px] rounded-l-md border-r-2" src="../src/assets/images/quiz.png" />
                <div className="pt-2 px-2">
                  <h2 className="text-base font-medium">Quiz</h2>
                  <p className="text-sm font-body font-light text-gray-400 mt-1">A series of multiple choice questions. Tap the correct answer to earn points</p>
                </div>
            </div>
        </div>

    </div>
  );
};

export default TemplateSet;
