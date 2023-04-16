import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_RESPONSE: 'FETCH_RESPONSE',
  SEND_PROMPT: 'SEND_PROMPT',
  PUBLISH: 'PUBLISH',
  REFRESH_OUTLINE: 'REFRESH_OUTLINE',
  FETCH_STORIES: 'FETCH_STORIES',
  FETCH_PROMPTS: 'FETCH_PROMPTS',
  FETCH_CHARACTERS: 'FETCH_CHARACTERS',
};

export const ROOT_URL = 'http://localhost:3000';
export const API_ENDPOINT1 = 'generate_initial_prompts';
export const API_ENDPOINT2 = 'generate_suggestions';
export const API_ENDPOINT3 = 'generate_outline_from_paragraph';
export const API_ENDPOINT4 = 'publish_story';
export const API_ENDPOINT5 = 'stories';
export const API_ENDPOINT6 = 'characters';
export const API_ENDPOINT7 = 'prompts';

export function fetchResponse(wordlist, history) {
  return (dispatch) => {
    // getting list of posts from database
    axios.post(`${ROOT_URL}/${API_ENDPOINT1}`, wordlist)
      .then((response) => {
        console.log(response);
        // dispatching action with post data
        // history.push('/prompts');
        dispatch({ type: ActionTypes.FETCH_RESPONSE, payload: response.data });
      })
      .catch((error) => {
        // history.push('/prompts');
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.FETCH_RESPONSE, error });
      });
  };
}

export function sendPrompt(title, description, id, history) {
  const prompt = { title, description, id };
  return (dispatch) => {
    // getting list of posts from database
    axios.post(`${ROOT_URL}/${API_ENDPOINT2}`, prompt)
      .then((response) => {
        history.push('/storyboard');
        dispatch({ type: ActionTypes.SEND_PROMPT, payload: response.data });
      })
      .catch((error) => {
        history.push('/storyboard');
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.SEND_PROMPT, error });
      });
  };
}

export function refreshOutline(title, story) {
  const content = { title, story };
  return (dispatch) => {
    // getting list of posts from database
    axios.post(`${ROOT_URL}/${API_ENDPOINT3}`, content)
      .then((response) => {
        dispatch({ type: ActionTypes.REFRESH_OUTLINE, payload: response.data });
      })
      .catch((error) => {
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.REFRESH_OUTLINE, error });
      });
  };
}

export function publish(characters, story, title, history) {
  const content = { title, story };
  return (dispatch) => {
    // getting list of posts from database
    axios.post(`${ROOT_URL}/${API_ENDPOINT4}`, content)
      .then((response) => {
        history.push('/stories');
        dispatch({ type: ActionTypes.PUBLISH, payload: response.data });
      })
      .catch((error) => {
        history.push('/stories');
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.PUBLISH, error });
      });
  };
}

export function fetchStories() {
  return (dispatch) => {
    // getting list of posts from database
    axios.get(`${ROOT_URL}/${API_ENDPOINT5}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_STORIES, payload: response.data });
      })
      .catch((error) => {
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.FETCH_STORIES, error });
      });
  };
}

export function fetchCharacters() {
  return (dispatch) => {
    // getting list of posts from database
    axios.get(`${ROOT_URL}/${API_ENDPOINT6}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_CHARACTERS, payload: response.data });
      })
      .catch((error) => {
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.FETCH_CHARACTERS, error });
      });
  };
}

export function fetchPrompts() {
  return (dispatch) => {
    // getting list of posts from database
    axios.get(`${ROOT_URL}/${API_ENDPOINT7}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PROMPTS, payload: response.data });
      })
      .catch((error) => {
        // dispatching action with error data if failure
        dispatch({ type: ActionTypes.FETCH_PROMPTS, error });
      });
  };
}
