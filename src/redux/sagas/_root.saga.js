import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import courseSaga from './course.saga';
import coordsSaga from './coords.saga';
import weatherSaga from './weather.saga';
import courseDetailsSaga from './courseDetails.saga';
import courseImagesSaga from './courseImages.saga';
import holeSaga from './hole.saga';
import holeScore from './holeScore.saga';
import gameIdSaga from './game.saga';
import roundHistorySaga from './roundHistory.saga';
import historyIdSaga from './historyId.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    courseSaga(),
    coordsSaga(),
    weatherSaga(),
    courseDetailsSaga(),
    courseImagesSaga(),
    holeSaga(),
    holeScore(),
    gameIdSaga(),
    roundHistorySaga(),
    historyIdSaga(),
  ]);
}
