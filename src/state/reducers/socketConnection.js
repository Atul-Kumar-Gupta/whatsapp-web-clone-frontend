const reducer = (state = null, action) => {
    if (action.type === 'update_socket_connection') {
        state = action.payload
        return state
    }
    else {
        return state
    }
}
export default reducer  