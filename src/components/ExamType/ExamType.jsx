// import quiz from '../../assets/images/quiz.png'
import multiquiz from '../../assets/images/quiztypes/multiquiz.png'
import truefalsequiz from '../../assets/images/quiztypes/truefalsequiz.png'
import fillquiz from '../../assets/images/quiztypes/fillquiz.png'
import matchquiz from '../../assets/images/quiztypes/matchquiz.png'
import mixquiz from '../../assets/images/quiztypes/mixquiz.png'
import writequiz from '../../assets/images/quiztypes/writequiz.png'

import { Link } from 'react-router-dom'

const questionTypes = [
    {
    id: 1,
    type: "แบบเลือกตอบ (multiple choice)",
    good: "วัดพฤติกรรมพุทธิพิสัยได้ครบทั้ง 6 ขั้น ตรวจง่าย เขียนข้อสอบได้คลุมเนื้อหา",
    bad: "สร้างยากโดยเฉพาะคำถามที่วัดพฤติกรรมขั้นสูง ใช้เวลาในการเขียนข้อสอบนาน วัดการแสดงวิธีทำ ทักษะการเขียน การวิพากษ์วิจารณ์ การอภิปรายแสดงความคิดเห็นไม่ได้",
    image: multiquiz,
    link: "/generatequiz"
  },{
    id: 2,
    type: "แบบถูก-ผิด (true/false)",
    good: "สร้างง่ายและรวดเร็ว เขียนคำถามได้คลอบคลุมเนื้อหา ใช้วัดความจำได้ดี ตรวจง่ายและรวดเร็ว มีความเป็นปรนัยในการตรวจ",
    bad: "วัดพฤติกรรมพุทธิพิสัยขั้นสูงไม่ได้ เดาถูกได้มากกว่าข้อสอบแบบอื่นๆ ไม่สามารถใช้วินิจฉัยข้อบกพร่องทางการเรียนได้",
    image: truefalsequiz
  },{
    id: 3,
    type: "แบบเติมคำ (completion)",
    good: "สร้างง่ายและรวดเร็ว เขียนคำถามให้คลอบคลุมเนื้อหาได้ ใช้วัดความจำได้ดี เดาคำตอบได้ถูกยากกว่าข้อสอบปรนัยอื่นๆ",
    bad: "วัดพฤติกรรมสูงกว่าความจำไม่ได้ ตรวจยาก",
    image: fillquiz
  },{
    id: 4,
    type: "แบบจับคู่ (matching)",
    good: "ใช้วัดความจำเกี่ยวกับข้อเท็จจริงระหว่างสิ่งที่มีความสัมพันธ์กันได้ดี สร้างง่าย ตรวจง่ายและรวดเร็ว เดาคำตอบได้น้อยกว่าข้อสอบแบบถูกผิด การให้คะแนนเป็นปรนัย",
    bad: "วัดพฤติกรรมสูงกว่าความจำได้ยาก นักเรียนอาจเดาข้อหลังได้เนื่องจากเหลือตัวเลือกให้เลือกน้อยลง ถ้าคำชี้แจงไม่ชัดเจนอาจทำให้นักเรียนไม่เข้าใจวิธีการตอบ",
    image: matchquiz
  },{
    id: 5,
    type: "แบบเขียนตอบ (Essay Test)",
    good: "เดาไม่ได้ วัดการแสดงวิธีทำ ทักษะการเขียน การวิพากษ์วิจารณ์ การอภิปรายแสดงความคิดเห็น การแสดงเหตุผล การวิพากษ์วิจารณ์ ได้ดี",
    bad: "ตรวจยากมาก ใช้เวลาในการตรวจนาน ไม่สามารถออกข้อสอบหลายข้อได้",
    image: writequiz
  },{
    id: 6,
    type: "แบบผสม (Mix)",
    good: "วัดพฤติกรรมพุทธิพิสัยได้ครบทั้ง 6 ขั้น สร้างความหลากหลาย",
    bad: "",
    image: mixquiz
  }
  ]

const ExamType = () => {
  return (
    <div className="">
        <Link to={""}></Link>
        {questionTypes.map ((type) => (
            <Link to={type.link} key={type.id} className=" flex bg-white w-[100%-100px] mx-4 mt-2 rounded-md border-2 shadow-sm hover:ring-2 hover:cursor-pointer hover:ring-violet-500 active:bg-violet-100">
                <img className="w-[100px] h-[100px] rounded-l-md border-r-2" src={type.image} />

                <div className="pt-2 px-2">
                  <h2 className="text-lg font-medium">{type.type}</h2>
                  <p className=" line-clamp-2 text-base font-body font-light text-gray-600 mt-1 s">{type.good}</p>
                </div>
            </Link>
            ))}
    </div>
  )
}

export default ExamType