import { put, takeLatest, } from 'redux-saga/effects';
import axios from 'axios';

function* boxscoreSaga() {
    yield takeLatest('FETCH_BOXSCORE_HISTORY', fetchBoxscoreHistory)
    yield takeLatest('ADD_BOXSCORE', addBoxscore)
    yield takeLatest('DELETE_BOXSCORE', deleteBoxscore)
    yield takeLatest('UPDATE_LIVE_GAME_BOXSCORE', updateLiveGameBoxscore)
    // yield takeLatest('FETCH_EDIT_LIVE_GAME_BOXSCORE', fetchEditLiveGameBoxscore )
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
// function* fetchEditLiveGameBoxscore(action) {
//     let idOfBoxscore = action.payload;
//     console.log('in delete boxscore', idOfBoxscore);
//     try {
//         yield axios.get(`/api/boxscore/${idOfBoxscore}`);
//         let nextAction = { type: 'SET_EDIT_LIVE_GAME_BOXSCORE_HISTORY' };
//         yield put(nextAction);
//     } catch (error) {
//         console.log('in delete error', error);
//     }
// }
function* updateLiveGameBoxscore(action) {
    let boxscore = action.payload.id;
    console.log('in UPDATE boxscore', boxscore);
    try {
        yield axios.delete(`/api/boxscore/${boxscore}`);
        // let nextAction = { type: 'FETCH_BOXSCORE_HISTORY' };
        // yield put(nextAction);
    } catch (error) {
        console.log('in delete error', error);
    }
}


function* addBoxscore(action) {
    try {
        yield axios.post('/api/boxscore', action.payload);
        const newAction = { type: 'FETCH_BOXSCORE_HISTORY' };
        yield put(newAction);
        const clearAction = { type: 'CLEAR_BOXSCORE'};
        yield put (clearAction)
    } catch (error) {
        console.log('error in addBoxscore saga', error);
    }
} // end addPlayer
function* deleteBoxscore(action) {
    let boxscore = action.payload;
    console.log('in delete boxscore', boxscore);
    try {
        yield axios.delete(`/api/boxscore/${boxscore}`);
        let nextAction = { type: 'FETCH_BOXSCORE_HISTORY' };
        yield put(nextAction);
    } catch (error) {
        console.log('in delete error', error);
    }
}


export default boxscoreSaga;