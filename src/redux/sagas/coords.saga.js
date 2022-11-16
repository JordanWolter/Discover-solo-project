import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* coordsSaga(){
    yield takeLatest('FETCH_COORDS', fetchCoords);
};

function* fetchCoords(action){

    console.log('##################action.payload', action.payload);

    try {
        
        yield put({ type: 'SET_COORDS', payload: action.payload });
        
    } catch (error) {
        
    }
}

export default coordsSaga;