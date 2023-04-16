import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// keys for actiontypes
export const ActionTypes = {
  FETCH_RESPONSE: 'FETCH_RESPONSE',
};

export const ROOT_URL = 'http://localhost:3000';
export const API_ENDPOINT1 = 'generate_initial_prompts';
export const API_ENDPOINT2 = 'generate_suggestions';

export function fetchResponse(wordlist, history) {
  const userInput = ['hello', 'world', 'friend'];
  return (dispatch) => {
    // getting list of posts from database
    axios.post(`${ROOT_URL}/${API_ENDPOINT1}`, userInput)
      .then((response) => {
        // dispatching action with post data
        history.push('/prompts');
        dispatch({ type: ActionTypes.FETCH_RESPONSE, payload: response.data });
      })
      .catch((error) => {
        history.push('/prompts');
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.FETCH_RESPONSE, error });
      });
  };
}

export function sendPrompt(title, description, history) {
  const promptID = uuidv4();
  const prompt = { title, description, promptID };
  return (dispatch) => {
    // getting list of posts from database
    axios.post(`${ROOT_URL}/${API_ENDPOINT2}`, prompt)
      .then((response) => {
        history.push('/storyboard');
        dispatch({ type: ActionTypes.FETCH_RESPONSE, payload: response.data });
      })
      .catch((error) => {
        history.push('/prompts');
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.FETCH_RESPONSE, error });
      });
  };
}
