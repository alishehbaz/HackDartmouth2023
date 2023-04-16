import { ActionTypes } from '../actions';

const initialState = {
  prompts: [],
};

const ResponseReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_RESPONSE:
      console.log(action.payload);
      return { current: { ...initialState.current }, all: action.payload };
    default:
      return state;
  }
};

export default ResponseReducer;
