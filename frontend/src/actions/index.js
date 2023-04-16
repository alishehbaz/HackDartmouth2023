import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_RESPONSE: 'FETCH_RESPONSE',
};

export const ROOT_URL = 'http://localhost:3000';
export const API_ENDPOINT = 'generate_initial_prompts';

export function fetchResponse() {
  const userInput = ['hello', 'world', 'friend'];
  return (dispatch) => {
    // getting list of posts from database
    axios.post(`${ROOT_URL}/${API_ENDPOINT}`, userInput)
      .then((response) => {
        // dispatching action with post data
        dispatch({ type: ActionTypes.FETCH_RESPONSE, payload: response.data });
      })
      .catch((error) => {
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.FETCH_RESPONSE, error });
      });
  };
}
