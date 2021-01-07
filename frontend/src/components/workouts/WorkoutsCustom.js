import React, { useState } from "react";

import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from "react-bootstrap";

const initialState = {
  sets: 5,
  // pushups: ,
  situps: 20,
  squats: 100,
  jumpingjacks: 100,
  burpees: 100,
  pullups: 20,
};

const Workouts = () => {
  const [state, updateState] = useState(initialState);

  const handleUpdate = (e) => {
    const newState = state;
    newState[e.target.name] = e.target.value
    // updateState(state => ({...state, state[e.target.name]: e.target.value}))
    console.log(e.target)
    console.log(newState)
    console.log(state)

  }
  return (
    <div>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
        <InputGroup.Checkbox aria-label='Checkbox for following text input' />
        <InputGroup.Text >PushUps</InputGroup.Text>
 
        </InputGroup.Prepend>
        <FormControl name="pushups" aria-label='Text input with checkbox' value={state.pushups} onChange={handleUpdate} type="number" />
        
      </InputGroup>
    </div>
  );
};

export default Workouts;
