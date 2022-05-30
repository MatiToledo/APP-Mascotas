const initialState = {
  userName: null,
  token: null,
  email: null,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        token: action.data.token,
        email: action.data.email,
        userName: action.data.userName,
      };
    case "DELETE_AUTH":
      return {
        ...state,
        token: null,
        email: null,
        userName: null,
      };
    default:
      return state;
  }
}
