import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* discSaga(){
    yield takeLatest('FETCH_DISC_TYPE', fetchDiscType);
};

function* fetchDiscType(action){

    console.log('action.payload', action.payload);

    try {

        const response = yield axios.get(`/api/disc/${action.payload.discType}/${action.payload.brandName}`);


        yield put({ type: 'SET_DISC_TYPE', payload: response.data });
        
    } catch (error) {
        
    }
}



export default discSaga;