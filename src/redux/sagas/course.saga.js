import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* courseSaga(){
    yield takeLatest('FETCH_COURSES', fetchCourse);
};

function* fetchCourse(action){

    //console.log('action.payload', action.payload.lat);

    try {
        const map = yield axios.get(`/api/course/${action.payload.lat}/${action.payload.lng}`, {data: action.payload.lat});
        //console.log('map', map);
        yield put({ type: 'SET_COURSES', payload: map.data });
        
    } catch (error) {
        
    }
}

export default courseSaga;