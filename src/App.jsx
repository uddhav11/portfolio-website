import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'

function App() {

  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Aboutme />
      <Projects />
      <Skills />
      <Contacts />
    </div>
    // <div>
    //   <h1 className='text-red-800 font-bold'>hello world</h1>
    // </div>
  )
}

export default App
