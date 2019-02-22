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
// change boxscore.FGA etc... to state.FGA
const game_mode = (state = boxscore, action) => {
    if (action.type === 'UPDATE_BOXSCORE') {
        return { ...state, playerName: action.payload.playerName, game_mode: action.payload.game_mode, player_id: action.payload.player_id}
    }
    else if (action.type === 'TWO_POINT_MAKE') {
        return { ...state, FGA: state.FGA + 1, FGM: state.FGM + 1, PTS: state.PTS + 2}
    } 
    else if (action.type === 'TWO_POINT_MISS') {
        return { ...state, FGA: state.FGA + 1,}
    }
    else if (action.type === 'THREE_POINT_MAKE') {
        return {
            ...state, FGA: state.FGA + 1, FGM: state.FGM + 1, 
            THREEPA: state.THREEPA + 1, THREEPM: state.THREEPM + 1, PTS: state.PTS + 3 }
    }
    else if (action.type === 'THREE_POINT_MISS') {
        return {
            ...state, FGA: state.FGA + 1, 
            THREEPA: state.THREEPA + 1}
    }
    else if (action.type === 'ADD_REBOUND') {
        return { ...state, REB: state.REB + 1, }
    }
    else if (action.type === 'ADD_ASSIST') {
        return { ...state, AST: state.AST + 1, }
    }
    else if (action.type === 'ADD_TURNOVER') {
        return { ...state, TO: state.TO + 1, }
    }
    else if (action.type === 'CLEAR_BOXSCORE'){
        console.log('IN CLEAR BOXSCORE');
        
        return boxscore
    }
    return state;
}
// const clearBoxscore = (state = [], action) => {
//     if (action.type === 'CLEAR_BOXSCORE') {
//         return boxscore 
//     }
//     return state;
// }
const boxscoreHistory = (state = [], action) => {
    if (action.type === 'SET_BOXSCORE_HISTORY') {
        return action.payload
    }
    return state;
}
const editLiveGameBoxscoreHistory = (state = [], action) => {
    if (action.type === 'SET_EDIT_LIVE_GAME_BOXSCORE_HISTORY') {
        return action.payload
    }
    return state;
}
const practiceBoxscoreHistory = (state = [], action) => {
    if (action.type === 'SET_PRACTICE_BOXSCORE_HISTORY') {
        return action.payload
    }
    return state;
}
const editPracticeBoxscoreHistory = (state = [], action) => {
    if (action.type === 'SET_EDIT_PRACTICE_BOXSCORE_HISTORY') {
        return action.payload
    }
    return state; 
}
export default combineReducers({
    game_mode,
    boxscoreHistory,
    practiceBoxscoreHistory,
    editLiveGameBoxscoreHistory,
    editPracticeBoxscoreHistory,
    // clearBoxscore
    
});