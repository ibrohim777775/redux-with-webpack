import * as actions from "./actionTypes";

var startId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case actions.addUser:
      return [
        ...state,
        {
          id: ++startId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.removeUser:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.updateUser:
      return state.map((bug) => {
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true };
      });

    default:
      return state;
  }

}

export default reducer;