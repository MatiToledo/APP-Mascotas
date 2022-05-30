import { userPets } from "../actions/user.action";
const initialState = {
  userLocation: {
    lat: null,
    lng: null,
  },
  userPets: [],
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_UBICATION":
      return {
        ...state,
        userLocation: {
          lat: action.coords.lat,
          lng: action.coords.lng,
        },
      };
    case "REMOVE_UBICATION":
      return {
        ...state,
        userLocation: {
          lat: null,
          lng: null,
        },
      };
    case "USER_PETS":
      return {
        ...state,
        userPets: action.data,
      };
    default:
      return state;
  }
}
