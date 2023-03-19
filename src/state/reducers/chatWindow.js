const reducer = (state = null, action) => {
    if (action.type === 'update_current_chat_user') {
        state = action.payload
        return state
    }
    else {
        return state
    }
}
export default reducer  