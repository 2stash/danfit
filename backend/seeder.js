const mongoose = require('mongoose')
const dotenv = require('dotenv')

const users = require('./data/users')
const workouts = require('./data/workoutDataCopy')

const User = require('./models/userModel.js')
const Workout = require('./models/defaultWorkoutModel')
const History = require('./models/historyModel')

const connectDB = require('./config/db')

dotenv.config()
connectDB()

const importData = async() => {
  try {
    await User.deleteMany()
    await Workout.deleteMany()
    await History.deleteMany()

    await User.insertMany(users)
    await Workout.insertMany(workouts)

    console.log('Data Imported')
    process.exit()
  } catch (error) {
      console.error(error.message)
      process.exit(1)
  }
}


const destroyData = async() => {
  try {
    await User.deleteMany()
    await Workout.deleteMany()
    await History.deleteMany()

    console.log('Data Destroy')
    process.exit()
  } catch (error) {
      console.error(error.message)
      process.exit(1)
  }
}

if(process.argv[2] === '-d'){
  destroyData()
} else {
  importData()
}
