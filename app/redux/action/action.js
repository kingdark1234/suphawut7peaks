import { createAction } from 'redux-actions';

export const GET_ALL_NYT = 'GET_ALL_NYT';
export const GET_SEARCH_NYT = 'GET_SEARCH_NYT';
export const SET_NYT = 'SET_NYT';
export const SET_URL = 'SET_URL';
export const SET_CONTENT = 'SET_CONTENT';
export const READ_MORE = 'READ_MORE';

export const getNyt = createAction(GET_ALL_NYT);
export const getSearchNyt = createAction(GET_SEARCH_NYT);
export const setNyt = createAction(SET_NYT);
export const setUrl = createAction(SET_URL);
export const readMore = createAction(READ_MORE);
export const setContent = createAction(SET_CONTENT);
