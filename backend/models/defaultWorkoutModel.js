const mongoose = require("mongoose");

const defaultWorkoutSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sets: {
    type:Number,
  },
  pushups: {
    type: Number,
  },
  situps: {
    type: Number,
  },
  squats: {
    type: Number,
  },
  burpees: {
    type: Number,
  },
  jumpingjacks: {
    type: Number,
  },
  pullups: {
    type: Number,
  },
  exercises:[{
     type: String
    }
  ],
});

module.exports = mongoose.model("defaultWorkouts", defaultWorkoutSchema);
