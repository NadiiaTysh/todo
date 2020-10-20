import {combineReducers} from 'redux';

//Reducers
import {taskReducer as task} from '../bus/taskCard/reducer';
import {listReducer as list} from '../bus/taskList/reducer';
import {globalizedReducer as globalized} from '../bus/globalized/reducer';

export const rootReducer = combineReducers({
    task,
    list,
    globalized,
});