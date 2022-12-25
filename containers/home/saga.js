import {takeLatest, put} from 'redux-saga/effects';
import {GET_DATA} from "./constant";
import {getDataError, getDataSucces, homeLoading} from "./action";

const data = {
    name: 'girish'
}

export function* getRecordSaga() {
    yield put(homeLoading());
    try {
        yield put(getDataSucces(data));
    } catch (e) {
        yield
        yield put(getDataError());
    }

}


export default function* homeSaga() {
    yield takeLatest(GET_DATA, getRecordSaga)
}
