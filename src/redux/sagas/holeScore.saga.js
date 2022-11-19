import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* holeScore(){
    yield takeLatest('ADD_SCORE', addScore);
    yield takeLatest('BACK_HOLE', backHole);
    yield takeLatest('CLEAR_HOLE', clearHole);
};

function* addScore(action){

    // console.log('##################action.payload', action.payload);

    try {
        
        yield axios.post('SET_SCORE', payload: action.payload );
        
    } catch (error) {
        
    }
}

function* backHole(){
    try {

        yield put({ type: 'BACK_SCORE'});

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