import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-6'>Chai aur tailwindcss and Props</h1>
      <Card username='Taj' btnText='click me'/>
      <Card username='ayaj' btnText='press me'/>
    </>
  )
}

export default App
