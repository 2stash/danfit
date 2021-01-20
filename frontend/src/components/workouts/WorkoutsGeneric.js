import React, {useEffect} from "react"
import { useDispatch, useSelector} from 'react-redux'
import {listWorkouts } from '../../actions/workoutActions'
import WorkoutCard from './WorkoutCard'
import Spinner from '../ui/Spinner'

const WorkoutsGeneric = () => {
  const dispatch = useDispatch()

  const workoutList = useSelector( state => state.workoutList )
  const {loading, error, workouts} = workoutList

  useEffect(()=> {
    console.log('useeffect')
    dispatch(listWorkouts())
  }, [dispatch])

  return (
    <div>
    <div className="text-center text-white pt-8 mx-4">
      <h2 className="text-4xl" >Pick a prebuilt workout and get started right away</h2>
      <p className="text-gray-800 text-2xl p-2 m-2">Complete it all at once, or a few minutes every hour on your break!</p>
      </div>
    <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:items-start xl:h-screen">
      {loading ? <Spinner /> : error ? <h3>{error}</h3> :(workouts.map((workout,idx) => (

          <WorkoutCard key={workout._id} title={workout._id} data={workout}></WorkoutCard>

      )))}

    </div>
    </div>
  );
};

export default WorkoutsGeneric;
        {/* <div key={idx} className="m-2" > */}
                {/* </div> */}