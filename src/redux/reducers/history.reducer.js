const historyReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'SET_ROUND_HISTORY':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default historyReducer;