import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setjokes]=useState([])
  useEffect(()=>{
    axios.get('api/joks')
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <> 
    <h1>Hello evry one</h1>
    <p>JOKES:{jokes.length}</p>

    {
      jokes.map((joke,index)=>(
        <div>key={joke.id}
        <p>{joke.tital}</p>
        <p>{joke.contant}</p>
        </div>
      ))
    }
    </>
  )
}  
export default App
