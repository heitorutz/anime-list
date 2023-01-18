import { useEffect, useState } from 'react'
import { Header } from '../components/header'
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
      <Header />
      <div className="w-full h-full  p-20 overflow-x-hidden">
        <div className="grid grid-rows-5 grid-flow-col gap-12">
          {items.map((item, index) => (
            <div
              className="w-30 h-30 flex-col bg-white hover:shadow-2xl hover:-translate-y-6 flex items-center rounded-lg hover:bg-red-300"
              key={item.mal_id}
            >
              <div className="w-full h-full">
                <img
                  src={item.images.jpg.large_image_url}
                  alt={item.title}
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
