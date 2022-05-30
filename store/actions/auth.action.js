import { insertAuth, fetchAuth, deleteAuth } from "../../db/index";
export const AUTH = "AUTH";
export const LOAD_AUTH = "LOAD_AUTH";
export const DELETE_AUTH = "DELETE_AUTH";

export const authAction = (userName, token, email) => {
  return async (dispatch) => {
    try {
      const auth = await insertAuth(userName, token, email);
      dispatch({ type: AUTH, data: { userName, token, email } });
    } catch (error) {
      throw error;
    }
  };
};

export const loadAuth = () => {
  return async (dispatch) => {
    try {
      const result = await fetchAuth();

      if (result.rows.length == 1) {
        const data = result.rows._array[0];
        dispatch({ type: AUTH, data: data });
      }
    } catch (error) {
      throw error;
    }
  };
};

export const authDelete = (userName, token, email) => {
  return async (dispatch) => {
    try {
      const auth = await deleteAuth();
      dispatch({ type: DELETE_AUTH });
    } catch (error) {
      throw error;
    }
  };
};
