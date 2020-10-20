import { types } from './types';

export const globalizedActions = {
    showNewTask: () => {
        return {
            type: types.GLOBALIZED_NEW_TASK,
        }
    },
    showSelectedTask: (payload) => {
        return {
            type: types.GLOBALIZED_SELECT_TASK,
            payload,
        }
    },
    hideTask: () => {
        return {
            type: types.GLOBALIZED_HIDE_TASK,
        }
    }
}