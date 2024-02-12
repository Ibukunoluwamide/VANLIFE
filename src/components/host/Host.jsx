import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Host = () => {
  const [activeLink, setActiveLink] = useState(null);

  const toggleBtn = (link) => {
    // console.log(link);
    setActiveLink(link);
  };
  return (
    <>
     
<ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white py-3 sticky bg-white" style={{top: '50px'}}>
    <li onClick={()=>toggleBtn('dash')}>
   
        <Link to="/host" className={`${activeLink=='dash'?'underline font-semibold':''} me-4 hover:underline md:me-6`}>Dashboard</Link>
    </li>
    <li onClick={()=>toggleBtn('income')}>
        <Link to="/host/income" className={`${activeLink=='income'?'underline font-semibold':''} me-4 hover:underline md:me-6`}>Income</Link>
        </li>
    <li onClick={()=>toggleBtn('vans')}>
        <Link to="/host/vans" className={`${activeLink=='vans'?'underline font-semibold':''} me-4 hover:underline md:me-6`}>Vans</Link>
    </li>
    <li onClick={()=>toggleBtn('reviews')}>
        <Link to="#" className={`${activeLink=='reviews'?'underline font-semibold':''} me-4 hover:underline md:me-6`}>Reviews</Link>
    </li>
    
</ul>
  <Outlet/>
    </>
  )
}

export default Host