import { useEffect, useState } from 'react';
import exampleData from '../../tests/example_data';

const DataDisplay = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(exampleData)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <div key={index} className="flex flex-row">
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
