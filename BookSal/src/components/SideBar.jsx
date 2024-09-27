import React, { useState } from 'react';
import '../App.css'

const Sidebar = ({sidebarToggle}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-200 h-screen p-4  
          ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'} ${sidebarToggle ?  "hidden":  "block"}`}
      >
        {/* Search Section */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-md border border-gray-400 focus:outline-none"
          />
          <button className="mt-2 w-full p-2 bg-[#347723] hover:bg-[#2e5424] text-white rounded-md">
            Search
          </button>
        </div>

        {/* Sort By Section */}
        <div>
          <h3 className="font-semibold mb-2">Sort By</h3>
          <button className="w-full p-2 bg-[#347723] hover:bg-[#2e5424] text-white rounded-md mb-2">
            Location (Dropdown)
          </button>
          <button className="w-full p-2 bg-[#347723] hover:bg-[#2e5424] text-white rounded-md mb-2">
            Price Less Than
          </button>
          <button className="w-full p-2 bg-[#347723] hover:bg-[#2e5424] text-white rounded-md mb-2">
            A-Side
          </button>
          <button className="w-full p-2 bg-[#347723] hover:bg-[#2e5424] text-white rounded-md mb-2">
            Price High To Low
          </button>
          <button className="w-full p-2 bg-[#347723] hover:bg-[#2e5424] text-white rounded-md mb-2">
            Price Low to High
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;