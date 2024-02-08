import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
    <section className='flex items-center' style={{minHeight: '80vh'}}>
        

<form class="max-w-sm mx-auto mt-10">
    <h3 className='text-3xl text-center font-bold mb-5'>Sign in to your account</h3>
  <div class="mb-5">
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address" required />
  </div>
  <div class="mb-5">
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required />
  </div>
  <div class="flex flex-col">
   
  <button type="submit" class="w-full text-white font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center"  style={{backgroundColor: '#FF8C38'}}>Submit</button>
  </div>
  <p className='text-center pt-5'>Don’t have an account? <Link to='' className=''  style={{color: '#FF8C38'}}>Create one now</Link>  </p>
</form>

    </section>
    </>
  )
}

export default Signin