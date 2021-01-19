import React from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className='text-center max-w-md'>
      <h1>Complete a workout throughout the day!</h1>
      <p>No more hours of workingout</p>
      <div>
        <div className='bg-white mt-8 p-4 bg-opacity-75 .filter rounded-md'>
          <p>
            Pick a pre-built workout and start making improvements to your
            health{" "}
          </p>
          <Link to='/workouts'>
            <Button styles='bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-700'>
              Search Workouts
            </Button>
          </Link>
        </div>
        <div className='bg-white mt-8 p-4 bg-opacity-75 .filter rounded-md'>
          <p>Sign up to create custom workouts and track your progress!</p>
          <p>You can even create and join teams to compete against friends!</p>
          <Button styles='bg-green-500 hover:bg-green-400 active:bg-green-700'>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
