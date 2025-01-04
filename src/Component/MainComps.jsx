/* eslint-disable no-unused-vars */
import React from "react";

const MainComps = () => {
  const terms = [
    "Chinese Restaurant Near Me",
    "South Indian Restaurant Near Me",
    "Italian Restaurant Near Me",
    "Mexican Restaurant Near Me",
    "Japanese Restaurant Near Me",
    "Thai Restaurant Near Me",
    "Mediterranean Restaurant Near Me",
    "French Restaurant Near Me",
    "Indian Restaurant Near Me"
    
  ];
  const every_restaurents = [
    "Explore Restaurants Near Me",
    "Explore Top Rated Restaurants Near Me",
  ];
  const cities =[
        'Best Restaurants in Ahmedabad',
        'Best Restaurants in Mumbai',
        'Best Restaurants in Delhi',
        'Best Restaurants in Bangalore',
        'Best Restaurants in Chennai',
        'Best Restaurants in Kolkata',
        'Best Restaurants in Pune',
        'Best Restaurants in Hyderabad',
        'Best Restaurants in Jaipur',
        'Best Restaurants in Surat',
        'Best Restaurants in Lucknow',
        'Best Restaurants in Chandigarh',
        'Best Restaurants in Gandhinagar',
        'Best Restaurants in Kochi',
        'Best Restaurants in Noida'
    
  ]
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-9/12 flex justify-between">
        <p className="text-2xl m-2 font-bold">Best Places to Eat Across Cities</p>
      </div>
      <div className="w-full md:w-9/12 flex flex-wrap m-5 ">
        {cities.map((term, index) => {
          return (
            <div key={index}>
              <div className="shadow-lg rounded-2xl border-gray-200 border-2 m-3 p-4 cursor-pointer duration-300 hover:scale-90">
                <h6 className="text-md font-semibold mx-1">{term}</h6>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-9/12 flex justify-between">
        <p className="text-2xl m-2 font-bold">Best Cuisines Near Me</p>
      </div>
      <div className="w-full md:w-9/12 flex flex-wrap m-5 ">
        {terms.map((term, index) => {
          return (
            <div key={index}>
              <div className="shadow-lg rounded-2xl border-gray-200 border-2 m-3 p-4 cursor-pointer duration-300 hover:scale-90">
                <h6 className="text-md font-semibold mx-1">{term}</h6>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-9/12 flex justify-between">
        <p className="text-2xl m-2 font-bold">Explore Every Restaurants Near Me</p>
      </div>
      <div className="w-full md:w-9/12 flex flex-wrap m-5">
        {every_restaurents.map((term, index) => {
          return (
            <div key={index}>
              <div className="shadow-lg rounded-2xl border-gray-200 border-2 m-3 p-4 cursor-pointer duration-300 hover:scale-90">
                <h6 className="text-md font-semibold mx-1">{term}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainComps;
