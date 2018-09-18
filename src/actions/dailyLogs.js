import {API_BASE_URL} from '../config';

export const DELETE_DAY = 'DELETE_DAY';
export const deleteDay = (id) => ({
    type: DELETE_DAY,
    id
});

export const GET_DAILYLOGS = 'GET_DAILYLOGS';
export const getDailyLogs = (dailyLogs) => ({
    type: GET_DAILYLOGS,
    dailyLogs
})

export const ADD_DAY = 'ADD_DAY';
export const addDay = (day) => ({
    type: ADD_DAY,
    date: day.date,
    meal1: day.meal1,
    meal2: day.meal2,
    meal3: day.meal3,
    snack: day.meal4
});

export const removeDay = (id) => (dispatch, getState) => {
    dispatch(deleteDay);
    const authToken = getState().auth.authToken;
    return (
        fetch(`${API_BASE_URL}dailylogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => {
            return res.json()
        })
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            return err
        })
    );
};

export const retrieveDailyLogs = () => (dispatch, getState) => {
    dispatch(getDailyLogs);
    const authToken = getState().auth.authToken;
    return (
        fetch(`${API_BASE_URL}/dailylogs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            return err
        })
    );
};

export const saveDay = (day) => (dispatch, getState) => {
    dispatch(addDay(day));
    const authToken = getState().auth.authToken;
    return (
        fetch(`${API_BASE_URL}/dailylogs/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({
                date: day.date,
                meal1: day.meal1,
                meal2: day.meal2,
                meal3: day.meal3,
                snack: day.snack,
            })
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            return err;
        })
    );
};
