import {
  deleteUserLocation,
  fetchUserLocation,
  insertUserLocation,
} from "../../db";

export const ADD_UBICATION = "ADD_UBICATION";
export const REMOVE_UBICATION = "REMOVE_UBICATION";
export const LOAD_UBICATION = "LOAD_UBICATION";

export const addUbication = (data) => {
  const { lat, lng } = data;
  return async (dispatch) => {
    try {
      const result = await insertUserLocation(lat, lng);
      console.log("ADD", result);
      dispatch({ type: ADD_UBICATION, coords: data });
    } catch (error) {
      throw error;
    }
  };
};

export const removeUbication = () => {
  return async (dispatch) => {
    try {
      const result = await deleteUserLocation();
      console.log(result);
      dispatch({ type: REMOVE_UBICATION });
    } catch (error) {
      throw error;
    }
  };
};

export const loadUbication = () => {
  return async (dispatch) => {
    try {
      const result = await fetchUserLocation();
      console.log("UPLOAD", result);
      // dispatch({ type: LOAD_UBICATION, coords: data });
    } catch (error) {
      throw error;
    }
  };
};
