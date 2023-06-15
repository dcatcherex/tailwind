import data from "../../assets/datas/samplequestions.json";

const ExamList = () => {
    const examTitle = "แบบทดสอบความสามารถด้านวิทยาศาสตร์";
    const academicYear = "ปีการศึกษา 2563";
    const gradeLevel = "ชั้นประถมศึกษาปีที่ 4";

  return (
    <div>
      {/* head */}
      <div className="mb-10">
        <h1 className="text-center font-medium text-2xl text-slate-700">
          {examTitle} {gradeLevel} {academicYear} 
        </h1>
      </div>

      <div className="text-lg grid grid-cols-1 px-6 sm:grid-cols-2  lg:grid-cols-3">
        {/* ข้อสอบ */}

        {data.map(({ id, question, options, answer }) => (
          <div key={id} className="font-body font-medium mb-6 w-[300px]">
            <h3 className=" font-medium list-decimal">
              {id}. 
              {question}
            </h3>
            <ol className="list-decimal my-2 pl-8">
                {options.map((option)=>(
                    <li key={option} className="font-light py-0.5 ">
                    <span className={`px-1 ${option === answer ? 'border-green-500 border-b-2' : ''}`}>{option}
                        
                    </span></li>
                ))}
            </ol>
          </div>
        ))}

       
      </div>
      <div className="flex w-full justify-end  border-t-2 border-slate-200 mb-6 pt-6 text-light">
        <p className="font-light text-slate-500">
        {examTitle} {gradeLevel} {academicYear}
        </p>
        <div className="bg-red-500 flex-auto h-[1px]"></div>
      </div>
    </div>
  );
};

export default ExamList;