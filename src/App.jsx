import { useState } from 'react'

import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Home from './Home'
import Footer from './componentes/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <NavBar total={100000}/>
    <Home/>
    <Footer/>  
   </>
  )
}

export default App
