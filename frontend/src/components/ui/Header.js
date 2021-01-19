import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3'>
      <div className='flex items-center justify-between px-4 py-2 sm:p-0'>
        <div className='text-white'>
        <Link to="/">
          <h2 className='text-2xl'>DanFit</h2>
        </Link>
        </div>
        <div className='sm:hidden'>
          <button
            type='button'
            className='block text-gray-500 hover:text-white focus:text-white focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className='h-6 w-6 fill-current fill-blue' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                />
              </svg>
            ) : (
              <svg className={"h-6 w-6 fill-current fill-blue"} viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`px-3 pt-2 pb-4 sm:flex sm:p-0 ${isOpen ? "" : "hidden"} `}>
        <Link
          to='/workouts'
          className='block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded'
        >
          Workouts
        </Link>
        <Link
          to='/about'
          className='block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded sm:ml-2'
        >
          About
        </Link>
        <Link
          to='/login'
          className='block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded sm:ml-2'
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
