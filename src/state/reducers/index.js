import { combineReducers } from 'redux';
import connectionReducer from './connectionReducer';
import infoReducer from './infoReducer';
import updateSocketConnection from './socketConnection';
import chatWindow from './chatWindow'
const reducers = combineReducers({
    connect: connectionReducer,
    info: infoReducer,
    updateSocketConnection: updateSocketConnection,
    changeChatWindow: chatWindow
})
export default reducers