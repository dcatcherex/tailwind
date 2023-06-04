import view from '../../assets/images/view.svg'
import link from '../../assets/images/link.svg'
import exam from '../../assets/images/exam.svg'
import quiz from '../../assets/images/quiz.png'

const questionTypes = [
  {
  id: 1,
  type: "แบบเลือกตอบ (multiple choice)",
  good: "วัดพฤติกรรมพุทธิพิสัยได้ครบทั้ง 6 ขั้น ตรวจง่าย เขียนข้อสอบได้คลุมเนื้อหา",
  bad: "สร้างยากโดยเฉพาะคำถามที่วัดพฤติกรรมขั้นสูง ใช้เวลาในการเขียนข้อสอบนาน วัดการแสดงวิธีทำ ทักษะการเขียน การวิพากษ์วิจารณ์ การอภิปรายแสดงความคิดเห็นไม่ได้"
},{
  id: 2,
  type: "แบบถูก-ผิด (true/false)",
  good: "สร้างง่ายและรวดเร็ว เขียนคำถามได้คลอบคลุมเนื้อหา ใช้วัดความจำได้ดี ตรวจง่ายและรวดเร็ว มีความเป็นปรนัยในการตรวจ",
  bad: "วัดพฤติกรรมพุทธิพิสัยขั้นสูงไม่ได้ เดาถูกได้มากกว่าข้อสอบแบบอื่นๆ ไม่สามารถใช้วินิจฉัยข้อบกพร่องทางการเรียนได้"
},{
  id: 3,
  type: "แบบเติมคำ (completion)",
  good: "สร้างง่ายและรวดเร็ว เขียนคำถามให้คลอบคลุมเนื้อหาได้ ใช้วัดความจำได้ดี เดาคำตอบได้ถูกยากกว่าข้อสอบปรนัยอื่นๆ",
  bad: "วัดพฤติกรรมสูงกว่าความจำไม่ได้ ตรวจยาก"
},{
  id: 4,
  type: "แบบจับคู่ (matching)",
  good: "ใช้วัดความจำเกี่ยวกับข้อเท็จจริงระหว่างสิ่งที่มีความสัมพันธ์กันได้ดี สร้างง่าย ตรวจง่ายและรวดเร็ว เดาคำตอบได้น้อยกว่าข้อสอบแบบถูกผิด การให้คะแนนเป็นปรนัย",
  bad: "วัดพฤติกรรมสูงกว่าความจำได้ยาก นักเรียนอาจเดาข้อหลังได้เนื่องจากเหลือตัวเลือกให้เลือกน้อยลง ถ้าคำชี้แจงไม่ชัดเจนอาจทำให้นักเรียนไม่เข้าใจวิธีการตอบ"
},{
  id: 5,
  type: "แบบเขียนตอบ (Essay Test)",
  good: "เดาไม่ได้ วัดการแสดงวิธีทำ ทักษะการเขียน การวิพากษ์วิจารณ์ การอภิปรายแสดงความคิดเห็น การแสดงเหตุผล การวิพากษ์วิจารณ์ ได้ดี",
  bad: "ตรวจยากมาก ใช้เวลาในการตรวจนาน ไม่สามารถออกข้อสอบหลายข้อได้"
},{
  id: 6,
  type: "แบบผสม (Mix)",
  good: "วัดพฤติกรรมพุทธิพิสัยได้ครบทั้ง 6 ขั้น สร้างความหลากหลาย",
  bad: "",
}
]

const TemplateSet = () => {
  return (
    <div>
        <main className=" bg-violet-100 grid grid-cols-2 gap-4 pt-4 mt-4 px-4">
          
        
          <div className="flex flex-col gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
            <div>
              
              <h2 className="text-lg font-semibold text-purple">
                เขียนแผนการสอน
              </h2>
              <p className="text-sm font-body text-gray-500 mt-1">
                กำหนดชั้น สิ่งที่อยากให้เรียนรู้ ให้ AI ช่วยออกแบบให้
              </p>
            </div>
            <div className="flex flex-row justify-between gap-x-2 mt-3">
              <div className="flex gap-x-2 items-center">
                <img className="w-3 h-3" src={view} />
                <p className="text-xs font-light text-gray-400">129</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <buttn className="hover:bg-slate-500">
                  <img className="w-3 h-3" src={link} />
                </buttn>
              </div>
            </div>
          </div>
          

          <div className="flex flex-col gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
            <div>
              <h2 className="text-lg font-semibold text-purple">
                เขียนแผนการสอน
              </h2>
              <p className="text-sm font-body text-gray-500 mt-1">
                กำหนดชั้น สิ่งที่อยากให้เรียนรู้ ให้ AI ช่วยออกแบบให้
              </p>
            </div>
            <div className="flex flex-row justify-between gap-x-2 mt-3">
              <div className="flex gap-x-2 items-center">
                <img className="w-3 h-3" src={view} />
                <p className="text-xs font-light text-gray-400">129</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <buttn className="hover:bg-slate-500">
                  <img className="w-3 h-3" src={link} />
                </buttn>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-x-2 px-2 py-1  bg-white rounded-md shadow-md hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
            <div>
              <h2 className="text-lg font-semibold text-purple">
                สรุปรายงานการประชุม
              </h2>
              <p className="text-sm font-body text-gray-500 mt-1">
                ใส่เนื้อหาให้ AI ช่วยสรุปการประชุมให้
              </p>
            </div>
            <div className="flex flex-row justify-between gap-x-2 mt-3">
              <div className="flex gap-x-2 items-center">
                <img className="w-3 h-3" src={view} />
                <p className="text-xs font-light text-gray-400">129</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <buttn className="hover:bg-slate-500">
                  <img className="w-3 h-3" src={link} />
                </buttn>
              </div>
            </div>
          </div>
          
        </main>
        

        <div className="bg-violet-100 pt-4">
        {questionTypes.map ((type) => (
            <div key={type.id} className=" flex bg-white w-[100%-100px] mx-4 mt-2 rounded-md border-2 shadow-sm">
                <img className="w-[100px] h-[100px] rounded-l-md border-r-2" src={quiz} />

                <div className="pt-2 px-2">
                  <h2 className="text-lg font-medium">{type.type}</h2>
                  <p className="text-base font-body font-light text-gray-400 mt-1 s">{type.good}</p>
                </div>
            </div>
            ))}

            <div className=" flex bg-white w-[100%-100px] h-[100px] mx-4 mt-2 rounded-md border-2 shadow-sm">
                <img className="w-[100px] h-[100px] rounded-l-md border-r-2" src={quiz} />

                <div className="pt-2 px-2">
                  <h2 className="text-lg font-medium">ปรนัยแบบถูกผิด (true-false)</h2>
                  <p className="text-base font-body font-light text-gray-400 mt-1 s">วัดพฤติกรรมพุทธิพิสัยได้ครบทั้ง 6 ขั้น ตรวจง่าย เขียนข้อสอบได้คลุมเนื้อหา</p>
                </div>
            </div>
            
        </div>

    </div>
  );
};

export default TemplateSet;
