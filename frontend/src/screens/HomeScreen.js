import React from "react";
import Button from "../components/ui/Button";

import { Link } from "react-router-dom";
import womanWorking from "../images/woman-working-home.jpg";

const HomeScreen = () => {
  return (
    <div className='xl:h-screen'>
      {/* hero text and hero cards wrapper*/}
      <div className='flex flex-col items-center'>
        <div className='text-center'>
          <p className='text-white p-4 text-4xl '>
            Complete a workout throughout the day!
          </p>
          <p className='mt-3 p-4 text-2xl text-gray-700'>
            Get it done at work where you should be taking healthy breaks!
          </p>
        </div>

        {/* contains both hero cards */}
        <div className='flex flex-col items-center md:flex-row'>
          {/* hero left */}
          <div className='bg-white bg-opacity-75 .filter rounded-md h-48 w-4/5 text-center flex flex-col text-lg md:m-8'>
            <div className='flex-1'>
              <p className='p-2'>
                Pick a pre-built workout and start making improvements to your
                health
              </p>
            </div>
            <Link to='/workouts'>
              <Button styles='w-52 mb-4 bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-700'>
                Search Workouts
              </Button>
            </Link>
          </div>

          {/* hero right */}
          <div className='bg-white mt-8 bg-opacity-75 .filter rounded-md h-48 w-4/5 text-center flex flex-col text-lg md:m-8'>
            <div className='flex-1 p-2'>
              <p className='mr-auto'>Sign up to...</p>
              <p className='text-center'>create custom workouts</p>
              <p className='text-center'>track your progress</p>
              <p className='text-center'>compete against friends</p>
            </div>
            <Link>
              <Button styles='w-52 mb-4 bg-green-500 hover:bg-green-400 active:bg-green-700'>
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className=''>
        {/* how it works banner */}
        <div className='bg-white mt-8 h-20 text-3xl flex items-center justify-center'>
          <h2>How it works</h2>
        </div>

        {/* cards wrapper */}
        <div className="max-w-screen-xl w-full mx-auto px-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                
        {/* how it works card */}
          <div className='bg-white bg-opacity-75 .filter rounded-md h-44 mt-8 mx-4 p-4 flex items-center justify-around'>
            <div className='w-50'>
              <svg
                className='fill-current text-green-600 h-32 w-32'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                <path
                  fillRule='evenodd'
                  d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='w-50'>
              <p className='text-2xl'>Pick a bodyweight workout</p>
            </div>
          </div>


        {/* how it works card */}
          <div className='bg-white bg-opacity-75 .filter rounded-md h-44 mt-8 mx-4 p-4 flex items-center justify-around'>
            <div className='w-50'>
              <svg
                className='fill-current text-green-600 h-32 w-32'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='w-50'>
              <p className='text-2xl'>Get reminders to complete a set</p>
          </div>
        </div>

        {/* how it works card */}
          <div className='bg-white bg-opacity-75 .filter rounded-md h-44 mt-8 mx-4 p-4 flex items-center justify-around'>
            <div className='w-50'>
              <svg
                className='fill-current text-green-600 h-32 w-32'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
                />
              </svg>
            </div>
            <div className='w-50'>
              <p className='text-2xl'>Track your progress</p>
          </div>
        </div>

        {/* how it works card */}
          <div className='bg-white bg-opacity-75 .filter rounded-md h-44 mt-8 mx-4 p-4 flex items-center justify-around'>
            <div className='w-50'>
              <svg
                className='fill-current text-green-600 h-32 w-32'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='w-50'>
              <p className='text-2xl'>Become healthier</p>
          </div>
        </div>

        </div>
      </div>
   </div>
  );
};

export default HomeScreen;
