import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* weatherSaga(){
    yield takeLatest('FETCH_WEATHER', fetchWeather);
};

function* fetchWeather(action){

    // console.log('ACTIONONOONONONOONON', action)

    try {
        const weather = yield axios.get(`/api/weather/${action.payload.lat}/${action.payload.lng}`);
        // console.log('weather', weather);
        yield put({ type: 'SET_WEATHER', payload: weather.data });
    } catch (error) {
        
    }
}

export default weatherSaga;