import { put, takeLatest, } from 'redux-saga/effects';
import axios from 'axios';

function* boxscoreSaga() {
    yield takeLatest('FETCH_PRACTICE_BOXSCORE_HISTORY', fetchPracticeBoxscoreHistory)
    // yield takeLatest('DELETE_BOXSCORE', deleteBoxscore)

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

// function* deleteBoxscore(action) {
//     let boxscore = action.payload;
//     console.log('in fetchPracticeBoxscoreHistory delete boxscore', boxscore);
//     try {
//         yield axios.delete(`/api/boxscore/practice/${boxscore}`);
//         let nextAction = { type: 'FETCH_PRACTICE_BOXSCORE_HISTORY' };
//         yield put(nextAction);
//     } catch (error) {
//         console.log('in fetchPracticeBoxscoreHistory delete error', error);
//     }
// }


export default boxscoreSaga;