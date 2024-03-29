import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5);
  let addValue = ()=>{
    console.log("value added")
    if(counter<20){
      counter++;
    }
    setCounter(counter);
  }
  let removeValue = ()=>{
    console.log("value removed")
    if(counter>0){
      counter--; 
    }
    setCounter(counter);
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
