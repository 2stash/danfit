const linkedlist = require('./linkedlist')


const createWorkout = (workout) => {

  const exerciseLength = workout.exercises.length;
  const sets = workout.sets;

  let workoutProgram = new linkedlist();
  let exercise = "";
  let reps = 0;

  for (let i = 0; i < sets; i++) {
    for (let j = 0; j < exerciseLength; j++) {
      exercise = workout.exercises[j];
      reps = workout[exercise];
      workoutProgram.push(reps, exercise);
    }
  }

  return workoutProgram;
};

module.exports = createWorkout;