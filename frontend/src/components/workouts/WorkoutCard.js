import React from "react";
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

const WorkoutCard = ({ data, title }) => {
  const th = "bg-blue-100 border text-left px-4 py-2 sm:px-8 sm:py-4 sm:text-xl"
  const td = "border px-4 py-2 sm:px-8 sm:py-4 sm:text-xl"
  return (
    <div className="my-3 p-3 rounded bg-white shadow-lg flex flex-col md:mx-4">
      <div className="flex-1">
        <div className="mx-1 p-1">
        <h2 className="text-2xl text-center sm:text-4xl">{title}</h2>
        </div>
        <div className="text-xl text-center text-gray-600">{data.sets} rounds of</div>

        <table className="table-auto">
        <thead>
          <tr>
            <th className={th}>Exercise</th>
            <th className={th}>Reps</th>
            <th className={th}>Total</th>
          </tr>
        </thead>
        <tbody>
        {data.exercises.map((exercise) => (
          <tr>
            <td className={td}>{exercise}</td>
            <td className={td}>{data[exercise]}</td>
            <td className={td}>{data.sets * data[exercise]}</td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
          <div className="text-center">
      <Link to={`/workouts/${title}`} ><Button styles="bg-indigo-500 mt-4 w-full">Start Workout</Button></Link>
      </div>
    </div>
  );
};

export default WorkoutCard;
