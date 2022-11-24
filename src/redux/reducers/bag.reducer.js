const bagReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_DISC':
        console.log(action.payload)
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default bagReducer;