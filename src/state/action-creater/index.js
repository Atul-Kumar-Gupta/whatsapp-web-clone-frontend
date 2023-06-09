import { getInfo } from "../../actions/user";

export const connect = (connection_id) => {
    return (dispatch) => {
        dispatch({
            type: 'connect',
            payload: connection_id
        })
    }
}
export const updateDetails = () => async (dispatch) => {
    const response = await getInfo();
    dispatch({
        type: 'update_my_details',
        payload: response.result


    })
}

export const updateSocketConnection = (socket) => (dispatch) => {
    dispatch({
        type: 'update_socket_connection',
        payload: socket

    })
}

export const updateChatWindowUser = (mobile) => (dispatch) => {
    debugger
    dispatch({
        type: 'update_current_chat_user',
        payload: mobile

    })
}