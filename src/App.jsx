
import Router from './router'
import './App.css'
import Signup from './Signup/Signup'
import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'




const App=()=>{
  const [isButtonClicked, setIsButtonClicked] = useState(true)
     
const handleclick=()=>{
    setIsButtonClicked(!isButtonClicked)
}

  return(
    <>
    {isButtonClicked ?  <Signup  click={handleclick}/>:<Router/> }
    </>
  )
}


export default App
