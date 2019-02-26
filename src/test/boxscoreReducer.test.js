import {rootReducer}  from '../redux/reducers/index';

test('game_mode reducer should return its correct initial state', () => {
    let action = {};
    let state = undefined;
    expect(game_mode(state, action)).toBe(boxscore)
})