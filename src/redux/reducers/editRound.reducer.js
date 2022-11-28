const editRoundReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EDIT_ROUND':
            return action.payload;
        case 'UPDATE_EDIT_ROUND':
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state;
    };
};

export default editRoundReducer;