import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* roundHistorySaga(){
    yield takeLatest('FETCH_ROUND_HISTORY', fetchRoundHistory);
};

function* fetchRoundHistory(action){

    console.log('action.payload', action.payload);

    try {

        const response = yield axios.get(`/api/history/${action.payload}`);

        yield put({ type: 'SET_ROUND_HISTORY', payload: response.data });
        
    } catch (error) {
        
    }
}



export default roundHistorySaga;