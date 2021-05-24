import * as actions from "./actionTypes";

export const userAdded = (description) => ({
  type: actions.addUser,
  payload: {
    ...description,
  },
});

export const userRemoved = (id) => ({
  type: actions.removeUser,
  payload: {
    id,
  },
});