import * as Action from "./actionTypes";

export const getDataTest = () => dispatch => {
  try {
    const data = [
      { id: 1, chore: "clean room", day: "monday" },
      { id: 2, chore: "wash dishes", day: "monday" },
      { id: 3, chore: "take nap", day: "saturday" }
    ];
    dispatch({ data, type: Action.GET_ALL_DATA_TEST });
  } catch (e) {
    dispatch({ type: Action.GET_ALL_DATA_TEST_FAILURE });
  }
};

export const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};
