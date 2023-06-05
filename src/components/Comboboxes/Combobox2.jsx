import { useState } from 'react';

const options = ['Option 1', 'Option 2', 'Option 3'];
const levels = [
    "ประถมศึกษาปีที่ 1",
    "ประถมศึกษาปีที่ 2",
    "ประถมศึกษาปีที่ 3",
    "ประถมศึกษาปีที่ 4",
    "ประถมศึกษาปีที่ 5",
    "ประถมศึกษาปีที่ 6",
    "มัธยมศึกษาปีที่ 1",
    "มัธยมศึกษาปีที่ 2",
    "มัธยมศึกษาปีที่ 3",
  ];

  const subjects = [
    "ภาษาไทย",
    "คณิตศาสตร์",
    "เทคโนโลยี",
    "วิทยาศาสตร์",
    "ศาสนาและวัฒนธรรม",
    "สุขศึกษาและพลศึกษา",
    "ทัศนศิลป์",
    "ดนตรีและนาฏศิลป์",
    "การงานอาชีพ",
    "ภาษาต่างประเทศ",
  ]

function ComboBox() {
  const [selectedLevel, setSelectedLevel] = useState(levels[3]);

  return (
    <div className="relative inline-block w-full">
      <select
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
        className="indent-4 block appearance-none w-full bg-white border border-gray-200 text-lg text-gray-700 py-3 px-4 pr-8 rounded leading-tight hover:ring-2 hover:ring-violet-500 focus:outline-none focus:border-gray-500"
      >
        {levels.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      </div>
    </div>
  );
}

export default ComboBox;