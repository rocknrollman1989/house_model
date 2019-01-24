import { DATA_IS_FETCHING, DATA_SUCCESS, DATA_LOAD_ERROR } from '../lib/actionTypes';

const initialState = {
    isFetching: false,
    buildingsData: null,
    fetchingError: false

};

const rootReduser = (state = initialState, action) => {

    switch (action.type) {
        case DATA_IS_FETCHING:
        return {
            ...state,
            isFetching: true
        };
        case DATA_SUCCESS:
        return {
            ...state,
            isFetching: false,
            buildingsData: action.data.data,
        };
        case DATA_LOAD_ERROR:
        return {
            ...state,
            isFetching: false,
            fetchingError: true
        }
        default: break;
  }
    return state;
};

export default rootReduser;
