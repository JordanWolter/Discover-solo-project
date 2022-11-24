const editDiscReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_DISC':
            return action.payload;
        case 'UPDATE_EDIT_DISC':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    };
};

export default editDiscReducer;