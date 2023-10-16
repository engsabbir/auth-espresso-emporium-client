import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='max-w-screen-xl mx-auto p-5'>
      {/* <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-center'>Espresso Emporium</h1> */}
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-center'>Available Coffee: {coffees.length}</h1>

      <div className='grid md:grid-cols-2 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
