import { FETCH_VALUE, FETCH_DEL_VALUE } from "./actionTypes";

const defaultState = {
  list: ["健身", "游泳", "跑步", "俯卧撑"],
  inputValue: "",
};

export default (state = defaultState, action) => {
  let useState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case FETCH_VALUE:
      return {
        ...useState,
        list: [...useState.list, action.payload],
      };
    case FETCH_DEL_VALUE:
      useState.list.splice(action.payload, 1);
      return {
        ...useState,
      };
    default:
      return state;
  }
};
