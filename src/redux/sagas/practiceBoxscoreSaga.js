import { put, takeLatest, } from 'redux-saga/effects';
import axios from 'axios';

function* boxscoreSaga() {
    yield takeLatest('FETCH_PRACTICE_BOXSCORE_HISTORY', fetchPracticeBoxscoreHistory)
    yield takeLatest('DELETE_PRACTICE_BOXSCORE', deletePracticeBoxscore)
    yield takeLatest('UPDATE_PRACTICE_BOXSCORE', updatePracticeBoxscore)

}
function* fetchPracticeBoxscoreHistory() {
    try {
        const boxscoreResponse = yield axios.get('/api/boxscore/practice');
        const nextAction = { type: 'SET_PRACTICE_BOXSCORE_HISTORY', payload: boxscoreResponse.data };
        yield put(nextAction);
    } catch (error) {
        console.log('error in fetchPracticeBoxscoreHistory GET', error);
    }
}
function* updatePracticeBoxscore(action) {
    let boxscore = action.payload.id;
    console.log('in UPDATE PRACTICE put boxscore', boxscore);
    try {
        yield axios.put(`/api/boxscore/${boxscore}`, action.payload);
        let nextAction = { type: 'FETCH_PRACTICE_BOXSCORE_HISTORY' };
        yield put(nextAction);
    } catch (error) {
        console.log('in put error', error);
    }
}
function* deletePracticeBoxscore(action) {
    let boxscore = action.payload;
    console.log('in fetchPracticeBoxscoreHistory delete boxscore', boxscore);
    try {
        yield axios.delete(`/api/boxscore/practice/${boxscore}`);
        let nextAction = { type: 'FETCH_PRACTICE_BOXSCORE_HISTORY' };
        yield put(nextAction);
    } catch (error) {
        console.log('in fetchPracticeBoxscoreHistory delete error', error);
    }
}


export default boxscoreSaga;