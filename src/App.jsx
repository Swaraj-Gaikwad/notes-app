import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Note } from './components/Note.jsx'
import { ViewNote } from './components/ViewNote.jsx'



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <div>
          <NavBar />
          <Home />
        </div>
      )
    },
    {
      path: '/notes',
      element: (
        <div>
          <NavBar />
          <Note />
        </div>
      )
    },
    {
      path: '/notes/:id',
      element: (
        <div>
          <NavBar />
          <ViewNote />
        </div>
      )
    }
  ]
)

function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
