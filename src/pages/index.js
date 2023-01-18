import { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'

export const InitialPage = () => {
  const [items, setItems] = useState([])
  const URL = 'https://api.jikan.moe/v4/anime'

  useEffect(() => {
    ;(async () => {
      const items = await axios.get(URL)
      setItems(items.data.data)
      console.log(items.data.data)
    })()
  }, [])

  return (
    <>
      <div className="overflow-hidden">
        <div className="w-full h-screen scale-105 wallpaper flex justify-start items-center">
          <div className="p-20 -mt-30 pl-60 w-full flex-col h-full flex justify-center">
            <h1 className="text-white text-8xl text-start">Globin Slayer</h1>
            <p className="text-gray-400 text-sm text-start mt-6 ml-3">
              Goblin Slayer é uma série de light novel de fantasia sombria
              japonesa escrita por Kumo Kagyu <br /> e ilustrada por Noboru
              Kannatuki. Uma adaptação em uma série de mangá <br /> escrita e
              ilustrada por Kōsuke Kurose é 'serializada' na revista Monthly Big
              Gangan.
            </p>

            <div
              className="border-white border-2
             hover:bg-white hover:-translate-y-1
              transform-gpu transition ease-in-out
              hover:text-black text-white flex items-center
              justify-around cursor-pointer ml-2 mt-12 w-60 p-2 flex-row rounded-3xl"
            >
              <button>ASSISTIR</button>
              <AiOutlineArrowRight className="text-xl" />
            </div>
          </div>
        </div>
        {/* <div className="w-9/12 grid grid-rows-5 grid-flow-col gap-6">
          {items.map((item, index) => (
            <div
              className=" flex-col cursor-pointer
               bg-transparent hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]
               hover:-translate-y-1 transform-gpu transition ease-in-out
               flex items-center"
              key={item.mal_id}
            >
              <div className="w-full h-full">
                <img
                  src={item.images.jpg.large_image_url}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
              <div className="mt-2 text-white">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  )
}
