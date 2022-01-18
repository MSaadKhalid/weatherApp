import React, {useState} from 'react'
import axios from 'axios';

function Index() {
   const [city, setCity] = useState('');
   const [date, setDate] = useState('')
   const [country, setCountry] = useState('');
   const [currentPic, setcurrentPic] = useState('')
   const [currentTime, setCurrentTime] = useState('')
   const [currentWeather, setCurrentWeather] = useState('')
   const [temperature, setTemperature] = useState('')

   const values = (data) => {
        setCountry(`${data.city.name}, ${data.city.country}`)

        data.list.map((data,key) => {
           if(key === 0) {
            setcurrentPic(data.weather[0].icon)
            setCurrentWeather(data.weather[0].description)
           
            setTemperature(Math.round(data.main.temp - 273.15))
               console.log(data)
    
           } else {
               console.log(data)
           }

           

        }
        )
   }

const API_URL       = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY       = '67f4a988e4496ee7f3d1e64a8b2a6105';
const DAYS = 6;

        const fetchData = async (e) => {
            e.preventDefault()
            await axios.get( `${API_URL}?q=${city}&cnt=${DAYS}&appid=${API_KEY}`).then(res => res.data).then(data => {
                console.log(data)
                values(data)                
                
            }).catch(err => console.log(err))
            
        }

        console.log(city)

    return (
        <div className=' flex justify-center items-center w-full 2xl:container 2xl:mx-auto px-4 md:px-6 xl:px-20 py-12'>
        <div className='flex flex-col w-96 justify-start items-start '>
        <form onSubmit={fetchData} className='flex-row flex justify-start items-center space-x-4'>
            <div className='flex items-start justify-start space-x-2 h-8 '>
            <input placeholder='City Name' type="text" onChange={(e) => setCity(e.target.value)} value={city} className='rounded w-full text-sm focus:outline-none border-gray-200  border-2 p-3  h-full ' />
            <button type='submit' className=' border rounded bg-gray-800 text-white h-full px-2'>Search</button>
            </div>
        </form>
        <div className='mt-14 flex justify-start items-start flex-col'>
            <div className='flex flex-col space-y-2 justify-start items-start '>
                <div className='text-red-600 flex space-x-2 flex-row items-center  font-semibold'>
                    { currentPic !== '' ? 
                    <img className='w-20' src={`http://openweathermap.org/img/wn/${currentPic}.png`} />                   
                    : '' } <div className='flex justify-start items-start  flex-col'>
                    <p className='text-4xl text-gray-400'>{temperature}<span className=' font-light'>{currentPic !== '' ? <span>&#8451;</span> : ''}</span></p>
                    <p className='text-3xl'>{country}</p>
                    <p className='text-sm  text-gray-800 '>{currentWeather}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Index
