const mongoose = require("mongoose");

const historySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    workouts: [
      {
        workout: {
          type:mongoose.Schema.Types.ObjectId,
          ref: 'defaultWorkouts',
          complete: {
            type: Boolean,
            default: false
          }
        },
        completed:{
          pushups: {
            type: Number,
            default: 0,
          },
          situps: {
            type: Number,
            default: 0,
          },
          squats: {
            type: Number,
            default: 0,
          },
          burpees: {
            type: Number,
            default: 0,
          },
          jumpingJacks: {
            type: Number,
            default: 0,
          },
          pullups: {
            type: Number,
            default: 0,
          },
        },
        date:{
          type: Date,
          default: Date.now
        }
      }
    ]
  }
)

module.exports = mongoose.model("history", historySchema)