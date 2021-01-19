import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import HomeScreen from "./screens/HomeScreen";
import Header from "./components/ui/Header";
import Workouts from "./components/workouts/Workouts";
import YourWorkout from "./components/workouts/YourWorkout"

const App = () => {
  return (
    <Router>
      <Header />
      <div className="bg-gradient-to-r from-start to-end">
      <div className="container flex justify-center mx-auto p-5 ">
        <main className='py-3'>
        <Switch>
          <Route path='/workouts/:id' component={YourWorkout}/>
          <Route path='/workouts' component={Workouts} />
          <Route path='/' component={HomeScreen}  />
        </Switch>
        </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
