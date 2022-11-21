import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* gameIdSaga(){
    yield takeLatest('FETCH_GAME_ID', fetchGameId);
};

function* fetchGameId(action){

    console.log('action.payload', action.payload);

    try {
        yield axios.post(`/api/game`, action.payload);

        const response = yield axios.get(`/api/game/${action.payload.user_id}/${action.payload.course_id}/${action.payload.date}/${action.payload.time}`);

        console.log('REEEEEEEEESSSSPPPPMOOOOOONNNNNSSSSSSSSS', response.data);

        yield put({ type: 'SET_GAME_ID', payload: response.data });
        
    } catch (error) {
        
    }
}



export default gameIdSaga;