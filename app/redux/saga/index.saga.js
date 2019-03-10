import { fork } from 'redux-saga/effects';
import nyt from './nyt.saga';

export default function*() {
  yield fork(nyt);
}
