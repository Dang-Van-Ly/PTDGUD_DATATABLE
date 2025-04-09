// components/Header.js
import React from 'react';
import logo from "../assets/img/Image 1858.png";
import bell from "../assets/img/Bell 1.png";
import qt from "../assets/img/Question 1.png";
import avata from "../assets/img/Avatar 313.png";

const Header = () => {
  return (
     <div className="header flex flex-wrap items-center col-span-5 bg-white bg-opacity-80 p-2 border border-gray-300 justify-between h-25">
            <div className="flex items-center gap-60">
              <img src={logo} alt="logo" className="ml-3 w-35" />
                <h2 className='text-pink-500 text-3xl font-bold'>Dashboard</h2>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-end">
              <input placeholder="Search..." type="text" className="rounded-md h-10 w-80 bg-gray-100" />
              <img src={bell} alt="bell" />
              <img src={qt} alt="qt" />
              <img src={avata} alt="avatar" />
            </div>
          </div>
  );
};

export default Header;
