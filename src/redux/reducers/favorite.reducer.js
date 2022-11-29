const favoriteReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FAVORITE_LIST':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default favoriteReducer;