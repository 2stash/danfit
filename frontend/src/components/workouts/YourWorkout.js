import React, { useState, useEffect } from "react";
import CompletedWorkout from "./CompletedWorkout";

import { Button, Row, Col, Card } from "react-bootstrap";

import axios from 'axios'


const YourWorkout = ({ match }) => {
  const [currentExercise, setCurrentExercise] = useState();
  const [exerciseList, setExerciseList] = useState();
  const [loading, setLoading] = useState(true);
  const [workoutCompleted, setWorkoutCompleted] = useState(false);
 
  const programName = match.params.id;

  useEffect(() => {

    const fetchWorkout = async () => {
      const {data} = await axios.get(`/api/workouts/${programName}`)
      setExerciseList(data);
      setCurrentExercise(data.head);
      setLoading(false);

    }

    fetchWorkout()

    // const createWorkout = () => {
    //   console.log(sets)
    //   let workoutProgram = new linkedlist();
    //   let exercise = "";
    //   let reps = 0;

    //   for (let i = 0; i < sets; i++) {
    //     for (let j = 0; j < exerciseLength; j++) {
    //       exercise = workoutData[programName].exercises[j];
    //       reps = workoutData[programName][exercise];
    //       workoutProgram.push(reps, exercise);
    //     }
    //   }
    //   return workoutProgram;
    // };

    // const temp = createWorkout();

  }, [programName]);

  const handleCompleteExercise = () => {
    let temp = currentExercise.next;
    if (temp === null) {
      setWorkoutCompleted(true);
    } else {
      setCurrentExercise(temp);
    }
  };

  return (
    <Col className='mx-auto'>
      <h2 className='text-center'>{programName} Workout</h2>
      {workoutCompleted === false ? (
        currentExercise === "undefined" || loading === true ? (
          <p>Loading workout</p>
        ) : (
          <Row className=' mx-auto text-center'>
            <Col>
              <Card bg="success">
                <Card.Body>
                  <Card.Title>Current Exercise</Card.Title>
                  <Card.Text as='span' className="mx-4" >{currentExercise.exercise}</Card.Text>
                  <Card.Text as='span' className="mx-4"> {currentExercise.reps}</Card.Text>
                  <Button onClick={handleCompleteExercise}>Mark Complete</Button>
                </Card.Body>
              </Card>

              {/* <span>
              {currentExercise.exercise} {currentExercise.reps}
            </span>
            <Button onClick={handleCompleteExercise}>Completed</Button> */}
            </Col>
          </Row>
        )
      ) : (
        <CompletedWorkout workout={exerciseList} />
      )}
    </Col>
  );
};

export default YourWorkout;
