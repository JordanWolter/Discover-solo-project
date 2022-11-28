import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* favoriteCourse(){
    yield takeLatest('FETCH_FAVORITE', fetchFavorite)
};

function* fetchFavorite(action){

    try {
        
        yield axios.post('/api/favorite', action.payload );

        yield put({ type: 'SET_FAVORITE', payload: action.payload.roundId})
        
    } catch (error) {
        
    }
}

export default favoriteCourse;