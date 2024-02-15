import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState(
    JSON.parse(localStorage["vanslife-login"] || null)
  );
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitBtn = () => {
    if (user.email == email && user.password == password) {
      navigate("/host");
    } else {
      alert("Incorrect email address or password!");
    }
  };
  return (
    <>
      <div
        id="toast-default"
        className="flex items-center mx-auto w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
            />
          </svg>
          <span className="sr-only">Fire icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">
          <span className="font-semibold px-2">Email:</span>admin@admin.com{" "}
          <span className="font-semibold px-2">Password:</span>admin{" "}
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-default"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <section className="flex items-center" style={{ minHeight: "74vh" }}>
        <form className="max-w-sm mx-auto mt-10">
          <h3 className="text-3xl text-center font-bold mb-5">
            Sign in to your account
          </h3>
          <div className="mb-5">
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email address"
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <button
              type="button"
              onClick={submitBtn}
              className="w-full text-white font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center"
              style={{ backgroundColor: "#FF8C38" }}
            >
              Submit
            </button>
          </div>
          <p className="text-center pt-5">
            Don’t have an account?{" "}
            <Link to="" className=""   style={{ color: "#FF8C38" }}>
              Create one now
            </Link>{" "}
          </p>
        </form>
      </section>
    </>
  );
};

export default Signin;
