import teacherpic from "../../assets/images/teacher.svg";




import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from 'axios'


const GenerateQuiz = () => {
  const { register, handleSubmit } = useForm();
  const { jsondata, setJsondata } = useState([]);

  const onSubmit = (data) => {
    const { grade, subject, topic, part, num } = data;
    const quizgenerate = {
      grade: parseInt(grade),
      subject: subject,
      part: parseInt(part),
      topic: topic,
      num_question: parseInt(num)
    };
  
    console.log(data);
    console.log(quizgenerate);
  
    axios.post('https://linkquiz-1-u2330317.deta.app/create_response', quizgenerate)
      .then(response => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };


  return (
    <>
      <div className="bg-fixed min-h-screen  bg-violet-100 flex max-w-5xl mx-auto flex-col items-center ">
        {/* end of search */}
        <main className="flex w-full flex-col items-center  px-4 mt-8 sm:mt-12">
          <img
            className="hidden sm:visible max-w-[300px] sm:max-w-[500px]"
            src={teacherpic}
          />
          <h1 className="text-center sm:text-6xl text-2xl max-w-[708px] font-medium text-purple mb-8">
            สร้างแบบทดสอบแบบเลือกตอบ
          </h1>

          {/* react hook form */}

          <form onSubmit={handleSubmit(onSubmit)} className=" ">
            <div className="mb-3">
              <label htmlFor="grade">เลือกระดับชั้น:</label>
              <select {...register("grade")}className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2">
                <option value="1">ประถมศึกษาปีที่ 1</option>
                <option value="2">ประถมศึกษาปีที่ 2</option>
                <option value="3">ประถมศึกษาปีที่ 3</option>
                <option value="4">ประถมศึกษาปีที่ 4</option>
                <option value="5">ประถมศึกษาปีที่ 5</option>
                <option value="6">ประถมศึกษาปีที่ 6</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="subject">เลือกกลุ่มสาระ:</label>
              <select {...register("subject")} className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2">
                <option value="S">วิทยาศาสตร์</option>
                <option value="M">คณิตศาสตร์</option>
                <option value="E">ภาษาอังกฤษ</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="part">เลือกภาคเรียน:</label>
              <select {...register("part")} className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2">
                <option value="1">ภาคเรียนที่ 1</option>
                <option value="2">ภาคเรียนที่ 2</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="topic">เลือกหัวข้อ:</label>
              <select {...register("topic")} className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2">
                <option value="สิ่งต่างๆรอบตัว">สิ่งต่าง ๆ รอบตัว</option>
                <option value="สิ่งมีชีวิต">สิ่งมีชีวิต</option>
                <option value="แรงและพลังงาน">แรงและพลังงาน</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="num">เลือกจำนวนข้อ:</label>
              <select {...register("num")} className="w-full rounded-sm hover:ring-2 border-0 border-dimviolet px-4 py-2">
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
            <input type="submit" className="btn bg-dimviolet w-full cursor-pointer" />

          </form>

          


          {/* Topic2 */}

       
          {/* <Combobox2 /> */}

         
        </main>

       
      </div>
    </>
  );
};

export default GenerateQuiz;
