import { api } from '../../api';
import { types } from './types';

export const taskActions = {
    // Sync
    addTask: (payload) => {
        return {
            type: types.TASK_ADD,
            payload,
        }
    },
    editTask: (payload) => {
        return {
            type: types.TASK_EDIT,
            payload,
        }
    },
    removeTask: () => {
        return {
            type: types.TASK_REMOVE,
        }
    },
    startFetching: () => {
        return {
            type: types.TASK_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.TASK_STOP_FETCHING,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.TASK_SET_FETCHING_ERROR,
            payload: error,
            error: true,
        }
    },

    // Async
    addTaskFetch: (payload) => async(dispatch) => {
        dispatch(taskActions.startFetching());

        const response = await api.todos.addFetch(payload);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(taskActions.addTask(data));
        } else {
            const error = {
                status: response.status,
            };
            dispatch(taskActions.setFetchingError(error));
        }
        dispatch(taskActions.stopFetching());
    },

    editTaskFetch: (payload, hash) => async(dispatch) => {
        dispatch(taskActions.startFetching());

        const response = await api.todos.editFetch(payload, hash);

        if (response.status === 200) {
            const {data} = await response.json();

            dispatch(taskActions.editTask(data));
        } else {
            const error = {
                status: response.status,
            };
            dispatch(taskActions.setFetchingError(error));
        }
        dispatch(taskActions.stopFetching());
    },

    removeTaskFetch: (hash) => async(dispatch) => {
        dispatch(taskActions.startFetching());

        const response = await api.todos.removeFetch(hash);

        if (response.status === 204) {
            dispatch(taskActions.removeTask());
        } else {
            const error = {
                status: response.status,
            };
            dispatch(taskActions.setFetchingError(error));
        }
        dispatch(taskActions.stopFetching());
    },
};