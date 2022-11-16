const coordsReducer = (state = {}, action) => {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@', action.payload)
    switch (action.type) {
      case 'SET_COORDS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default coordsReducer;