import { AiOutlineSearch } from 'react-icons/ai'

export const Header = () => {
  return (
    <div className="w-full bg-primary h-16 p-4 pl-24 flex justify-center items-center">
      <div className="flex justify-center items-center w-full">
        <AiOutlineSearch className="translate-x-8 text-gray-400" />
        <input
          className="bg-gray-100 w-1/3 !outline-none text-gray-600 rounded-lg p-1 pl-12"
          placeholder="Pesquise animes, e mais..."
        />
      </div>
    </div>
  )
}

// https://dribbble.com/shots/10473302-MyAnimeList-Redesign-Home-Anime-list
