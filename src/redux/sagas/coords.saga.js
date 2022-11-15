import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* coordsSaga(){
    yield takeLatest('FETCH_COORDS', fetchCoords);
};

function* fetchCoords(action){

    //console.log('action.payload', action.payload.lat);

    try {
        
        yield put({ type: 'SET_COORDS', payload: action });
        
    } catch (error) {
        
    }
}

export default coordsSaga;