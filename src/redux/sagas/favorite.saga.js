import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* favoriteCourse(){
    yield takeLatest('FETCH_FAVORITE', fetchFavorite);
    yield takeLatest('FETCH_FAVORITE_LIST', fetchFavoriteList)
    yield takeLatest('DELETE_FAVORITE', deleteFavorite)
};

function* deleteFavorite(action){
    console.log('IS IT HERE????????',action.payload);

    try {
        
        yield axios.delete(`/api/favorite/${action.payload.course_id}`);

        // yield put({ type: 'SET_FAVORITE_LIST', payload: response.data})
        
    } catch (error) {
        
    }
}

function* fetchFavoriteList(action){

    console.log('IS IT HERE????????',action.payload);

    try {
        
        const response = yield axios.get(`/api/favorite/${action.payload}`);

        yield put({ type: 'SET_FAVORITE_LIST', payload: response.data})
        
    } catch (error) {
        
    }
}

function* fetchFavorite(action){


    try {
        
        yield axios.post('/api/favorite', action.payload );

        yield put({ type: 'SET_FAVORITE', payload: action.payload.roundId})
        
    } catch (error) {
        
    }
}

export default favoriteCourse;