import {
  WORKOUT_LIST_REQUEST,
  WORKOUT_LIST_SUCCESS,
  WORKOUT_LIST_FAIL,
  WORKOUT_DETAILS_REQUEST,
  WORKOUT_DETAILS_SUCCESS,
  WORKOUT_DETAILS_FAIL,
  WORKOUT_UPDATE_PROGRESS,
  WORKOUT_UPDATE_COMPLETE,
  WORKOUT_UPDATE_START
} from "../constants/workoutConstants";

export const workoutListReducer = (state = { workouts: [] }, action) => {
  switch (action.type) {
    case WORKOUT_LIST_REQUEST:
      return { loading: true, workouts: [] };
    case WORKOUT_LIST_SUCCESS:
      return { loading: false, workouts: action.payload };
    case WORKOUT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const workoutDetailsReducer = (state = { workout: {} }, action) => {
  switch (action.type) {
    case WORKOUT_DETAILS_REQUEST:
      return { loading: true, ...state};
    case WORKOUT_DETAILS_SUCCESS:
      return { loading: false, workout: action.payload };
    case WORKOUT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const yourCurrentWorkoutReducer = (state = { workout: null, inprogress: false, completed: false, name:'' }, action) => {
  switch (action.type) {
    case WORKOUT_UPDATE_START:
      return { ...state, workout: action.payload.current, inprogress:true, name: action.payload.name };
    case WORKOUT_UPDATE_PROGRESS:
      return { ...state, workout: action.payload.current, inprogress:true };
    case WORKOUT_UPDATE_COMPLETE:
      return {...state, inprogress:false, completed: true};
    default:
      return state;
  }
};
