import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchCards = () => (dispatch) => {
	dispatch({ type: START_FETCHING });
	axios
		.get(`https://api.magicthegathering.io/v1/cards`)
		.then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data.cards }))
		.catch((err) => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
