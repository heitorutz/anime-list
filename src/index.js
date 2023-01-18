import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Anime } from './pages/anime'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/anime/:anime',
    element: <Anime />,
  },
  {
    path: '*',
    element: <div>pagina nao encontrada</div>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
