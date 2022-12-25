import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR, HOME_LOADING } from './constant';

export function getData() {
  return {
    type: GET_DATA
  };
}

export function getDataError() {
  return {
    type: GET_DATA_ERROR
  };
}

export function getDataSucces(data) {
  return {
    type: GET_DATA_SUCCESS,
    data: data
  };
}

export function homeLoading() {
  return {
    type: HOME_LOADING
  };
}
