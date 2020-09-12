import * as Action from "./actionTypes";
const initState = {
  coordinates: []
};
const Homepage = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_ALL_CORDINATES_SUCCESS:
      return {
        coordinates: action.coordinates
      };
    default:
      return state;
  }
};
// const reducer = (state = initState, action) => {
//   return state;
// };

export default Homepage;
