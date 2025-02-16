import AddEntry from '../components/AddEntry';
import DataDisplay from '../components/DataDisplay';
import Head from 'next/head';

export default function Home() {
  const handleAddCalorie = (data) => {
    fetch('/api/calorie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  const handleAddWeight = (data) => {
    fetch('/api/weight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <Head>
        <title>Weight Loss Tracker</title>
      </Head>
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="my-2 flex flex-col items-center justify-center">
        <h1 className='text-2xl font-bold'>Weight Loss Tracker</h1>
        <AddEntry type="calorie" onAdd={handleAddCalorie} />
        <AddEntry type="weight" onAdd={handleAddWeight} />
        <DataDisplay />
      </div>
    </main>
    </>
  );
}
