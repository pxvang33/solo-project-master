import { put, takeLatest, } from 'redux-saga/effects';
import axios from 'axios';

function* playerSaga() {
    yield takeLatest ('FETCH_PLAYER', fetchPlayer)
    yield takeLatest('ADD_PLAYER_NAME', addPlayerName)
}
function* fetchPlayer() {
    try {
        const playerResponse = yield axios.get('/api/player');
        const nextAction = {type: 'SET_PLAYER', payload: playerResponse.data};
        yield put(nextAction);
    } catch (error) {
        console.log('error in fetchPlayer GET', error);
    }
}

function* addPlayerName(action) {
    try {
        yield axios.post('/api/player', action.payload);
        const newAction = {type: 'FETCH_PLAYER'};
        yield put(newAction);
    } catch (error) {
        console.log('error in addPlayer saga', error);
        alert("Can't add a player without a name")
    }
} // end addPlayer










export default playerSaga;