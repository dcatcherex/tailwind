import { Bars3Icon } from "@heroicons/react/20/solid";
import logo from "../assets/images/logo.png";
import students from "../assets/images/icons/students.svg"
import { Link } from "react-router-dom";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { BeakerIcon } from "@heroicons/react/24/outline";



const TopMenuBar = () => {
  return (
    <div className="bg-white">
        <header className="max-w-[1280px] mx-auto top-0 bg-white flex justify-between items-center w-full pb-3 py-2 sm:px-4 px-4">
          <div className="  flex gap-x-4 items-center sm:text-4xl text-2xl max-w-[708px] font-bold text-slate-800">
            <button>
              <Bars3Icon className="w-6 h-6 text-purple" />
            </button>
            <img src={logo} />
          </div>

          <div className=" flex justify-end gap-2 items-center">
            <Link to={"takeexam"} className="inline-flex min-w-[100px] bg-purple rounded-full flex gap-x-1 items-center px-4 py-2 text-white font-light hover:ring-2 ring-offset-2 hover:bg-violet-300 ring-violet-500">
              <ArchiveBoxIcon className="w-5 h-5" />
              Demo
            </Link>
            <Link to={"takeexam"} className="inline-flex gap-x-1 border-l-2 pl-2  items-center min-w-[100px] text-purple font-medium  hover:border-b-2 hover:border-b-purple">
            <BeakerIcon className="w-5 h-5" />
              จัดสอบ
            </Link>
          </div>
        </header>
    </div>
  )
}

export default TopMenuBar