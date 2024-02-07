import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// function App(){
//   return (
//     <h1>App kaise ho?</h1>
//   )
// }

let reactEle = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

let newReactEle = React.createElement('a',{
  href : 'https://youtube.com',
  target : '_blank'
},'Visit Youtube')
ReactDOM.createRoot(document.getElementById('root')).render(
  //reactEle
  //newReactEle
  //App()
  <App />
)
