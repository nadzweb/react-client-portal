import { combineReducers } from 'redux';
import project from './project_reducer';

const appReducers = combineReducers({
    project
});

export default appReducers;