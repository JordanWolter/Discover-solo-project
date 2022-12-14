import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import courses from './courses.reducer';
import coords from './coords.reducer';
import weather from './weather.reducer';
import courseDetails from './courseDetails.reducer';
import courseImages from './courseImages.reducer';
import holes from './holes.reducer';
import holeScore from './holeScore.reducer';
import gameId from './gameId.reducer';
import roundHistory from './history.reducer';
import scoreHistory from'./scoreHistory.reducer';
import disc from './disc.reducer';
import bag from './bag.reducer';
import editDisc from './editDisc.reducer';
import editRound from './editRound.reducer';
import favorite from './favorite.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  courses,
  coords,
  weather,
  courseDetails,
  courseImages,
  holes,
  holeScore,
  gameId,
  roundHistory,
  scoreHistory,
  disc,
  bag,
  editDisc,
  editRound,
  favorite,
});

export default rootReducer;
