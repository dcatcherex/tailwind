import teacherpic from "../../assets/images/teacher.svg";
import logo from "../../assets/images/logo.png";
import circle1 from "../../assets/images/circle1.png";
import circle2 from "../../assets/images/circle2.png";
import circle3 from "../../assets/images/circle3.png";

import apps from "../../assets/images/apps.svg";
import students from "../../assets/images/icons/students.svg";
import bot from "../../assets/images/icons/bot.svg";
import examwhite from "../../assets/images/examwhite.svg";

import SelectBox from "../Selectbox/Selectbox";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Buttongroups from "../Buttongroups/Buttongroups";
import TabsIcons from "../Tabs/Tabsicons";

const buttontexts = ["1 ข้อ", "5 ข้อ", "10 ข้อ", "20  ข้อ"];
const levels = [
  "ประถมศึกษาปีที่ 1",
  "ประถมศึกษาปีที่ 2",
  "ประถมศึกษาปีที่ 3",
  "ประถมศึกษาปีที่ 4",
  "ประถมศึกษาปีที่ 5",
  "ประถมศึกษาปีที่ 6",
  "มัธยมศึกษาปีที่ 1",
  "มัธยมศึกษาปีที่ 2",
  "มัธยมศึกษาปีที่ 3",
];

const subjects = [
  "ภาษาไทย",
  "คณิตศาสตร์",
  "เทคโนโลยี",
  "วิทยาศาสตร์",
  "ศาสนาและวัฒนธรรม",
  "สุขศึกษาและพลศึกษา",
  "ทัศนศิลป์",
  "ดนตรีและนาฏศิลป์",
  "การงานอาชีพ",
  "ภาษาต่างประเทศ",
];

const GenerateContent = () => {
  return (
    <>
      <div className="bg-fixed min-h-screen  bg-violet-100 flex max-w-5xl mx-auto flex-col items-center ">
        <header className="bg-white flex justify-between items-center w-full border-b-2 pb-3 py-2 sm:px-4 px-4">
          <div className=" flex gap-x-4 items-center sm:text-4xl text-2xl max-w-[708px] font-bold text-slate-800">
            <button>
              <Bars3Icon className="w-6 h-6 text-purple" />
            </button>
            <img src={logo} />
          </div>

          <div className="flex justify-end gap-2 items-center">
            <button className="min-w-[100px] bg-purple rounded-full flex gap-x-1 items-center px-4 py-2 text-white font-light hover:ring-2 ring-offset-2 hover:bg-violet-300 ring-violet-500">
              <img className="w-5 h-5" src={students} />
              จัดสอบ
            </button>
          </div>
        </header>
        {/* end of search */}
        <main className="flex w-full flex-col items-center  px-4 mt-8 sm:mt-12">
          <img
            className="hidden sm:visible max-w-[300px] sm:max-w-[500px]"
            src={teacherpic}
          />
          <h1 className="text-center sm:text-6xl text-4xl max-w-[708px] font-medium text-purple mb-8">
            สร้างแบบทดสอบแบบเลือกตอบ
          </h1>
          

            <TabsIcons />

          <div className="flex flex-1 w-full flex-row mt-6 mb-2 space-x-3">
            <img alt="1 icon" src={circle1} className="w-6 h-6" />
            <p className=" text-lg font-medium text-left tracking-wide">
              เลือกระดับชั้น
            </p>
          </div>

          <SelectBox choice={levels} />

          {/* Topic2 */}

          <div className="flex flex-1 w-full flex-row mt-6 mb-2 space-x-3">
            <img alt="2 icon" src={circle2} className="w-6 h-6" />
            <p className=" text-lg font-medium text-left tracking-wide">
              เลือกกลุ่มสาระ
            </p>
          </div>
          <SelectBox choice={subjects} />

          <div className="flex flex-1 w-full flex-row mt-6 mb-2 space-x-3">
            <img alt="2 icon" src={circle3} className="w-6 h-6" />
            <p className=" text-lg font-medium text-left tracking-wide">
              เลือกจำนวนข้อ
            </p>
          </div>
          {/* <Combobox2 /> */}
          <Buttongroups text={buttontexts} />

          <button className=" text-lg w-full justify-center inline-flex gap-x-1.5 items-center px-4 py-4 bg-dimviolet hover:bg-violet-300 rounded-md text-white font-light tracking-wide mt-8">
            <img className="w-5 h-5 stroke-white" src={examwhite} />
            สร้างข้อสอบ
          </button>
          <p className="text-sm text-slate-500 mt-2 font-light ">
            สร้างเนื้อหาต่าง ๆ ไปแล้ว 0 ครั้ง
          </p>
        </main>

        <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
          <div className="font-light text-slate-500">
            Powered by
            <a
              href="https://openai.com/blog/chatgpt"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:underline transition underline-offset-2"
            >
              {" "}
              ChatGPT API{" "}
            </a>
          </div>
          {/* <div className="">
            Created by <p className="font-bold">Jone & Kiw</p>
          </div> */}
        </footer>
        <div className="fixed w-full bottom-0 box-border flex flex-1 flex-row items-center justify-between border-t-4 border-violet-200 divide-x divide-violet-200">
          <a
            className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-4 bg-purple hover:bg-slate-500 flex-1 text-white font-light"
            href=""
          >
            <img className="w-4 h-4" src={apps} />
            รวมสื่อ
          </a>
          <a
            className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-4 bg-purple hover:bg-slate-500 flex-1 text-white font-light "
            href=""
          >
            <img className="w-5 h-5" src={examwhite} />
            สร้าง
          </a>
          <a
            className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-4 bg-purple hover:bg-slate-500 flex-1 text-white font-light"
            href=""
          >
            <img className="fill-current text-green-600 w-6 h-6" src={bot} />
            เพื่อนครู AI
          </a>
        </div>
      </div>
    </>
  );
};

export default GenerateContent;
