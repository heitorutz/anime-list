import { useCallback, useEffect, useState } from 'react'
import { AiOutlineArrowRight, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import axios from 'axios'
import { Header } from '../components/header'
import { Link } from 'react-router-dom'

export const InitialPage = () => {
  const [items, setItems] = useState([])
  const [topAnime, setTopAnime] = useState([])
  const [search, setSearch] = useState('')
  const URL = 'https://api.jikan.moe/v4/anime'

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchAnime(search)
  }

  const getTopAnime = async () => {
    const temp = await axios.get(
      'https://api.jikan.moe/v4/top/anime?bypopularity'
    )
    setTopAnime(temp.data.data.slice(0, 5))
  }

  const fetchAnime = async (query) => {
    const temp = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`)
    if (temp) {
      setItems(temp.data.data)
    }
  }

  useEffect(() => {
    (async () => {
      const items = await axios.get(URL)
      setItems(items.data.data)
      getTopAnime()
    })()
  }, [])

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="w-full h-screen scale-105 wallpaper flex-col flex justify-start items-center">
          <Header />
          <div className="p-20 -mt-30 pl-60 w-full flex-col h-full flex justify-center">
            <h1 className="text-white text-8xl text-start">Globin Slayer</h1>
            <p className="text-gray-400 text-sm text-start mt-6 ml-3">
              Goblin Slayer é uma série de light novel de fantasia sombria
              japonesa escrita por Kumo Kagyu <br /> e ilustrada por Noboru
              Kannatuki. Uma adaptação em uma série de mangá <br /> escrita e
              ilustrada por Kōsuke Kurose, é 'serializada' na revista Monthly
              Big Gangan.
            </p>

            <div
              className="border-white border-2
             hover:bg-white hover:-translate-y-1
              transform-gpu transition ease-in-out
              hover:text-black text-white flex items-center
              justify-around cursor-pointer ml-2 mt-12 w-60 p-2 flex-row rounded-3xl"
            >
              <button type="button">ASSISTIR</button>
              <AiOutlineArrowRight className="text-xl" />
            </div>
            <div className="text-orange-700 flex flex-row ml-4 mt-10">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar className="text-gray-700" />
            </div>
            <div className="text-gray-400 absolute bottom-5 gap-20 flex text-sm flew-row ">
              {topAnime.map((item) => (
                <h1
                  className="hover:text-white transition ease-in-out cursor-pointer"
                  key={item.mal_id}
                >
                  {item.title}
                </h1>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-secondary items-center  flex-col w-full h-full flex justify-center">
          <form className="w-1/4 flex justify-center" onSubmit={handleSubmit}>
            <input
              placeholder="Pesquise seu anime"
              onChange={(e) => setSearch(e.target.value)}
              className="mt-20 placeholder bg-transparent border-b-2 pl-4 text-white rounded-sm !outline-none"
            />
          </form>

          <div className=" w-4/5 grid grid-rows-5 grid-flow-col gap-6 mt-10 mb-10">
            {items.map((item, index) => (
              <Link to={`/anime/${item.title}`}
                className="flex-col cursor-pointer bg-transparent
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
