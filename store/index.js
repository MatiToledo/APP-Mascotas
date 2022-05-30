import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//reducers
import AuthReducer from "./reducers/auth.reducer";
import PetReducer from "./reducers/pet.reducer";
import UserReducer from "./reducers/user.reducer";

const RootReducer = combineReducers({
  pets: PetReducer,
  auth: AuthReducer,
  user: UserReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
