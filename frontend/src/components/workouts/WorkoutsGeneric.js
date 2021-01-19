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
    <div className="flex flex-col sm:flex-row sm:flex-wrap ">
      {loading ? <Spinner /> : error ? <h3>{error}</h3> :(workouts.map((workout,idx) => (
        <div key={idx} className="m-2" >
          <WorkoutCard key={workout._id} title={workout._id} data={workout}/>
        </div>
      )))}

    </div>
  );
};

export default WorkoutsGeneric;
