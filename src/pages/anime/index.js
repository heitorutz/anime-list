import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Anime = () => {
  const location = useLocation()
  const animeName = location.pathname.split('/')[2]
  const [item, setItem] = useState({})

  const fetchInformation = async (query) => {
    const temp = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`)
    if (temp) {
      console.log(temp.data.data[0])
      setItem(temp.data.data[0])
    }
  }

  useEffect(() => {
    fetchInformation(animeName)
  }, [])

  return (
    <div className="bg-secondary items-center  flex-col w-screen h-screen flex justify-center">
      <div className="flex p-20 flex-row justify-center items-center text-white">
        <img src={item.images?.jpg.large_image_url} alt={item.title} />
        <div className="ml-20 ">
          <div className="flex flex-row gap-2 items-center">
            <h1 className="text-2xl font-bold">{item?.title}</h1>
            <p className="text-sm text-yellow-400">Score: {item?.episodes}</p>
          </div>
          <div className='mt-10 pr-36'>
          <p className='text-left text-sm block'>{item?.background}</p>
          </div>
          <h1 className='mt-10'>
            Número de Episódios: <span className='text-red-500'>{item?.episodes}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
