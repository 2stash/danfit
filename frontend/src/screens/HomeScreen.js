import React from "react";
import { ListGroup } from 'react-router-dom'
import { Col, Row, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomeScreen = () => {
  return (
    <div className='text-center'>
      <h1 >Some stuff</h1>
      <Row className="mx-auto">
        <Col className='mx-4 mx-auto '>
          <Card className='my-3 p-3 rounded text-center mx-auto' style={{maxWidth:'400px'}}>
            <Card.Body>
              <Card.Title>Pick a Workout</Card.Title>
              <Card.Text>
                Pick a custom built work out and get started
              </Card.Text>
              <LinkContainer to="/workouts">
                <Button variant='success'>Search Workouts</Button>
              </LinkContainer>

            </Card.Body>
          </Card>
        </Col>

        {/* <Col  sm={12} md={6} lg={4} xl={3}>
          <Card className='my-3 p-3 rounded' style={{height: '250px'}}>
            <Card.Body>
              <Card.Title>Sign Up</Card.Title>
              <Card.Text>
                By signing up you can save your data and track your progress.
                You can even create and join teams to compete against your
                friends!
              </Card.Text>
              <LinkContainer to='/login'>
                <Button variant='danger'>Sign Up</Button>
              </LinkContainer>
  
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default HomeScreen;
