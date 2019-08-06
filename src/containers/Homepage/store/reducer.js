import * as Action from "./actionTypes";
const initState = {
  chores: []
};
const Homepage = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_ALL_DATA_TEST:
      return {
        chores: action.data
      };
    default:
      return state;
  }
};
// const reducer = (state = initState, action) => {
//   return state;
// };

export default Homepage;
