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
    } 
    else if (action.type === 'TWO_POINT_MISS') {
        return { ...state, FGA: boxscore.FGA += 1,}
    }
    else if (action.type === 'THREE_POINT_MAKE') {
        return { ...state, FGA: boxscore.FGA += 1, FGM: boxscore.FGM += 1, 
            THREEPA: boxscore.THREEPA += 1, THREEPM: boxscore.THREEPM += 1, PTS: boxscore.PTS += 3 }
    }
    else if (action.type === 'THREE_POINT_MISS') {
        return { ...state, FGA: boxscore.FGA += 1, 
             THREEPA: boxscore.THREEPA += 1}
    }
    else if (action.type === 'ADD_REBOUND') {
        return { ...state, REB: boxscore.REB += 1, }
    }
    else if (action.type === 'ADD_ASSIST') {
        return { ...state, AST: boxscore.AST += 1, }
    }
    else if (action.type === 'ADD_TURNOVER') {
        return { ...state, TO: boxscore.TO += 1, }
    }
    else if (action.type === 'CLEAR_BOXSCORE'){
        return boxscore
    }
    return state;
}

const boxscoreHistory = (state = [], action) => {
    if (action.type === 'SET_BOXSCORE_HISTORY') {
        return action.payload
    }
    return state;
}
export default combineReducers({
    game_mode,
    boxscoreHistory
});