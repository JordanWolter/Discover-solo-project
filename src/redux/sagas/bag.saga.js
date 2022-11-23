import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* bagSaga(){
    yield takeLatest('ADD_TO_BAG', AddDisc);
};

function* AddDisc(action){

    console.log('action.payload', action.payload);

    try {

        yield axios.post(`/api/bag`, action.payload);


        // yield put({ type: 'SET_DISC_TYPE', payload: response.data });
        
    } catch (error) {
        
    }
}



export default bagSaga;