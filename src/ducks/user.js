const CREATE_USER = "CREATE_USER";

var initialState = {
  username: "kaleck",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
      };

    default:
      return state;
  }
}

function createUser(username, id) {
  return {
    type: CREATE_USER,
    payload: { username, id },
  };
}
export { createUser };
