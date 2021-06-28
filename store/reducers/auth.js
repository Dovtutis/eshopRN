export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

const initialState = {
  token: null,
  id: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        userId: action.userId,
      };
    case SIGNUP:
      return {
        token: action.token,
        userId: action.userId,
      };
    default:
      return state;
  }
};
