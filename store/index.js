import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//reducers
// import PetsReducer from "./reducers/pets.reducer";
import AuthReducer from "./reducers/auth.reducer";
import UserReducer from "./reducers/user.reducer";

const RootReducer = combineReducers({
  // pets: PetsReducer,
  auth: AuthReducer,
  user: UserReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
