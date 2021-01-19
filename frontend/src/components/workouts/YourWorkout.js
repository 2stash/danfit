import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../ui/Spinner";
import CompletedWorkout from "./CompletedWorkout";
import { Button, Row, Col, Card } from "react-bootstrap";
import { listWorkout, startWorkout, trackWorkoutProgress, completeWorkout } from "../../actions/workoutActions";

const YourWorkout = ({ match }) => {
  const programName = match.params.id;
  const dispatch = useDispatch();
  const workoutDetails = useSelector((state) => state.workout);
  const theCurrentExercise = useSelector((state)=> state.yourCurrentWorkout)

  const { loading, error, workout } = workoutDetails;

  useEffect(() => {
    // Load selected workout
    dispatch(listWorkout(match.params.id));
  }, [dispatch, match]);

  const handleCompleteExercise = () => {
    let temp = theCurrentExercise.workout.next;
    if (temp === null) {
      dispatch(completeWorkout())
    } else {
      dispatch(trackWorkoutProgress(temp))
    }
  };

  const handleWorkoutStart = () => {
    dispatch(startWorkout(workout.head, programName))
  };

  return (
    <Col className='mx-auto'>
      <h2 className='text-center'>{programName} Workout</h2>
      {theCurrentExercise.workout === null ? (
        <button onClick={handleWorkoutStart}>Begin</button>
      ) : null}

      {loading === true ? (
        <Spinner />
      ) : theCurrentExercise.completed === false && theCurrentExercise.workout != null ? (
        <Row className=' mx-auto text-center'>
          <Col>
            <Card bg='success'>
              <Card.Body>
                <Card.Title>Current Exercise</Card.Title>
                <Card.Text as='span' className='mx-4'>
                  {theCurrentExercise.workout.exercise}
                </Card.Text>
                <Card.Text as='span' className='mx-4'>
                  {" "}
                  {theCurrentExercise.workout.reps}
                </Card.Text>
                <Button onClick={handleCompleteExercise}>Mark Complete</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        theCurrentExercise.completed === true && <CompletedWorkout workout={workout} />
      )}
    </Col>
  );
};

export default YourWorkout;
