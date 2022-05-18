const initialState = {
  userLocation: {
    lat: null,
    lng: null,
  },
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_UBICATION":
      state.userLocation.lat = action.coords.lat;
      state.userLocation.lng = action.coords.lng;
      return state;
    case "REMOVE_UBICATION":
      state.userLocation.lat = null;
      state.userLocation.lng = null;
      return state;
    default:
      return state;
  }
}