const express = require("express")
const router = express.Router()
const {getWorkouts, getWorkoutById} = require('../controllers/workoutController')

router.route("/" ).get(getWorkouts)
router.route("/:id").get(getWorkoutById)

module.exports = router
