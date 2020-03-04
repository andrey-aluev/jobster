const SET_MESSAGE = 'SET_MESSAGE';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

const initialState = {
  message: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_MESSAGE: {
      return {
        ...state,
        message: action.message
      }
    }

    case CLEAR_MESSAGE: {
      return {
        ...state,
        message: null
      }
    }

    default:
      return state
  }
};

const messageAdd = (message) => {
  return {
    type: SET_MESSAGE,
    message
  };
};

const messageClear = () => {
  return {
    type: CLEAR_MESSAGE,
  };
};

export const addMessage = (message) => dispatch => {
  dispatch(messageAdd(message));
};

export const clearMessage = () => dispatch => {
  dispatch(messageClear());
};

export default appReducer;
