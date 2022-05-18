import { AUTH } from "../../data/auth";

const initialState = {
  userName: null,
  token: null,
  email: null,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      state.email = action.authData.email;
      state.token = action.authData.token;
      state.userName = action.authData.userName;
      return state;
    default:
      return state;
  }
}
