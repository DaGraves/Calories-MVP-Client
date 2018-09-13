import {ADD_DAY, GET_DAILYLOGS, DELETE_DAY} from '../actions/dailyLogs';

const initialState = {
    dailyLogs: [{
        date: null,
        meal1: null,
        meal2: null,
        meal3: null,
        snack: null,
    }]
};

export default function reducer(state = initialState, action) {
    if (action.type === ADD_DAY) {
        console.log(state.dailyLogs)
        return Object.assign({}, state, {
            dailyLogs: [...state.dailyLogs, {
                date: action.date,
                meal1: action.meal1,
                meal2: action.meal2,
                meal3: action.meal3,
                snack: action.snack,
            }]
        });
    }
    else if(action.type === GET_DAILYLOGS) {
        return Object.assign({}, state, {
                dailyLogs: action.dailyLogs.dailyLogs
        })
    }
    else if(action.type === DELETE_DAY) {
        return 'STATE';
    }
    return state;
}