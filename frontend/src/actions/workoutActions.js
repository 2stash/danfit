import axios from "axios";
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

export const listWorkouts = () => async (dispatch) => {
  try {
    dispatch({ type: WORKOUT_LIST_REQUEST });
    const { data } = await axios.get("/api/workouts");

    dispatch({
      type: WORKOUT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WORKOUT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listWorkout = (id) => async (dispatch) => {
  try {
    dispatch({ type: WORKOUT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/workouts/${id}`);
    dispatch({
      type: WORKOUT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WORKOUT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const startWorkout = (current, name) => async (dispatch) => {
  console.log(name)
  try {
    dispatch({
      type: WORKOUT_UPDATE_START,
      payload: {current, name},
    });
  } catch (error) {
    
  }
};

export const trackWorkoutProgress = (current) => async (dispatch) => {
  try {
    dispatch({
      type: WORKOUT_UPDATE_PROGRESS,
      payload: {current},
    });
  } catch (error) {
    
  }
};



export const completeWorkout = () => async (dispatch) => {
  try {
    dispatch({
      type: WORKOUT_UPDATE_COMPLETE,
    });
  } catch (error) {
    
  }
};
