import { combineReducers } from 'redux';

let boxscore = {
    playerName: '',
    FGA: 0,
    FGM: 0,
    THREEPA: 0,
    THREEPM: 0,
    REB: 0,
    AST: 0,
    TO: 0,
    PTS: 0,
    game_mode: null,
    player_id: null
};

const game_mode = (state = boxscore, action) => {
    if (action.type === 'UPDATE_BOXSCORE') {
        return { ...state, playerName: action.payload.playerName, game_mode: action.payload.game_mode, player_id: action.payload.player_id}
    }
    else if (action.type === 'TWO_POINT_MAKE') {
        return { ...state, FGA: boxscore.FGA += 1, FGM: boxscore.FGM += 1, PTS: boxscore.PTS += 2}
    } else if (action.type === 'TWO_POINT_MISS') {
        return { ...state, FGA: boxscore.FGA += 1,}
    }
    // if (action.type === 'UPDATE_BOXSCORE') {
    //     return { ...state, player_id: action.payload.player_id }
    // }
    // else if (action.type === 'UPDATE_PLAYERID_BOXSCORE'){
    //     return { ...state, player_id: action.payload.player_id }
    // }
    return state;

}

// const player_id = (state = boxscore, action) => {
//     if (action.type === 'UPDATE_BOXSCORE') {
//         return { ...state, player_id: action.payload.player_id }
//     }
//     return state;
// }


export default combineReducers({
    game_mode,
    // player_id,
});