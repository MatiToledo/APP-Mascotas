import {
  deleteUserLocation,
  fetchUserLocation,
  insertUserLocation,
} from "../../db";
import { myPets } from "../../lib/api";

export const ADD_UBICATION = "ADD_UBICATION";
export const REMOVE_UBICATION = "REMOVE_UBICATION";
export const LOAD_UBICATION = "LOAD_UBICATION";
export const USER_PETS = "USER_PETS";

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
export const userPets = () => {
  return async (dispatch) => {
    try {
      const pets = await myPets(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzNjYzMDUzfQ.2F_SZk-dAkK8iCyCKW4vmfx2dmmTT2BazvDuzr8L1rs"
      );
      dispatch({ type: USER_PETS, data: pets });
    } catch (error) {
      throw error;
    }
  };
};
