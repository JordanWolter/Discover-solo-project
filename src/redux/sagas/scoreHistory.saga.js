import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* scoreHistorySaga(){
    yield takeLatest('FETCH_SCORE_HISTORY', fetchScoreHistory);
    yield takeLatest('DELETE_ROUND', deleteRound);
    yield takeLatest('FETCH_EDIT_ROUND', fetchEditRound);
    yield takeLatest('SAVE_ROUND', saveRound);
};

function* fetchScoreHistory(action){

    try {

        const response = yield axios.get(`/api/scoreHistory/${action.payload}`);

        yield put({ type: 'SET_SCORE_HISTORY', payload: response.data });
        
    } catch (error) {
        
    }
}

function* saveRound(action) {
    // edit
    try {
   
        yield axios.put(`/api/editRound/${action.payload.id}`, action.payload);
        
    } catch (error) {
        
    }

   
}

function* deleteRound(action){
    try {

        yield axios.delete(`/api/history/${action.payload}`);


        yield put({ type: 'SET_USER_DISC', payload: response.data });
        
    } catch (error) {
        
    }
}


function* fetchEditRound(action){

    try {

        const response = yield axios.get(`/api/editRound/${action.payload}`);

        yield put({ type: 'SET_EDIT_ROUND', payload: response.data });
        
    } catch (error) {
        
    }
}



export default scoreHistorySaga;