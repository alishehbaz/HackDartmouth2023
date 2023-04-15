import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_RESPONSE: 'FETCH_RESPONSE',
};

export const ROOT_URL = 'https://localhost:3000';
export const API_KEY = '/generate_initial_prompts';

export function fetchResponse() {
  const userInput = ["bird", "song", "timberdoodle"];
  return (dispatch) => {
    // getting list of posts from database
    axios.get(`${ROOT_URL}/${API_KEY}?=${userInput}`)
      .then((response) => {
        // dispatching action with post data
        dispatch({ type: ActionTypes.FETCH_RESPONSE, payload: response.data });
      })
      .catch((error) => {
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
