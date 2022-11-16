import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* courseHoleSaga(){
    yield takeLatest('FETCH_HOLES', fetchCourseHoles);
};

function* fetchCourseHoles(action){

    //console.log('action.payload', action.payload.lat);

    try {
        const holes = yield axios.get(`/api/holes/${action.payload}`);

        //console.log('map', map);

        yield put({ type: 'SET_HOLES', payload: holes.data });
        
    } catch (error) {
        
    }
}

export default courseHoleSaga;