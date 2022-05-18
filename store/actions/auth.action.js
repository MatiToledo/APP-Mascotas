import auth from "../reducers/auth.reducer";
export const LOG_IN = "LOG_IN";

export const logIn = (data) => ({
  type: LOG_IN,
  authData: data,
});
