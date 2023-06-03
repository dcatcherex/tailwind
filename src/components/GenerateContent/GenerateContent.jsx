


const GenerateContent = () => {
  return (
    <>
      <div className="bg-fixed  bg-violet-100 flex max-w-5xl mx-auto flex-col items-center justify-center ">
        <header className="bg-white flex justify-between items-center w-full border-b-2 pb-3 py-2 sm:px-4 px-4">
          <h1 className="sm:text-4xl text-2xl max-w-[708px] font-bold text-slate-800">
            <img src="../src/assets/images/logo.png" />
          </h1>
          <h1>dfsdfs</h1>
        </header>
        <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-8 sm:mt-12">
          <img
            className="max-w-[300px] sm:max-w-[500px]"
            src="../src/assets/images/teacher.svg"
          />
          <h1 className="sm:text-6xl text-4xl max-w-[708px] font-semibold text-purple">
            สร้างเนื้อหาทางการศึกษาด้วย AI
          </h1>
          <p className="text-slate-500 mt-5 font-light">
            สร้างเนื้อหาต่าง ๆ ไปแล้ว 0 ครั้ง
          </p>
          <div className="flex flex-1 w-full flex-row mt-10 space-x-3">
            <img
              alt="1 icon"
              src="../src/assets/images/circle1.png"
              className="w-6 h-6"
            />
            <p className=" font-medium text-left tracking-wide">
              ใส่เนื้อหาที่ต้องการลงไป{" "}
              <span className="text-slate-500 font-normal">
                (หรืออัพโหลดไฟล์เนื้อหาที่ต้องการ)
              </span>
            </p>
          </div>
          <textarea
            rows="4"
            className="font-body w-full rounded-md border-gray-300 focus:ring-dimviolet focus:ring-2 my-5 px-4 py-2"
            placeholder="ส่วนประกอบสำคัญของตามนุษย์ มีรายละเอียดดังนี้
            1. กระจกตา (Cornea) เป็นเนื้อเยื่อโปร่งใส อยู่ด้านหน้าสุดของนัยน์ตา กระจกตาทำหน้าที่รับและให้แสงผ่านเข้าสู่ภายใน
            2. ม่านตา (Iris) ทำหน้าที่ควบคุมการขยายของรูม่านตา เพื่อให้ปริมาณแสงที่ผ่านเข้าไปสู่เลนส์ตาอยู่ในระดับพอเหมาะ
            3. รูม่านตา (Pupil) เป็นสีดำอยู่ตรงกลางม่านตา ทำหน้าที่เป็นช่องทำให้แสงผ่านไปสู่เลนส์ตา
            4. เลนส์ตา (Lens) เป็นเลนส์นูนที่สามารถยืดหยุ่นได้ ตามการหดตัวและคลายตัวของกล้ามเนื้อยึดเลนส์ตา เลนส์ตาทำหน้าที่โฟกัสภาพให้ไปตกบนจอรับภาพ
            5. จอรับภาพหรือจอประสาทตา (Retina) เป็นอวัยวะที่ทำหน้าที่รับภาพคล้ายกับเซ็นเซอร์รับภาพในกล้องถ่ายรูปดิจิทัล เป็นชั้นที่อยู่ภายในสุดของตา"
          ></textarea>
          <div className="flex w-full items-center">
            <div className="flex-auto h-[2px] bg-dimviolet"></div>
          <p className="text-md  text-dimviolet px-2"> หรือ </p>
            <div className="flex-auto h-[2px] bg-dimviolet"></div>
          </div>
          <div className="w-full mt-2">
            <label
              htmlFor="company-website"
              className="block text-left  font-medium leading-6 text-gray-900"
            >
              ใช้เนื้อหาจากเว็บไซต์
            </label>
            <div className=" mt-2 flex rounded-md">
              {/* <span className="inline-flex items-center rounded-l-md border-2 border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                https://
              </span> */}
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="font-body block w-full min-w-0 flex-1 rounded-md border-0 border-gray-300 px-2 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-dimviolet focus:ring-2 sm:text-sm sm:leading-6"
                placeholder="www.example.com"
              />
            </div>
          </div>

          {/* Topic2 */}

          <div className="flex flex-1 w-full flex-row mt-12 space-x-3">
            <img
              alt="2 icon"
              src="../src/assets/images/circle2.png"
              className="w-6 h-6"
            />
            <p className=" font-medium text-left tracking-wide">
              เลือกจำนวนข้อที่ต้องการ{" "}
            </p>
          </div>
          <input
            className="w-full bg-red-600 mt-4"
            type="range"
            overflow="hidden"
            min="0"
            max="100"
            step={10}
            list="markers"
          />
          <datalist
            className="w-full ml-3 flex  justify-between font-light text-xs text-slate-400"
            id="markers"
          >
            <option value="0" label="0"></option>
            <option value="10" label="10"></option>
            <option value="20" label="20"></option>
            <option value="30" label="30"></option>
            <option value="40" label="40"></option>
            <option value="50" label="50"></option>
            <option value="60" label="60"></option>
            <option value="70" label="70"></option>
            <option value="80" label="80"></option>
            <option value="90" label="90"></option>
            <option value="100" label="100"></option>
          </datalist>
          <button className=" w-full justify-center inline-flex gap-x-1.5 items-center px-4 py-2 bg-dimviolet hover:bg-violet-300 rounded-md text-white font-light tracking-wide mt-8">
            <img
              className="w-5 h-5 stroke-white"
              src="../src/assets/images/examwhite.svg"
            />
            สร้างข้อสอบ
          </button>
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
          <div>
            Created by <p className="font-bold">Jone & Kiw</p>
          </div>
        </footer>
        <div className="fixed w-full bottom-0 box-border flex flex-1 flex-row items-center justify-between border-t-4 border-violet-200 divide-x divide-violet-200">
          <a
            className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-2 bg-purple hover:bg-slate-500 flex-1 text-white font-light"
            href=""
          ><img className="w-4 h-4" src="../src/assets/images/apps.svg"/>
            รวมสื่อ
          </a>
          <a
            className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-2 bg-purple hover:bg-slate-500 flex-1 text-white font-light "
            href=""
          ><img className="w-5 h-5" src="../src/assets/images/examwhite.svg"/>
            สร้าง
          </a>
          <a
            className="inline-flex items-center justify-center gap-x-2 text-center px-3 py-2 bg-purple hover:bg-slate-500 flex-1 text-white font-light"
            href=""
          ><img className="w-5 h-5" src="../src/assets/images/students.svg"/>
            จัดสอบ
          </a>
        </div>
      </div>
    </>
  );
};

export default GenerateContent;
