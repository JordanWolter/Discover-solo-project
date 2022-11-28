import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* holeScore(){
    yield takeLatest('FETCH_SCORE', fetchScore)
    yield takeLatest('ADD_SCORE', addScore);
    yield takeLatest('BACK_HOLE', backHole);
    yield takeLatest('CLEAR_HOLE', clearHole);
};

function* fetchScore(action){
    try {
        
        const response = yield axios.get(`/api/score/${action.payload}`);

        yield put({ type: 'SET_SCORE_LIST', payload: response.data });

    } catch (err) {
        console.log(err)
    }
}

function* addScore(action){

    try {
        
        yield axios.post('/api/score', action.payload );
        
        yield put({ type: 'FETCH_SCORE', payload: action.payload.roundId})
        
    } catch (error) {
        
    }
}

function* backHole(action){
    try {

        yield axios.delete(`/api/score/${action.payload.roundId}/${action.payload.holeNum}`);


        // yield put({ type: 'SET_USER_DISC', payload: response.data });

        yield put({ type: 'BACK_SCORE',});

    } catch (error){

    }
}


function* clearHole(){
    try{
        yield put({ type: 'CLEAR_SCORE'});
    } catch (error){
        
    }
}

export default holeScore;