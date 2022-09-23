import { useState } from 'react'
import Logo from './assets/logo.svg'
import Wsj from './assets/Wsj.svg'
import Tc from './assets/Tc.svg'
import './App.css'
import Home from './pages/Home'
import Typed from "typed.js";
import { Superpowers } from './components/Superpowers'


function App() {
   
  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
     <Home superpowers={['hello', 'I like to read', 'Hey there']} />
  </div>
  )
}

export default App
