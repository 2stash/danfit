const asyncHandler = require("express-async-handler");
const Workout = require("../models/defaultWorkoutModel");
const createWorkout = require("../data/createWorkout");

// @desc Fetch all workouts
// @route Get /api/products
// @access Public
const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
});

// @desc Fetch single workout by _id
// @route Get /api/products/:id
// @access Public
const getWorkoutById = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (workout) {
    const workoutLL = await createWorkout(workout);
    res.json(workoutLL);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {getWorkouts,getWorkoutById }