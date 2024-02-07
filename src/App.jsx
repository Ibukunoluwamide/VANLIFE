
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Vans from './components/Vans'
import Footer from './pages/Footer'
import Home from './pages/Home'
import '/node_modules/flowbite/dist/flowbite.min.css'
import '/node_modules/flowbite/dist/flowbite.min.js'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/vans' element={<Vans/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
