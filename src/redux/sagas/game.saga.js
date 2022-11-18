import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* gameIdSaga(){
    yield takeLatest('FETCH_GAME_ID', fetchGameId);
};

function* fetchGameId(action){

    console.log('action.payload', action.payload);

    try {
        yield axios.post(`/api/game/id`, action.payload);
        // //console.log('map', map);
        // yield put({ type: 'SET_GAME_ID', payload: map.data });
        
    } catch (error) {
        
    }
}

export default gameIdSaga;