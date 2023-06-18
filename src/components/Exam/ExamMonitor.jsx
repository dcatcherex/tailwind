import { useState, useEffect } from "react";
import QuizTimer from "../../components/Exam/QuizTimer";
import ProgressBar from "../ProgressBar";
import avatar1 from "../../assets/images/avatars/avatar1.png";
import avatar2 from "../../assets/images/avatars/avatar2.png";
import avatar3 from "../../assets/images/avatars/avatar3.png";
import avatar4 from "../../assets/images/avatars/avatar4.png";
import avatar5 from "../../assets/images/avatars/avatar5.png";
import avatar6 from "../../assets/images/avatars/avatar6.png";


const avatarMap = {
  avatar1: avatar1,
  avatar2: avatar2,
  avatar3: avatar3,
  avatar4: avatar4,
  avatar5: avatar5,
  avatar6: avatar6,
};

import studentScoreData from "../../assets/datas/studentscoredata.json";

const ExamMonitor = () => {
  const examTitle = "แบบทดสอบความสามารถด้านวิทยาศาสตร์";
  const academicYear = "ปีการศึกษา 2563";
  const gradeLevel = "ชั้นประถมศึกษาปีที่ 4";

  const averageScore = 11;
  const difficultExam = ["8", "15"];

  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); // 1 hour
  const [isFinished, setIsFinished] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  useEffect(() => {
    let timer = null;

    if (!isPaused && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

    if (timeLeft === 0 && !timeExpired) {
      handleTimeUp();
      setTimeExpired(true);
    }

    return () => clearTimeout(timer);
  }, [isPaused, timeLeft]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleAddTime = (additionalTime) => {
    setTimeLeft(timeLeft + additionalTime);
  };

  const handleTimeUp = () => {
    // Perform actions when the time is up
    // e.g., submit the quiz, show the results, etc.
    // setIsFinished(!isFinished)
    console.log("Time is up!");
  };

  return (
    <div>
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
          เวลาที่เหลือ
        </h3>
        <h1
          id="timer"
          className="text-gray-500 text-6xl font-medium tracking-wider text-center"
        >
          <QuizTimer totalTime={30} onTimeUp={handleTimeUp} />

        </h1>
        <button className={`${isFinished ? "block" : "hidden"} btn bg-dimviolet w-full text-xl`}>สรุปผล</button>

        <div className={`${isFinished ? "hidden" : "block"} grid grid-cols-4`}>
          <button className=" btn bg-orange-500 none">ยกเลิก</button>
          <button className="btn bg-dimviolet">-5 นาที</button>
          <button
            onClick={() => handleAddTime(60)}
            className="btn bg-dimviolet"
          >
            +5 นาที
          </button>
          <button className="btn bg-dimviolet">หยุด/ต่อ</button>
        </div>
        <div className="flex justify-between  items-end gap-x-2 mt-6">
          <div className="w-full">
            นักเรียนที่ทำแบบประเมินผลเสร็จแล้ว
            <ProgressBar correct={7} incorrect={0} total={12} />
          </div>
          <p className=" -mb-3">7/12</p>
        </div>
        <div className="flex justify-between border-2 border-slate-400 rounded-lg px-4 py-2 mb-8 mt-4">
          <div>
            คะแนนเฉลี่ย:{" "}
            <span className="text-2xl font-semibold text-darkviolet -mb-">
              {averageScore}
            </span>
          </div>
          <div className="flex">
            <p>
              ข้อที่ใช้เวลานาน:{" "}
              <span className="text-2xl font-semibold text-darkviolet -mb-">
                8, 15
              </span>
            </p>
            {/* {difficultExam.map((difficult) => (
              <p key={difficult}>{difficult}</p>
            ))} */}
          </div>
        </div>
        {studentScoreData.map(
          ({ id, name, avatar, correct, incorrect, total }) => (
            <div key={id} className=" flex gap-x-4 items-baseline">
              <div className=" w-full">
                <div className="flex gap-x-2 items-baseline">
                  <img
                    src={avatarMap[avatar]}
                    alt="avatar1"
                    className="w-10 h-10"
                  />
                  <div>{name}</div>
                </div>
                <ProgressBar
                  correct={correct}
                  incorrect={incorrect}
                  total={total}
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-darkviolet -mb-2">
                  {correct}
                </h3>
                <p className="text-slate-500 ">{correct + incorrect}/20</p>
              </div>
            </div>
          )
        )}
        <div className=" flex gap-x-4 items-baseline">
          <div className=" w-full">
            <div className="flex gap-x-2 items-baseline">
              <img src={avatar1} alt="avatar1" className="w-10 h-10" />
              <div>เก่งกล้า ชำนาญเดจ</div>
            </div>
            <ProgressBar correct={14} incorrect={2} total={20} />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-darkviolet -mb-2">12</h3>
            <p className="text-slate-500 ">14/20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamMonitor;
