import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function Detail() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloud Overcast</p>
      </div>
      <div className="flex flex-row items-centre justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="weather icon"
          className="w-20"
        ></img>
        <p className="text-5xl">34º</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-centre justify-center">
            <UilTemperature size={18} classname="mr-1" />
            Real feel:
            <span className="font-medium ml-1">32º</span>
          </div>
          <div className="flex font-light text-sm items-centre justify-center">
            <UilTear size={18} classname="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>
          <div className="flex font-light text-sm items-centre justify-center">
            <UilWind size={18} classname="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-centre justify-center space-x-2 text-white text-sm py-3"></div>
    </div>
  );
}

export default Detail;
