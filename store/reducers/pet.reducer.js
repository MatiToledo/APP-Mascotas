import { userPets } from "../actions/user.action";
const initialState = {
  petsAround: [],
  userPets: [],
};

export default function PetReducer(state = initialState, action) {
  switch (action.type) {
    case "PETS_NEAR":
      return { ...state, petsAround: action.data };

    case "USER_PETS":
      return { ...state, userPets: action.data };
    default:
      return state;
  }
}
