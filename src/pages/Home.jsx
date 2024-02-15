import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../assets/home.svg'
const Home = () => {
  return (
    <>
    


    <section className="bg-gray-700 text-white pt-60" style={{ background: `url(${HomeImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '100vh'}}>
    <div className="px-4 mx-auto w-full text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">You got the travel plans, we got the travel vans.</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <div className="flex justify-center">
          
            <Link to="/vans" className="w-80 py-3 px-5  text-base font-medium text-center  rounded-lg" style={{backgroundColor: '#FF8C38'}}>
               Find your van
            </Link>  
        </div>
    </div>
</section>


    </>
  )
}

export default Home