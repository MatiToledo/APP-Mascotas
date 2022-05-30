import auth from "../reducers/auth.reducer";
import { petsAround } from "../lib/api";
export const LOG_IN = "LOG_IN";
export const PETS_NEAR = "PETS_NEAR";

export const petsNear = (lat, lng) => {
  return async (dispatch) => {
    try {
      const pets = await petsAround(lat, lng);
      dispatch({ type: PETS_NEAR, data: pets });
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
