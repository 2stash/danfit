import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer"
import Workouts from "./components/workouts/Workouts";
import YourWorkout from "./components/workouts/YourWorkout";

const App = () => {
  return (
    <Router>
      <Header />
      <div className='bg-gradient-to-r from-start to-end'>
            <Switch>
              <Route path='/workouts/:id' component={YourWorkout} />
              <Route path='/workouts' component={Workouts} />
              <Route path='/' component={HomeScreen} />
            </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
