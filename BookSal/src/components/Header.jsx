import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
import { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerColor, setHeaderColor] = useState('#347723');
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      setHeaderColor('#56b356'); // change the color to a darker green when scrolled
    } else {
      setHeaderColor('#347723'); // change the color back to the original when not scrolled
    }
  }, [scrollPosition]);
  
  return (
    <header className={`bg-[${headerColor}] text-white shadow-md w-full sticky top-0`} style={{ transition: 'bg-white 0.5s ease text-[#347723]' }}>
      <div className="container mx-auto flex justify-between items-center p-4 w-full">

        <nav className="space-x-6 hidden md:flex items-center w-full justify-between">

          <FaBars className='text-white me-4 cursor-pointer'/>
          
          <Link to="/" className="hover:text-gray-300 text-[25px] pb-2.5 pt-2.5">Home</Link>
          <Link to="/register" className="hover:text-gray-300 text-[25px]">Registration</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
