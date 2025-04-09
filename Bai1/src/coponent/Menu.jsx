import React from "react";
import squa from "../assets/img/Squares four 1.png";
import pro from "../assets/img/Folder.png";
import gro from "../assets/img/Groups.png";
import pie from "../assets/img/Pie chart.png";
import mes from "../assets/img/Chat.png";
import code from "../assets/img/Code.png";
import gr from "../assets/img/Group.png";
import "../assets/css/Dashboard.css";

const Menu = () => {
    const menuItems = [
        { img: squa, label: 'Dashboard' },
        { img: pro, label: 'Projects'},
        { img: gro, label: 'Teams' },
        { img: pie, label: 'Analytics' },
        { img: mes, label: 'Messages' },
        { img: code, label: 'Integrations'},
      ];
    
  return (
    <div className="menu col-span-1 bg-white bg-opacity-80 p-2 border border-gray-300">
            <ul className="py-5">
                    {
                        menuItems.map(({img,label})=>(
                            <li className="menu-item group flex items-center gap-4 h-14 m-2 rounded-lg text-xl font-medium px-3 transition-all">
                                <img src={img} alt={label}  className="w-7 group-hover:brightness-150 transition duration-300"/>
                                <span>{label}</span>
                            </li>
                        ))
                    }
            </ul>

            <div className="bg-blue-100 flex flex-col items-center justify-center m-3 space-y-6 rounded-lg">
        <img src={gr} alt="" className="w-60 mt-5" />
        <h2 className="text-3xl font-bold">V2.0 is available</h2>
        <button className="bg-white border border-blue-600 h-11 w-5/6 mb-5 text-blue-400 font-medium text-lg rounded-lg">
          Try now
        </button>
      </div>
    </div>
  );
};

export default Menu;
