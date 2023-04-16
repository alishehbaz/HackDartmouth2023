import { ActionTypes } from '../actions';

const initialState = {
  prompts: [],
  characters: [],
  outline: [],
  suggestion: '',
  stories: [],
};

const ResponseReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_RESPONSE:
      return { prompts: action.payload };
    case ActionTypes.SEND_PROMPT:
      return { prompts: [...initialState.prompts], characters: action.payload.characters, suggestion: action.payload.sugggestion };
    case ActionTypes.PUBLISH:
      return initialState;
    case ActionTypes.REFRESH_OUTLINE:
      return {
        outline: action.payload, prompts: [...initialState.prompts], characters: [...initialState.characters], suggestions: [...initialState.suggestions],
      };
    case ActionTypes.FETCH_STORIES:
      return {
        stories: action.payload, prompts: [...initialState.prompts], characters: [...initialState.characters], suggestions: [...initialState.suggestions], outline: [...initialState.outline],
      };
    default:
      return state;
  }
};

export default ResponseReducer;
