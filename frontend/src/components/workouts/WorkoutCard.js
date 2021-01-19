import React from "react";
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

const WorkoutCard = ({ data, title }) => {

  return (
    <div className="my-3 p-3 rounded bg-white">
      <div>
        <div className={"mx-1 p-1"}>{title}</div>
        <div>{data.sets} sets of</div>
        {data.exercises.map((exercise) => (
          <div>
            <span>
              {exercise} {data[exercise]} reps - total:{" "}
              {data.sets * data[exercise]}
            </span>
          </div>
        ))}
        <Link to={`/workouts/${title}`} ><Button styles="bg-indigo-500">Start Workout</Button></Link>
      </div>
    </div>
  );
};

export default WorkoutCard;
