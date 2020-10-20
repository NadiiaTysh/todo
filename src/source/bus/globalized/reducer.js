import { types } from './types';

const initialState = {
    isShownSelectedCard: false,
    isShownBlankCard: false,
    filteredData: null,
};

export const globalizedReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.GLOBALIZED_NEW_TASK:
            return {
                isShownBlankCard: true,
                isShownSelectedCard: false,
                filteredData: null,
            };
        case types.GLOBALIZED_SELECT_TASK:
            return {
                isShownBlankCard: false,
                isShownSelectedCard: true,
                filteredData: payload,
            }
        case types.GLOBALIZED_HIDE_TASK:
            return {
                isShownBlankCard: false,
                isShownSelectedCard: false,
            }
        default:
            return state;
    }
}