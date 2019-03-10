import { SET_NYT, SET_URL, SET_CONTENT } from '../action/action';
export const initialState = {
  nyt: [],
  url: '',
  content: 'home',
};

export default function setCandidates(state = initialState, action) {
  switch (action.type) {
    case SET_NYT:
      return {
        ...state,
        ...action.payload,
      };
    case SET_URL:
      return {
        ...state,
        url: action.payload,
      };
    case SET_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
}
