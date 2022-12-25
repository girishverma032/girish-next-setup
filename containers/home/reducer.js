import {
    GET_DATA_SUCCESS,
    GET_DATA_ERROR,
    HOME_LOADING
} from './constant';

export const initialState = {
    data: {},
    loading: false
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                loading: false
            };
        case HOME_LOADING:
            return {
                ...state,
                loading: !state.loading
            };
        default:
            return state;
    }
}

export default homeReducer;
