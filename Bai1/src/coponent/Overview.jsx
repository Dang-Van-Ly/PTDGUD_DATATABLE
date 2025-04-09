import React from "react";
import squa from "../assets/img/Squares four 1.png";
import cr from "../assets/img/create.png";
import bt1 from "../assets/img/Button 1509.png"
import bt2 from "../assets/img/Button 1529.png"
import bt3 from "../assets/img/Button 1530.png"

const Overview=()=>{
    return(
        <div>
              <div className="flex gap-4 ml-5 my-9">
          <img src={squa} alt="" className="w-7" />
          <h2 className="text-2xl font-bold">Overview</h2>

        </div>

                <div className="grid grid-cols-3 mx-5 gap-5">
                <div className="bg-pink-100 rounded-2xl p-5 relative shadow-md w-full max-w-sm">
                    <div className="flex justify-between items-start">
                <h4 className="text-xl font-bold text-gray-800">Turnover</h4>
                <button><img src={bt1} alt="" /></button>
                </div>
                <div className="flex items-center gap-1 mt-2">
                <span className="text-green-600">↗️</span>

                <span className="text-sm text-gray-600 ml-1">period of change</span>
                </div>
                </div>
                <div className="bg-purple-100 rounded-2xl p-5 relative shadow-md w-full max-w-sm">
        <div className="flex justify-between items-start">
            <h4 className="text-xl font-bold text-gray-800">Profit</h4>
            <button><img src={bt2} alt="" /></button> 
        </div>
        <div className="flex items-center gap-1 mt-2">
            <span className="text-green-600">↗️</span>
            <span className="text-sm text-gray-600 ml-1">period of change</span>
        </div>
        </div>

        <div className="bg-blue-100 rounded-2xl p-5 relative shadow-md w-full max-w-sm">
        <div className="flex justify-between items-start">
            <h4 className="text-xl font-bold text-gray-800">New Customers</h4>
            <button><img src={bt3} alt="" /></button> 
        </div>
        <div className="flex items-center gap-1 mt-2">
            <span className="text-green-600">↗️</span>

            <span className="text-sm text-gray-600 ml-1">period of change</span>
        </div>
        </div>

        </div>
        </div>
    )
}

export default Overview;