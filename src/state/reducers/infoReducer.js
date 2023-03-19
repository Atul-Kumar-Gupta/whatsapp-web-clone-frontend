const reducer = (state = null, action) => {
    if (action.type === 'update_my_details') {
        state = action.payload
        return state

    }
    else {
        return state
    }

}
export default reducer  