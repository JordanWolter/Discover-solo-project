import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* courseImagesSaga(){
    yield takeLatest('FETCH_COURSE_IMAGES', fetchCourseImages);
};

function* fetchCourseImages(action){

    //console.log('action.payload', action.payload.lat);

    try {
        const images = yield axios.get(`/api/courseImages/${action.payload}`);
        //console.log('map', map);
        yield put({ type: 'SET_COURSE_IMAGES', payload: images.data });
        
    } catch (error) {
        
    }
}

export default courseImagesSaga;