import { combineReducers } from 'redux';
import connectionReducer from './connectionReducer';
import infoReducer from './infoReducer';

const reducers = combineReducers({
    connect: connectionReducer,
    info: infoReducer
})
export default reducers