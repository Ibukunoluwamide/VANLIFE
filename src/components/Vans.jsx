import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import vansApi from "../vans-api/api";

const Vans = () => {

  return (
    <>
        <Outlet/>

    </>
  );
};

export default Vans;
