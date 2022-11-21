import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* HistoryIdSaga(){
    yield takeLatest('FETCH_HISTORY_ID', fetchHistoryId);
};

function* fetchHistoryId(action){

    console.log('action.payload', action.payload);

    try {

        const response = yield axios.get(`/api/historyId/${action.payload}`);

        yield put({ type: 'SET_HISTORY_ID', payload: response.data });
        
    } catch (error) {
        
    }
}



export default HistoryIdSaga;