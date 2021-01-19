const mongoose = require("mongoose");

const workoutDatabaseSchema = mongoose.Schema(
  {
    workouts: [defaultWorkoutSchema]
  }
)

modules.export = mongoose.model("workoutDatabase", workoutDatabaseSchema)