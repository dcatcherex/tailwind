import { Bars3Icon } from "@heroicons/react/20/solid";
import logo from "../assets/images/logo.png";
import students from "../assets/images/icons/students.svg"
import { Link } from "react-router-dom";



const TopMenuBar = () => {
  return (
    <div>
        <header className="fixed w-full top-0 bg-white flex justify-between items-center w-full border-b-2 pb-3 py-2 sm:px-4 px-4">
          <div className=" flex gap-x-4 items-center sm:text-4xl text-2xl max-w-[708px] font-bold text-slate-800">
            <button>
              <Bars3Icon className="w-6 h-6 text-purple" />
            </button>
            <img src={logo} />
          </div>

          <div className="flex justify-end gap-2 items-center">
            <Link to={"takeexam"} className="min-w-[100px] bg-purple rounded-full flex gap-x-1 items-center px-4 py-2 text-white font-light hover:ring-2 ring-offset-2 hover:bg-violet-300 ring-violet-500">
              <img className="w-5 h-5" src={students} />
              จัดสอบ
            </Link>
          </div>
        </header>
    </div>
  )
}

export default TopMenuBar