import React, { useState } from "react";
import { Link } from "react-router-dom";
import vansApi from "../../vans-api/api";

const Dashboard = () => {
  const [vans, setVans] = useState(vansApi);

  return (
    <>
      <section>
        <div
          className="md:flex justify-between items-center px-8 p-8"
          style={{ backgroundColor: "#FFEAD0" }}
        >
          <div className="">
            <h4 className="text-4xl font-semibold py-4">Welcome!</h4>
            <span className="flex py-4 justify-between gap-5">
              <p>Income last 30 days</p>
              <p>Details</p>
            </span>
            <h4 className="text-5xl font-bold py-3">$2,260</h4>
          </div>

          <div className="flex justify-between items-center gap-4">
            <span className="text-xl font-normal">Review score <i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i>5.0/5</span>
            <span>Details</span>
          </div>
        </div>

        <div className="flex justify-between gap-4 px-8 py-8 ">
          <span className="text-xl font-semibold">Your listed vans</span>
          <Link to='/vans'>View all</Link>
        </div>
             {
              vans && vans.map((item, index)=>(
<div key={index}>
<div className="grid grid-cols-4 px-4 pb-4 gap-3 md:gap-0 bg-white my-3 p-5">
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
            <span className="cursor-pointer">Edit</span>
          </div>
        </div>
</div>
              ))
             }
      </section>
    </>
  );
};

export default Dashboard;
