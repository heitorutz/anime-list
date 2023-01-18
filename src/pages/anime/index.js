import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../../components/header'
import { Spinner } from '../../components/spinner'

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
    <>
      {Object.keys(item).length === 0 ? (
        <div className="bg-secondary items-center relative  flex-col w-screen h-screen flex justify-center">
          <div className="absolute top-2 left-0">
            <Header back />
          </div>
          <Spinner />
        </div>
      ) : (
        <div className="bg-secondary items-center  flex-col w-screen h-screen flex justify-center">
          <Header back />
          <div className="flex p-20 flex-row justify-center items-center text-white">
            <img
              className="w-60 h-90"
              src={item.images?.jpg.large_image_url}
              alt={item.title}
            />
            <div className="ml-20 ">
              <div className="flex flex-row gap-2 items-center">
                <h1 className="text-3xl font-bold">{item?.title}</h1>
                <p className="text-sm text-yellow-400">
                  Pontos: {item?.episodes}
                </p>
              </div>
              <div className="mt-10 pr-36">
                <p className="text-left text-lg block">{item?.background}</p>
              </div>
              <h1 className="mt-10">
                Número de Episódios:{' '}
                <span className="text-red-500">{item?.episodes}</span>
              </h1>
              <h1 className="absolute bottom-10 text-gray-700">
                * as descrições são em inglês pois vem da api que está em
                ingles.
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
