import { types } from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
}

export const listReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.LIST_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.LIST_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.LIST_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                data: null,
            };
        case types.LIST_FILL:
            return {
                ...state,
                data: payload.reverse(),
                error: null,
            };
        default:
            return state;
    }
}