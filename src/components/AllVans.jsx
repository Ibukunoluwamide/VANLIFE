import React, { useState } from "react";
import { Link } from "react-router-dom";
import vansApi from "../vans-api/api";

const AllVans = () => {
  const actionBtn = ['simple', 'luxury', 'rugged'];
  const [vans, setVans] = useState(vansApi);
  const [activeLink, setActiveLink] = useState(null);

  const changeType = (type) => {
    if (type === "all") {
      setVans(vansApi);
      setActiveLink(type)
    } else {
      const filteredVans = vansApi.filter((van) => van.type === type);
      setVans(filteredVans);
      setActiveLink(type)
    }
  };

  return (
    <>
      <section>
        <section className="container p-3 text-gray-950">
          <h1 className="text-2xl">Explore our van options</h1>
          <div className="flex justify-between gap-4 text-gray-900 mt-5">
            {actionBtn.map((item) => (
              <button
                key={item}
                className={`p-2 rounded w-40 ${activeLink==item? 'underline':''}`}
                onClick={() => changeType(item)}
                style={{ backgroundColor: "#FFEAD0", textTransform: "capitalize" }}
              >
                {item}
              </button>
            ))}
            <button className="underline w-40" onClick={() => changeType("all")}>
              Clear filters
            </button>
          </div>
        </section>
        <div className="">
          <div className="grid md:grid-cols-4 gap-4 p-5">
            {vans.map((item, index) => (
              <div key={index} className="max-w-sm bg-white rounded-lg shadow">
                <Link to={`/vans/${item.id}`}>
                  <img className="rounded-t-lg" src={item.imageUrl} alt="" />
                </Link>
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.name}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <span className="text-xl font-semibold">${item.price}</span>
                      <br />/day
                    </p>
                  </div>
                  <span
                    className={`rounded text-white p-2 ${
                      item.type === "simple"
                        ? "bg-simple"
                        : item.type === "luxury"
                        ? "bg-luxury"
                        : item.type === "rugged"
                        ? "bg-rugged"
                        : ""
                    }`}
                    style={{ textTransform: "capitalize" }}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllVans;
