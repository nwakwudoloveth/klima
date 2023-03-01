import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className="flex flex-row justify-centre my-6">

      <div className="flex flex-row w-3/4 items-centre justify-centre space-x-4">
       
          <input type="text"  placeholder='Search for city...' className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"></input>
       
           <UilSearch size={30} className="text-white cursor-pointer transition ease-out hover:scale-125 my-2"/>
           <UilLocationPoint size={30} className="text-white cursor-pointer transition ease-out hover:scale-125 my-2" />
      </div>
      <div className="flex flex-row w-1/4 items-centre justify-centre mx-6">
        <button name="metric" className="text-xl text-white font-light">ºF
        </button>
       <p className= "text-xl text-white my-2">⎮</p> 
        <button name="imperial" className="text-xl text-white font-light">ºC
        </button>
      </div>
    </div>
  )
}

export default Inputs