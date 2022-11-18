const holeScoreReducer = (state = [], action) => {
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@', action.payload)
    switch (action.type) {
        case 'SET_SCORE':
            return [...state, action.payload];
        case 'BACK_SCORE':
            state.pop();
            return [...state];
        case 'CLEAR_SCORE':
            state.splice(0, state.length);
            return [...state];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default holeScoreReducer;