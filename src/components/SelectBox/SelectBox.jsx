import { useState } from 'react';

function SelectBox({choice}) {
  const [selectedChoice, setSelectedChoice] = useState(choice[3]);

  return (
    <div className="relative inline-block w-full">
      <select
        value={selectedChoice}
        onChange={(e) => setSelectedChoice(e.target.value)}
        className="indent-4 block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 text-lg rounded leading-tight hover:ring-2 hover:ring-violet-500 focus:outline-none focus:border-gray-500"
      >
        {choice.map((ch) => (
          <option key={ch} value={ch}>
            {ch}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      </div>
    </div>
  );
}

export default SelectBox;