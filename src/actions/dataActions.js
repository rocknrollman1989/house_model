import { fetchUrl } from '../lib/serverConstant';
import { DATA_IS_FETCHING, DATA_SUCCESS, DATA_LOAD_ERROR } from '../lib/actionTypes';
import axios from 'axios';

const fetchingData = () => {
    return {
        type: DATA_IS_FETCHING
    };
};

const fetchingSuccess = (data) => {
    return {
        type: DATA_SUCCESS,
        ...data
    };
};
const fetchingError = () => {
    return {
        type: DATA_LOAD_ERROR
    };
};


export const fetchDataFromServer = () => {
    return (dispatch) => {
        dispatch(fetchingData());
        axios.get(fetchUrl)
        .then((data) => {
            dispatch(fetchingSuccess(data));
        })
        .catch((error) => {
            dispatch(fetchingError());
            console.log(error);
        });
    };
};
