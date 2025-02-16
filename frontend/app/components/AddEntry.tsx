import { useState } from 'react';

interface EntryData {
  date: string;
  value: number;
}

interface AddEntryProps {
  type: 'calorie' | 'weight';
  onAdd: (data: EntryData) => void;
}

const AddEntry: React.FC<AddEntryProps> = ({ type, onAdd }) => {
  const [entryData, setEntryData] = useState<EntryData>({ date: '', value: 0 });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntryData((prev) => ({ ...prev, date: event.target.value }));
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntryData((prev) => ({ ...prev, value: Number(event.target.value) }));
  };

  const handleAddEntry = () => {
    onAdd(entryData);
    setEntryData({ date: '', value: 0 });
  };

  return (
    <div className="max-w-md p-4 flex flex-col gap-y-4">
      <h2 className="text-2xl font-bold">Add {type}</h2>
      <div className="flex gap-x-2">
        <div className="w-full">
          <input
            className="bg-gray-50 text-gray-100"
            type="date"
            id="date"
            onChange={handleDateChange}
          />
        </div>
        <div className="w-full">
          <input
            className="bg-gray-50 text-gray-100"
            type="number"
            id="value"
            onChange={handleValueChange}
          />
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md" onClick={handleAddEntry}>
        Add {type}
      </button>
    </div>
  );
};

export default AddEntry;
