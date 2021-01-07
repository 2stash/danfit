import React from "react";
import { CardGroup, Card, Button, Row, Col } from "react-bootstrap";
import WorkoutCard from './WorkoutCard'
import workouts from "./workoutData";

const WorkoutsGeneric = () => {
  return (
    <Row>
      {workouts.workouts.map((workout,idx) => (
        <Col sm={12} md={6} lg={4} xl={4}  key={idx} >
          <WorkoutCard title={workout} data={workouts[workout]}/>
        </Col>
      ))}
    </Row>
  );
};

export default WorkoutsGeneric;
