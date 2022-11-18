import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* courseDetailsSaga(){
    yield takeLatest('FETCH_COURSE_DETAILS', fetchCourseDetails);
};

function* fetchCourseDetails(action){

    // console.log('##################action.payload', action.payload);

    try {
        
        yield put({ type: 'SET_COURSE_DETAILS', payload: action.payload });
        
    } catch (error) {
        
    }
}

export default courseDetailsSaga;