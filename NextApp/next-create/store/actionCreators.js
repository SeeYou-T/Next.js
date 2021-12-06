import { FETCH_VALUE, FETCH_DEL_VALUE } from "./actionTypes";

export const fetchValueAction = (payload) => ({
  type: FETCH_VALUE,
  payload,
});
export const fetchDelValueAction = (payload) => ({
  type: FETCH_DEL_VALUE,
  payload,
});
