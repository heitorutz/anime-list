import { Link } from 'react-router-dom'

export const Header = ({ back }) => {
  return (
    <div className="w-full bg-transparent h-16 p-4 pl-24 mt-4">
      <div className="flex w-96 justify-between">
        {back ? (
          <Link
            to="/"
            className="text-gray-700 cursor-pointer hover:text-white transition ease-in-out"
          >
            Voltar
          </Link>
        ) : null}
        <h1 className="text-white cursor-pointer">Heitor Urbanetz</h1>
        <a
          href="https://github.com/HeitorUrbanetz"
          target="_blank"
          without
          rel="noreferrer"
          className="text-gray-700 cursor-pointer hover:text-white transition ease-in-out"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/heitor-urbanetz-95b10322a/"
          target="_blank"
          without
          rel="noreferrer"
          className="text-gray-700 cursor-pointer hover:text-white transition ease-in-out"
        >
          Linkedin
        </a>
      </div>
    </div>
  )
}

// https://dribbble.com/shots/10473302-MyAnimeList-Redesign-Home-Anime-list
