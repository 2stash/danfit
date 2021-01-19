const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const {notFound, errorHandler} = require('./middleware/errorMiddleware')

const workouts = require('./data/workoutData')
const createWorkout = require('./data/createWorkout')

const workoutRoutes = require('./routes/workoutRoutes')

connectDB();
dotenv.config()

const app = express();

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/workouts', workoutRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`))