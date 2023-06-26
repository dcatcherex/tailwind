import apps from "../assets/images/apps.svg";
import examwhite from "../assets/images/examwhite.svg";
import bot from "../assets/images/icons/bot.svg";
import { Link } from "react-router-dom";

// import { useState } from "react";

const BottomMenuBar = () => {
  return (
    <div>
      <div className="w-full bottom-0 box-border flex flex-1 flex-row items-center justify-between border-t-4 border-violet-200 divide-x divide-violet-200">
        <Link to={"examportal"}
          className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-4 bg-purple hover:bg-slate-500 flex-1 text-white font-light"
          href=""
        >
          <img className="w-4 h-4" src={apps} />
          แบบทดสอบ
        </Link>
        <Link to={"examtype"}
          className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-4 bg-purple hover:bg-slate-500 flex-1 text-white font-light "
          href=""
        >
          <img className="w-5 h-5" src={examwhite} />
          สร้าง
        </Link>
        <Link to={"template"}
          className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-4 bg-purple hover:bg-slate-500 flex-1 text-white font-light"
          href=""
        >
          <img className="fill-current text-green-600 w-6 h-6" src={bot} />
          เพื่อนครู AI
        </Link>
      </div>
    </div>
  );
};

export default BottomMenuBar;
