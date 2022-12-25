import { all } from 'redux-saga/effects';
import homeSaga from '../../containers/home/saga';

export default function* rootSaga() {
  yield all([homeSaga()]);
}
