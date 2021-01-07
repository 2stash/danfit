import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

const WorkoutCard = ({ data, title }) => {

  return (
    <Card className={"my-3 p-3 rounded"}>
      <Card.Body>
        <Card.Title className={"mx-1 p-1"}>{title}</Card.Title>
        <Card.Text>{data.sets} sets of</Card.Text>
        {data.exercises.map((exercise) => (
          <div>
            <span>
              {exercise} {data[exercise]} reps - total:{" "}
              {data.sets * data[exercise]}
            </span>
          </div>
        ))}
        <Link to={`/workouts/${title}`} ><Button>Start Workout</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default WorkoutCard;
