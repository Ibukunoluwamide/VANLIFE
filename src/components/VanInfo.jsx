import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import vansApi from "../vans-api/api";

const VanInfo = () => {
  const [vanInfo, setvanInfo] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    let filteredVan = vansApi.filter((van) => van.id === Number(id));
    // console.log(filteredVan[0]);
    setvanInfo(filteredVan[0]);
  }, []);

  return (
    <>
      <section className="p-4">
        <Link to="/vans" className="underline flex mb-5">
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
          <div className=" flex flex-col items-center bg-white  rounded-lg md:flex-row  mb-10 pb-8">
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
                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
                  {vanInfo.description}
                </p>
               <div className="flex">
               <Link to="/signin" className="w-80 py-3 px-5  text-base font-medium text-center text-white rounded-lg" style={{backgroundColor: '#FF8C38'}}>
               Rent this van
            </Link>
                </div> 
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default VanInfo;
