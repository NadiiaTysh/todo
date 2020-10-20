// Types
import { types } from './types';

const initialState = {
    data: {},
    isFetching: false,
    error: null,
};

export const taskReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.TASK_ADD:
            return {
                ...state,
                data: payload,
            };
        case types.TASK_EDIT:
            return {
                ...state,
            data: payload,
            };
        case types.TASK_REMOVE:
            return {
                ...state,
            }
        case types.TASK_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.TASK_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.TASK_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                data: null,
            };

        default:
            return state;
    };
};