import { call, takeLatest, put } from 'redux-saga/effects';
import { map, get } from 'lodash';
import moment from 'moment';
import { push } from 'connected-react-router/immutable';
import { requestNytAll, requestNytSearch } from '../../api/apiRequest';
import {
  GET_ALL_NYT,
  GET_SEARCH_NYT,
  setNyt,
  setUrl,
  READ_MORE,
} from '../action/action';

const formatRes = items => {
  const id = get(items, '_id', null);
  const title = get(items, 'headline.main', '');
  const author = get(items, 'byline.original', '');
  const rawDate = get(items, 'pub_date', '');
  const date = moment(rawDate).format('MMM DD YYYY');
  const detail = get(items, 'lead_paragraph', '');
  const url = get(items, 'web_url', '');
  const formated = {
    id,
    title,
    detail,
    author,
    date,
    url,
  };
  return formated;
};

export function* fetchAllNyt({ payload = 'newest' }) {
  try {
    const response = yield call(requestNytAll, payload);
    const isSuccess = get(response, 'status', 500);
    if (isSuccess === 200) {
      const data = get(response, 'data', []);
      const allresults = get(data, 'response.docs', []);
      const resultToSetStore = map(allresults, formatRes);
      yield put(setNyt({ nyt: resultToSetStore }));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* fetchSearchNyt({ payload }) {
  try {
    const { sorted, search } = payload;
    const response = yield call(requestNytSearch, { sorted, search });
    const isSuccess = get(response, 'status', 500);
    if (isSuccess === 200) {
      const data = get(response, 'data', []);
      const allresults = get(data, 'response.docs', []);
      const resultToSetStore = map(allresults, formatRes);
      yield put(setNyt({ nyt: resultToSetStore }));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* readMore({ payload }) {
  try {
    yield put(setUrl(payload));
    yield put(push('detail'));
  } catch (error) {
    console.log(error);
  }
}

export default function* nyt() {
  yield takeLatest(GET_ALL_NYT, fetchAllNyt);
  yield takeLatest(GET_SEARCH_NYT, fetchSearchNyt);
  yield takeLatest(READ_MORE, readMore);
}
