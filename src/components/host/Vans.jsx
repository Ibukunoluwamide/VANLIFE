import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import vansApi from "../../vans-api/api";
const HostVans = () => {
    const [vans, setVans] = useState(vansApi);
  return (
    <>
          <span className="text-4xl font-semibold ps-3">Your listed vans</span>
             {
              vans && vans.map((item,index)=>(

      <div key={index}>
          <Link to={`/host/vans/${item.hostId}`} className="grid grid-cols-4 px-4 py-4 gap-3 md:gap-0 " >
          <img
            src={item.imageUrl}
            alt=""
            className="w-24 md:w-64 rounded"
          />
          <div className="flex justify-between items-center col-span-3 ">
            <span>
              <h6>{item.name}</h6>
              <p>{item.price}/day</p>
            </span>
          </div>
        </Link>
      </div>
              ))
             }
    </>
  )
}

export default HostVans