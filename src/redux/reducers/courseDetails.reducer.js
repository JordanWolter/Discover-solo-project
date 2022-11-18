const courseDetailsReducer = (state = 0, action) => {
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@', action.payload)
      switch (action.type) {
        case 'SET_COURSE_DETAILS':
          return action.payload;
        default:
          return state;
      }
    };
    
    // user will be on the redux state at:
    // state.user
    export default courseDetailsReducer;