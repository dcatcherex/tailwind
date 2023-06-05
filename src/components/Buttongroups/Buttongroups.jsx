

export default function Buttongroups({text}) {
    return (
        <>
      {/* <span className=" flex rounded-md shadow-sm"> */}
        <div className="flex w-full">
            
            {text.map((t)=>(
            <button key={t}
              type="button"
              className="w-full items-center bg-white py-3 px-4 text-lg font-normal text-gray-700 ring-inset ring-1  ring-gray-100 hover:bg-gray-50 hover:ring-2 hover:ring-violet-500 focus:z-10"
            >
              {t}
            </button>
            ))}
        </div>
        
      {/* </span> */}
      </>
    )
  }
  