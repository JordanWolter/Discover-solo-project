import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* bagSaga(){
    yield takeLatest('ADD_TO_BAG', addDisc);
    yield takeLatest('FETCH_USER_DISC', fetchUserDisc);
    yield takeLatest('DELETE_DISC', deleteDisc);
    yield takeLatest('FETCH_EDIT_DISC', fetchEditDisc);
    yield takeLatest('SAVE_DISC', saveDisc);
};

function* addDisc(action){

    console.log('action.payload', action.payload);

    try {

        yield axios.post(`/api/bag`, action.payload);
        
    } catch (error) {
        
    }
}

function* saveDisc(action) {
    // edit
    try {
        console.log('WHAT ARE YOU?', action.payload)
   
        yield axios.put(`/api/editBag/${action.payload.id}`, action.payload);
        
    } catch (error) {
        
    }

   
}

function* fetchUserDisc(action){

    console.log('action.payload', action.payload);

    try {

        const response = yield axios.get(`/api/bag/${action.payload}`);


        yield put({ type: 'SET_USER_DISC', payload: response.data });
        
    } catch (error) {
        
    }
}

function* deleteDisc(action){
    try {

        yield axios.delete(`/api/bag/${action.payload}`);


        yield put({ type: 'SET_USER_DISC', payload: response.data });
        
    } catch (error) {
        
    }
}


function* fetchEditDisc(action){

    console.log('action.payload!!!!!!!!!!!!!', action.payload);

    try {

        const response = yield axios.get(`/api/editBag/${action.payload}`);

        yield put({ type: 'SET_EDIT_DISC', payload: response.data });
        
    } catch (error) {
        
    }
}


export default bagSaga;