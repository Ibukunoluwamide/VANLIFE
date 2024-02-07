import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../assets/about.svg";
const About = () => {
  return (
    <>
      <div className="">
        <img src={AboutImg} alt="" className="w-full" />
      </div>
      <section className="p-3 md:p-5 pt-10 container md:p-8">
       <div className="md:p-5">
       <h4 className="text-2xl sm:text-5xl lg:text-6xl sm:px-2 font-semibold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h4>
         <div className="pt-5">
         <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
         <p> Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.</p>
         </div>
       <div className="p-8 text-lg mt-10 mb-5 rounded" style={{backgroundColor: '#FFCC8D'}}>
        <div className="font-semibold text-2xl">
        <p>Your destination is waiting.</p>
        <p>Your van is ready.</p>
        </div>
       <div className="mt-8">

         <Link to="/vans" className="p-3 mt-5 text-white rounded-lg" style={{backgroundColor: 'black'}}>Explore our vans</Link>
       </div>
       </div>
       </div>


      </section>
    </>
  );
};

export default About;
