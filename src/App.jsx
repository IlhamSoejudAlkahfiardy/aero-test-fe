import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import Text from './Components/Text'
import AutoCare from './Components/AutoCare'

function App() {
  const [brand, setBrand] = useState(true)
  const [data, setData] = useState([null])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products')
        // console.log(response.data);

        setData(response.data.products)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  console.log(data);

  return (
    <div className='min-h-screen w-screen flex justify-center items-center flex-col'>
      <div className='flex flex-col gap-10'>

        {brand ? (
          <Text />
        ) : (
          <AutoCare />
        )}

        <button className='bg-blue-500 hover:bg-blue-600 transition-all text-white p-5 rounded-lg shadow-md' onClick={() => setBrand(!brand)}>
          Click me!
        </button>

        <div className='flex items-center gap-5'>
          {
            data.map((item, index) => (
              index < 3 &&
              // console.log(item.brand)

              <p className='font-semibold cursor-pointer hover:scale-105 transition-all'>{item.brand}</p>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default App
