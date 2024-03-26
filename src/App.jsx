import React from 'react'
import NavBar from './Components/NavBar'
import Page1 from './Components/Page1'
import './font.css'
const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
       <NavBar/>
       <Page1/>
    </div>
  )
}

export default App
