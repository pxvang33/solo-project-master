const playerReducer = (state = [], action) => {
    if (action.type === 'SET_PLAYER') {
        return action.payload
    }
    return state;
}

export default playerReducer;