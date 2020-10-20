import { types } from './types';
import { api } from '../../api/index';

export const listActions = {
    startFetching: () => {
        return {
            type: types.LIST_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.LIST_STOP_FETCHING,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.LIST_SET_FETCHING_ERROR,
            payload: error,
            error: true,
        }
    },
    fillList: (payload) => {
        return {
            type: types.LIST_FILL,
            payload,
        }
    },


    getListFetch: () => async(dispatch) => {
        dispatch(listActions.startFetching());

        const response = await api.todos.getFetch();

        if (response.status === 200) {
            const {data} = await response.json();

            dispatch(listActions.fillList(data));
        } else {
            const error = {
                status: response.error,
            };

            dispatch(listActions.setFetchingError(error));
        }
        dispatch(listActions.stopFetching());
    }
};