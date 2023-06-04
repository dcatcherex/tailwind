import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

const level = [
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

const Combobox1 = () => {
  const [selectedLevel, setSelectedLevel] = useState(level[0]);
  const [query, setQuery] = useState("");

  const filteredLevel =
    query === ""
      ? level
      : level.filter((level) => {
          return level.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedLevel} onChange={setSelectedLevel}>
      <Combobox.Label className="text-left text-sm font-medium leading-6 text-gray-900">
        ระดับชั้น
      </Combobox.Label>

      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredLevel.map((level) => (
          <Combobox.Option key={level} value={level}>
            {level}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default Combobox1;
