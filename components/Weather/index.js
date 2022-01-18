import React, {useState} from 'react'
import axios from 'axios';

function Index() {
   const [city, setCity] = useState('');

const API_URL       = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY       = '67f4a988e4496ee7f3d1e64a8b2a6105';

        const fetchData = (e) => {
            e.preventDefault()
            axios.get( `${API_URL}?q=${city}&appid=${API_KEY}`).then(res => res.data).then(data => console.log(data)).catch(err => console.log(err))
            
        }

        console.log(city)

    return (
        <div className='text-xl flex flex-col justify-start items-start 2xl:container 2xl:mx-auto px-4 md:px-6 xl:px-20 py-12'>
        <form onSubmit={fetchData} className='h-10 flex justify-start items-center'>
            <input type="text" onChange={(e) => setCity(e.target.value)} value={city} className='rounded mx-2 text-sm focus:outline-none border-gray-200  border-2 p-4 w-96 h-full ' />
            <button type='submit' className=' border rounded bg-gray-800 text-white h-full px-2'>Search</button>
        </form>
        <div className='mt-4 flex justify-start items-start flex-col'>
            
        </div>
        </div>
    )
}

export default Index
