import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <div className="flex  justify-center items-center text-center " style={{minHeight: '80vh'}}>
        <div className="p-5">
        <h3 className='text-5xl font-bold'>Sorry, the page you were looking for was not found.</h3>
        <div className="flex mt-5 p-5">

        <Link to='/'  className='bg-luxury p-3 text-white w-full rounded hover:bg-gray-900'>Return to home    </Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default ErrorPage