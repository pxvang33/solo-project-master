import { put, takeLatest, } from 'redux-saga/effects';
import axios from 'axios';

function* boxscoreSaga() {
    yield takeLatest('FETCH_BOXSCORE_HISTORY', fetchBoxscoreHistory)
    yield takeLatest('ADD_BOXSCORE', addBoxscore)
}
function* fetchBoxscoreHistory() {
    try {
        const boxscoreResponse = yield axios.get('/api/boxscore');
        const nextAction = { type: 'SET_BOXSCORE_HISTORY', payload: boxscoreResponse.data };
        yield put(nextAction);
    } catch (error) {
        console.log('error in fetchBoxscoreHistory GET', error);
    }
}


function* addBoxscore(action) {
    try {
        yield axios.post('/api/boxscore', action.payload);
        const newAction = { type: 'FETCH_BOXSCORE_HISTORY' };
        yield put(newAction);
    } catch (error) {
        console.log('error in addBoxscore saga', error);
    }
} // end addPlayer


export default boxscoreSaga;