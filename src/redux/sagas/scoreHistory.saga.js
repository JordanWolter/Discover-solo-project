import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* scoreHistorySaga(){
    yield takeLatest('FETCH_SCORE_HISTORY', fetchScoreHistory);
};

function* fetchScoreHistory(action){

    console.log('action.payload', action.payload);

    try {

        const response = yield axios.get(`/api/scoreHistory/${action.payload}`);

        yield put({ type: 'SET_SCORE_HISTORY', payload: response.data });
        
    } catch (error) {
        
    }
}



export default scoreHistorySaga;