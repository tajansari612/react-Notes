import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor] = useState('#242424');
  const bgChanger = (color)=>{
    setColor(color);
  }
  
  return (
    <div className='content' style={{backgroundColor :color}}>
      <nav className='container'>
        <div className='color' id='red' onClick={()=>(bgChanger('red'))}>Red</div>
        <div className='color' id='green' onClick={()=>(bgChanger('green'))}>Green</div>
        <div className='color' id='blue' onClick={()=>(bgChanger('blue'))}>Blue</div>
        <div className='color' id='olive' onClick={()=>(bgChanger('olive'))}>Olive</div>
        <div className='color' id='grey' onClick={()=>(bgChanger('grey'))}>Gray</div>
        <div className='color' id='yellow' onClick={()=>(bgChanger('yellow'))}>Yellow</div>
        <div className='color' id='pink' onClick={()=>(bgChanger('pink'))}>Pink</div>
        <div className='color' id='purple' onClick={()=>(bgChanger('purple'))}>Purple</div>
        <div className='color' id='lavendar' onClick={()=>(bgChanger('lavender'))}>Lavender</div>
        <div className='color' id='white' onClick={()=>(bgChanger('white'))}>White</div>
        <div className='color' id='black' onClick={()=>(bgChanger('black'))}>Black</div>
      </nav>
      
    </div>
  )
}

export default App
