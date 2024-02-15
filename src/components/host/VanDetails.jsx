import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import vansApi from "../../vans-api/api";

const VanDetails = () => {
  const [vanInfo, setvanInfo] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    let filteredVan = vansApi.filter((van) => van.hostId === id);
    // console.log(filteredVan);
    setvanInfo(filteredVan[0]);
  }, []);
  return (
    <>
      <section className="p-4">
        <Link to="/host/vans" className="underline flex mb-5">
          <svg
            className="w-4 text-gray-700 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>{" "}
          Back to all vans
        </Link>
        {vanInfo && (
          <div style={{minHeight: '62vh'}} className=" flex flex-col items-center bg-white  rounded-lg md:flex-row  mb-10 pb-8">
            <img
              className="object-cover h-auto w-auto rounded-t-lg  md:h-96 md:rounded-none md:rounded-s-lg shadow-xl"
              src={vanInfo.imageUrl}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal ">
              <div className="">
                <span
                  className={`rounded text-white p-2 ${
                    vanInfo.type === "simple"
                      ? "bg-simple"
                      : vanInfo.type === "luxury"
                      ? "bg-luxury"
                      : vanInfo.type === "rugged"
                      ? "bg-rugged"
                      : ""
                  }`}
                  style={{ textTransform: "capitalize" }}
                >
                  {vanInfo.type}
                </span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-3">
                  {vanInfo.name}
                </h5>
                <span className="text-xl font-semibold">${vanInfo.price}</span>{" "}
                /day
                <ul
                  className="flex flex-wrap items-center justify-start text-gray-900 dark:text-white py-3  sticky bg-white"
                  style={{ top: "50px" }}
                >
                  <li>
                    <Link
                      to="#"
                      className={`underline font-semibold me-4 hover:underline md:me-6`}
                    >
                      Details
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className={` me-4 hover:underline md:me-6`}>
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className={`me-4 hover:underline md:me-6`}>
                      Photos
                    </Link>
                  </li>
                </ul>
                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
                 <span className="text-xl font-semibold">Name:</span> {vanInfo.name}
                </p>
                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
                 <span className="text-xl font-semibold ">Category:</span> {vanInfo.type}
                </p>
                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
                 <span className="text-xl font-semibold">Description:</span> {vanInfo.description}
                </p>
                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
                 <span className="text-xl font-semibold">Visibility:</span> Public
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default VanDetails;
