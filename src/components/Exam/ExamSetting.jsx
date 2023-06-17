import { Link } from "react-router-dom";

const ExamSetting = () => {
  const examTitle = "แบบทดสอบความสามารถด้านวิทยาศาสตร์";
  const academicYear = "ปีการศึกษา 2563";
  const gradeLevel = "ชั้นประถมศึกษาปีที่ 4";
  const timeselect = ["10 นาที", "30 นาที", "1 ชั่วโมง", "อื่น ๆ"];

  return (
    <div className="px-4 py-2 text-lg">
      <div className=" gap-x-4 flex justify-between items-center border-b-2 border-gray-300 pb-3">
        <h1 className="text-left font-medium text-xl text-darkviolet">
          {examTitle} {gradeLevel} {academicYear}
        </h1>

        <div>
          <div className="inline-flex gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
            <p>12</p>
          </div>
          <p className="text-white text-xs bg-darkviolet px-2 rounded-full text-center">
            Live
          </p>
        </div>
      </div>
      <p className="pt-4 text-gray-600">
        ให้นักเรียนเข้าร่วมแบบประเมินผลการเรียนรู้
      </p>
      <h3 className="inline-flex items-center mt-4 gap-x-2 text-darkviolet font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
        แชร์ลิงค์
      </h3>

      <div
        id="sharelink"
        className="flex justify-between mt-1 px-4 py-2 bg-white rounded-lg border-2 border-darkviolet tracking-wider"
      >
        <p>quizlink.com/join?gc=123456</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="purple"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      </div>
      <div className="font-sm flex items-center before:flex-1 before:content-[''] before:p-[1px] before:bg-gray-300 before:mr-2 after:flex-1 after:content-[''] after:p-[1px] after:bg-gray-300 after:ml-2 mt-4">
        <p>หรือ</p>
      </div>

      <h3 className="inline-flex items-center mt-1 gap-x-2 text-darkviolet font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
        แชร์ quiz code
      </h3>
      <p className="text-gray-600">ให้นักเรียนใส่ code ที่ quizlink.com </p>

      <div className="flex justify-between mt-1 px-4 py-2 bg-white rounded-lg border-2 border-darkviolet tracking-wider">
        <p>123456</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="purple"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      </div>

      <h3 className="inline-flex items-center mt-4 gap-x-2 text-darkviolet font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        ตั้งเวลา
      </h3>
      <div className="flex w-full rounded-lg border-2 border-darkviolet">
            
            {timeselect.map((t)=>(
            <button key={t}
              type="button"
              className="w-full items-center bg-white py-3 px-4 text-lg font-normal text-gray-700 ring-inset ring-1  ring-gray-100 hover:bg-gray-50 hover:ring-2 hover:ring-violet-500 focus:z-10 first:rounded-tl-lg first:rounded-bl-lg last:rounded-br-lg last:rounded-tr-lg "
            >
              {t}
            </button>
            ))}
        </div>
        <Link to={"/exammonitor"} className="inline-flex gap-x-2 justify-center mt-8 mb-8 btn text-lg w-full bg-dimviolet "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>
เริ่มสอบ</Link>
    </div>
  );
};

export default ExamSetting;
